import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const cursosRoutes: Routes = [    
    {path:'', component: CursosComponent},
    {path:'naoEncontrado', component: NaoEncontradoComponent},
    {path: ':id', component: CursoDetalheComponent}    
];

@NgModule({
    imports:[RouterModule.forChild(cursosRoutes)],
    exports:[RouterModule]
})
export class CursosRoutingModule{

}