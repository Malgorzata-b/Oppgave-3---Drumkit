const musicMaster = document.querySelector("#app-container");

const drumMap = {
  clap: "c",
  hihat: "h",
  kick: "k",
  openhat: "o",
  ride: "r",
  snare: "s",
  tink: "t",
  tom: "m",
};

// Loop over the keys in the drumMap object

for (let key in drumMap) {
  // Make drum button div and set it to flex/column
  const drum = document.createElement("div");
  drum.classList.add("drumMaster");
  // Make drum image
  const image = document.createElement("img");
  image.src = `/Images/${key}.png`;
  image.classList.add("pic");
  image.style.height = "6rem";
  image.style.width = "6rem";
  //Drums names
  const drumText = document.createElement("p");
  drumText.textContent = `${key[0].toLocaleUpperCase()}${key.slice(1)}`;
  drumText.classList.add("text");
  // Display keyboard shortcut
  const shortcut = document.createElement("button");
  shortcut.classList.add("Music-drum");
  shortcut.textContent = drumMap[key];
  shortcut.style.fontSize = "2rem";
  // EventListener for clicks
  shortcut.addEventListener("click", () => {
    new Audio(`./sounds/${key}.wav`).play();
  });

  // Appending.
  drum.append(drumText, image, shortcut);
  musicMaster.append(drum);
}

window.addEventListener("keydown", (event) => {
  for (let key in drumMap) {
    if (event.key === drumMap[key]) {
      new Audio(`./sounds/${key}.wav`).play();
      break;
    }
  }
});
