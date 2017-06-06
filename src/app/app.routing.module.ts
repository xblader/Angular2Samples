import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const approutes: Routes = [
    {path:'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},
    {path:'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule'},
    {path:'', component: HomeComponent},  
    {path:'login', component: LoginComponent}   
];

@NgModule({
    imports:[RouterModule.forRoot(approutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}