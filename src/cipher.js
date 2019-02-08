window.cipher = {
  // ... 

 encode: (offset, message)=> {
	let text = [ ]; // va vacio porque es lo que va a regresar el FOR (funcion gral) porque es para un array
	for (let i = 0; i < message.length; i++) {
		//console.log(message[i].charCodeAt()) // es para comprobar que funcionaba en la consola
		if (message[i] == " "){ //para que reconozca los espacios, se hizo un IF
			text += " ";
		} else {
	
		let location = ((message[i].charCodeAt() - 65 + offset)% 26 + 65); /* el 'i' es para indicar la letra actual que ingreso
	 el usuario y se va a estar moviendo*/
		let newLetter = String.fromCharCode(location);

		text = text + newLetter; //aquí se concatenan las letras
		}
	}
	return(text);
},

 decode: (offset, message)=> {
	let text= [ ]; //va vacío porque es lo que va a regresar el FOR (función gral)
	for (let i = 0; i < message.length; i++){
	//console.log(location)(message[i].chaCodeAt()) // para comprobar que funcionaba en la consola
		if (message[i] == " "){
			text += " ";
		} else {
	let location = ((message[i].charCodeAt() + 65 - offset)% 26 + 65);
	//el 'i' es para inicar l usuario y se va a estar moviendo
	//console.log(location); va despues de lo que quiero comprobar que funcione*/
	let newLetter = String.fromCharCode(location); /* se pone String poara hablar de dady String y location es  el resultado de donde se guardaron 
	/*console.log(newLetter); // esta jala la ubicación de las letras */
	
		text = text + newLetter; // //aquí se concatenan las letras
		}
		}
	return(text);
	}
};