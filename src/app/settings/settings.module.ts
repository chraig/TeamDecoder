import { NgModule } from "@angular/core";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";


@NgModule({
    imports: [
        SettingsRoutingModule
    ],
    declarations: [
        SettingsComponent
    ],
    schemas: [
    ]
})
export class SettingsModule { }
