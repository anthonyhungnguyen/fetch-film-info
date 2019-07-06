import React from 'react'
import Row from '../Row/Row'
import { Table } from 'reactstrap'

const FilmTable = props => {
	return (
		<Table dark>
			<tbody>
				{Object.entries(props.data).map((item, i) => (
					<Row key={i} item={item} />
				))}
			</tbody>
		</Table>
	)
}

export default FilmTable
