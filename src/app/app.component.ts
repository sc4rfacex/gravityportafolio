import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { InfoAbout } from './interfaces/info-about.interface';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  equipo: InfoAbout = {};
  
  
  constructor(InfoAbout: InfoPaginaService,
              infoProductos: ProductosService){
    
  }
}
