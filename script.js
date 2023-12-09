let inputBox = document.querySelector('#input-box');
let listContainer = document.querySelector('ul');
listContainer.innerHTML = localStorage.getItem('to-do-data');

addItem = () => {
    if (inputBox.value.trim() == '') {
        alert("Please enter some task to add")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData();
    }
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI" ) {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === "SPAN" ) {
        e.target.parentElement.remove();
        saveData();
    } 
}, false);

saveData = () => {
    localStorage.setItem("to-do-data", listContainer.innerHTML);
}