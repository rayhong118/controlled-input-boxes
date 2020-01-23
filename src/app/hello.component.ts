import { Component, Input } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';

@Component({
  selector: 'hello',
  template: `
    <mat-form-field
    [formGroup]='controlContainer.control'
    appearance='outline'>
      <mat-label>{{config.name}}</mat-label>
      <input matInput  formControlName='{{config.controllerName}}' 
      placeholder='{{config.placeholder}}'/>
    </mat-form-field>
    `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() config: any;
  constructor(private controlContainer: ControlContainer){
    
  }
  ngOnInit() {
    this[this.config.controllerName]=new FormControl('')

  }
}
