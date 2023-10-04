const BRUSH_SIZES = [2, 5, 10];
const COLORS = ["black", "white", "red", "blue", "green", "yellow"];

function load() {
  // Drawing vars
  let drawing = false;
  let prevX, prevY;
  const buttons = {};

  // Configure dom
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const palette = document.querySelector(".palette");

  const makeButton = (category) => {
    const btn = document.createElement("button");
    palette.appendChild(btn);
    if (!buttons[category]) buttons[category] = [];
    buttons[category].push(btn);
    return btn;
  };
  const clearCategory = (category) => {
    for (const btn of buttons[category]) {
      btn.classList.remove("selected");
    }
  };

  for (let i = 0; i < BRUSH_SIZES.length; i++) {
    const btn = makeButton("size");
    const dot = document.createElement("div");
    btn.appendChild(dot);
    dot.classList.add("dot");
    dot.style.width = BRUSH_SIZES[i];
    dot.style.height = BRUSH_SIZES[i];
    btn.addEventListener("click", () => {
      clearCategory("size");
      ctx.lineWidth = BRUSH_SIZES[i];
      btn.classList.add("selected");
    });
    if (i == 0) btn.classList.add("selected");
  }
  ctx.lineWidth = BRUSH_SIZES[0];
  const divider = document.createElement("div");
  divider.innerText = "|";
  palette.appendChild(divider);
  for (let i = 0; i < COLORS.length; i++) {
    const btn = makeButton("color");
    btn.style.background = COLORS[i];
    btn.addEventListener("click", () => {
      clearCategory("color");
      ctx.strokeStyle = COLORS[i];
      btn.classList.add("selected");
    });
    if (i == 0) btn.classList.add("selected");
  }
  ctx.strokeStyle = COLORS[0];
  const btn = document.createElement("button");
  btn.innerText = "Clear";
  palette.appendChild(btn);
  btn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  ctx.lineCap = "round";
  ctx.imageSmoothingEnabled = false;

  // Event listeners
  canvas.addEventListener("pointermove", (evt) => {
    const { offsetX: x, offsetY: y } = evt;
    if (drawing) {
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(x, y);
      ctx.stroke();
      prevX = x;
      prevY = y;
    }
  });
  canvas.addEventListener("pointerdown", (evt) => {
    drawing = true;
    prevX = evt.offsetX;
    prevY = evt.offsetY;
    ctx.beginPath();
  });
  canvas.addEventListener("pointerup", (evt) => {
    drawing = false;
    ctx.closePath();
  });
}

window.onload = load;
