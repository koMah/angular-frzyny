import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import {
  FormGroup,
  FormControl,
  ControlContainer,
  FormGroupDirective,
  FormArray
} from "@angular/forms";

@Component({
  template : '',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class BaseComponent implements OnInit {
  
  protected _componentForm;
  protected _name: string = "base";

  constructor(
    protected parentForm: FormGroupDirective,
    protected _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this._componentForm = this.parentForm.form;
    this._componentForm.addControl(
      this._name,
      new FormGroup({
        base_values: new FormGroup({
          damage: new FormControl(""),
          attack_speed: new FormControl(""),
          critical_hit: new FormControl("")
        }),
        gems: new FormGroup({}),
        enchantments_group: new FormGroup({
          enchantments: new FormArray([
            new FormGroup({
              enchant_type: new FormControl(""),
              enchant_value: new FormControl("")
            })
          ])
        }),
        runes: new FormGroup({}),
        unique_values: new FormGroup({})
      })
    );

    console.log(this._componentForm)
  }

  get enchantments() {
    return this._componentForm.get(
      this._name + ".enchantments_group.enchantments"
    ) as FormArray;
  }

  addEnchantments() {
    if (this.enchantments.length == 4) {
      this.openSnackBar("Items can have only 4 enchantments");
      return;
    }
    this.enchantments.push(
      new FormGroup({
        enchant_type: new FormControl(""),
        enchant_value: new FormControl("")
      })
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close");
  }
}
