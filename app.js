//targeting button
const btn = document.querySelector("button");

//listening and  name it a function
btn.addEventListener("click", getNumber);
let number = 1;
let activeNumber = 1;

//making a function
function getNumber() {
  let div = document.createElement("div");
  div.textContent = number;
  if (activeNumber == 5) {
    activeNumber = 0;
    div.classList.add("circle");
  }
  document.body.appendChild(div);
  number++;
  activeNumber++;
}
