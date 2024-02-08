// Déclaration des variables.
let button           = document.querySelector('.main__button');
let img              = document.querySelector('.main__img');
let select           = document.querySelector('.main__select');
let showDog          = document.querySelector('.main__showDog');
let selectedBreed    = 'affenpinscher';
let url              = '';
img.style.display    = 'none';
button.style.display = 'none';

// On récupère la liste des races de chiens de l'API.
let urlList = 'https://dog.ceo/api/breeds/list/all';

fetch(urlList)
    .then(response => response.json())
    .then(response => {
        // On boucle sur ces résultats afin de créer des options pour le select.
        for (let property in response.message) {
            let option = document.createElement('option');
            option.value = property;
            option.text = property;
            select.add(option);
        }
    });


// On surveille les changements sur le select.
select.addEventListener('change', () => {
    selectedBreed = select.value;
});

showDog.addEventListener('click', () => {
    // On défini l'URL de l'API avec la race de chien sélectionnée.
    let url = 'https://dog.ceo/api/breed/' + selectedBreed + '/images/random';

    // On récupère l'image.
    fetch(url)
        .then(response => response.json())
        .then(response => {
            img.src = response.message;
            img.style.display    = 'block';
            button.style.display = 'block';
        });
});

// On surveille les clics sur le bouton des favoris.
button.addEventListener('click', () => {
    let favorite = document.createElement('img');
    favorite.src = img.src;
    document.querySelector('.favorites__img').appendChild(favorite);
});






// CORRECTION 


// let button = document.querySelector('#btnDog');
// let select = document.querySelector('#breedSelect');

// button.addEventListener('click', displayDog);

// onInit();
// async function onInit() {
//     const breeds = await getBreeds();
//     addBreedsToSelect(breeds);

//     // getBreeds().then(breeds => {
//     //     addBreedsToSelect(breeds);
//     // });
// };

// function setUrl() {
//     const breed = select.value;
//     if (breed != "") {
//         return "https://dog.ceo/api/breed/" + breed + "/images/random";
//     } else {
//         return 'https://dog.ceo/api/breeds/image/random';
//     };
// };

// function displayDog() {
//     const url = setUrl();
//     fetch(url)
//         .then(response => response.json())
//         .then(response => {
//                 let imageDog = document.querySelector('.contain-img');
//                 imageDog.style.backgroundImage = `url(${response.message})`;
//             });
// };

// async function getBreeds() {
//     const response = await fetch('https://dog.ceo/api/breeds/list/all');
//     const data = await response.json();
//     return data.message;

//     // fetch('https://dog.ceo/api/breeds/list/all')
//     //     .then(response => response.json())
//     //     .then(response => {
//     //         return response.message;
//     //     });
// };

// function addBreedsToSelect(breeds) {
//     for (const property in breeds) {
//         const option = document.createElement('option');
//         option.value = property;
//         option.textContent = property;
//         select.appendChild(option);
//     };
// };
