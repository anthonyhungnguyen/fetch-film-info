import React, { useState } from 'react'
import Search from '../components/Search/Search'
import FilmTable from '../components/Table/Table'
import { Button } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'
import styles from './App.module.css'
import { BounceLoader } from 'react-spinners'
import { css } from '@emotion/core'

const App = () => {
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(false)
	const [url, setUrl] = useState(
		`https://www.omdbapi.com/?t=Avengers&apikey=8c9b19e1`
	)
	const override = css`
		margin: auto;
	`

	const handleSearchButton = async () => {
		setLoading(true)
		let response = await fetch(url)
		let data = await response.json()
		setData(data)
		setLoading(false)
	}

	return (
		<Container className={styles.App}>
			<Row>
				<Col xs="9">
					<Search setUrl={setUrl} url={url} data={data} />
				</Col>
				<Col xs="3">
					<Button onClick={handleSearchButton}>Search Film</Button>
				</Col>
			</Row>
			<Row>
				<Col xs="9">
					{loading ? (
						<BounceLoader
							css={override}
							sizeUnit={'px'}
							size={60}
							color={'#1abc9c'}
							loading={loading}
						/>
					) : (
						<FilmTable data={data} />
					)}
				</Col>
			</Row>
		</Container>
	)
}

export default App
