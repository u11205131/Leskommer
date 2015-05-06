<!--==============================================================================
							Landing Page
Home page for the website app, all other pages will be acessable through this page 
	==============================================================================-->
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>

		<link rel="shortcut icon" href="../Images/LogoIco.gif" />
		<!-- CSS -->
		<?php $page="Home"; include "../Constructors/Includes.php" ?>
	</head>
	<body>
		<!--HEADER PHP-->
		<?php include "../Header/Header.php" ?>

		<!--CONTENT PHP-->
		<?php include "PHP/Content.php" ?>

		<!--SIDEBAR PHP (IF NEEDED)-->

		<!--FOOTER PHP-->
		<?php include "../Footer/footer.php" ?>
		
	</body>
</html>