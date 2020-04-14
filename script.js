var button = document.getElementById('enter');		
var input = document.getElementById('userinput');
var ul = document.getElementsByClassName("shoplist")[0] ;
var button2 = document.getElementById('delete');



function inputValueLength(){
	return input.value.length;
}

function removeParent() {
   event.target.removeEventListener("click", removeParent);
   event.target.parentNode.remove();
}
 
function createListElement(){
	var button = document.createElement("button")
	button.className = "enter"
	button.innerHTML = "Delete";
	button.onclick = removeParent;

	var li = document.createElement("li");
	var createNode = document.createTextNode(input.value)
		li.appendChild(createNode);
		li.innerHTML = li.innerHTML + "  ";
		li.appendChild(button);

		ul.appendChild(li);
		input.value= "";
}

// добавление зачеркивания 
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}


ul.onclick = function(){
	var target = getEventTarget();
	target.classList.toggle("done");
}

// заканчиваем
function addAfterClick(){
	if(inputValueLength()>0){
		createListElement();
	}
}

function addAfterPress(){
	if(inputValueLength()>0 && event.which==13){
		createListElement();
	}
}

 

 
 

button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterPress);

 
 
 