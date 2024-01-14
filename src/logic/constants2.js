// --------------------------------------------------------
// Aqui CREAMOS el SORTEO INICIAL de Valores, 
// 
// EXPORTANDO al final (arrayValores y arrayVecinos)
// --------------------------------------------------------
const COLUMNAS = 3;
const FILAS = 3;
const NRO_CASILLAS = COLUMNAS * FILAS;

const agregar_vecinos = (i, ii, vecino) => {

    if (i >= 0 && vecino === 1) return true;
    if (ii < COLUMNAS && vecino === 2) return true;
    if (i < FILAS && vecino === 3) return true;
    if (ii >= 0 && vecino === 4) return true;

    return false;
};

const calcula_elemento = (i, ii) => {

    return i * COLUMNAS + ii;
};

const arrayCasillas = () => {

    const arrayVecinos = [];

	let arrayValores = [];
	let valor = Math.floor(Math.random() * (NRO_CASILLAS - 1)) + 1;
    //let contador = -1;

	for (let i = 0; i < FILAS; i ++) {
	    for (let ii = 0; ii < COLUMNAS; ii ++) {

            //contador ++;

            const vecinos = [];

            if (agregar_vecinos(i - 1, ii, 1)) vecinos.push(calcula_elemento(i - 1, ii));
            if (agregar_vecinos(i, ii + 1, 2)) vecinos.push(calcula_elemento(i, ii + 1));
            if (agregar_vecinos(i + 1, ii, 3)) vecinos.push(calcula_elemento(i + 1, ii));
            if (agregar_vecinos(i, ii - 1, 4)) vecinos.push(calcula_elemento(i, ii - 1));

            arrayVecinos.push(vecinos);

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
