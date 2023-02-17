/**
	@file Contiene la vista de modificar de la aplicación
	@autor Domingo Miño Redondo
**/

import {Vista} from './vista.js'
import {Moto} from './moto.js'
import {Controlador} from './app.js'

export class VistaModificar extends Vista{

	public controlador: Controlador;
	public Moto: any;
	public btnModificar: any;
	public btnAceptar: any;
	public btnCancelar: any;
	public fecha: any;
	public inputKilometros: any;
	public inputPrecio: any;
	public inputDescripcion: any;
	public inputMarca: any;
	public pulsarAceptar: any;

	/**
		Constructor de la clase
		@param div {HTMLDivElement} Div principal de la vista.
		@param controlador {Controlador} Controlador de la vista.
	**/
	constructor(div:HTMLElement, controlador:Controlador){
		super(controlador,div)
		this.controlador = controlador
		this.btnModificar = document.getElementById('btnModificar')
		//this.btnModificar.onclick = this.pulsarModificar.bind(this)

		this.btnAceptar = document.getElementById('btnAceptar')
		//this.btnAceptar = $("#btnAceptarModificar")
		this.btnAceptar.onclick = this.pulsarAceptar.bind(this)
		//this.btnAceptar.click(this.pulsarAceptar.bind(this))
		//this.btnAceptar.button()

		this.btnCancelar = document.getElementById('btnCancelar')
		//this.btnCancelar = $("#btnCancelarModificar")
		this.btnAceptar.onclick = this.pulsarAceptar.bind(this)
		//this.btnCancelar.click(this.pulsarCancelar.bind(this))
		this.btnCancelar.button()

		this.fecha = document.getElementById('anioModificar')
		//this.fecha = $("#anioModificar")
		this.fecha.datepicker()

		this.inputKilometros = document.getElementById('kilometros2')
		//this.inputKilometros = $("#kilometros2")
		this.inputKilometros.tooltip()
		this.inputKilometros = document.getElementById('inputPrecio')
		//this.inputPrecio = $("#precio2")
		this.inputPrecio.tooltip()
		this.inputKilometros = document.getElementById('descripcion2')
		//this.inputDescripcion = $("#descripcion2")
		this.inputDescripcion.tooltip()

		this.inputMarca = document.getElementById('marcaMoto2')
		//this.inputMarca = $("#marcaMoto2")
		this.inputMarca.selectmenu()

	}
	
}