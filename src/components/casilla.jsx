import './casilla.css'

export function Casilla({children, index, valor, vacia, checkVecinos}) {

	const handleClick = () => {
		checkVecinos(index)
	}

	return (
		<button onClick={handleClick} className={vacia}>{children}</button>
	)
}
