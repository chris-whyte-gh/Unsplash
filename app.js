const ACCESS_KEY = "a342f70fcfd521457ea626fc8411f3b8bab43475f3a0606c72a50c1ed78aac0d";
const UNSPLASH_API = "https://api.unsplash.com/photos/random?client_id=" + ACCESS_KEY;
const imagePlaceholder = document.querySelector('.imagesContainer');

async function getImage() { //async tells us to wait for something, but not necessary because of the then functions (and nothing else is loading in this script)
    imagePlaceholder.innerHTML = ''; //clear page

    fetch(UNSPLASH_API)
        .then((response) => response.json())
        .then((json) => {console.log(json); return json;}) //console.log doesn't return anything, so have to explicitly return object
        .then(({urls}) => {

            const imageURL = urls.small;


            const imageElement = document.createElement('img');
            imageElement.src = imageURL;

            imagePlaceholder.appendChild(imageElement);
        });
}