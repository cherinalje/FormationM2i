/**
 * Création d'un élément React (JSX)
 */

const user = {
    firstname:"Anthony",
    lastname:"Di Persio"
}

function MyComponent(){
    return(
        <h2>Bonjour à Tous!</h2>
    )
}

/**
 * Rendu => Avec le composant
 */

ReactDOM.render(<MyComponent/>, document.getElementById('app'));