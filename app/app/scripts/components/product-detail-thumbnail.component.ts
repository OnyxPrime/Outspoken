import {Component} from 'angular2/core';
import {Suggestion} from '../models/suggestion';

@Component({
    selector: 'product-detail-thumbnail',
    templateUrl: 'app/templates/home/productdetailthumbnail.html',
    inputs: ['suggestion']
})
export class ProductDetailThumbnailComponent {
    public suggestion: Suggestion;
}