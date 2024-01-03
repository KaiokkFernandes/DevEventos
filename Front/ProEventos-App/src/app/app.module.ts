import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Importe outros componentes e módulos aqui conforme necessário

@NgModule({
    declarations: [
        EventosComponent,
        PalestrantesComponent
        // Remove AppComponent from declarations array

        // Liste outros componentes aqui
    ],
    imports: [ 
        BrowserModule,
        // Add AppComponent to imports array
        AppComponent,
        HttpClientModule,

    ],
    providers: [],
 
})
export class AppModule { }
