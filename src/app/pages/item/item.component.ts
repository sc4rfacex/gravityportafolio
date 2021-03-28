import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDesc } from 'src/app/interfaces/info-producto.interface';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto : ProductoDesc;
  productoId: string;

  constructor( private route : ActivatedRoute,
                public productosService : ProductosService) { }

  ngOnInit(): void {

    this.route.params.subscribe( params =>{
      console.log(params["id"]);

      this.productosService.cargarProducto(params["id"])
          .subscribe( (resp: ProductoDesc) => {
            this.productoId = params["id"]
            this.producto = resp;
          });

    } );

  }

}
