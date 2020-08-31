import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  //user = new User(0,'prubensmilorme@gmail.com', 'Newbensur3190#');
  loginErrorMessage: string = '';

  constructor(private _authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  public onSubmit(empForm: NgForm ): void {
    console.log(empForm.value);
    if(empForm.touched && empForm.valid){
      //this._authService.test(this.user).subscribe(
      this._authService.test().subscribe(
        (data) => {
          this.router.navigate(['/main']);
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
