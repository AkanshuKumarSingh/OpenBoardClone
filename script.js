let board = document.querySelector(".board");
let tool = board.getContext("2d");
let topIcons = document.querySelector(".top_icons");
let boardObj = document.querySelector(".board").getBoundingClientRect();

let isMouseDown = false;
let isVisible = true;


board.height = window.innerHeight;
board.width = window.innerWidth;
tool.strokeStyle = "red";
tool.lineWidth = 10;

console.log(window.innerWidth + " " + window.innerHeight);
console.log(document.body.clientWidth + " " + document.body.clientHeight);

board.addEventListener("mousedown",function(e){
    isMouseDown = true;
    tool.beginPath();
    tool.moveTo(e.clientX,e.clientY);    
})

board.addEventListener("mousemove",function(e){
    if(isMouseDown){
        tool.lineTo(e.clientX,getY(e.clientY));
        tool.stroke();
    }
})

board.addEventListener("mouseup",function(e){
    tool.lineTo(e.clientX,e.clientY);
    tool.stroke();
    isMouseDown = false;
})

function myFunction(clicked) {
    clicked.classList.toggle("change");
    if(isVisible){
        topIcons.style.display = "none";
        isVisible = false;
    }else{
        topIcons.style.display = "flex";
        isVisible = true;
    }
}

console.log(topObj);
function getY(y) {
    return y-boardObj.top;
}