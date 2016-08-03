require.config({
    baseUrl: '/practice/require/',
    paths: {
        a: 'commponent/a/a',
        b: 'commponent/b/b'
    },
    shim: {
    	underscore: {
    		export: '_'
    	},
    	backbone: {
    		deps: ['underscore','jquery'], export: 'Backbone'
    	}
    }
});