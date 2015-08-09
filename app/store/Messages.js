Ext.define('App.store.Messages', {
    extend: 'Ext.data.Store',

	requires: [
		'App.model.Message'
	],
	
    alias: 'store.messages',
	
	model: 'App.model.Message',

    proxy: {
        type: 'ajax',
		url: '/messages',
        reader: {
            type: 'json'
        }
    },
	
	listeners: {
		load: function(s){
			App.grid.scrollToBottom();
		}
	}
});
