import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
//import { AlunosModule } from './alunos/alunos.module';
//import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  providers:[AuthService, AuthGuard, CursosGuard],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //CursosModule,
   // AlunosModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
