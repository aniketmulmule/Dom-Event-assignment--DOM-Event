var button = document.querySelector("button");
var ol = document.querySelector("ol");
var input = document.querySelector("input");
var listCount = 0;

function AddListItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var button = document.createElement("button");
    button.innerHTML = "delete";
    listCount++;
    button.setAttribute("id", "button-"+listCount);
    li.appendChild(button);
    li.setAttribute("id","list-"+listCount);
    ol.appendChild(li);
}

function OnMouseClick() {

    if (input.value.length > 0) {
        AddListItem();
        input.value = "";
    }
}
function OnKeyPress(event) {

    if (input.value.length > 0 && event.which == 13) {
        AddListItem();
        input.value = "";
    }
}

button.addEventListener("click", OnMouseClick);

document.addEventListener("keypress", OnKeyPress);

document.addEventListener('click', DeleteListItemOnButtonClick);

document.addEventListener("click",MarkListItemAsDone);

function MarkListItemAsDone(e) {
    if (e.target && e.target.id.toString().includes("list")) {
        e.target.classList.toggle("done");
    }
}

function DeleteListItemOnButtonClick(e) {
    if (e.target && e.target.id.toString().includes("button")) {
        console.log(e.target.id);
        e.target.parentNode.remove();
    }
}
