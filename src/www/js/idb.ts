
export class Idb{

	public conexion: any;

	constructor(){
		const peticion = indexedDB.open('bd1', 2)
		peticion.onerror = evento => {throw 'Error al conectar indexedDB'}
		peticion.onupgradeneeded = (evento:any) => {
			this.conexion = evento.target.result
			this.crear()
        	}
		peticion.onsuccess = (evento:any) => {this.conexion = evento.target.result}
	}
	crear(){
		const tabla = this.conexion.createObjectStore('tablaMotos', {autoIncrement: true})
	}
	insertar(objeto:any, callback:any){
		const transaccion = this.conexion.transaction(['tablaMotos'], 'readwrite')
		transaccion.onerror = (evento: any) => {throw 'Error al insertar'}
		const tabla = transaccion.objectStore('tablaMotos')
		const peticion = tabla.add(objeto)
  		peticion.onsuccess = callback
	}
	Eliminar(objeto:any, callback:any){
		const transaccion = this.conexion.transaction(['tablaMotos'], 'readwrite')
		transaccion.onerror = (evento: any) => {throw 'Error al eliminar'}
		const tabla = transaccion.objectStore('tablaMotos')
		const peticion = tabla.delete(objeto)
  		peticion.onsuccess = callback
	}
}