import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from "@src/app/http-interceptors/index";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// top bar imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// routing declarations
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

// sidenav import
import { SidenavModule } from '@src/app/sidenav/sidenav.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SidenavModule
    ],
    providers: [
        httpInterceptorProviders
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
