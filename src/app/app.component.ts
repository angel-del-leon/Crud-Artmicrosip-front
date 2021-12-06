import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArticuloMicrosip';

  constructor(private router : Router){}

  Listar()
  {
    this.router.navigate(["listar"]);
  }//cerrar listar

  Agregar()
  {
    this.router.navigate(["agregar"])
  }//cerrar agregar
}//cierrre del AppComponent
