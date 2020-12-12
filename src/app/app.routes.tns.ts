import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full" 
    },
    {
        path: "home",
        loadChildren: () => import("@src/app/home/home.module").then((m) => m.HomeModule)
    },
    /*
    {
        path: "settings",
        loadChildren: () => import("@src/app/settings/settings.module.tns").then((m) => m.SettingsModule)
    },
    */
];
