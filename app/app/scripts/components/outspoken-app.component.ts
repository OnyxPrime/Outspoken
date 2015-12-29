import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ProductService} from '../../services/product.service'
import {ProductDetailComponent} from './product-detail.component'

@Component({
    selector: 'outspoken-app',
    templateUrl:'app/templates/Home/main.html',
    styleUrls:['app/css/main.css'],
    directives: [ProductDetailComponent],
    providers: [ProductService]
})
export class OutspokenAppComponent implements OnInit {
    constructor(private _productService: ProductService) { }
    
    ngOnInit(){
        this.getProducts();
    }
    
    public products: Product[];
    
    
    getProducts(){
        this._productService.getProducts().then(products=> this.products = products);
    }
}