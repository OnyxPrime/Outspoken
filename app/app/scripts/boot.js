System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './components/outspoken-app.component'], function(exports_1) {
    var browser_1, core_1, router_1, outspoken_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (outspoken_app_component_1_1) {
                outspoken_app_component_1 = outspoken_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(outspoken_app_component_1.OutspokenAppComponent, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=boot.js.map