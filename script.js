let button        = document.querySelector('.main__button');
let img           = document.querySelector('.main__img');
let select        = document.querySelector('.main__select');
let selectedBreed = '';
img.style.display = 'none';


let urlList = 'https://dog.ceo/api/breeds/list/all';

fetch(urlList)
    .then(response => response.json())
    .then(response => {
        for (let propriete in response.message) {
            let option = document.createElement('option');
            option.value = propriete;
            option.text = propriete;
            select.add(option);
        }
    });



select.addEventListener('change', () => {
    selectedBreed = select.value;

    let url = 'https://dog.ceo/api/breed/' + selectedBreed + '/images/random';

    fetch(url)
        .then(response => response.json())
        .then(response => {
            img.src = response.message;
            img.style.display = 'block';
        });
});
