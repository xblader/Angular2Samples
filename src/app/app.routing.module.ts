import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const approutes: Routes = [
    {
        path:'cursos', 
        canActivate:[AuthGuard], 
        canActivateChild:[CursosGuard], 
        loadChildren: 'app/cursos/cursos.module#CursosModule'
    },
    {
        path:'alunos', 
        canActivate:[AuthGuard],         
        loadChildren: 'app/alunos/alunos.module#AlunosModule'
    },
    {path:'', canActivate:[AuthGuard], component: HomeComponent },  
    {path:'login', component: LoginComponent}   
];

@NgModule({
    imports:[RouterModule.forRoot(approutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}