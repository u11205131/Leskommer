function calcReplaceItems(el){
	//SEND CALCULATE REQUEST

	out(el.id);

	var tr = createElement("tr");

	var tdRem = createElement("td");
	var imgRem = createElement("img", ["src", "../Images/addUp.gif"], ["onclick", "removeItemRow(this)"]);
	tdRem.appendChild(imgRem);

	var tdName = createElement("td");
	var txtName = createElement("Text", "Item name and Properties");
	tdName.appendChild(txtName);

	var num = Math.random();

	var tdMoney = createElement("td");
	var txtMoney = createElement("Text", num);
	tdMoney.appendChild(txtMoney);

	tr.appendChild(tdRem);
	tr.appendChild(tdName);
	tr.appendChild(tdMoney);

	document.getElementById("tableReplace").appendChild(tr);
}

function removeItemRow(el){
	var tr = el.parentNode.parentNode;
	var table = tr.parentNode;
	table.removeChild(tr);
}