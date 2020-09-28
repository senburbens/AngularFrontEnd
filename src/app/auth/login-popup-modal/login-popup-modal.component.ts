import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../@services/auth.service';
import { Subject, Subscription, timer } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ParametersService } from 'src/app/@services/parameters.service';
import { Login } from 'src/app/auth/@models/login';

@Component({
  selector: 'app-login-popup-modal',
  templateUrl: './login-popup-modal.component.html',
  styleUrls: ['./login-popup-modal.component.css']
})
export class LoginPopupModalComponent implements OnInit {

  utilisateurInactif:boolean=false;
  identifiant:string='';
  form: FormGroup;
  loginModel = new Login('','');

  minutesDisplay = 0;
  secondsDisplay = 0;
  endTime = 1;
  unsubscribe$: Subject<void> = new Subject();
  timerSubscription: Subscription;

  constructor(private _authService: AuthService, private _parameterService: ParametersService) { }

  ngOnInit(): void{

    /*if(sessionStorage.getItem('utilisateurInactif') === null){
      sessionStorage.setItem('utilisateurInactif', 'false');
    }else if (sessionStorage.getItem('utilisateurInactif') === 'true'){
        this.utilisateurInactif = true;
    }  */   

    this._parameterService.getParameter("WEBCHIR_TIMEOUT").subscribe(
      data => {
        this.endTime = parseInt(data[0]["valeurParam"]) / 1000 / 60;
      },
      error =>{
        console.log(error);
      }
    );
    this.identifiant = sessionStorage.getItem('username');
    this.resetTimer();

    this._authService.userActionOccured.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
      this.resetTimer();
    });

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  btnAddPatient(): void{
    console.log(this.form);
    console.log(this.form.value);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  resetTimer(endTime: number = this.endTime) {
    const interval = 1000;
    const duration = 1 * 60;
    //const duration = endTime * 60;
    this.timerSubscription = timer(0, interval).pipe(
      take(duration)
    ).subscribe(value =>
      {this.render((duration - +value) * interval); console.log((duration - +value) * interval);},
      err => { },
      () => {
        this._authService.logOutUser();
        this.identifiant = sessionStorage.getItem('username');
        this.utilisateurInactif = true;        
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("refresh_token");
        //sessionStorage.setItem("utilisateurInactif", "true");
      }
    )
  }

  private render(count) {
    this.secondsDisplay = this.getSeconds(count);
    this.minutesDisplay = this.getMinutes(count);
  }

  private getSeconds(ticks: number) {
    const seconds = ((ticks % 60000) / 1000).toFixed(0);
    return this.pad(seconds);
  }

  private getMinutes(ticks: number) {
    const minutes = Math.floor(ticks / 60000);
    return this.pad(minutes);
  }

  private pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }

  submit():void{
    this.utilisateurInactif = false;
    sessionStorage.setItem('utilisateurInactif', 'false');
    this._authService.notifyUserAction();
  }


  @HostListener('document:keyup', ['$event'])
  @HostListener('document:click', ['$event'])
  @HostListener('document:wheel', ['$event'])
  // @HostListener('document:mousemove', ['$event'])
  resetTimerAction() {
    if(sessionStorage.getItem('utilisateurInactif') !== 'true'){
      this._authService.notifyUserAction();
    }    
  }  
}
