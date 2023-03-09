## Installation des packages FontAwesome
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm install --save @fortawesome/free-solid-svg-icons
$ npm install --save @fortawesome/free-regular-svg-icons
$ npm install --save @fortawesome/react-fontawesome

## Dans le composant qui souhaite utiliser les icons Font Awesome :
## 1) Faire l'import de la balise fontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

## 2) Importer les icons souhaités
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

## 3) Utiliser la balise avec votre icon importé
<FontAwesomeIcon icon={faCheckSquare} />
<FontAwesomeIcon icon={faCoffee} />
<FontAwesomeIcon icon={faEnvelope} />