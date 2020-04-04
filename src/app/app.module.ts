import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { WeaponComponent } from "./component/weapon/weapon.component";
import { PersonalComponent } from "./component/personal/personal.component";
import { FamilyComponent } from "./component/family/family.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    WeaponComponent,
    PersonalComponent,
    FamilyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
