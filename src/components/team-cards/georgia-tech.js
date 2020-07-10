/*
	team card component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
		https://react-bootstrap.github.io/components/cards/
*/

import React from "react"
import Card from "react-bootstrap/Card"
import TeamLogo from "../../images/team-logos/squared/Georgia Tech.png"

const Team = (props) => (
	<Card
		style={{
			fontWeight: `strong`,
			color: `#003057`,
			backgroundColor: `#B3A369`,
			paddingRight: `1rem`,
			paddingLeft: `1rem`
		}}
	>
		<Card.Img variant="top" src={TeamLogo} />
		<Card.Body style={{padding: `0rem`}}>
			<Card.Title><h3>Georgia</h3></Card.Title>
		</Card.Body>
	</Card>
)

export default Team