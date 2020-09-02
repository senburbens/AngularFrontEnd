import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Login } from '../../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginErrorMessage: string = '';
  loginModel = new Login('','');

  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public onSubmit(loginForm: NgForm ): void {
    if(loginForm.touched && loginForm.valid){
      this._authService.login(this.loginModel.identifiant,this.loginModel.password).subscribe(
        (data) => {
          if(data){ // Verifie si un token existe
            localStorage.setItem("username", loginForm.value.identifiant);
            localStorage.setItem("token", data['token']);
            //this._authService.setJwtToken(data['token']);
            //console.log("from service ", this._authService.getJwtToken());
            this.router.navigate(['/main']);
          }
        },
        (error) => {
          this.loginErrorMessage = error;
        }
      );
    }else{
      this.loginErrorMessage = "Le formulaire est invalide";
    }
  }

  public exit($event):void{
    $event.preventDefault();
    this.router.navigate(['']);
  }
}
