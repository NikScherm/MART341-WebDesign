// Get the canvas element and its context
const canvas = document.getElementById('natureCanvas');
const ctx = canvas.getContext('2d');

let angle = 0;  // Initial angle for rotation

// Function to draw the sun
function drawSun() {
    const radius = 25;  // Radius of the sun (50px diameter)

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set up the transformation for rotation (if needed)
    ctx.save();  
    ctx.translate(canvas.width / 2, canvas.height / 2);  
    ctx.rotate(angle); 
    // Draw the sun (circle)
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);  
    ctx.closePath();

    // Set the color and fill the sun
    ctx.fillStyle = 'yellow';  
    ctx.fill();

    // Restore the context to undo the translation and rotation
    ctx.restore();
}

// Animation
function animate() {
  
    angle += 0.02; 

    // Draw the sun
    drawSun();

    requestAnimationFrame(animate);
}

animate();
