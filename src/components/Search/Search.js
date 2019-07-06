import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap'

const Search = props => {
	return (
		<Form>
			<FormGroup>
				<Input
					type="text"
					onChange={e =>
						props.setUrl(
							`https://www.omdbapi.com/?t=${e.target.value}&apikey=8c9b19e1`
						)
					}
					placeholder="Enter film name"
				/>
			</FormGroup>
		</Form>
	)
}

export default Search
