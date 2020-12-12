import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SidenavRoutingModule } from '@src/app/sidenav/sidenav-routing.module';
import { SidenavComponent } from '@src/app/sidenav/sidenav.component';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SidenavModule { }
