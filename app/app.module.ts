import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './components/app.component';

import { routing } from './app.routing'; // files need name change

@NgModule({
    imports: [ 
        BrowserModule,
        routing
    ],
    delarations: [
        AppComponent
    ],
    boostrap: [
        AppComponent
    ]
})
export class AppModule { }