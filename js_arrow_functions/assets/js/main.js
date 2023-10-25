"use strict";

// ===================================================
//      JS-Vertiefung – Arrow Functions Level_1_1
// ===================================================

console.log("%c JS-Vertiefung – Arrow Functions Level_1_1", "color: tomato");

function intro1() {
	console.log('Hello Function');
}

intro1();

const beispiel = () => {
	console.log('Hello Arrow-Function');
}

beispiel();

const beispiel2 = () => console.log('Hello Short Arrow-Function');

beispiel2();


// ===================================================
//      JS-Vertiefung – Arrow Functions Level_1_2
// ===================================================

console.log("%c JS-Vertiefung – Arrow Functions Level_1_2", "color: tomato");

// Normal Function-Schreibweise

const output = document.querySelector('#output');

function hello() {
	output.innerHTML = 'Normale-Functions:<br>Hallo<br>';
}

hello();

function add(x, y) {
	output.innerHTML += x + y + '<br>';
}

add(2, 3);

function mult(x, y) {
	alert(x * y);
}

mult(2, 3);


const i = true;
const j = 'hi';
const k = 1;
const l = {name: 'John'};
const a= [0,1];

function type(param) {
	console.log(typeof param + ' ' + param)
}

type(i);
type(j);
type(k);
type(l);
type(a);



// Arrow Function-Schreibweise

const hello2 = () => {
	output.innerHTML += 'Arrow-Functions:<br>Hallo_2<br>';
}

hello2();

const add2 = (x, y) => output.innerHTML += x + y + '<br>';

add2(2, 3);

const mult2 = (x, y) => alert(x * y);

mult2(2, 3);

const type2 = (param) => output.innerHTML += typeof param + ' ' + param + '<br>'

type2(i);
type2(j);
type2(k);
type2(l);
type2(a);

// ===================================================
//      JS-Vertiefung – Arrow Functions Level_1_4
// ===================================================

console.log("%c JS-Vertiefung – Arrow Functions Level_1_4", "color: tomato");

function hero(heroName, heroPower, heroEnemy) {
    const name = 'Mein Lieblingsheld ist: ' + heroName + '.';
    const power = 'Er hat die Fähigkeit: ' + heroPower + '.';
    const enemy = 'Sein größter Gegner ist: ' + heroEnemy + '.';

    console.log(`${name} ${power} ${enemy}`);
}

hero('Superman', 'Mit unglaublicher Geschwindigkeit zu fliegen', 'Lex Luthor' );


const hero2 = (heroName, heroPower, heroEnemy) => {
    const name = `Mein Lieblingsheld ist: ${heroName}.`;
    const power = `Er hat die Fähigkeit: ${heroPower}.`;
    const enemy = `Sein größter Gegner ist: ${heroEnemy}`;

    console.log(`${name} ${power} ${enemy}`);
}

hero2('Superman', 'Mit unglaublicher Geschwindigkeit zu fliegen', 'Lex Luthor' );