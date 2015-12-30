System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ProductThumbnailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductThumbnailComponent = (function () {
                function ProductThumbnailComponent() {
                }
                ProductThumbnailComponent = __decorate([
                    core_1.Component({
                        selector: 'product-thumbnail',
                        templateUrl: 'app/templates/home/productthumbnail.html',
                        inputs: ['product']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductThumbnailComponent);
                return ProductThumbnailComponent;
            })();
            exports_1("ProductThumbnailComponent", ProductThumbnailComponent);
        }
    }
});
//# sourceMappingURL=product-thumbnail.component.js.map