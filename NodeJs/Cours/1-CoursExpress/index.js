import express from 'express';
import {success} from './helper.js';
import ip from 'ip';

/**
 * CONFIG EXPRESS
 */
// Création d'un instance de Express
const app = express();
// Définir le port d'écoute du serveur
const port = 7777;

// http://localhost:7777/autreroute

// Création d'une instance de Ip
const ipAddress = ip.address();

// Parametre de Express => utilisation du stancard Json
app.use(express.json());

// Création d'un tableau pour stocker le données à retourner
let data = [{
    "category": "Reférencement",
    "name": "SEO Premium",
    "difficulte": 3,
    "price": 249,
    "id": 1,
    "created": "2019-06-16T16:54:46.308Z"
},
{
    "category": "Langage de programmation",
    "name": "C#",
    "difficulte": 4,
    "price": 299,
    "id": 2,
    "created": "2019-06-16T16:54:56.308Z"
},
{
    "category": "Langage de programmation",
    "name": "JavaScript",
    "difficulte": 3,
    "price": 199,
    "id": 3,
    "created": "2019-06-16T16:55:06.308Z"
},
{
    "category": "Langage de programmation",
    "name": "HTML/CSS",
    "difficulte": 2,
    "price": 149,
    "id": 4,
    "created": "2019-06-16T16:55:16.308Z"
},
{
    "category": "FrameWork",
    "name": "React",
    "difficulte": 3,
    "price": 299,
    "id": 5,
    "created": "2019-06-16T16:55:26.308Z"
},
{
    "category": "FrameWork",
    "name": "Vue.Js",
    "difficulte": 2,
    "price": 299,
    "id": 6,
    "created": "2019-06-16T16:55:36.308Z"
},
{
    "category": "FrameWork",
    "name": "Angular",
    "difficulte": 4,
    "price": 299,
    "id": 7,
    "created": "2019-06-16T16:55:46.308Z"
},
{
    "category": "Outils collaboratifs",
    "name": "Git",
    "difficulte": 3,
    "price": 199,
    "id": 8,
    "created": "2019-06-16T16:55:56.308Z"
},
{
    "category": "FrameWork",
    "name": "Sass",
    "difficulte": 3,
    "price": 149,
    "id": 9,
    "created": "2019-06-16T16:56:06.308Z"
}]
/**
 * END POINTS
 */

/**
 * GET
 */

// Si la route "/" est viditée (la racine de notre app)
app.get('/', (request, response) => {
    response.end("<h1>Hello from my node server!</h1>");
})

app.get('/autreroute', (request, response) => {
    response.end("<h1>Hello from my new ENDPOINT!</h1>");
})

app.get('/data',(req,res)=>{
    res.json(data)
})

app.get('/data/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const cours = data[id-1];
    let message = cours? "Un cours à été trouvé" : "Ce cours n'éxiste pas!";
    res.json(success(message,cours));
})

app.get('/multiparams/:name/:age',(req,res)=>{
    let nom = req.params.name;
    let age = parseInt(req.params.age)
    res.send(`Bonjour ${nom}! Vous avez ${age}ans.`)
})

/**
 * POST
 */
// http://localhost:7777/endpost

// Body:
// {
//     "firstname" : "Anthony",
//     "lastname" : "Di Persio"
// }



app.post('/endpost', (req, res) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    res.send(`<h1>Mr ${firstname} ${lastname}</h1>`);
})

/**
 * PUT
 */
// Body:
// {
//     "firstname" : "Anthony",
//     "lastname" : "Di Persio"
// }

// http://localhost:7777/update/5
app.put('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    const message = `Vous avez choisi le ENDPOINT UPDATE (Put) et le parametre de route est ${id} et le body contient ${firstname} ${lastname}`;
    res.send(message);
})

/**
 * DELETE
 */
// http://localhost:7777/delete/15
app.delete('/delete/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const message = `L'objet ${id} a été supprimé.`;
    res.send(message);
})


/**
 * SERVEUR
 */

// Ecoute du port serveur
app.listen(port, () => console.log("Ip : " + ipAddress))