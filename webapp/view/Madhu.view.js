sap.ui.jsview("jerry.view.Madhu", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf jerry.view.Madhu
	 */
	getControllerName: function() {
		return "jerry.controller.Madhu";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf jerry.view.Madhu
	 */
	createContent: function(oController) {
			var oInput = new sap.m.Input("idInp");
		var oBtn = new sap.m.Button("idBtn",{
			text:"killmeEEE"
	//	press:oController.killMe
		});
		var oBtn1 = new sap.m.Button("idBtn1", {
	    text:"show power",
	    press:[oController.showSomePower,oController] 
	
});
		return [oInput,oBtn,oBtn1];
		
	}

});




/*var oPage = new sap.m.Page({
			title: "Title",
			content: []
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;*/