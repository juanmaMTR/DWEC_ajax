/**
 *	 Este fichero prueba el código.
 *	 @author Miguel Jaque <mjaque@migueljaque.com>
 *	 @license GPL-3.0-or-later
 */

'use strict'

class Tester{
	constructor(){
		window.addEventListener('load', this.iniciar.bind(this))
		this.tests = []
	}
	iniciar(){
		let divs = document.querySelectorAll('div[data-test]')
		for(const divTest of divs)
			this.tests.push(new Test(divTest))
	}
}

class Test{
	constructor(divTest){
		this.superado = false	//Booleano
		this.div = divTest
		this.metodo = window[this.div.getAttribute('data-test')]
		this.div.classList.add('test')
		this.button = document.createElement('button')
		this.div.appendChild(this.button)
		this.button.appendChild(document.createTextNode('Probar'))
		this.span = document.createElement('span')
		this.div.appendChild(this.span)
		this.span.appendChild(document.createTextNode('Sin resultado... todavía'))
		this.button.onclick = this.test.bind(this)
	}
	test(){
		this.superado = null
		if (!this.metodo){
			this.fallar('El método solicitado no existe.')
			return
		}
		this.metodo.call(this)
		if (!this.asincrono)	//Los tests asíncronos llaman al final a superar
			//Solo se marca como superado si ninguna comprobación ha dicho lo contrario.
			if (this.superado !== false)
				this.superar()
	}
	superar(){
		this.span.innerHTML = 'Test OK'
		this.div.classList.remove('nok')
		this.div.classList.add('ok')
		this.button.innerHTML = 'Probar'
	}
	comprobar(valorReal, valorEsperado, mensaje){
		if (valorReal !== valorEsperado){
			console.error(`Se esperaba el resultado ${valorEsperado}, pero se ha obtenido ${valorReal}`)
			this.fallar(mensaje)
			this.superado = false
		}
	}
	fallar(mensaje){
		console.error(mensaje)
		this.superado = false
		this.div.classList.remove('ok')
		this.div.classList.add('nok')
		this.button.innerHTML = 'Volver a Probar'
		this.span.innerHTML = 'Test KO'
	}
}
new Tester()
