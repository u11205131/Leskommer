<!--==============================================================================
							LANDING PAGE FOOTER
	Footer for the landing page, extra information and links can be accessed here
	==============================================================================-->

<div class="footer" align="center">
	<table class="footerTable">
		<?php 
			echo buildFooter($page);
		?>
		<tr>
			<th class="nav">Navigation</th>
			<th class="social">Social</th>
			<th class="logo" rowspan="2"><img src="../Images/logo.gif" alt="LESKOMMER_LOGO" width="50px"/></th>
		</tr>
		<tr>
			<td><table align="center">
				<tr><td><a href="../LandingPage/landingPage.php">Home</a></td></tr>
				<tr><td><a href="../About/about.php">About</a></td></tr>
				<tr><td><a href="../Services/services.php">Services</a></td></tr>
				<tr><td><a href="../ContactUs/contactUs.php">Contact Us</a></td></tr>
			</table></td>
			<td><table align="center">
				<tr><td><a href="#">Facebook</a></td></tr>
				<tr><td><a href="#">Twitter</a></td></tr>
				<tr><td><a href="#">Pinterest</a></td></tr>
				<tr><td><a href="#">Instagram</a></td></tr>
			</table></td>
		</tr>
	</table>
</div>