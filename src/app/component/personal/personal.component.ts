import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ControlContainer, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class PersonalComponent implements OnInit {
  personalForm;
  constructor(private parentForm: FormGroupDirective) { }
  ngOnInit() {
    this.personalForm = this.parentForm.form;
    this.personalForm.addControl('personal', new FormGroup({
      email: new FormControl(''),
      mobile: new FormControl(''),
      age: new FormControl('')
    }))
  }
}