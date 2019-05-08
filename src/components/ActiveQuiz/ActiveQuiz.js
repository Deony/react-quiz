import React from 'react';

import AnswersList from '../AnswersList/AnswersList'


export default props => {
	return <div className="ActiveQuiz">
		<p>
			<strong>
				{props.answerNumber + ". "}
				{props.quiz.question}
			</strong>
		</p>

		<div className="questions">
			<AnswersList
				onAnswerClick={props.onAnswerClick}
				answer={props.answer}
				answers={props.quiz.answers}
				stateAnswer={props.stateAnswer}
			/>
		</div>
		<small>{props.answerNumber + ' from ' + props.quizLength}</small>
	</div>
}