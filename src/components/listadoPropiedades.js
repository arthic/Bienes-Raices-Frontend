import React, {useEffect, useState} from 'react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import listadoPropiedadesCSS from '../css/listadoPropiedades.module.css'
import useFiltro from '../hooks/useFiltro';

const ListadoPropiedades = () => {

	// Custom hook | traer propiedades
	const resultado = usePropiedades()

	// state
	// Se elimina guardarPropiedades
	// este state contiene todas las propiedades
	/* Separamos todas las propiedades ya que se aplicara un filter,
	si despues se quiere ver otra categoria se mantiene las que se habian filtrado */
	// MANTENER REFERENCIA AL OBJETO ORIGINAL
	const [propiedades] = useState(resultado) // antes con array vacio
	// State filtrado
	const [filtradas, guardarFiltradas] = useState([])

	// Filtrado de propiedades
	const {categoria, FiltroUI} = useFiltro()

	// Una vez que este el componente listo
	useEffect(() => {

		// guardarPropiedades(resultado)
		// Cuando haya una categoria seleccionada
		if(categoria) {
			const filtro = propiedades.filter(propiedad => propiedad.categoria.nombre === categoria)
			guardarFiltradas(filtro)
		} else { // Cuando no hay categria, retornar todas las propiedades
			guardarFiltradas(propiedades)
		}
		/* Cada que se haga un cambio en la categoria, se ejecuta el
		efecto para redibujar el componente con los cambios deseados*/
	}, [categoria, propiedades])

	return (
		<>
			<h2
				css={{
					marginTop: '5rem'
				}}
			>Nuestras Propiedades</h2>

			{FiltroUI()}

			<ul className={listadoPropiedadesCSS.propiedades}>
				{filtradas.map(propiedad => (
					<PropiedadPreview
						key={propiedad.id}
						propiedad={propiedad}
					/>
				))}
			</ul>
		</>
	)
}

export default ListadoPropiedades;