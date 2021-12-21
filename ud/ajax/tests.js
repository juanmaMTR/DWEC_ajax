/**
 *   Este fichero prueba el código.
 *   @author Miguel Jaque <mjaque@migueljaque.com>
 *   @license GPL-3.0-or-later
 */

'use strict'

function testCargarFicheroTextoFetch(){
	this.asincrono = true
	this.comprobar(cargarFicheroTextoFetch.toString().indexOf('fetch') != -1, true, 'No se utiliza fetch')
	cargarFicheroTextoFetch('php/datos.txt', 'div1', testCargarFicheroTextoFetch2.bind(this))
}
function testCargarFicheroTextoFetch2(){
	this.comprobar(document.getElementById('div1').innerHTML, 'No es verdad angel de amor...\n', 'El texto no es correcto')
	if (this.superado === null) this.superar()
}

function testCargarFicheroTextoXMLHttpRequest1(){
	this.asincrono = true
	this.comprobar(cargarFicheroTextoXMLHttpRequest1.toString().indexOf('XMLHttpRequest') != -1, true, 'No se utiliza XMLHttpRequest')
	this.comprobar(cargarFicheroTextoXMLHttpRequest1.toString().indexOf('onload') != -1, true, 'No se utiliza onload')
	this.comprobar(cargarFicheroTextoXMLHttpRequest1.toString().toUpperCase().indexOf('GET') != -1, true, 'No se utiliza GET')
	cargarFicheroTextoXMLHttpRequest1('php/datos.txt', 'div2', testCargarFicheroTextoXMLHttpRequest1a.bind(this))
}
function testCargarFicheroTextoXMLHttpRequest1a(){
	this.comprobar(document.getElementById('div2').innerHTML, 'No es verdad angel de amor...\n', 'El texto no es correcto')
	if (this.superado === null) this.superar()
} 

function testCargarFicheroTextoXMLHttpRequest2(){
	this.asincrono = true
	this.comprobar(cargarFicheroTextoXMLHttpRequest2.toString().indexOf('XMLHttpRequest') != -1, true, 'No se utiliza XMLHttpRequest')
	this.comprobar(cargarFicheroTextoXMLHttpRequest2.toString().indexOf('onreadystatechange') != -1, true, 'No se utiliza onreadystatechange')
	this.comprobar(cargarFicheroTextoXMLHttpRequest2.toString().indexOf('200') != -1, true, 'No se comprueba el estado de la respuesta')
	this.comprobar(cargarFicheroTextoXMLHttpRequest2.toString().toUpperCase().indexOf('GET') != -1, true, 'No se utiliza GET')
	cargarFicheroTextoXMLHttpRequest2('php/datos.txt', 'div3', testCargarFicheroTextoXMLHttpRequest2a.bind(this))
}
function testCargarFicheroTextoXMLHttpRequest2a(){ 
	this.comprobar(document.getElementById('div3').innerHTML, 'No es verdad angel de amor...\n', 'El texto no es correcto')
	if (this.superado === null) this.superar()
}

function testEnviarParametrosGET(){
	this.asincrono = true
	this.comprobar(enviarParametrosGET.toString().indexOf('fetch') != -1, true, 'No se utiliza fetch')
	this.comprobar(enviarParametrosGET.toString().indexOf('?') != -1, true, 'No se utiliza GET')
	this.comprobar(enviarParametrosGET.toString().indexOf('&') != -1, true, 'No se utiliza GET')
	enviarParametrosGET('php/datos_get.php', 'param1', 42, 'param2', 'Brendan Eich', 'div4', testEnviarParametrosGET2.bind(this)) 
}
function testEnviarParametrosGET2(){
	this.comprobar(document.getElementById('div4').innerHTML, 'Brendan Eich sabe que el sentido del universo es 42.', 'El texto no es correcto')
	if (this.superado === null) this.superar()
}

function testEnviarParametrosPOST(){
	this.asincrono = true
	this.comprobar(enviarParametrosPOST.toString().indexOf('fetch') != -1, true, 'No se utiliza fetch')
	this.comprobar(enviarParametrosPOST.toString().indexOf('FormData') != -1, true, 'No se utiliza POST')
	this.comprobar(enviarParametrosPOST.toString().indexOf('POST') != -1, true, 'No se utiliza POST')
	enviarParametrosPOST('php/datos_post.php', 'param1', 42, 'param2', 'Brendan Eich', 'div5', testEnviarParametrosPOST2.bind(this)) 
}
function testEnviarParametrosPOST2(){
	this.comprobar(document.getElementById('div5').innerHTML, 'Brendan Eich sabe que el sentido del universo es 42.', 'El texto no es correcto')
	if (this.superado === null) this.superar()
}

function testRecibirJSON(){
	this.asincrono = true
	this.comprobar(recibirJSON.toString().indexOf('fetch') != -1, true, 'No se utiliza fetch')
	this.comprobar(recibirJSON.toString().indexOf('FormData') != -1, true, 'No se utiliza POST')
	this.comprobar(recibirJSON.toString().indexOf('POST') != -1, true, 'No se utiliza POST')
	recibirJSON('php/datos_post2.php', 'respuesta', 'json', 'div6', testRecibirJSON2.bind(this)) 
}
function testRecibirJSON2(){
	this.comprobar(document.getElementById('div6').innerHTML, 'ECMA6 = JavaScript', 'El texto no es correcto')
	if (this.superado === null) this.superar()
}

function testRecibirXML(){
	this.asincrono = true
	this.comprobar(recibirXML.toString().indexOf('fetch') != -1, true, 'No se utiliza fetch')
	this.comprobar(recibirXML.toString().indexOf('FormData') != -1, true, 'No se utiliza POST')
	this.comprobar(recibirXML.toString().indexOf('POST') != -1, true, 'No se utiliza POST')
	this.comprobar(recibirXML.toString().indexOf('DOMParser') != -1, true, 'No se utiliza DOMParser')
	recibirXML('php/datos_post2.php', 'respuesta', 'xml', 'div7', testRecibirXML2.bind(this)) 
}
function testRecibirXML2(){
	this.comprobar(document.getElementById('div7').innerHTML, 'Vaya con el XML', 'El texto no es correcto')
	if (this.superado === null) this.superar()
}

function testControlarErrores(){
	this.asincrono = true
	this.comprobar(controlarErrores.toString().indexOf('XMLHttpRequest') != -1, true, 'No se utiliza XMLHttpRequest')
	this.comprobar(controlarErrores.toString().toUpperCase().indexOf('GET') != -1, true, 'No se utiliza GET')
	controlarErrores('php/noexiste.php', 'div8', testControlarErrores2.bind(this))
}
function testControlarErrores2(){ 
	this.comprobar(document.getElementById('div8').innerHTML, '404', 'El código de error no es correcto')
	controlarErrores('php/error.php?error=503', 'div8', testControlarErrores3.bind(this))
}
function testControlarErrores3(){ 
	this.comprobar(document.getElementById('div8').innerHTML, '503', 'El código de error no es correcto')
	controlarErrores('php/error.php?error=418', 'div8', testControlarErrores4.bind(this))
}
function testControlarErrores4(){ 
	this.comprobar(document.getElementById('div8').innerHTML, '418', 'El código de error no es correcto')
	if (this.superado === null) this.superar()
}

function testControlarTimeout(){
	this.asincrono = true
	this.comprobar(controlarTimeout.toString().indexOf('XMLHttpRequest') != -1, true, 'No se utiliza XMLHttpRequest')
	this.comprobar(controlarTimeout.toString().toUpperCase().indexOf('GET') != -1, true, 'No se utiliza GET')
	this.comprobar(controlarTimeout.toString().indexOf('timeout') != -1, true, 'No se utiliza timeout')
	this.comprobar(controlarTimeout.toString().indexOf('ontimeout') != -1, true, 'No se utiliza ontimeout')
	controlarTimeout('php/timeout.php', 'div9', testControlarTimeout2.bind(this))
}
function testControlarTimeout2(){ 
	this.comprobar(document.getElementById('div9').innerHTML, 'timeout', 'No se ha detectado el timeout')
	controlarTimeout('php/timeout.php?timeout=no', 'div9', testControlarTimeout3.bind(this))
}
function testControlarTimeout3(){ 
	document.getElementById('div9').innerHTML = 'no timeout'
	this.comprobar(document.getElementById('div9').innerHTML == 'no timeout', true, 'Se ha detectado falso timeout')
	if (this.superado === null) this.superar()
}

function testPeticionCORS(){
	this.asincrono = true
	peticionCORS('http://migueljaque.com/test.php', 'div10', testPeticionCORS2.bind(this))
}
function testPeticionCORS2(){ 
	this.comprobar(document.getElementById('div10').innerHTML, '42', 'La respuesta no es correcta')
	if (this.superado === null) this.superar()
}

function testEnviarFichero(){
	this.asincrono = true
	enviarFichero('php/imagen.php', 'fichero', 'file1', 'img1', testEnviarFichero2.bind(this))
}
function testEnviarFichero2(){
	this.comprobar(document.getElementById('img1').src.startsWith('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA'), true, 'La imagen mostrada no es correcta.')
	if (this.superado === null) this.superar()
}
