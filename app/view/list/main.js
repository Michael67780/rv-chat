/*
* Chat Messages Grid with customized rows
* Для отображения используем грид с одной колонкой. Заголовок колонки используем как header для всего виджета
*/
 
Ext.define('App.view.list.Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'chatlist',
	
	bufferedRenderer: false, //иначе проблемы с скороллом
	
	//кастомизиреум строки грида
	viewConfig: {
		
		stripeRows: false,
		
		getRowClass : function(record, index){
 			return (record.data.uid == App.userID ? 'my-row' : 'peer-row');
		}
	},
	
	require: [
		'App.view.list.MainController',
		'App.view.list.MainModel'
	],
	
	controller: 'list.main',

    viewModel: {
        type: 'list.main'
    },

    columns: [
		 Ext.create('Ext.grid.column.Column', {
			dataIndex: 'text',
			flex: true,
			text: 'RV CHAT',
			//связываем с modelview на случай если захотим динамически менять заголовок
			bind: {
				text: '{gridTitle}'
			},
			menuDisabled: true,
			resizable: false,
			sortable: false
		})
	],
	
	//соединение с socket.io и установка обработчиков
	connect: function() {
	
		var socket = App.socket = io();
		
		App.socket.on('connect', function(s){
			
			if (!$.cookie('user_id'))
			{
				$.cookie('user_id', 'UID' + String(Math.random()).slice(2));
			}
			App.userID = $.cookie('user_id'); //ID forever
			
			//подгружаем данные только после коннекта и установки userID
			App.mainStore.load();
		});
		
		App.socket.on('disconnect', function(s){
			App.userID = null;
		});
		
		App.socket.on('chat.message', function(msg){
			
			var rec = null;
			
			if (msg.uid !== App.userID) //сообщения добавил другой пользователь
			{
				App.mainStore.load();
			}
			else //мое сообщение сохранено на сервере - можно добавить его в список, а подгружать не нужно
			{
				rec = Ext.create('App.model.Message', msg);
				App.mainStore.add(rec);
				rec.commit();
				App.grid.scrollToBottom();
			}
			
		});
		
	},	
	
	initComponent: function(){
	
		App.grid = this;
		App.mainStore = Ext.create('App.store.Messages');
		this.store = App.mainStore;
		
		this.connect();
	
		this.callParent();
		
	},
	
	scrollToBottom: function(){
		this.getView().scrollBy(0, 999999);
	}
            
});
