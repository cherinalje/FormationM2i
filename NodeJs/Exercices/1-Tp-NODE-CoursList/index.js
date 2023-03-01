//console.log("Hello from NodeJs!");
const cors = require('cors');
const express = require('express');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const { success, getUniqueId ,M2iFunction} = require('./helper.js'); // # 20 puis # 27
const bodyParser = require('body-parser'); // # 29
const { json } = require('express');
// let coursList = require('./datas/CoursList'); # 33 (Commenté)
const { readFileSync, writeFileSync } = require('fs'); // #32
const { Server } = require('http');
let coursList = JSON.parse(readFileSync('./datas/savedList.json', 'utf-8')); // # 33
const path = require('path');
const multer = require('multer');
//console.log(coursList);

// STATIC
// __DirName
//const __filename = fileURLToPath(meta);

// 👇️ "/home/john/Desktop/javascript"
//const __dirname = path.dirname(__filename);
console.log('directory-name	\ud83d\udc49 ', __dirname);

// IP
const ip = require('ip');
const ipAddress = ip.address();

// EXPRESS()
const app = express();
const port = 7777;


// #34
function saveList() {
    const objectToJson = JSON.stringify(coursList);
    writeFileSync('./datas/savedList.json', objectToJson);
    console.log("Données sauvegardées...");
}


// // Middleware Logger #22
// const logger = (req,res,next)=>{
//     console.log(`URL : ${req.url}`);
//     next();
// }
// app.use(logger);

// // Simplification Middleware Logger #22
// app.use((req,res,next)=>{
//     console.log(`URL : ${req.url}`);
//     next();
// });



// Installation d'un middleware existant (morgan) #23 et ajout de serve-favicon #24 et ajout body-parser # 29
app
    .use(cors())
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())
    .use(express.static(path.join(__dirname, 'public')))
    .use('/static', express.static(path.join(__dirname, 'public')));

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
            "logo-" +
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
 * END POINTS
 */

app.get('/', (req, res) => res.send("<h1>Hello from NodeJs!</h1>"));

//// Création d'une route
// app.get('/api/cours/1',(req,res)=> res.send("Welcome to JS cours!"));              // V1

// // Création d'une route avec param id dynamique
// app.get('/api/cours/:id',(req,res)=> {
//     const id = req.params.id;                                                      // V2
//     res.send(`Welcome to cours ${cours.name}!`);    
// });

// // Création d'une route avec params id et name dynamiques
// app.get('/api/cours/:id/:name',(req,res)=> {
//     const id = req.params.id;                                                      // V3
//     const name = req.params.name; 
//     res.send(`Welcome to cours N°${id} : ${name}`);
// });

// // Api coursList V4
// app.get('/api/cours/:id',(req,res)=> {
//     const id = parseInt(req.params.id);  
//     //console.table(coursList);
//     const cours = coursList.find(x => x.id === id);    
//     //console.log(cours);                                                             // V4
//     //res.send(`Welcome to ${cours.name} cours !`);
//     res.send(cours);
// });



// // Réponse Exercice Point 17 = Mettre en place un end point retournant le nombre de formation dans coursList
// app.get('/api/cours',(req,res)=> {
//     res.send(`Il y a ${coursList.length} cours dans notre catalogue de formation`);
// });

// Réponse Exercice Point 21 = Mettre en place un end point retournant la liste des formations au format JSON
app.get('/api/cours', (req, res) => {
    const message = `la liste contient ${coursList.length} cours`;
    res.json(success(message, coursList));
});



// Api coursList V5
app.get('/api/cours/:id', (req, res) => {
    const id = parseInt(req.params.id);                                                 // V5
    const cours = coursList.find(x => x.id === id);
    const message = "Un cours a été trouvé";// # 20                            
    res.json(success(message, cours));
});

// // # 25-Post d'un cours 
// app.post('/api/cours',(req,res)=>{
//     const id = coursList.length+1; 
//     const coursCreated = {...req.body, ...{id:id, created : new Date()}};
//     coursList.push(coursCreated);                                                        // V1
//     const message = `Le cours ${coursCreated.name} à été ajouté.`;
//     res.json(success(message,coursCreated));
// })

// // # 27-Post d'un cours 
// app.post('/api/cours', (req, res) => {
//     const id = getUniqueId(coursList);
//     const coursCreated = { ...req.body, ...{ id: id, created: new Date() } };
//     coursList.push(coursCreated);
//     saveList(); // Seulement # 33                                                   // V2
//     const message = `Le cours ${coursCreated.name} a été ajouté.`;
//     res.json(success(message, coursCreated));
// })

// # 30-Update d'un cours
app.put('/api/cours/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const coursUpdated = { ...req.body, ...{ id: id, updated: new Date() } }
    coursList = coursList.map(cours => {
        return cours.id === id ? coursUpdated : cours;
    });
    saveList(); // Seulement # 33  
    const message = `Le cours ${coursUpdated.name} a été modifié.`;
    res.json(success(message, coursUpdated));
})

// # 31-Delete d'un cours
app.delete('/api/cours/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const coursDeleted = coursList.find(cours => cours.id === id);
    coursList = coursList.filter(cours => cours.id !== id);
    saveList(); // Seulement # 33  
    const message = `Le cours ${coursDeleted.name} a été supprimé.`;
    res.json(success(message, coursDeleted));
})

// 
app.post('/api/cours', upload.single('img'), async (req, res) => {
    console.log("import: ", `\x1b[36m${req.file.originalname}\x1b[0m` + " => " + `\x1b[36m${req.file.filename}\x1b[0m` + " in " + `\x1b[36m${req.file.destination}\x1b[0m` + " Size: " + `\x1b[36m${req.file.size}\x1b[0m` + "ko");
    //console.log(req);
    try {
        let filename = "/img/" + req.file.filename;
        const id = getUniqueId(coursList);
        const coursCreated = { ...req.body, ...{ id: id, urlImg: filename, created: new Date() } };
        console.log(coursCreated);
        coursList.push(coursCreated);
        saveList();                                           
        const message = `Le cours ${coursCreated.name} a été ajouté avec son image.`;
        res.json(success(message, coursCreated));
    } catch (e) {
        res.status(400).send(e)
    }

})

app.post('/api/upload', upload.single('img'), async (req, res) => {
    console.log("import: ", `\x1b[36m${req.file.originalname}\x1b[0m` + " => " + `\x1b[36m${req.file.filename}\x1b[0m` + " in " + `\x1b[36m${req.file.destination}\x1b[0m` + " Size: " + `\x1b[36m${req.file.size}\x1b[0m` + "ko");
    //console.log(req);
    try {
        let filename = "/img/" + req.file.filename;
        const message = `L'image a été ajoutée.`;
        res.json(success(message, filename));
    } catch (e) {
        res.status(400).send(e)
    }

})

app.listen(port, () => console.log(M2iFunction(port, ipAddress)));