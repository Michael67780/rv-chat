/**
 * This class is the view model for the Main view of the application.
 */
 
Ext.define('App.view.list.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.list.main',
	
	data: {
		store: App.mainStore
	}
	
});