import { NaoEncontradoComponent } from './cursos/nao-encontrado/nao-encontrado.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const approutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'cursos', component: CursosComponent},
    {path: 'curso/:id', component: CursoDetalheComponent},
    {path:'login', component: LoginComponent},
    {path:'naoEncontrado', component: NaoEncontradoComponent}    
];

@NgModule({
    imports:[RouterModule.forRoot(approutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}