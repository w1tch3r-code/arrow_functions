"use strict";

// ===================================================
//        JS-Vertiefung – Project Score Keeper
// ===================================================

console.log("%c JS-Vertiefung – Project Score Keeper", "color: tomato");

const scoreHome = document.querySelector(".score__home");
const scoreAway = document.querySelector(".score__away");
const closeIcon = document.querySelector(".close__Icon");

const addScore = (team, score) => {
	if (team === "home" && score === 1) {
		scoreHome.textContent = Number(scoreHome.textContent) + score;
	} else if (team === "home" && score === 2) {
		scoreHome.textContent = Number(scoreHome.textContent) + score;
	} else if (team === "home" && score === 3) {
		scoreHome.textContent = Number(scoreHome.textContent) + score;
	} else if (team === "away" && score === 1) {
		scoreAway.textContent = Number(scoreAway.textContent) + score;
	} else if (team === "away" && score === 2) {
		scoreAway.textContent = Number(scoreAway.textContent) + score;
	} else if (team === "away" && score === 3) {
		scoreAway.textContent = Number(scoreAway.textContent) + score;
	}
};

const resetScore = () => {
	scoreHome.textContent = 0;
	scoreAway.textContent = 0;
};

closeIcon.addEventListener("click", () => {
	const overlay = document.querySelector(".overlay");
	const svg = document.querySelector(".overlay svg");
	const form = document.querySelector("form");

	overlay.classList.toggle("overlay__closed");
	form.classList.toggle("form__closed");
	svg.classList.toggle("svg__open");
});

const registerTeam = () => {
	const inputHomeTeam = document.querySelector("#home-team").value;
	const inputAwayTeam = document.querySelector("#away-team").value;
	const outputHomeTeam = document.querySelector(
		"#output__home p:nth-of-type(2)"
	);
	const outputAwayTeam = document.querySelector(
		"#output__away p:nth-of-type(2)"
	);

	if (inputHomeTeam === "" && inputAwayTeam === "") {
		outputHomeTeam.textContent = 'Home';
		outputAwayTeam.textContent = 'Away';
	} else if (inputHomeTeam === "" && inputAwayTeam !== "") {
		outputHomeTeam.textContent = 'Home';
		outputAwayTeam.textContent = inputAwayTeam;
	} else if (inputHomeTeam !== "" && inputAwayTeam === "") {
		outputHomeTeam.textContent = inputHomeTeam;
		outputAwayTeam.textContent = 'Away';
	} else {
		outputHomeTeam.textContent = inputHomeTeam;
		outputAwayTeam.textContent = inputAwayTeam;
	}
};
