import React from 'react';


export default function(props) {
	const cls = ['list-item'];

	if(props.stateAnswer === 'correct') {
		cls.push('correct');
	}
	else if(props.stateAnswer === 'wrong') {
		cls.push('wrong');
	}

	return (
		<li className={cls.join(' ')} onClick={() => props.onAnswerClick(props.answer.id)}>
			{ props.answer.text	}
		</li>
	)
}