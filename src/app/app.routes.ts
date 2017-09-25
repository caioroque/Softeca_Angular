import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmprestimosComponent } from './emprestimos/emprestimos.component';
import { LivrosComponent } from './livros/livros.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'emprestimos', component: EmprestimosComponent},
  {path: 'livros', component: LivrosComponent}
];
