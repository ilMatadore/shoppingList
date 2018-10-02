var button = document.getElementById("button-addon2");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

function createListElement() {

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.classList.add("list");

	var remove = document.createElement("button");
	remove.appendChild(document.createTextNode("Remove"));
	li.appendChild(remove);
	remove.onclick = removeIt;
	remove.className = "btn";

	var done1 = document.createElement("button");
	done1.appendChild(document.createTextNode("Done"));
	li.appendChild(done1);
	done1.onclick = done;
	done1.className = "btn";
		
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

function done(event) { 
    event.target.parentNode.classList.toggle("done");
}

function removeIt(evt) {
	evt.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);





