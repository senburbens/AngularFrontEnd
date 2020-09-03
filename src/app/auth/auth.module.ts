import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [AuthService, AuthGuard,{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorInterceptor,
    multi : true
  }],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
