

function setAttributes(){
	initialHealth = parseFloat(document.getElementById('initialHealth').value);
	addedHealth = parseFloat(document.getElementById('addedHealth').value);
	attackWeapon = parseFloat(document.getElementById('attackWeapon').value);
	attackStrength = parseFloat(document.getElementById('attackStrength').value);
	defenceType = parseFloat(document.getElementById('defenceType').value);
	defenceStrength = parseFloat(document.getElementById('defenceStrength').value);
	initialHealthMultiplier = rollDie(initialHealth);
	addedHealthMultiplier = rollDie(addedHealth);
	attackWeaponMultiplier = rollDie(attackWeapon);
	attackStrengthMultiplier = rollDie(attackStrength);
	defenceTypeMultiplier = rollDie(defenceType);
	defenceStrengthMultiplier = rollDie(defenceStrength);
	calculateScores();
}

function calculateScores(){
	calculateComputerScore();
	calculatePlayerScore();
}

function calculateComputerScore(){

}


function calculatePlayerScore(){

}


//initial health: 10;
//+ added health;
//+ defencetype * defencestrength;
//- computer attack;

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
	let initialHealthMultiplier;
	let addedHealthMultiplier;
	let attackWeaponMultiplier;
	let attackStrengthMultiplier;
	let defenceTypeMultiplier;
	let defenceStrengthMultiplier;






}
runDiceGame();