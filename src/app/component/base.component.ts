import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import {
  FormGroup,
  FormControl,
  ControlContainer,
  FormGroupDirective,
  FormArray
} from "@angular/forms";

export const BaseValues = {
  "damage" : "Damage",
  "attack_speed" : "Attack Speed",
  "hit_rate" : "Critical Hit Rate",
  "health_points" : "Health Points",
  "res_value" : "All Resistance Values",
  "armor_value" : "Armor Value"
}

@Component({
  template : '',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})

export class BaseComponent implements OnInit {
  
  protected _componentForm;
  protected baseValues = {
    damage: new FormControl(""),
    attack_speed: new FormControl(""),
    critical_hit: new FormControl("")
  };

  constructor(
    protected _name: string = "base",
    protected parentForm: FormGroupDirective,
    protected _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this._componentForm = this.parentForm.form;
    this._componentForm.addControl(
      this._name,
      new FormGroup({
        base_values: new FormGroup(this.baseValues),
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

    //console.log(this._componentForm)
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
    this._snackBar.open(message, "Close", { duration : 3000 });
  }
}
