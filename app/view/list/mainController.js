
Ext.define('App.view.list.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.list.main',
	
	onListRender: function(g){
		$('.x-grid-header-ct').attr('disabled', 'disabled');
		g.fireEvent('resize');
		$('.x-grid-body').css('border-top', 'none');
	}
	
});
