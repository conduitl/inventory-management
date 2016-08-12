import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app.component';
import { appRouterProviders } from './app.routes';
bootstrap(AppComponent, [
    appRouterProviders
]);