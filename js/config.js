var path = require("path");
require.config({
    baseUrl: '/practice/require/',
    paths: {
        jquery: 'js/libs/jquery',
        underscore: 'js/libs/underscore',
        backbone: 'js/libs/backbone',
        text: 'js/libs/text',
        template: '../template',
        a: 'commponent/a/a',
        b: 'commponent/b/b'
    },
    shim: {
    	underscore: {
    		export: '_'
    	},
    	backbone: {
    		deps: ['underscore','jquery'], export: 'Backbone'
    	},
        text: {
            deps: ['jquery']
        }
    }
});
