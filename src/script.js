const binary2decimal = (entry) => {
	// Deve haver validação aqui
	let bin = '',
		dot = 0,
		result = 0,
		messages = [];

	bin = entry.toString();
	dot = bin.indexOf('.') == -1 ? bin.length++ : bin.indexOf('.');

	for (let i = 0; i < bin.length; i++) {
		let element = bin[i];
		let coefficient = dot - i > 0 ? dot - (i + 1) : dot - i;

		if (bin[i] != '.') {
			let mathPow = element * Math.pow(2, coefficient);

			messages.push(
				`element: ${element} coefficient: ${coefficient} --> ${element} x 2^(${coefficient}) = ${mathPow}`
			);
			// messages.push(
			// 	`${element} ${i} ${dot} ${coefficient} -> ${element}x2^(${coefficient}) = ${mathPow}`
			// );
			result += mathPow;
		}
	}
	return { value: result, messages: messages };
};

const ValidateInput = (test) => {
	dot = test.indexOf('.');
	if (dot == test.length - 1) return false;

	for (let i = 0; i < test.length; i++) {
		if (test[i] != '1' && test[i] != '0' && test[i] != '.') return false;
		if (test[i] == '.' && i != dot) return false;
	}
	try {
		parseFloat(test);
	} catch (error) {
		return false;
	}
	return true;
};

const Convert = () => {
	let entry = document.getElementById('entryInput').value;

	if (!ValidateInput(entry)) return undefined;

	let result = binary2decimal(entry);
	let exit = document.getElementById('exit');

	exit.innerHTML = '';
	result.messages.forEach((element) => {
		let code = `<code>${element}</code>`;
		exit.innerHTML += code;
	});

	document.getElementById('result').innerText = result.value;
};

let button = document.getElementById('entryButton');
button.addEventListener('click', () => {
	Convert();
});

document.addEventListener('keydown', (e) => {
	if (e.keyCode == 13) Convert();
});
