import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showLoadingIndicator:boolean = true;

  constructor(private _router:Router, private translate: TranslateService){

    translate.setDefaultLang('en');

    this._router.events.subscribe(
      (routerEvent: Event) => {
        if(routerEvent instanceof NavigationStart){
          this.showLoadingIndicator = true;
        }else if(routerEvent instanceof NavigationEnd){
          this.showLoadingIndicator = false;
        }
      }
    );
  }
  
  ngOnInit(): void {
      sessionStorage.setItem("lang","en");
  } 
}
