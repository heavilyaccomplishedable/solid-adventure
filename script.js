const graphic = document.getElementById("graphic");
const sound = document.getElementById("sound");

graphic.addEventListener("click", () => {
  graphic.classList.toggle("expanded");
  sound.currentTime = 0;
  sound.play();
});
