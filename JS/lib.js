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
//CONSTANTS
var BR = "br";
var DIV = "div";
var FORM = "form";
var INPUT = "input";
var LABEL = "label";
var TABLE = "table";
var TR = "tr";
var TD = "td";
var CLASS = "class";
var A = "a";
var HREF = "href";
var BUTTON = "button";
var H6 = "h6";
var IMG = "img";
var SRC = "src";
var WIDTH = "width";
var HEIGHT = "height";


//Creates an element of any type with innerHTML
function createElement(el){
	var element;
	if(el == "Text")
		element = document.createTextNode(arguments[1]);
	else{
		element = document.createElement(el);
		if(arguments.length > 1){
			for(var i = 1; i < arguments.length; i++){
				if(typeof arguments[i] === 'string'){
					element.innerHTML += arguments[i];
				}else
					element.setAttribute(arguments[i][0], arguments[i][1]);
			}
		}
	}
	return element;
}