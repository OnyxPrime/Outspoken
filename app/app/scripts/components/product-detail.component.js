System.register(['angular2/core', 'angular2/router', '../../services/product.service', './product-detail-thumbnail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, product_service_1, product_detail_thumbnail_component_1;
    var ProductDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (product_detail_thumbnail_component_1_1) {
                product_detail_thumbnail_component_1 = product_detail_thumbnail_component_1_1;
            }],
        execute: function() {
            ProductDetailComponent = (function () {
                function ProductDetailComponent(_router, _routeParams, _productService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._productService = _productService;
                }
                ProductDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = parseInt(this._routeParams.get('id'));
                    this._productService.getProduct(id).then(function (product) { return _this.product = product; });
                };
                ProductDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'product-detail',
                        templateUrl: 'app/templates/home/productdetail.html',
                        providers: [product_service_1.ProductService],
                        directives: [product_detail_thumbnail_component_1.ProductDetailThumbnailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, product_service_1.ProductService])
                ], ProductDetailComponent);
                return ProductDetailComponent;
            })();
            exports_1("ProductDetailComponent", ProductDetailComponent);
        }
    }
});
//# sourceMappingURL=product-detail.component.js.map