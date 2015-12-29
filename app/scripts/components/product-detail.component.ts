import {Component} from 'angular2/core';
import {Product} from '../models/product';

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/home/productdetail.html',
    inputs: ['product']
})
export class ProductDetailComponent {
    public product: Product;
}
