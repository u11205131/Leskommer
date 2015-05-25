<?php session_start(); ?>

<!-- CONSTRUCTORS -->
<link rel="stylesheet" type="text/css" href="../CSS/style.css">
<?php 
	include "../Constructors/connectDB.php";
	include "../Constructors/NavigationConstructor.php";
	include "../Constructors/FooterConstructor.php";
?>

<!-- Libraries -->
<script src="../JS/jquery-1.11.2.min.js"></script>
<script type="../JS/draggable.min.js"></script>
<script src="../JS/jquery.disablescroll.min.js"></script>
<script src="../JS/lib.js"></script>
<script src="../Header/Header.js"></script>

<!-- JavaScript -->
<?php if($page == "Calculator"){ ?>
	<script src="../Calculator/JS/buttonHandler.js"></script>
 	<script src="../Calculator/JS/calculator.js"></script>

<?php } ?>

<?php if($page == "Account"){ ?>
	<script src="../Account/JS/Account.js"></script>
<?php } ?>

<!-- CSS -->
<link rel="stylesheet" type="text/css" href="../Header/Header.css">
<link rel="stylesheet" type="text/css" href="../Footer/footer.css">

<?php if($page == "Home"){ ?>
	<link rel="stylesheet" type="text/css" href="../LandingPage/CSS/landingPage.css">
<?php } ?>

<?php if($page == "Calculator"){ ?>
	<link rel="stylesheet" type="text/css" href="../Calculator/CSS/calculator.css">
<?php } ?>

<?php if($page == "ContactUs"){ ?>
	<link rel="stylesheet" type="text/css" href="../ContactUs/CSS/contactUs.css">
<?php } ?>

<?php if($page == "Services"){ ?>
	<link rel="stylesheet" type="text/css" href="../Services/CSS/services.css">
<?php } ?>

<?php if($page == "About"){ ?>
	<link rel="stylesheet" type="text/css" href="../About/CSS/aboutUs.css">
<?php } ?>

<?php if($page == "Tips"){ ?>
	<link rel="stylesheet" type="text/css" href="../TipsTricks/CSS/tipsTricks.css">
<?php } ?>

<?php if($page == "Calculator"){ ?>
	<link rel="stylesheet" type="text/css" href="../Calculator/CSS/calculator.css">
<?php } ?>
