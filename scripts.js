

function setAttributes(){
	initialHealth = parseFloat(document.getElementById('initialHealth').value);
	addedHealth = parseFloat(document.getElementById('addedHealth').value);
	attackWeapon = parseFloat(document.getElementById('attackWeapon').value);
	attackStrength = parseFloat(document.getElementById('attackStrength').value);
	defenceType = parseFloat(document.getElementById('defenceType').value);
	defenceStrength = parseFloat(document.getElementById('defenceStrength').value);
	initialHealthMultiplied = rollDie(initialHealth);
	addedHealthMultiplied = rollDie(addedHealth);
	attackWeaponMultiplied = rollDie(attackWeapon);
	attackStrengthMultiplied = rollDie(attackStrength);
	defenceTypeMultiplied = rollDie(defenceType);
	defenceStrengthMultiplied = rollDie(defenceStrength);
	calculateScores();
}

function calculateScores(){
	calculateComputerScore();
	calculatePlayerScore();
	let winner = decideWhoWins();
	displayWinner(winner);

}

function calculateComputerScore(){
	
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


	computerScore = (computerInitialHealthMultiplied + computerAddedHealthMultiplied + (computerDefenceStrengthMultiplied + computerDefenceTypeMultiplied)) - (computerAttackStrengthMultiplied + computerAttackWeaponMultiplied)
}


function calculatePlayerScore(){
	playerScore = (initialHealthMultiplied + addedHealthMultiplied + (defenceStrengthMultiplied + defenceTypeMultiplied)) - (computerAttackStrengthMultiplied + computerAttackWeaponMultiplied);
}


//initial health:;
//+ added health;
//+ defencetype * defencestrength;
//- computer attack;

function decideWhoWins(){
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
	let initialHealth;
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
	let computerScore;





}
runDiceGame();