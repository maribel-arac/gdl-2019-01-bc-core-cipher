//funcion para cambio de pantallas
function changingSlides() {
	document.getElementById("home").style.display = "none"; //darle invisibilidad
	document.getElementById("inputInfo").style.display = "block"; //mostrar el bloque (pantalla/slide)
}
	document.getElementById('btnGo').addEventListener('click', changingSlides); //da click en vamos y manda a pantallaDOS

//el boton 'cifrar' funciona al ingresar el mensaje
function encodeBtn(){
	let offsetInput = Number(document.getElementById('offset').value); //se guarda el offset que ingresa el usuario
	let textInput = document.getElementById('word').value; //se guarda el msj que ingresa el usuario
	let fusion = window.cipher.encode(offsetInput, textInput); //llama la funcion de 'encode' del cipher.js y tmb al offset y texto que ingreso el user
	document.getElementById('text').innerHTML= (fusion); //imprime en el textarea el texto ya cifrado para que lo vea el usuario
}

	document.getElementById('encodeBtn').addEventListener('click',encodeBtn); //al darle click, ejecuta la funcion del boton 'encodeBtn'


//boton 'descifrar' funciona
function decodeBtn(){
	let offsetInput = document.getElementById('offset').value; //se guarda el offset que ingresa el usuario
	let textInput = document.getElementById('word').value; //se guarda el msj que ingresa el usuario
	let fusion = window.cipher.decode(offsetInput, textInput); //llama a la funcion de 'decode' del cipher.js y tmb al offset y texto que ingreso el user
	document.getElementById('text').innerHTML= (fusion); //imprime en el textarea el texto ya descifrado para que lo vea el user
}

	document.getElementById('decodeBtn').addEventListener('click', decodeBtn); // al darle click, ejecuta la funcion del boton'decodeBtn'


//boton 'volver'
function comeBack(){
	document.getElementById("inputInfo").style.display = "none";
	document.getElementById("home").style.display = "block";
}
document.getElementById('goBack').addEventListener('click', comeBack);