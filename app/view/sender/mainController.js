/**
 * Textarea - обработка отправки сообщений
 */
Ext.define('App.view.sender.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.sender.main',
	
	onKeyUp: function(c, e){
		var msg = '';
		
		if(!App.userID) {
			console.log('ERROR: no connection established!');
			return;
		}
		
		if (e.keyCode == 13)
		{
			msg = $.trim(c.getValue());
			c.setValue('');
			
			if (!msg) return;
			
			App.socket.emit('chat.message', {
				uid: App.userID,
				text: $.trim(msg)
			});

		}
		
	}
});
