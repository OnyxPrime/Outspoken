import {Component, OnInit} from 'angular2/core';
import {ProductService} from '../../services/product.service';
import {ProductThumbnailComponent} from './product-thumbnail.component';
import {Router}              from 'angular2/router';
import {Product} from '../models/product';

@Component({
    selector: 'product',
    templateUrl:'app/templates/Home/product.html',
    styleUrls:['app/css/main.css'],
    directives: [ProductThumbnailComponent],
    providers: [ProductService]
})
export class ProductComponent implements OnInit {
    constructor(
        private _productService: ProductService,
        private _router: Router
        ) { }
    
    ngOnInit(){
        this.getProducts();
    }
    
    public products: Product[];
    
    
    getProducts(){
        this._productService.getProducts().then(products=> this.products = products);
    }
    
    onSelect(product: Product){
        this._router.navigate( ['ProductDetail', { id: product.id }] );
    }
}