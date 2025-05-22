import {header} from './header.js';
header();

const appDOM = document.getElementById ('app');

appDOM.innerHTML = `
    <div class="board">
        <div class="team">
            <div class="result">0</div>
            <p class="home">Namai</p>
            <div class="actions">
                <button type="button">+1</button>
                <button type="button">+2</button>
                <button type="button">+3</button>
            </div>
        </div>
        <div class="team">
            <div class="result">0</div>
            <p class="away">Sveciai</p>
            <div class="actions">
                <button type="button">+1</button>
                <button type="button">+2</button>
                <button type="button">+3</button>
            </div>
        </div>
    </div>
    <div class="history">
        <div class="entry home">Pirma komanda pelne 1 taska.</div>
        <div class="entry away">Pirma komanda pelne 2 taskus.</div>
    </div>
`;

const [homeResultDOM, awayResultDOM] = appDOM.querySelectorAll('.result')
// const resultsDOM = appDOM.querySelectorAll('.result');
// const homeResultDOM = resultsDOM[0];
// const awayResultDOM = resultsDOM[1];
// console.log(resultsDOM);

const [home1, home2, home3, away1, away2, away3] = appDOM.querySelectorAll('button');
const historyDOM = appDOM.querySelector('.history');