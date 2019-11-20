function addToList() {
    let text = document.getElementById("input").value + " ";
    let newItemContent = document.createTextNode(text);
    let newItem = document.createElement("li");
    let list = document.getElementById("toDoList");
    let id = document.getElementsByTagName("li").length;

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove from list";
    newItem.id = "li" + id;
    removeButton.id = id;
    removeButton.onclick = function () { removeFromList(removeButton.id) }

    newItem.appendChild(newItemContent);
    newItem.appendChild(removeButton);
    list.appendChild(newItem);
}

function removeFromList(id) {
    let element = document.getElementById("li" + id);
    element.remove();
}