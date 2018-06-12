"use strict";

function setAttributes(){
	let counter = 0;
	if(counter < 1) {
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
        let computerAttackWeaponMultiplied = getComputerAttackStrengthValue(20);
        let computerAttackStrengthMultiplied = getComputerAttackWeaponValue(6);
        calculateComputerScore(initialHealthMultiplied, addedHealthMultiplied, defenceStrengthMultiplied, defenceTypeMultiplied, computerAttackStrengthMultiplied, computerAttackWeaponMultiplied, attackStrengthMultiplied, attackWeaponMultiplied);
    } else {
		document.getElementById('pTag').innerHTML = "Please Reset The Game."
	}
	counter = 1;
}

function getComputerAttackStrengthValue(sides){
	let output;
	let counter = 0;
	if(counter < 1){
        counter = 1;
        output = rollDie(sides);
        return output;
	} else {
		return output;
	}
}

function getComputerAttackWeaponValue(sides){
	let output;
	let counter = 0;
	if(counter < 1){
		counter++;
		output = rollDie(sides);
		return output;
	} else {
		return output;
	}
}

function calculateComputerScore(initialHealthMultiplied, addedHealthMultiplied, defenceStrengthMultiplied, defenceTypeMultiplied, attackStrengthMultiplied, attackWeaponMultiplied){
	let computerInitialHealth = 12;
    let computerAddedHealth = 4;
    let computerDefenceType = 10;
    let computerDefenceStrength = 8;
    let computerInitialHealthMultiplied = rollDie(computerInitialHealth);
    let computerAddedHealthMultiplied = rollDie(computerAddedHealth);
    let computerDefenceTypeMultiplied = rollDie(computerDefenceType);
    let computerDefenceStrengthMultiplied = rollDie(computerDefenceStrength);
    let computerAttackWeaponMultiplied = getComputerAttackWeaponValue(20);
    let computerAttackStrengthMultiplied = getComputerAttackStrengthValue(6);
    let computerScore = (computerInitialHealthMultiplied + computerAddedHealthMultiplied + (computerDefenceStrengthMultiplied + computerDefenceTypeMultiplied)) - (attackStrengthMultiplied + attackWeaponMultiplied);
    let playerScore = calculatePlayerScore(initialHealthMultiplied, addedHealthMultiplied, defenceTypeMultiplied, defenceStrengthMultiplied,computerAttackWeaponMultiplied, computerAttackStrengthMultiplied);
    console.log(playerScore, computerScore);
    decideWhoWins(playerScore, computerScore);
}

function calculatePlayerScore(initialHealthMultiplied, addedHealthMultiplied, defenceTypeMultiplied, defenceStrengthMultiplied, computerAttackWeaponMultiplied, computerAttackStrengthMultiplied){
	return (initialHealthMultiplied + addedHealthMultiplied + (defenceStrengthMultiplied + defenceTypeMultiplied)) - (computerAttackStrengthMultiplied + computerAttackWeaponMultiplied);
}

function decideWhoWins(playerScore, computerScore){
	if(playerScore > computerScore){
		displayWinner('Player');
	} else if(playerScore === computerScore) {
		displayWinner('Tie');
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

}
runDiceGame();