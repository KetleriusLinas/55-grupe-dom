import { header } from "./header.js";
header();

const h1DOM = document.querySelector('h1');
const formDOM = document.forms[0];
const inputDOM = document.getElementById('task');
const listDOM = document.querySelector('.list');

let count = 0;
let deletedCount = 0;

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    //eiliskumas nuo 1 iki ...
    listDOM.innerHTML = ` 
        <div class="item">
            <div class="header">
                <div class="index">${++count}</div>
                <button class="btn" type="button">Delete</button>
            </div>
            <div class="content">${inputDOM.value}</div>
        </div>` + listDOM.innerHTML; // apkeitem turini ... iki 1

    // isvarlo search bara po panaudojimo
    inputDOM.value = '';
    // sufocusuoja atgal i serach bara
    inputDOM.focus();
    const deleteBtnListDOM = document.querySelectorAll('.btn');

    for (const btnDOM of deleteBtnListDOM) {
        btnDOM.addEventListener('click', () => {
            btnDOM.parentNode.parentNode.remove();
            // istrina is task planerio 
            deletedCount++;
            h1DOM.textContent = `Task planner (${count - deletedCount})`;

        });
    }

    h1DOM.textContent = `Task planner (${count - deletedCount})`;

});