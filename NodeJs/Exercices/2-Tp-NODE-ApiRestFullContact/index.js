import cors from 'cors';
import express from 'express';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import multer from 'multer';
import bodyParser from 'body-parser';
import path from 'path';
import { M2iFunction, success, getUniqueId } from './helper.js';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import Contact from './classes/contact.js'

// import { ContactList } from './datas/ContactList.js';
let ContactList = new Array();
loadList();

// IP
import ip from 'ip';
const ipAddress = ip.address();

// EXPRESS()
const app = express();
const port = 7777;

// __DirName
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name	\ud83d\udc49 ', __dirname);

// SERVICES
app
    .use(morgan('dev'))
    .use(cors())
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
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
    .use('/static', express.static(path.join(__dirname, 'public')))
    .use(favicon(__dirname + '/favicon.ico'))
    .use(bodyParser.json())


/**
 * UPLOAD CONFIG
 */

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

const upload = multer({
    storage: storage,
})

/**
 * FUNCTION()
 */

function loadList() {
    let datas = JSON.parse(readFileSync('./datas/savedList.json', 'utf-8'));
    if (datas) {
        for (let contact of datas) {
            let tmp = new Contact(contact.id, contact.title, contact.lastname, contact.firstname, new Date(contact.dateOfBirth), contact.phone, contact.email, contact.created, contact.updated)
            ContactList.push(tmp);
        }
    }
    console.table(ContactList);
}

function saveList() {
    const objectToJson = JSON.stringify(ContactList);
    writeFileSync('./datas/savedList.json', objectToJson);
    console.log("Données sauvegardées...");
}



/**
 * END POINT
 */
app.get('/', (req, res) => res.send("Hello from NodeJs!"));

app.get('/api/contacts', (req, res) => {
    const message = `la liste contient ${ContactList.length} contact`;
    res.json(success(message, ContactList));
});

app.get('/api/contact/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const contact = ContactList.find(x => x.id === id);
    const message = "Un contact a été trouvé";
    res.json(success(message, contact));
});

app.post('/api/contact', (req, res) => {
    const id = getUniqueId(ContactList);
    const contactCreated = new Contact(id, req.body.title, req.body.firstname, req.body.lastname, req.body.dateOfBirth, req.body.phone, req.body.email, new Date());
    ContactList.push(contactCreated);
    saveList();
    const message = `Le contact ${contactCreated.firstname} ${contactCreated.lastname} a été ajouté avec l'id ${contactCreated.id}.`;
    res.json(success(message, contactCreated));
})

app.put('/api/contact/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const contactUpdated = new Contact(id, req.body.title, req.body.firstname, req.body.lastname, req.body.dateOfBirth, req.body.phone, req.body.email, req.body.created, new Date());

    ContactList = ContactList.map(contact => {
        return contact.id === id ? contactUpdated : contact;
    });
    saveList();
    const message = `Le contact ${contactUpdated.firstname} ${contactUpdated.lastname} a été modifié.`;
    res.json(success(message, contactUpdated));
})

app.delete('/api/contact/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const contactDeleted = ContactList.find(contact => contact.id === id);
    ContactList = ContactList.filter(contact => contact.id !== id);
    saveList();
    const message = `Le contact ${contactDeleted.firstname} ${contactDeleted.lastname} a été supprimé.`;
    res.json(success(message, contactDeleted));
})


app.post('/api/upload', upload.single('img'), async (req, res) => {
    console.log("import: ", `\x1b[36m${req.file.originalname}\x1b[0m` + " => " + `\x1b[36m${req.file.filename}\x1b[0m` + " in " + `\x1b[36m${req.file.destination}\x1b[0m` + " Size: " + `\x1b[36m${req.file.size}\x1b[0m` + "ko");
    try {
        let filename = req.file.filename;
        let message = `Upload OK`;
        res.json(success(message, filename));
    } catch (e) {
        res.status(400).send(e)
    }
})

app.listen(port, () => console.log(M2iFunction(port, ipAddress)));