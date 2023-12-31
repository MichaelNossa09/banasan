import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { NuestrasCertificacionesComponent } from './pages/nuestras-certificaciones/nuestras-certificaciones.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { FundacionComponent } from './pages/fundacion/fundacion.component';

export const routes: Routes = [
    {'path': '',   component: InicioComponent},
    {'path': 'quienes-somos', component: QuienesSomosComponent},
    {'path': 'nuestras-certificaciones', component: NuestrasCertificacionesComponent},
    {'path': 'políticas', component: PoliticasComponent},
    {'path': 'fundacion-banasan', component: FundacionComponent},
    {'path': '**', redirectTo: ''}
];
