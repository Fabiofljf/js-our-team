const team = [{
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//console.log(typeof team); //Tipo di array.
// console.log(team); //Array totale.
// console.log(team.name); //Undefined.



/* 1. Stampare su console le informazioni di nome, ruolo e la stringa della foto.
for (let i = 0; i < team.length; i++) {
    const person = team[i];

    console.log(person); // Singole persone all'interno dell'array. Complete di tutte le info.
    console.log(person.name); //Singoli nomi delle persone all'interno dell'array.
    console.log(person.role); //Singoli ruoli delle persone all'interno dell'array.
    console.log(person.image); //Singole img delle persone all'interno dell'array.
}
*/



/* 2. Stampare le stesse informazioni su DOM sottoforma di stringhe.
const unorderList = document.getElementById('user') //Richiamo il nodo principale della DOM.

for (let i = 0; i < team.length; i++) {
    const person = team[i];
    //console.log(person); // Singole persone all'interno dell'array. Complete di tutte le info.
    const listItem = document.createElement('li'); //Creo i nodi della DOM in cui stampo i dati.
    listItem.innerHTML += person.name + ", " + person.role + ", " + person.image //Aggiungo i dati (nome e ruolo).
    unorderList.append(listItem); //Appendo i nodi nell'HTML.
}
*/


const unorderList = document.getElementById('user') //Richiamo il nodo principale della DOM.

// 3. Trasformare la stringa foto in una immagine effettiva.
for (let i = 0; i < team.length; i++) {
    const person = team[i];
    //console.log(person); // Singole persone all'interno dell'array. Complete di tutte le info.
    const listItem = document.createElement('li'); //Creo i nodi della DOM in cui stampo i dati.
    const imgElement = document.createElement('img'); // Creo i sotto-nodi della DOM.
    //console.log(imgElement);
    imgElement.src = './img/' + person.image; //Aggiungo il percorso della cartella.
    //console.log(imgElement);
    listItem.append(imgElement); //Appendo img ai li.
    listItem.innerHTML += person.name + ", " + person.role //Aggiungo i dati (nome e ruolo).
    unorderList.append(listItem); //Appendo i nodi nell'HTML.
}