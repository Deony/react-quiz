import React, { Component } from 'react';

import Layout from './hoc/Lay';
import Quiz from './containers/Quiz/Quiz';
import './style/style.scss'


export default class App extends Component {
	render() {

		return (
			<div className="App">
				<Layout>
					<Quiz />
				</Layout>
			</div>
		);
	}
}

