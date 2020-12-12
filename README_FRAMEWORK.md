* Angular updated to newest version
  
    ```terminal
    ng update
    ```

* Project created
  
    ```terminal
    ng new -c=@nativescript/schematics --name=TeamDecoder --shared
    ```

* Test run by ```ng serve``` delivered typescript dependency issue, resolved by

    ```terminal
    npm i typescript@">=3.6.4 <3.9.0"
    ```

* in case of missing packages execute with command line ```npm i package``` for adding locally, or for global Angular installation ```npm i g package```
* exectuted ```tns plugin add nativescript-ui-sidedrawer``` for enabling sidedrawer code in future mobile application
* (re)installed ```npm i rxjs @angular/core --save```
* ```ng serve``` delivers errors:

    ```terminal
    ERROR in ./src/polyfills.ts
    Module not found: Error: Can't resolve 'core-js/es7/reflect' in '/home/kriz/Projects/TeamForce/Source/TeamDecoder/src'
    ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
    ℹ ｢wdm｣: Failed to compile.
    (node:3206) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, stat '/initrd.img'
    (node:3206) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
    (node:3206) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
    (node:3206) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, stat '/initrd.img.old'
    (node:3206) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
    (node:3206) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, stat '/vmlinuz'
    (node:3206) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 3)
    (node:3206) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, stat '/vmlinuz.old'
    (node:3206) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 4)
    ```
* ```ng version``` delivers:

    ```terminal
    Angular CLI: 8.3.26
    Node: 10.19.0
    OS: linux x64
    Angular: 8.2.14
    ... animations, common, compiler, compiler-cli, core, forms
    ... platform-browser, platform-browser-dynamic, router

    Package                           Version
    -----------------------------------------------------------
    @angular-devkit/architect         0.803.26
    @angular-devkit/build-angular     0.803.26
    @angular-devkit/build-optimizer   0.803.26
    @angular-devkit/build-webpack     0.803.26
    @angular-devkit/core              8.3.26
    @angular-devkit/schematics        8.3.26
    @angular/cli                      8.3.26
    @angular/http                     8.0.0-beta.10+1.sha-a28b3e3
    @ngtools/webpack                  8.3.26
    @schematics/angular               8.3.26
    @schematics/update                0.803.26
    rxjs                              <error>
    typescript                        3.5.3
    webpack                           4.39.2
    ```

* check for Angular updates ```ng update``` delivers:
    
    ```terminal
     Name                               Version                  Command to update
     --------------------------------------------------------------------------------
      @angular/cli                       8.3.26 -> 9.1.7          ng update @angular/cli
      @angular/core                      8.2.14 -> 9.1.9          ng update @angular/core
      rxjs                               6.4.0 -> 6.5.5           ng update rxjs
    ```

* update packages with ```ng update @angular/cli @angular/core rxjs --allowDirty```, ```--allowDirty``` flag is needed to overrule ```Repository is not clean. Please commit or stash any changes before updating.``` statement.
* ```ng version``` delivers:

    ```terminal
    Angular CLI: 9.1.7
    Node: 10.19.0
    OS: linux x64

    Angular: 9.1.9
    ... animations, common, compiler, compiler-cli, core, forms
    ... platform-browser, platform-browser-dynamic, router
    Ivy Workspace: Yes

    Package                           Version
    -----------------------------------------------------------
    @angular-devkit/architect         0.901.7
    @angular-devkit/build-angular     0.901.7
    @angular-devkit/build-optimizer   0.901.7
    @angular-devkit/build-webpack     0.901.7
    @angular-devkit/core              9.1.7
    @angular-devkit/schematics        9.1.7
    @angular/cli                      9.1.7
    @angular/http                     8.0.0-beta.10+1.sha-a28b3e3
    @ngtools/webpack                  9.1.7
    @schematics/angular               9.1.7
    @schematics/update                0.901.7
    rxjs                              6.5.5
    typescript                        3.8.3
    webpack                           4.42.0
    ```

* ```ng serve``` works again

* installed ```ng add @angular/material```
* new Angular setup

    ```terminal
    Angular CLI: 9.1.7
    Node: 10.19.0
    OS: linux x64

    Angular: 9.1.9
    ... animations, common, compiler, compiler-cli, core, forms
    ... platform-browser, platform-browser-dynamic, router
    Ivy Workspace: Yes

    Package                           Version
    -----------------------------------------------------------
    @angular-devkit/architect         0.901.7
    @angular-devkit/build-angular     0.901.7
    @angular-devkit/build-optimizer   0.901.7
    @angular-devkit/build-webpack     0.901.7
    @angular-devkit/core              9.1.7
    @angular-devkit/schematics        9.1.7
    @angular/cdk                      9.2.4
    @angular/cli                      9.1.7
    @angular/http                     8.0.0-beta.10
    @angular/material                 9.2.4
    @ngtools/webpack                  9.1.7
    @schematics/angular               9.1.7
    @schematics/update                0.901.7
    rxjs                              6.5.5
    typescript                        3.8.3
    webpack                           4.42.0
    ```

* applied fonts and icons in ```index.html```

    ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"> 
    ```


* applied theme style to ```style.css```

    ```css
    @import "~@angular/material/prebuilt-themes/indigo-pink.css";
    ```

* disable all margins in window space in ```style.css```

    ```css
    body {
        margin: 0 !important;
    }
    ```

* modified ```app.component.html``` to enable general view definitions for usage of all window space

    ```html
    <div class="app-view">
        <router-outlet></router-outlet>
    </div>
    ```
* modification for using whole window view as app space in ```app.component.scss```

    ```scss
    .app-view {
        height: 100vh;
        width: 100vw;
    }
    ```
