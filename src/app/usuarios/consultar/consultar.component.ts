import { Component, OnInit, Inject } from '@angular/core';
import { Usuario } from '../usuario/usuario.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { UsuarioComponent } from '../usuario/usuario.component';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'stf-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})

@Injectable()
export class ConsultarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
