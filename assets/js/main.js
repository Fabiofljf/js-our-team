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



/* 3. Trasformare la stringa foto in una immagine effettiva.

const unorderList = document.getElementById('user') //Richiamo il nodo principale della DOM.

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
*/

// 4. Organizzare i singoli membri in card/schede.

const rowElement = document.getElementById('row_cards') //Richiamo il nodo principale della DOM.

for (let i = 0; i < team.length; i++) {
    const person = team[i];

    //Div - Colonna
    const DIVele = document.createElement('div');
    DIVele.classList.add('col');
    rowElement.append(DIVele);

    //Div - CARD
    const divElement = document.createElement('div'); //Creo sotto-div.
    divElement.classList.add('card'); //Aggiungo classe bootstrap.
    divElement.style.width = "18rem";
    DIVele.append(divElement); // Appendo div + classe e style.

    //Img card
    const imgElement = document.createElement('img'); // Creo i sotto-nodi di div.
    imgElement.classList.add('card-img-top'); //Appendo classe boostrap.
    imgElement.src = './img/' + person.image; //Aggiungo il percorso della cartella.
    divElement.append(imgElement); // Appendo img a div.

    //DIV for TEXT-CARD
    const divElement2 = document.createElement('div'); //Creo sotto-div.
    divElement2.classList.add('card-body'); //Aggiungo classe bootstrap.
    divElement.append(divElement2);

    //H5 - NOME
    h5Element = document.createElement('h5');
    h5Element.classList.add('card-title');
    h5Element.innerHTML += person.name;
    divElement2.append(h5Element);

    //P - Ruolo
    pElement = document.createElement('p');
    pElement.classList.add('card-text');
    pElement.innerHTML += person.role;
    divElement2.append(pElement);
}



// ADD NEW MEMBER


document.getElementById('btn_add').addEventListener('click', function() {

    // 1. far scrivere all'utente un nome e memorizzarlo in una variabile.
    const userName = document.getElementById('add_name').value;
    //console.log(userName);

    // 2. far scrivere all'utente un ruolo e memorizzarlo in una variabile.
    const userRole = document.getElementById('add_role').value;

    // 3. far inserire il link di una foto
    const userImg = document.getElementById('add_img').value;

    // 4. Inserire questi dati nelle rispettive proprietà di un oggetto che pusherò nell'array team.
    const variabileAdd = {
        name: userName,
        role: userRole,
        image: userImg,
    }

    // 5. pusho l'oggetto nell'array.
    team.push(variabileAdd);
    console.log(team);

    // 6. Ripeto il ciclo

    const rowElement = document.getElementById('row_cards') //Richiamo il nodo principale della DOM.

    for (let i = 0; i < team.length; i++) {
        const person = team[i];

        console.log();
        console.log(team);
        console.log(person.name);

        if (!team.includes(person.name)) {
            //Div - Colonna
            const DIVele = document.createElement('div');
            DIVele.classList.add('col');
            rowElement.append(DIVele);

            //Div - CARD
            const divElement = document.createElement('div'); //Creo sotto-div.
            divElement.classList.add('card'); //Aggiungo classe bootstrap.
            divElement.style.width = "18rem";
            DIVele.append(divElement); // Appendo div + classe e style.

            //Img card
            const imgElement = document.createElement('img'); // Creo i sotto-nodi di div.
            imgElement.classList.add('card-img-top'); //Appendo classe boostrap.
            imgElement.src = './img/' + person.image; //Aggiungo il percorso della cartella.
            divElement.append(imgElement); // Appendo img a div.

            //DIV for TEXT-CARD
            const divElement2 = document.createElement('div'); //Creo sotto-div.
            divElement2.classList.add('card-body'); //Aggiungo classe bootstrap.
            divElement.append(divElement2);

            //H5 - NOME
            h5Element = document.createElement('h5');
            h5Element.classList.add('card-title');
            h5Element.innerHTML += person.name;
            divElement2.append(h5Element);

            //P - Ruolo
            pElement = document.createElement('p');
            pElement.classList.add('card-text');
            pElement.innerHTML += person.role;
            divElement2.append(pElement);
        }
    }

})