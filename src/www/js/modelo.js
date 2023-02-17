"use strict";
exports.__esModule = true;
exports.Modelo = void 0;
/**
    @file Contiene el modelo de la aplicación
    @autor Domingo Miño Redondo
**/
var idb_js_1 = require("./idb.js");
/**
    Clase Modelo
    Gestiona los datos de la aplicación.
**/
var Modelo = /** @class */ (function () {
    /**
        Constructor de la clase
    **/
    function Modelo(controlador) {
        this.lista = []; //Array de datos
        this.callbacks = []; //Array de callbacks para implementar el observador
        this.controlador = controlador;
        this.idb = new idb_js_1.Idb();
    }
    /**
     * Devuelve los datos del modelo.
     * En este modelo tan simple, es fácil. En proyectos más complejos, será más elaborado
     * #return {Array} Datos del modelo
     **/
    Modelo.prototype.getDatos = function () {
        return this.lista;
    };
    Modelo.prototype.insertar = function (objeto, callback) {
        this.idb.insertar(objeto, callback);
    };
    return Modelo;
}());
exports.Modelo = Modelo;
