import { Component, OnInit } from '@angular/core';
import { ParametersService } from '../../@services/parameters.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/@services/auth.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainPageComponent implements OnInit {

  public disposition_menu:boolean=true; 
  public listeUsers = [];

  constructor(
    private _parameterService: ParametersService, 
    private _route: ActivatedRoute,
    private _authService: AuthService
    ) {}

  ngOnInit(): void {

    console.log(sessionStorage.getItem('token'), "Decoded access token ", this._authService.getDecodedAccessToken(sessionStorage.getItem('token')));

    this._parameterService.getParameter('MENU_DISPOSITION_WC')
      .subscribe(data => {       
        let disposition_menu_tableau = Array.from(data);
        this.disposition_menu = (disposition_menu_tableau[0]['valeurParam'] === 'V' || disposition_menu_tableau[0]['valeurParam'] === '1') ? true : false; 
      },
      error => {
        console.log(error); 
      }
    );

    this.listeUsers = this._route.snapshot.data['usersList'];
  } 
}
