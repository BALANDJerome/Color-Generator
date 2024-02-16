let pause = true

const generateColor = () => {
  if (pause === false) {
    let color1 = [Math.floor(Math.random() * 255)];
    let color2 = [Math.floor(Math.random() * 255)];
    let color3 = [Math.floor(Math.random() * 255)];
    rgb.textContent = `rgb(${color1},${color2},${color3})`;
    document.body.style.background = rgb.innerText;
    setTimeout(() => {
      generateColor()
    }, 2000)
  }
}
btn.addEventListener("click", () => {
  if (pause === true) {
    pause = !pause
    generateColor()
    btn.textContent = "pause"
  } else {
    pause = !pause
    btn.textContent = "start"
  }
})
console.log();