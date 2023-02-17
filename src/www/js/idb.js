"use strict";
exports.__esModule = true;
exports.Idb = void 0;
var Idb = /** @class */ (function () {
    function Idb() {
        var _this = this;
        var peticion = indexedDB.open('bd1', 2);
        peticion.onerror = function (evento) { throw 'Error al conectar indexedDB'; };
        peticion.onupgradeneeded = function (evento) {
            _this.conexion = evento.target.result;
            _this.crear();
        };
        peticion.onsuccess = function (evento) { _this.conexion = evento.target.result; };
    }
    Idb.prototype.crear = function () {
        var tabla = this.conexion.createObjectStore('tablaMotos', { autoIncrement: true });
    };
    Idb.prototype.insertar = function (objeto, callback) {
        var transaccion = this.conexion.transaction(['tablaMotos'], 'readwrite');
        transaccion.onerror = function (evento) { throw 'Error al insertar'; };
        var tabla = transaccion.objectStore('tablaMotos');
        var peticion = tabla.add(objeto);
        peticion.onsuccess = callback;
    };
    Idb.prototype.Eliminar = function (objeto, callback) {
        var transaccion = this.conexion.transaction(['tablaMotos'], 'readwrite');
        transaccion.onerror = function (evento) { throw 'Error al eliminar'; };
        var tabla = transaccion.objectStore('tablaMotos');
        var peticion = tabla["delete"](objeto);
        peticion.onsuccess = callback;
    };
    return Idb;
}());
exports.Idb = Idb;
