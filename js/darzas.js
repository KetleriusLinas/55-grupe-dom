const titleDOM = document.querySelector('title');
const h1DOM = document.querySelector('h1');
const title = 'Zuikio darzas';

h1DOM.textContent = title;
h1DOM.style.backgroundColor = 'yellow';
h1DOM.style.fontSize = '2rem';


// panaudoja po kurio laiko ir pakeicia esama reiksme
// laikrodis +- 
let time = 0;
function changeTitle() {
    time++;

    if(time % 2 === 0) {
        titleDOM.textContent = `Document (${time})`; // pridejom laika , salia rodo laika
    } else {
        titleDOM.textContent = `${title} (${time})`; // salia rodo laika, kiek pasikeite
    }
    
    if (time >= 5) {
        clearInterval(timer);
        // return ;
    }
}

// setTimeout(changeTitle, 2000);
// setInterval (changeTitle, 1000);
const timer = setInterval (changeTitle, 1000);


const liListDOM = document.querySelectorAll('li')
const vegetables = ['pomidoras', 'agurkas', 'svogunas', 'buvle', 'dobiliukai'];

// liDOM[0].textContent = vegetables[0];

let index = 0;

for (const liDOM of liListDOM) {
    liDOM.textContent = vegetables[index] ? vegetables[index] : 'error';
    // liDOM.style.backgroundColor = vegetables[index] ? 'green' : 'red';

    if (vegetables[index]) {
        liDOM.classList.add('zuikio-darzove');
    } else {
        liDOM.classList.add('zuikio-darzo-error');

    }


    // font-size js rasyti negalima (kaip css)
    // liDOM.style.backgroundColor = 'red';

    liDOM.style.fontSize = '1.2rem';
    index++;
}

