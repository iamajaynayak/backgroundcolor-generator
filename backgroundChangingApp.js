var body = document.querySelector("body");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var heading = document.querySelector("h3");


function changeColor(){
	body.style.background = "linear-gradient(to right ," + color1.value +","+ color2.value +")";
	heading.textContent = body.style.background ;
}


color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);