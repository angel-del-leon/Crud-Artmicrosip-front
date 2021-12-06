import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artmicrosip } from '../Entidad/Artmicrosip';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  urlListar = 'http://localhost:9000/ArtmicrosipWs/listar;'
  urlGuardar = 'http://localhost:9000/ArtmicrosipWs/guardar';
  urlEliminar = 'http://localhost:9000/ArtmicrosipWs/eliminar';
  urlEditar = 'http://localhost:9000/ArtmicrosipWs/editar'; 
  urlBuscar = 'http://localhost:9000/ArtmicrosipWs/buscar'; 

  listarA()
  {
    return this.http.get<Artmicrosip[]>(this.urlListar);
  }//cierre listar

  guardarA(artmicrosip : Artmicrosip)
  {
    return this.http.post<Artmicrosip>(this.urlGuardar, artmicrosip);
  }//cerrar guardar

  buscarA(artmicrosip : Artmicrosip)
  {
    return this.http.post<Artmicrosip>(this.urlBuscar, artmicrosip);
  }
  
  eliminarA(artmicrosip : Artmicrosip)
  {
    return this.http.post<Artmicrosip>(this.urlEliminar, artmicrosip);
  }

  editarA(artmicrosip : Artmicrosip)
  {
    return this,this.http.post<Artmicrosip>(this.urlEditar, artmicrosip);
  }
}
