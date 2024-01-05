jQuery.sap.require("jquery.sap.storage");
sap.ui.define(["PF/controllers/BaseController","PF/util/Formatter","PF/util/Globals"],
		 function(BaseController,Formatter,Globals) {
      return BaseController.extend("PF.controllers.kpi", {
	onInit : function(){
		jQuery.sap.storage.put("count",0);
		//sap.ui.core.UIComponent.getRouterFor(this).attachRoutePatternMatched(this._onRoutePatternMatched, this);
		var kpiPagemodel = new sap.ui.model.json.JSONModel();
	    this.getView().setModel(kpiPagemodel,"kpiPagemodel");
	    var kpiFilter = new sap.ui.model.json.JSONModel("model/real2.json");
	    this.getView().setModel(kpiFilter,"kpiFilter");
	    this._loadSQLData();
	    this.TimerFunction(true);
	},
	warningMessage : function(message) {

		jQuery.sap.require("sap.m.MessageBox");
		sap.m.MessageBox.alert(message,
						{
							title : "Warning",
							icon : sap.m.MessageBox.Icon.WARNING,
							onClose : function(oAction) {
							}

						});
	},
	
	TimerFunction : function(flag){
		var that=this;
		if(flag == true){
		 timer = setInterval(function() {
			jQuery.sap.storage.put("count",0);
			that._loadSQLData();
		},10000)
		}
		else if(flag == false){
			alert("Check close");
			clearInterval(timer);
		}
		
	},
	
	_loadSQLData : function(){
		//
		//http://hicww7na234znhw:3000/service/getLimitedOpenData?UserID=GSMAutoTicket&Node=S1P
			var that=this;
			
			/*Voice integration*/
			var incidentListDataOld = this.getView().getModel("kpiPagemodel");
  			
  			if(incidentListDataOld != undefined || incidentListDataOld != null){
  				jQuery.sap.storage.put("incidentDataOld",incidentListDataOld.oData);
  			}
			
			var urload_line = "http://cgiu1175a.eu.unilever.com:3000/service/getAllOpenData?UserID=GSMAutoTicket&Node=S1P";
	        $.ajax({
	          type : "GET",
	          contentType : 'application/json',
	          dataType : 'json',
	          crossDomain : true,
	          url : urload_line,
	          success : function(data) {
	        	  var dataCheck=sap.ui.getCore().getModel("SQLModel").oData.length;
	        	  if(dataCheck<0 || dataCheck == undefined){
	        		  sap.ui.getCore().getModel("SQLModel").setData(data); 
	        	  }else{
	        		  for(var i=0;i<data.length;i++){
	        			  sap.ui.getCore().getModel("SQLModel").oData.push(data[i]);    
	        		  }       		  
	        	  }
	        	  var tableData=[];
	        	  if(data.length == 0){
	        		  jQuery.sap.storage.put("sqlData",tableData);
	        	  }else{
	            for(var j=0;j<data.length;j++){
	            var finalUISCodes=[];
	            var  string = data[j].Identifier;
	    		var key,breakedString,codeArray=[],count=0;
	    		var substring="UIS";
	    		for(var i=0;i<5;i++){
	    			if(string.includes(substring) == true){
	    			key=i;
	    			count=4;
	    			break;
	    			}
	    			}
	    		var uisIndex=string.indexOf(substring);
	    		uisIndex=uisIndex+count;
	    		breakedString = string.slice(uisIndex,string.length);
	    		var endIndex = breakedString.indexOf(" |");
	    		var codesString = breakedString.substring(0,endIndex);
	    		var codes=codesString.split(",");
	    		for(var l=0;l<codes.length;l++){
	    			finalUISCodes.push(codes[l].replace(/[^A-Z0-9]/ig,""))
	    		}
	    		
	    		var system="ECC";
	    		
	    		var content = {"BuisnessImpact":"--",
	    						"Impact":"Yes",
	    						"UIS_Code":finalUISCodes,
	    						"Incident":data[j].TicketID,
	    						"Summary":data[j].Summary,
	    						"Identifier":data[j].Identifier,
	    						"Landscape":"",
	    						"Priority":data[j].Type,
	    						"Process":"",
	    						"Subtask":"",
	    						"AlertGroup":data[j].AlertGroup}
	    		tableData.push(content);
	            }
	            jQuery.sap.storage.put("sqlData",tableData);
	            
	          }
	        	  that.functionloaded();
	          }
	          });
		
	},
	
	functionloaded : function(){
   		 var date = new Date();
   		 this.getView().byId("idTimerLabel").setText("Last refreshed on: "+date.toString().substr(0,24));
   		 var sqlData = jQuery.sap.storage.get("sqlData");
   	     var masterData = sap.ui.getCore().getModel("MasterModel").oData.d.results;
   	  var incidentDataOld = jQuery.sap.storage.get("incidentDataOld");
   	     if(sqlData.length != 0){
   		for(var i=0;i<sqlData.length;i++){
   			var uisCode = sqlData[i].UIS_Code[0];
   			for(var j=0;j<masterData.length;j++){
   			if(uisCode == masterData[j].A2ZPROUIS){
   			sqlData[i].Landscape=masterData[j].A2ZLAN_SCP;
   			sqlData[i].Process=masterData[j].A2ZBUSPROCE;
   			sqlData[i].Subtask=masterData[j].A2ZBUSCENA;
   			break;
   			}
   			}
   			}
   		this.getView().getModel("kpiPagemodel").oData.data = sqlData;
   		this.getView().getModel("kpiPagemodel").refresh();
   		
   		
   		/*Table filter*/ 
   		var tableData = this.getView().getModel("kpiPagemodel").oData.data;
   		var filter=[],value=[],type;
   		var keys=Object.keys(tableData[0]);
   		for(var i=1;i<keys.length;i++){
   			type=keys[i],value=[];
   			for(var j=0;j<tableData.length;j++){
   				value.push({"text" : tableData[j][keys[i]]})
   			}
   			UniqueValue = _.uniq(value, function(x) { return x.text});
   			filter.push({"type":type,"value":UniqueValue})
   			}
   		this.getView().getModel("kpiFilter").oData.filter = filter;
   		this.getView().getModel("kpiFilter").refresh();
   		
   		/*Voice integration*/
   		var voices = window.speechSynthesis.getVoices()[3];
   		
   		if (incidentDataOld.data != undefined) {
            // to be commented below block
                 var index = sqlData.length;
                 sqlData[index] = {BuisnessImpact
                              :
                              "Critical",
                              Identifier
                              :
                              "UIS | SDEL05D7D4 | JLABR-1052C-0020-SP JOB ALRT_JOB_MON  SAP-MIB MTTrapd Probe 60 valueCritical (3)",
                              Impact
                              :
                              "Yes",
                              Incidence
                              :
                              "INC000100969600",
                              Landscape
                              :
                              "Sirius",
                              Priority
                              :
                              2,
                              Process
                              :
                              "Pre Payment DEL Based",
                              Subtask
                              :
                              "DC to DC process",
                              Summary
                              :
                              "ABAP Job : Analysis Tools    SM37. : JOBCOUNT=22300401|JOBINSTANCE_ID=20170529_0000000001_0000000000|JOBNAME=JLABR-1052C-0020-SP|STEPCOUNT=1 = Job cancelled",
                              System
                              :
                              "ECC"};
                 
                 sqlData[index+1] = {BuisnessImpact
                              :
                              "Medium",
                              Identifier
                              :
                              "UIS | SDEL05D7D4 | JLABR-1052C-0020-SP JOB ALRT_JOB_MON  SAP-MIB MTTrapd Probe 60 valueCritical (3)",
                              Impact
                              :
                              "Yes",
                              Incidence
                              :
                              "INC000100969601",
                              Landscape
                              :
                              "Sirius",
                              Priority
                              :
                              2,
                              Process
                              :
                              "DC to DC process",
                              Subtask
                              :
                              "DC to DC process",
                              Summary
                              :
                              "ABAP Job : Analysis Tools    SM37. : JOBCOUNT=22300401|JOBINSTANCE_ID=20170529_0000000001_0000000000|JOBNAME=JLABR-1052C-0020-SP|STEPCOUNT=1 = Job cancelled",
                              System
                              :
                              "ECC"};
                 
                 
                 sqlData[index+2] = {BuisnessImpact
                              :
                              "Critical",
                              Identifier
                              :
                              "UIS | SDEL05D7D4 | JLABR-1052C-0020-SP JOB ALRT_JOB_MON  SAP-MIB MTTrapd Probe 60 valueCritical (3)",
                              Impact
                              :
                              "Yes",
                              Incidence
                              :
                              "INC000100969602",
                              Landscape
                              :
                              "Sirius",
                              Priority
                              :
                              1,
                              Process
                              :
                              "test priority 1",
                              Subtask
                              :
                              "DC to DC process",
                              Summary
                              :
                              "ABAP Job : Analysis Tools    SM37. : JOBCOUNT=22300401|JOBINSTANCE_ID=20170529_0000000001_0000000000|JOBNAME=JLABR-1052C-0020-SP|STEPCOUNT=1 = Job cancelled",
                              System
                              :
                              "ECC"};

                 
          // to be commented below block
          
                 
          if (sqlData.length > incidentDataOld.data.length) {
                 //to know how many new incident
                 
                 var newIncidentList = [];
                 var count = sqlData.length - incidentDataOld.data.length;
                 
                 var countMessage = new SpeechSynthesisUtterance("Number of new incicent is " + count);
                 
                 
                 countMessage.voice = voices;
                 
                 window.speechSynthesis.speak(countMessage);
                 
                 for (var i = 0; i < sqlData.length; i++) {
                       var newIncident = true;
                       for (var j = 0; j < incidentDataOld.data.length; j++) {
                              if (sqlData[i].Incidence === incidentDataOld.data[j].Incidence) {
                                     newIncident = false;
                                     break;
                              }

                       }
                       if (newIncident) {
                              debugger;
                              
                              newIncidentList.push(sqlData[i]);
                       }

                 }
                 
                 newIncidentList.sort(function(a,b){
                       return a.Priority - b.Priority;
                 });
                 
                 for(var i=0; i< newIncidentList.length; i++){   
                       var msg = new SpeechSynthesisUtterance("Priority " + newIncidentList[i].Priority + " incident is reported in " + newIncidentList[i].Process);
                       msg.voice = voices;
                       window.speechSynthesis.speak(msg);
                 }
          }
   }

   		
   		
   	     }else{
   	    	this.warningMessage("No open alerts");
   	     }
   	 
   	 
    },
    handleConfirm : function(oEvt){
    	var source = oEvt.getSource();
    	var title = source.mProperties.title;
    	var selectedItems = source.getSelectedItems();
    	var filterText =[];
    	for(var i=0;i<selectedItems.length;i++){
    		filterText.push(source.getSelectedItems()[i].getText());
    	}
    	this._tableFilter(title,filterText);
    },
    _tableFilter : function(title,filterText){
    	
    	var table = this.getView().byId("idProductsTable").getBinding("items");
    	var filterObj=[];
    	for(var i=0;i<filterText.length;i++){
    		var filter = new sap.ui.model.Filter(title, "EQ", filterText[i]);
    		filterObj.push(filter);
    	}
    	table.filter(filterObj);
    },
    handleFacetFilterReset : function(oEvent){
    	var oFacetFilter = sap.ui.getCore().byId(oEvent.getParameter("id"));
		var aFacetFilterLists = oFacetFilter.getLists();
		for(var i=0; i < aFacetFilterLists.length; i++) {
			for(var i=0; i < aFacetFilterLists.length; i++) {
				aFacetFilterLists[i].setSelectedKeys();
			}
		}
    	var table = this.getView().byId("idProductsTable").getBinding("items");
    	table.filter([]);
    },
    
	tableItemPressed :function(oEvt){
		var context=oEvt.mParameters.listItem.oBindingContexts.kpiPagemodel.sPath.split("/")[2];
		var that=this;
		var sqlData = jQuery.sap.storage.get("sqlData");
		var value = sqlData[context].UIS_Code[0];		
		var uisCode = value.substring(0,10);
		var url ="http://ocsq051a.eu.unilever.com:8000/sap/opu/odata/sap/ZUIS_MASTER_NEW_SRV/ZDSO_ZQ009_UIS_MASTER(AZLAN_SCP='',AZFUN_UIS='',AZPROUIS='"+uisCode+"',AZUISCOD='',AZSUBPROC='',AZBUSCODE='',AZRC_COD='',AZCRTCODE='')/Results";			
		/*var url="http://ocsq051a.eu.unilever.com:8000/sap/opu/odata/sap/ZDB_UIS_MASTER_SRV/ZDSO_ZQ009_UIS_MASTER"+
		"(AZLAN_SCP='',AZFUN_UIS='',AZPROUIS='"+uisCode+"',AZUISCOD='',AZSUBPROC='',AZBUSCODE='',AZRC_COD='',AZCRTCODE='')/Results";*/
		$.ajax({
			type : "GET",
			contentType : 'application/json',
			dataType : 'json',
			crossDomain : true,
			url : url,
			success : function(data) {
				if(data.d.results.length == 0){
					that.warningMessage("No match found")
				}else{	
					sap.ui.getCore().getModel("UISDetailModel").oData.uisCode = sqlData[context].UIS_Code[0];
					sap.ui.getCore().getModel("UISDetailModel").oData.SQLUISCodes = sqlData[context].UIS_Code;
					sap.ui.getCore().getModel("UISDetailModel").oData.SQLUISAlerts = sqlData[context].Summary;
					sap.ui.getCore().getModel("UISDetailModel").oData.uisCode = data.d.results[0].A2ZPROUIS;
					sap.ui.getCore().getModel("UISDetailModel").oData.methodName = data.d.results[0].A2ZMETUIS;
					var processSelected = data.d.results[0].A2ZMETUIS;
					jQuery.sap.storage.put("NavBackFlag",true);
					sap.ui.core.UIComponent.getRouterFor(that).navTo("first", {
						process: processSelected
					});
					
				}
			}
			});
	},
	homePressed : function(){
		this.TimerFunction(false);
		sap.ui.core.UIComponent.getRouterFor(this).navTo("Menu");
	},
	
	navToSearch : function(){
		this.TimerFunction(false);
		sap.ui.core.UIComponent.getRouterFor(this).navTo("searchPage");
	},
	navToKPI : function(){
		this.TimerFunction(false);
		sap.ui.core.UIComponent.getRouterFor(this).navTo("KPIPage");
	},
	
	
});
}); 