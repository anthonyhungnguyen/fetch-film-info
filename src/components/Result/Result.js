import React from 'react'

const Result = props => {
	let data = []
	for (let [key, value] of Object.entries(props.data)) {
		data.push(`${key}: ${value}`)
	}

	return (
		<div>
			{data.map((key, i) => (
				<p key={i}>{key}</p>
			))}
		</div>
	)
}

export default Result
