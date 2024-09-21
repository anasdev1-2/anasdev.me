// Get the canvas element and context
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Initialize variables
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Array of characters (numbers and hex digits)
const characters = "0123456789ABCDE".split("");

// Number of columns and their Y positions
let columns = Math.floor(canvasWidth / 20);
let yPositions = Array(columns).fill(0);

// Function to handle window resize and update canvas dimensions
function resizeCanvas() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Recalculate the number of columns and reset Y positions
  columns = Math.floor(canvasWidth / 20);
  yPositions = Array(columns).fill(0);
}

// Listen for window resize events and resize the canvas accordingly
window.addEventListener("resize", resizeCanvas);

// Function to update the matrix animation
function updateMatrix() {
  // Set the background with slight opacity for the trailing effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Set the text style
  ctx.fillStyle = "#2200ffef"; // Green color for the matrix effect
  ctx.font = "16px monospace"; // Monospace font for clear matrix-like characters

  // Loop through each column
  for (let i = 0; i < columns; i++) {
    // Select a random character
    const character = characters[Math.floor(Math.random() * characters.length)];

    // Draw the character at the current position
    ctx.fillText(character, i * 20, yPositions[i]);

    // Move the column down by 20 pixels
    yPositions[i] += 20;

    // Reset the position if it reaches the bottom of the canvas
    if (yPositions[i] > canvasHeight && Math.random() > 0.975) {
      yPositions[i] = 0;
    }
  }
}

// Function to render the matrix animation
function renderMatrix() {
  updateMatrix();
  requestAnimationFrame(renderMatrix);
}

// Start the animation
renderMatrix();
