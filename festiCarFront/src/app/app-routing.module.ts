import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FestivalComponent } from './festival/festival.component';
import { ListeCovoituragesComponent } from './liste-covoiturages/liste-covoiturages.component';
import { ChoixCovoiturageComponent } from './choix-covoiturage/choix-covoiturage.component';
import { ListeFestivalsComponent } from './liste-festivals/liste-festivals.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'detailfestival/:id', component: FestivalComponent},
  { path: 'listcovoiturage', component: ListeCovoituragesComponent},
  { path: 'choixcovoiturages', component: ChoixCovoiturageComponent},
  { path: 'listfestivals', component: ListeFestivalsComponent},
  { path: '**', redirectTo: '/accueil', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
