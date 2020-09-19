import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { TestDirective } from './@directives/test.directive';
import { LoginPopupModalComponent } from './login-popup-modal/login-popup-modal.component';


@NgModule({
  declarations: [ LoginComponent, RegisterComponent, TestDirective, LoginPopupModalComponent ],
  imports: [ CommonModule, FormsModule, HttpClientModule, RouterModule, ReactiveFormsModule  ],
  exports: [ LoginComponent, RegisterComponent, LoginPopupModalComponent ],
})
export class AuthModule {}
