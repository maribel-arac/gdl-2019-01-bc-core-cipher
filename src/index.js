//prender y apagar pantallas
function restart(){
	document.getElementById("screen1").style.display = 'none';
	document.getElementById("encodeScreen").style.display = 'none';
	document.getElementById("decodeScreen").style.display = 'none';
	document.getElementById("resultsTxt").style.display = 'none';
	document.getElementById("results").style.display = 'none';
}

restart();


//Función para "cambiar" de ventanas
function switchVisibility(div1, div2){
 let divElement = document.getElementById(div1);
 let divElement2 = document.getElementById(div2);

 //Ocultando la division del inicio
 if(divElement.style.display == 'none'){
   divElement.style.display = 'block';
 }
 else {
   divElement.style.display = 'none';
 }

 //Mostrando la division del menu
 if(divElement2.style.display == 'none'){
   divElement2.style.display = 'block';
 }
 else {
   divElement2.style.display = 'none';
 }
}

//al darle click, recupera el nombre y saluda
function getName(){
	const nameInput = document.getElementById('name-form').value; //jala lo que se ingresa en el espacio de nombre
	console.log(nameInput);
	let  greeting = "Hola " + nameInput + " ¿Qué quieres hacer con tu mensaje?";
	document.getElementById("greeting").innerHTML = greeting;
}


