import { AlunosRoutingModule } from './alunos.routing.module';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
    imports: [ CommonModule, AlunosRoutingModule ],
    declarations: [ AlunosComponent, AlunoFormComponent, AlunoDetalheComponent  ]
})
export class AlunosModule { }