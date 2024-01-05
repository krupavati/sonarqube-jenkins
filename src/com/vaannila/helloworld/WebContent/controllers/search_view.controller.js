jQuery.sap.require("jquery.sap.storage");
sap.ui.define(["PF/controllers/BaseController","PF/util/Formatter","PF/util/Globals"],
		 function(BaseController,Formatter,Globals) {
      return BaseController.extend("PF.controllers.search_view", {
	
	
	SearchPress : function(){
		sap.ui.core.UIComponent.getRouterFor(this).navTo("searchPage");
	},
	
	viewALlPress : function(){
		sap.ui.core.UIComponent.getRouterFor(this).navTo("KPIPage");
	}
	
});
}); 