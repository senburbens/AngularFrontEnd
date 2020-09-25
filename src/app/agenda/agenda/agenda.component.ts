import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'src/app/@services/parameters.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  public disposition_menu:boolean=true; 

  constructor(private _parameterService: ParametersService) { }

  ngOnInit(): void {
    this._parameterService.getParameter('MENU_DISPOSITION_WC')
        .subscribe(
            data => {          
                let disposition_menu_tableau = Array.from(data);
                this.disposition_menu = (disposition_menu_tableau[0]['valeurParam'] === 'V' || disposition_menu_tableau[0]['valeurParam'] === '1') ? true : false; 
            }
        );
  }
}
