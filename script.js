let button = document.querySelector('.main__button');
let img    = document.querySelector('.main__img');

img.style.display = 'none';

let url = 'https://dog.ceo/api/breeds/image/random';

button.addEventListener('click', () => {

    if (img.style.display === 'none') {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            img.src = response.message;
            img.style.display = 'block';
            button.textContent = 'Faire disparaitre le chien.';

        });
    } else {
        img.style.display = 'none';
        button.textContent = 'Faire apparaître un chien.';
    }


});
