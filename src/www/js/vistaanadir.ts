/**
	@file Contiene el modelo de la vista de añadir de la aplicación
	@autor Domingo Miño Redondo
**/

import {Vista} from './vista.js'
import {Moto} from './moto.js'
import {Controlador} from './app.js'

/**
	Implementa una vista de inicio.
**/
export class VistaAnadir extends Vista{

	public controlador: Controlador;
	public imagenMoto: any;
	public valorImagen: any;
	public btnAceptar: any;
	public btnCancelar: any;
	public fechaa: any;
	public inputKilometros: any;
	public inputPrecio: any;
	public inputDescripcion: any;
	public dialogo: any;
	public inputMarca: any;
	public marca: any;
	public tipo1: any;
	public tipo2: any;
	public tipo3: any;
	public tipo4: any;
	public tipo5: any;
	public extra1: any;
	public extra2: any;
	public extra3: any;
	public extra4: any;
	public anio: any;
	public km: any;
	public precio: any;
	public descripcion: any;

	/**
		Constructor de la clase.
		@param div {HtmlDivElement} Div de HTML en el que se desplegará la vista.
	**/
	constructor(div:HTMLElement, controlador:Controlador){
		super(controlador,div)
		this.controlador = controlador
		
		this.imagenMoto = document.getElementsByClassName('imagen')[0]
		//this.imagenMoto = $('#imagenA')
		console.log(this.imagenMoto)
		this.valorImagen = null
		this.imagenMoto.on('change', (e:any) => {
			const archivo = this.imagenMoto[0].files[0]
			const lector = new FileReader()
			lector.addEventListener('load',() => {
				this.valorImagen = lector.result
			})
			lector.readAsDataURL(archivo)
		})

		this.btnAceptar = document.getElementById('btnAceptar')
		//this.btnAceptar = $("#btnAceptar")
		this.btnAceptar.onclick = this.pulsarAceptar.bind(this)
		//this.btnAceptar.click(this.pulsarAceptar.bind(this))
		this.btnAceptar.button()

		this.btnCancelar = document.getElementById('btnCancelar')
		//this.btnCancelar = $("#btnCancelar")
		this.btnAceptar.onclick = this.pulsarAceptar.bind(this)
		//this.btnCancelar.click(this.pulsarCancelar.bind(this))
		this.btnCancelar.button()
		
		this.fechaa = document.getElementById('anio')
		//this.fechaa = $("#anio")
		this.fechaa.datepicker()

		this.inputKilometros = document.getElementById('kilometros')
		//this.inputKilometros = $("#kilometros")
		this.inputKilometros.tooltip()
		this.inputPrecio = document.getElementById('precio')
		//this.inputPrecio = $("#precio")
		this.inputPrecio.tooltip()
		this.inputDescripcion = document.getElementById('descripcion')
		//this.inputDescripcion = $("#descripcion")
		this.inputDescripcion.tooltip()

		this.dialogo = document.getElementById('dialog')
		//this.dialogo = $("#dialog")
		this.dialogo.dialog()

		this.inputMarca = document.getElementById('marcaMoto')
		//this.inputMarca = $("#marcaMoto")
		this.inputMarca.selectmenu()

	}
	pulsarAceptar(){
		// Valores a obtener
		this.marca = document.getElementById('marcaMoto')
		//this.marca = $("#marcaMoto")
		let marca = this.marca.val()
		let tipos:any = []
		this.tipo1 = document.getElementById('tipo1')
		tipos.push(this.tipo1.checked)
		//this.tipo1 = $("#tipo1")
		//tipos.push(this.tipo1.is(":checked"))
		this.tipo2 = document.getElementById('tipo2')
		tipos.push(this.tipo2.checked)
		//this.tipo2 = $("#tipo2")
		//tipos.push(this.tipo2.is(":checked"))
		this.tipo3 = document.getElementById('tipo3')
		tipos.push(this.tipo3.checked)
		//this.tipo3 = $("#tipo3")
		//tipos.push(this.tipo3.is(":checked"))
		this.tipo4 = document.getElementById('tipo4')
		tipos.push(this.tipo4.checked)
		//this.tipo4 = $("#tipo4")
		//tipos.push(this.tipo4.is(":checked"))
		this.tipo5 = document.getElementById('tipo5')
		tipos.push(this.tipo5.checked)
		//this.tipo5 = $("#tipo5")
		//tipos.push(this.tipo5.is(":checked"))
		let extras:any = []
		this.extra1 = document.getElementById('extra1')
		extras.push(this.extra1.checked)
		//this.extra1 = $("#extra1")
		//extras.push(this.extra1.is(":checked"))
		this.extra2 = document.getElementById('extra2')
		extras.push(this.extra2.checked)
		//this.extra2 = $("#extra2")
		//extras.push(this.extra2.is(":checked"))
		this.extra3 = document.getElementById('extra3')
		extras.push(this.extra3.checked)
		//this.extra3 = $("#extra3")
		//extras.push(this.extra3.is(":checked"))
		this.extra4 = document.getElementById('extra4')
		extras.push(this.extra4.checked)
		//this.extra4 = $("#extra4")
		//extras.push(this.extra4.is(":checked"))
		this.anio = document.getElementById('anio')
		//this.anio = $("#anio")
		let anio = this.anio.val()
		this.km = document.getElementById('kilometros')
		//this.km = $("#kilometros")
		let km = this.km.val()
		this.precio = document.getElementById('precio')
		//this.precio = $("#precio")
		let precio = this.precio.val()
		this.descripcion = document.getElementById('descripcion')
		//this.descripcion = $("#descripcion")
		let descripcion = this.descripcion.val()
		if(tipos[0] == true){
			tipos[0] = 'Sport'
		}
		if(tipos[1] == true){
			tipos[1] = 'Naked'
		}
		if(tipos[2] == true){
			tipos[2] = 'Trail'
		}
		if(tipos[3] == true){
			tipos[3] = 'Enduro'
		}
		if(tipos[4] == true){
			tipos[4] = 'Cross'
		}
		if(tipos[0] == true){
			tipos[0] = 'Escape Akrapovic'
		}
		if(extras[1] == true){
			extras[1] = 'Asiento ergonómico'
		}
		if(extras[2] == true){
			extras[2] = 'Puños calefactables'
		}
		if(extras[3] == true){
			extras[3] = 'Bluetooth'

		}

		//Leer y validar los datos del formulario
		//Construyo el objetos
		let objeto = new Moto(marca, tipos, extras, anio, km, precio, descripcion, this.valorImagen)
		this.controlador.insertar(objeto)

		// console.log(objeto)
	}
	pulsarCancelar(){
		this.controlador.pulsarNavListar()
	}
}
