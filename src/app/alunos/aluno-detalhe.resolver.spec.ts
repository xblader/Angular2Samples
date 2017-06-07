import { TestBed, async, inject } from '@angular/core/testing';

import { AlunoDetalheGuard } from './aluno-detalhe.guard';

describe('AlunoDetalheGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunoDetalheGuard]
    });
  });

  it('should ...', inject([AlunoDetalheGuard], (guard: AlunoDetalheGuard) => {
    expect(guard).toBeTruthy();
  }));
});
