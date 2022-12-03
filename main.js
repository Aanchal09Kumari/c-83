var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var lastX,lastY;
color="black";
width_line=1;

var width_screen=screen.width;
var height_screen=screen.height;

var new_width_screen=width_screen-70;
var new_height_screen=height_screen-300;
if(width_screen<992){
    document.getElementById("myCanvas").width=new_width_screen;
    document.getElementById("myCanvas").height=new_height_screen;
    document.body.style.overflow="hidden";

}

canvas.addEventListener("touchstart",touch_start);
function touch_start(e){
    console.log("touch_start");
    color=document.getElementById("colorChange").value;
    console.log(color);
    width_line=document.getElementById("widthChange").value;
    console.log(width_line);
    lastX=e.touches[0].clientX-canvas.offsetLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",touch_move);
function touch_move(e){
    currentX=e.touches[0].clientX-canvas.offsetLeft;
    currentY=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();
    
    lastX=currentX;
    lastY=currentY;
    console.log("current X ="+currentX +" , current Y ="+currentY);
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 }