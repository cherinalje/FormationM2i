import express from "express";
//import 'express' depuis la librairie node_modules

import ip from "ip";
//import 'ip' depuis la librairie node_modules



// création d'une instance de express
const app = express()
//définir le port d'écoute du serveur (choix arbitraire du formateur)
const port = 7777;

//http://localhost:7777/

//création d'une instance de ip
const ipAdress = ip.address();
//paramettre de express => utilisation du standart json
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
//si la route "/" est visitée (la racine de notre app)
app.get('/', (request, response) => {
    response.end("<h1>hello from my node new server ! </h1>");
})
//http://localhost:7777/autreroute
app.get('/autreroute', (request, response) => {
    response.end("<h1>hello from my new ENDPOINTS ! </h1>")

})

/**
 * Post
 */
app.post('/endPost', (req, res) => {
    // response.end("<h1>hello from my new ENDPOINTS ! </h1>")
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    res.send(`<h1>Mr ${firstname} ${lastname} </h1>`);
})
//http://localhost:7777/endPost

/**
 * Input
 */
//http://localhost:7777/update/:id (donner une valeur à :id dans url postman)
app.put('/update/:id', (req, res) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    const id = parseInt(req.params.id)
    const message = `Vous avez choisi le ENDPOINT UPDATE (put) et le parametre de route est:  ${id} et le body contient ${firstname} ${lastname}`;
    res.send(message);
})


/**
 * delete
 */
//http://localhost:7777/delete/:id (donner une valeur à :id dans url postman)
app.delete('/delete/:id', (req, res) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    const id = parseInt(req.params.id)
    const message = `l'objet ${id} a été supprimé  `;
    res.send(message);
})

/**
 * data
 */

//http://localhost:7777/data
app.get('/data', (req,res)=> {
    res.json(data);
})



/**
 * exercice
 */
//http://localhost:7777/data/:id
app.get('/data/:id', (req, res) => {
    
    const id = parseInt(req.params.id)
    
    res.json(data[id-1])

})
/**
 * SERVEUR
 */





//instance de serveur
app.listen(port, () => console.log("Ip: " + ipAdress))