import React, { Component } from 'react';


export default class Lay extends Component {
	render() {
		return (
			<main>
				{this.props.children}
			</main>
		);
	}
}