/*
* Промежуточный контейнер для грида сообщений и поля отправки сообщения 	
*/
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
