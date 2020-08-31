import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AgendaDayComponent } from './components/agenda-day/agenda-day.component';

@NgModule({
  declarations: [AgendaComponent, AgendaDayComponent],
  imports: [CommonModule],
  exports: [AgendaComponent, AgendaDayComponent],
})
export class AgendaModule {}
