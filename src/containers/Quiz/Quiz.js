import React, { Component } from 'react';

import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import listQuestion from '../../listQuestion';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

export default class Quiz extends Component {
	constructor(props){
		super(props);
		this.state = {
			isFinished: false,
			activeQuestion: 0,
			quiz: listQuestion,
			answerState: null,
			result: {}
		}
	}

	onAnswerHandler = answerId => {
		if(this.state.answerState) {
			const state = Object.keys(this.state.answerState)[0];
			if(this.state.answerState[state] === 'correct'){
				return
			}
		}

		let quest = this.state.quiz[this.state.activeQuestion];
		const result = this.state.result;

		const timeOut = setTimeout(() => {
			let newNum = this.state.activeQuestion;

			if (this.state.quiz.length === this.state.activeQuestion + 1) {
				this.setState({
					isFinished: true
				})
			}
			else {
				this.setState({
					activeQuestion: newNum + 1,
					answerState: null
				})
			}
			clearTimeout(timeOut);
		}, 600);

		if(quest.rightAnswer === answerId) {
			if (!result[answerId]) result[answerId] = 'success';
			this.setState({
				answerState: {[answerId]:'correct'},
				result
			});
		}
		else {
			result[answerId] = 'wrong';
			this.setState({
				answerState: {[answerId]:'wrong'},
				result
			});
		}

	};


	render() {
		return (
			<div className="Quiz">
				<h1>My questions</h1>
				{
					this.state.isFinished
						? <FinishedQuiz
								answerState={this.state.result}
								quiz={this.state.quiz}
						  />
						: <ActiveQuiz
								answer={this.state.activeQuestion}
								onAnswerClick={this.onAnswerHandler}
								answerNumber={this.state.activeQuestion + 1}
								quiz={this.state.quiz[this.state.activeQuestion]}
								quizLength={this.state.quiz.length}
								stateAnswer={this.state.answerState}
						  />
				}

			</div>
		);
	}
}