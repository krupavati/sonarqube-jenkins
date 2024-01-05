jQuery.sap.require("jquery.sap.storage");
sap.ui.define(["PF/controllers/BaseController","PF/util/Formatter","PF/util/Globals"],
		 function(BaseController,Formatter,Globals) {
      return BaseController.extend("PF.controllers.first", {
	onInit : function(){
		var that=this;
		sap.ui.core.UIComponent.getRouterFor(this).attachRoutePatternMatched(this._onRoutePatternMatched, this);
		jQuery.sap.storage.put("fromGO",false);
		jQuery.sap.storage.put("uisCode","UIS001");
		jQuery.sap.storage.put("NavBackFlag",true);
		jQuery.sap.storage.put("countForSQL",0);
		this.code1;this.code2;this.code3;this.code4;this.code5;
	    sap.ui.getCore().getModel("UISDetailModel").oData.SQLUISAlerts=[];
	    this._loadSQLData();
	    
	    
	    
	},
	
	_onRoutePatternMatched : function(oEvent) {
		/*for(var i=1;i<6;i++){
			var data =this.getView().byId("idInput"+i).setValue("");
		}*/
		var inputField=this.getView().byId("idUISInput");
		inputField.removeStyleClass("showError");
	},
	
	_loadSQLData : function(){
		//==============================
	    //			load sql data
		//query used - load open alerts of 7 days 
		//which will refresh every 15mins 
		// http://hicww7na234znhw:3000/service/getLimitedOpenData?UserID=GSMAutoTicket&Node=S1P
		//==============================
		var that=this;
		return new Promise( function(resolve, reject){
			var urload_line = "http://hicww7na234znhw:3001/dummy";
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
	            console.log(sap.ui.getCore().getModel("SQLModel"));
	            that.checkUisCode();
	          },
	          error: function (request, error) {
	        	  reject();
			    }
	          });
		});
	},
	
	
	
	
	
	checkUisCode : function(data){
		debugger
		//alert("Hi");
		var data = sap.ui.getCore().getModel("SQLModel").oData;
		var alerts=[],finalUISCodes=[];
		for(var j=0;j<data.length;j++){
		var  string = data[j].Identifier;
		var key,breakedString,codeArray=[],count=0;
		var substring="UIS";
		for(var i=0;i<5;i++){
		if(string.includes(substring) == true){
		key=i;
		count=4;
		//alerts.push(data[j]);
		alerts.push(string)
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
		}
		
		for(var j=0;j<data.length;j++){
		    var  string = data[j].Summary;
		    var key,breakedString,codeArray=[],count=0;
		    var substring="Affected:";
		    
		    if(string.includes(substring) == true){
		    	var uisIndex=string.indexOf(substring);
		    	uisIndex = uisIndex + 10;
		    	breakedString = string.slice(uisIndex,string.length);
		    	var endIndex = breakedString.indexOf(".");
		    	var codesString = breakedString.substring(0,endIndex);
		    	var codes=codesString.split(",");
			    for(var l=0;l<codes.length;l++){
			      finalUISCodes.push(codes[l].replace(/[^A-Z0-9]/ig,""))
			    }
		    }
		    }
		
		sap.ui.getCore().getModel("UISDetailModel").oData.SQLUISCodes=finalUISCodes;	
		sap.ui.getCore().getModel("UISDetailModel").oData.SQLUISAlerts=alerts;
		console.log(finalUISCodes);
		console.log(alerts);
		
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
	closeSearchPOP : function(){
		this._searchoPopover.close();
		this.getView().getModel("search").setData("");
	},
	navToKPI : function(){
		sap.ui.core.UIComponent.getRouterFor(this).navTo("KPIPage");
	},
	homePressed : function(){
		
		sap.ui.core.UIComponent.getRouterFor(this).navTo("Menu");
	},
	uisGoPressed : function(){
		var that=this;
		var value = this.getView().byId("idUISInput").getValue();
		if(value.length != ""){
			jQuery.sap.storage.put("fromGO",true);
			var uisCode = this.getView().byId("idUISInput").getValue();
			jQuery.sap.storage.put("uisCode",uisCode);
			
			
			if(value.length>=10){
				var uisCode = value.substring(0,10);
				
		var url="http://ocsq051a.eu.unilever.com:8000/sap/opu/odata/sap/ZUIS_MASTER_NEW_SRV/ZDSO_ZQ009_UIS_MASTER"+
		"(AZLAN_SCP='',AZFUN_UIS='',AZPROUIS='"+uisCode+"',AZUISCOD='',AZSUBPROC='',AZBUSCODE='',AZRC_COD='',AZCRTCODE='')/Results";
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
			}else{
				 this.warningMessage("Need atleast 10 digit UIS code");
			}
		}else{
			var inputField=this.getView().byId("idUISInput");
			if (! this._oPopover) {
				this._oPopover = sap.ui.xmlfragment("PF.fragments.validationPOPup", this);
				this.getView().addDependent(this._oPopover);
			}
			jQuery.sap.delayedCall(0, this, function () {
				this._oPopover.openBy(inputField);
			});
			 inputField.addStyleClass("showError");
			//this.warningMessage("Please fill UIS code");
			 this.timer();
		}
	},
	
	timer : function(){
		var that =this;
		/*setInterval(function(){
			//that.getView().byId("idUISInput").removeStyleClass("showError");
			if(that._oPopover.isOpen() ==true)
				{
				that._oPopover.close();
				}
			}, 1000);*/
	},
	closeErrorPOpUP : function(){
		if(this._oPopover.isOpen() ==true)
		{
		this._oPopover.close();
		}
	},
	uisLivechange : function(oEvt){
		var value=oEvt.getParameters().newValue;
		if(value.length>0){
			var inputField = this.getView().byId("idUISInput");
			inputField.removeStyleClass("showError");
		}
	},
	
	errorMessage : function(){
		jQuery.sap.require("sap.m.MessageBox");
		sap.m.MessageBox.alert( "Oops! Something went wrong. You can try following things.\n\n" +
                "1) Check your internet connection.\n\n" +
                "2) Clear the fields and try selecting from suggestion box.\n\n" +
                "3) Try reloading again after sometime.\n\n" +
                "3) Contact your system administrator if the problem persists.",
						{
							title : "Warning",
							icon : sap.m.MessageBox.Icon.WARNING,
							onClose : function(oAction) {
							}

						});
		
	},
	removeError : function(oEvt){
		var value=oEvt.getParameters().newValue;
		if(value.length>0){
			var inputField = this.getView().byId("idInput3");
			inputField.removeStyleClass("showError");
		}
	},
	navToProcess:function(){
		var that=this;
		var inputArray=[];
		for(var i=0;i<6;i++){
			var data =this.getView().byId("idInput"+i).getValue();
			if(data == ""){
				inputArray.push("");
			}else if (data !=""){
				var code = "code"+i;
				inputArray.push(this[code]);
			}
		}
		if (! this._oPopover) {
			this._oPopover = sap.ui.xmlfragment("PF.fragments.validationPOPup", this);
			this.getView().addDependent(this._oPopover);
		}
		var inputFieldSub = this.getView().byId("idInput3");
		var inputFieldLand = this.getView().byId("idInput0");
		if(inputArray[0] == ""){
			jQuery.sap.delayedCall(0, this, function () {
				this._oPopover.openBy(inputFieldLand);
			});
			inputFieldLand.addStyleClass("showError");
		}else if(inputArray[3] == ""){
			jQuery.sap.delayedCall(0, this, function () {
				this._oPopover.openBy(inputFieldSub);
			});
			inputFieldSub.addStyleClass("showError");
			 
		}else{
			inputFieldSub.removeStyleClass("showError");
			inputFieldLand.removeStyleClass("showError");
		
				var url="http://ocsq051a.eu.unilever.com:8000/sap/opu/odata/sap/ZUIS_MASTER_NEW_SRV/ZDSO_ZQ009_UIS_MASTER(AZLAN_SCP='"+
				inputArray[0]+"',AZFUN_UIS='"+inputArray[1]+"',AZPROUIS='',AZUISCOD='',AZSUBPROC='"+inputArray[3]+"',AZBUSCODE='"+inputArray[2]+"',AZRC_COD='"+inputArray[5]+"',AZCRTCODE='"+inputArray[4]+"')/Results";
		$.ajax({
			type : "GET",
			contentType : 'application/json',
			dataType : 'json',
			crossDomain : true,
			url : url,
			success : function(data) {
				var uniArray = _.uniq(_.map(_.flatten(data.d.results), function(e) {
					return e.A2ZMETUIS;
      			}));
				if(uniArray.length>1){
					that.warningMessage("Please select more filter values");
				}else{
					sap.ui.getCore().getModel("UISDetailModel").oData.uisCode = data.d.results[0].A2ZPROUIS;
					sap.ui.getCore().getModel("UISDetailModel").oData.methodName = data.d.results[0].A2ZMETUIS;
					var processSelected = data.d.results[0].A2ZMETUIS;
					jQuery.sap.storage.put("NavBackFlag",true);
					sap.ui.core.UIComponent.getRouterFor(that).navTo("first", {
						process: processSelected
					});
					
				}
				
			},
			error: function (request, error) {
				that.errorMessage();
		    }
			});	
		}
	},
	
	 searchButtonPressed : function(oEvt){
		    this.Value="";

		    if (! this._searchoPopover) {
		          this._searchoPopover = sap.ui.xmlfragment("PF.fragments.search", this);
		     }
		    this._searchoPopover.open();
		    var id =oEvt.getSource().sId[oEvt.getSource().sId.length -1];
		    this.id=id;
		    var header,cssClass,color,binding,bindingCode;
		    
		    var inputLandscape=this.getView().byId("idInput0").getValue();
		    var inputFunction=this.getView().byId("idInput1").getValue();
		    var inputBusinessProcess=this.getView().byId("idInput2").getValue();
		    var inputSubProcess=this.getView().byId("idInput3").getValue();
		    var inputCriticalTask=this.getView().byId("idInput4").getValue();
		    var inputRca=this.getView().byId("idInput5").getValue();
		    
		    var masterData=sap.ui.getCore().getModel("MasterModel").getData().d.results;
		    var filterData=[];
		    var nonEmptyArray=[];
		   
		    
		    if(masterData.length>0){
		           if(inputLandscape==""&&inputFunction==""&&inputBusinessProcess==""&&inputSubProcess==""&&inputCriticalTask==""&&inputRca=="")
		              filterData=masterData;
		       else{
		               var condition="";
		               
		               var condition1="";
		               var condition2="";
		               var condition3="";
		               var condition4="";
		               var condition5="";
		               var condition6="";
		               
		              if(inputLandscape!="")
		                     condition1="masterData[i].A2ZLAN_SCP==inputLandscape";
		              if(inputFunction!="")
		                     condition2="masterData[i].A2ZFUN_UIS==inputFunction";
		              if(inputBusinessProcess!="")
		                     condition3="masterData[i].A2ZBUSPROCE==inputBusinessProcess";
		              if(inputSubProcess!="")
		                     condition4="masterData[i].A2ZBUSCENA==inputSubProcess";
		              if(inputCriticalTask!="")
		                     condition5="masterData[i].A2ZCRITASK==inputCriticalTask";
		              if(inputRca!="")
		                     condition6="masterData[i].A2ZROOTDES==inputRca";
		              
		              if(condition1!="")
		                     condition=condition1;
		              if(condition2!=""){
		                     if(condition!="")
		                     condition=condition+"&&"+condition2;
		                     else
		                    	condition=condition2;      
		              }
		              if(condition3!=""){
		                     if(condition!="")
		                     condition=condition+"&&"+condition3;
		                     else
		                           condition=condition3;      
		              }
		              if(condition4!=""){
		                     if(condition!="")
		                     condition=condition+"&&"+condition4;
		                     else
		                           condition=condition4;      
		              }
		              if(condition5!=""){
		                     if(condition!="")
		                     condition=condition+"&&"+condition5;
		                     else
		                           condition=condition5;      
		              }
		              if(condition6!=""){
		                     if(condition!="")
		                     condition=condition+"&&"+condition6;
		                     else
		                           condition=condition6;      
		              }
		              
		              for(var i=0;i<masterData.length;i++){
		                     if(eval(condition)){
		                           filterData.push(masterData[i]);
		                     }
		              }
		       }
		    }
		    switch(id) {
		    case "0":
		          header="SEARCH LANDSCAPE";
		          cssClass="toolFunctionBG";
		          color="#c1dfd2";
		          binding="A2ZLAN_SCP";
		          bindingCode="A2ZLAN_SCP";
		          var inputFieldLandscape = this.getView().byId("idInput0");
		          inputFieldLandscape.removeStyleClass("showError");
		         
		          break;
		      case "1":
		          header="SEARCH FUNCTION";
		          cssClass="toolFunctionBG";
		          color="#BEFEE3";
		          binding="A2ZFUN_UIS";
		          bindingCode="A2ZFUN_UIS";
		          break;
		      case "2":
		        header="SEARCH BUISNESS PROCESS"
		        cssClass="toolBuisnessBG";
		         color="#CFD2FE";
		         binding="A2ZBUSPROCE";
		         bindingCode="A2ZBUSCODE";
		          break;
		      case "3":
		        header="SEARCH SUB PROCESS"
		        cssClass="toolSubBG";
		         color="#A6D7FF";
		         binding="A2ZBUSCENA";
		         bindingCode="A2ZSUBPROC";
		         var inputField = this.getView().byId("idInput3");
		        inputField.removeStyleClass("showError");
		          break;
		      case "4":
		        header="SEARCH CRITICAL TASK"
		        cssClass="toolCriticalBG";
		         color="#FEAC8D";
		         binding="A2ZCRITASK";
		         bindingCode="A2ZCRTCODE";
		          break;
		      case "5":
		        header="SEARCH RCA"
		           cssClass="toolRCABG";
		         color="#FEF2B6";
		         binding="A2ZROOTDES";
		         bindingCode="A2ZRC_COD";
		          break;
		      default:
		          header="SEARCH"
		  }
		    this._loadFunctions(binding,bindingCode,filterData);
		    sap.ui.getCore().byId("idHeaderText").setText(header);
		    $("#idToolSearch").css({'background-color':color});
		    $("#idsearchPOP").css({'border':'10px solid'+color});
		  },

		  _loadFunctions :function(binding,bindingCode,data)
		  {

		    //sap.ui.getCore().byId("idSearchList").set(true);
		    var that=this;
		 
		        if(data.length == 0){
		          sap.ui.getCore().byId("idSearchList").setNoDataText("NO DATA");
		        }else{
		        var oModel=new sap.ui.model.json.JSONModel();

		        var uniArray = _.uniq(_.map(_.flatten(data), function(e) {
		          if(binding == "A2ZFUN_UIS"){
		                return e.A2ZFUN_UIS;
		                }else if(binding == "A2ZBUSPROCE"){
		                    return e.A2ZBUSPROCE;
		                }else if(binding == "A2ZBUSCENA"){
		                    return e.A2ZBUSCENA;
		                }else if(binding == "A2ZCRITASK"){
		                    return e.A2ZCRITASK;
		                }else if(binding == "A2ZROOTDES"){
		                    return e.A2ZROOTDES;
		                }else if(binding == "A2ZLAN_SCP"){
		                    return e.A2ZLAN_SCP;
		                }
		            }));
		        var dataKey=[];
		        for(var i=0;i<uniArray.length;i++){
		          for(var j=0;j<data.length;j++){
		            if(uniArray[i]==data[j][binding]){
		              dataKey.push({"value":uniArray[i],"valueCode":data[j][bindingCode]});
		              break;
		            }
		          }
		        }
		        oModel.setData(dataKey);
		        oModel.setSizeLimit(dataKey.length);
		        that.getView().setModel(oModel,"search");
		        that._searchoPopover.setModel(that.getView().getModel("search"),"search");
		        var x=sap.ui.getCore().byId("idSearchList");

		        sap.ui.getCore().byId("idSearchList").setBusy(false);
		        var dispItem = new sap.m.DisplayListItem({
		            label : "{search>value}",
		            value : "{search>valueCode}",
		            type : sap.m.ListType.Active,
		          press : [ function(oEvent) {
		            if(binding == "A2ZFUN_UIS"){
		              that.code1=oEvent.getSource().getValue();
		                    }else if(binding == "A2ZBUSPROCE"){
		                      function pad (str, max) {
		                        str = str.toString();
		                        return str.length < max ? pad("0" + str, max) : str;
		                      }
		                      that.code2=pad(oEvent.getSource().getValue(),8)
		                    }else if(binding == "A2ZBUSCENA"){
		                      that.code3=oEvent.getSource().getValue();
		                    }else if(binding == "A2ZCRITASK"){
		                      that.code4=oEvent.getSource().getValue();
		                    }else if(binding == "A2ZROOTDES"){
		                      function pad (str, max) {
		                          str = str.toString();
		                          return str.length < max ? pad("0" + str, max) : str;
		                        }
		                        that.code5=pad(oEvent.getSource().getValue(),8)
		                    }else if(binding =="A2ZLAN_SCP"){
		                      that.code0=oEvent.getSource().getValue();
		                    }
		            var control = oEvent.getSource();
		            that.Value = oEvent.getSource().getLabel();
		            that._setValue();
		            that._searchoPopover.close();
		          }, this ]
		          })

		          x.bindAggregation("items","search>/",dispItem)
		        }
		  },
	
	/*searchButtonPressed : function(oEvt){
		this.Value="";
		
		if (! this._searchoPopover) {
	        this._searchoPopover = sap.ui.xmlfragment("PF.fragments.search", this);
	   }
		this._searchoPopover.open();
		var id =oEvt.getSource().sId[oEvt.getSource().sId.length -1];
		this.id=id;
		var header,cssClass,color,binding,bindingCode; 
		switch(id) {
		case "0":
	        header="SEARCH LANDSCAPE";
	        cssClass="toolFunctionBG";
	        color="#c1dfd2";
	        binding="A2ZLAN_SCP";
	        bindingCode="A2ZLAN_SCP";
	        var inputField = this.getView().byId("idInput0");
			inputField.removeStyleClass("showError");
	        break;
	    case "1":
	        header="SEARCH FUNCTION";
	        cssClass="toolFunctionBG";
	        color="#BEFEE3";
	        binding="A2ZFUN_UIS";
	        bindingCode="A2ZFUN_UIS";
	        break;
	    case "2":
	    	header="SEARCH BUISNESS PROCESS"
	    	cssClass="toolBuisnessBG";
	    	 color="#CFD2FE";
	    	 binding="A2ZBUSPROCE";
	    	 bindingCode="A2ZBUSCODE";
	        break;
	    case "3":
	    	header="SEARCH SUB PROCESS"
	    	cssClass="toolSubBG";
	    	 color="#A6D7FF";
	    	 binding="A2ZBUSCENA";
	    	 bindingCode="A2ZSUBPROC";
	    	 var inputField = this.getView().byId("idInput3");
				inputField.removeStyleClass("showError");
	        break;
	    case "4":
	    	header="SEARCH CRITICAL TASK"
	    	cssClass="toolCriticalBG";
	    	 color="#FEAC8D";
	    	 binding="A2ZCRITASK";
	    	 bindingCode="A2ZCRTCODE";
	        break;
	    case "5":
	    	header="SEARCH RCA"
	    		 cssClass="toolRCABG";
	    	 color="#FEF2B6";
	    	 binding="A2ZROOTDES";
	    	 bindingCode="A2ZRC_COD";
	        break;
	    default:
	        header="SEARCH"
	}
		this._loadFunctions(binding,bindingCode);
		sap.ui.getCore().byId("idHeaderText").setText(header);
		$("#idToolSearch").css({'background-color':color});
		$("#idsearchPOP").css({'border':'10px solid'+color});
	},
	
	_loadFunctions :function(binding,bindingCode)
	{
		
		sap.ui.getCore().byId("idSearchList").setBusy(true);
		var that=this;
		var inputArray=[];
		for(var i=0;i<6;i++){
			var data =this.getView().byId("idInput"+i).getValue();
			if(data == ""){
				inputArray.push("");
			}else if (data !=""){
				var code = "code"+i;
				inputArray.push(this[code]);
			}
		}
		
				var url="http://ocsq051a.eu.unilever.com:8000/sap/opu/odata/sap/ZUIS_MASTER_NEW_SRV/ZDSO_ZQ009_UIS_MASTER(AZLAN_SCP='"+
				inputArray[0]+"',AZFUN_UIS='"+inputArray[1]+"',AZPROUIS='',AZUISCOD='',AZSUBPROC='"+inputArray[3]+"',AZBUSCODE='"+inputArray[2]+"',AZRC_COD='"+inputArray[5]+"',AZCRTCODE='"+inputArray[4]+"')/Results";
		$.ajax({
			type : "GET",
			contentType : 'application/json',
			dataType : 'json',
			crossDomain : true,
			url : url,
			success : function(data) {
				if(data.d.results.length == 0){
					sap.ui.getCore().byId("idSearchList").setNoDataText("NO DATA");
				}else{
				var oModel=new sap.ui.model.json.JSONModel();
				
				var uniArray = _.uniq(_.map(_.flatten(data.d.results), function(e) {
					if(binding == "A2ZFUN_UIS"){
      			    return e.A2ZFUN_UIS;
      			    }else if(binding == "A2ZBUSPROCE"){
          			    return e.A2ZBUSPROCE;
      			    }else if(binding == "A2ZBUSCENA"){
          			    return e.A2ZBUSCENA;
      			    }else if(binding == "A2ZCRITASK"){
          			    return e.A2ZCRITASK;
      			    }else if(binding == "A2ZROOTDES"){
          			    return e.A2ZROOTDES;
      			    }else if(binding == "A2ZLAN_SCP"){
          			    return e.A2ZLAN_SCP;
      			    }
      			}));
				var dataKey=[];
				for(var i=0;i<uniArray.length;i++){
					for(var j=0;j<data.d.results.length;j++){
						if(uniArray[i]==data.d.results[j][binding]){
							dataKey.push({"value":uniArray[i],"valueCode":data.d.results[j][bindingCode]});
							break;
						}
					}				
				}
				oModel.setData(dataKey);
				oModel.setSizeLimit(data.length);
				that.getView().setModel(oModel,"search");
				that._searchoPopover.setModel(that.getView().getModel("search"),"search");
				var x=sap.ui.getCore().byId("idSearchList");
			
				sap.ui.getCore().byId("idSearchList").setBusy(false);
				var dispItem = new sap.m.DisplayListItem({	
	    			label : "{search>value}",
	    			value : "{search>valueCode}",
	    			type : sap.m.ListType.Active,
					press : [ function(oEvent) {
						if(binding == "A2ZFUN_UIS"){
							that.code1=oEvent.getSource().getValue();
		      			    }else if(binding == "A2ZBUSPROCE"){
		      			    	function pad (str, max) {
		      			    	  str = str.toString();
		      			    	  return str.length < max ? pad("0" + str, max) : str;
		      			    	}
		      			    	that.code2=pad(oEvent.getSource().getValue(),8)
		      			    }else if(binding == "A2ZBUSCENA"){
		      			    	that.code3=oEvent.getSource().getValue();
		      			    }else if(binding == "A2ZCRITASK"){
		      			    	that.code4=oEvent.getSource().getValue();
		      			    }else if(binding == "A2ZROOTDES"){
		      			    	function pad (str, max) {
			      			    	  str = str.toString();
			      			    	  return str.length < max ? pad("0" + str, max) : str;
			      			    	}
			      			    	that.code5=pad(oEvent.getSource().getValue(),8)
		      			    }else if(binding =="A2ZLAN_SCP"){
		      			    	that.code0=oEvent.getSource().getValue();
		      			    }
						var control = oEvent.getSource();
						that.Value = oEvent.getSource().getLabel();
						that._setValue();
						that._searchoPopover.close();
					}, this ]
	    		})
				
	    		x.bindAggregation("items","search>/",dispItem)
				}	
			}
			});
	},*/
	_setValue : function(){
		var id=this.id;
		var value=this.Value;
		this.getView().byId("idInput"+id).setValue(value);
	}
	
});
}); 