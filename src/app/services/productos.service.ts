import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    cargando = true;
    producto: Producto[] = [];
    productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();

   }


  private cargarProductos(){

    return new Promise (( resolve, reject) => {

      this.http.get('https://angularsc4r-default-rtdb.firebaseio.com/productos_idx.json')
          .subscribe( (resp: Producto[]) => {

          this.producto = resp;
          this.cargando = false;
      });

    });

  }

  cargarProducto(id: string){

    return this.http.get(`https://angularsc4r-default-rtdb.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto(termino: string){

    if(this.producto.length === 0 ){
       this.cargarProductos().then( () => {

        this.filtrarProductos( termino );

       });

    } else {
      this.filtrarProductos( termino );
    }

  }

  private filtrarProductos( termino : string){

    this.productosFiltrado = [];

    termino = termino.toLowerCase();
    
    this.producto.forEach( prod => {

      const tituloLower = prod.titulo.toLowerCase();
      
      if ( prod.categoria.indexOf( termino ) >= 0  || tituloLower.indexOf ( termino ) >= 0){
        this.productosFiltrado.push( prod );
      }

    }); 

  }

}
