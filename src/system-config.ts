declare var System: any;

System.config({
    // map tells the System loader where to look for things
    map: {
      // the app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core':                      'vendor/@angular/core/bundles/core.umd.js',
      '@angular/common':                    'vendor/@angular/common/bundles/common.umd.js',
      '@angular/compiler':                  'vendor/@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser':          'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic':  'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http':                      'vendor/@angular/http/bundles/http.umd.js',
      '@angular/router':                    'vendor/@angular/router/bundles/router.umd.js',
      '@angular/forms':                     'vendor/@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs': 'vendor/rxjs'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
});
