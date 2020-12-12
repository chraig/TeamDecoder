import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

import { PlaygroundRoutingModule } from "./playground-routing.module";
import { PlaygroundComponent } from "./playground.component";


@NgModule({
    declarations: [
        PlaygroundComponent
    ],
    imports: [
        PlaygroundRoutingModule,
        MatButtonModule,
        MatButtonToggleModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class PlaygroundModule { }
