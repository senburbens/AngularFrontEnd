import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import form_template from '../../formTemplate';

@Component({
  selector: 'app-dynamic-form-test',
  templateUrl: './dynamic-form-test.component.html',
  styleUrls: ['./dynamic-form-test.component.css']
})
export class DynamicFOrmTestComponent implements OnInit {

  myFormGroup : FormGroup;
  formTemplate : any = form_template;

  constructor() { }

  ngOnInit(): void {
    let group = {}    
    form_template.forEach(input_template => {
      group[input_template.label]=new FormControl('');  
    });
    this.myFormGroup = new FormGroup(group);
  }

  onSubmit(){
    console.log(this.myFormGroup.value);
  }
}
