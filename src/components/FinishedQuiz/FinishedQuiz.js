import React from 'react';

export default props => {
	console.log(props.answerState);
	return (
		<div className='FinishedQuiz'>
			<p>Fin</p>
			<div>
				<button>Repeat</button>
			</div>
		</div>
	)
}