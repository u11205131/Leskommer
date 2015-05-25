var RATE = 1.50;
var WATTS = [""];
var SIMILAR = [""];

function calcReplaceItems(el){
	//SEND CALCULATE REQUEST

	//out(el.id);
	var type = document.getElementsByName("lights")[0].value;
	var typeIndex = document.getElementsByName("lights")[0].selectedIndex;
	var watt = parseFloat(document.getElementsByName("watts")[0].value);
	var time = parseFloat(document.getElementsByName("hoursOp")[0].value);
	
	var kWh = watt/1000*time;
	var cost = kWh*RATE*30;

	var tr = createElement("tr");

	var tdRem = createElement("td");
	var imgRem = createElement("img", ["src", "../Images/removeUp.png"], ["onclick", "removeItemRow(this)"], ["class", "minus"]);
	tdRem.appendChild(imgRem);

	var tdName = createElement("td");
	var txtType = createElement("Text", type + " " + watt + "W: ");
	var txtDesc = createElement("Text", kWh.toFixed(3) + "kWh @ R" + cost.toFixed(2));
	tdName.appendChild(txtType);
	tdName.appendChild(createElement("br"));
	tdName.appendChild(txtDesc);

	//**************Dropdown of Types**************//
	var tdReplace = createElement("td", ["id", "testing"]);

	var tempType = document.getElementsByName("lights")[0];
	var txtTypeReplace = createElement("select", ["onchange", "replaceWatts(this)"], ["class", typeIndex + " " + watt + " " + time]);
	
	var tempStr = SIMILAR[typeIndex].substring(SIMILAR[typeIndex].indexOf(watt + ":") + (watt + ":").length);
	tempStr = tempStr.substring(0, tempStr.indexOf(";"));
	
	//~ alert(tempStr);
	var length = (tempStr.split(",").length);
	var firstWattage = -1;
	
	for (var x = 0; x < length; ++x) {
		var option = document.createElement('option');
		option.text = tempStr.substring(0, tempStr.indexOf("-"));
		option.value = option.text;
		
		if (firstWattage == -1)
			firstWattage = parseFloat(tempStr.substring(tempStr.indexOf("-")+1, tempStr.indexOf(",")));
		
		if (tempStr.indexOf(",") != -1)
			watt = parseFloat(tempStr.substring(tempStr.indexOf("-")+1, tempStr.indexOf(",")));
		else
			watt = parseFloat(tempStr.substring(tempStr.indexOf("-")+1));
		
		option.text = option.text +  " " + watt + "W";
		
		tempStr = tempStr.substring(tempStr.indexOf(",")+1);
		txtTypeReplace.appendChild(option);
	}
	
	tdReplace.appendChild(txtTypeReplace);
	tdReplace.appendChild(createElement("br"));

	kWh = firstWattage/1000*time;
	var save = kWh*RATE*30;
	
	var txtReplace = createElement("Text", kWh.toFixed(3) + "kWh @ R" + save.toFixed(2));
	var txtReplaceP = createElement("p");
	txtReplaceP.className = "disposeRep";
	txtReplaceP.appendChild(txtReplace);
	tdReplace.appendChild(txtReplaceP);
	//**************END**************//

	var savings = cost - save;
	
	var tdMoney = createElement("td");
	var txtMoney = createElement("Text", "R" + savings.toFixed(2));
	var txtMoneyP = createElement("p");
	txtMoneyP.className = "disposeSave";
	txtMoneyP.appendChild(txtMoney);
	tdMoney.appendChild(txtMoneyP);

	tr.appendChild(tdRem);
	tr.appendChild(tdName);
	tr.appendChild(tdReplace);
	tr.appendChild(tdMoney);

	document.getElementById("tableReplace").appendChild(tr);
	
	calcTotal();
}

function removeItemRow(el){
	var tr = el.parentNode.parentNode;
	var table = tr.parentNode;
	table.removeChild(tr);
}

function calcTotal() {
	var element = document.getElementsByClassName("disposeSave");
	var total = 0.0;
	for (var x = 0; x < element.length; ++x) {
		total += parseFloat(element[x].innerHTML.substring(1));
	}
	
	document.getElementById("totalSum").innerHTML = "Total Savings: R" + total.toFixed(2);
}

function replaceWatts(el){
	
	var tempStr = el.className;
	var type = parseInt(tempStr.substring(0, tempStr.indexOf(" ")));
	tempStr = tempStr.substring(tempStr.indexOf(" ") + 1);
	var selected = el.value;
	var watt = parseFloat(tempStr.substring(0, tempStr.indexOf(" ")));
	tempStr = tempStr.substring(tempStr.indexOf(" ") + 1);
	var time = parseFloat(tempStr.substring(0));
	
	var kWh = watt/1000*time;
	var cost = kWh*RATE*30;
	
	tempStr = SIMILAR[type].substring(SIMILAR[type].indexOf(watt + ":") + (watt + ":").length);
	tempStr = tempStr.substring(0, tempStr.indexOf(";"));
	tempStr = tempStr.substring(tempStr.indexOf(selected)+selected.length+1);
	
	if (tempStr.indexOf(",") != -1)
		var watt = parseFloat(tempStr.substring(0, tempStr.indexOf(",")));
	else
		var watt = parseFloat(tempStr.substring(0));
		
	kWh = watt/1000*time;
	var save = kWh*RATE*30;
	
	var index = -1;
	var element = document.getElementsByClassName("disposeRep");
	for (var x = 0; x < element.length; ++x) {
		if (el.parentNode === element[x].parentNode)
			index = x;
	}
	element[index].innerHTML = "";
	element[index].appendChild(createElement("Text", kWh.toFixed(3) + "kWh @ R" + save.toFixed(2)));
	
	var savings = cost - save;
	
	element = document.getElementsByClassName("disposeSave")[index];
	element.innerHTML = "";
	element.appendChild(createElement("Text", "R" + savings.toFixed(2)));
	
	calcTotal();
}

function setWatts(inputWatts, inputSimilar){
	var temp = inputWatts;
	var similar = inputSimilar;
	
	var length = (temp.split("@").length-1);
	
	for (var x = 0; x < length; ++x) {
		WATTS[x] = temp.substring(1, temp.indexOf("@"));
		temp = temp.substring(temp.indexOf("@") + 1);
		
		SIMILAR[x] = similar.substring(0, similar.indexOf("@"));
		similar = similar.substring(similar.indexOf("@") + 1);
	}
	
	var element = document.getElementsByName("lights")[0];
	element.setAttribute("onchange", "popWatts()");
}

function popWatts(){
	var parent = document.getElementsByName("watts")[0];
	parent.innerHTML = "";
	
	var element = document.getElementsByName("lights")[0];
	var count = (WATTS[element.selectedIndex].split(" ").length);
	
	var temp = WATTS[element.selectedIndex];
	for (var y = 0; y < count; ++y) {
		var option = document.createElement('option');
		
		if (temp.indexOf(" ") != -1)
			option.text = temp.substring(0, temp.indexOf(" "));
		else
			option.text = temp.substring(0);

		temp = temp.substring(temp.indexOf(" ") + 1);
		option.value = option.text;
		parent.appendChild(option);
	}
}

/*ROELOF ADDED NEW*/
$(document).on("click", "#displayDetails", function(e){
	e.preventDefault();
	var lightName = document.getElementsByName("lights")[0].value;

	debug("Display Details");
	var bg = createElement(DIV, [CLASS, "coverDIV"]);
	var close = createElement(IMG, [SRC, "../Images/cross.png"], [CLASS, "close"]);
	var product = createElement(IMG, [SRC, "../Images/Products/"+lightName+".jpg"]);
	var productName = createElement(H6, lightName);
	var holder = createElement(DIV, [CLASS, "imgHolder"]);
	//~ $(holder).css("top", $( window ).height()*0.50);
	//~ $(holder).css("left", $( window ).width()*0.25);
	$(holder).css("top", "35vmax");
	$(holder).css("left", "37vmax");
		
	holder.appendChild(close);
	holder.appendChild(product);
	holder.appendChild(productName);
	bg.appendChild(holder);
	document.getElementsByTagName("body")[0].appendChild(bg);
});
$(document).on("click", ".close", function(e){
	e.preventDefault();
	$(".coverDIV").remove();
});