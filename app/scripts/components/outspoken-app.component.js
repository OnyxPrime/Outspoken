System.register(['angular2/core', '../../services/product.service', './product-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_service_1, product_detail_component_1;
    var OutspokenAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            }],
        execute: function() {
            OutspokenAppComponent = (function () {
                function OutspokenAppComponent(_productService) {
                    this._productService = _productService;
                }
                OutspokenAppComponent.prototype.ngOnInit = function () {
                    this.getProducts();
                };
                OutspokenAppComponent.prototype.getProducts = function () {
                    var _this = this;
                    this._productService.getProducts().then(function (products) { return _this.products = products; });
                };
                OutspokenAppComponent = __decorate([
                    core_1.Component({
                        selector: 'outspoken-app',
                        templateUrl: 'app/templates/Home/main.html',
                        styleUrls: ['app/css/main.css'],
                        directives: [product_detail_component_1.ProductDetailComponent],
                        providers: [product_service_1.ProductService]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], OutspokenAppComponent);
                return OutspokenAppComponent;
            })();
            exports_1("OutspokenAppComponent", OutspokenAppComponent);
        }
    }
});
//# sourceMappingURL=outspoken-app.component.js.map