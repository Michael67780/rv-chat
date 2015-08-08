
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
							emptyText: 'Enter message...',
							// height: '20px',
							grow      : true,
							growMax: 200,
							growMin: 60,
							enableKeyEvents: true,
							resizable: true,
							listeners: {
								keyup: 'onKeyUp'
								// render: 'onInputRender'
							}
						}
						
					]
				}
			]
		}
		
	]
});
