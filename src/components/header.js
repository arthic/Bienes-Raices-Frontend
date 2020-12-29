import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby'
import Navegacion from './navegacion';
// import {css} from '@emotion/react'
import styled from '@emotion/styled'

const ContenedorHeader = styled.div`
	max-width: 120rem;
	margin: 0 auto;
	text-align: center;

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

const Header = () => {

	// Consultar logo.svg
	const {logo} = useStaticQuery(graphql `
		query {
			logo: file(relativePath: {eq: "logo.svg"}){
				publicURL
			}
		}
	`)

	return (
		<header
			css={{
				backgroundColor: '#0d253b',
				padding: '1rem'
			}}
		>
			<ContenedorHeader>

				<Link to='/'>
					<img src={logo.publicURL} alt="Logotipo Bienes Raíces"/>
				</Link>

				<Navegacion />
			</ContenedorHeader>
		</header>
	);
}

export default Header;