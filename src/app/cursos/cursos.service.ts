import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    return [
      {id:1, nome: 'Angular 2'},
      {id:2, nome: 'Java'}
    ];
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    for(let item1 of cursos){
      if(item1.id == id)
        return item1;
    }
    return null;
  }
}
