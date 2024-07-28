const canvas = document.querySelector('.js-draw');
// console.log(window);
// console.log(canvas.getContext('2d'));
const context = canvas.getContext('2d');
// console.log(context);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 20;


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;





const draw = function (e) {
    if (!isDrawing) return;
    // console.log(e);
    context.beginPath() //starts a new path
    context.moveTo(lastX,lastY) //moves the starting point of the path to the last known coordinates. start from
    context.lineTo(e.offsetX, e.offsetY) //creates a line to the current mouse position. go to
    context.strokeStyle = `hsl(${hue}, 100% , 50%)`
    context.stroke(); //actually draws the line on the canvas
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    // console.log(hue);
    if(hue >=360){
        hue = 0;
    }
    // console.log(hue);
}




canvas.addEventListener("mousemove",draw);

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true
    lastX = e.offsetX;
    lastY = e.offsetY;
    // console.log('Mouse down event:', e); // Debugging statement
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false
    // console.log('Mouse up event'); // Debugging statement
});
canvas.addEventListener("mouseout", () => {
    isDrawing = false
    // console.log('Mouse out event'); // Debugging statement
});