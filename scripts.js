"use strict";

function setAttributes(){
    document.getElementById('setButton').disabled = true;
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
    let computerAttackWeaponMultiplied = rollDie(20);
    let computerAttackStrengthMultiplied = rollDie(6);
    calculateComputerScore(initialHealthMultiplied, addedHealthMultiplied, defenceStrengthMultiplied, defenceTypeMultiplied, computerAttackStrengthMultiplied, computerAttackWeaponMultiplied, attackStrengthMultiplied, attackWeaponMultiplied);
}

function calculateComputerScore(initialHealthMultiplied, addedHealthMultiplied, defenceStrengthMultiplied, defenceTypeMultiplied, attackStrengthMultiplied, attackWeaponMultiplied){
	let computerInitialHealth = 20;
    let computerAddedHealth = 4;
    let computerDefenceType = 10;
    let computerDefenceStrength = 8;
    let computerInitialHealthMultiplied = rollDie(computerInitialHealth);
    let computerAddedHealthMultiplied = rollDie(computerAddedHealth);
    let computerDefenceTypeMultiplied = rollDie(computerDefenceType);
    let computerDefenceStrengthMultiplied = rollDie(computerDefenceStrength);
    let computerAttackWeaponMultiplied = rollDie(12);
    let computerAttackStrengthMultiplied = rollDie(6);
    let computerScore = calculateComputerTotalScore(computerInitialHealthMultiplied, computerAddedHealthMultiplied, computerDefenceStrengthMultiplied, computerDefenceTypeMultiplied, attackStrengthMultiplied, attackWeaponMultiplied);
    let playerScore = calculatePlayerTotalScore(initialHealthMultiplied, addedHealthMultiplied, defenceTypeMultiplied, defenceStrengthMultiplied,computerAttackWeaponMultiplied, computerAttackStrengthMultiplied);
    decideWhoWins(playerScore, computerScore);
}

function calculateComputerTotalScore(compInitHealth, compAddHealth, compDefStrength, compDefType, playerAttStrength, playerAttWeapon){
    return ((compInitHealth + compAddHealth) * (compDefStrength + compDefType)) - (playerAttStrength + playerAttWeapon);
}

function calculatePlayerTotalScore(initialHealthMultiplied, addedHealthMultiplied, defenceTypeMultiplied, defenceStrengthMultiplied, computerAttackWeaponMultiplied, computerAttackStrengthMultiplied){
	return ((initialHealthMultiplied + addedHealthMultiplied) * (defenceStrengthMultiplied + defenceTypeMultiplied)) - (computerAttackStrengthMultiplied + computerAttackWeaponMultiplied);
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

function checkIfSame(checkInitialValues) {
    let first = document.getElementById('initialHealth').value;
    let second = document.getElementById('addedHealth').value;
    let third = document.getElementById('attackWeapon').value;
    let fourth = document.getElementById('attackStrength').value;
    let fifth = document.getElementById('defenceType').value;
    let sixth = document.getElementById('defenceStrength').value;
    let areSame = (first !== second && first !== third && first !== fourth && first !== fifth && first !== sixth && second !== third && second !== fourth && second !== fifth && second !== sixth && third !== fourth && third !== fifth && third !== sixth && fourth !== fifth && fourth !== sixth && fifth !== sixth);

    if(!areSame) {
        document.getElementById('setButton').disabled = true;
    } else {
        document.getElementById('setButton').disabled = false;
        clearInterval(checkInitialValues);
    }
}

function runDiceGame(){
    let count = 0;
    let checkInitialValues = setInterval(function(){checkIfSame(checkInitialValues); count++; if(count === 120){window.location.reload();}}, 1000);
}
runDiceGame();