<div class="headerContent">
	<h1>My Account</h1>
	<table>
		<tr id = "rowName">
			<td id="accountName"><?php echo $_SESSION['name'] ?></td>
			<td id="editName"><button >Edit</button></td>
		</tr>
		<tr id="rowSurname">
			<td id="accountSurname"><?php echo $_SESSION['surname'] ?></td>
			<td id="editSurname"><button>Edit</button></td>
		</tr>
		<tr>
			<td><?php 
					if($_SESSION['admin']){
						echo "Admin";
					}else echo "User";
			 ?></td>
		</tr>
		<tr id="rowPassword">
			<td colspan="2" id="editPassword"><button>Edit Password</button></td>
		</tr>
	</table>
</div>