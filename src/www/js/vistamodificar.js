"use strict";
/**
    @file Contiene la vista de modificar de la aplicación
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
exports.VistaModificar = void 0;
var vista_js_1 = require("./vista.js");
var VistaModificar = /** @class */ (function (_super) {
    __extends(VistaModificar, _super);
    /**
        Constructor de la clase
        @param div {HTMLDivElement} Div principal de la vista.
        @param controlador {Controlador} Controlador de la vista.
    **/
    function VistaModificar(div, controlador) {
        var _this = _super.call(this, controlador, div) || this;
        _this.controlador = controlador;
        _this.btnModificar = document.getElementById('btnModificar');
        //this.btnModificar.onclick = this.pulsarModificar.bind(this)
        _this.btnAceptar = document.getElementById('btnAceptar');
        //this.btnAceptar = $("#btnAceptarModificar")
        _this.btnAceptar.onclick = _this.pulsarAceptar.bind(_this);
        //this.btnAceptar.click(this.pulsarAceptar.bind(this))
        //this.btnAceptar.button()
        _this.btnCancelar = document.getElementById('btnCancelar');
        //this.btnCancelar = $("#btnCancelarModificar")
        _this.btnAceptar.onclick = _this.pulsarAceptar.bind(_this);
        //this.btnCancelar.click(this.pulsarCancelar.bind(this))
        _this.btnCancelar.button();
        _this.fecha = document.getElementById('anioModificar');
        //this.fecha = $("#anioModificar")
        _this.fecha.datepicker();
        _this.inputKilometros = document.getElementById('kilometros2');
        //this.inputKilometros = $("#kilometros2")
        _this.inputKilometros.tooltip();
        _this.inputKilometros = document.getElementById('inputPrecio');
        //this.inputPrecio = $("#precio2")
        _this.inputPrecio.tooltip();
        _this.inputKilometros = document.getElementById('descripcion2');
        //this.inputDescripcion = $("#descripcion2")
        _this.inputDescripcion.tooltip();
        _this.inputMarca = document.getElementById('marcaMoto2');
        //this.inputMarca = $("#marcaMoto2")
        _this.inputMarca.selectmenu();
        return _this;
    }
    return VistaModificar;
}(vista_js_1.Vista));
exports.VistaModificar = VistaModificar;
