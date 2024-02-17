// let pause = true

// const generateColor = () => {
//   if (pause === false) {
//     let color1 = [Math.floor(Math.random() * 255)];
//     let color2 = [Math.floor(Math.random() * 255)];
//     let color3 = [Math.floor(Math.random() * 255)];
//     rgb.textContent = `rgb(${color1},${color2},${color3})`;
//     document.body.style.background = rgb.innerText;
//     setTimeout(() => {
//       generateColor()
//     }, 2000)
//   }
// }
// btn.addEventListener("click", () => {
//   if (pause === true) {
//     pause = !pause
//     btn.style.animation = "click 2s forwards";
//     setTimeout(() => {
//       btn.textContent = "Stop"
//     }, 1000)
//     generateColor()
//   } else {
//     pause = !pause
//     btn.textContent = "start"
//   }
// })

const generateColor = () => {
  let color1 = [Math.floor(Math.random() * 255)];
  let color2 = [Math.floor(Math.random() * 255)];
  let color3 = [Math.floor(Math.random() * 255)];
  rgb.textContent = `rgb(${color1},${color2},${color3})`;
  document.body.style.background = rgb.innerText;
}
const anim = () => {
  btn.className = "btn"
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      btn.className = "btnAnim"
    })
  })
}
let interval = null
btn.addEventListener("click", () => {
  anim()
  if (interval === null) {
    interval = setInterval(generateColor, 2000)
    setTimeout(() => {
      btn.textContent = "Stop"
    }, 1000)
  } else {
    clearInterval(interval)
    interval = null
    setTimeout(() => {
      btn.textContent = "Start"
    }, 1000)
  }
})