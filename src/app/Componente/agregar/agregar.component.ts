import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artmicrosip } from 'src/app/Entidad/Artmicrosip';
import { ServicioService } from 'src/app/Servicios/servicio.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router : Router, private service : ServicioService, private spinner: NgxSpinnerService) { }

  artmicrosipLista: any[];

  ngOnInit(): void {
    this.service.listarA().subscribe(data => {this.artmicrosipLista = data;
     // console.log("listar data" + JSON.stringify(data) );
    });
  }

  artmicrosip : Artmicrosip = new Artmicrosip();
 //Que valores tiene ses objeto /atributos
  Guardar()
  {
    this.spinner.show();
    this.service.guardarA(this.artmicrosip).subscribe(data=>{
      this.router.navigate(["listar"]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.spinner.hide();
    });
  }

  pieza(pieza: any){
    this.artmicrosip.medida = pieza.target.value;
    console.log(this.artmicrosip.medida );
  }

}
