/*==============================================================================
							JS LIBRARY
	This library contains all global variables, constructors, objects and functions
	==============================================================================*/

/*DEBUGGING FUNCTIONS*/
function info(m){
	console.info("From " + arguments.callee.caller.name + " : " + m);
}
function log(m){
	console.log("From " + arguments.callee.caller.name + " : " + m);
}
function error(m){
	console.error("From " + arguments.callee.caller.name + " : " + m);
}
function warn(m){
	console.warn("From " + arguments.callee.caller.name + " : " + m);
}
function debug(m){
	console.log(m);
}
function out(m){
	console.info(m);
}

/*DOCUMENT CONSTRUCTORS*/
//Creates an element of any type and hyrarchy
/*function create(){
	info("Arguments adding");
	var hyrarchy = [];

	for(var i = arguments.length-1; i >= 0; i--){
		if(arguments[i][0] == "Text"){
			var txt = createText(arguments[i][1]);
			hyrarchy.push(txt);
		}
		if(arguments[i][0] == "Elem"){
			var el = createElement(arguments[i][1]);
			if(arguments[i].length > 2){
				for(var k = 2; k < arguments[i].length; k+=2){
					el.setAttribute(arguments[i][k], arguments[i][k+1]);
				}
			}
			hyrarchy.push(el);
		}
	}
	out(hyrarchy);
	for(var i = 0; i < hyrarchy.length-1; i++){
		hyrarchy[i+1].appendChild(hyrarchy[i]);
	}

	info("Arguments added");

	return hyrarchy[hyrarchy.length-1]
}

function createElement(el){
	return document.createElement(el);
}

function createText(text){
	return document.createTextNode(text);
}*/

function createElement(el){
	var element;
	if(el == "Text")
		element = document.createTextNode(arguments[1]);
	else{
		element = document.createElement(el);
		if(arguments.length > 1){
			for(var i = 1; i < arguments.length; i++){
				element.setAttribute(arguments[i][0], arguments[i][1]);
			}
		}
	}
	return element;
}