import { Component, Input } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';

@Component({
  selector: 'CommonInput',
  template: `
    <mat-form-field
    [formGroup]='controlContainer.control'
    [appearance]="config.appearance || 'outline' "
    [ngClass]="config.className || 'input-md'" >
      <mat-label>{{config.name}}</mat-label>
      <input matInput  formControlName='{{config.controllerName}}' 
      placeholder='{{config.placeholder}}'/>
    </mat-form-field>
    `,
  styles: [`
  h1 { font-family: Lato; }
  .input-lg{ width: 400px; }
  .input-md{ width: 200px; }
  .input-sm{ width: 100px; }`]
})
export class InputComponent implements OnInit {
  @Input() config: any;
  constructor(private controlContainer: ControlContainer){
    
  }
  ngOnInit() {
    this[this.config.controllerName]=new FormControl('')

  }
}
