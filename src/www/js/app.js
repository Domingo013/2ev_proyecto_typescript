"use strict";
/**
    @file Contiene el controlador principal de la aplicación
    @autor Domingo Miño Redondo
**/
var modelo_js_1 = require("./modelo.js");
var vista_js_1 = require("./vista.js");
var vistanav_js_1 = require("./vistanav.js");
var vistalistar_js_1 = require("./vistalistar.js");
var vistaanadir_js_1 = require("./vistaanadir.js");
var vistamodificar_js_1 = require("./vistamodificar.js");
/**
 * Controlador de la aplicación
**/
var Controlador = /** @class */ (function () {
    /**
        Constructor de la clase
        Llama al método iniciar al cargarse la página
    **/
    function Controlador() {
        this.modelo = new modelo_js_1.Modelo(this);
        window.onload = this.iniciar.bind(this);
        //$(document).ready(this.iniciar.bind(this))
    }
    /**
        Inicia la aplicación
        Crea el modelo y las vistas.
    **/
    Controlador.prototype.iniciar = function () {
        this.modelo = new modelo_js_1.Modelo(Controlador);
        this.header = document.getElementsByTagName('header')[0];
        //this.header = $("<header>")
        this.divListar = document.getElementById('divListar');
        //this.divListar = $("#divListar")
        this.divAnadir = document.getElementById('divAnadir');
        //this.divAnadir = $("#divAnadir")
        //this.tarjetaAnadir = $("#targetaAnadir")
        this.divModificar = document.getElementById('divModificar');
        //this.divModificar = $("#divModificar")
        this.vistaNav = new vistanav_js_1.VistaNav(this, this.header);
        this.vistaListar = new vistalistar_js_1.VistaListar(this.divListar, this);
        this.vistaAnadir = new vistaanadir_js_1.VistaAnadir(this.divAnadir, this);
        this.vistaModificar = new vistamodificar_js_1.VistaModificar(this.divModificar, this);
        //this.vista = new Vista(this, document.getElementById('divAnadir'))
        this.vista = new vista_js_1.Vista(this, this.divAnadir);
    };
    Controlador.prototype.insertar = function (objeto) {
        this.modelo.insertar(objeto, this.insertarOK.bind(this));
    };
    Controlador.prototype.insertarOK = function () {
        console.log('La inserción ha ido bien');
    };
    /**
        Oculta todas las vistas.
    **/
    Controlador.prototype.ocultarVistas = function () {
        this.vistaListar.mostrar(false);
        this.vistaAnadir.mostrar(false);
        this.vistaModificar.mostrar(false);
    };
    /**
        Atención a la pulsación del lisar.
    **/
    Controlador.prototype.pulsarNavListar = function () {
        this.ocultarVistas();
        this.vistaListar.mostrar(true);
    };
    /**
        Atención a la pulsación del añadir.
    **/
    Controlador.prototype.pulsarNavAnadir = function () {
        this.ocultarVistas();
        this.vistaAnadir.mostrar(true);
    };
    /**
        Atención a la pulsación del enlace al modificar
    **/
    Controlador.prototype.pulsarNavModificar = function () {
        this.ocultarVistas();
        this.vistaModificar.mostrar(true);
    };
    /**
     * Devuelve el modelo de la aplicación
     * @return {Modelo} El modelo de la aplicación
     **/
    Controlador.prototype.getModelo = function () {
        return this.modelo;
    };
    return Controlador;
}());
exports.Controlador = Controlador;
var app = new Controlador();
