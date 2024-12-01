const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

// linear gradient
const grad = ctx.createLinearGradient(0, 0, 280, 0);
grad.addColorStop(0, "#3e1c14");  
grad.addColorStop(1, "#81530d");  


ctx.font = "50px Arial";

// colors applied
ctx.strokeStyle = "white";  
ctx.lineWidth = 6;  
ctx.strokeText("World of Exploring", 10, 80);
ctx.strokeStyle = grad;  
ctx.lineWidth = 5;  // note to self: higher or lower will cause it to bleed or look patchy
ctx.strokeText("World of Exploring", 10, 80);
