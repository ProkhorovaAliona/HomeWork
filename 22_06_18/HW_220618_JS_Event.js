
let elURL = document.querySelector('.input');
let elSubmit = document.querySelector('.button');
let elShowImg = document.querySelector('.screen');

elSubmit.addEventListener('click', function(){
	elShowImg.src = elURL.value;
})


