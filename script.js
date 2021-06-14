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
let penColorBtn = document.querySelector(".penColor");

let isPenSelected = false;
let isEraserSelected = false;
let isMouseDown = false;
let isVisible = true;
let penColor = "red";

board.height = window.innerHeight;
board.width = window.innerWidth;
tool.strokeStyle = "red";
tool.lineWidth = 10;


// to set the width of canvas screen
console.log(window.innerWidth + " " + window.innerHeight);
console.log(document.body.clientWidth + " " + document.body.clientHeight);

// to select pen color
penColorBtn.addEventListener("change", function (e) {
    penColor = e.target.value;
})


// to draw the figures
board.addEventListener("mousedown", function (e) {
    isMouseDown = true;
    if (isEraserSelected) {
        tool.globalCompositeOperation = 'destination-out';
        tool.beginPath();
        tool.moveTo(e.clientX, e.clientY);
    } else {
        tool.strokeStyle = penColor;
        tool.beginPath();
        tool.moveTo(e.clientX, e.clientY);
    }
})

board.addEventListener("mousemove", function (e) {
    if (isMouseDown) {
        if (isEraserSelected) {
            tool.lineTo(e.clientX, getY(e.clientY));
            tool.stroke();
        } else {
            tool.lineTo(e.clientX, getY(e.clientY));
            tool.stroke();
        }
    }
})

board.addEventListener("mouseup", function (e) {
    if (isEraserSelected) {
        tool.globalCompositeOperation = 'source-over';
    } else {
        tool.lineTo(e.clientX, e.clientY);
        tool.stroke();
    }
    isMouseDown = false;
})

// for toggling the menu bar
function myFunction(clicked) {
    clicked.classList.toggle("change");
    if (isVisible) {
        topIcons.style.display = "none";
        isVisible = false;
    } else {
        topIcons.style.display = "flex";
        isVisible = true;
    }
}

// getting y in case of menu bar
function getY(y) {
    return y - boardObj.top;
}

penBtn.addEventListener("click", function (e) {
    if (!isPenSelected) {
        removeActive();
        penBtn.classList.add("active-btn");
    } else {
        penBtn.classList.remove("active-btn");
    }
    isPenSelected = !isPenSelected;
})


// toggle selected btw pencil and eraser
function removeActive() {
    if (isPenSelected) {
        penBtn.classList.remove("active-btn");
    } else if (isEraserSelected) {
        eraserBtn.classList.remove("active-btn");
    }
}


// for eraser
eraserBtn.addEventListener("click", function () {
    if (!isEraserSelected) {
        removeActive();
        eraserBtn.classList.add("active-btn")
    } else {
        eraserBtn.classList.remove("active-btn");
    }
    isEraserSelected = !isEraserSelected;
})


