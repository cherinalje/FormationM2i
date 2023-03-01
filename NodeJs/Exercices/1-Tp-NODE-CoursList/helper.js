// const succes = (message, data) =>{
//     return{
//         message:message,
//         data:data
//     }
// }

// exports.succes;

// En ES6
exports.success = (message, data) =>{
    return{message,data}
}

// # 26-Méthode pour retourner le plus grand ID
exports.getUniqueId = (coursList) => {
    const coursIds = coursList.map(cours => cours.id);
    const maxId = coursIds.reduce((a,b)=>Math.max(a,b));
    const uniqueId = maxId + 1;
    return uniqueId;
}

exports.M2iFunction = (port, ipAddress) => {
    return `\n\n\n                             __  __ ____  _                    
                            |  \\/  |___ \\(_)                   
                            | |\\/| | __) | |                   
                            | |  | |/ __/| |                   
                 _____      |_|  |_|_____|_|    _   _             
                |  ___|__  _ __ _ __ ___   __ _| |_(_) ___  _ __  
                | |_ / _ \\| '__| '_ ' _ \\ / _' | __| |/ _ \\| '_ \\ 
                |  _| (_) | |  | | | | | | (_| | |_| | (_) | | | |
                |_|  \\___/|_|  |_| |_| |_|\\__,_|\\__|_|\\___/|_| |_|
                                       \n
                 
                 \n\t\t\tL'application node est démarée\n
                ***************************************************
                * Local\t\t:\thttp://localhost:${port}     *
                * on Network\t:\thttp://${ipAddress}:${port}  *
                ***************************************************`;
}