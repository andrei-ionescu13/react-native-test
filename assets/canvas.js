export default () => `const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const history = [];

const drawLine = () => {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  history.forEach(hist => {
    x += hist.x;
    y += hist.y;
    ctx.lineTo(x, y);
  })
  ctx.stroke();
}

document.addEventListener("message", function (event) {
  switch (event.data) {
    case 'left':
      history.push({ x: -10, y: 0 });
      break;
    case 'right':
      history.push({ x: 10, y: 0 });
      break;
    case 'up':
      history.push({ x: 0, y: -10 });
      break;
    case 'down':
      history.push({ x: 0, y: 10 });
      break;
    default:
      break;
  }
  drawLine();
  window.ReactNativeWebView.postMessage(history.toString())
});
`