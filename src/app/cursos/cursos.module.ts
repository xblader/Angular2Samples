import { CursosRoutingModule } from './cursos.routing.module';
import { CursosService } from './cursos.service';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ CommonModule , CursosRoutingModule],
    declarations: [ CursosComponent, CursoDetalheComponent, NaoEncontradoComponent ],
    providers: [ CursosService ]
})
export class CursosModule { }