import { Routes } from '@angular/router';

import { SidenavComponent } from '@src/app/sidenav/sidenav.component';


export const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        //redirectTo: ,
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: "home",
        loadChildren: () => import("@src/app/home/home.module").then((m) => m.HomeModule),
    },
    {
        path: "playground",
        loadChildren: () => import("@src/app/playground2/playground.module").then((m) => m.PlaygroundModule)
    },
    {
        path: "settings",
        loadChildren: () => import("@src/app/settings/settings.module.tns").then((m) => m.SettingsModule)
    },

    // lazy loading with sidenav on all pages and login as inital page
    /*
    {
        path: "",
        loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
    },
    {
        path: "sidenav",
        component: SidenavComponent,
        children: [
            {
                path: "home",
                loadChildren: () => import("@src/app/home/home.module").then((m) => m.HomeModule),
            },
            {
                path: "settings",
                loadChildren: () => import("@src/app/settings/settings.module.tns").then((m) => m.SettingsModule)
            },
            {
                path: "playground",
                loadChildren: () => import("@src/app/playground2/playground.module").then((m) => m.PlaygroundModule)
            },
        ]  
    },
    */

    // normal lazy loading
    /*
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full" 
    },
    {
        path: "home",
        loadChildren: () => import("@src/app/home/home.module").then((m) => m.HomeModule),
    },
    */
];

/*
const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/startertemplateform' },
  { path: 'startertemplateform', component: StarterTemplateFormComponent    },
  { path: 'starterreactiveform', component: StarterReactiveFormComponent },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'reactiveform',     component: ReactiveFormComponent  },
  { path: 'updateon', component: UpdateOnComponent },
  { path: 'controlvalueaccessor', component: ControlValueAccessorComponent },
  { path: 'reactivedynamicform', component: ReactiveDynamicFormComponent }
];
*/