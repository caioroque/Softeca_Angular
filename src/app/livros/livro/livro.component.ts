import { Component, OnInit, Input } from '@angular/core';
import { Livro } from './livro.model';

@Component({
  selector: 'stf-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {


  @Input() livroModel: Livro;
  @Input() titulo?: string;
  @Input() subtitulo?: string;
  @Input() autor?: string;
  @Input() isbn?: string;
  @Input() genero?: string;

  constructor() { }

  ngOnInit() {
  }

}
