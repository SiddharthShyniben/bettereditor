const editing = document.querySelector('.editing'),
	highlighting = document.querySelector('.highlighting'),
	highlightingContent = document.querySelector('.highlighting-content');

const keymap = {
	'<': {value: '<>', pos: 1},
	'(': {value: '()', pos: 1},
	'{': {value: '{}', pos: 1},
	'[': {value: '[]', pos: 1},
	'\'': {value: '\'\'', pos: 1},
	'"': {value: '"', pos: 1},
	'“': {value: '“”', pos: 1},
	'`': {value: '``', pos: 1},
	'‘': {value: '‘’', pos: 1},
	'«': {value: '«»', pos: 1},
	'「': {value: '「」', pos: 1},
	'*': {value: '**', pos: 1},
	'_': {value: '__', pos: 1},
	'>': {value: '> ', pos: 2},
	'~': {value: '~~', pos: 1},
};

const snipmap = {
	// These make no sense but I'll add them for completeness
	'1#': {value: '# ', pos: 1},
	'2#': {value: '## ', pos: 2},

	// These make sense
	'3#': {value: '### ', pos: 3},
	'4#': {value: '#### ', pos: 4},
	'5#': {value: '##### ', pos: 5},
	'6#': {value: '###### ', pos: 6},
};
