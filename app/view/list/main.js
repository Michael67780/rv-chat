/**
 * This view is an example list of people.
 */
 
Ext.define('App.view.list.Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'chatlist',
	
	autoScroll: true,
	
	viewConfig: {
		stripeRows: false,
		
		getRowClass : function(record, index){
        
			return (record.data.uid == App.userID ? 'my-row' : 'peer-row');
		}
	},

	layout: 'fit',
	
	require: [
		'App.view.list.MainController',
		'App.view.list.MainModel'
	],
	
	controller: 'list.main',
	
	store: App.mainStore,
	
	bind: {
		store: '{store}'
	},
	
    viewModel: {
        type: 'list.main'
    },

    columns: [
		{
			dataIndex: 'text',
			flex: true,
			header: '@RV CHAT',
			menuDisabled: true,
			resizable: false,
			sortable: false
		}
	],
	
	listeners: {
		render: 'onListRender'
	},
	
	initComponent: function(){
		
		this.callParent();
		
		App.grid = this;
		
	}
            
});
