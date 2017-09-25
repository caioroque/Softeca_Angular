import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from './usuario.model';

@Component({
  selector: 'stf-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    @Input() usuarioModel: Usuario;
    @Input() nome: string;
    @Input() sobrenome?: string;
    @Input() cpf?: string;
    @Input() data_nascimento?: string;

  constructor() { }

  ngOnInit() {
  }
}
