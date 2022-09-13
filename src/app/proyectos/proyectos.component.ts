import { Component, OnInit } from '@angular/core';
import { ProyectosDataService } from './service/proyectos-data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private proyectosDataservice: ProyectosDataService ) { 
   
  }

  ngOnInit(): void {
  }

  get data(){
    return this.proyectosDataservice.data
  }
}
