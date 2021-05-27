let board = document.querySelector(".board");
let tool = board.getContext("2d");
let isMouseDown = false;

board.height = window.innerHeight;
board.width = window.innerWidth;
tool.strokeStyle = "red";
tool.lineWidth = 10;

board.addEventListener("mousedown",function(e){
    isMouseDown = true;
    tool.beginPath();
    tool.moveTo(e.clientX,e.clientY);    
})

board.addEventListener("mousemove",function(e){
    if(isMouseDown){
        tool.lineTo(e.clientX,e.clientY);
        tool.stroke();
    }
})

board.addEventListener("mouseup",function(e){
    tool.lineTo(e.clientX,e.clientY);
    tool.stroke;
    isMouseDown = false;
})
