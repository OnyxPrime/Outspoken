import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Product} from '../models/product';
import {ProductService} from '../../services/product.service'
import {ProductDetailThumbnailComponent} from './product-detail-thumbnail.component'

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/home/productdetail.html',
    providers: [ProductService],
    directives:[ProductDetailThumbnailComponent]
})
export class ProductDetailComponent implements OnInit {
    public product: Product;
    
    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _productService:ProductService
    ){}
    
    ngOnInit(){
        let id = parseInt(this._routeParams.get('id'));
        this._productService.getProduct(id).then(product => this.product = product);
    }
}
