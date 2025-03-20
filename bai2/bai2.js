
const btn = document.querySelector("#button");
const countClick = document.querySelector("#count");
let count = 0;

btn.addEventListener('click',function(){
    countClick.innerHTML = `Số lần bấm là : ${++count} `;
});