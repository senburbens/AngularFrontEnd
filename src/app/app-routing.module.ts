import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/mainpage/mainpage.component';
import { LoginComponent } from './auth/components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainPageComponent, canActivate : [AuthGuard] },
  { path: 'consultation', component: ConsultationComponent, canActivate : [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
