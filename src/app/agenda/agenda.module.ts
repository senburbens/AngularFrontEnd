import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaDayComponent } from './agenda-day/agenda-day.component';
import { AgendaHeadComponent } from './agenda-head/agenda-head.component';
import { AgendaBodyComponent } from './agenda-body/agenda-body.component';
import { AgendaSemaineHeadComponent } from './agenda-semaine-head/agenda-semaine-head.component';
import { AgendaArrowsComponent } from './agenda-arrows/agenda-arrows.component';
import { AgendaSemaineComponent } from './agenda-semaine/agenda-semaine.component';
import { AgendaCalendrierComponent } from './agenda-calendrier/agenda-calendrier.component';
import { AgendaRDVEnLigneComponent } from './agenda-rdven-ligne/agenda-rdven-ligne.component';
import { AgendaRowJoursSemaineComponent } from './agenda-row-jours-semaine/agenda-row-jours-semaine.component';
import { AgendaJourSemaineComponent } from './agenda-jour-semaine/agenda-jour-semaine.component';
import { AgendaHeureRowComponent } from './agenda-heure-row/agenda-heure-row.component';
import { AgendaHeureComponent } from './agenda-heure/agenda-heure.component';
import { AgendaCelluleComponent } from './agenda-cellule/agenda-cellule.component';
import { AgendaEvenementComponent } from './agenda-evenement/agenda-evenement.component';
import { AgendaHeureAppendedChildComponent } from './agenda-heure-appended-child/agenda-heure-appended-child.component';
import { ProchainRDVDisponibleComponent } from './prochain-rdvdisponible/prochain-rdvdisponible.component';
import { EvenementsIntemporelsRowComponent } from './evenements-intemporels-row/evenements-intemporels-row.component';

@NgModule({
  declarations: [ AgendaComponent, AgendaDayComponent, AgendaHeadComponent, AgendaBodyComponent, AgendaSemaineHeadComponent, AgendaArrowsComponent, AgendaSemaineComponent, AgendaCalendrierComponent, AgendaRDVEnLigneComponent, AgendaRowJoursSemaineComponent, AgendaJourSemaineComponent, AgendaHeureRowComponent, AgendaHeureComponent, AgendaCelluleComponent, AgendaEvenementComponent, AgendaHeureAppendedChildComponent, ProchainRDVDisponibleComponent, EvenementsIntemporelsRowComponent ],
  imports: [
    CommonModule
  ],
  exports : [ AgendaComponent, AgendaDayComponent ]
})
export class AgendaModule { }
