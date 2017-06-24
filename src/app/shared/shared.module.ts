import { Router } from '@angular/router';
import { HttpInterceptor } from './interceptors/HttpInterceptor';
import { XHRBackend, RequestOptions, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
        {
           provide: Http, 
           useFactory: httpFactory,
           deps: [XHRBackend, RequestOptions]
        }]
})
export class SharedModule { }

export function httpFactory (backend: XHRBackend, defaultOptions: RequestOptions, router: Router) {
    return new HttpInterceptor(backend, defaultOptions, router);
};