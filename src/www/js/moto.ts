export class Moto{

	public marca: string;
	public tipos: string;
	public extras: string;
	public anio: any;
	public km: number;
	public precio: number;
	public descripcion: string;
	public imagen: any;

	constructor(marca:string, tipos:string, extras:string, anio:any, km:number, precio:number, descripcion:string, valorImagen:any){
        // Datos de las motos
		this.marca = marca
		this.tipos = tipos
		this.extras = extras
		this.anio = anio
		this.km = km
		this.precio = precio
		this.descripcion = descripcion
		this.imagen = valorImagen
	}
}