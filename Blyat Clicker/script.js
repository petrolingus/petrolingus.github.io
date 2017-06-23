var temp = 0;
frame.onmousedown = function() {
	temp++;
	score.innerHTML = temp + " fury";
	$(frame).css('background', 'url("img/marina2.png")');
}

frame.onmouseup = function() {
	$(frame).css('background', 'url("img/marina1.png")');
}