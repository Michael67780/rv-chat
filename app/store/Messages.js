Ext.define('App.store.Messages', {
    extend: 'Ext.data.Store',

	requires: [
		'App.model.Message'
	],
	
	autoLoad: true,
	
    alias: 'store.messages',
	
	model: 'App.model.Message',

    proxy: {
        type: 'ajax',
		url: '/message-list',
        reader: {
            type: 'json'
        }
    },
	
	scrollGrid: function(){
			App.grid.getView().scrollBy(0, 999999);
	},
	
	listeners: {
		load: function(s){
			s.scrollGrid();
		}
	}
});
