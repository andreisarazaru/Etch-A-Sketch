document.addEventListener("DOMContentLoaded", function(){
  createSheet(16);

  let select = document.getElementById("select-button");
  select.addEventListener("click", function(){
    let size = getSize();
    createSheet(size);
  });

  console.log("Etch-A-Sketch!");
})

function createSheet(size)
{
  let container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for(let i = 0; i <= numDivs; i++)
  {
    let div = document.createElement("div");
    div.style.backgroundColor = "whitesmoke";
    div.classList.add("box-div");
    container.insertAdjacentElement("beforeend", div);
  }
}

function getSize()
{
  let input = prompt("What is the size of the sheet?");
  let message = document.getElementById("message");
  if (input == "")
  {
    message.textContent = "Please enter a number";
  }
  else if (input < 0 || input > 100)
  {
    message.textContent = "Please enter a number between 0 and 100 only.";
  }
  else 
  {
    message.textContent = "Now you play!";
  }
  return input;
}

function colorHandler()
{
  const chooseColors = [
    "lightcoral",
    "lightorange",
    "lightyellow",
    "lightgreen", 
    "lightblue", 
    "lightpink", 
    "lightskyblue", 
    "lightsalmon" ];
    const randomColor = chooseColors[Math.floor(Math.random() * chooseColors.length)];
    this.style.backgroundColor = randomColor;
}

function changeColor()
{
  let boxDiv = Array.from(document.getElementsByClassName("box-div"));
  boxDiv.forEach((div) => {
    div.addEventListener("mouseover", colorHandler);
  });
}

let rainbow = document.getElementById("rainbow-button")
rainbow.addEventListener("click", changeColor);

function clearSheet()
{
  const boxDiv = document.getElementsByClassName("box-div");
  for (let i = 0; i < boxDiv.length; i++) {
    boxDiv[i].style.backgroundColor = "whitesmoke";
}
}


let reset = document.getElementById("reset-button");
reset.addEventListener("click", clearSheet);

function blackPen()
{
  const color = "black";
  this.style.backgroundColor = color;
}

function blackHover()
{
  let boxDiv = Array.from(document.getElementsByClassName("box-div"));
  boxDiv.forEach((div) => {
    div.addEventListener("mouseover", blackPen);
  });
}

let black = document.getElementById("black-button");
black.addEventListener("click", blackHover);

function eraserPen()
{
  const color = "black";
  this.style.backgroundColor = "whitesmoke";
}

function eraseElement()
{
  let boxDiv = Array.from(document.getElementsByClassName("box-div"));
  boxDiv.forEach((div) => {
    div.addEventListener("mouseover", eraserPen);
  });
}

let eraser = document.getElementById("eraser-button");
eraser.addEventListener("click", eraseElement);

