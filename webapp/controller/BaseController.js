sap.ui.define(
	["sap/ui/core/mvc/Controller" ,
	"jerry/model/models"],
  function(Controller,models){
      	
      	return Controller.extend("jerry.controller.BaseController",{
      		
      		//reusable code which can be used by any child controller
      		
      		showPopup:function(msg){
      			alert(msg);
      		},
      		createModel: function(){
      			
      		
      		var oModel = models.createJSONModel("model/mockData/madhudata.json");
      				//step3 : make model aware about the application
      			sap.ui.getCore().setModel(oModel);
      			// named model Another model @App level
      			var oModel1 = models.createJSONModel("model/mockData/dataSet2.json");
      			sap.ui.getCore().setModel(oModel1,"ola");
      			
      			var oResource = models.createResourceModel();
      			sap.ui.getCore().setModel(oResource, "i18n");
      		}
      		
      	
      			
      		
      		
      	});
	
	
	
});