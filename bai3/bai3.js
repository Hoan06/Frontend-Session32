
const inputValue = document.querySelector("#input");
const btn = document.querySelector("#button");
const olList = document.querySelector("ol");
const formItem = document.querySelector("#form");
const error = document.querySelector("#error");
let value;
const subject = [];

function renderSubject() {
    olList.textContent = "";
    subject.forEach(value => {
        const liItem = document.createElement("li");
        liItem.textContent = value.name;
        olList.appendChild(liItem);
    });
};

inputValue.addEventListener("input",function (event) {
    if (!event.target.value){
        error.style.display = "block";
        alert("Tên môn học không được để trống");
    } else {
        value = event.target.value;
        error.style.display = "none";
    }
});

formItem.addEventListener("submit",function (event) {
    event.preventDefault();
    const newSubject = {
        id: Math.ceil(Math.random() * 10000),
        name: inputValue.value,
        status: false,
      };
    
      subject.push(newSubject);
    
      inputValue.value = "";

      renderSubject();
});
