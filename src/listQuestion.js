export default [
	{
		question: 'Which method in a React Component should you override to stop the component from updating?',
		rightAnswer: 2,
		answers:[
			{text: 'willComponentUpdate', id: 1},
			{text: 'shouldComponentUpdate', id: 2},
			{text: 'componentDidUpdate', id: 3},
			{text: 'componentDidMount', id: 4}
		]
	},
	{
		question: 'What\'s used to pass data to a component from outside?',
		rightAnswer: 4,
		answers:[
			{text: 'setState', id: 1},
			{text: 'render with arguments', id: 2},
			{text: 'PropTypes', id: 3},
			{text: 'props', id: 4}
		]
	},
	{
		question: 'Which method in a React Component is called after the component is rendered for the first time?',
		rightAnswer: 2,
		answers:[
			{text: 'componentDidUpdate', id: 1},
			{text: 'componentDidMount', id: 2},
			{text: 'componentMounted', id: 3},
			{text: 'componentUpdated', id: 4}
		]
	},
	{
		question: 'What happens when you call setState() inside render() method?',
		rightAnswer: 2,
		answers:[
			{text: 'Repetitive output appears on the screen', id: 1},
			{text: 'Stack overflow error', id: 2},
			{text: 'Duplicate key error', id: 3},
			{text: 'Nothing happens. Life goes on!', id: 4}
		]
	}
]