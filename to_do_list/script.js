const todoTask = document.getElementById(`todoTask`);
const todoBtn = document.getElementById(`todoBtn`);
const paraOne = document.getElementById(`paraOne`);

todoBtn.onclick = function addTask(){

    if(!isNaN(todoTask.value)){
        alert(`Please enter valid content`)
    }else{
        paraOne.textContent = todoTask.value
    }
}