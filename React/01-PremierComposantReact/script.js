/**
 * Création d'un composant React
*/
const user = {
    firstname: "Anthony",
    lastname: "Di Persio"
}
function MyCompenent({user}){ // ne pas oublier les {} dans l'objet (props)
    return(
        <h2>Bonjour {user.firstname} {user.lastname}!</h2>
    )
}

function MySecondComponent(){
    return(
        <React.Fragment> <h2>
        bonjour à tous !
         </h2>
    </React.Fragment>
    )
    
}

function MyThirdComponent (user){
    return(
        <h2>Hello {formatname(user)}</h2>
    )
}

function App (){

    const user = {
        firstname: "Anthony",
        lastname: "Di Persio"
    }
    return(
        <div>
            <MyThirdComponent user={user}/>
            <MyComponent />
            <MySecondComponent firstname="Ihab" lastname="Abadi" />
        </div>
    )
}
/**
 * Rendu => Avec le composant
 */
//ReactDOM.render(<React.Fragment><MyCompenent user = {user}/><MySecondComponent/></React.Fragment> , document.getElementById('app'));
ReactDOM.render(<React.Fragment><App/></React.Fragment>, document.getElementById('app'));