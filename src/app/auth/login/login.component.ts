import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Login } from '../@models/login';
import { AuthService } from '../@services/auth.service';
import { ParametersService } from 'src/app/@services/parameters.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginErrorMessage: string = '';
  loginModel = new Login('','');
  passwordFormat:string = '';
  passwordFormatErrorMessage:string = '';

  constructor(private _authService: AuthService, private router: Router, private _parameterService: ParametersService) {}

  ngOnInit(): void {
    this._parameterService.getParameter('FORMAT_PWD').
        subscribe(
            data => {
              this.passwordFormat = data[0]['valeurParam'];
            },
            error => {
              console.log(error);
            }
    );

    this._parameterService.getParameter('FORMAT_PWD_commentaire ').
    subscribe(
        data => {
          this.passwordFormatErrorMessage = data[0]['valeurParam'];
        },
        error => {
          console.log(error);
        }
    );
  }

  public onSubmit(loginForm: NgForm ): void {

    if(loginForm.touched && loginForm.valid){
      this._authService.login(this.loginModel.identifiant,this.loginModel.password).subscribe(
        (data) => {
          if(data){   
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
    this.router.navigate(['login']);
  }
}
