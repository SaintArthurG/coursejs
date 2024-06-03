const ps = document.querySelector(".paragrafos").querySelectorAll("p");

const stylesBody = getComputedStyle(document.body);
const bgc = stylesBody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = bgc;
    p.style.color = "white";
}