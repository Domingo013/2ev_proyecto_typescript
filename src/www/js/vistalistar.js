"use strict";
/**
    @file Contiene la vista del listar de la aplicación
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
exports.VistaListar = void 0;
var vista_js_1 = require("./vista.js");
/**
    Vista del Listar
    Contiene la tabla de listado.
**/
var VistaListar = /** @class */ (function (_super) {
    __extends(VistaListar, _super);
    /**
        Constructor de la clase
        @param div {HTMLDivElement} Div principal de la vista.
        @param controlador {Controlador} Controlador de la vista.
    **/
    function VistaListar(div, controlador) {
        var _this = _super.call(this, controlador, div) || this;
        _this.controlador = controlador;
        _this.btnListar = document.getElementById('listar');
        //this.btnListar = $("#listar")
        _this.btnListar.onclick = _this.pulsarListar.bind(_this);
        //this.btnListar.click(this.pulsarListar.bind(this))
        _this.divMotos = document.getElementById('motos');
        return _this;
        //this.divMotos = $("#motos")
    }
    VistaListar.prototype.pulsarListar = function () {
        var _this = this;
        var solicitud = window.indexedDB.open('bd1');
        solicitud.onsuccess = function (evento) {
            //borrar el divMotos
            /*while (this.divMotos.firstChild)
                this.divMotos.firstChild.remove()*/
            _this.divMotos.empty();
            _this.bd = evento.target.result;
            console.log('Base de datos cargada');
            var objectStore = _this.bd.transaction('tablaMotos', 'readonly').objectStore('tablaMotos');
            var solicitud = objectStore.getAll();
            solicitud.onsuccess = (function () {
                var motos = solicitud.result;
                for (var _i = 0, motos_1 = motos; _i < motos_1.length; _i++) {
                    var moto = motos_1[_i];
                    _this.crearTarjetas(moto);
                }
                _this.divTarjetaAnadir = document.createElement("div");
                _this.divTarjetaAnadir.classList.add('tarjeta');
                _this.divTarjetaAnadir.setAttribute("id", "tarjetaAnadir");
                //this.divTarjetaAnadir = $("<div class='tarjeta' id='targetaAnadir'>")
                //this.divMotos.appendChild(this.divTarjetaAnadir)
                _this.divMotos.append(_this.divTarjetaAnadir);
                _this.spanAnadir = document.createElement("span");
                _this.spanAnadir.setAttribute("id", "anadir2");
                //this.spanAnadir = $("<p id='anadir2'>")
                //this.spanAnadir.text("+")
                _this.divTarjetaAnadir.appendChild(_this.spanAnadir);
                //this.divTarjetaAnadir.append(this.spanAnadir)
                _this.divTarjetaAnadir.onclick = _this.pulsarAnadir.bind(_this);
                //this.divTarjetaAnadir.click(this.pulsarAnadir.bind(this))
            }).bind(_this);
        };
    };
    VistaListar.prototype.pulsarAnadir = function () {
        this.controlador.pulsarNavAnadir();
    };
    VistaListar.prototype.crearTarjetas = function (moto) {
        this.divTarjeta = document.createElement("div");
        this.divTarjeta.classList.add('tarjeta');
        //this.divTarjeta = $("<div class='tarjeta'>")
        this.divMotos.appendChild(this.divTarjeta);
        //this.divMotos.append(this.divTarjeta)
        this.divImagen = document.createElement("div");
        //this.divImagen = $("<div>")
        this.divTarjeta.appendChild(this.divImagen);
        //this.divTarjeta.append(this.divImagen)
        this.imagen = document.createElement("img");
        this.imagen.setAttribute('src', moto.imagen);
        //this.imagen = $("<img>")
        //this.imagen.attr("src",moto.imagen)			
        this.divImagen.appendChild(this.imagen);
        //this.divImagen.append(this.imagen)
        this.divBotones = document.createElement("div");
        this.divBotones.classList.add('botones');
        //this.divBotones = $("<div class='botones'>")
        this.divTarjeta.appendChild(this.divBotones);
        //this.divTarjeta.append(this.divBotones)
        this.spanEditar = document.createElement("span");
        this.spanEditar.classList.add('modbo');
        //this.spanEditar = $("<span class='modbo'>")
        //this.iconoEditar = document.createElement("i")
        this.iconoEditar.classList.add("fa-solid");
        this.iconoEditar.classList.add("fa-pen");
        //this.iconoEditar = $("<i class='fa-solid fa-pen'>")
        this.spanEditar.appendChild(this.iconoEditar);
        //this.spanEditar.append(this.iconoEditar)
        this.divBotones.appendChild(this.spanEditar);
        //this.divBotones.append(this.spanEditar)
        this.spanBorrar = document.createElement("span");
        this.spanBorrar.classList.add('modbo');
        //this.spanBorrar = $("<span class='modbo'>")
        this.iconoBorrar = document.createElement("i");
        this.iconoBorrar.classList.add("fa-solid");
        this.iconoBorrar.classList.add("fa-trash-can");
        //this.iconoBorrar  = ("<i class='fa-solid fa-trash-can'>")
        this.spanBorrar.appendChild(this.iconoBorrar);
        //this.spanBorrar.append(this.iconoBorrar)
        this.divBotones.appendChild(this.spanBorrar);
        //this.divBotones.append(this.spanBorrar)
    };
    return VistaListar;
}(vista_js_1.Vista));
exports.VistaListar = VistaListar;
