import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
// __DirName
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);


// Express
const app = express();
const port = 7777;

// CONFIG EXPRESS
app
    .use(cors())
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        // authorized headers for preflight requests
        // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept',
        )
        next()
        app.options('*', (req, res) => {
            // allowed XHR methods
            res.header(
                'Access-Control-Allow-Methods',
                'GET, PATCH, PUT, POST, DELETE, OPTIONS',
            )
            res.send()
        })
    })
    .use(express.static(path.join(__dirname, 'public')))
    .use('/static', express.static(path.join(__dirname, 'public')));


/**
 * FUNCTIONS
 */

// Création du diskStorage de multer, il permet de définir notre configuration d'upload
// /!\ Créez les dossiers de destination au cas où avant l'upload
let storage = multer.diskStorage({
    // La limite en taille du fichier
    limits: {
        fileSize: 500000, //500ko
        //fileSize: 1000000, //1Mo
    },
    // La destination, ici ce sera à la racine dans le dossier img
    destination: (req, file, cb) => {
        cb(null, './public/img')
    },
    // Gestion des erreurs
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Le fichier doit etre un JPG ou PNG'))
        }
        cb(undefined, true)
    },
    // Fonction qui renomme l'image
    filename: function (req, file, cb) {
        // Genère un nom aléatoire et récupère l'ancienne extension
        cb(
            null,
            Math.random().toString(36).substring(7) +
            '.' +
            file.originalname.split('.')[1],
        )
    },
})
// Création de l'objet multer
const upload = multer({
    storage: storage,
})

/**
 * END POINTS
 */

 app.get('/', (req, res) => {
    console.log("/ : Api fonctionnelle");

    res.json({ message: "Ca Marche!!!" });
});


// Utilisation de l'objet multer en tant que middleware
// Cela veut dire qu'en premier multer va upload notre image, et qu'ensuite nous passons à la fonction de notre route /upload_image
app.post('/upload_image', upload.single('img'), async (req, res) => {
    //console.log(req);
    console.log("import: ", `\x1b[36m${req.file.originalname}\x1b[0m` + " => " + `\x1b[36m${req.file.filename}\x1b[0m` + " in " + `\x1b[36m${req.file.destination}\x1b[0m` + " Size: " + `\x1b[36m${req.file.size}\x1b[0m` + "ko");
    //capter les erreurs
    try {
        let filename = req.file.filename;
        let alt_text = req.body.alt_text;
        res.json({ error: false, message: `Upload OK`, filename: filename, alt_text: alt_text });
    } catch (e) {
        res.status(400).send(e)
    }
})


app.listen(port, () => console.log("http://localhost:7777"));