const btnValider = document.querySelector('#btnValider');
const chkValider = document.querySelector('#chkValider');
const result = document.querySelector('#result');
const result2 = document.querySelector('#result2');
const magic = document.querySelector('#magic');

function radioButton() {
    // 1ere solution avec document.querySelector('input[name=choix]:checked').value
    let affichage = "<ul><li> 1ere solution : " + document.querySelector('input[name=choix]:checked').value + "</li>";
    console.log(document.querySelector('input[name=choix]:checked').value);

    // 2eme solution avec getElementsByName
    const radios = document.getElementsByName('choix');
    let valeur;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            affichage += "<li> 2eme solution (boucle for) : " + radios[i].value + "</li>";
            valeur = radios[i].value;
        }
    }
    console.log(valeur);
    for (const radio of radios) {
        if (radio.checked) {
            affichage += "<li> 2eme solution (for... of) : " + radio.value + "</li>";
            valeur = radio.value;
        }
    }
    console.log(valeur);

    // 3eme Solution avec l'id    
    valeur = "";
    if (document.getElementById('choix1').checked) {
        affichage += "<li> 3eme solution : " + document.getElementById('choix1').value; + "</li></ul>";
        valeur = document.getElementById('choix1').value;
    }
    else if (document.getElementById('choix2').checked) {
        affichage += "<li> 3eme solution : " + document.getElementById('choix2').value + "</li></ul>";
        valeur = document.getElementById('choix2').value;
    }
    else if (document.getElementById('choix3').checked) {
        affichage += "<li> 3eme solution : " + document.getElementById('choix3').value + "</li></ul>";
        valeur = document.getElementById('choix3').value;
    }
    console.log(valeur);
    result.innerHTML = affichage;
}

magic.addEventListener('click', () => {
    radioButton();
})

btnValider.onclick = () => {
    radioButton();
}
chkValider.onclick = () => {
    // Solution avec getElementsByName
    const checkBoxs = document.getElementsByName('langage');
    //console.table(checkBoxs);
    let valeur = [], index = 0, display = "";
    
    for (let i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked) {
            display += `<tr>
                <td>${index}</td>
                <td>${checkBoxs[i].value}</td>    
            <tr>`;
            valeur.push(checkBoxs[i].value);
            index++;
        }
    }
    result2.innerHTML = display;
    console.table(valeur);
}