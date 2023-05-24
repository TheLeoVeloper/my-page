let header = document.querySelector(".header");
let progressbar = document.getElementById("progress-bar")
let totalHeight = document.body.scrollHeight - window.innerHeight;
let hiddenElements = document.querySelectorAll(".hidden");
let observerItem = document.querySelectorAll("#observer-item");


const typed = new Typed('.typed', {
    strings: [
     '<i class="writes">UI/UX Designer</i>',
     "<i class='writes'>Web developer</i>", 
     "<i class='writes'>Android developer</i>", 
     "<i class='writes'>Frontend developer</i>", 
     "<i class='writes'>Backend developer</i>",
	 "<i class='writes'>Fullstack developer</i>"
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

console.log(hiddenElements);

window.addEventListener("scroll", () => {
	let value = Math.floor(window.scrollY);

	if(value != 0){
		header.style.background = "#091a2a";
		header.classList.add("shadow");
	} else {
		header.style.background = "transparent";
		header.classList.remove("shadow");
	}
})

window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressbar.style.height = progressHeight + "%"
}

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	})
})

observerItem.forEach((el) => observer.observe(el));