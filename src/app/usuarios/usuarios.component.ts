import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from './usuario/usuario.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'stf-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Object[] = [];

    constructor(@Inject(Http) http) {

      http.get('http://localhost:8080/Softeca/rest/servicos/user/todos')
      .map( res => {
        return res.json();
      })
      .subscribe(usuarios => {
        this.usuarios = usuarios;
        console.log('Usuarios: ' + this.usuarios);
      });
    }

  ngOnInit() {
  }

}
