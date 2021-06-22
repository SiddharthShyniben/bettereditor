function update(text) {
	highlightingContent.innerHTML = text
		.replace(new RegExp('&', 'g'), '&amp;')
		.replace(new RegExp('<', 'g'), '&lt;'); /* Global RegExp */
	Prism.highlightElement(highlightingContent);
}

function syncScroll(element) {
	/* Scroll result to scroll coords of event - sync with textarea */
	highlighting.scrollTop = element.scrollTop;
	highlighting.scrollLeft = element.scrollLeft;
}