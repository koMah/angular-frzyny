import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,ControlContainer,FormGroupDirective} from '@angular/forms';


@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css'],
  viewProviders:[{provide:ControlContainer,useExisting:FormGroupDirective}]
})
export class FamilyComponent implements OnInit {
   familyForm;
  constructor(private parentForm:FormGroupDirective) { }

  ngOnInit() {
    this.familyForm=this.parentForm.form;
    this.familyForm.addControl('family',new FormGroup({
       fatherName:new FormControl(''),
       motherName:new FormControl('')
     }))
  }

}