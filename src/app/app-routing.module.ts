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

const routes: Routes = [

  { path: 'main', component: MainPageComponent, canActivate : [AuthGuard], resolve : { usersList : ListUsersResolverService } },
  { path: 'agenda', component: AgendaComponent },
  { path: 'agendaday', component: AgendaDayComponent },
  { path: 'login', component: LoginComponent, canActivate : [LoginGuard] },
  { path: '', redirectTo : 'login', pathMatch : 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
