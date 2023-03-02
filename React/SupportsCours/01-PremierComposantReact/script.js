/**
 * Création d'un composant React
*/
const user = {
    firstname: "Anthony",
    lastname: "Di Persio"
}
function MyCompenent(){
    return(
        <h2>Bonjour à Tous!</h2>
    )
}
/**
 * Rendu => Avec le composant
 */
ReactDom.render(<MyCompenent/>,document.getElementById('app'));