import { Component, OnInit } from "@angular/core";

import {
  FormGroup,
  FormControl,
  ControlContainer,
  FormGroupDirective,
  FormArray
} from "@angular/forms";

@Component({
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class BaseComponent implements OnInit {
  form;
  constructor(private parentForm: FormGroupDirective) {}

  ngOnInit() {
    this.form = this.parentForm.form;
    this.form.addControl(
      "weapon",
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
              enchant_type : new FormControl(""),
              enchant_value : new FormControl(""),
            })
          ])
        }),
        runes: new FormGroup({}),
        unique_values: new FormGroup({})
      })
    );
  }
  get enchantments() {
    return this.form.get("weapon.enchantments_group.enchantments") as FormArray;
  }

  addAlias() {
    if(this.enchantments.length == 4) return; 
    this.enchantments.push(new FormGroup({
      enchant_type : new FormControl(""),
      enchant_value : new FormControl(""),
    }));
  }
}
