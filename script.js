const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

function startDrawing(e)
{
    isDrawing = true;
    ctx.beginPath(e.offsetX, e.offsetY);
    ctx.moveTo(e.offsetX, e.offsetY); // set starting point
}

function draw(e)
{
    if (!isDrawing) return; 

    ctx.lineTo(e.offsetX, e.offsetY); // Create line to current mouse position
    ctx.strokeStyle = 'black'; // Line color
    ctx.lineWidth = 2; // line thickness
    ctx.lineCap = 'round'; // smooth line endings
    ctx.stroke(); // draw line
}

function stopDrawing()
{
    isDrawing = false;
    ctx.closePath();
}