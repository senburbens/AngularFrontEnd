import { Component, OnInit } from '@angular/core';
import { ParametersService } from '../../shared-services/parameters.service';
import { TestListeUserService } from '../../services/test-liste-user.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  public disposition_menu; // recupere en base de donnees la valeur du parametre via un service dedie

  constructor(private _parameterService: ParametersService) { }

  ngOnInit(): void {
    this._parameterService.getParameter('MENU_DISPOSITION_WC')
        .subscribe(data => {
          console.log(data);
          let disposition_menu = data;
    });
  }

}
