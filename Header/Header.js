debug("Header.js included");

$(document).ready(function(){
   $(".registerBTN").click(function(e){
   		e.preventDefault();
   		register();
   });
   $(".loginBTN").click(function(e){
   		e.preventDefault();
   		if(validate()){
   			login();
   		};
   		
   });
})
$(document).on("click", ".completeBTN", function(e){
	e.preventDefault();
	if(testRegisterData()){
		returnFromRegisterScreen();
	};
});
$(document).on("click", ".registerBackBTN", function(e){
	e.preventDefault();
	returnFromRegisterScreen();
});

function register(){
	startRegisterScreen();
}

function startRegisterScreen(){
	//email, password, munisipality
	var cover = createElement(DIV, [CLASS, "coverDIV "]);
	var tbl = createElement(TABLE, [CLASS, "registerWindow"], ["align", "center"]);
	var tr = createElement(TR);
	var tr2 = createElement(TR);
	var tr3 = createElement(TR);
	var tr4 = createElement(TR);
	var tr5 = createElement(TR);
	var tr6 = createElement(TR);
	var tr7 = createElement(TR);

	var tdName = createElement(TD, ["colspan", "2"], ["align", "center"]);
	var tdSurname = createElement(TD, ["colspan", "2"], ["align", "center"]);
	var tdEmail = createElement(TD, ["colspan", "2"], ["align", "center"]);
	var tdPassword = createElement(TD, ["colspan", "2"], ["align", "center"]);
	var tdPasswordVerify = createElement(TD, ["colspan", "2"], ["align", "center"]);
	var tdMunisipality = createElement(TD, ["colspan", "2"], ["align", "center"]);
	var tdBTNComplete = createElement(TD, ["align", "right"]);
	var tdBTNBack = createElement(TD, ["align", "left"]);

	$(tdBTNComplete).css("width", "50%");
	$(tdBTNBack).css("width", "50%");

	var form = createElement(FORM);

	var inputName = createElement(INPUT, ["type", "text"], ["placeholder", "Name"], ["id", "name"], [CLASS, "register"]);
	tdName.appendChild(inputName);

	var inputSurname = createElement(INPUT, ["type", "text"], ["placeholder", "Surname"], ["id", "surname"], [CLASS, "register"]);
	tdSurname.appendChild(inputSurname);

	var inputEmail = createElement(INPUT, ["type", "email"], ["placeholder", "Email"], ["id", "email"], [CLASS, "register"]);
	tdEmail.appendChild(inputEmail);

	var inputPassword = createElement(INPUT, ["type", "password"], ["placeholder", "Password"], ["id", "password"], [CLASS, "register"]);
	tdPassword.appendChild(inputPassword);

	var inputPasswordVerify = createElement(INPUT, ["type", "password"], ["placeholder", "Verify Password"], ["id", "passwordVerify"], [CLASS, "register"]);
	tdPasswordVerify.appendChild(inputPasswordVerify);

	var inputMunisipality = createElement(INPUT, ["type", "text"], ["placeholder", "Munisipality"], ["id", "munisipality"], [CLASS, "register"]);
	tdMunisipality.appendChild(inputMunisipality);

	var completeBTN = createElement("button", "Complete", [CLASS, "completeBTN"]);
	var returnBTN = createElement("button", "Back", [CLASS, "registerBackBTN"]);

	tdBTNComplete.appendChild(completeBTN);
	tdBTNBack.appendChild(returnBTN);

	tr.appendChild(tdName);
	tr2.appendChild(tdSurname);
	tr3.appendChild(tdEmail);
	tr4.appendChild(tdPassword);
	tr5.appendChild(tdPasswordVerify);
	tr6.appendChild(tdMunisipality);
	tr7.appendChild(tdBTNComplete);
	tr7.appendChild(tdBTNBack);

	tbl.appendChild(tr);
	tbl.appendChild(tr2);
	tbl.appendChild(tr3);
	tbl.appendChild(tr4);
	tbl.appendChild(tr5);
	tbl.appendChild(tr6);
	tbl.appendChild(tr7);

	form.appendChild(tbl);
	cover.appendChild(form);
	
	document.getElementsByTagName("body")[0].appendChild(cover);

	$(".registerWindow").css("top", $( window ).height()*0.25);
	$(".registerWindow").css("left", $( window ).width()*0.25);

	window.scrollTo(0,0);
	$(window).disablescroll();
	$(".registerWindow").hide(0);
	$(".registerWindow").fadeIn();
}

function testRegisterData(){
	return true;
}
function returnFromRegisterScreen(){
	$(".registerWindow").fadeOut(function(){
		$(window).disablescroll("undo");
		$(".registerWindow").remove();
		$(".coverDIV").remove();
	});	
}
function validate(){
	return true;
}
function login(){
	
	var name = $("#loginUsername").val();
	var pass = $("#loginPassword").val();
	$.post("../Constructors/Validator.php", {type:'post', username:name, password:pass}, function(d){
		//HANDLE LOGIN
		debug(d);
	});

	//$(".account").children().remove();
	//BUILD LOGIN
	//var name = "Name";

	/*var tbl = createElement(TABLE, [CLASS, "loggedInAccount"]);
	var tr = createElement(TR);
	var td = createElement(TD, "Welcome, " + name, [CLASS, "loggedInName"]);
	var tr2 = createElement(TR);
	var td2 = createElement(TD);
	var account = createElement(BUTTON, "Account", [CLASS, "accountBTN"]);
	var logOut = createElement(BUTTON, "Log Out", [CLASS, "logOutBTN"]);

	td2.appendChild(account);
	td2.appendChild(logOut);
	tr2.appendChild(td2);
	tr.appendChild(td);
	tbl.appendChild(tr);
	tbl.appendChild(tr2);
	$(".account").append(tbl);*/
}