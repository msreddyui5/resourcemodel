sap.ui.define([
		"jerry/controller/BaseController",
		"sap/m/MessageBox"
	],
	function(BaseController,oSpiderman) {
		return BaseController.extend("jerry.controller.Madhu", {
			
			
			//acts like constructor of a class
			// ui5 will call automatically once in life time when the app starts
			// all your initialization code can go in
			onInit: function(){
				
				this.createModel();
			this.myViewObject = this.getView();	
			}, 
			onAfterRendering:function(){
			/*	$("#idTable").fadeOut(2000).fadeIn(2000);*/
				$("#idMyXml--idTable").fadeOut(7000).fadeIn(8000);
				
			},
			//xml view binding
			
			  onBindChange: function(oEvent){
			  	//step1 : read state of the switch
				var changed = oEvent.getParameter("state");
				//step2 : get the object of table
				var oTable = this.getView().byId("idTable");
				
				//step3 flip the models
				var oModel = sap.ui.getCore().getModel();
				var oAltModel = sap.ui.getCore().getModel("alternate");
				sap.ui.getCore().setModel(oAltModel);
				sap.ui.getCore().setModel(oModel,"alternate"); // it will filp here
				//step4 based on switch state change the binding for table dynamically
				if(changed === true){
					oTable.bindRows("/empTab");
				}else{
					oTable.bindRows("/empTab/row");
				}
				
			},
			
	 	     myViewObject:null,        //global variable
			onSelect: function(oEvent){
			//	debugger;
				//step1: find the address of the element which is selected=/empTab/index like empTab/0
				var sPath = oEvent.getParameter("rowContext").getPath();
				//step2 : get the object of simple form
			/*	var oSimple = this.getView().byId("idContra");*/
				var oSimple = this.myViewObject.byId("idContra");
				
				//step 3 bind the element with simple form
				
				oSimple.bindElement(sPath);
				
				

				
				
			},
			onSwtChange: function(){
			
			/*	var oModel = sap.ui.getCore().getModel();*/
					var oModel = sap.ui.getCore().getModel();
				if(oModel.getProperty("/empStr/alia") === true){
					oModel.setProperty("/empStr/alia", false);
					}else{
						oModel.setProperty("/empStr/alia", true);
						
					}
			},

				showSomePower: function() {
				
				//	var oKillMe = sap.ui.getCore().byId("idBtn");
			/*	var oView = this.getView();*/
				var oKillMe = this.getViewObject().byId("idBtn");
					oKillMe.attachPress(this.killMe, this);
					//var field = sap.ui.getCore().byId("idBtn1").setVisible(false); 

				},

				killMe: function() {
					//strp 1: obtain the object of input field
					//var val = sap.ui.getCore().byId("idInp").getValue();
					var val = this.myViewObject.byId("idInp").getValue();
					/*			var oKillMe = sap.ui.getCore().byId("idBtn");
			 if(oKillMe.getVisible()) {
           oKillMe.setVisible(false);
       }*/
				//alert(val);
				oSpiderman.confirm(val);
					//this.showPopup(val);
				}

			}

		);
	});