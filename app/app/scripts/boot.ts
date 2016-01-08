import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core'
import {RouteConfig, RouterLink, RouterOutlet, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy, Router} from 'angular2/router';
import {OutspokenAppComponent} from './components/outspoken-app.component';

bootstrap(OutspokenAppComponent, [ROUTER_PROVIDERS]);