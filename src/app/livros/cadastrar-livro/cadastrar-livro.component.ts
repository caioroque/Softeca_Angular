import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LivroComponent } from '../livro/livro.component';

@Component({
  selector: 'stf-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.css']
})
export class CadastrarLivroComponent implements OnInit {

  livro: LivroComponent = new LivroComponent();
  http: Http;
  // URL da nossa API
  private url: string = 'http://localhost:8080/Softeca/rest/servicos/livro/add';

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }

  cadastrar(event) {
    event.preventDefault();
    console.log(this.livro);

    // cria uma instância de Headers
    let headers = new Headers();

    // Adiciona o tipo de conteúdo application/json
    headers.append('Content-Type', 'application/json; charset=UTF-8');

    this.http.post(this.url,
      JSON.stringify(this.livro), { headers: headers })
    .subscribe(() => {
        this.livro = new LivroComponent();
        console.log('Cadastrado com sucesso!');
    });
  }

}
