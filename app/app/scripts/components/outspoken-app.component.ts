import {Component, OnInit, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig, RouterLink, RouterOutlet, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy, Router} from 'angular2/router'
import {ProductService} from '../../services/product.service'
import {ProductComponent} from './product.component'
import {ProductDetailComponent} from './product-detail.component'

@Component({
    selector: 'outspoken-app',
    templateUrl:'app/templates/Home/main.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({ path: "/", name: "Product", component:ProductComponent}),
    new Route({ path: "/Product/:id", name: "ProductDetail", component:ProductDetailComponent}),
])
export class OutspokenAppComponent {
    router: Router;
    location: Location;
    
    constructor(router: Router, location: Location) { 
        this.router = router;
        this.location = location;
    }
}
