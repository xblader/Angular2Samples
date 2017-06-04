import { AlunosService } from './../alunos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  aluno: any;

  constructor(private route: ActivatedRoute,
              private alunoService: AlunosService,
              private router: Router) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) =>{
        this.id = params['id'];
        this.aluno = this.alunoService.getAluno(this.id);

        if(this.aluno == null){
          this.aluno = {};
        }
      }
    );
  }

}
