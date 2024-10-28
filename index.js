let wins = 54;
let loses = 21;
let victoryBalance = getVictoryBalance(wins, loses);
let rankingLevel = getRankingLevel(victoryBalance);

console.log(
	`O Herói tem de saldo de ${victoryBalance} está no nível de ${rankingLevel}`
);

function getVictoryBalance(wins, loses) {
	return wins - loses;
}

function getRankingLevel(victoryBalance) {
	let rankingLevel;
	if (victoryBalance <= 10) {
		rankingLevel = "Ferro";
	} else if (victoryBalance > 10 && victoryBalance <= 20) {
		rankingLevel = "Bronze";
	} else if (victoryBalance > 20 && victoryBalance <= 50) {
		rankingLevel = "Prata";
	} else if (victoryBalance > 50 && victoryBalance <= 80) {
		rankingLevel = "Ouro";
	} else if (victoryBalance > 80 && victoryBalance <= 90) {
		rankingLevel = "Diamante";
	} else if (victoryBalance > 90 && victoryBalance <= 100) {
		rankingLevel = "Lendário";
	} else {
		rankingLevel = "Imortal";
	}
	return rankingLevel;
}
