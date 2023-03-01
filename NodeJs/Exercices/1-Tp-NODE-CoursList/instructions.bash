# 1-Créer un fichier app.js
console.log("Hello from NodeJs!");

# 2-Executer le fichier avec le terminal
$ node app.js

# 3-Initialiser le fichier package.json et les nodes modules
$ npm init

# 4-Remplacer le script "test" par "start"
"scripts": {
    "start": "node app.js"
},

# 5-Executer la commande
$ npm run start

# 6-Instalation de 'express'
$ npm install express --save

# 7-Modifier le fichier app.js
const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req,res)=> res.send("Hello from NodeJs!"));

app.listen(port, ()=>console.log(`L application node est demarée sur : http://localhost:${port}`));

# 8-Executer la commande et ouvrir le navigateur
$ npm run start

# 9-Installation de nodemon (permet de ne pas avoir a redemarrer le server apres les modifications)
$ npm install nodemon --save-dev # --save-dev => voir dans le fichier package.json
$ npm install --production

# 10-Modifier le script "start"
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
},

# 11-Executer la commande et ouvrir le navigateur (modifier le fichier app.js, sauvegarder puis rafraichir le navigateur)
$ npm run start

# 12-Création d'un entry point pour notre api, rajouter (dans app.js)
app.get('/api/cours/1',(req,res)=> res.send("Welcome to JS cours!")); # ctrl + s puis rafraichier le navigateur

# 13-Visiter la route 
http://localhost:3000/api/cours/1 # retourne Welcome to JS cours!

# 14-Recupération des params de route pour l'id (modification de notre route précedente V1 => V2)
app.get('/api/cours/:id',(req,res)=> {
    const id = req.params.id; # Permet de recupérer le parametre id
    res.send(`Welcome to cours ${id}!`);
});

# 15-Il est possible de recupération des params de route pour l'id et de nom (V3)
app.get('/api/cours/:id/:name',(req,res)=> {
    const id = req.params.id; # Permet de recupérer le parametre id
    const name = req.params.name; # Permet de recupérer le parametre name
    res.send(`Welcome to cours N°${id} : ${name}`);
});

# 16-Revenir sur la V2 et modifier (importer la coursList)
app.get('/api/cours/:id',(req,res)=> {
    const id = parseint(req.params.id);  
    //console.table(coursList);
    const cours = coursList.find(x => x.id === id);    
    //console.log(cours);                                                             // V4
    //res.send(`Welcome to ${cours.name} cours !`);
    res.send(cours);
});

# 17-EXERCICES => Mettre en place une route /api/cours qui retournera le nombre de formation contenue dans la liste
app.get('/api/cours',(req,res)=> {
    res.send(`Il y a ${coursList.length} cours dans notre catalogue de formation`);
});

# 18-Revenir sur la V4 et modifier pour retourner du JSON (res.json())
app.get('/api/cours/:id',(req,res)=> {
    const id = parseint(req.params.id);     
    const cours = coursList.find(x => x.id === id);                                                             // V5
    res.json(cours);
});

# 19-Installer JSON Viewer pour chrome afin d'optimiser l'affichage JSON dans le navigateur puis refaire la requete /api/cours/1
https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh


# 20-Ajout du status de la requete dans la response
1-Création du fichier helpers.js ( demo 2 syntaxes )
    
    # En ES 5 
    const succes = (message, data) =>{
        return{
            message:message,
            data:data
        }
    }

    exports.succes;

    # En ES6
    exports.success = (message, data) =>{
        return{message,data}
    }

2-Création dans App.js :
    const helper = require('./helper.js'); // # Au début du fichier
    const message = "Un cours a été trouvé"; //# dans Api cours list V5


# 21-Exercice =>Modifier le end point /api/cours afin qu'il retourne la liste des formations au format JSON
app.get('/api/cours',(req,res)=> {
    const message = `la liste contient ${coursList.length} cours`;
    res.json(succes(message,coursList));
});

# 22-Création d'un middleware (Logger) permettant de faires des log dans la console
const logger = (req,res,next)=>{
    console.log(`URL : ${req.url}`);
    next();
}
app.use(logger);

# Simplifiable en :
app.use((req,res,next)=>{
    console.log(`URL : ${req.url}`);
    next();
});

# 23-Installation d'un middleware deja existant => Morgan (log dans la console)
$ npm install morgan --save-dev

# puis ajouter dans app.js
const morgan = require('morgan');
app.use(morgan('dev'));

# 24-Installation d'un middleware deja existant => serve-favicon (pour retourner un favicon)
$ npm install serve-favicon --save
# Puis ajouter dans app.js
const favicon = require('serve-favicon');
app
 .use(favicon(__dirname+'/favicon.ico')) # l'ordre des middleware est important
 .use(morgan('dev'));

###
# POST
###

 # 25-Post d'un cours (génére un pb de récupération du body => fix #28)
 app.post('/api/cours',(req,res)=>{
     const id = coursList.length+1;
     const coursCreated = {...req.body, ...{id:id, created : new Date()}};
     coursList.push(coursCreated);
     const message = `Le cours ${coursCreated.name} à bien été ajouté.`;
     res.json(success(message,coursCreated));
 })

# 26-Méthode pour retourner le plus grand ID (dans Helpers.js)
exports.getUniqueId = (coursList) => {
    const coursIds = coursList.map(cours => cours.id);
    const maxId = coursIds.reduce((a,b)=>Math.max(a,b));
    const uniqueId = maxId + 1;
    return uniqueId;
}

# 27-Ne pas oublier l'import pour utiliser la méthode
const {succes, getUniqueId} = require('./helper.js'); // # 20
# Modification
app.post('/api/cours',(req,res)=>{
     const id = getUniqueId(coursList); # utilisation de la méthode getUniqueId()
     const coursCreated = {...req.body, ...{id:id, created : new Date()}};
     coursList.push(coursCreated);
     const message = `Le cours ${coursCreated.name} à bien été ajouté.`;
     res.json(success(message,coursCreated));
 })

# 28-Import de body parser pour parser en JSON L'ensemble des requêtes
$  npm install body-parser --save

# 29-Import du middelware body pardser et réessayer dans postman pour le post
const bodyParser = require('body-parser');

###
# PUT => UPDATE
###

# 30-UPDATE d'un cours
app.put('/api/cours/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const coursUpdated = {...req.body, id:id}
    coursList = coursList.map(cours=>{
        return cours.id === id ? coursUpdated : cours;
    });
    const message = `Le cours ${coursUpdated.name} a été modifié.`
    res.json(success(message,coursUpdated));
})

###
# DELETE 
###

# 31-DELETE d'un cours
app.delete('/api/cours/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const coursDeleted  = coursList.find(cours => cours.id === id);
    coursList = coursList.filter(cours => cours.id!==id);
    const message = `Le cours ${coursDeleted.name} a été supprimé.`
    res.json(success(message,coursDeleted));
})

###
# JSON LIST => IMPORT DU MODULE FILESYNC
#               Utiliser une requete avec toutes les formations dans postman pour créer le fichier './data/savedList.json'
###

# 32-Import des méthdes readFileSync, writeFileSync du module FileSystem de node.js
const {readFileSync, writeFileSync} = require('fs');

# 33-Création du lien vers fichier .JSON (commentaire ligne 10 => let coursList = require('./datas/CoursList');)
const coursList = JSON.parse(readFileSync('./datas/saveList.json','utf-8'));

# 34-Création de la fonction SaveList()
function saveList(){
    const objectToJson = JSON.stringify(coursList);
    writeFileSync('./datas/savedList.json', objectToJson);
    console.log("Données sauvegardées...");
}

# 35-Ajout de la fonction saveList() dans toutes les actions POST,PUT,DELETE

# POST
app.post('/api/cours', (req, res) => {
    const id = getUniqueId(coursList);
    const coursCreated = { ...req.body, ...{ id: id, created: new Date() } };
    coursList.push(coursCreated);     
    saveList(); ## Ajout ICI                                                   // V2
    const message = `Le cours ${coursCreated.name} a été ajouté.`;
    res.json(success(message, coursCreated));
})

# PUT
app.put('/api/cours/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const coursUpdated = {...req.body, ...{id:id,created: new Date()}}
    coursList = coursList.map(cours=>{
        return cours.id === id ? coursUpdated : cours;
    });
    saveList(); ## Ajout ICI   
    const message = `Le cours ${coursUpdated.name} a été modifié.`;
    res.json(success(message,coursUpdated));
})

# DELETE
app.delete('/api/cours/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const coursDeleted  = coursList.find(cours => cours.id === id);
    coursList = coursList.filter(cours => cours.id!==id);
    saveList(); ## Ajout ICI  
    const message = `Le cours ${coursDeleted.name} a été supprimé.`;
    res.json(success(message,coursDeleted));
})

# 36 Installation de cors

###
# CORS
###

# Instalation du package
$ npm i cors

# Utilisation
let cors = require("cors");
app.use(cors());


# 37 Installation de IP

###
# PUBLIC-IP
###

# Installation du package 
$ npm install ip --save

# Utilisation
var get_ip = require('ipware')().get_ip;
app.use(function(req, res, next) {
     var ip_info = get_ip(req); 
     console.log(ip_info); ##// { clientIp: '127.0.0.1', clientIpRoutable: false } 
     next(); });

# 38 Static Folder

###
# STATIC FOLDER
###

# Instalation du package Path
$ npm install path

# Import de path
const path = require ('path');

# Config
  .use(express.static(path.join(__dirname, 'public')))
  .use('/static', express.static(path.join(__dirname, 'public')))


# 39 Install Multer

###
# INSTALL MULTER
###

# Package
$ npm install multer

# Import
const multer = require('multer');

###
# UPLOAD CONFIG (multer)
###

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

# 40 END POINT POUR UPLOAD IMAGE 

###
# END POINT POUR UPLOAD IMG
###
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