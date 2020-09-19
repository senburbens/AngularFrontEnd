import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from '../../auth/@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string = "";

  // public jourActuel:string = moment().format('D MMM YYYY');
  public jourActuel:string = moment().toString();

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
  }

  logout(){
    this._authService.logout();
    this.router.navigate(['']);
  }
}
