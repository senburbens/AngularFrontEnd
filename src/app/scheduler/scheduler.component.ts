import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';  
import { AuthService } from '../auth/@services/auth.service';


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: [
      './scheduler.component.css'          
  ]
})
export class SchedulerComponent implements OnInit,AfterViewInit  {

  @ViewChild('schedulerReference', { static: true }) scheduler: jqxSchedulerComponent;
  resultat:any;
  screenWidth = window.innerWidth -6;
  screenHeight = window.innerHeight - 2;
  source: any =
  {
      dataType: "array",
      dataFields: [
          { name: 'id', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'subject', type: 'string' },
          { name: 'calendar', type: 'string' },
          { name: 'start', type: 'date' },
          { name: 'end', type: 'date' }
      ],
      id: 'id',
      localData: [] 
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  date: any = new jqx.date(2020, 8, 23);

  appointmentDataFields: any =
  {
      from: "start",
      to: "end",
      id: "id",
      description: "description",
      location: "location",
      subject: "subject",
      resourceId: "calendar"
  };

  resources: any =
  {
      colorScheme: "scheme05",
      dataField: "calendar",
      source: new jqx.dataAdapter(this.source)
  };

  views: any[] =
  [
      { type: 'dayView', showWeekends: false, timeRuler: { scale: 'quarterHour', formatString: 'HH:mm', scaleStartHour: 8, scaleEndHour: 16 } },
      { type: 'weekView', showWeekends: false, timeRuler: { scale: 'quarterHour', formatString: 'HH:mm', scaleStartHour: 8, scaleEndHour: 16 } },
      { type: 'monthView', showWeekends: false, timeRuler: { scale: 'quarterHour', formatString: 'HH:mm', scaleStartHour: 8, scaleEndHour: 16 } }
  ];


  constructor(  private _route: ActivatedRoute) { 
    this.resultat = this._route.snapshot.data['result']["hydra:member"];
    console.log(this.resultat);
  }

  ngOnInit(): void {
    this.source['localData'] = this.generateAppointments();
  } 

  ngAfterViewInit(): void {
    this.scheduler.ensureAppointmentVisible('id1');
  }
  
  generateAppointments() {
    let appointments = new Array();
    let appointment: any;

    this.resultat["hydra:member"].forEach((element) => {
        appointment = {
          id: "id"+element["id"],
          description: element["titreEvenement"],
          location: "",
          subject: "Quarterly Project Review Meeting",
          calendar: "Room 1",
          start: new Date(2020, 7, 26, 9, 0, 0),
          end: new Date(2020, 7, 26, 16, 0, 0)
      };
      appointments.push(appointment);
    });  

    return appointments;
  }
}
