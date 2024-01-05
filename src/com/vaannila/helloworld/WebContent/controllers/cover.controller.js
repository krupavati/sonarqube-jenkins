jQuery.sap.require("jquery.sap.storage");
sap.ui.define(["PF/controllers/BaseController","PF/util/Formatter","PF/util/Globals"],
		 function(BaseController,Formatter,Globals) {
      return BaseController.extend("PF.controllers.cover", {
	
	navToSearch : function(){
		sap.ui.core.UIComponent.getRouterFor(this).navTo("Menu");
	},
	
	
	
});
}); 