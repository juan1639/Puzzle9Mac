// --------------------------------------------------------
// Aqui CREAMOS el SORTEO INICIAL de Valores, 
// 
// EXPORTANDO al final (arrayValores y arrayVecinos)
// --------------------------------------------------------
const arrayCasillas = () => {

	const COLUMNAS = 3;
	const FILAS = 3;
	const NRO_CASILLAS = 9;

	const arrayVecinos = [
		[1, 3], [0, 2, 4], [1, 5],
		[0, 4, 6], [3, 1, 5, 7], [4, 2, 8],
		[3, 7], [6, 4, 8], [7, 5]
	];

	let arrayValores = [];

	let valor = Math.floor(Math.random() * (NRO_CASILLAS - 1)) + 1;

	for (let i = 0; i < FILAS; i ++) {
	    for (let ii = 0; ii < COLUMNAS; ii ++) {

	        if (ii == COLUMNAS - 1 && i == FILAS - 1) {
	            console.log('saltarUltima');
	            arrayValores.push(9)

	        } else {
	            while (arrayValores.indexOf(valor) != -1) {
	                valor = Math.floor(Math.random() * (NRO_CASILLAS - 1)) + 1;
	            }

	            arrayValores.push(valor);
	        }
	    }
	}

	return [arrayValores, arrayVecinos];
}

// ----------------------------------------------------------
const retorno = arrayCasillas();

export const arrayValores = retorno[0];
export const arrayVecinos = retorno[1];

console.log(arrayValores);
console.log(arrayVecinos);


