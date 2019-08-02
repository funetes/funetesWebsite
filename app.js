const app = document.getElementById('typeWriter');
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1500
});
const typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('FrontEnd')
    .pauseFor(2500)
    .deleteAll()
    .typeString('BackEnd')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Be FullStack')
    .pauseFor(2500)
    .start();


    