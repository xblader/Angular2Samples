import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
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
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canLoad: [AuthGuard]
    },
    {
        path:'alunos', 
        canActivate:[AuthGuard],         
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canLoad: [AuthGuard]
    },
    {path:'login', component: LoginComponent},
    {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
    {path:'', redirectTo:'/home', pathMatch:'full' },
    {path: '**', component: PaginaNaoEncontradaComponent, canActivate:[AuthGuard]}
      
];

@NgModule({
    imports:[RouterModule.forRoot(approutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}