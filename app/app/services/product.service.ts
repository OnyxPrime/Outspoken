import {PRODUCTS} from '../scripts/mocks/mock-products'
import {Injectable} from 'angular2/core'

@Injectable()
export class ProductService{
    getProducts(){
        return Promise.resolve(PRODUCTS);
    }
    getProduct(id:number){
        return productsPromise.then(products=> products.filter(h => h.id === id)[0]);
    }     
}

var productsPromise = Promise.resolve(PRODUCTS);
