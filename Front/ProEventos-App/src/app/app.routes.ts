import { Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';

export const routes: Routes = [
    { path: 'eventos', component: EventosComponent },
    { path: 'palestrantes', component: PalestrantesComponent }  
    
];
