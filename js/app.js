
//*Saltos
let jumpt = document.getElementById("jumpt").value;
//Input text encriptar
let encriptarA = document.getElementById("first").value.toLocaleUpperCase();
//input text descencriptar
let descencriptarB = document.getElementById("second").value.toLocaleUpperCase();
//Mostrar resultado
let placeResult= document.getElementById("result");




// función para encriptar llamada x el boton"encriptar"

function encriptar(){
  //Saltos
  let jumpt = document.getElementById("jumpt").value;
  //Input text encriptar
  let encriptarA = document.getElementById("first").value.toLocaleUpperCase();
  let getCode = new Array(encriptarA.length );
  let applyAscci = new Array(encriptarA.length );
  let getNewLetter = new Array(encriptarA.length );
  //obtener letras de la palabra
  for(let i=0; i<encriptarA.length; i++){
  //obtener letras de codigo ascii
  getCode[i]= encriptarA[i].charCodeAt();
  //Se aplica la formula para conocer su nueva posicion en el codigo ascii 
  applyAscci[i]= (getCode[i]-65+3)%26+65;
  //obtener encriptacion
  getNewLetter[i]=String.fromCharCode(applyAscci[i]);
  
}	//Retornar valor d "c" para pintar en pantalla
	placeResult.innerHTML=(getNewLetter)	
	//console.log(c);
}//argumento
//encriptar(encriptarA)




// función para descencriptar llamada x el boton"descencriptar"
function descencriptar(){
  //Saltos
  let jumpt = document.getElementById("jumpt").value;
  //input text descencriptar
  let descencriptarB = document.getElementById("second").value.toLocaleUpperCase();
  let getCodeA = new Array(descencriptarB.length );
  let applyAscciA = new Array(descencriptarB.length );
  let getNewLetterA = new Array(descencriptarB.length );
  //obtener letras de la palabra
  for(let i=0; i<descencriptarB.length; i++){
  //obtener letras de codigo ascii
  getCodeA[i]= descencriptarB[i].charCodeAt();
  //Se aplica la formula para conocer su nueva posicion en el codigo ascii 
  applyAscciA[i]= (getCodeA[i]-90-3)%26+90;
  //obtener encriptacion
  getNewLetterA[i]=String.fromCharCode(applyAscciA[i]);
  
}	//Retornar valor d "c" para pintar en pantalla
	 placeResult.innerHTML=(getNewLetterA)	
	//console.log(getNewLetterA);
}//argumento
//encriptar(descencriptarB)



/* PRUEBA MOLDE ENCRIPTAR
function text(word){
  let a = new Array(word.length);
  let b = new Array(word.length);
  let c = new Array(word.length);
for(let i=0; i<word.length; i++){
  a[i]= word[i].charCodeAt();
  b[i]= (a[i]-65+4)%26+65;
  c[i]=String.fromCharCode(b[i]);
  
}

return(c);
}
text("AAA")





//PRUEBA MOLDE DESCENCRIPTAR
function text(word){
  let a = new Array(word.length);
  let b = new Array(word.length);
  let c = new Array(word.length);
for(let i=0; i<word.length; i++){
  a[i]= word[i].charCodeAt();
  b[i]= (a[i]-90-4)%26+90;
  c[i]=String.fromCharCode(b[i]);
  
}

return(c);
}
text("EEE")
*/






