System.register(['angular2/platform/browser', './components/outspoken-app.component'], function(exports_1) {
    var browser_1, outspoken_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (outspoken_app_component_1_1) {
                outspoken_app_component_1 = outspoken_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(outspoken_app_component_1.OutspokenAppComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map