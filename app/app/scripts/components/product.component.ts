import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ProductService} from '../../services/product.service'
import {ProductThumbnailComponent} from './product-thumbnail.component'

@Component({
    selector: 'product',
    templateUrl:'app/templates/Home/product.html',
    styleUrls:['app/css/main.css'],
    directives: [ProductThumbnailComponent],
    providers: [ProductService]
})
export class ProductComponent implements OnInit {
    constructor(private _productService: ProductService) { }
    
    ngOnInit(){
        this.getProducts();
    }
    
    public products: Product[];
    
    
    getProducts(){
        this._productService.getProducts().then(products=> this.products = products);
    }
}