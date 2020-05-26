var sendInput = document.querySelector('input');
var sendBtn = document.querySelector('button');
sendBtn.addEventListener('click', function (e) {
	var num = 46;
	console.log(+sendInput.value + num);
	e.preventDefault();
});
