import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'stf-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: Object[] = [];

      constructor(@Inject(Http) http) {

        http.get('http://localhost:8080/Softeca/rest/servicos/livro/todos')
        .map( res => {
          return res.json();
        })
        .subscribe(livros => {
          this.livros = livros;
          console.log('Livros: ' + this.livros);
        });
      }

  ngOnInit() {
  }

}
