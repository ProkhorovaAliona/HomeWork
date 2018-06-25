

let elURL = document.querySelector('.ImgURL');
let elSubmit = document.querySelector('.submit');
let elShowImg = document.querySelector('.ShowImg');

let clickUpload = function(ev){
	let getURL = elURL.innerHTML;
	console.log(getURL);
}

elSubmit.addEventListener('click', clickUpload);