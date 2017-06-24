import { Aluno } from './aluno';
import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlunosService {
  private heroesUrl = '/alunos';  // URL to web api

  constructor(private http: Http) { }

  getAlunos(): Promise<Aluno[]> {  
    return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as Aluno[])
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAlunosSlowly(): Promise<Aluno[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getAlunos()), 2000);
    });
  }

  getAluno(id:number){
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Aluno)
    .catch(this.handleError);
  }
}
