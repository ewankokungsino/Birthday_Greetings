function askReady() {
  document.getElementById("intro-screen").classList.add("hidden");
  document.getElementById("naughty-screen").classList.add("hidden");
  document.getElementById("ready-screen").classList.remove("hidden");
}

function showCakeScreen() {
  document.getElementById("ready-screen").classList.add("hidden");
  document.getElementById("cake-screen").classList.remove("hidden");

  const audio = document.getElementById("birthday-audio");
  if (audio) {
    audio.play().catch((e) => {
      console.log("Audio play was blocked:", e);
    });
  }
}

function notReady() {
  document.getElementById("ready-screen").classList.add("hidden");
  document.getElementById("naughty-screen").classList.remove("hidden");
}

function showFinalGift() {
  document.getElementById("cake-screen").classList.add("hidden");
  const giftScreen = document.getElementById("gift-screen");
  giftScreen.classList.remove("hidden");

  const message = `Happy Birthday! (MORE MESSAGES HERE) 🎉🎂🎈`;

  const textElement = document.getElementById("typing-message");
  const catGif = document.getElementById("cat-gif");
  let index = 0;

  function typeNextChar() {
    if (index < message.length) {
      textElement.innerHTML += message.charAt(index);
      index++;
      setTimeout(typeNextChar, 50);
    } else {
      catGif.style.display = "block";
    }
  }

  textElement.innerHTML = "";
  catGif.style.display = "none";
  typeNextChar();
}
