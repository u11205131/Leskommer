var RATE = 1.50;

function calcReplaceItems(el){
	//SEND CALCULATE REQUEST

	//out(el.id);
	
	var type = document.getElementsByName("lights")[0].value;
	var watt = document.getElementsByName("watts")[0].value;
	var time = document.getElementsByName("hoursOp")[0].value;
	
	var kWh = watt/1000*time;
	var cost = kWh*RATE*30;
	var save = 6/1000*time*RATE*30;
	var savings = cost - save;
	
	var replacement = "LED: " + 6/1000*time + "kWh @ R" + save.toFixed(2);
	
	var tr = createElement("tr");

	var tdRem = createElement("td");
	var imgRem = createElement("img", ["src", "../Images/removeUp.png"], ["onclick", "removeItemRow(this)"], ["class", "minus"]);
	tdRem.appendChild(imgRem);

	var tdName = createElement("td");
	var txtName = createElement("Text", type + ": " + kWh + "kWh @ R" + cost.toFixed(2));
	tdName.appendChild(txtName);

	var tdReplace = createElement("td");
	var txtReplace = createElement("Text", replacement);
	tdReplace.appendChild(txtReplace);

	var tdMoney = createElement("td");
	var txtMoney = createElement("Text", "R" + savings.toFixed(2));
	tdMoney.appendChild(txtMoney);

	tr.appendChild(tdRem);
	tr.appendChild(tdName);
	tr.appendChild(tdReplace);
	tr.appendChild(tdMoney);

	document.getElementById("tableReplace").appendChild(tr);
}

function removeItemRow(el){
	var tr = el.parentNode.parentNode;
	var table = tr.parentNode;
	table.removeChild(tr);
}