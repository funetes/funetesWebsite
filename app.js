const app = document.getElementById("typeWriter");
const ball = document.querySelector(".turtle");
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500
});
const typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString("FrontEnd")
    .pauseFor(2500)
    .deleteAll()
    .typeString("BackEnd")
    .pauseFor(2500)
    .deleteChars(7)
    .typeString("FullStack")
    .pauseFor(2500)
    .start();

const handleClick = e => {
    ball.classList.add("showing");
    ball.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
};

document.addEventListener("mousemove", handleClick);