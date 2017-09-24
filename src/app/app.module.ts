import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HeaderComponent } from './header/header.component';
import { FootnoteComponent } from './footnote/footnote.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { ROUTES } from './app.routes';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { CadastrarComponent } from './usuarios/cadastrar/cadastrar.component';
import { ConsultarComponent } from './usuarios/consultar/consultar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootnoteComponent,
    AboutComponent,
    HomeComponent,
    UsuariosComponent,
    UsuarioComponent,
    CadastrarComponent,
    ConsultarComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
