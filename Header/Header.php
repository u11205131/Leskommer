<!--==============================================================================
							LANDING PAGE HEADER
				Header for the landing page and all its interactivity
	==============================================================================-->

<!-- NAVIGATION SECTION -->
<div class="header" align="center">
	<div class="headerNavigation">
		<table class="headerNavTable">
			<tr>
				<td class="logo" align="center">
					<!-- LOGO -->
					<a href="http://leskommer.co.za"><img src="../Images/Logo2TransparentSmallTest3.png" alt="LESKOMMER_LOGO" width="50px"/></a>
				</td>
				<td class="nav" align="center">
					<!-- NAVIGATION LINKS -->
					<?php 
						echo buildNavigation($page);
					?>
				</td>
				<!--<td class="extra" align="center">-->
				<td class="account" align="center">
					<!-- EXTRA LINKS, SOCIAL MEDIA OR ACCOUNTS -->
					<?php
						include "../Constructors/connectDB.php";
						include "../Header/login.php"
					?>
					<!--<a href="http://leskommer.co.za"><img src="../Images/Logo2TransparentSmallTest3.png" alt="LESKOMMER_LOGO" width="50px"/></a>-->
				</td>
			</tr>
			<tr>
				<td colspan = "3">
					<div id="status" class="noloadshedStatus">
						<p>
							<img id="loadshedstageimg" class="hidden" onload="loadshedding()" src="../Images/bgNoLoadShed.jpg" style="display: none;">
							<span id="lsstatus" style="font-size:18px; font-weight:bold"></span>
						</p>
					</div>
				</td>
			</tr>
		</table>
	</div>

	<!-- HEADER CONTENT SECTION -->
	<?php if($page=="Home"){ ?>
		<div class="headerContent">
			<table class="headerContentTable">
				<tr>
					<td class="welcomeMessage" align="center">
						<!-- TITLE -->
						<h1>Welcome to Leskommer</h1>
					</td>
				</tr>
				<tr>
					<td class="welcomeMessage" align="center">
						<!-- SUB-TITLE -->
						<h2>Let us help you save money through electricity</h2>
					</td>
				</tr>
			</table>
		</div>
	<?php } ?>
</div>