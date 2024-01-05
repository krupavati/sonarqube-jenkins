sap.ui.define([ "sap/ui/core/UIComponent"], 
		
	function(UIComponent) {
	return UIComponent.extend("PF.Component", {

		metadata : {
			manifest : "json"
		},

		init : function() {
			var oModelHeader = new sap.ui.model.json.JSONModel();
			this.setModel(oModelHeader,"oModelHeader");
			
			var oModel=new sap.ui.model.json.JSONModel();
		    sap.ui.getCore().setModel(oModel,"UISDetailModel");
		    
		    var SQLModel = new sap.ui.model.json.JSONModel();
		    sap.ui.getCore().setModel(SQLModel,"SQLModel");
		    
		    var MasterModel = new sap.ui.model.json.JSONModel();
  		    sap.ui.getCore().setModel(MasterModel,"MasterModel");
			
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
			
			
				var that=this;
				var urload_line = "http://ocsq051a.eu.unilever.com:8000/sap/opu/odata/sap/ZUIS_MASTER_NEW_SRV/ZDSO_ZQ009_UIS_MASTER"+
				"(AZLAN_SCP='',AZFUN_UIS='',AZPROUIS='',AZUISCOD='',AZSUBPROC='',AZBUSCODE='',AZRC_COD='',AZCRTCODE='')/Results";
		        $.ajax({
		          type : "GET",
		          contentType : 'application/json',
		          dataType : 'json',
		          crossDomain : true,
		          url : urload_line,
		          success : function(data) {
		  		  sap.ui.getCore().getModel("MasterModel").setData(data);
		          },
		          error: function (request, error) {
		        	  
				    }
		          });	
				
			
				
			
			
			
		}

	});

}); 
