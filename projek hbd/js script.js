
const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");
const openButton = document.getElementById("openButton");
const replayButton = document.getElementById("replayButton");

function showBirthday() {
  intro.style.display = "none";

  birthday.classList.add("visible");
  birthday.setAttribute("aria-hidden", "false");

  // Memulai animasi pohon
  void birthday.offsetWidth;
  birthday.classList.add("show");
}

function replayBloom() {
  birthday.classList.remove("show");

  // Mengulang animasi dari awal
  void birthday.offsetWidth;
  birthday.classList.add("show");
}

openButton.addEventListener("click", showBirthday);
replayButton.addEventListener("click", replayBloom);
