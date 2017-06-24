import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const alunos = [
        {id:1,nome:'Aluno 01', email:'aluno01@email.com'},
        {id:2,nome:'Aluno 02', email:'aluno02@email.com'},
        {id:3,nome:'Aluno 03', email:'aluno03@email.com'}
    ];
    return {alunos};
  }
}