function currItemsBtn(){
	info("Add Current Item Field");
	var element = document.getElementById("currentItems");
	element.appendChild(create(	["Elem", "tr"], ["Elem", "td"], ["Text", "Another item"]));
}

function replacngItemsBtn(){
	info("Add Replacing Item Field");
	var element = document.getElementById("replaceItems");
	element.appendChild(create(	["Elem", "tr"], ["Elem", "td"], ["Text", "Another item"]));
}

function calculateBtn(){
	info("Click");
}