jQuery.sap.require("jquery.sap.storage");
jQuery.sap.require("PF.util.Formatter") 
sap.ui.define(["PF/controllers/BaseController","PF/util/Formatter","PF/util/Globals","PF/js/SiriusController",
               "PF/util/Formatter","PF/js/CordilleraController"],
		 function(BaseController,Formatter,Globals,sirius,formatter,cordillera) {
      return BaseController.extend("PF.controllers.main", {
            
            onInit : function(){
			var that=this; 
			jQuery.sap.storage.put("NavBackFlag",true)
			sap.ui.core.UIComponent.getRouterFor(this).attachRoutePatternMatched(this._onRoutePatternMatched, this);
			var oModel=new sap.ui.model.json.JSONModel("model/kpiDetail.json");
		    this.getView().setModel(oModel,"kpiModel");
		    var oModelCount=new sap.ui.model.json.JSONModel("");
		    this.getView().setModel(oModelCount,"countModel");
		    var bindingModel = new sap.ui.model.json.JSONModel();
		    sap.ui.getCore().setModel(bindingModel,"bindingModel");
			},
			
			onAfterRendering : function(){
				var x =this;
			},
			_onRoutePatternMatched : function(oEvent) {
				$("#idCanvas").remove();
				if(jQuery.sap.storage.get("NavBackFlag") == true){
					jQuery.sap.storage.put("NavBackFlag",false); 
				this.busyIndicator();
				var functionName = oEvent.getParameters().arguments.process;
				//var functionName = "SMKE03C3_1_QualityManagement_C3_IP";
				if(sap.ui.getCore().getModel("UISDetailModel").oData.SQLUISAlerts.length > 0){
					sap.ui.getCore().getModel("UISDetailModel").oData.changeTaskColor = true;
				}else{
					sap.ui.getCore().getModel("UISDetailModel").oData.changeTaskColor = false;
				}
				var x=this;
				sirius[functionName](x);
				var header= this.getView().getModel("oModelHeader").oData.header;
				this.getView().byId("idHeader").setText(header);
				if(jQuery.sap.storage.get("fromGO") == true){
					jQuery.sap.storage.put("fromGO",false)
				}
				}
			},
			
			homePressed : function(){
				jQuery.sap.storage.put("NavBackFlag",false);
				sap.ui.core.UIComponent.getRouterFor(this).navTo("Menu");
				
			},
			BackPressed : function(){
				
				$("#idCanvas").remove();
				jQuery.sap.storage.put("NavBackFlag",false);
				var oHistory = sap.ui.core.routing.History.getInstance();
				    var sPreviousHash = oHistory.getPreviousHash();
				sap.ui.core.UIComponent.getRouterFor(this).navTo(sPreviousHash);
				if(!sPreviousHash && oHistory.aHistory.length==1){
					window.location.href = window.hasher.getBaseURL();
				}
			},
			listPressed : function(){
				sap.ui.core.UIComponent.getRouterFor(this).navTo("KPIPage");
				},
			resetPressed : function(){
				var image = this.getView().byId("idImage");
				image.setSrc("images/ProcessGreen.JPG");
				this.getView().byId("idButInvisible").setVisible(false);
				this._oPopoverName.close();
			},
			
			/*Count of uis codes in the process*/
			countPressed : function(){
				this.busyIndicator();
				var that=this;
					var urload_line = "http://hicww7na234znhw:3000/service/getUISIncidentCountData?UIS_CODE=S";
			        $.ajax({
			          type : "GET",
			          contentType : 'application/json',
			          dataType : 'json',
			          crossDomain : true,
			          url : urload_line,
			          success : function(data) {
			        	  that.editPopUp.close();
			        	  debugger;
			        	  var processData = sap.ui.getCore().getModel("bindingModel").oData;
			        	  var uisArr=[];
			        	  for(var i=0 in processData){
			        		  var id=processData[i].id;
			        		  if(id[0].length > 3){
			        		  uisArr.push(processData[i].id);
			        		  }
			        		  }
			        	  console.log(uisArr);
			        	  var flattenArray=_.flatten(uisArr);
			        	  var processUIScodes=_.unique(flattenArray);
			        	  var processUIS=[];
			        	  for(var i=0 in processUIScodes){
			        		  for(var j=0 in data){
			        			  if(data[j].UIS_CODE == processUIScodes[i]){
			        				  processUIS.push(data[j]); 
			        			  }
			        		  }
			        	  }
			        	  
			        	  that.getView().getModel("countModel").setData(processUIS);
			        	  that.getView().getModel("countModel").refresh();
			        	  if (! that._countPopover) {
                              that._countPopover = sap.ui.xmlfragment("PF.fragments.countDisplay", that);
			        	  }
                        that._countPopover.open();
                        that._countPopover.setModel(that.getView().getModel("countModel"),"countModel"); 
                        
			          },
			          error: function (request, error) {
			        	  MessageToast.show("Error fetching Data from Server!");
					    }
			          });
			},
			
			CloseCountPopUP : function(){
				this._countPopover.close();
			},
			
			/*Skype for business*/
			
			
				skypeForBusinessPressed: function(){
						var link = document.createElement("a");   
						
						link.href = "sip:Lionel.De@unilever.com";
						
						//for multiple id
						
					    /*link.href = "im:<sip:Raja.veerappan3@unilever.com><sip:Shivanshu.Saxena@unilever.com>"*/
					    /*link.href="skype:Utkarsh.Bharti@unilever.com?call";*/
					    //this part will append the anchor tag and remove it after automatic click
						
					    document.body.appendChild(link);
					    link.click();
					}, 

			
			pageChanged : function(oEvt){
				var id=oEvt.getParameters().newActivePageId.split("-");
				var index=id[id.length-1];
				var dateArray=[];
				var popUpData = sap.ui.getCore().getModel("UISDetailModel").oData.DataForAlertPopUp[index];
				var date = new Date(popUpData.alert.FirstOccurrence*1000);
                var firstOccurance = date;
                var ticketType=popUpData.alert.Type;
                var firstOccuranceTime = date.getTime();
                var tktDeadlineTime, SLATime = 3600000;
                switch(ticketType) {
			         case 1:
			                   SLATime = 4*SLATime;
			             break;
			         case 2:
			                   SLATime = 8*SLATime;
			             break;
			         default:
			                   SLATime = 24*SLATime;
			     }
                tktDeadlineTime = firstOccuranceTime + SLATime;
                  // Update the count down every 1 second
                  var timer = setInterval(function() {
                  // Get todays date and time
                  var now = new Date().getTime();
                  // Find the distance between now an the count down date
                  var distance = tktDeadlineTime - now;
                  // Time calculations for hours, minutes and seconds
                // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                  //hrsLeft-__carousel0-5 minLeft-__carousel0-5 secLeft-__carousel0-5
                  var hrsLeft = sap.ui.getCore().byId("hrsLeft-__carousel0-"+index);
                  var minLeft = sap.ui.getCore().byId("minLeft-__carousel0-"+index);
                  var secLeft = sap.ui.getCore().byId("secLeft-__carousel0-"+index);
                  var timerTitle = sap.ui.getCore().byId("timerTitle-__carousel0-"+index);
                  hrsLeft.setText(hours);
                  minLeft.setText(minutes);
                  secLeft.setText(seconds);
                  if(hours <= 0 && minutes <= 0 && seconds <= 0){
                  timerTitle.removeStyleClass("timerTitle");
                  timerTitle.addStyleClass("timerSLAExceeded");
                  timerTitle.setText("SLA Limit Exceeded");
                  }
                },1000);
				
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
			
	
	infoPressed : function(){
		this.busyIndicator();
		var aFilters = [];
        var filter =  new sap.ui.model.Filter({
                  path: "ProcessCode",
                  operator: "EQ",
                  value1: sap.ui.getCore().getModel("UISDetailModel").getData("oData").uisCodeInfo
                });
        aFilters.push(filter);
        that = this;
        var tableModel = new sap.ui.model.odata.v2.ODataModel("https://ulapps-d.unilever.com/sap/opu/odata/sap/ZUIS_APPLOG_NEW_SRV/$metadata");
        tableModel.metadataFailed(that.errorHandler())
        tableModel.read("/logSet",{
                                success: function(oData, response){
                                	that.editPopUp.close();
                                	var data_array=[],data_line={};
                                      if (! that._ProcessoPopover) {
                                            that._ProcessoPopover = sap.ui.xmlfragment("PF.fragments.process", that);
                                   }
                                      that._ProcessoPopover.open();
                                      for(var i = 0 ; i < oData.results.length ; i++)
                                      {
                                      data_line = {};
                                if (oData.results[i].Uiscode.length > 7 )
                                      {data_line.Uiscode = oData.results[i].Uiscode ;}
                                else
                                      {data_line.Uiscode = "";}
	                              data_line.Busscenario =  oData.results[i].Busscenario;
	                              data_line.Criticalpro =  oData.results[i].Criticalpro;
	                              data_line.TrnInvolved = oData.results[i].TrnInvolved;
                                data_line.CrtSyslog = oData.results[i].CrtSyslog;
                                data_line.MntrMech = oData.results[i].MntrMech;
                                data_line.Symptoms = oData.results[i].Symptoms;
                                data_line.Rca = oData.results[i].Rca;
                                data_line.Comments = oData.results[i].Comments;
                                data_line.MonitoringObj = oData.results[i].MonitoringObj;
                                data_line.MntrType2 = oData.results[i].MntrType2;
                                data_line.BussImpact = oData.results[i].BussImpact;
                                      data_array.push(data_line);
                                
                                      }

                                      var model12 = new sap.ui.model.json.JSONModel();
                                      model12.setData(data_array);
                                      that.getView().setModel(model12,"tableModel");
                                      that._ProcessoPopover.setModel(that.getView().getModel("tableModel"),"tableModel");
                                      var x=2;
                                      sap.ui.getCore().byId("idInfoDiaHeader").setText(that.getView().getModel("oModelHeader").oData.header)
                                     // $('.columnBorderT2 tr:nth-child(even)').css("background-color","red")
                                    
                                },
                                error: function(oData, response)
                                {
                                	that.editPopUp.close();
                                      MessageToast.show("Error fetching Data from Server!");
                                }
                                ,
                                filters:aFilters
                          });

		//$('.columnBorderT2 tr:nth-child(even)').css("background-color","red")
	},
	errorHandler : function(oEvt){
		this.editPopUp.close();
        this.warningMessage("Error fetching Data from Server!");
	},
	closeProcessPressed : function(){
		this._ProcessoPopover.close();
	},
      handleExportToExcel :  function(oEvent) {
    	  debugger;
    	  var data =this.getView().getModel("tableModel").oData;
    	  var header=this.getView().getModel("oModelHeader").oData.header;
    	  var ShowLabel=true;
    	  this.JSONToCSVConvertor(data,header,ShowLabel);
      },
      
      colorRow : function(){
    	debugger;
    	var tableData = this.getView().getModel("tableModel").oData;
    	//$('.columnBorderT2 tr:nth-child(2)').css("background-color","red")
      },
       JSONToCSVConvertor :function(JSONData, ReportTitle, ShowLabel) {
    	    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    	    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    	    
    	    var CSV = '';    
    	    //Set Report title in first row or line
    	    
    	    CSV += ReportTitle + '\r\n\n';

    	    //This condition will generate the Label/Header
    	    if (ShowLabel) {
    	        var row = "";
    	        
    	        //This loop will extract the label from 1st index of on array
    	        for (var index in arrData[0]) {
    	            
    	            //Now convert each value to string and comma-seprated
    	            row += index + ',';
    	        }

    	        row = row.slice(0, -1);
    	        
    	        //append Label row with line break
    	        CSV += row + '\r\n';
    	    }
    	    
    	    //1st loop is to extract each row
    	    for (var i = 0; i < arrData.length; i++) {
    	        var row = "";
    	        
    	        //2nd loop will extract each column and convert it in string comma-seprated
    	        for (var index in arrData[i]) {
    	            row += '"' + arrData[i][index] + '",';
    	        }

    	        row.slice(0, row.length - 1);
    	        
    	        //add a line break after each row
    	        CSV += row + '\r\n';
    	    }

    	    if (CSV == '') {        
    	        alert("Invalid data");
    	        return;
    	    }   
    	    
    	    //Generate a file name
    	    var fileName = "";
    	    //this will remove the blank-spaces from the title and replace it with an underscore
    	    fileName += ReportTitle.replace(/ /g,"_");   
    	    
    	    //Initialize file format you want csv or xls
    	    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    	    
    	    // Now the little tricky part.
    	    // you can use either>> window.open(uri);
    	    // but this will not work in some browsers
    	    // or you will not get the correct file extension    
    	    
    	    //this trick will generate a temp <a /> tag
    	    var link = document.createElement("a");    
    	    link.href = uri;
    	    
    	    //set the visibility hidden so it will not effect on your web-layout
    	    link.style = "visibility:hidden";
    	    link.download = fileName + ".csv";
    	   
    	    
    	    //this part will append the anchor tag and remove it after automatic click
    	    document.body.appendChild(link);
    	    link.click();
    	    document.body.removeChild(link);
    	}
      });
}); 