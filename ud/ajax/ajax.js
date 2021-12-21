/**
 *   Ejercicios de AJAX.
 *   @author Miguel Jaque <mjaque@migueljaque.com>
 *   @license GPL-3.0-or-later
 */

'use strict'

/**
Realiza una llamada asíncrona para cargar un fichero de texto.
Utiliza el método fetch y muestra el contenido del fichero en un div.
@param {String} fichero URL del fichero de texto que se cargará.
@param {String} divId Identificador del div donde se mostrará el texto.
@param {Function} callback Función que se llamará al terminar la carga.
**/
function cargarFicheroTextoFetch(fichero, divId, callback){
    let div=document.getElementById(divId)
    window.fetch('./'+fichero)
        .then(response=>response.text())
        .then(data=>{
            div.innerHTML=data
            if(callback) callback()
        })
}

/**
Realiza una llamada asíncrona por método GET para cargar un fichero de texto.
Utiliza el objeto XMLHttpRequest y su evento onload para mostrar el contenido del fichero en un div.
@param {String} fichero URL del fichero de texto que se cargará.
@param {String} divId Identificador del div donde se mostrará el texto.
@param {Function} callback Función que se llamará al terminar la carga.
**/
function cargarFicheroTextoXMLHttpRequest1(fichero, divId, callback){
    let div=document.getElementById(divId)
    let req=new XMLHttpRequest()
    req.open('GET', './'+fichero,true)
    req.onload=function (){
        let data=req.response
        div.innerHTML=data
        if(callback) callback()
    }
    req.send()
}

/**
Realiza una llamada asíncrona por método GET para cargar un fichero de texto.
Utiliza el objeto XMLHttpRequest y su evento onreadystatechange para mostrar el contenido del fichero en un div.
La función comprueba el estado de la respuesta recibida del servidor.
@param {String} fichero URL del fichero de texto que se cargará.
@param {String} divId Identificador del div donde se mostrará el texto.
@param {Function} callback Función que se llamará al terminar la carga.
**/
function cargarFicheroTextoXMLHttpRequest2(fichero, divId, callback){
    let div=document.getElementById(divId)
    let req=new XMLHttpRequest()
    req.open('GET','./'+fichero,true)
    req.onreadystatechange=function(){
        if(req.readyState === XMLHttpRequest.DONE && req.status === 200){
            let data=req.response
            div.innerHTML=data
            if(callback) callback()
        }
    }
    req.send()
}

/**
Realiza una petición asíncrona por método GET y le pasa dos parámetros.
Utiliza la función fetch para realizar la llamada y muestra la respuesta en un div.
La respuesta esperada es de tipo texto.
@param {String} url URL del servidor que responderá la petición.
@param {String} nombre1 Nombre del primer parámetro.
@param {String} valor1 Valor del primer parámetro.
@param {String} nombre2 Nombre del segundo parámetro.
@param {String} valor2 Valor del segundo parámetro.
@param {String} divId Identificador del div donde se mostrará la respuesta.
@param {Function} callback Función que se llamará al terminar la carga.
**/
function enviarParametrosGET(url, nombre1, valor1, nombre2, valor2, divId, callback){
    let div=document.getElementById(divId)
    fetch(url+'?'+nombre1+'='+valor1+'&'+nombre2+'='+valor2,{
        method:'GET',
    })
    .then(response=>response.text())
    .then(data=>{
        div.innerHTML=data
        if(callback) callback()
    })
}

/**
Realiza una petición asíncrona por método POST y le pasa dos parámetros.
Utiliza la función fetch para realizar la llamada y muestra la respuesta en un div.
La respuesta esperada es de tipo texto.
@param {String} url URL del servidor que responderá la petición.
@param {String} nombre1 Nombre del primer parámetro.
@param {String} valor1 Valor del primer parámetro.
@param {String} nombre2 Nombre del segundo parámetro.
@param {String} valor2 Valor del segundo parámetro.
@param {String} divId Identificador del div donde se mostrará la respuesta.
@param {Function} callback Función que se llamará al terminar la carga.
**/
function enviarParametrosPOST(url, nombre1, valor1, nombre2, valor2, divId, callback){
    let div=document.getElementById(divId)
    let formData=new FormData()
    formData.append(nombre1,valor1)
    formData.append(nombre2,valor2)
    fetch(url,{
        method:'POST',
        body:formData
    })
    .then(response=>response.text())
    .then(data=>{
        div.innerHTML=data
        if(callback) callback()
    })
}

/**
Realiza una petición asíncrona por método POST y le pasa un parámetro.
Utiliza la función fetch para realizar la llamada y muestra la respuesta en un div.
La respuesta esperada es de tipo JSON.
@param {String} url URL del servidor que responderá la petición.
@param {String} nombreParam Nombre del primer parámetro.
@param {String} valorParam Valor del primer parámetro.
@param {String} divId Identificador del div donde se mostrará la respuesta.
@param {Function} callback Función que se llamará al terminar la carga.
**/
function recibirJSON(url, nombreParam, valorParam, divId, callback){
    let div=document.getElementById(divId)
    let formData=new FormData()
    formData.append(nombreParam,valorParam)
    fetch(url,{
        method:'POST',
        body:formData
    })
    .then(response=>response.json())
    .then(data=>{
        div.innerHTML=data.atrib1
        if(callback) callback()
    })
}

/**
Realiza una petición asíncrona por método POST y le pasa un parámetro.
Utiliza la función fetch para realizar la llamada y muestra la respuesta en un div.
La respuesta esperada es de tipo XML y se procesa con DOMParser.
@param {String} url URL del servidor que responderá la petición.
@param {String} nombreParam Nombre del primer parámetro.
@param {String} valorParam Valor del primer parámetro.
@param {String} divId Identificador del div donde se mostrará la respuesta.
@param {Function} callback Función que se llamará al terminar la carga.
**/
function recibirXML(url, nombreParam, valorParam, divId, callback){
    let div=document.getElementById(divId)
    let formData=new FormData()
    formData.append(nombreParam,valorParam)
    fetch(url,{
        method:'POST',
        body:formData
    })
    .then(response=>response.text())
    .then(texto=> new DOMParser().parseFromString(texto, 'text/xml'))
    .then(data=>{
        div.innerHTML=data.getElementsByTagName('raiz')[0].getAttribute('atrib1')
        if(callback) callback()
    })
}

/**
Realiza una llamada asíncrona por el método GET a una URL y muestra el código del error recibido en el div indicado.
@param {String} fichero URL del fichero de texto que se cargará.
@param {String} divId Identificador del div donde se mostrará el texto.
@param {Function} callback Función que se llamará al terminar la carga.
**/
function controlarErrores(fichero, divId, callback){
    let div=document.getElementById(divId)
    let req=new XMLHttpRequest()
    req.open('GET',fichero,true)
    req.onreadystatechange=function(){
        if(this.readyState==4&&(this.status==404 || this.status==503 || this.status==418)){
            div.innerHTML=this.status
            if(callback) callback()
        }
    }
    req.send()
}

/**
Realiza una llamada asíncrona por el método GET a una URL y establece el tiempo de timeout en 5 segundos. Si transcurrido ese tiempo no se ha recibido la rrespuesta del servidor, muestra el texto "timeout" en el div indicado.
@param {String} url URL del fichero de texto que se cargará.
@param {String} divId Identificador del div donde se mostrará el texto.
@param {Function} callback Función que se llamará al terminar la carga o detectar el timeout.
**/
function controlarTimeout(url, divId, callback){
}

/**
Realiza una llamada asíncrona para cargar un texto.
Utiliza el método fetch y muestra el texto de la respuesta en un div.
@param {String} url URL del la petición.
@param {String} divId Identificador del div donde se mostrará el texto.
@param {Function} callback Función que se llamará al terminar la carga.
**/
function peticionCORS(url, divId, callback){
}

/**
Realiza una petición asíncrona por método POST y le pasa como parámetro un fichero.
Utiliza la función fetch para realizar la llamada y muestra la respuesta como fuente (src) de una imagen recibida con codificación Base64.
@param {String} url URL del servidor que responderá la petición.
@param {String} nombre Nombre del parámetro.
@param {String} iFileId Identificador del input donde se cargará el fichero que se enviará al servidor.
@param {String} imgId Identificador del elemento imagen donde se mostrará la respuesta.
@param {Function} callback Función que se llamará al terminar la carga.
**/
function enviarFichero(url, nombre, iFileId, imgId, callback){
}
