
const btn = document.querySelector("#button");

function changeColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}; 

btn.addEventListener('click',function () {
    document.body.style.backgroundColor = changeColor();
});