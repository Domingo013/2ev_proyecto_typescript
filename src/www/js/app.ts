/**
	@file Contiene el controlador principal de la aplicación
	@autor Domingo Miño Redondo
**/
import {Modelo} from './modelo.js'
import {Vista} from './vista.js'
import {VistaNav} from './vistanav.js'
import {VistaListar} from './vistalistar.js'
import {VistaAnadir} from './vistaanadir.js'
import {VistaModificar} from './vistamodificar.js'

/**
 * Controlador de la aplicación
**/
export class Controlador{

	public modelo: Modelo;
	public header: any;
	public divListar: any;
	public divAnadir: any;
	public tarjetaAnadir: any;
	public divModificar: any;
	public vistaNav!: VistaNav
	public vistaListar!: VistaListar
	public vistaAnadir!: VistaAnadir;
	public vistaModificar!: VistaModificar;
	public vista!: Vista;
	public moto: any;

	/**
		Constructor de la clase
		Llama al método iniciar al cargarse la página
	**/
	constructor(){
		this.modelo = new Modelo(this)
		window.onload = this.iniciar.bind(this)
		//$(document).ready(this.iniciar.bind(this))
	}
	/**
		Inicia la aplicación
		Crea el modelo y las vistas.
	**/
	iniciar(){
		this.modelo = new Modelo(Controlador)

		this.header = document.getElementsByTagName('header')[0]
		//this.header = $("<header>")
		this.divListar = document.getElementById('divListar')
		//this.divListar = $("#divListar")
		this.divAnadir= document.getElementById('divAnadir')
		//this.divAnadir = $("#divAnadir")
		//this.tarjetaAnadir = $("#targetaAnadir")
		this.divModificar = document.getElementById('divModificar')
		//this.divModificar = $("#divModificar")

		this.vistaNav = new VistaNav(this, this.header)
		this.vistaListar = new VistaListar(this.divListar, this)
		this.vistaAnadir = new VistaAnadir(this.divAnadir, this)
		this.vistaModificar = new VistaModificar(this.divModificar, this)

		//this.vista = new Vista(this, document.getElementById('divAnadir'))
		this.vista = new Vista(this, this.divAnadir)

	}
	insertar(objeto:any){
		this.modelo.insertar(objeto, this.insertarOK.bind(this))
	}
	insertarOK(){
		console.log('La inserción ha ido bien')
	}
	/**
		Oculta todas las vistas.
	**/
	ocultarVistas(){
	    this.vistaListar.mostrar(false)
	    this.vistaAnadir.mostrar(false)
	    this.vistaModificar.mostrar(false)
	}
	/**
		Atención a la pulsación del lisar.
	**/
	pulsarNavListar(){
		this.ocultarVistas()
		this.vistaListar.mostrar(true)
	}
	/**
		Atención a la pulsación del añadir.
	**/
	pulsarNavAnadir(){
		this.ocultarVistas()
		this.vistaAnadir.mostrar(true)
	}
	/**
		Atención a la pulsación del enlace al modificar
	**/
	pulsarNavModificar(){
		this.ocultarVistas()
		this.vistaModificar.mostrar(true)
	}
	/**
	 * Devuelve el modelo de la aplicación
	 * @return {Modelo} El modelo de la aplicación
	 **/
	getModelo(){
		return this.modelo
	}
}

const app = new Controlador()