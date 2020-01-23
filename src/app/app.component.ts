import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  FormControl
} from "@angular/forms";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  config1 ={
    name: 'ctrl1',
    placeholder: 'one',
    controllerName: 'control_1'
  }
  config2 ={
    name: 'ctrl2',
    placeholder: 'two',
    controllerName: 'control_2'
  }
  config3 ={
    name: 'ctrl3',
    placeholder: 'three',
    controllerName: 'control_3'
  }
  
  configSelect1 = {
    name: 'select1',
    controllerName: 'select_1',
    required: true,
    multiple: true,
  }
  configSelect2 = {
    name: 'select2',
    controllerName: 'select_2',
    required: false,
    multiple: false,
  }
  configSelect3 = {
    name: 'select3',
    controllerName: 'select_3',
  }
  mainGroup: FormGroup;
  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.mainGroup = this.fb.group({
      control_1: '',
      control_2: '',
      control_3: '',
      select_1: '',
      select_2: '',
      select_3: '',
    })
  }

  resetForm(){
    this.mainGroup.reset();
  }
}

// TODO add routing 