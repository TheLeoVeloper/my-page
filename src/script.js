let header = document.querySelector(".header");

const typed = new Typed('.typed', {
    strings: [
     '<i class="writes">UI/UX Designer</i>',
     "<i class='writes'>Web developer</i>", 
     "<i class='writes'>Android developer</i>", 
     "<i class='writes'>Frontend developer</i>", 
     "<i class='writes'>Backend developer</i>"
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

window.addEventListener("scroll", () => {
	let value = Math.floor(window.scrollY);
	console.log(value);

	if(value != 0){
		header.style.background = "#091a2a";
		header.classList.add("shadow");
	} else {
		header.style.background = "transparent";
		header.classList.remove("shadow");
	}
})



