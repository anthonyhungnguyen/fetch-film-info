import React from 'react'

const Row = props => {
	const [keys, values] = props.item
	let renderedValues = null
	if (typeof values === 'string') {
		if (keys === 'Poster') {
			renderedValues = (
				<td>
					<img src={values} alt="Poster of film" />
				</td>
			)
		} else {
			renderedValues = <td>{values}</td>
		}
	} else {
		renderedValues = (
			<td>
				{values.map((item, i) => (
					<span key={i}>
						{item.Source}: {item.Value}
						<hr />
					</span>
				))}
			</td>
		)
	}
	return (
		<tr>
			<td>{keys}</td>
			{renderedValues}
		</tr>
	)
}

export default Row
