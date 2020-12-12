import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SidenavComponent } from '@src/app/sidenav/sidenav.component';


@NgModule({
  declarations: [SidenavComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SidenavModule { }
