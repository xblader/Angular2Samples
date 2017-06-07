import { AlunosDeactivateGuard } from './../guards/alunos.deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos.routing.module';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
    imports: [ CommonModule, FormsModule, AlunosRoutingModule ],
    providers:[AlunosService, AlunosGuard, AlunosDeactivateGuard],
    declarations: [ AlunosComponent, AlunoFormComponent, AlunoDetalheComponent  ]
})
export class AlunosModule { }