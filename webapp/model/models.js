sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
	], 

    function(JSONModel,ResourceModel){
    	
    	
    	return {
    			createJSONModel:function(filepath){
		//step 1: create brand new model();
      			var oModel = new JSONModel();
      			
      			//oModel.setDefaultBindingMode("OneWay");
      			//step2: set data inside the model ();
      			//oModel.loadData("model/mockData/madhudata.json");
      				oModel.loadData(filepath);
      			return oModel;
		
	},
	createResourceModel: function(){
		
		var oModel = new ResourceModel({
			bundleUrl:"i18n/i18n.properties"
		});
		
	
		
		return oModel;
		
		
		
	}
	
	
	
    		
    	};

	

      		
	
});