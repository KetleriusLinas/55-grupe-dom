import { header } from "./header.js";
header();

document.querySelector('title').textContent = 'Spalvos';

const colors = ['yellow', 'red', 'green', 'lightblue', 'orange', 'aqua'];
const ulDOM = document.querySelector('.colors');

ulDOM.innerHTML = ''; // pasalinam esama seksta

for (const color of colors) {
    ulDOM.innerHTML += `<li style = "background-color: ${color}";>Spalva: ${color}</li>`;

}

// ulDOM.innerHTML = `<li style = "background-color: ${colors[0]}";>Spalva: ${colors[0]}</li>`;
// ulDOM.innerHTML += `<li style = "background-color: ${colors[1]}";>Spalva: ${colors[1]}</li>`;
// ulDOM.innerHTML += `<li style = "background-color: ${colors[2]}";>Spalva: ${colors[2]}</li>`;
// ulDOM.innerHTML += `<li style = "background-color: ${colors[3]}";>Spalva: ${colors[3]}</li>`;
