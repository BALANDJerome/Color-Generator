// Créer 3 variables pour stocker 3 chiffres aléatoires

// Donner au body une couleur de fond en rgb()

// Montrer sur le body la couleur rgb()

// const backgroundBody = document.querySelector("body")
generateColor = () => {
  setTimeout(() => {
    let color1 = [Math.floor(Math.random() * 256)];
    let color2 = [Math.floor(Math.random() * 256)];
    let color3 = [Math.floor(Math.random() * 256)];
    rgb.textContent = `rgb(${color1},${color2},${color3})`;
    document.body.style.background = rgb.innerText;
    generateColor()
  }, 2000)
}
generateColor()