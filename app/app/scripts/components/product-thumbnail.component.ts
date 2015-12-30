import {Component} from 'angular2/core';
import {Product} from '../models/product';

@Component({
    selector: 'product-thumbnail',
    templateUrl: 'app/templates/home/productthumbnail.html',
    inputs: ['product']
})
export class ProductThumbnailComponent {
    public product: Product;
}
