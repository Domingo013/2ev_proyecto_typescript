"use strict";
/**
    @file Contiene la vista de la aplicación
    @autor Domingo Miño Redondo
**/
exports.__esModule = true;
exports.Vista = void 0;
/**
    Implementa una vista.
    Debería ser abstracta.
**/
var Vista = /** @class */ (function () {
    /**
        Constructor de la clase
    **/
    function Vista(controlador, div) {
        this.div = div;
        this.controlador = controlador;
    }
    /**
        Muestra u oculta el div principal de la vista.
        @param ver {Boolean} True muestra la vista y false la oculta.
    **/
    Vista.prototype.mostrar = function (ver) {
        if (ver)
            this.div.style.display = 'block';
        //this.div.show()
        else
            this.div.style.display = 'none';
        //this.div.hide()
    };
    return Vista;
}());
exports.Vista = Vista;
