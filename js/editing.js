// https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea
// https://stackoverflow.com/questions/9959690/javascript-get-word-before-cursor
// https://stackoverflow.com/questions/57042145/add-bullets-to-each-new-line-within-a-textarea

function getWord(text, caretPos) {
	let preText = text.substring(0, caretPos);
	let split = preText.split(/\s/);
	return preText.indexOf(' ') > 0 ? '' : split[split.length - 1].trim();
}

// Do it at the start anyways
update(editing.value);
syncScroll(editing);

editing.addEventListener('keydown', e => {
	if (keymap[e.key]) {
		e.preventDefault();
		const pos = editing.selectionStart;
		editing.value = editing.value.slice(0, pos) + keymap[e.key].value + editing.value.slice(editing.selectionEnd);
		editing.selectionStart = editing.selectionEnd = pos + keymap[e.key].pos;
	}

	if (e.key === 'Tab') {
		e.preventDefault();
		const word = getWord(editing.value, editing.selectionStart);
		console.log(word)
		const pos = editing.selectionStart;

		if (word && snipmap[word]) {
			editing.value = editing.value.slice(0, pos - word.length) +
				snipmap[word].value +
				editing.value.slice(editing.selectionEnd);

			editing.selectionStart = editing.selectionEnd = pos + snipmap[word].pos;
		} else {
			editing.value = editing.value.slice(0, pos) +
				'	' +
				editing.value.slice(editing.selectionEnd);

			editing.selectionStart = editing.selectionEnd = pos + 1;
		}
	}

	update(editing.value);
	syncScroll(editing)
});

editing.addEventListener('input', () => {
	update(editing.value);
	syncScroll(editing);
});
editing.addEventListener('scroll', () => syncScroll(editing));

