import React from "react";

import Answer from "../Answer/Answer";


export default props => {

	return(
		<ul>
			{
				props.answers.map((answer,index) => {
					return (
						<Answer
							key={index}
							answer={answer}
							onAnswerClick={props.onAnswerClick}
							stateAnswer={props.stateAnswer ? props.stateAnswer[answer.id] : null}
						/>
					)
				})
			}
		</ul>
	)
}