
const inputValue = document.querySelector("#input");
const btn = document.querySelector("#button");
const errorInput = document.querySelector("#error");

function check() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailPattern.test(inputValue.value);
}

btn.addEventListener("click", function (event) {
    if (check()) {
        errorInput.style.display = "block";
        errorInput.style.color = "green";
        errorInput.textContent = "Email hợp lệ";
    } else {
        errorInput.style.display = "block";
        errorInput.style.color = "red";
        errorInput.textContent = "Email không hợp lệ";
    }
    inputValue.value = ""; 
});