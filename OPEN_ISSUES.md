* routing to ```login.html``` is not working in the final sequence of the login-process, but it should regarding previous tests in ```TeamForce``` folder
* when including ```import { NativeScriptCommonModule } from "nativescript-angular/common";``` in e.g. ```settings.module.tns.ts```, the following error is delivered:

    ```terminal
        ERROR in node_modules/@nativescript/angular/common.d.ts:1:22 - error NG6002: Appears in the NgModule.imports of SettingsModule, but could not be resolved to an NgModule class.
    
    This likely means that the library (nativescript-angular/common) which declares NativeScriptCommonModule has not been processed correctly by ngcc, or is not compatible with Angular Ivy. Check if a newer version of the library is available, and update if so. Also consider checking with the library's authors to see if the library is expected to be compatible with Ivy.
    
    1 export declare class NativeScriptCommonModule {
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    ```

    This seems to occur, as NativeScript does not support Angular 9 yet. With first focusing on the web application, this more mobile related issue is hopefully waited out.

* 