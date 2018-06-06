var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// Select All Delete Buttons
var del = document.querySelectorAll(".del");

// Select All List
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var delBtn = document.createElement("button");
    delBtn.className = "del";
    delBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value + " "));
    li.appendChild(delBtn);
	ul.appendChild(li);
	input.value = "";

	// Re Initialize the List and Delete Buttons Everytime a new element is created
    initializeList();
    initializeDelete();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

/*
Target the list that triggered the event and add or remove ".done" class to it
 */
function addDoneAfterClick(e) {
    if (e.target.classList.contains("done")) {
        e.target.classList.remove("done");
    } else {
        e.target.classList.add("done");
    }
}

/*
Target the parent of the delete button (In this case, the list that holds the button) that triggered the list and set its OuterHTML to an empty string effectively deleting it.
 */
function deleteListAfterClick(e) {
    e.target.parentElement.outerHTML = "";
}

/*
Loop through each list and assign it an event listener
 */
function initializeList() {
    li = document.querySelectorAll("li");
    li.forEach(function (i) {
        i.addEventListener("click", addDoneAfterClick);
    });
}

/*
Loop through each button and assign it an event listener
 */
function initializeDelete() {
    del = document.querySelectorAll(".del");
    del.forEach(function (i) {
        i.addEventListener("click", deleteListAfterClick);
    });
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Initialize both the initializer XD
initializeList();
initializeDelete();