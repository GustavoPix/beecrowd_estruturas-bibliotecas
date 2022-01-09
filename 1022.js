var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

function soma(dados) {
	var ladoA = dados[0] * dados[6] + dados[4] * dados[2];
	var ladoB = dados[2] * dados[6];
	return `${ladoA}/${ladoB}`;
}

function tda(expressao) {
	var dados = expressao.split(' ');
	for (var i = 0; i < dados.length; i++) {
		if (i % 2 == 0)
			dados[i] = parseInt(dados[i]);
	}

	switch (dados[3]) {
		case '+':
			return soma(dados);
		case '-':
			break;
		case '*':
			break;
		case '/':
			break;
	}
}

for (var i = 0; i < parseInt(lines[0]); i++) {
	console.log(tda(lines[i + 1]));
}
