"use strict";
/**
    @file Contiene el modelo de la vista de añadir de la aplicación
    @autor Domingo Miño Redondo
**/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.VistaAnadir = void 0;
var vista_js_1 = require("./vista.js");
var moto_js_1 = require("./moto.js");
/**
    Implementa una vista de inicio.
**/
var VistaAnadir = /** @class */ (function (_super) {
    __extends(VistaAnadir, _super);
    /**
        Constructor de la clase.
        @param div {HtmlDivElement} Div de HTML en el que se desplegará la vista.
    **/
    function VistaAnadir(div, controlador) {
        var _this = _super.call(this, controlador, div) || this;
        _this.controlador = controlador;
        _this.imagenMoto = document.getElementsByClassName('imagen')[0];
        //this.imagenMoto = $('#imagenA')
        console.log(_this.imagenMoto);
        _this.valorImagen = null;
        _this.imagenMoto.on('change', function (e) {
            var archivo = _this.imagenMoto[0].files[0];
            var lector = new FileReader();
            lector.addEventListener('load', function () {
                _this.valorImagen = lector.result;
            });
            lector.readAsDataURL(archivo);
        });
        _this.btnAceptar = document.getElementById('btnAceptar');
        //this.btnAceptar = $("#btnAceptar")
        _this.btnAceptar.onclick = _this.pulsarAceptar.bind(_this);
        //this.btnAceptar.click(this.pulsarAceptar.bind(this))
        _this.btnAceptar.button();
        _this.btnCancelar = document.getElementById('btnCancelar');
        //this.btnCancelar = $("#btnCancelar")
        _this.btnAceptar.onclick = _this.pulsarAceptar.bind(_this);
        //this.btnCancelar.click(this.pulsarCancelar.bind(this))
        _this.btnCancelar.button();
        _this.fechaa = document.getElementById('anio');
        //this.fechaa = $("#anio")
        _this.fechaa.datepicker();
        _this.inputKilometros = document.getElementById('kilometros');
        //this.inputKilometros = $("#kilometros")
        _this.inputKilometros.tooltip();
        _this.inputPrecio = document.getElementById('precio');
        //this.inputPrecio = $("#precio")
        _this.inputPrecio.tooltip();
        _this.inputDescripcion = document.getElementById('descripcion');
        //this.inputDescripcion = $("#descripcion")
        _this.inputDescripcion.tooltip();
        _this.dialogo = document.getElementById('dialog');
        //this.dialogo = $("#dialog")
        _this.dialogo.dialog();
        _this.inputMarca = document.getElementById('marcaMoto');
        //this.inputMarca = $("#marcaMoto")
        _this.inputMarca.selectmenu();
        return _this;
    }
    VistaAnadir.prototype.pulsarAceptar = function () {
        // Valores a obtener
        this.marca = document.getElementById('marcaMoto');
        //this.marca = $("#marcaMoto")
        var marca = this.marca.val();
        var tipos = [];
        this.tipo1 = document.getElementById('tipo1');
        tipos.push(this.tipo1.checked);
        //this.tipo1 = $("#tipo1")
        //tipos.push(this.tipo1.is(":checked"))
        this.tipo2 = document.getElementById('tipo2');
        tipos.push(this.tipo2.checked);
        //this.tipo2 = $("#tipo2")
        //tipos.push(this.tipo2.is(":checked"))
        this.tipo3 = document.getElementById('tipo3');
        tipos.push(this.tipo3.checked);
        //this.tipo3 = $("#tipo3")
        //tipos.push(this.tipo3.is(":checked"))
        this.tipo4 = document.getElementById('tipo4');
        tipos.push(this.tipo4.checked);
        //this.tipo4 = $("#tipo4")
        //tipos.push(this.tipo4.is(":checked"))
        this.tipo5 = document.getElementById('tipo5');
        tipos.push(this.tipo5.checked);
        //this.tipo5 = $("#tipo5")
        //tipos.push(this.tipo5.is(":checked"))
        var extras = [];
        this.extra1 = document.getElementById('extra1');
        extras.push(this.extra1.checked);
        //this.extra1 = $("#extra1")
        //extras.push(this.extra1.is(":checked"))
        this.extra2 = document.getElementById('extra2');
        extras.push(this.extra2.checked);
        //this.extra2 = $("#extra2")
        //extras.push(this.extra2.is(":checked"))
        this.extra3 = document.getElementById('extra3');
        extras.push(this.extra3.checked);
        //this.extra3 = $("#extra3")
        //extras.push(this.extra3.is(":checked"))
        this.extra4 = document.getElementById('extra4');
        extras.push(this.extra4.checked);
        //this.extra4 = $("#extra4")
        //extras.push(this.extra4.is(":checked"))
        this.anio = document.getElementById('anio');
        //this.anio = $("#anio")
        var anio = this.anio.val();
        this.km = document.getElementById('kilometros');
        //this.km = $("#kilometros")
        var km = this.km.val();
        this.precio = document.getElementById('precio');
        //this.precio = $("#precio")
        var precio = this.precio.val();
        this.descripcion = document.getElementById('descripcion');
        //this.descripcion = $("#descripcion")
        var descripcion = this.descripcion.val();
        if (tipos[0] == true) {
            tipos[0] = 'Sport';
        }
        if (tipos[1] == true) {
            tipos[1] = 'Naked';
        }
        if (tipos[2] == true) {
            tipos[2] = 'Trail';
        }
        if (tipos[3] == true) {
            tipos[3] = 'Enduro';
        }
        if (tipos[4] == true) {
            tipos[4] = 'Cross';
        }
        if (tipos[0] == true) {
            tipos[0] = 'Escape Akrapovic';
        }
        if (extras[1] == true) {
            extras[1] = 'Asiento ergonómico';
        }
        if (extras[2] == true) {
            extras[2] = 'Puños calefactables';
        }
        if (extras[3] == true) {
            extras[3] = 'Bluetooth';
        }
        //Leer y validar los datos del formulario
        //Construyo el objetos
        var objeto = new moto_js_1.Moto(marca, tipos, extras, anio, km, precio, descripcion, this.valorImagen);
        this.controlador.insertar(objeto);
        // console.log(objeto)
    };
    VistaAnadir.prototype.pulsarCancelar = function () {
        this.controlador.pulsarNavListar();
    };
    return VistaAnadir;
}(vista_js_1.Vista));
exports.VistaAnadir = VistaAnadir;
