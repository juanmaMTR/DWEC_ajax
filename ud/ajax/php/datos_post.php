<?php
	if (isset($_POST))
		if (isset($_POST['param1']))
			if (isset($_POST['param2']))
				if ($_POST['param1'] == 42){
					echo $_POST['param2'].' sabe que el sentido del universo es 42.';
					die();
				}
 	die('KO');
