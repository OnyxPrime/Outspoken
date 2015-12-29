import {PRODUCTS} from '../scripts/mocks/mock-products'
import {Injectable} from 'angular2/core'

@Injectable()
export class ProductService{
    getProducts(){
        return Promise.resolve(PRODUCTS);
    }
}