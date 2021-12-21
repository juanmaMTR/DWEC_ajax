<?php
	if (isset($_GET['timeout']))
		if ($_GET['timeout']=='no'){
			sleep(8);
			echo 'OK';
			die();
		}
	sleep(6);
	echo "RESPUESTA";
