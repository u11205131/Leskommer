<div class="content" align="center">
	<h1>Welcome to the calculator</h1>
	<br>
	<div class="tab" id="facility1">
		<div class="leftColumn">
			<div id="current-items" >
				<form id="mainCalc">
					<table>
						<tr>
							<th colspan="3">Lights</th>
						</tr>
							<tr class="tableHeader">
							<th>Item</th>
							<th>Watt usage</th>
							<th>Hours operational</th>
							<th><!-- DUMMY --></th>
						</tr>
						<div class="category">
							<tr>
								<td>
									<?php
										//execute the SQL query and return records
										$result = mysql_query("SELECT Type, Wattage FROM Products");
										$wattage = "";
										
										echo "<select id=\"light\" name=\"lights\">";
											while ($row = mysql_fetch_array($result)) {
												echo "<option value=\"" . $row{'Type'} . "\">" . $row{'Type'} . "</option>";
												
												$temp = json_decode($row{'Wattage'});
												
												for ($x = 0; $x < count($temp); ++$x)
													$wattage = $wattage . " " . $temp[$x];
												
												$wattage = $wattage . "@";
											}
										echo "</select>";
										
										echo "<script type=\"text/javascript\">" . "setWatts('$wattage');" . "</script>";
									?>
								</td>
								<td>
									<select id="watt" name="watts">
										<option value="15">15</option>
										<option value="30">30</option>
										<option value="50">50</option>
										<option value="60">50</option>
										<option value="75">75</option>
									</select>
								</td>
								<td>
									<input name="hoursOp" type="number" min="0" step="0.5" placeholder="Hours" value="1">
								</td>
								<td><img src="../Images/addUp.gif" class="plus" id="addCalc" onclick="calcReplaceItems(this)"/></td>
							</tr>
						</div>
					</table>
				</form>
			</div>
			<div>
				<form id="extraInfo">
					<label>Insulation?</label><br>
					<input type="radio" name="insulation" value="yes"> Yes
					<input type="radio" name="insulation" value="no"> No
				</form>
			</div>
		</div>
		<div class="rightColumn" id="replacementItems" >	
			<table id="tableReplace">
				<tr>
					<th><!-- DUMMY --></th>
					<th>Current Item</th>
					<th>Replacement Item</th>
					<th>Money Saved PM</th>
				</tr>
			</table>
		</div>
	</div>
</div>