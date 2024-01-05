sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/ui/core/routing/History","PF/controllers/BaseController"],
    function(Controller, History,base) {

      return  {
        
    	  uisCodeCheck : function(uis){
          	sap.ui.getCore().getModel("UISDetailModel").getData("oData").uisCodeInfo = uis;
            $.ajax({
              type : "GET",
              contentType : 'application/json',
              dataType : 'json',
              async: false,
              crossDomain : true,
              url : "http://ocsd051a.eu.unilever.com:8000/sap/opu/odata/sap/ZUIS_MASTER_ABAP_SRV/MasterSet?$filter=Uiscode eq '"+uis+"'",
              success : function(data) {
              	
              	data.d.results.sort(function (a, b) {
              		  return a.Keys - b.Keys;
              		});
                var modelData=[];
                if(sap.ui.getCore().getModel("UISDetailModel").oData.changeTaskColor == true){
                  for(var i=0;i<data.d.results.length;i++){
                    var searchedId = sap.ui.getCore().getModel("UISDetailModel").oData.SQLUISCodes;
                    var idArr=[];
                    var idArray = data.d.results[i].IdFields.split(",");
                    if(idArray.length == 1){
                      idArr.push(data.d.results[i].IdFields.split(","));
                    }else{
                      for(var f=0;f<idArray.length;f++){
                        idArr.push(idArray[f]);
                      }
                    }
                    var color1=data.d.results[i].Color;
                    for(var k=0;k<searchedId.length;k++){
                    for(var j=0;j<idArray.length;j++){
                      if(idArray[j] == searchedId[k]){
                       color1="red"
                    }
                    }
                    }
                    modelData.push({"id": idArr,
                        "color":color1,
                        "text":data.d.results[i].Text})
                    }
                  sap.ui.getCore().getModel("bindingModel").setData(modelData);
                }else{
                  for(var i=0;i<data.d.results.length;i++){
                    var idArr = [];
                    var idArray = data.d.results[i].IdFields.split(",");
                    if(idArray.length == 1){
                      idArr.push(data.d.results[i].IdFields.split(","));
                    }else{
                      for(var f=0;f<idArray.length;f++){
                        idArr.push(idArray[f]);
                      }
                    }
                    modelData.push({"id": idArr,
                        "color":data.d.results[i].Color,
                        "text":data.d.results[i].Text})
                    }
                  sap.ui.getCore().getModel("bindingModel").setData(modelData);
                }
                console.log(sap.ui.getCore().getModel("bindingModel"));

              },error: function (request, error) {
  				that.errorMessage();
  		    }
              });
          	
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
          
         /*APO start*/
          CAPO20P3_SalesHistoryProcessing:  function(x){
        	   var model = this.uisCodeCheck("CAPO20P3");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="P2F DP Sales History Processing C";
        	   setTimeout( function(){
        	   x.editPopUp.close();
        	   var that=x;
        	   var width=1900;
        	   var height=1500;
        	   var dom;
        	   var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	   var canvas = d3.select(ScrollID).append("svg")
        	   .attr("width",width)
        	   .attr("id","idCanvas")
        	   .attr("height",height).append("g")
        	      //top line
        		that.rect(canvas,data,10,10,1100,40,0)//APO
        		that.text(canvas,data,555,35,1100,40,0)//APO
        		//second line
        		that.rect(canvas,data,10,70,1100,40,1)//Sales History Processing
        		that.text(canvas,data,500,90,1100,40,1)//Sales History Processing
        		//tasks
        		that.rect(canvas,data,10,130,100,75,2)//Sales History Upload to Brazil Infocube
        		that.text(canvas,data,15,145,90,75,2)//Sales History Upload to Brazil Infocube
        		that.rect(canvas,data,130,130,100,75,3)//Sales History Upload to NA, MX & CA infocubes
        		that.text(canvas,data,135,145,90,75,3)//Sales History Upload to NA, MX & CA infocubes
        		that.rect(canvas,data,250,130,100,75,4)//Sales History Upload to MA & SC infocubes 
        		that.text(canvas,data,255,145,100,75,4)//Sales History Upload to MA & SC infocubes 
        		that.rect(canvas,data,390,130,100,75,5)//CVC Generation from History cubes
        		that.text(canvas,data,395,145,100,75,5)//CVC Generation from History cubes
        		that.line(canvas,data,490,165,510,165)//from CVC Generation from History cubes to Planning Prep
        		that.leftArrow(canvas,data,510,165)
        		that.rect(canvas,data,510,130,100,75,6)//Planning Preparation, Delete history data
        		that.text(canvas,data,515,145,90,75,6)//Planning Preparation, Delete history data
        		that.rect(canvas,data,630,130,100,75,7)//Load data from cube to Planning Area
        		that.text(canvas,data,635,145,100,75,7)//Load data from cube to Planning Area
        		that.rect(canvas,data,770,130,100,75,8)//Manual Cleaning on RROS and Baseline Sales KF
        		that.text(canvas,data,775,145,95,75,8)//Manual Cleaning on RROS and Baseline Sales KF
        		that.rect(canvas,data,890,130,100,75,9)//Smoothing and Autocleaning on Primary sales and Manual cleaned KF
        		that.text(canvas,data,895,145,90,75,9)//Smoothing and Autocleaning on Primary sales and Manual cleaned KF
        		that.rect(canvas,data,1010,130,100,75,10)//Batch Input functionality
        		that.text(canvas,data,1015,145,100,75,10)//Batch Input functionality
        		return canvas;
        	   }  , 1000 );
        	   },
        			
        	CAPO20P4_StatForecasting:  function(x){
        	   var model = this.uisCodeCheck("CAPO20P4");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="P2F DP Stat Forecasting (Baseline Forecasting)";
        	   setTimeout( function(){
        	   x.editPopUp.close();
        	   var that=x;
        	   var width=1900;
        	   var height=1500;
        	   var dom;
        	   var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	   var canvas = d3.select(ScrollID).append("svg")
        	   .attr("width",width)
        	   .attr("id","idCanvas")
        	   .attr("height",height).append("g")
        	  //top line
        		that.rect(canvas,data,10,10,920,40,0)//APO
        		that.text(canvas,data,480,35,920,40,0)//APO
        		//second line
        		that.rect(canvas,data,10,70,250,40,1)//Statistical Forecast Generation (Standard)
        		that.text(canvas,data,20,90,250,40,1)//Statistical Forecast Generation (Standard)
        		that.rect(canvas,data,340,70,250,40,3)//Custom Stat Forecast Load via Flat File
        		that.text(canvas,data,355,90,250,40,3)//Custom Stat Forecast Load via Flat File
        		that.rect(canvas,data,630,70,250,40,5)//Interactive Forecast Run
        		that.text(canvas,data,690,90,250,40,5)//Interactive Forecast Run
        		//tasks
        		that.rect(canvas,data,60,130,150,60,2)//Statistical Forecast Generation
        		that.text(canvas,data,65,145,150,60,2)//Statistical Forecast Generation
        		that.rect(canvas,data,390,130,150,60,4)//Statistical RROS & Statistical Baseline upload for 104 weeks
        		that.text(canvas,data,395,145,140,60,4)//Statistical RROS & Statistical Baseline upload for 104 weeks
        		that.rect(canvas,data,680,130,150,60,6)//Interactive Forecast run by users in PB
        		that.text(canvas,data,685,145,140,60,6)//Interactive Forecast run by users in PB
        		that.dottedLine(canvas,data,300,70,300,200)
        			return canvas;
        	   }  , 1000 );
        	   },
        	CAPO20P5_DP_PromotionalPlanning:  function(x){
        	   var model = this.uisCodeCheck("CAPO20P5");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="P2F DP Promotional Planning";
        	   setTimeout( function(){
        	   x.editPopUp.close();
        	   var that=x;
        	   var width=1900;
        	   var height=1500;
        	   var dom;
        	   var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	   var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")
        	   //top line
        	that.rect(canvas,data,150,10,850,40,0)//APO
        	that.text(canvas,data,550,35,850,40,0)//APO
        	//second line
        	that.rect(canvas,data,150,70,250,40,1)//Promo File Upload
        	that.text(canvas,data,220,90,250,40,1)//Promo File Upload
        	that.rect(canvas,data,440,70,250,40,3)//Outsourced Forecast Upload 
        	that.text(canvas,data,490,90,250,40,3)//Outsourced Forecast Upload 
        	that.rect(canvas,data,730,70,250,40,5)//Load Data into DP PA
        	that.text(canvas,data,800,90,250,40,5)//Load Data into DP PA
        	//tasks
        	that.rect(canvas,data,200,130,150,60,2)//Load Promotion Data
        	that.text(canvas,data,205,145,150,60,2)//Load Promotion Data
        	that.rect(canvas,data,490,130,150,60,4)//Load Outsourced forecast from AMPS into APO
        	that.text(canvas,data,495,145,140,60,4)//Load Outsourced forecast from AMPS into APO
        	that.rect(canvas,data,790,130,150,60,6)//Load Promotion and Outsourced forecast Data into PA
        	that.text(canvas,data,795,145,140,60,6)//Load Promotion and Outsourced forecast Data into PA
        		return canvas;
        		   }  , 1000 );
        		   },

        	CAPO20Q4_TotalForecastCalculation:  function(x){
        	   var model = this.uisCodeCheck("CAPO20Q4");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="P2F DP Total Forecast Calculation C";
        	   setTimeout( function(){
        	   x.editPopUp.close();
        	   var that=x;
        		 var width=1900;
        	  var height=1500;
        	  var dom;
        	  var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")
        	    //top line
        	that.rect(canvas,data,10,10,1240,40,0)//APO
        	that.text(canvas,data,650,35,1240,40,0)//APO
        		//second line
        	that.rect(canvas,data,10,70,580,40,1)//Calculate Selected Forecast
        	that.text(canvas,data,220,90,580,40,1)//Calculate Selected Forecast
        	that.rect(canvas,data,600,70,120,40,7)//Calculate Total Demand Driver
        	that.text(canvas,data,610,85,120,40,7)//Calculate Total Demand Driver
        	that.rect(canvas,data,730,70,130,40,9)//Total Header Forecast
        	that.text(canvas,data,735,90,130,40,9)//Total Header Forecast
        	that.rect(canvas,data,870,70,120,40,11)//Special Pack placeholder
        	that.text(canvas,data,880,85,120,40,11)//Special Pack placeholder
        	that.rect(canvas,data,1000,70,120,40,13)//Total Positive Forecast
        	that.text(canvas,data,1005,85,120,40,13)//Total Positive Forecast
        	that.rect(canvas,data,1130,70,120,40,15)//DP to SNP release
        	that.text(canvas,data,1140,90,120,40,15)//DP to SNP release
        	//tasks
        	that.rect(canvas,data,10,130,100,70,2)//Statistical RROS
        	that.textBlack(canvas,data,15,145,90,70,2)//Statistical RROS
        	that.line(canvas,data,110,165,130,165)//from statistical RROS to agreed RROS forecast
        	that.leftArrow(canvas,data,130,165)			
        	that.rect(canvas,data,130,130,100,70,3)//Agreed RROS Forecast
        	that.text(canvas,data,135,145,100,70,3)//Agreed RROS Forecast				
        	that.rect(canvas,data,250,130,100,70,4)//Statistical Baseline
        	that.textBlack(canvas,data,255,145,100,70,4)//Statistical Baseline
        	that.line(canvas,data,350,165,370,165)//from Statistical Baseline to Agreed Baseline Forecast
        	that.leftArrow(canvas,data,370,165)			
        	that.rect(canvas,data,370,130,100,70,5)//Agreed Baseline Forecast
        	that.text(canvas,data,375,145,100,70,5)//Agreed Baseline Forecast
        	that.line(canvas,data,470,165,490,165)//from Agreed Baseline Forecast to Derive Selected Forecast
        	that.leftArrow(canvas,data,490,165)
        	that.rect(canvas,data,490,130,100,70,6)//Derive Selected Forecast
        	that.text(canvas,data,495,145,90,70,6)//Derive Selected Forecast
        	that.rect(canvas,data,610,130,100,70,8)//Total Demand Drivers
        	that.text(canvas,data,615,145,100,70,8)//Total Demand Drivers
        	that.line(canvas,data,710,165,740,165)//from Total Demand Drivers to Total Header Forecast
        	that.leftArrow(canvas,data,740,165)
        	that.rect(canvas,data,740,130,100,70,10)//Total Header Forecast
        	that.text(canvas,data,745,145,100,70,10)//Total Header Forecast
        	that.rect(canvas,data,880,130,100,70,12)//Special Pack Placeholder KF
        	that.text(canvas,data,885,145,100,70,12)//Special Pack Placeholder KF
        	that.line(canvas,data,980,165,1010,165)//from Special Pack Placeholder KF to Total positive forecast
        	that.leftArrow(canvas,data,1010,165)
        	that.rect(canvas,data,1010,130,100,70,14)//Total positive forecast
        	that.text(canvas,data,1015,145,100,70,14)//Total positive forecast			
        	that.rect(canvas,data,1140,130,100,70,16)//Release Total Forecast/Special Pack placeholder to SNP
        	that.text(canvas,data,1145,145,100,70,16)//Release Total Forecast/Special Pack placeholder to SNP  
        	return canvas;
        			   }  , 1000 );
        			   },

        	   CAPO20Q1_Realignment:  function(x){
        		   var model = this.uisCodeCheck("CAPO20Q1");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="P2F DP Realignment C";
        	   setTimeout( function(){
        	     x.editPopUp.close();
        		 var that=x;
        		 var width=1900;
        		 var height=1500;
        		 var dom;
        		 var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        		 var canvas = d3.select(ScrollID).append("svg")
        		  .attr("width",width)
        		  .attr("id","idCanvas")
        		  .attr("height",height).append("g")
        	 	that.rect(canvas,data,100,10,1460,50,0) // APO
        	    that.text(canvas,data,800,40,1000,40,0)
        		that.rect(canvas,data,100,80,220,70,1) // Validation Process
        		that.text(canvas,data,150,110,200,50,1)
        		that.rect(canvas,data,110,170,200,120,2)// Validate Realignment template, check hiearchy 
        		that.text(canvas,data,130,200,180,100,2)
        		that.line(canvas,data,310,230,400,230)	// output to "Load the realignment data to....."
        		that.leftArrow(canvas,data,400,230)
        		that.rect(canvas,data,380,80,550,70,3)	// Planning Area Realignment
        		that.text(canvas,data,530,110,500,50,3)
        		that.rect(canvas,data,400,170,200,120,4)	// Load the realignment data to realignment Table 
        		that.text(canvas,data,420,200,180,100,4)
        		that.line(canvas,data,600,230,700,230)	// output to "Custom Z-table Z0SPM_REALIGN_TB update"
        		that.leftArrow(canvas,data,700,230)
        		that.rect(canvas,data,700,170,200,120,5)	// Custom Z-table Z0SPM_REALIGN_TB update 
        		that.text(canvas,data,720,200,180,100,5)
        		that.line(canvas,data,900,230,1100,230)	// output to "Move the data from the......."
        		that.leftArrow(canvas,data,1100,230)
        		that.rect(canvas,data,1010,80,550,70,6)	// Cube Realignment
        		that.text(canvas,data,1200,110,500,50,6)
        		that.rect(canvas,data,1100,170,200,120,7)	// Move the data from the history cube to the 
        		that.text(canvas,data,1120,200,180,100,7)
        		that.line(canvas,data,1300,230,1350,230)	// output to "Move the realiged data from......."
        		that.leftArrow(canvas,data,1350,230)
        		that.rect(canvas,data,1350,170,200,120,8)	// Move the realiged data from the Restore cube to 	
        		that.text(canvas,data,1370,200,180,100,8)
        	  	return canvas;
        			   }  , 1000 );
        			   },
        	   CAPO20R1_DP_Downstream:  function(x){
        		   var model = this.uisCodeCheck("CAPO20R1");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="P2F DP Downstream_C";
        	   setTimeout( function(){
        	     x.editPopUp.close();
        	     var that=x;
        	     var width=1900;
        	      var height=1500;
        	      var dom;
        	      var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	      var canvas = d3.select(ScrollID).append("svg")
        	      .attr("width",width)
        	      .attr("id","idCanvas")
        	      .attr("height",height).append("g")
        		that.rect(canvas,data,200,10,1320,50,0) // APO
        		that.text(canvas,data,800,40,1000,40,0)
        		that.rect(canvas,data,200,80,250,70,1)	// To Connect & SCDG
        		that.text(canvas,data,260,110,230,50,1)
        		that.rect(canvas,data,200,170,250,120,2)	// Load data from APO to Connect & SCDG
        		that.text(canvas,data,220,210,230,100,2)
        		that.rect(canvas,data,580,80,250,70,3)	// To TERRA
        		that.text(canvas,data,660,110,230,50,3)
        		that.rect(canvas,data,580,170,250,120,4)	// Load data to TERRA DS
        		that.text(canvas,data,600,210,230,100,4)
        		that.rect(canvas,data,900,80,250,70,5)	// To FVIH 
        		that.text(canvas,data,980,110,230,50,5)
        		that.rect(canvas,data,900,170,250,120,6)	// Load data from APO to FVIH for AMPS
        		that.text(canvas,data,920,210,230,100,6)
        		that.rect(canvas,data,1270,80,250,70,7)	// To BPC 
        		that.text(canvas,data,1360,110,230,50,7)
        		that.rect(canvas,data,1270,170,250,120,8)	// Load data from APO to BPC via MQ
        		that.text(canvas,data,1290,210,230,100,8)
        	return canvas;
        			   }  , 1000 );
        			   },

        	   CAPO21Q7_TransactionData:  function(x){
        		   var model = this.uisCodeCheck("CAPO21Q7");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="P2F SP SNP Transaction Data";
        	   setTimeout( function(){
        	 x.editPopUp.close();
        	 var that=x;
        	 var width=1900;
        	  var height=1500;
        	  var dom;
        	  var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")		   
        		that.pentagon(canvas,data,100,10,350,360,30,50,0)// ECC
        		that.text(canvas,data,200,30,300,40,0)
        		that.rect(canvas,data,100,70,250,70,1)// Transaction Data Load
        		that.text(canvas,data,150,100,230,50,1)
        		that.rect(canvas,data,100,160,250,120,2)// Transaction Data sent from ECC to APO
        		that.text(canvas,data,120,200,230,100,2)
        		that.line(canvas,data,350,220,450,220)// output to "Transaction data update in APO "
        		that.leftArrow(canvas,data,450,220)
        		that.freeText(canvas,data,360,210,100,40,12,"12px")
        		that.pentagon(canvas,data,450,10,700,710,30,50,3)// APO
        		that.text(canvas,data,550,30,300,40,3)
        		that.rect(canvas,data,450,70,250,70,4)// Transaction Data Update
        		that.text(canvas,data,500,100,230,50,4)
        		that.rect(canvas,data,450,160,250,120,5)// Transaction data update in APO 
        		that.text(canvas,data,470,200,230,100,5)
        		that.dottedLine(canvas,data,750,10,750,350)
        		that.pentagon(canvas,data,800,10,1050,1060,30,50,6)	// APO
        		that.text(canvas,data,900,30,200,40,6)
        		that.rect(canvas,data,800,70,250,70,7)// Transaction Data Load
        		that.text(canvas,data,850,100,230,50,7)
        		that.rect(canvas,data,800,160,250,120,8)// Transaction data sent from APO
        		that.text(canvas,data,820,200,230,100,8)
        		that.line(canvas,data,1050,220,1200,220)// output  to "Transaction Data Update in ECC"
        		that.leftArrow(canvas,data,1200,220)
        		that.freeText(canvas,data,1070,210,100,40,12,"12px")
        		that.pentagon(canvas,data,1200,10,1450,1460,30,50,9)// ECC
        		that.text(canvas,data,1300,30,200,40,9)
        		that.rect(canvas,data,1200,70,250,70,10)// Transaction Data Update
        		that.text(canvas,data,1250,100,230,50,10)
        		that.rect(canvas,data,1200,160,250,120,11)// Transaction Data Update in ECC
        		that.text(canvas,data,1220,200,230,100,11)
        			return canvas;
        	   }  , 1000 );
        	   },
        				
        	   CAPO21R2_CoPacking:  function(x){
        		   var model = this.uisCodeCheck("CAPO21R2");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="P2F SP SU Copacking";
        	   setTimeout( function(){
        	     x.editPopUp.close();
        	     var that=x;
        	     var width=1900;
        	      var height=1500;
        	      var dom;
        	      var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	      var canvas = d3.select(ScrollID).append("svg")
        	      .attr("width",width)
        	      .attr("id","idCanvas")
        	      .attr("height",height).append("g")   
        		that.pentagon(canvas,data,500,10,1100,1110,30,50,0)// APO
        		that.text(canvas,data,750,30,500,40,0)
        		that.rect(canvas,data,650,70,250,70,1)// Copacking
        		that.text(canvas,data,750,100,230,50,1)
        		that.rect(canvas,data,625,160,300,100,2)// Copacking Part of Optimizer Run
        		that.text(canvas,data,690,200,280,80,2)
        	   	return canvas;
        		   }  , 1000 );
        		   },
        	 CAPO21Q8_SU_ProductionPlanning:  function(x){
        	   var model = this.uisCodeCheck("CAPO21Q8");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="P2F SP SU In-House Production Planning ";
        	   setTimeout( function(){
        	     x.editPopUp.close();
        	     var that=x;
        	     var width=1900;
        	  var height=1500;
        	  var dom;
        	  var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")	      
        		that.pentagon(canvas,data,500,10,1100,1110,30,50,0) // APO
        		that.text(canvas,data,750,30,500,40,0)	
        		that.rect(canvas,data,650,70,250,70,1)// SU In-House Production Planning
        		that.text(canvas,data,680,100,230,50,1)	
        		that.rect(canvas,data,625,160,300,100,2)// In-House Production Planning at SU 
        		that.text(canvas,data,690,200,280,80,2)
        		return canvas;
        	   }  , 1000 );
        	   },
        	CAPO20P7_DependentDemand:  function(x){
        	   var model = this.uisCodeCheck("CAPO20P7");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="P2F DP Dependent Demand C";
        	   setTimeout( function(){
        	     x.editPopUp.close();
        	     var that=x;
        	     var width=1900;
        	      var height=1500;
        	      var dom;
        	      var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")
        	//top line
        	that.rect(canvas,data,10,10,670,30,0)  //APO
        	that.text(canvas,data,340,30,130,30,0)
        	//second line
        	that.rect(canvas,data,10,50,120,50,1) //BOM Upload
        	that.text(canvas,data,20,70,100,40,1)
        	that.rect(canvas,data,150,50,120,50,3) //History & Fcst Upload
        	that.text(canvas,data,160,70,100,40,3)
        	that.rect(canvas,data,290,50,120,50,5) //BOM Upload Planning Area preparation
        	that.text(canvas,data,300,70,110,40,5)
        	that.rect(canvas,data,420,50,120,50,7) //Total history Component
        	that.text(canvas,data,430,70,100,40,7)
        	that.rect(canvas,data,560,50,120,50,9) //Load error data in cube
        	that.text(canvas,data,570,70,100,40,9)
        	//tasks
        	 that.rect(canvas,data,10,110,120,80,2)//Load BOM Data
        	 that.text(canvas,data,20,130,100,60,2)
        	 that.rect(canvas,data,150,110,120,80,4)//DP Special pack load in PA
        	 that.text(canvas,data,160,130,100,60,4)
        	 that.rect(canvas,data,290,110,120,80,6)//DP planning area initialization 
        	 that.text(canvas,data,300,130,100,60,6)
        	 that.rect(canvas,data,420,110,120,80,8)//Total Component
        	 that.text(canvas,data,430,130,100,60,8)
        	 that.rect(canvas,data,560,110,120,80,10)//Load BOM error
        	 that.text(canvas,data,570,130,100,60,10)
        	return canvas;
        	   }  , 1000 );
        	   },
        	CAPO20P9_JobScheduling:  function(x){
        	   var model = this.uisCodeCheck("CAPO20P9");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="P2F DP Job Scheduling C";
        	   setTimeout( function(){
        	     x.editPopUp.close();
        	     var that=x;
        	     var width=1900;
        	      var height=1500;
        	      var dom;
        	      var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	      var canvas = d3.select(ScrollID).append("svg")
        		  .attr("width",width)
        		  .attr("id","idCanvas")
        		  .attr("height",height).append("g")
        	 							      
        	//top line
        	that.rect(canvas,data,10,10,980,30,0)//APO
        	that.text(canvas,data,500,30,130,30,0)
        	//second line
        	 that.rect(canvas,data,10,50,170,50,1)//Sunday Run
        	that.text(canvas,data,20,70,150,40,1)
        	 that.rect(canvas,data,210,50,170,50,12)//Monday, Tuesday & Thursday Run
        	that.text(canvas,data,220,70,150,40,12)
        	  that.rect(canvas,data,410,50,170,50,25)//Wednesday Run
        	that.text(canvas,data,420,70,150,40,25)
        	 that.rect(canvas,data,610,50,170,50,39)//Friday Run
        	that.text(canvas,data,620,70,150,40,39)
        	that.rect(canvas,data,810,50,170,50,54)//Saturday Run
        	that.text(canvas,data,820,70,150,40,54)
        	//tasks
        	  that.rect(canvas,data,10,110,170,680,2)//- Z2MONDAY Update TVARVC variable
        	 that.text(canvas,data,20,130,150,30,2)//- Z2MONDAY Update TVARVC variable
        	 that.text(canvas,data,20,165,150,30,3)//- BW_COUNTER: Update BW counter TVARVC variable
        	  that.text(canvas,data,20,210,150,20,4)//- System Mesaage and user lock
        	   that.text(canvas,data,20,235,150,30,5)//- Load from Terra & Load VC calendar
        	that.text(canvas,data,20,270,150,20,6)//- DP Forecast total
        	that.text(canvas,data,20,295,150,30,7)//- Weekly Backup (full back-up from PA10 > Cube 10B)
        	  that.text(canvas,data,20,340,150,20,8)//- User unlock
        	   that.text(canvas,data,20,365,150,30,9)//- Load History Delta from BW -> APO 
        	that.text(canvas,data,20,400,150,30,10)//- Master data Load (ECC > BW > APO)
        	 that.text(canvas,data,20,435,150,30,11)//- Data sent to Connect, SCDG, FVIH & Terra
        	  that.rect(canvas,data,210,110,170,680,13)//- Z2MONDAY Update TVARVC variant
        	 that.text(canvas,data,220,130,150,30,13)//- Z2MONDAY Update TVARVC variant
        	 that.text(canvas,data,220,165,150,30,14)//- BW_COUNTER: Update BW counter
        	  that.text(canvas,data,220,210,150,20,15)//- System Mesaage and user lock
        	   that.text(canvas,data,220,235,150,30,16)//- Load from Terra & Load VC calendar
        	that.text(canvas,data,220,270,150,20,17)//- CDF refresh
        	 that.text(canvas,data,220,295,150,30,18)//- DP Forecast total
        	  that.text(canvas,data,220,340,150,40,19)//- Daily Backup (delta from PA10 to Cube 10B i.e. 
        	   that.text(canvas,data,220,385,150,10,20)//- User unlock 
        	that.text(canvas,data,220,400,150,40,21)//- Load History Delta from BW -> APO
        	 that.text(canvas,data,220,445,150,40,22)//- Master data Load (ECC > BW > APO)
        	   that.text(canvas,data,220,490,150,40,23)//- Autopopulation & History stream Table update
        	 that.text(canvas,data,220,535,150,30,24)//- Data sent to Connect, SCDG, FVIH & Terra
        	   that.rect(canvas,data,410,110,170,680,13,26)//- Z2MONDAY Update TVARVC variant
        	 that.text(canvas,data,420,130,150,30,26)//- Z2MONDAY Update TVARVC variant
        	 that.text(canvas,data,420,165,150,30,27)//- BW_COUNTER: Update BW counter
        	  that.text(canvas,data,420,210,150,20,28)//- System Mesaage and user lock
        	   that.text(canvas,data,420,235,150,30,29)//- Load from Terra & Load VC calendar
        	that.text(canvas,data,420,270,150,20,30)//- CDF refresh
        	that.text(canvas,data,420,295,150,30,31)//- DP Forecast total
        	  that.text(canvas,data,420,340,150,20,32)//- DP to SNP release
        	   that.text(canvas,data,420,365,150,40,33)//- Daily Backup (delta from PA10 to Cube 10B i.e. back-
        	that.text(canvas,data,420,410,150,20,34)//- User unlock
        	 that.text(canvas,data,420,445,150,40,35)//- Load History Delta from BW -> APO
        	   that.text(canvas,data,420,490,150,40,36)//- Master data Load (ECC > BW > APO)
        	 that.text(canvas,data,420,535,150,30,37)//- Autopopulation & History stream Table update	
        	 that.text(canvas,data,420,570,150,30,38)//- Data sent to Connect, SCDG, FVIH & Terra
        	  that.rect(canvas,data,610,110,170,680,13,40)//- Z2MONDAY Update TVARVC variant
        	 that.text(canvas,data,620,130,150,30,40)//- Z2MONDAY Update TVARVC variant
        	 that.text(canvas,data,620,165,150,30,41)//- BW_COUNTER: Update BW counter
        	  that.text(canvas,data,620,210,150,20,42)//- System Mesaage and user lock
        	   that.text(canvas,data,620,235,150,30,43)//- Load from Terra & Load VC calendar
        	that.text(canvas,data,620,270,150,40,44)//- Load Promotion, load outsourced forecast (AMPS > FVIH > APO)
        	that.text(canvas,data,620,315,150,20,45)//- CDF refresh
        	  that.text(canvas,data,620,340,150,20,46)//- DP Forecast total 
        	   that.text(canvas,data,620,365,150,40,47)//- Daily Backup (delta from PA10 to Cube 10B i.e. back-up cube)
        	that.text(canvas,data,620,410,150,20,48)//- User unlock
        	 that.text(canvas,data,620,445,150,40,49)//- Load History Delta from BW -> APO
        	   that.text(canvas,data,620,490,150,40,50)//- Master data Load (ECC > BW > APO)
        	 that.text(canvas,data,620,535,150,30,51)//- Autopopulation & History stream Table update	
        	 that.text(canvas,data,620,570,150,30,52)//- Data sent to Connect, SCDG, FVIH & Terra
        	   that.text(canvas,data,620,605,150,40,53)//- CDF & Stat manual upload (Users > CG team > AL11)
        	  that.rect(canvas,data,810,110,170,680,13,55)//- Z2MONDAY Update TVARVC variant
        	 that.text(canvas,data,820,130,150,30,55)//- Z2MONDAY Update TVARVC variant
        	 that.text(canvas,data,820,165,150,30,56)//- BW_COUNTER: Update BW counter
        	  that.text(canvas,data,820,210,150,30,57)//- System Mesaage and user lock
        	   that.text(canvas,data,820,235,150,30,58)//- Load from Terra & Load VC calendar
        	that.text(canvas,data,820,270,150,40,59)//- Load Promotion, load outsourced forecast
        	that.text(canvas,data,820,315,150,10,60)//- CDF refresh
        	  that.text(canvas,data,820,330,150,20,61)//- DP Forecast total
        	   that.text(canvas,data,820,355,150,40,62)//- CVc creation fron History cube
        	that.text(canvas,data,820,410,150,20,63)//- Cube to Planning Area Load
        	 that.text(canvas,data,820,445,150,40,64)//- Smoothing autocleaning, CDF & TDF calculation
        	   that.text(canvas,data,820,490,150,20,65)//- Stat forecast
        	 that.text(canvas,data,820,515,150,40,66)//- DP BOM calculation (dep Demand Process)	
        	 that.text(canvas,data,820,560,150,20,67)//- DP to SNP release
        	 that.text(canvas,data,820,590,150,40,68)//- Daily Backup (delta from PA10 to Cube 10B i.e
        	 that.text(canvas,data,820,635,150,20,69)//- User unlock 
        	 that.text(canvas,data,820,660,150,30,70)//- Load History Delta from BW -> APO 
        	 that.text(canvas,data,820,695,150,30,71)//-- Master data Load (ECC > BW > APO)
        	 that.text(canvas,data,820,730,150,30,72)//- Autopopulation & History stream Table update
        	 that.text(canvas,data,820,765,150,30,73)//- Data sent to Connect, SCDG, FVIH & Terra
        	return canvas;
        	   }  , 1000 );
        	   },	
        	CAPO20P1_DP_MasterData:  function(x){
        		var model = this.uisCodeCheck("CAPO20P1");
        	    var data = sap.ui.getCore().getModel("bindingModel").oData;
        	    x.getView().getModel("oModelHeader").oData.header="APO P2F DP DP Master Data";
        	    setTimeout( function(){
        	     x.editPopUp.close();
        	     var that=x;
        	     var width=1900;
        	      var height=1500;
        	      var dom;
        	      var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	      var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")
        	//top line
        	that.pentagon(canvas,data,20,20,1540,1560,40,60,0) 	//APO
        	that.text(canvas,data,740,40,300,40,0)
        	//second line
        	that.rect(canvas,data,20,80,150,40,1)	// Update Calendar Value
        	that.text(canvas,data,35,100,300,40,1)
        	that.rect(canvas,data,190,80,150,40,3)	// TVARVC variant update
        	that.text(canvas,data,205,100,300,40,3)
        	that.rect(canvas,data,360,80,150,40,5)	// BW counter
        	that.text(canvas,data,390,100,300,40,5)
        	that.rect(canvas,data,530,80,150,40,7)	// Master data update
        	that.text(canvas,data,545,100,300,40,7)
        	that.rect(canvas,data,700,80,150,40,9)	// CVC Generation (Autopop)
        	that.text(canvas,data,705,100,150,40,9)
        	that.rect(canvas,data,870,80,150,40,11)	// CVC update in Table
        	that.text(canvas,data,895,100,330,40,11)
        	that.rect(canvas,data,1040,80,330,40,13)	// DPC Generation Process
        	that.text(canvas,data,1120,100,300,40,13)
        	that.rect(canvas,data,1390,80,170,40,16)// Master data Deletion
        	that.text(canvas,data,1430,100,300,40,16)
        	//tasks
        	that.rect(canvas,data,20,140,150,60,2)	// Load Calendar data into cube
        	that.text(canvas,data,50,165,100,60,2)
        	that.rect(canvas,data,190,140,150,60,4)	// TVARVC variant updated
        	that.text(canvas,data,220,165,100,60,4)
        	that.rect(canvas,data,360,140,150,60,6)	// Update BW counter in TVARVC variant
        	that.text(canvas,data,390,165,100,60,6)
        	that.rect(canvas,data,530,140,150,60,8)	// Master data loaded from BW to APO
        	that.text(canvas,data,560,165,100,60,8)
        	that.line(canvas,data,680,165,700,165)
        	that.leftArrow(canvas,data,700,165)
        	that.rect(canvas,data,700,140,150,60,10)// Create CVC's for newly loaded 
        	that.text(canvas,data,725,165,120,60,10)
        	that.line(canvas,data,850,165,870,165)
        	that.leftArrow(canvas,data,870,165)
        	that.rect(canvas,data,870,140,150,60,12)// History stream table Update
        	that.text(canvas,data,895,165,100,60,12)
        	that.rect(canvas,data,1040,140,150,60,14)// CVC creation from history cubes
        	that.text(canvas,data,1060,165,100,60,14)
        	that.rect(canvas,data,1220,140,150,60,15)// CVC Generation by users/ AM team
        	that.text(canvas,data,1250,165,100,60,15)
        	that.rect(canvas,data,1390,140,170,60,17)// Obsolete product deletion report
        		that.text(canvas,data,1420,165,100,60,17)
        		return canvas;
        	   }  , 1000 );
        	   },

        	 CAPO21R8_SP_Alerts_N_ExitMacros:  function(x){
        		   var model = this.uisCodeCheck("CAPO21R8");
        		   var data = sap.ui.getCore().getModel("bindingModel").oData;
        		   x.getView().getModel("oModelHeader").oData.header="APO P2F SP Alerts Exit Macros";
        		   setTimeout( function(){
        		   x.editPopUp.close();
        	      var that=x;
        	      var width=1900;
        		  var height=1500;
        		  var dom;
        		  var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        		  var canvas = d3.select(ScrollID).append("svg")
        		      .attr("width",width)
        		      .attr("id","idCanvas")
        		      .attr("height",height).append("g")
        	   //top line
        	that.pentagon(canvas,data,350,20,1220,1240,40,60,0)	//APO
        	that.text(canvas,data,800,40,300,40,0)						
        	//second line
        	that.rect(canvas,data,350,80,300,40,1)		// Raise Alerts
        	that.text(canvas,data,450,100,300,40,1)
        	that.rect(canvas,data,940,80,300,40,3)		// Exit Macros
        	that.text(canvas,data,1040,100,300,40,3)				
        	//tasks
        	that.rect(canvas,data,350,140,300,60,2) // Alert Generation
        	that.text(canvas,data,450,170,300,60,2)
        	that.rect(canvas,data,940,140,300,60,4) // Exit Macros
        	that.text(canvas,data,1040,170,300,60,4)
        	return canvas;
        		   }  , 1000 );
        		   },
        														   
        	 CAPO21Q9_Subcontracting:  function(x){
        		   var model = this.uisCodeCheck("CAPO21Q9");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="APO P2F SP Subcontracting";
        	   setTimeout( function(){
        	     x.editPopUp.close();
        	     var that=x;
        	     var width=1900;
        	      var height=1500;
        	      var dom;
        	      var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	      var canvas = d3.select(ScrollID).append("svg")
        	      .attr("width",width)
        	      .attr("id","idCanvas")
        	      .attr("height",height).append("g")
        	   //top line
        	that.pentagon(canvas,data,650,20,930,950,40,60,0)	//APO
        	that.text(canvas,data,775,40,300,40,0)						
        	//second line
        	that.rect(canvas,data,650,80,300,40,1)		// Subcontracting
        	that.text(canvas,data,750,100,300,40,1)									
        	//tasks
        	that.rect(canvas,data,650,140,300,60,2) // Subcontracting Planning
        	that.text(canvas,data,725,170,300,60,2)
        			return canvas;
        			   }  , 1000 );
        			   },
        														   
        	CAPO21R5_TerraInterface:  function(x){
        		var model = this.uisCodeCheck("CAPO21R5");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="C P2F SP TERRA";
        	   setTimeout( function(){
        	     x.editPopUp.close();
        	     var that=x;
        	     var width=1900;
        	      var height=1500;
        	      var dom;
        	      var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")   
        	that.pentagon(canvas,data,300,10,565,585,30,50,0) // ECC (P1P)
        	that.text(canvas,data,400,35,300,40,0)
        	that.rect(canvas,data,300,80,270,40,1) //Transction Data & Master Data Flow
        	that.text(canvas,data,310,100,300,40,1)
        	that.rect(canvas,data,300,150,270,40,2) //MD & TD Release to Terra
        	that.text(canvas,data,310,170,300,40,2)
        	that.line(canvas,data,570,170,635,170)
        	that.leftArrow(canvas,data,635,170)
        	that.pentagon(canvas,data,635,10,890,910,30,50,3) //BW (W1P)
        	that.text(canvas,data,730,35,300,40,3)
        	that.line(canvas,data,760,50,760,150)
        	that.downArrow(canvas,data,760,150)
        	that.rect(canvas,data,635,150,275,40,4) //DS folder
        	that.text(canvas,data,735,170,300,40,4)
        	that.line(canvas,data,909,170,965,170)
        	that.rightArrow(canvas,data,909,170)
        	that.line(canvas,data,760,190,760,240)
        	that.downArrow(canvas,data,760,240)
        	that.pentagon(canvas,data,635,240,900,920,260,280,5) //TERRA
        	that.text(canvas,data,740,265,300,40,5)
        	that.rect(canvas,data,635,310,280,40,6) //Terra Demand Signal 
        	that.text(canvas,data,720,330,300,40,6)
        	that.rect(canvas,data,635,380,280,40,7) //Terra Demand Signal file Release 
        	that.text(canvas,data,690,400,300,40,7)
        	that.line(canvas,data,915,400,965,400)
        	that.leftArrow(canvas,data,965,400)
        	that.pentagon(canvas,data,965,10,1230,1250,30,50,8) // APO (T1P)
        	that.text(canvas,data,1065,35,300,40,8)
        	that.rect(canvas,data,965,80,280,40,9) //DP Forecast release to Terra
        	that.text(canvas,data,1025,100,300,40,9) 
        	that.rect(canvas,data,965,150,280,40,10) //Short-term Forecast release from DP to Terra
        	that.text(canvas,data,985,170,300,40,10) 
        	that.pentagon(canvas,data,965,240,1230,1250,260,280,11) // APO (T1P)
        	that.text(canvas,data,1065,265,300,40,11)
        	that.rect(canvas,data,965,310,280,40,12) //Forecast Release from DP to SNP
        	that.text(canvas,data,1010,330,300,40,12)
        	that.rect(canvas,data,965,380,280,40,13) //Short Term (5 Weeks)Terra Demand Signal Release to SNP
        	that.text(canvas,data,985,395,250,40,13)
        	return canvas;
        	   }  , 1000 );
        	   },
        																   
        	CAPO21R9_BW_Reporting:  function(x){
        	   var model = this.uisCodeCheck("CAPO21R9");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="C P2F SP BW Reporting";
        	   setTimeout( function(){
        	     x.editPopUp.close();
        	 var that=x;
        	 var width=1900;
        	  var height=1500;
        	  var dom;
        	  var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")
        	that.pentagon(canvas,data,250,10,455,475,30,50,0) // APO
        	that.text(canvas,data,340,35,300,40,0)
        	that.line(canvas,data,470,30,585,30)
        	that.leftArrow(canvas,data,585,30)
        	that.pentagon(canvas,data,585,10,790,810,30,50,1) //BW 
        	that.text(canvas,data,680,35,300,40,1)
        	that.rect(canvas,data,585,80,220,40,2)//Load SB_100 Keyfigure into BW
        	that.text(canvas,data,610,100,300,40,2)
        	that.rect(canvas,data,585,150,220,50,3)//Load MALORE/MALA/MALO information into BW data targets
        	that.text(canvas,data,610,170,200,40,3)
        	that.pentagon(canvas,data,920,10,1125,1145,30,50,4) //BW 
        	that.text(canvas,data,1010,35,300,40,4)
        	that.line(canvas,data,1143,30,1255,30)
        	that.leftArrow(canvas,data,1255,30)
        	that.pentagon(canvas,data,1255,10,1460,1480,30,50,5) //APO 
        	that.text(canvas,data,1350,35,300,40,5)
        	that.rect(canvas,data,1255,80,220,40,6)//OSL (Out of shelf life) MD extraction
        	that.text(canvas,data,1270,100,300,40,6)
        	that.rect(canvas,data,1255,150,220,50,7)//OSL Master data  extracted from BW and stored in APO data target
        		that.text(canvas,data,1270,170,200,40,7)
        		return canvas;
        	   }  , 1000 );
        	   },
        	  CAPO21Q5_CCR:  function(x){
        	  var model = this.uisCodeCheck("CAPO21Q5");
        	  var data = sap.ui.getCore().getModel("bindingModel").oData;
        	  x.getView().getModel("oModelHeader").oData.header="APO C P2F SP CCR";
        	  setTimeout( function(){
        	  x.editPopUp.close();
        	  var that=x;
        	  var width=1900;
        	  var height=1500;
        	  var dom;
        	  var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")
        	// First Column
        	that.pentagon(canvas,data,650,10,1110,1130,30,50,0) // APO
        	that.text(canvas,data,880,30,300,40,0)
        	that.rect(canvas,data,650,80,480,40,1) // CIF Comparision/Reconcilliation Report 
        	that.text(canvas,data,790,100,300,30,1)
        	that.rect(canvas,data,650,150,480,40,2) // Comparision and Reconcilliation of Transaction 
        	that.text(canvas,data,690,175,470,40,2)
        	return canvas;
        	   }  , 1000 );
        	   },
        							
        	CAPO21R3_Deployment_N_TLBPlanning:  function(x){
        	  var model = this.uisCodeCheck("CAPO21R3");
        	  var data = sap.ui.getCore().getModel("bindingModel").oData;
        	  x.getView().getModel("oModelHeader").oData.header="APO C P2F SP Deployement TLB";
        	  setTimeout( function(){
        	  x.editPopUp.close();
        	  var that=x;
        	  var width=1900;
        	  var height=1500;
        	  var dom;
        	  var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")
        	// First Column
        	that.pentagon(canvas,data,550,10,1150,1170,30,50,0) // APO
        	that.text(canvas,data,850,30,300,40,0)
        	that.rect(canvas,data,550,80,620,40,1) // Deployement & TLB 
        	that.text(canvas,data,820,100,300,30,1)
        	that.rect(canvas,data,550,150,180,50,2) // Deployement Run
        	that.text(canvas,data,590,175,170,40,2)
        	that.rect(canvas,data,770,150,180,50,3) // TLB RUn
        	that.text(canvas,data,835,175,110,40,3)
        	that.rect(canvas,data,990,150,180,50,4) // Publish BR STOs to ECC 
        	that.text(canvas,data,1010,175,140,40,4)
        	return canvas;
        		   }  , 1000 );
        		   },
        							 
        	CAPO21Q6_ForecastRelease:  function(x){
        		   var model = this.uisCodeCheck("CAPO21Q6");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="APO C P2F SP Forecast Release";
        	   setTimeout( function(){
        	     x.editPopUp.close();
        	 var that=x;
        	 var width=1900;
        	  var height=1500;
        	  var dom;
        	      var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")
        	  	// First Column
        	that.pentagon(canvas,data,250,10,650,670,30,50,0) // TERRA
        	that.text(canvas,data,425,30,300,40,0)
        	that.rect(canvas,data,250,80,420,40,1) // Terra Demand Signal
        	that.text(canvas,data,400,100,200,30,1)
        	that.rect(canvas,data,250,150,420,40,2) // Terra Demand Signal File release
        	that.text(canvas,data,360,170,200,30,2)
        	that.pentagon(canvas,data,810,10,1470,1490,30,50,3) // APO
        	that.text(canvas,data,1205,30,300,40,3)
        	that.rect(canvas,data,810,80,320,40,4) // Terra Demand Signal
        	that.text(canvas,data,910,100,200,30,4)
        	that.rect(canvas,data,810,150,320,40,5) // Short Term (5 Weeks) Terra Demand Signal Release to SNP
        	that.text(canvas,data,820,170,310,30,5)
        	that.rect(canvas,data,1170,80,320,40,6) // Forecast Release from DP to SNP
        	that.text(canvas,data,1240,100,200,30,6)
        	that.rect(canvas,data,1170,150,320,40,7) // Long Term Forecast Release  DP to SNP 
        	that.text(canvas,data,1215,170,310,30,7)
        	// LIne And Arrows
        	that.line(canvas,data,670,170,810,170) // line connecting index - 2 & index - 5
        	that.leftArrow(canvas,data,810,170)
        	return canvas;
        		   }  , 1000 );
        		   },
        							   
        	CAPO21R1_Interchangeability:  function(x){
        		   var model = this.uisCodeCheck("CAPO21R1");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="APO C P2F SP INTERCHANGEABILITY";
        	   setTimeout( function(){
        	     x.editPopUp.close();
        	     var that=x;
        	     var width=1900;
        	      var height=1500;
        	      var dom;
        	      var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")
        	// First Column
        	that.pentagon(canvas,data,650,10,1110,1130,30,50,0) // APO
        	that.text(canvas,data,880,30,300,40,0)
        	that.rect(canvas,data,650,80,480,40,1) // Interchangeability 
        	that.text(canvas,data,840,100,300,30,1)
        	that.rect(canvas,data,650,150,480,40,2) // Interchangeability Part of Opt run 
        	that.text(canvas,data,800,175,470,40,2)
        		return canvas;
        	   }  , 1000 );
        	   },
        						
        	 CAPO21P1_WeeklyJobCycle:  function(x){
        		   var model = this.uisCodeCheck("CAPO21P1");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="APO C P2F SP Weekly Job Cycle";
        	   setTimeout( function(){
        	 x.editPopUp.close();
        	 var that=x;
        	 var width=1900;
        	  var height=1500;
        	  var dom;
        	  var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")
        		// First Column
        		that.pentagon(canvas,data,350,10,1360,1380,30,50,0) // APO
        		that.text(canvas,data,830,30,300,40,0)
        		that.rect(canvas,data,350,80,230,40,1) // Saturday run
        		that.text(canvas,data,430,100,190,30,1)
        		that.rect(canvas,data,350,150,230,40,2) // Forecast Release & Unconstraint  Run 
        		that.text(canvas,data,360,170,210,30,2)
        		that.rect(canvas,data,610,80,230,40,3) // Saturday run
        		that.text(canvas,data,690,100,190,30,3)
        		that.rect(canvas,data,610,150,230,40,4) // Constraint Full Network Run 
        		that.text(canvas,data,650,170,210,30,4)
        		that.rect(canvas,data,880,80,230,40,5) // Wednesday run
        		that.text(canvas,data,950,100,190,30,5)
        		that.rect(canvas,data,880,150,230,40,6) // Constraint Full Network Run 
        		that.text(canvas,data,920,170,210,30,6)
        		that.rect(canvas,data,1150,80,230,40,7) // Regular days (Mon to Fri)
        		that.text(canvas,data,1195,100,190,30,7)
        		that.rect(canvas,data,1150,150,230,40,8) // DRP Run
        			that.text(canvas,data,1235,170,210,30,8)
        			return canvas;
        	   }  , 1000 );
        	   },			   
        	 CAPO21Q3_MasterData:  function(x){
        		 var model = this.uisCodeCheck("CAPO21Q3");
        	   var data = sap.ui.getCore().getModel("bindingModel").oData;
        	   x.getView().getModel("oModelHeader").oData.header="C P2F SP SNP Master Data";
        	   setTimeout( function(){
        	   x.editPopUp.close();
        	  var that=x;
        	  var width=1900;
        	  var height=1500;
        	  var dom;
        	  var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        	  var canvas = d3.select(ScrollID).append("svg")
        	  .attr("width",width)
        	  .attr("id","idCanvas")
        	  .attr("height",height).append("g")      	
        	//top line
        	  that.rect(canvas,data,10,10,120,30,0)//ECC
        	  that.text(canvas,data,60,30,100,30,0)
        	  that.rect(canvas,data,220,10,120,30,3)//APO
        	  that.text(canvas,data,230,30,100,30,3)
        	//second line
        	  that.rect(canvas,data,10,50,120,50,1)//Master Data Load
        	  that.text(canvas,data,20,70,100,40,1)
        	  that.rect(canvas,data,220,50,120,50,4)//Master Data Update
        	  that.text(canvas,data,230,70,100,40,4)
        	//tasks
        	  that.rect(canvas,data,10,110,120,100,2)//Master Data sent from ECC to APO
        	  that.text(canvas,data,20,130,100,80,2)
        	  that.line(canvas,data,130,150,220,150)
        	  that.leftArrow(canvas,data,220,150)
        	  that.rect(canvas,data,220,110,120,100,5)//Master data update in APO
        	  that.text(canvas,data,230,130,100,80,5)
        	  that.textBlack(canvas,data,135,130,50,30,6)
        	return canvas;
        	   }  , 1000 );
        	   },
        										   
        	CAPO21R4_ShortTermScheduling:  function(x){
        		   var model = this.uisCodeCheck("CAPO21R4");
        		   var data = sap.ui.getCore().getModel("bindingModel").oData;
        		   x.getView().getModel("oModelHeader").oData.header="C P2F SP Short term Scheduling";
        		   setTimeout( function(){
        		    x.editPopUp.close();
        		    var that=x;
        		    var width=1900;
        		  var height=1500;
        		  var dom;
        		  var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        		  var canvas = d3.select(ScrollID).append("svg")
        		  .attr("width",width)
        		  .attr("id","idCanvas")
        		  .attr("height",height).append("g")  
        		//top line
        		that.rect(canvas,data,10,10,120,30,0)//APO
        		that.text(canvas,data,60,30,100,30,0)	
        		//second line	 
        		  that.rect(canvas,data,10,50,120,50,1)//Short Term Scheduling
        		that.text(canvas,data,20,70,100,40,1)	
        		//tasks	 
        	     that.rect(canvas,data,10,110,120,100,2)//Semi finished PPDS Planning
        		 that.text(canvas,data,20,130,100,80,2)
        		return canvas;
        	   }  , 1000 );
        	   },
        				 
        	CAPO20P2_Disaggregation:  function(x){
        		   var model = this.uisCodeCheck("CAPO20P2");
        		   var data = sap.ui.getCore().getModel("bindingModel").oData;
        		  x.getView().getModel("oModelHeader").oData.header="P2F DP Disaggregation(Including Time Disagg)";
        		   	setTimeout( function(){
        		    x.editPopUp.close();
        		  var that=x;
        		  var width=1900;
        	      var height=1500;
        	      var dom;
        	      var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
        		  var canvas = d3.select(ScrollID).append("svg")
        		  .attr("width",width)
        		  .attr("id","idCanvas")
        		  .attr("height",height).append("g")
        		that.rect(canvas,data,100,10,1350,50,0) // APO
        		that.text(canvas,data,700,30,1000,40,0)
        		that.rect(canvas,data,100,80,250,70,1)	// Proportional Factor Generation
        		that.text(canvas,data,140,110,230,50,1)
        		that.rect(canvas,data,100,170,250,100,2)	// Proportional Factor Generation from pas
        		that.text(canvas,data,120,200,230,80,2)
        		that.rect(canvas,data,400,80,250,70,3)	// CDF Generation 
        		that.text(canvas,data,460,110,230,50,3)
        		that.rect(canvas,data,400,170,250,100,4)	// Copy System Generated Proportional Factor 
        		that.text(canvas,data,410,200,230,80,4)
        		that.rect(canvas,data,700,80,250,70,5)	// TDF Generation 
        		that.text(canvas,data,760,110,230,50,5)
        		that.rect(canvas,data,700,170,250,100,6)	// Calculate Time Disaggregation Factor
        		that.text(canvas,data,720,200,230,80,6)
        		that.rect(canvas,data,1000,80,250,70,7)	// File Upload Process 
        		that.text(canvas,data,1060,110,230,50,7)
        		that.rect(canvas,data,1000,170,250,100,8) // Load CDF from flat file to PA
        		that.text(canvas,data,1050,200,230,80,8)
        		that.rect(canvas,data,1300,80,250,70,9)	// CDF Refresh
        		that.text(canvas,data,1360,110,230,50,9)
        		that.rect(canvas,data,1300,170,250,100,10)	// DP CDF Refresh
        		that.text(canvas,data,1340,200,230,80,10)
        			return canvas;
        	   }  , 1000 );
        	   },
        	   
      /*APO ends*/
	
        	   
        	   /*Cordillera - Sourcing Integration starts*/
       		
       		CSRC01A1_Procure_ProdItems_via_PO :  function(x){
       		    var model = this.uisCodeCheck("CSRC01A1");
       		    var data = sap.ui.getCore().getModel("bindingModel").oData;
       		    x.getView().getModel("oModelHeader").oData.header="Sourcing Procurement via PO";
       		    setTimeout( function(){
       		      x.editPopUp.close();
       		      var that=x;
       		      var width=1900;
       		       var height=1500;
       		       var dom;
       		       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
       		       var canvas = d3.select(ScrollID).append("svg")
       		       .attr("width",width)
       		       .attr("id","idCanvas")
       		       .attr("height",height).append("g")
       		       			//top line
       						that.pentagon(canvas,data,30,10,220,250,30,50,0)
       						that.text(canvas,data,120,35,300,40,0)
       						that.pentagon(canvas,data,280,10,1350,1380,30,50,3)
       						that.text(canvas,data,800,35,100,40,3)
       						
       						//second line
       						that.rect(canvas,data,30,70,220,40,1)	// Purchase Contract Creation Process
       						that.text(canvas,data,40,95,300,40,1)
       						that.rect(canvas,data,280,70,180,40,4)	// Interface Contract to ECC
       						that.text(canvas,data,300,95,140,40,4)
       						that.rect(canvas,data,490,70,680,40,6)	// Procurement process in ECC
       						that.text(canvas,data,720,95,220,40,6)
       						that.rect(canvas,data,1200,70,180,40,10)	// ECC Receiving Process
       						that.text(canvas,data,1220,95,160,40,10)
       						
       						//tasks
       						that.rect(canvas,data,30,132,220,80,2)	// Purchase Contract Creation
       						that.text(canvas,data,60,172,300,60,2)
       						that.line(canvas,data,250,170,280,170)
       						that.leftArrow(canvas,data,280,170)
       						
       						that.rect(canvas,data,280,132,180,80,5)	// Purchase Contract Creation
       						that.text(canvas,data,300,172,300,60,5)						
       						that.line(canvas,data,460,170,490,170)
       						that.leftArrow(canvas,data,490,170)
       						
       						that.rect(canvas,data,490,132,180,80,7)	// Source list generation
       						that.text(canvas,data,500,162,170,80,7)						
       						that.line(canvas,data,670,170,700,170)
       						that.leftArrow(canvas,data,700,170)
       						
       						that.rect(canvas,data,700,132,200,80,8)	//  Purchase Requisition Creation
       						that.text(canvas,data,710,162,170,80,8)						
       						that.line(canvas,data,900,170,930,170)
       						that.leftArrow(canvas,data,930,170)
       						
       						that.rect(canvas,data,930,132,240,80,9)	// Purchase Order Creation
       						that.text(canvas,data,942,162,200,80,9)						
       						that.line(canvas,data,1170,170,1230,170)
       						that.leftArrow(canvas,data,1200,170)
       						
       						that.rect(canvas,data,1200,132,180,80,11)	// Goods Receipt(MIGO)
       						that.text(canvas,data,1220,172,160,60,11)
       		return canvas;
       		}  , 1000 );
       		
       		},
       		
       		
       		CSRC01A2_MRP_Data_Supplier :  function(x){
       		    var model = this.uisCodeCheck("CSRC01A2");
       		    var data = sap.ui.getCore().getModel("bindingModel").oData;
       		    x.getView().getModel("oModelHeader").oData.header="Sourcing MRP Data Supplier";
       		    setTimeout( function(){
       		      x.editPopUp.close();
       		      var that=x;
       		      var width=1900;
       		       var height=1500;
       		       var dom;
       		       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
       		       var canvas = d3.select(ScrollID).append("svg")
       		       .attr("width",width)
       		       .attr("id","idCanvas")
       		       .attr("height",height).append("g")
       		       			//top line
       						that.pentagon(canvas,data,20,20,700,720,40,60,0) 	//ECC
       						that.text(canvas,data,350,40,300,40,0)
       						that.pentagon(canvas,data,740,20,1060,1080,40,60,9) 	//APO
       						that.text(canvas,data,900,40,300,40,9)
       						that.pentagon(canvas,data,1100,20,1420,1440,40,60,14) 	//ECC
       						that.text(canvas,data,1240,40,300,40,14)
       						//second line
       						that.rect(canvas,data,20,80,100,50,1)	// Master Data Replication to APO
       						that.text(canvas,data,30,95,100,40,1)
       						that.rect(canvas,data,140,80,580,50,3)	// Source Determination
       						that.text(canvas,data,350,110,300,40,3)
       						that.rect(canvas,data,740,80,340,50,10)	// Demand Determination
       						that.text(canvas,data,850,110,300,40,10)
       						that.rect(canvas,data,1100,80,340,50,15)	// Requirement Creation
       						that.text(canvas,data,1210,110,300,40,15)
       						//tasks
       						that.rect(canvas,data,20,150,100,60,2) // Master Data Extract via Core Interface (CIF)
       						that.text(canvas,data,25,170,100,40,2)
       						that.rect(canvas,data,140,150,100,60,4) // Quota Arrangement(MEQ1)
       						that.text(canvas,data,150,170,100,40,4)
       						that.rect(canvas,data,260,150,100,60,5) // SourceList (ME01/Z7MM_SRCGEN)
       						that.text(canvas,data,263,170,80,40,5)
       						that.rect(canvas,data,380,150,100,60,6) // Contract (via CLM/ME31K)
       						that.text(canvas,data,390,170,100,40,6)
       						that.rect(canvas,data,500,150,100,60,7) // Purchasing Info Record(ME11)
       						that.text(canvas,data,510,170,100,40,7)
       						that.hexagon(canvas,data,620,370,640,330,700,720,410,8)
       						that.text(canvas,data,640,340,60,40,8)
       						that.rect(canvas,data,860,150,100,60,12) // Purchasing Info Record Replication
       						that.text(canvas,data,870,170,100,40,12)
       						that.rect(canvas,data,980,150,100,60,13) // Forecast Demand and Requirement (FERT)
       						that.text(canvas,data,983,170,100,40,13)
       						that.rect(canvas,data,1100,150,100,60,16) // Requirement Replication in ECC
       						that.text(canvas,data,1110,170,100,40,16)
       						that.rect(canvas,data,1340,150,100,60,18) // Purchase Requisition
       						that.text(canvas,data,1355,175,100,40,18)
       						that.rect(canvas,data,740,230,100,80,11) // Master Data Replication
       						that.text(canvas,data,760,270,100,40,11)
       						that.rect(canvas,data,1220,230,100,80,17) // Requirement Planning (MD01/MD02/MDBT or batch job)
       						that.text(canvas,data,1230,250,100,40,17)
       						that.line(canvas,data,600,180,860,180)
       						that.leftArrow(canvas,data,860,180)
       						that.line(canvas,data,960,180,980,180)
       						that.leftArrow(canvas,data,980,180)
       						that.line(canvas,data,1080,180,1100,180)
       						that.leftArrow(canvas,data,1100,180)
       						that.line(canvas,data,1200,180,1340,180)
       						that.leftArrow(canvas,data,1340,180)
       						that.line(canvas,data,60,210,60,270)
       						that.line(canvas,data,60,270,740,270)
       						that.leftArrow(canvas,data,740,270)
       						that.line(canvas,data,240,180,250,180)
       						that.line(canvas,data,250,180,250,370)
       						that.line(canvas,data,250,370,620,370)
       						that.leftArrow(canvas,data,620,370)
       						that.line(canvas,data,360,180,370,180)
       						that.line(canvas,data,370,180,370,370)
       						that.line(canvas,data,480,180,490,180)
       						that.line(canvas,data,490,180,490,370)
       						that.line(canvas,data,540,210,540,300)
       						that.line(canvas,data,540,300,670,300)
       						that.line(canvas,data,670,300,670,330)
       						that.downArrow(canvas,data,670,330)
       						that.line(canvas,data,720,370,980,370)
       						that.line(canvas,data,980,270,980,370)
       						that.line(canvas,data,980,270,1220,270)
       						that.leftArrow(canvas,data,1220,270)
       						that.line(canvas,data,1320,270,1390,270)
       						that.line(canvas,data,1390,210,1390,270)
       						that.upArrow(canvas,data,1390,210)
       		return canvas;
       		}  , 1000 );
       		
       		},

       		CSRC01B2_TeaBuying_ForeignVendor_UAPL :  function(x){
       		    var model = this.uisCodeCheck("CSRC01B2");
       		    var data = sap.ui.getCore().getModel("bindingModel").oData;
       		    x.getView().getModel("oModelHeader").oData.header="Sourcing Tea Buying from Foreign Vendor via UAPL";
       		    setTimeout( function(){
       		      x.editPopUp.close();
       		      var that=x;
       		      var width=5000;
       		       var height=6000;
       		       var dom;
       		       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
       		       var canvas = d3.select(ScrollID).append("svg")
       		       .attr("width",width)
       		       .attr("id","idCanvas")
       		       .attr("height",height).append("g")
       		       			//top line
       	                    that.pentagon(canvas,data,30,10,185,205,30,50,0) // SRM
       						that.text(canvas,data,100,35,300,40,0)
       						that.rect(canvas,data,30,80,180,40,1)//Purchase Order Creation Process 
       						that.text(canvas,data,50,100,150,40,1)
       						that.rect(canvas,data,30,150,180,50,2)//Purchase Order creation
       						that.text(canvas,data,50,170,150,40,2)
       						that.line(canvas,data,210,170,250,170)
       						that.leftArrow(canvas,data,250,170)
       						that.pentagon(canvas,data,250,10,1020,1040,30,50,3) // ECC U2K2
       						that.text(canvas,data,600,35,300,40,3)
       						that.rect(canvas,data,250,80,160,40,4)//Interface Order  to U2K2 ECC
       						that.text(canvas,data,260,100,150,40,4)
       						that.rect(canvas,data,250,150,160,50,5)//Purchase Order creation(RFC)
       						that.text(canvas,data,260,170,150,40,5)
       						that.line(canvas,data,410,170,450,170)
       						that.leftArrow(canvas,data,450,170)			
       						that.rect(canvas,data,450,80,590,40,6)//Procurement process in ECC 
       						that.text(canvas,data,650,100,200,40,6)
       						that.rect(canvas,data,450,150,160,50,7)//Inbound Delivery Creation(Upload program)
       						that.text(canvas,data,460,170,150,40,7)
       						that.line(canvas,data,610,170,650,170)
       						that.leftArrow(canvas,data,650,170)
       						that.rect(canvas,data,650,150,180,50,8)//Automatic Goods Receipts(YR1UMM_PUR0052)
       						that.text(canvas,data,660,170,140,40,8)
       						that.line(canvas,data,830,170,870,170)
       						that.leftArrow(canvas,data,870,170)
       						that.rect(canvas,data,870,150,175,50,9)//Automatic creation of Sales Order(YR1UMM_PUR0052)
       						that.text(canvas,data,880,170,140,40,9)
       						that.line(canvas,data,1045,170,1080,170)
       						that.leftArrow(canvas,data,1080,170)
       						that.line(canvas,data,960,200,960,230)
       						that.downArrow(canvas,data,960,230)
       						that.rect(canvas,data,870,230,175,70,10)//Automatic creation Outbound Delivery and Goods Issue(YR1UMM_PUR0052)
       						that.text(canvas,data,880,250,140,40,10)
       						that.pentagon(canvas,data,1080,10,1580,1600,30,50,11) // ECC Cordillera
       						that.text(canvas,data,1290,35,300,40,11)
       						that.rect(canvas,data,1080,80,180,40,12)//Interface Order  to Cordillera ECC 
       						that.text(canvas,data,1090,100,150,40,12)
       						that.rect(canvas,data,1080,150,174,50,13)//Level 2 Purchase Order creation(IDoc)
       						that.text(canvas,data,1090,170,140,40,13)
       						that.line(canvas,data,1254,170,1290,170)
       						that.leftArrow(canvas,data,1290,170)		
       						that.rect(canvas,data,1290,80,310,40,14)//Procurement and Receiving process in ECC 
       						that.text(canvas,data,1300,100,280,40,14)
       						that.rect(canvas,data,1290,150,174,50,15)//Inbound Delivery Creation(ZIBX Output/ZGSEIBD_UPLOAD)
       						that.text(canvas,data,1300,170,140,40,15)
       						that.line(canvas,data,1464,170,1500,170)
       						that.leftArrow(canvas,data,1500,170)
       						that.rect(canvas,data,1500,150,100,50,16)//Goods Receipt(MIGO)
       						that.text(canvas,data,1510,170,100,40,16)
       		return canvas;
       		}  , 1000 );
       		
       		},
       		
       		CSRC01B3_Procurement_via_Ariba_PM :  function(x){
       		    var model = this.uisCodeCheck("CSRC01B3");
       		    var data = sap.ui.getCore().getModel("bindingModel").oData;
       		    x.getView().getModel("oModelHeader").oData.header="Procurement via Ariba for PM";
       		    setTimeout( function(){
       		      x.editPopUp.close();
       		      var that=x;
       		      var width=5000;
       		       var height=6000;
       		       var dom;
       		       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
       		       var canvas = d3.select(ScrollID).append("svg")
       		       .attr("width",width)
       		       .attr("id","idCanvas")
       		       .attr("height",height).append("g")
       		       	// First Row
       				that.pentagon(canvas,data,10,10,130,160,30,50,0) // ECC
       				that.text(canvas,data,60,35,300,40,0)
       				
       				that.pentagon(canvas,data,200,10,500,530,30,50,1) // ECC
       				that.text(canvas,data,340,35,300,40,1)
       				
       				that.pentagon(canvas,data,570,10,870,900,30,50,2) // ARIBA
       				that.text(canvas,data,700,35,300,40,2)
       				
       				that.pentagon(canvas,data,940,10,1240,1270,30,50,3) // ECC
       				that.text(canvas,data,1080,35,300,40,3)
       				
       				that.pentagon(canvas,data,1310,10,1420,1450,30,50,4) // ARIBA
       				that.text(canvas,data,1355,35,300,40,4)
       				
       				// Second Row
       				that.rect(canvas,data,10,80,150,50,5) // Master Data Replication to Ariba  
       				that.text(canvas,data,30,105,120,40,5)
       				
       				that.rect(canvas,data,200,80,510,50,6) // Purchase Requisition Creation 
       				that.text(canvas,data,380,110,300,40,6)
       				
       				that.rect(canvas,data,750,80,330,50,7) // Purchase Order Creation 
       				that.text(canvas,data,840,110,200,40,7)
       				
       				that.rect(canvas,data,1120,80,330,50,8) // Goods Receipt  
       				that.text(canvas,data,1240,110,200,40,8)

       				// Third Row
       				that.rect(canvas,data,10,160,150,90,9) // Delta Master Data Extract via custom programs 
       				that.text(canvas,data,35,195,100,40,9)
       				that.rect(canvas,data,200,160,150,90,10) // Purchase Requisition creation/change/Cancellation 
       				that.text(canvas,data,215,195,130,40,10)
       				that.rect(canvas,data,380,160,150,90,11) // Purchase Requisition Released/Extract 
       				that.text(canvas,data,405,200,130,40,11)
       				that.rect(canvas,data,560,160,150,90,12) //  Purchase Requisition Replication to Ariba
       				that.text(canvas,data,580,200,130,40,12)
       				that.rect(canvas,data,750,160,150,90,13) //  Purchase Order Creation/Change/Cancellation
       				that.text(canvas,data,775,195,100,40,13)
       				that.rect(canvas,data,930,160,150,90,14) //  Purchase Order Replication
       				that.text(canvas,data,965,200,100,40,14)
       				that.rect(canvas,data,1120,160,150,90,15) // Goods Receipt
       				that.text(canvas,data,1155,205,140,40,15)
       				that.rect(canvas,data,1300,160,150,90,16) // Goods Receipt Replication
       				that.text(canvas,data,1335,200,140,40,16)
       				//Lines and Arrow 				
       				that.line(canvas,data,350,205,380,205) // Line connecting index - 9 to index - 10
       				that.leftArrow(canvas,data,380,205)
       				that.line(canvas,data,530,205,560,205) // Line Connecting index 11 to index -12
       				that.leftArrow(canvas,data,560, 205)
       				that.line(canvas,data,710,205,750,205) // Line Connecting index -12 to index - 13
       				that.leftArrow(canvas,data,750, 205)
       				that.line(canvas,data,900,205,930,205) // Line Connecting index - 13 & 14
       				that.leftArrow(canvas,data,930, 205)
       				that.line(canvas,data,1080,205,1120,205)// Line Connecting index - 14 & 15
       				that.leftArrow(canvas,data,1120, 205)
       				that.line(canvas,data,1270,205,1300,205)// Line Connecting index - 8 & 9
       				that.leftArrow(canvas,data,1300,205)
       		return canvas;
       		}  , 1000 );
       		
       		},
       		
       		CSRC01B4_Procurement_via_Ariba_NPI :  function(x){
       		    var model = this.uisCodeCheck("CSRC01B4");
       		    var data = sap.ui.getCore().getModel("bindingModel").oData;
       		    x.getView().getModel("oModelHeader").oData.header="Procurement via Ariba for NPI";
       		    setTimeout( function(){
       		      x.editPopUp.close();
       		      var that=x;
       		      var width=5000;
       		       var height=6000;
       		       var dom;
       		       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
       		       var canvas = d3.select(ScrollID).append("svg")
       		       .attr("width",width)
       		       .attr("id","idCanvas")
       		       .attr("height",height).append("g")
       		       	// First Row
       				that.pentagon(canvas,data,10,10,130,160,30,50,0) // ECC
       				that.text(canvas,data,60,35,300,40,0)
       				that.pentagon(canvas,data,200,10,320,350,30,50,1) // ARIBA
       				that.text(canvas,data,240,35,300,40,1)
       				that.pentagon(canvas,data,390,10,510,540,30,50,2) // ECC
       				that.text(canvas,data,430,35,300,40,2)
       				that.pentagon(canvas,data,580,10,700,730,30,50,3) // ARIBA
       				that.text(canvas,data,620,35,300,40,3)
       				that.pentagon(canvas,data,770,10,890,920,30,50,4) // ECC
       				that.text(canvas,data,810,35,300,40,4)
       				that.pentagon(canvas,data,960,10,1080,1110,30,50,5) // ARIBA
       				that.text(canvas,data,1000,35,300,40,5)
       				that.pentagon(canvas,data,1150,10,1270,1300,30,50,6) // ECC
       				that.text(canvas,data,1190,35,300,40,6)
       				// Second Row
       				that.rect(canvas,data,10,80,150,50,7) // Master Data Replication to Ariba  
       				that.text(canvas,data,30,105,120,40,7)
       				that.rect(canvas,data,200,80,340,50,8) // Purchase Requisition Creation 
       				that.text(canvas,data,280,110,300,40,8)
       				that.rect(canvas,data,580,80,340,50,9) // Purchase Order Creation 
       				that.text(canvas,data,670,110,200,40,9)
       				that.rect(canvas,data,960,80,340,50,10) // Goods Receipt  
       				that.text(canvas,data,1080,110,200,40,10)
       				// Third Row
       				that.rect(canvas,data,10,160,150,90,11) // Delta Master Data Extract via custom programs 
       				that.text(canvas,data,35,195,100,40,11)
       				that.rect(canvas,data,200,160,150,90,12) // Purchase Requisition creation/change 
       				that.text(canvas,data,215,205,130,40,12)
       				that.rect(canvas,data,390,160,150,90,13) // Purchase Requisition Validation via PO simulation 
       				that.text(canvas,data,405,195,130,40,13)
       				that.rect(canvas,data,580,160,150,90,14) //  Purchase Order Creation/Change/Cancellation
       				that.text(canvas,data,605,195,100,40,14)
       				that.rect(canvas,data,770,160,150,90,15) //  Purchase Order Replication
       				that.text(canvas,data,800,200,140,40,15)
       				that.rect(canvas,data,960,160,150,90,16) //  Goods Receipt
       				that.text(canvas,data,1010,200,50,40,16)
       				that.rect(canvas,data,1150,160,150,90,17) // Goods Receipt Replication
       				that.text(canvas,data,1170,200,140,40,17)
       				//Lines and Arrow 
       				that.line(canvas,data,160,205,200,205)// Line Connecting index - 8 & 9
       				that.leftArrow(canvas,data,200,205)
       				that.line(canvas,data,350,205,390,205) // Line connecting index - 9 to index - 10
       				that.leftArrow(canvas,data,390,205)
       				that.line(canvas,data,540,205,580,205) // Line Connecting index 11 to index -12
       				that.leftArrow(canvas,data,580, 205)
       				that.line(canvas,data,730,205,770,205) // Line Connecting index -12 to index - 13
       				that.leftArrow(canvas,data,770, 205)
       				that.line(canvas,data,920,205,960,205) // Line Connecting index - 13 & 14
       				that.leftArrow(canvas,data,960, 205)
       				that.line(canvas,data,1110,205,1150,205)// Line Connecting index - 14 & 15
       				that.leftArrow(canvas,data,1150, 205)
       		return canvas;
       		}  , 1000 );
       		
       		},
       		
       		CSRC01A6_Procurement_Subcontracting_Materials :  function(x){
	    var model = this.uisCodeCheck("CSRC01A6");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="Procurement of Subcontracting Materials";
	    setTimeout( function(){
	      x.editPopUp.close();
	      var that=x;
	      var width=5000;
	       var height=6000;
	       var dom;
	       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
	       var canvas = d3.select(ScrollID).append("svg")
	       .attr("width",width)
	       .attr("id","idCanvas")
	       .attr("height",height).append("g")
	       	// First Row
			that.pentagon(canvas,data,10,10,160,190,30,50,0) // CLM
			that.text(canvas,data,70,35,300,40,0)
			that.pentagon(canvas,data,230,10,1460,1490,30,50,1) // ECC
			that.text(canvas,data,840,35,300,40,1)
			// Second Row
			that.rect(canvas,data,10,80,180,50,2) // Purchase Contract Creation Process  
			that.text(canvas,data,25,105,170,40,2)
			that.rect(canvas,data,230,80,150,50,3) // Interface Contract  to ECC 
			that.text(canvas,data,238,110,300,40,3)
			that.rect(canvas,data,420,80,690,50,4) // Procurement process in ECC 
			that.text(canvas,data,670,110,200,40,4)
			that.rect(canvas,data,1150,80,150,50,5) // ECC Issuing Process  
			that.text(canvas,data,1170,110,200,40,5)
			that.rect(canvas,data,1340,80,150,50,6) // ECC Receiving Process 
			that.text(canvas,data,1350,110,200,40,6)
			// Third Row
			that.rect(canvas,data,10,160,180,90,7) // Purchase Contract creation 
			that.text(canvas,data,25,205,200,40,7)
			that.rect(canvas,data,230,160,150,90,8) // Purchase Contract creation 
			that.text(canvas,data,255,205,130,40,8)
			that.rect(canvas,data,420,160,150,90,9) // Purchase Info Record creation (ME11/automatically created when contract is via CLM) 
			that.text(canvas,data,435,185,130,40,9)
			that.rect(canvas,data,595,160,170,90,10) //  Source List generation(Z7MM_SRCGEN/manually via ME01)
			that.text(canvas,data,605,180,60,40,10)
			that.rect(canvas,data,790,160,150,90,11) //  Purchase Requisition Creation(ME51N/MRP Run)
			that.text(canvas,data,800,200,140,40,11)
			that.rect(canvas,data,965,160,145,90,12) //  Purchase Order Creation(ME21N/MD04/ME58/Z7MM_AUTOPO)
			that.text(canvas,data,973,170,50,40,12)
			that.rect(canvas,data,1150,160,150,90,13) // Goods Issue(ME2O /MB1B)
			that.text(canvas,data,1170,200,140,40,13)
			that.rect(canvas,data,1340,160,150,90,14) // Goods Receipt(MIGO)
			that.text(canvas,data,1355,205,140,40,14)
			//Lines and Arrow 

			that.line(canvas,data,190,205,230,205)// Line Connecting index - 8 & 9
			that.leftArrow(canvas,data,230,205)

			that.line(canvas,data,380,205,420,205) // Line connecting index - 9 to index - 10
			that.leftArrow(canvas,data,420,205)
		
			that.line(canvas,data,765,205,790,205) // Line Connecting index 11 to index -12
			that.leftArrow(canvas,data,790, 205)
		
			that.line(canvas,data,940,205,965,205) // Line Connecting index -12 to index - 13
			that.leftArrow(canvas,data,965, 205)
			
			that.line(canvas,data,1110,205,1150,205) // Line Connecting index - 13 & 14
			that.leftArrow(canvas,data,1150, 205)
			
			that.line(canvas,data,1300,205,1340,205)// Line Connecting index - 14 & 15
			that.leftArrow(canvas,data,1340, 205)
       		return canvas;
       		}  , 1000 );
       		
       		},
       		
       		CSRC01B1_TeaBuying_from_LocalVendor :  function(x){
       		    var model = this.uisCodeCheck("CSRC01B1");
       		    var data = sap.ui.getCore().getModel("bindingModel").oData;
       		    x.getView().getModel("oModelHeader").oData.header="Tea Buying from Local Vendor";
       		    setTimeout( function(){
       		      x.editPopUp.close();
       		      var that=x;
       		      var width=1500;
       		       var height=6000;
       		       var dom;
       		       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
       		       var canvas = d3.select(ScrollID).append("svg")
       		       .attr("width",width)
       		       .attr("id","idCanvas")
       		       .attr("height",height).append("g")
   	// First Row
	that.pentagon(canvas,data,10,10,130,160,30,50,0) // SRM
	that.text(canvas,data,70,35,300,40,0)
	
	that.pentagon(canvas,data,200,10,690,720,30,50,1) // ECC Cordillera
	that.text(canvas,data,400,35,300,40,1)
	// Second Row
	that.rect(canvas,data,10,80,150,50,2) // Purchase Order Creation Process  
	that.text(canvas,data,20,105,160,40,2)
	that.rect(canvas,data,200,80,150,50,3) // Interface Order  to Cordillera ECC 
	that.text(canvas,data,230,102,100,40,3)
	that.rect(canvas,data,390,80,330,50,4) // Procurement process in ECC 
	that.text(canvas,data,460,110,200,40,4)
	// Third Row
	that.rect(canvas,data,10,160,150,90,5) // Purchase Order creation
	that.text(canvas,data,20,205,200,40,5)
	that.rect(canvas,data,200,160,150,90,6) // Purchase Order creation(RFC) 
	that.text(canvas,data,235,205,130,40,6)
	that.rect(canvas,data,390,160,150,90,7) // Inbound Delivery Creation/Update/ 
	that.text(canvas,data,400,195,100,40,7)
	that.rect(canvas,data,570,160,150,90,8) //  Goods Receipt(MIGO)
	that.text(canvas,data,605,200,60,40,8)
	//Lines and Arrow 
	that.line(canvas,data,160,205,200,205)// Line Connecting index - 6 & 7
	that.leftArrow(canvas,data,200,205)
	that.line(canvas,data,350,205,390,205) // Line connecting index - 7 to index - 8
	that.leftArrow(canvas,data,390,205)
	that.line(canvas,data,540,205,570,205) // Line Connecting index - 8 to index - 9
	that.leftArrow(canvas,data,570, 205)
       		return canvas;
       		}  , 1000 );
       		
       		},  
       		
       		// Cordillera - Sourcing Integration ends  	   
	

 


      };
    });