import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [   
  ]
 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    )
    
    this.eventos = [
      {
        EventoId: 1,
        Tema: 'Angular 11',
        Local: 'Belo Horizonte'
      },
      {
        EventoId: 2,
        Tema: '.NET Core 5',
        Local: 'São Paulo'
      }
    ]
  }

}
