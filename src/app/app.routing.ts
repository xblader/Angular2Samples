import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const approutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'cursos', component: CursosComponent},
    {path: 'curso/:id', component: CursoDetalheComponent},
    {path:'login', component: LoginComponent},
    {path:'naoEncontrado', component: NaoEncontradoComponent}    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(approutes);