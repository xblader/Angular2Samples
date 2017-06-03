import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(private cursosService: CursosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );

    console.log('cricao');
  }

 ngOnDestroy(){
   this.inscricao.unsubscribe();
   console.log('dsstruicao');
 }

 proximaPagina(){
   this.router.navigate(['/cursos'],
   {queryParams:{'pagina': ++this.pagina}
  });
 }

}
