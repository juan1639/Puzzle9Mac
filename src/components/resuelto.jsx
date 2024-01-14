import './resuelto.css'

export function Resuelto({children, resuelto, estilo}) {

	return (
		<>
			{
				resuelto 
					? 	<>
							<section className='resuelto'>
								<button className={estilo}>{children}</button>
							</section>
						</>
					: 	<></> 
			}
		</>

	)
}