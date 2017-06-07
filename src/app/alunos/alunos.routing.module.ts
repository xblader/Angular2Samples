import { AlunoDetalheResolver } from './aluno-detalhe.resolver';
import { AlunosDeactivateGuard } from './../guards/alunos.deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';

const alunosRoutes: Routes = [    
    {path:'', component: AlunosComponent, 
    canActivateChild:[AlunosGuard],
    children:[
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', resolve: { aluno:AlunoDetalheResolver } ,component: AlunoDetalheComponent},    
        {path: ':id/editar', component: AlunoFormComponent, canDeactivate:[AlunosDeactivateGuard] }
    ]}        
];

@NgModule({
    imports:[RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule]
})
export class AlunosRoutingModule{

}