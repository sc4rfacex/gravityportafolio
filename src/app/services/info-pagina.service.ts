import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoAbout } from '../interfaces/info-about.interface';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada : boolean = false;
  equipo : InfoAbout[] = [];

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
    
   }

   private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;
    })
   }

   private cargarEquipo(){
    this.http.get('https://angularsc4r-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: InfoAbout[]) => {

      this.cargada = true;
      this.equipo = resp;
    })
   }

}
