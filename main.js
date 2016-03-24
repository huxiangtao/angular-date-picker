/**
 * Created by huxiangtao on 2016/3/8.
 */

require.config({
    baseUrl: 'dist/js',
    paths: {
        'angular': '../node_modules/angular.min',
        'moment': '../node_modules/moment.min',
        'datetimepicker': './temp/datetimepicker',
        'bootstrap': '../node_modules/bootstrap.min',
        'jquery': '../node_modules/jquery.min',
        'domReady': './vendor/domReady',

    },
    shim: {
        'jquery': {'exports': 'jquery', 'deps': ['']},
        'angular': {'exports': 'angular', 'deps': ['']},
        'moment': {'exports': 'moment', 'deps': ['']},
        'datetimepicker': {'exports': 'datetimepicker', 'deps': ['moment','angular','jquery','bootstrap']}
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


