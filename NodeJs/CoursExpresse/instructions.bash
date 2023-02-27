#création d'un projet node.js
#=>ouvrez un terminal pointant sur un dossier cible
#saisir la commande suivante
$ npm init
#reinstaller l'ensemble des dependances en une commande à partire de cours express
$ npm install

# import de la dependence  ip
$ npm install ip
# import de la dependence  express
$ npm install express
# import de la dependence  ejs
$ npm install ejs
# definitoon du fonctionnement  modulaire dans le fichier package.json
"type":"module"
#executer index.js depuis mon environnement node.js
npm index.js
#sur mon package.json
"scripts": {
    "start": "node index.js",
    ....
}
#sur mon terminal 
npm start

#installation du middleware nodemon
npm install nodemon
#désinstallation
npm uninstall nodemon
#installation de middleware nodemon dans le devdependances pour quil soit utilisé que pendant le developpement
npm install nodemon --save-dev



