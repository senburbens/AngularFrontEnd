import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/mainpage/mainpage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/@services/auth.guard';
import { LoginGuard } from './auth/@services/login.guard';
import { LoginComponent } from './auth/login/login.component';
import { AgendaComponent } from './agenda/agenda/agenda.component';
import { AgendaDayComponent } from './agenda/agenda-day/agenda-day.component';
import { ListUsersResolverService } from './@resolvers/list-users-resolver.service';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { JqxResolver } from './@resolvers/jqx.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate : [LoginGuard] },
  { path: 'main', component: MainPageComponent, canActivate : [AuthGuard], resolve : { usersList : ListUsersResolverService } },
  { path: 'agenda', component: AgendaComponent },
  { path: 'agendaday', component: AgendaDayComponent },
  { path: 'scheduler', component : SchedulerComponent,  resolve : { result : JqxResolver } },
  { path: '', redirectTo : 'login', pathMatch : 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  //imports: [ RouterModule.forRoot(routes, { enableTracing : true }) ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
