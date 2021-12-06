import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artmicrosip } from 'src/app/Entidad/Artmicrosip';
import { ServicioService } from 'src/app/Servicios/servicio.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(private router: Router, private service: ServicioService, private spinner: NgxSpinnerService) { }

  artmicrosip: Artmicrosip = new Artmicrosip();

  ngOnInit(): void {
    this.Buscar();
  }

  Buscar() {
    let id = localStorage.getItem("id");
    this.artmicrosip.id = + Number(id);

    this.service.buscarA(this.artmicrosip).subscribe(data => {
      this.artmicrosip = data;
      console.log(data);
    });
  }//cierre buscar

  Eliminar(artmicrosip: Artmicrosip) {
    this.spinner.show();
    this.service.eliminarA(this.artmicrosip).subscribe(data => {
      this.router.navigate(["listar"]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se elimino correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.spinner.hide();
    });
  }

  pieza(pieza: any) {
    this.artmicrosip.medida = pieza.target.value;
    console.log(this.artmicrosip.medida);
  }


}
