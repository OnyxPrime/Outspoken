System.register(['angular2/core', '../../services/product.service', './product-thumbnail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_service_1, product_thumbnail_component_1;
    var ProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (product_thumbnail_component_1_1) {
                product_thumbnail_component_1 = product_thumbnail_component_1_1;
            }],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent(_productService) {
                    this._productService = _productService;
                }
                ProductComponent.prototype.ngOnInit = function () {
                    this.getProducts();
                };
                ProductComponent.prototype.getProducts = function () {
                    var _this = this;
                    this._productService.getProducts().then(function (products) { return _this.products = products; });
                };
                ProductComponent = __decorate([
                    core_1.Component({
                        selector: 'product',
                        templateUrl: 'app/templates/Home/product.html',
                        styleUrls: ['app/css/main.css'],
                        directives: [product_thumbnail_component_1.ProductThumbnailComponent],
                        providers: [product_service_1.ProductService]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], ProductComponent);
                return ProductComponent;
            })();
            exports_1("ProductComponent", ProductComponent);
        }
    }
});
//# sourceMappingURL=product.component.js.map