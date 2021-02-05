const canvas = () => `<canvas id="canvas"></canvas>
<script>
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const leftButton = {
    id: 'left',
    x: 75,
    y: canvas.height - 100,
    width: 50,
    height: 100
  }

  const rightButton = {
    id: 'right',
    x: 100,
    y: canvas.height - 100,
    width: 50,
    height: 100
  }

  const upButton = {
    id: 'up',
    x: canvas.width - 150,
    y: canvas.height - 100,
    width: 100,
    height: 50
  }

  const downButton = {
    id: 'down',
    x: canvas.width - 150,
    y: canvas.height - 75,
    width: 100,
    height: 50
  }

  const clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  const drawLeftButton = () => {
    ctx.beginPath();
    ctx.moveTo(leftButton.x, leftButton.y);
    ctx.lineTo(leftButton.x, leftButton.y + leftButton.height);
    ctx.lineTo(leftButton.x - leftButton.width, leftButton.y + (leftButton.height / 2));
    ctx.closePath();
    ctx.stroke();
  }

  const drawRightButton = () => {
    ctx.beginPath();
    ctx.moveTo(rightButton.x, rightButton.y);
    ctx.lineTo(rightButton.x, rightButton.y + rightButton.height);
    ctx.lineTo(rightButton.x + rightButton.width, rightButton.y + rightButton.height / 2);
    ctx.closePath();
    ctx.stroke();
  }

  const drawUpButton = () => {
    ctx.beginPath();
    ctx.moveTo(upButton.x, upButton.y);
    ctx.lineTo(upButton.x + upButton.width, upButton.y);
    ctx.lineTo(upButton.x + upButton.width / 2, upButton.y - upButton.height);
    ctx.closePath();
    ctx.stroke();
  }

  const drawDownButton = () => {
    ctx.beginPath();
    ctx.moveTo(downButton.x, downButton.y);
    ctx.lineTo(downButton.x + downButton.width, downButton.y);
    ctx.lineTo(downButton.x + downButton.width / 2, downButton.y + downButton.height);
    ctx.closePath();
    ctx.stroke();
  }

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

  drawLeftButton();
  drawRightButton();
  drawUpButton();
  drawDownButton();

  const buttons = [leftButton, rightButton, upButton, downButton];

  canvas.addEventListener('click', (event) => {
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;

    buttons.forEach(button => {
      switch (button.id) {
        case 'left':
          if (offsetX <= button.x && offsetX >= button.x - button.width && offsetY >= button.y && offsetY <= button.y + button.height)
            history.push({ x: -10, y: 0 });
          break;
        case 'right':
          if (offsetX >= button.x && offsetX <= button.x + button.width && offsetY >= button.y && offsetY <= button.y + button.height)
            history.push({ x: 10, y: 0 });
          break;
        case 'up':
          if (offsetX >= button.x && offsetX <= button.x + button.width && offsetY <= button.y && offsetY >= button.y - button.height)
            history.push({ x: 0, y: -10 });
          break;
        case 'down':
          if (offsetX >= button.x && offsetX <= button.x + button.width && offsetY >= button.y && offsetY <= button.y + button.height)
            history.push({ x: 0, y: 10 });
          break;
        default:
          break;
      }
    })
    drawLine();
  })

</script>`

export default canvas;