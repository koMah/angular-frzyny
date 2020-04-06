import { Component, OnInit } from "@angular/core";
import { Enchants, EnchantsTable } from "../../enchantments";
import { GemsTable, GemsFamily } from "../../gems";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BaseComponent } from "../base.component";

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
export class WeaponComponent extends BaseComponent {
  enchantsTable = EnchantsTable.weapon2H;
  enchants = Enchants;
  aaaa = GemsTable;
  gemsFamily = GemsFamily;
  weaponForm;

  constructor(parentForm: FormGroupDirective, _snackBar: MatSnackBar) {
    super("weapon", parentForm, _snackBar);
  }
}
