/*
*	Центрируем контейнер основного виджета в броузере
*/
Ext.define('App.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'App.view.main.MainController',
        'App.view.main.MainModel',
		'App.view.sender.Main',
		'App.view.chat.Main'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },
	
	initComponent: function(){
		
		this.callParent();
		
	},

    items: [
			{
				region: 'center',
				xtype: 'chat'
			},
			
			{
				region: 'west',
				width: "30%"
			},
			{
				region: 'east',
				width: "30%"
			}
		]
});
