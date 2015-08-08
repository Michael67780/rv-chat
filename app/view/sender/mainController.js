/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('App.view.sender.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

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
			
			return false;
		}
		
	},
	
	onInputRender: function(c){
		c.setHeight('10px');
		this.getView().doLayout();
	}
});
