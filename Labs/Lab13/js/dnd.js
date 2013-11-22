var drop;

function cancelEvent() {
	return false;				
}

window.onload = function () {
	var imgs = document.getElementsByTagName('img'), i = imgs.length;
	while (i--) {
		imgs[i].ondragstart = function(event) {
			event.dataTransfer.setData('Text', this.getAttribute('src'));		
		};
	}

	drop = document.getElementById('drop');

	drop.ondrop = function(event) {
		event = event || window.event;
		(event.dataTransfer.getData('Text'));
		document.getElementById('dropimage').src = event.dataTransfer.getData('Text');
		event.cancelBubble = true;
		return false;
	};
	drop.ondragover = cancelEvent;
}

