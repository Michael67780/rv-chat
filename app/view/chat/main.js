
Ext.define('App.view.chat.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'App.view.chat.MainController',
        'App.view.chat.MainModel',
		'App.view.sender.Main'
    ],

    xtype: 'chat',
    
    controller: 'chat.main',
	
    viewModel: {
        type: 'chat.main'
    },

    layout: {
        type: 'border'
    },
	
	initComponent: function(){
		
		this.callParent();
		App.mainStore = Ext.create('App.store.Messages');
	},

    items: [{
				region: 'south',
				xtype: 'sendform',
				split: true
			},
			{
				region: 'center',
				xtype: 'chatlist'
			}
		]
});
