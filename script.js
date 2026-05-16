// ANIMAÇÃO DOS BOXES
const boxes = document.querySelectorAll(".box");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  boxes.forEach(box => {
    const top = box.getBoundingClientRect().top;

    if (top < trigger) {
      box.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ❤️ CORAÇÕES (FORA DO SCROLL)
const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (10 + Math.random() * 6) + "px";
  heart.style.animationDuration = (10 + Math.random() * 6) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 16000);
}

/* 🔥 AGORA SÓ UM INTERVAL */
setInterval(createHeart, 700); // aumentei pra ficar mais leve


// 🎬 FINAL COM IMPACTO
const finalBox = document.querySelector(".final-box");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      finalBox.classList.add("active");
    }
  });
}, {
  threshold: 0.6
});

observer.observe(finalBox);

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let playing = false;

// 🔥 função fora (correto)
function fadeIn(audio) {
  audio.volume = 0;
  audio.play();

  let vol = 0;
  const target = 0.02; // volume final

  const interval = setInterval(() => {
    if (vol < target) {
      vol += 0.0015; // 🔥 mais lento
      audio.volume = vol;
    } else {
      clearInterval(interval);
    }
  }, 350); // 🔥 intervalo maior = mais suave
}

btn.addEventListener("click", toggleMusic);
btn.addEventListener("touchstart", toggleMusic); // 🔥 mobile

function toggleMusic() {
  if (!playing) {
    fadeIn(music);
    btn.innerHTML = "🔊";
    playing = true;
  } else {
    music.pause();
    btn.innerHTML = "🎵";
    playing = false;
  }
};