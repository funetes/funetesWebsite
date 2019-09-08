const app = document.getElementById("typeWriter");
const ball = document.querySelector(".turtle");
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500
});
const typewriter = new Typewriter(app, {
  loop: true
});
typewriter
  .typeString("Developer")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Programmer")
  .pauseFor(2500)
  .deleteAll()
  .start();