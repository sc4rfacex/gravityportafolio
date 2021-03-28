import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-aboout',
  templateUrl: './aboout.component.html',
  styleUrls: ['./aboout.component.css']
})
export class AbooutComponent implements OnInit {

  constructor( public _aboutService: InfoPaginaService ) {

   }

  ngOnInit(): void {
  }

}
