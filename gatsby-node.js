// Slug para generar las urls sin espaciones
// npm i url-slug
const urlSlug = require('url-slug')

exports.createPages = async ({actions, graphql, reporter}) => {
	const resultado = await graphql(`
		query {
			allStrapiPaginas {
				nodes {
					nombre
					id
				}
			}
			allStrapiPropiedades {
				nodes {
					nombre
					id
				}
			}
		}
	`)
	// Si no hay resultados
	if(resultado.errors) {
		reporter.panic('No hubo resultados', resultado.errors)
	}

	// Si hay resultados, generar los estaticos
	// estaticos de paginas
	const paginas = resultado.data.allStrapiPaginas.nodes
	// estaticos de propiedades
	const propiedades = resultado.data.allStrapiPropiedades.nodes

	// Crear los templates de:
	// Paginas
	paginas.forEach(pagina => {
		actions.createPage({
			// path genera las url's
			path: urlSlug(pagina.nombre),
			// Componente con el cual se renderiza
			component: require.resolve('./src/components/paginas.js'),
			// Manda variables al componente
			context: {
				id: pagina.id
			}
		})
	})
	// Propiedades
	// Con forEach recorremos las propiedades
	propiedades.forEach(propiedad => {
		actions.createPage({
			// path genera las url's
			path: urlSlug(propiedad.nombre),
			// Componente con el cual se renderiza
			component: require.resolve('./src/components/propiedades.js'),
			// Manda variables al componente
			context: {
				id: propiedad.id
			}
		})
	})
}
