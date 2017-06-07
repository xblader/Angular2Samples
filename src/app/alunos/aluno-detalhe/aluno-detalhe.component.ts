import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  aluno: any;

  constructor(private route: ActivatedRoute,
              private alunoService: AlunosService,
              private router: Router) { }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) =>{
    //     this.id = params['id'];
    //     this.aluno = this.alunoService.getAluno(this.id);

    //     if(this.aluno == null){
    //       this.router.navigate(['/naoEncontrado']);
    //     }
    //   }
    // );
    this.inscricao = this.route.data.subscribe(
      (info)=> {
        console.log(info);
        this.aluno = info.aluno;//nome aluno é o mesmo que está no resolver
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id,'editar']);
  }

}
