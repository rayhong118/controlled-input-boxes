import { Component, Input } from '@angular/core';
import { OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';

@Component({
  selector: 'CommonSelect',
  template: `

    <mat-form-field
      [formGroup]='controlContainer.control'
      appearance='outline'>
      <mat-label>{{config.name}}</mat-label>
      <mat-select
      multiple='{{!!config.multiple}}'
      required='{{!!config.required}}'
      formControlName='{{config.controllerName}}'
      >
      <mat-option [value]='null'>{{config.name}}</mat-option>
      <mat-option [value]='one'>1</mat-option>
      <mat-option [value]='two'>2</mat-option>
      <mat-option [value]='three'>3</mat-option>
      </mat-select>
    </mat-form-field>

    `,
  styles: [`h1 { font-family: Lato; } `],
})
export class SelectComponent implements OnInit, AfterViewInit {
  @Input() config: any;
  one = 'one';
  two = 'two';
  three = 'three';
  constructor(private controlContainer: ControlContainer){
    
  }
  ngOnInit() {
    this[this.config.controllerName] = new FormControl('');
    this.controlContainer.control.updateValueAndValidity();
    console.log(this.config)
  }
  ngAfterViewInit(){
    this.controlContainer.control.updateValueAndValidity();
  }
}
