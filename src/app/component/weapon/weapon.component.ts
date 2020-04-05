import { Component, OnInit } from "@angular/core";
import { Enchants, EnchantsTable } from "../../enchantments";
import { GemsTable, GemsFamily } from "../../gems";
import {MatSnackBar} from '@angular/material/snack-bar';

import {
  FormGroup,
  FormControl,
  ControlContainer,
  FormGroupDirective,
  FormArray
} from "@angular/forms";
@Component({
  selector: "app-weapon",
  templateUrl: "./weapon.component.html",
  styleUrls: ["./weapon.component.css"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class WeaponComponent implements OnInit {
  enchantsTable = EnchantsTable.weapon2H;
  enchants = Enchants;
  aaaa = GemsTable;
  gemsFamily = GemsFamily;
  weaponForm;
  
  constructor(private parentForm: FormGroupDirective, private _snackBar: MatSnackBar) {}
  
  ngOnInit() {
    this.weaponForm = this.parentForm.form;
    this.weaponForm.addControl(
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
    return this.weaponForm.get("weapon.enchantments_group.enchantments") as FormArray;
  }

  addAlias() {
    if(this.enchantments.length == 4){
      this.openSnackBar("Items can have only four enchantments")
       return;
    } 
    this.enchantments.push(new FormGroup({
      enchant_type : new FormControl(""),
      enchant_value : new FormControl(""),
    }));
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close");
  }
}
