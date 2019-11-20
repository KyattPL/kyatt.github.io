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

    saveLocalStorage();
}

function removeFromList(id) {
    let element = document.getElementById("li" + id);
    element.remove();

    saveLocalStorage();
}

function saveLocalStorage() {
    let numOfItems = document.getElementsByTagName("li").length;
    window.localStorage.clear();

    for (let i = 0; i < numOfItems; i++) {
        let item = document.getElementsByTagName("li")[i].childNodes[0].textContent;
        window.localStorage.setItem("li" + (i + 1), item);
    }
}

function retrieveLocalStorage() {
    let numOfItems = window.localStorage.length;
    let list = document.getElementById("toDoList");
    console.log(list)
    for (let i = 0; i < numOfItems; i++) {
        let itemText = window.localStorage.getItem("li" + (i + 1));
        let textNode = document.createTextNode(itemText);
        let itemNode = document.createElement("li");
        itemNode.appendChild(textNode);

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove from list";
        itemNode.id = "li" + i;
        removeButton.id = i;
        removeButton.onclick = function () { removeFromList(removeButton.id) };
        itemNode.appendChild(removeButton);
        list.appendChild(itemNode);
    }
}