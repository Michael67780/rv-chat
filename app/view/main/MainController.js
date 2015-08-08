
Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

    init: function() {
		
		App.mainStore = Ext.create('App.store.Messages');
		var socket = App.socket = io();
		
		App.socket.on('connect', function(s){
			
			if (!$.cookie('user_id'))
			{
				$.cookie('user_id', 'UID' + String(Math.random()).slice(2));
			}
			App.userID = $.cookie('user_id');
		});
		
		App.socket.on('disconnect', function(s){
			App.userID = null;
		});
		
		App.socket.on('chat.message', function(msg){
			
			var rec = null;
			
			if (msg.uid !== App.userID)
			{

				App.mainStore.load();
			}
			else
			{
				rec = Ext.create('App.model.Message', msg);
				App.mainStore.add(rec);
				rec.commit();
				App.mainStore.scrollGrid();
			}
			
		});
		
	}	
});
