/**
 * Created by huxiangtao on 2016/3/8.
 */

require.config({
    baseUrl: 'dist/js',
    paths: {
        'angular': '../node_modules/angular.min',
        'domReady': './vendor/domReady',

    },
    shim: {
        'angular': {'exports': 'angular', 'deps': ['']}
    },
    deps: ['appBoot']
});

define(
    'appBoot',
    [
        'angular',
        'require',
        './' + appName
    ],
    function(ng,require) {
        require(['domReady!'], function (document) {
            ng.bootstrap(document, [appName]);
        });
});


