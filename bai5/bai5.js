
const inputItem = document.querySelector("#input");
const btnAdd = document.querySelector("#button");
const taskList = document.querySelector("#taskList");

btnAdd.addEventListener('click',function (event) {
    let taskText = inputItem.value.trim();
    if (taskText === ""){
        alert("Không được để trống!");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button id="btn-X">X</button>`;
    taskList.appendChild(li);
    event.preventDefault();
    inputItem.value = "";
    let btnDelete = li.querySelector("#btn-X");
    btnDelete.addEventListener('click',function () {
        if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?")){
            li.remove();
        }
    });
});

