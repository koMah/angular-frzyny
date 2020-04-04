import { Component } from "@angular/core";

import { FormGroup } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  form = new FormGroup({});
  foods :string[] = ["bnana"]
  constructor() {}

  onSubmit() {
    console.log(this.form);
  }
}
