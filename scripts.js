"use strict";

function setAttributes(){
	let initialHealth = parseFloat(document.getElementById('initialHealth').value);
	let addedHealth = parseFloat(document.getElementById('addedHealth').value);
	let attackWeapon = parseFloat(document.getElementById('attackWeapon').value);
	let attackStrength = parseFloat(document.getElementById('attackStrength').value);
	let defenceType = parseFloat(document.getElementById('defenceType').value);
	let defenceStrength = parseFloat(document.getElementById('defenceStrength').value);
	let initialHealthMultiplied = rollDie(initialHealth);
	let addedHealthMultiplied = rollDie(addedHealth);
	let attackWeaponMultiplied = rollDie(attackWeapon);
	let attackStrengthMultiplied = rollDie(attackStrength);
	let defenceTypeMultiplied = rollDie(defenceType);
	let defenceStrengthMultiplied = rollDie(defenceStrength);
    let computerScore = calculateComputerScore(attackStrengthMultiplied, attackWeaponMultiplied);

    calculateScores(initialHealthMultiplied, addedHealthMultiplied, attackWeaponMultiplied, attackStrengthMultiplied, defenceTypeMultiplied, defenceStrengthMultiplied, computerScore);

}
function calculateScores(initialHealthMultiplied, addedHealthMultiplied, attackWeaponMultiplied, attackStrengthMultiplied, defenceTypeMultiplied, defenceStrengthMultiplied, computerScore){
	let playerScore = calculatePlayerScore(initialHealthMultiplied, addedHealthMultiplied, computerAttackWeaponMultiplied, computerAttackStrengthMultiplied, defenceTypeMultiplied, defenceStrengthMultiplied);
	let winner = decideWhoWins(playerScore, computerScore);
	displayWinner(winner);

}

function calculateComputerScore(attackStrengthMultiplied, attackWeaponMultiplied){
	
	computerInitialHealth;
	computerAddedHealth;
	computerAttackWeapon;
	computerAttackStrength;
	computerDefenceType;
	computerDefenceStrength;
	computerInitialHealthMultiplied;
	computerAddedHealthMultiplied;
	computerAttackWeaponMultiplied;
	computerAttackStrengthMultiplied;
	computerDefenceTypeMultiplied;
	computerDefenceStrengthMultiplied;

//let randNum = Math.floor(Math.random()) * 6;
	return (computerInitialHealthMultiplied + computerAddedHealthMultiplied + (computerDefenceStrengthMultiplied + computerDefenceTypeMultiplied)) - (attackStrengthMultiplied + attackWeaponMultiplied)
}


function calculatePlayerScore(initialHealthMultiplied, addedHealthMultiplied, defenceStrengthMultiplied, defenceTypeMultiplied,computerAttackStrengthMultiplied, computerAttackWeaponMultiplied){
	return (initialHealthMultiplied + addedHealthMultiplied + (defenceStrengthMultiplied + defenceTypeMultiplied)) - (computerAttackStrengthMultiplied + computerAttackWeaponMultiplied);

}


//initial health:;
//+ added health;
//+ defencetype * defencestrength;
//- computer attack;

function decideWhoWins(playerScore, computerScore){
	if(playerScore > computerScore){
		displayWinner('Player');
	} else {
		displayWinner('Computer');
	}
}

function displayWinner(winner){
	document.getElementById('pTag').innerHTML = winner;
}

function rollDie(nSides){
	return Math.floor((Math.random() * nSides) + 1);
}

function runDiceGame(){
	/*let initialHealth;
	let addedHealth;
	let attackWeapon;
	let attackStrength;
	let defenceType;
	let defenceStrength;
	let initialHealthMultiplied;
	let addedHealthMultiplied;
	let attackWeaponMultiplied;
	let attackStrengthMultiplied;
	let defenceTypeMultiplied;
	let defenceStrengthMultiplied;
	let playerScore;
	let computerInitialHealth;
	let computerAddedHealth;
	let computerAttackWeapon;
	let computerAttackStrength;
	let computerDefenceType;
	let computerDefenceStrength;
	let computerInitialHealthMultiplied;
	let computerAddedHealthMultiplied;
	let computerAttackWeaponMultiplied;
	let computerAttackStrengthMultiplied;
	let computerDefenceTypeMultiplied;
	let computerDefenceStrengthMultiplied;
	let computerScore;*/





}
runDiceGame();