import { Component, OnInit } from '@angular/core';
import { ParametersService } from '../../shared-services/parameters.service';
import { TestListeUserService } from '../../services/test-liste-user.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainPageComponent implements OnInit {

  public disposition_menu:boolean=true; 
  public listeUsers = [];
  private config = 'assets/config.json';

  constructor(private _parameterService: ParametersService, private _testListeService: TestListeUserService) {
  }

  ngOnInit(): void {
    // Recupere en base de donnees la valeur du parametre MENU_DISPOSITION_WC 
    // pour l'orientation du menu via un service  et stockage dans la variable disposition_menu

    this._parameterService.getParameter('MENU_DISPOSITION_WC')
      .subscribe(data => {          
        let disposition_menu_tableau = Array.from(data);
        this.disposition_menu = (disposition_menu_tableau[0]['valeurParam'] === 'V' || disposition_menu_tableau[0]['valeurParam'] === '1') ? true : false; 
      }
    );

    // Recuperation de la liste des utilisateurs dans la base de données WebConsult
    this._testListeService.getListeUsers()
        .subscribe(
          data => this.listeUsers = data, 
          error => {
            alert(error); 
          }
        );
    }
}
