// Déclaration des variables.
let button        = document.querySelector('.main__button');
let img           = document.querySelector('.main__img');
let select        = document.querySelector('.main__select');
let selectedBreed = '';
img.style.display = 'none';

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

    // On défini l'URL de l'API avec la race de chien sélectionnée.
    let url = 'https://dog.ceo/api/breed/' + selectedBreed + '/images/random';

    // On récupère l'image.
    fetch(url)
        .then(response => response.json())
        .then(response => {
            img.src = response.message;
            img.style.display = 'block';
        });
});
