import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const alunosRoutes: Routes = [    
    {path:'alunos', component: AlunosComponent},
    {path: 'alunos/novo', component: AlunoFormComponent},
    {path: 'alunos/:id', component: AlunoDetalheComponent},    
    {path: 'alunos/:id/editar', component: AlunoFormComponent}    
];

@NgModule({
    imports:[RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule]
})
export class AlunosRoutingModule{

}