import { NgModule } from "@angular/core";

import { PlaygroundRoutingModule } from "./playground-routing.module";
import { PlaygroundComponent } from "./playground.component";


@NgModule({
    imports: [
        PlaygroundRoutingModule
    ],
    declarations: [
        PlaygroundComponent
    ],
    schemas: [
    ]
})
export class PlaygroundModule { }
