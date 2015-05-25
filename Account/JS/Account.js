
$(document).ready(function(){
   $("#editName").click(function(e){
   		e.preventDefault();
   		
   		var td = createElement(TD, ["id", "editNameField"]);
   		var frm = createElement(FORM);
   		var inp = createElement(INPUT, ["type", "text"], ["name", "nameEdit"], ["placeholder", "New Name"]);
   		frm.appendChild(inp);
   		td.appendChild(frm);
   		$("#rowName").append(td);

   		td = createElement(TD, ["id", "editNameBTN"]);
   		var btn = createElement(BUTTON, "Change");

   		td.appendChild(btn);
   		$("#rowName").append(td);

		$("#editNameField").hide();
		$("#editNameBTN").hide();

   		$("#accountName").fadeOut(function(){
			$("#editNameField").fadeIn();
   		});
   		$("#editName").fadeOut(function(){
			$("#editNameBTN").fadeIn();
   		});
   });

   $("#editSurname").click(function(e){
   		e.preventDefault();
   		
   		var td = createElement(TD, ["id", "editSurnameField"]);
   		var frm = createElement(FORM);
   		var inp = createElement(INPUT, ["type", "text"], ["name", "surnameEdit"], ["placeholder", "New Surname"]);
   		frm.appendChild(inp);
   		td.appendChild(frm);
   		$("#rowSurname").append(td);

   		td = createElement(TD, ["id", "editSurnameBTN"]);
   		var btn = createElement(BUTTON, "Change");

   		td.appendChild(btn);
   		$("#rowSurname").append(td);

		$("#editSurnameField").hide();
		$("#editSurnameBTN").hide();

   		$("#accountSurname").fadeOut(function(){
			$("#editSurnameField").fadeIn();
   		});
   		$("#editSurname").fadeOut(function(){
			$("#editSurnameBTN").fadeIn();
   		});
   });

   $("#editPassword").click(function(e){
   		e.preventDefault();   		
   		
   		var td = createElement(TD, ["id", "editPasswordField"]);
   		var frm = createElement(FORM);
   		var old = createElement(INPUT, ["type", "password"], ["name", "passwordEdit"], ["placeholder", "Old Password"], [CLASS, "old"]);
   		var br = createElement(BR);
   		var newP = createElement(INPUT, ["type", "password"], ["name", "passwordEdit"], ["placeholder", "New Password"], [CLASS, "new"]);
   		frm.appendChild(old);
   		frm.appendChild(br);
   		frm.appendChild(newP);
   		td.appendChild(frm);
   		$("#rowPassword").append(td);

   		td = createElement(TD, ["id", "editPasswordBTN"]);
   		var btn = createElement(BUTTON, "Change");

   		td.appendChild(btn);
   		$("#rowPassword").append(td);

		$("#editPasswordField").hide();
		$("#editPasswordBTN").hide();

   		$("#editPassword").fadeOut(function(){
   			$("#editPasswordField").fadeIn();
			$("#editPasswordBTN").fadeIn();
   		});
   });
})

$(document).on("click", "#editNameBTN button", function(){
	var newName = $("#editNameField input").val();
	debug(newName);
	$.ajax({
          type: 'POST',
          url: '../Constructors/Validator.php',
          data: {type: "update", name: newName},
          cache: false,
          success: function(ret) {
          	debug(ret);

			$("#accountName").hide();
			$("#editName").hide();

			$("#editNameField").fadeOut(function(){
				$("#accountName").text(newName);
				$("#accountName").fadeIn();
			});
			$("#editNameBTN").fadeOut(function(){
				$("#editName").fadeIn();
			});
          }
    });	
 });

$(document).on("click", "#editSurnameBTN button", function(){
	var newSurname = $("#editSurnameField input").val();
	debug(newSurname);
	$.ajax({
          type: 'POST',
          url: '../Constructors/Validator.php',
          data: {type: "update", surname: newSurname},
          cache: false,
          success: function(ret) {
          	debug(ret);

			$("#accountSurname").hide();
			$("#editSurname").hide();

			$("#editSurnameField").fadeOut(function(){
				$("#accountSurname").text(newSurname);
				$("#accountSurname").fadeIn();
			});
			$("#editSurnameBTN").fadeOut(function(){
				$("#editSurname").fadeIn();
			});
          }
    });	
 });

$(document).on("click", "#editPasswordBTN button", function(){
	var newPassword = $("#editPasswordField .new").val();
	var oldPassword = $("#editPasswordField .old").val();
	debug(newPassword);
	$.ajax({
          type: 'POST',
          url: '../Constructors/Validator.php',
          data: {type: "update", passwordOld: oldPassword, passwordNew: newPassword},
          cache: false,
          success: function(ret) {
          	debug(ret);

			$("#accountPassword").hide();
			$("#editPassword").hide();

			$("#editPasswordField").fadeOut(function(){
				$("#accountPassword").text(newPassword);
				$("#accountPassword").fadeIn();
			});
			$("#editPasswordBTN").fadeOut(function(){
				$("#editPassword").fadeIn();
			});
          }
    });	
});