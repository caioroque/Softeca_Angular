import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'stf-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: UsuarioComponent = new UsuarioComponent();
  http: Http;
  // URL da nossa API
  private url: string = 'http://localhost:8080/Softeca/rest/servicos/user/add';

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }

  cadastrar(event) {
    event.preventDefault();
    console.log(this.usuario);

    // cria uma instância de Headers
    let headers = new Headers();

    // Adiciona o tipo de conteúdo application/json
    headers.append('Content-Type', 'application/json; charset=UTF-8');

    this.http.post(this.url,
      JSON.stringify(this.usuario), { headers: headers })
    .subscribe(() => {
        this.usuario = new UsuarioComponent();
        console.log('Cadastrado com sucesso!');
    });
  }
}
