// gatsby develop
import React from 'react';
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import styled from '@emotion/styled'
import Encuentra from '../components/encuentra'
import ListadoPropiedades from '../components/listadoPropiedades'
// npm i gatsby-background-image
import BackgroundImage from 'gatsby-background-image'
// css
import heroCSS from '../css/hero.module.css'

const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
`

const Index = () => {

	const inicio = useInicio()
	const {nombre, contenido, imagen} = inicio[0]

	return (
		<Layout>
			<ImagenBackground
				tag="section"
				fluid={imagen.sharp.fluid}
				fadeIn="soft"
			>
				<div
					className={heroCSS.imagenbg}
				>
					<h1
						className={heroCSS.titulo}
					>Venta de casas y departamentos exclusivos</h1>
				</div>
			</ImagenBackground>
			<main>
				<div
					css={{
						maxWidth: '800px',
						margin: '0 auto'
					}}
				>
					<h1>{nombre}</h1>
					<p
						css={{
							textAlign: 'center'
						}}
					>{contenido}</p>
				</div>
			</main>
			<Encuentra />

			<ListadoPropiedades />
		</Layout>
	)
}

export default Index;