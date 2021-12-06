import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artmicrosip } from 'src/app/Entidad/Artmicrosip';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  artmicrosip : Artmicrosip[];
  constructor(private router : Router, private service : ServicioService) { }

  ngOnInit(): void {
    this.service.listarA().subscribe(data => {this.artmicrosip = data;
      console.log("listar data" + JSON.stringify(data) );
    });
  }// cierre del ng OnInit

  Eliminar(artmicrosip : Artmicrosip):void {
    localStorage.setItem("id", artmicrosip.id.toString());
    this.router.navigate(["eliminar"]);
    
  }//cierre del elimiar

  Editar(artmicrosip : Artmicrosip) : void{
    localStorage.setItem("id", artmicrosip.id.toString());
    this.router.navigate(["editar"]);
  }

}
