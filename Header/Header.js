//debug("Header.js included");
validate(false);
$(document).ready(function(){
   $(".registerBTN").click(function(e){
   		e.preventDefault();
   		register();
   });
   $(".loginBTN").click(function(e){
   		e.preventDefault();
   		validate(true);   		
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
$(document).on("click", ".logOutBTN", function(e){
	e.preventDefault();
	logOut();
});
$(document).on("click", ".accountBTN", function(e){
	e.preventDefault();
	gotoAccount();
});

function gotoAccount(){
	window.location.href = "../Account/Account.php";
}

function register(){
	startRegisterScreen();
}

function startRegisterScreen(){
	//email, password, municipality
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
	var tdMunicipality = createElement(TD, ["colspan", "2"], ["align", "center"]);
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

	var inputMunicipality = createElement(INPUT, ["type", "text"], ["placeholder", "Municipality"], ["id", "municipality"], [CLASS, "register"]);
	tdMunicipality.appendChild(inputMunicipality);

	var completeBTN = createElement("button", "Complete", [CLASS, "completeBTN"]);
	var returnBTN = createElement("button", "Back", [CLASS, "registerBackBTN"]);

	tdBTNComplete.appendChild(completeBTN);
	tdBTNBack.appendChild(returnBTN);

	tr.appendChild(tdName);
	tr2.appendChild(tdSurname);
	tr3.appendChild(tdEmail);
	tr4.appendChild(tdPassword);
	tr5.appendChild(tdPasswordVerify);
	tr6.appendChild(tdMunicipality);
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
function validate(clicked){
	var dat = {type: "validate"};
	$.ajax({
          type: 'POST',
          url: '../Constructors/Validator.php',
          data: dat,
          cache: false,
          success: function(ret) {
          	debug("TEST RETURN : " + ret);
          	if(parseInt(ret) == 0){
         		debug("DONT");
          		//return true;
          		if(clicked){
          			login();
          		}
          	}
          	else {

          		$(".account .loginForm").hide();
          		//$(".account").children().remove();
				//BUILD LOGIN

				var tbl = createElement(TABLE, [CLASS, "loggedInAccount"]);
				var tr = createElement(TR);
				var td = createElement(TD, "Welcome, " + ret, [CLASS, "loggedInName"]);
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
				$(".account").append(tbl);
          		return false;
          	}
          }
         });
}
function login(){
	
	var name = $("#loginUsername").val();
	var pass = $("#loginPassword").val();
	var dat = {type: "post", username: name, password:pass};
	debug(dat);

	$.ajax({
          type: 'POST',
          url: '../Constructors/Validator.php',
          data: dat,
          cache: false,
          success: function(ret) {
          	//HANDLE LOGIN
			debug("TEST RETURN : " + ret);
			if(parseInt(ret) > 0){
				$(".account .loginForm").hide();
				//$(".account").children().remove();
				//BUILD LOGIN

				var tbl = createElement(TABLE, [CLASS, "loggedInAccount"]);
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
				$(".account").append(tbl);
  			}
    	}
	});
};
function logOut(){
	var dat = {type: "logout"};
	$.ajax({
		type: 'POST',
		url: '../Constructors/Validator.php',
		data: dat,
		cache: false,
		success: function(ret) {
			debug("logout");
			$(".account .loggedInAccount").hide();
			$(".account .loginForm").show();
		}
	});
}

function loadshedding(){
	// *******************************************************
	// Get Load Shed Status from Eskom 
	// CM Oelofse
	// 19/05/2015 
	// *******************************************************
	/*$.ajaxSetup({
	    scriptCharset: "utf-8", //or "ISO-8859-1"
	    contentType: "application/json; charset=utf-8"
	});

	$.getJSON('http://whateverorigin.org/get?url=' + 
	    encodeURIComponent('http://loadshedding.eskom.co.za/LoadShedding/getstatus') + '&callback=?',
	    function (data) {
		console.log("> ", data);

		//If the expected response is text/plain
		$("#lsstatus").html("data: " + data.contents);

		//If the expected response is JSON
		var response = $.parseJSON(data.contents);
		response = response - 1;
		//alert("Load Shed Status: " + response);
		if(response == 0) {
			document.getElementById("lsstatus").innerHTML = "There is currently no Load Shedding in progress!";
			document.getElementById("lsstatus").className = "no_loadshedding";
		};
		
		if(response == 1) {
			document.getElementById("lsstatus").innerHTML = "Load Shedding Stage 1 is in progress!";
			document.getElementById("lsstatus").className = "loadshedding";
		};
		
		if(response == 2) {
			document.getElementById("lsstatus").innerHTML = "Load Shedding Stage 2 is in progress!";
			document.getElementById("lsstatus").className = "loadshedding";				
		};
		
		if(response == 3) {
			document.getElementById("lsstatus").innerHTML = "Load Shedding Stage 3 is in progress!";
			document.getElementById("lsstatus").className = "loadshedding";				
		};
	});*/
}