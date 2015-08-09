/*
*	Для ввода сообщений используем textarea с параметром grow для автоматического увеличении поля
*/
Ext.define('App.view.sender.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'sendform',
	
	require: [
		'App.store.Messages',
		'App.view.sender.MainController',
		'App.view.sender.MainModel'
	],
	
	controller: 'sender.main',
	
    viewModel: {
        type: 'sender.main'
    },
	
	items: [
	
		{
			layout : 'column',
			border : true,
			items : [
				{
					columnWidth : 1,
					border : false,
					layout: 'form',
					items: [
	
						{
							xtype: 'textareafield',
							autoRender: true,
							emptyText: 'Enter message...',
							grow      : true,
							growMax: 300,
							growMin: 54,
							enableKeyEvents: true,
							resizable: true,
							listeners: {
								keyup: 'onKeyUp'
							}
						}
						
					]
				}
			]
		}
		
	]
});
