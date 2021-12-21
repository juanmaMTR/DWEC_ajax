<?php
	if (isset($_POST))
		if (isset($_POST['respuesta'])){
				if ($_POST['respuesta'] == 'json'){
					$objeto = new StdClass();
					$objeto->atrib1 = 'ECMA6 = JavaScript';
					echo json_encode($objeto);
					die();
				}
				if ($_POST['respuesta'] == 'xml'){
					//Ref: https://www.php.net/manual/en/example.xmlwriter-simple.php
					$xw = xmlwriter_open_memory();
					xmlwriter_set_indent($xw, 1);
					$res = xmlwriter_set_indent_string($xw, ' ');
					xmlwriter_start_document($xw, '1.0', 'UTF-8');
					xmlwriter_start_element($xw, 'raiz');
					xmlwriter_start_attribute($xw, 'atrib1');
					xmlwriter_text($xw, 'Vaya con el XML');
					xmlwriter_end_attribute($xw);
					xmlwriter_end_document($xw);
					echo xmlwriter_output_memory($xw);
					die();
				}
	}
 	die('KO');
