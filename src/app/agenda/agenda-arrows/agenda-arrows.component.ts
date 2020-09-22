import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-arrows',
  templateUrl: './agenda-arrows.component.html',
  styleUrls: ['./agenda-arrows.component.css']
})
export class AgendaArrowsComponent implements OnInit {

  @Input() rightArrow:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
