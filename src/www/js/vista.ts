/**
	@file Contiene la vista de la aplicación
	@autor Domingo Miño Redondo
**/

import {Controlador} from './app.js'

/**
	Implementa una vista.
	Debería ser abstracta.
**/
export class Vista{
	public controlador: Controlador;
	public div:HTMLElement;
	/**
		Constructor de la clase
	**/
	constructor(controlador:Controlador, div:HTMLElement){
		this.div = div
		this.controlador = controlador
	}
	/**
		Muestra u oculta el div principal de la vista.
		@param ver {Boolean} True muestra la vista y false la oculta.
	**/
	mostrar(ver:boolean){
		if (ver)
			this.div.style.display = 'block'
			//this.div.show()
		else
			this.div.style.display = 'none'
			//this.div.hide()
	}
}
