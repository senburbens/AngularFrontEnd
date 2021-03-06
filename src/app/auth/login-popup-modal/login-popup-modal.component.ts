import { HostListener, OnDestroy } from '@angular/core';
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
export class LoginPopupModalComponent implements OnInit, OnDestroy {

  unsubscribe$: Subject<void> = new Subject();
  timerSubscription: Subscription;
  loginModel:Login = new Login('','');
  utilisateurInactif:boolean=false;
  identifiant:string='';
  form: FormGroup;
  errorMsg:string = '';
  endTime:number = 5;
  token:string="";
  refresh_token:string="";
  username:string="";
  minutesDisplay:number = 0;
  secondsDisplay:number = 0;

  constructor(private _authService: AuthService, private _parameterService: ParametersService) { }

  private getWebChirTimeout() {
    this._parameterService.getParameter("WEBCHIR_TIMEOUT").subscribe(
      data => { this.endTime = parseInt(data[0]["valeurParam"]) / 1000 / 60; },
      error => { console.log(error); }
    );
  }

  ngOnInit(): void{

    this.getWebChirTimeout();
    this.identifiant = this._authService.getDecodedAccessToken(sessionStorage.getItem('token')).username; //sessionStorage.getItem('username');

    this.resetTimer();

    this._authService.userActionOccured.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
      this.resetTimer();
    });

    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl(this.identifiant, [ Validators.required, Validators.minLength(4) ]),
      //username: new FormControl({ value : this.identifiant, disabled : true }, [ Validators.required, Validators.minLength(4) ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  resetTimer(endTime: number = this.endTime) {
    const interval = 1000;
    const duration = endTime * 60;
    this.timerSubscription = timer(0, interval).pipe(
      take(duration)
    ).subscribe(
      value =>
      {this.render((duration - +value) * interval); console.log((duration - +value) * interval);},
      err => {},
      () => {
        this._authService.timesUp();
        this.identifiant = this._authService.getDecodedAccessToken(sessionStorage.getItem('token')).username;
        this.utilisateurInactif = true;        
        this.token = sessionStorage.getItem("token");
        this.refresh_token = sessionStorage.getItem("refresh_token");
        this.username = this._authService.getDecodedAccessToken(sessionStorage.getItem('token')).username;
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("refresh_token");
      }
    )
  }

  submit():void{
    let formValues = this.form.value;
    // Pour se reconnecter
    if(formValues.username === this.identifiant ){
      this._authService.login(formValues.username, formValues.password).subscribe(
        () => {
          this.form.get('password').reset();
          this.errorMsg = "";
          this.utilisateurInactif = false;
          this._authService.notifyUserAction();
        },
        (error) =>{ this.errorMsg = "Mot de passe invalide !!!"; }
      );
    }else{
      this.errorMsg = "Mauvais utilisateur !!!"
    }
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

  @HostListener('document:keyup', ['$event'])
  @HostListener('document:click', ['$event'])
  @HostListener('document:wheel', ['$event'])
  resetTimerAction() {
      this._authService.notifyUserAction();
  }  
}
