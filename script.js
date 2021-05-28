let board = document.querySelector(".board");
let tool = board.getContext("2d");
let topIcons = document.querySelector(".top_icons");
let boardObj = document.querySelector(".board").getBoundingClientRect();
let penBtn = document.querySelector(".pen");
let eraserBtn = document.querySelector(".eraser");
let notesBtn = document.querySelector(".notes");
let uploadBtn = document.querySelector(".upload");
let downloadBtn = document.querySelector(".download");
let zoomInBtn = document.querySelector(".zoomin");
let zoomOutBtn = document.querySelector(".zoomout");
let isPenSelected = false;

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

function getY(y) {
    return y-boardObj.top;
}

penBtn.addEventListener("click",function (e) {
    if(!isPenSelected){
        penBtn.classList.add("active-btn");
        let ip = document.createElement("input");
        ip.type = "color";
        document.querySelector("body").append(ip);
        ip.style.marginLeft = e.clientX+"px";
        ip.style.marginTop = e.clientY+"px";
        // console.log(ip.style.marginLeft + " " + ip.style.marginTop);
        ip.click();
    }else{
        penBtn.classList.remove("active-btn");
    }
    isPenSelected = !isPenSelected;
})