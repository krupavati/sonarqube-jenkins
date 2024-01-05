sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/ui/core/routing/History","PF/controllers/BaseController"],
    function(Controller, History,base) {

      return  {
        
        otc_partner : function(x){
          x.getView().getModel("oModelHeader").oData.header="OTC PARTNER DETERMINATION";
          var that=x;
          var width=1900;
           var height=1500;
           var dom;
           var canvas = d3.select("#__xmlview4--idScrollCon").append("svg")
           .attr("width",width)
           .attr("id","idCanvas")
           .attr("height",height).append("g")
          d3.json("model/data1.json",function(data){
            // top system boxes
            that.rect(canvas,data,10,10,1350,40,0);
            that.text(canvas,data,700,35,300,40,0)
            //second line boxes
            that.rect(canvas,data,10,70,300,40,1)
            that.text(canvas,data,60,95,300,40,1)

            that.rect(canvas,data,390,70,970,40,1)
            that.text(canvas,data,770,95,300,40,1)

            //tasks

          that.rect(canvas,data,10,180,300,80,3) //Partner Function and Number in Customer Master
          that.text(canvas,data,15,225,300,80,2)
          that.line(canvas,data,310,220,390,220)
          that.leftArrow(canvas,data,390,220)

          that.rect(canvas,data,10,280,300,80,3) //EDI Partner Determination (VOE4)
          that.text(canvas,data,15,315,300,80,3)
          that.line(canvas,data,310,320,390,320)
          that.leftArrow(canvas,data,390,320)
          that.rect(canvas,data,390,180,300,80,3) //Manual
          that.text(canvas,data,425,225,300,80,4)
          that.line(canvas,data,690,220,780,220)
          that.leftArrow(canvas,data,770,220)

          that.rect(canvas,data,390,280,300,80,3) //EDI Inbound Order Creation(Z2CMTORDERS1230)
          that.text(canvas,data,410,315,300,80,5)
          that.line(canvas,data,690,320,780,320)
          that.leftArrow(canvas,data,770,320)

          that.rect(canvas,data,770,180,300,80,3) //Partner Numbers will be determined from the customer master
          that.text(canvas,data,780,215,300,80,6)
          that.line(canvas,data,1070,220,1120,220)
          that.rect(canvas,data,770,280,300,80,3) //Partner Numbers will be determined using the entries from VOE4 (EDPAR)
          that.text(canvas,data,780,315,300,80,7)
          that.line(canvas,data,1070,320,1120,320)
          that.line(canvas,data,1120,320,1120,220)
          that.line(canvas,data,1120,280,1160,280)
          that.leftArrow(canvas,data,1160,280)
          that.rect(canvas,data,1160,240,210,80,3) //Sales Order Created
          that.text(canvas,data,1180,285,210,80,8)
          })
          return canvas;
        },

        source_GTM : function(x){
          x.getView().getModel("oModelHeader").oData.header="SOURCE SOURCING GTM PROCUREMENT OF FOV V2";
          var that=x;
          var width=1900;
           var height=1500;
           var dom;
           var canvas = d3.select("#__xmlview4--idScrollCon").append("svg")
           .attr("width",width)
           .attr("id","idCanvas")
           .attr("height",height).append("g")
          d3.json("model/source_sourcing_GTM.json",function(data){
            //top line
            that.rect(canvas,data,10,10,300,40,0)
            that.text(canvas,data,140,35,300,40,0)
            that.rect(canvas,data,350,10,1070,40,3)
            that.text(canvas,data,720,35,300,40,3)
            //second line
            that.rect(canvas,data,10,70,300,40,1) // Pre-Trading Contract Creation Process
            that.text(canvas,data,55,95,300,40,1)
            that.rect(canvas,data,350,70,130,50,4)  //Interface  Pre-Trading Contract  to ECC
            that.text(canvas,data,365,95,130,50,4)
            that.rect(canvas,data,530,70,890,40,6)  //Procurement process in ECC
            that.text(canvas,data,900,95,230,40,6)
            //tasks
            that.rect(canvas,data,60,180,130,80,2) //Pre-Trading Contract Creation
            that.text(canvas,data,70,200,130,80,2)
            that.line(canvas,data,190,200,350,200)
            that.leftArrow(canvas,data,350,200)
            that.line(canvas,data,190,240,350,240)
            that.rightArrow(canvas,data,190,240)
            that.rect(canvas,data,350,180,130,80,5) //Pre-Trading  Contract creation(WB21)
            that.text(canvas,data,360,200,130,80,5)
            that.line(canvas,data,480,200,530,200)
            that.leftArrow(canvas,data,530,200)
            that.rect(canvas,data,530,180,120,80,7) //Release Pre-trading contract(WB22)
            that.text(canvas,data,540,200,120,80,7)
            that.line(canvas,data,650,200,700,200)
            that.leftArrow(canvas,data,700,200)
            that.rect(canvas,data,700,180,100,80,8) //Tender Contract Creation(WB21)
            that.text(canvas,data,710,200,100,80,8)
            that.line(canvas,data,800,200,860,200)
            that.leftArrow(canvas,data,860,200)
            that.rect(canvas,data,860,180,100,80,9) //Update/Release Tender Contract(WB22)
            that.text(canvas,data,870,200,100,80,9)
            that.line(canvas,data,960,200,1020,200)
            that.leftArrow(canvas,data,1020,200)
            that.rect(canvas,data,1020,180,100,80,10) //Purchase Contract Creation
            that.text(canvas,data,1040,200,80,80,10)
            that.line(canvas,data,1120,200,1170,200)
            that.leftArrow(canvas,data,1170,200)
            that.rect(canvas,data,1170,180,100,80,11) //Purchase Order Creation(ME21N)
            that.text(canvas,data,1180,200,100,80,11)
            that.line(canvas,data,1270,200,1320,200)
            that.leftArrow(canvas,data,1320,200)
            that.rect(canvas,data,1320,180,100,80,12) //Goods Receipt   (MIGO)
            that.text(canvas,data,1330,200,100,80,12)
          })
          return canvas;

        },

        /*DC_wareHousing_WMS : function(x){
          x.getView().getModel("oModelHeader").oData.header="DC WAREHOUSING DELIVER GOODS RECEIPT USING WMS";

          var that=x;
          var width=1900;
           var height=1500;
           var dom;
           var canvas = d3.select("#__xmlview4--idScrollCon").append("svg")
           .attr("width",width)
           .attr("id","idCanvas")
           .attr("height",height).append("g")
          d3.json("model/DC_ware_deliver_using_WMS.json",function(data){
            //top line
            that.rect(canvas,data,10,10,300,40,0)
            that.text(canvas,data,140,35,300,40,0)
            that.rect(canvas,data,350,10,130,40,13)
            that.text(canvas,data,390,35,130,40,13)
            that.rect(canvas,data,520,10,130,40,0)//Delivery sent to OTM (ZETM)
            that.text(canvas,data,560,35,130,40,0)
            that.rect(canvas,data,710,10,620,40,9)
            that.text(canvas,data,990,35,620,40,9)


            //second line
            that.rect(canvas,data,10,70,300,40,1) // 20px difference from first row
            that.text(canvas,data,55,95,300,40,1)
            that.rect(canvas,data,350,70,130,40,4)
            that.text(canvas,data,360,90,130,40,4)
            that.rect(canvas,data,520,70,130,40,7)//Delivery sent to OTM (ZETM)
            that.text(canvas,data,520,95,130,40,7)
            that.rect(canvas,data,710,70,110,40,10)
            that.text(canvas,data,720,90,110,40,10)
            that.rect(canvas,data,880,70,110,40,14)//
            that.text(canvas,data,890,90,110,40,14)
            that.rect(canvas,data,1050,70,110,40,15)//Delivery Confirmation sent to WMS
            that.text(canvas,data,1060,90,110,40,15)
            that.rect(canvas,data,1220,70,110,40,17)//Delivery Confirmation (WMS200)
            that.text(canvas,data,1230,90,110,40,17)

            //tasks
            that.rect(canvas,data,30,180,110,80,2) //Purchase Order (UB) creation ME21N
            that.text(canvas,data,45,205,110,80,2)
            that.line(canvas,data,140,220,200,220)
            that.leftArrow(canvas,data,200,220)
            that.rect(canvas,data,200,180,110,80,3) //Outbound Delivery creation type NL - Output Z003
            that.text(canvas,data,210,205,110,80,3)
            that.line(canvas,data,310,220,350,220)
            that.leftArrow(canvas,data,350,220)
            that.line(canvas,data,260,160,260,180)
            that.line(canvas,data,260,160,760,160)
            that.line(canvas,data,760,160,760,180)
            that.downArrow(canvas,data,760,180)
            that.rect(canvas,data,350,180,130,80,5)//Delivery sent to OTM (ZETM)
            that.text(canvas,data,360,205,130,70,5)
            that.line(canvas,data,410,260,410,300)
            that.downArrow(canvas,data,410,300)
            that.rect(canvas,data,350,300,130,80,6)//OTM Shipment
            that.text(canvas,data,370,335,130,70,6)
            that.line(canvas,data,480,340,580,340)
            that.line(canvas,data,580,340,580,260)
            that.upArrow(canvas,data,580,260)
            that.rect(canvas,data,520,180,130,80,8)//Shipment 1 created in ECC
            that.text(canvas,data,530,205,130,70,8)
            that.line(canvas,data,650,220,710,220)
            that.leftArrow(canvas,data,710,220)
            that.rect(canvas,data,710,180,110,80,11)//Delivery Instruction (WMS190)
            that.text(canvas,data,710,205,110,70,11)
            that.line(canvas,data,820,220,880,220)
            that.leftArrow(canvas,data,880,220)
            that.rect(canvas,data,880,180,110,80,12)//Delivery Confirmation sent to WMS
            that.text(canvas,data,890,205,110,70,12)
            that.line(canvas,data,990,220,1050,220)
            that.leftArrow(canvas,data,1050,220)
            that.rect(canvas,data,1050,180,110,80,16)//Delivery Confirmation (WMS200)
            that.text(canvas,data,1060,205,110,70,16)
            that.line(canvas,data,1160,220,1220,220)
            that.leftArrow(canvas,data,1220,220)
            that.line(canvas,data,1100,260,1100,280)
            that.line(canvas,data,1100,280,460,280)
            that.line(canvas,data,460,280,460,260)
            that.upArrow(canvas,data,460,260)
            that.rect(canvas,data,1220,180,110,80,18)//Goods Receipt Confirmation for PO (WMS250)
            that.text(canvas,data,1230,205,110,70,18)
            that.line(canvas,data,1280,260,1280,400)
            that.line(canvas,data,1280,400,90,400)
            that.line(canvas,data,90,400,90,260)
            that.upArrow(canvas,data,90,260)

          })
          return canvas;

        },*/





        OTC_customer_delivery : function(x){ //OTC_Customer_Delivery_Process

          x.getView().getModel("oModelHeader").oData.header="OTC Customer Delivery Process";
          var that=x;
          var width=1900;
           var height=1500;
           var dom;
           var canvas = d3.select("#__xmlview4--idScrollCon").append("svg")
           .attr("width",width)
           .attr("id","idCanvas")
           .attr("height",height).append("g")
          d3.json("model/OTC_customer_delivery.json",function(data){
            //top line
            that.rect(canvas,data,10,10,600,40,0)
            that.text(canvas,data,300,35,300,40,0)
            that.rect(canvas,data,650,10,100,40,8)
            that.text(canvas,data,680,35,100,40,8)
            that.rect(canvas,data,780,10,270,40,0)
            that.text(canvas,data,890,35,270,40,0)
            that.rect(canvas,data,1090,10,120,40,8)
            that.text(canvas,data,1130,35,120,40,8)
            //second line
            that.rect(canvas,data,10,70,600,40,1) // ECC Customer Delivery Process
            that.text(canvas,data,255,95,300,40,1)
            that.rect(canvas,data,650,70,100,40,9)  // Interface Delivery to OTM
            that.text(canvas,data,655,85,100,40,9)
            that.rect(canvas,data,780,70,120,40,11) //
            that.text(canvas,data,785,85,120,40,11)
            that.rect(canvas,data,930,70,120,40,14) // ECC ReceivingProcess
            that.text(canvas,data,935,85,120,40,14)
            that.rect(canvas,data,1090,70,120,40,18)  // Interface Actuals idocto OTM
            that.text(canvas,data,1095,85,120,40,18)
            //tasks
            that.rect(canvas,data,10,160,470,40,2) //Outbound Delivery creation(manual/job/automatic upon
            that.text(canvas,data,15,185,470,40,2)
            that.line(canvas,data,480,180,650,180)
            that.leftArrow(canvas,data,650,180)
            that.line(canvas,data,550,180,550,230)
            that.downArrow(canvas,data,550,230)
            that.line(canvas,data,245,200,245,230)
            that.line(canvas,data,60,230,420,230)
            that.line(canvas,data,60,230,60,260)
            that.downArrow(canvas,data,60,260)
            that.line(canvas,data,180,230,180,260)
            that.downArrow(canvas,data,180,260)
            that.line(canvas,data,300,230,300,260)
            that.downArrow(canvas,data,300,260)
            that.line(canvas,data,420,230,420,260)
            that.downArrow(canvas,data,420,260)
            that.rect(canvas,data,10,260,100,70,3)//Delivery due list processing VL10a/job
            that.text(canvas,data,15,275,100,70,3)
            that.rect(canvas,data,130,260,100,70,4)
            that.text(canvas,data,135,275,100,70,4)
            that.rect(canvas,data,250,260,100,70,5)
            that.text(canvas,data,255,285,100,70,5)
            that.rect(canvas,data,370,260,100,70,6)
            that.text(canvas,data,375,285,100,70,6)
            that.rect(canvas,data,490,230,120,80,7)//Delivery instruction Z003 (WMS190 /I003)
            that.text(canvas,data,500,255,120,80,7)
            that.rect(canvas,data,650,160,100,70,10) //Outbound Delivery creation(manual/job/automatic upon
            that.text(canvas,data,655,185,100,70,10)
            that.line(canvas,data,750,180,780,180)
            that.leftArrow(canvas,data,780,180)
            that.rect(canvas,data,780,160,120,70,12) //Shipment created in ECC(SHIPPL)
            that.text(canvas,data,785,185,100,70,12)
            that.line(canvas,data,840,230,840,260)
            that.downArrow(canvas,data,840,260)
            that.line(canvas,data,900,180,930,180)
            that.leftArrow(canvas,data,930,180)
            that.rect(canvas,data,780,260,120,70,13) //Shipment Update to ECC(SHIPPL)
            that.text(canvas,data,790,275,100,70,13)
            that.rect(canvas,data,930,160,120,70,15) //Goods Issue  (WMS200/I006)
            that.text(canvas,data,940,175,100,70,15)
            that.line(canvas,data,990,230,990,260)
            that.downArrow(canvas,data,990,260)
            that.rect(canvas,data,930,260,120,70,16) //Trigger ZACT output
            that.text(canvas,data,940,275,100,70,16)
            that.line(canvas,data,990,330,990,360)
            that.downArrow(canvas,data,990,360)
            that.line(canvas,data,1050,295,1090,295)
            that.leftArrow(canvas,data,1090,295)
            that.rect(canvas,data,930,360,120,70,17) //Creation of On-time Idoc
            that.text(canvas,data,940,375,100,70,17)
            that.line(canvas,data,1050,395,1090,395)
            that.leftArrow(canvas,data,1090,395)
            that.rect(canvas,data,1090,260,120,70,19) //Actuals Idoc sentto OTM(ZSH3)
            that.text(canvas,data,1095,275,100,70,19)
            that.rect(canvas,data,1090,360,120,70,20) //On-time Idoc sentto OTM
            that.text(canvas,data,1100,375,100,70,20)

          })
          return canvas;
        },

        uisCodeCheck : function(uis){
        	sap.ui.getCore().getModel("UISDetailModel").getData("oData").uisCodeInfo = uis;
          $.ajax({
            type : "GET",
            contentType : 'application/json',
            dataType : 'json',
            async: false,
            crossDomain : true,
            url : "http://ocsq051a.eu.unilever.com:8000/sap/opu/odata/sap/ZUIS_MASTER_ABAP_SRV/MasterSet?$filter=Uiscode eq '"+uis+"'",
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
        SSCR01B3_AribaForPM:function(x){
          var model = this.uisCodeCheck("SSRC01B3");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source Sourcing Procurement via Ariba for PM";
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
            /*d3.json(realModel,function(err,data){*/
              /*that.rect(canvas,data,X,Y,Width,Height,Index)*/
                               //COLUMN 1
                //TOP LINE
                that.rect(canvas,data,10,10,150,40,0) //ECC
                that.text(canvas,data,70,35,300,40,0)
                //SECOND LINE
                that.rect(canvas,data,10,80,150,40,1) //Master Data Replication to Ariba
                that.text(canvas,data,30,98,120,40,1)
                //THIRD LINE
                that.rect(canvas,data,10,160,150,60,2) //Delta Master Data Extract via custom programs
                that.text(canvas,data,35,180,100,60,2)
                //COLUMN 2
                //TOP LINE
                that.rect(canvas,data,240,10,350,40,3) //ECC
                that.text(canvas,data,390,35,300,40,3)
                //SECOND LINE
                that.rect(canvas,data,240,80,580,40,4) //Purchase Requisition Creation
                that.text(canvas,data,440,105,680,40,4)
                //THIRD LINE
                that.rect(canvas,data,240,160,180,60,5) //Purchase Requisition creation/change/Cancellation
                that.text(canvas,data,246,190,120,60,5)

               that.line(canvas,data,420,190,480,190)
                that.leftArrow(canvas,data,470,190)

                that.rect(canvas,data,470,160,150,60,6) //Purchase Requisition Released/Extract
                that.text(canvas,data,485,190,150,60,6)

               that.line(canvas,data,620,190,700,190)
                that.leftArrow(canvas,data,670,190)

                that.rect(canvas,data,670,160,150,65,7) //Purchase Requisition Replication to Ariba
                that.text(canvas,data,685,192,150,60,7)
               that.line(canvas,data,820,190,900,190) //This is to connect between Purchase Req replication to ARIBA & Purchase Order Creation/Change/Cancellation
                that.leftArrow(canvas,data,880,190)
                //COLUMN3
                //TOP LINE
                that.rect(canvas,data,670,10,400,40,8) //ARIBA
                that.text(canvas,data,850,35,400,40,8)
                that.rect(canvas,data,880,80,330,40,9) //Purchase Order Creation
                that.text(canvas,data,975,105,330,40,9)
                that.rect(canvas,data,880,160,166,65,10) //Purchase Order Creation/Change/Cancellation
                that.text(canvas,data,895,190,166,65,10)
                //LINE & LEFT ARROW
               that.line(canvas,data,1045,190,1110,190) ////This is to connect between Purchase Order Creation/Change/Cancellation & Purchase Order Replication
                that.leftArrow(canvas,data,1104,190)
                that.rect(canvas,data,1104,160,110,65,11) //Purchase Order Replication
                that.text(canvas,data,1115,190,110,65,11)
                //LINE & LEFT ARROW
               that.line(canvas,data,1214,190,1250,190) ////This is to connect between Purchase Order Replication & Goods Receipt
                that.leftArrow(canvas,data,1250,190)
                //COLUMN4
                that.rect(canvas,data,1150,10,240,40,12) //ECC
                that.text(canvas,data,1250,35,240,40,12)
                that.rect(canvas,data,1250,80,300,40,13) //Good Receipt
                that.text(canvas,data,1360,105,160,40,13)
                that.rect(canvas,data,1250,160,130,65,14) //Good Receipt
                that.text(canvas,data,1272,195,130,65,14)
                //LINE & LEFT ARROW
               that.line(canvas,data,1380,190,1450,190) ////This is to connect between  Goods Receipt & Goods ReceiptReplicatio
                that.leftArrow(canvas,data,1450,190)
                that.rect(canvas,data,1450,160,100,65,16) //Good Receipt Replication
                that.text(canvas,data,1460,190,130,65,16)
                //COLUMN5
                that.rect(canvas,data,1450,10,120,40,15) //ARIBA
                that.text(canvas,data,1490,35,240,40,15)


            /*})*/
            return canvas;
            }  , 1000 );
        },


        SSRC01A9_GTMfoFOV :function(x){
           //
          var model = this.uisCodeCheck("SSRC01A9");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source Sourcing GTM Procurement of FOV V2";
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
            //Column 1
                                         that.rect(canvas,data,10,10,140,40,0) // CSL
                                         that.text(canvas,data,70,35,140,40,0)

                                         that.rect(canvas,data,10,80,140,40,1) // Pre-Trading Contract Creation Process
                                         that.text(canvas,data,20,100,140,40,1)

                                         that.rect(canvas,data,10,150,140,40,2) //Pre-Trading Contract Creation
                                         that.text(canvas,data,20,170,140,40,2)

                                         that.line(canvas,data,150,160,290,160) //Connect between Pre-Trading Contract Creation & Pre-Trading Contract creation(WB21) with RIGHT ARROW
                                         that.rightArrow(canvas,data,150,160)

                                           that.line(canvas,data,150,180,290,180) ////Connect between Pre-Trading Contract Creation & Pre-Trading Contract creation(WB21) with LEFT ARROW
                                           that.leftArrow(canvas,data,250,180)

                                           //Column 2
                                         that.rect(canvas,data,250,10,1300,40,3) //ECC
                                         that.text(canvas,data,800,35,1300,40,3)

                                         that.rect(canvas,data,250,80,140,40,4) //Interface Pre-Trading Contract to ECC
                                         that.text(canvas,data,260,100,140,40,4)

                                         that.rect(canvas,data,250,150,140,40,5) //Pre-Trading Contract creation(WB21)
                                         that.text(canvas,data,260,168,140,40,5)

                                         that.line(canvas,data,390,170,480,170) ////Connect between Pre-Trading Contract creation(WB21) & Release Pre-tradingcontract(WB22)
                                         that.leftArrow(canvas,data,480,170)

                                         //Column 3
                                         that.rect(canvas,data,480,80,1070,40,6) //Procurement process in ECC
                                         that.text(canvas,data,900,105,1070,40,6)

                                         that.rect(canvas,data,480,150,120,40,7) //Release Pre-trading contract(WB22)
                                         that.text(canvas,data,485,168,120,40,7)

                                         that.line(canvas,data,600,170,700,170) //Connect between Release Pre-tradingcontract(WB22) & Tender ContractCreation(WB21)
                                         that.leftArrow(canvas,data,665,170)


                                         that.rect(canvas,data,665,150,110,40,8) //Tender ContractCreation(WB21)
                                         that.text(canvas,data,675,168,110,40,8)

                                         that.line(canvas,data,775,170,830,170) //Connect between Tender ContractCreation(WB21) & Update/Release TenderContract(WB22)
                                         that.leftArrow(canvas,data,830,170)

                                         that.rect(canvas,data,830,150,135,40,9) //Update/Release TenderContract(WB22)
                                         that.text(canvas,data,833,168,135,40,9)


                                         that.line(canvas,data,965,170,1030,170) // Connect between Update/Release TenderContract(WB22) & Purchase Contract Creation
                                         that.leftArrow(canvas,data,1030,170)


                                         that.rect(canvas,data,1030,150,120,40,10) //Purchase Contract Creation
                                         that.text(canvas,data,1040,168,120,40,10)

                                         that.line(canvas,data,1150,170,1220,170) // Connect between Purchase Contract Creation & Purchase Order Creation(ME21N)
                                         that.leftArrow(canvas,data,1220,170)


                                         that.rect(canvas,data,1220,150,130,40,11) //Purchase Order Creation(ME21N)
                                         that.text(canvas,data,1230,168,130,40,11)


                                         that.line(canvas,data,1350,170,1420,170)  // Connect between Purchase Order Creation(ME21N) & Goods Receipt (MIGO)
                                         that.leftArrow(canvas,data,1420,170)

                                         that.rect(canvas,data,1420,150,130,40,12) //Goods Receipt (MIGO)
                                         that.text(canvas,data,1425,168,130,40,12)

            return canvas;
            }  , 1000 );
        },




        SSRC01A4_E4US_SMIviaSA : function(x){
          var model = this.uisCodeCheck("SSRC01A4");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source_Sourcing_Procure Production Items Managed by E4US SMI Vendors via SA_v02";
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
        that.rect(canvas,data,10,10,120,30,0)//CLM
        that.text(canvas,data,50,30,80,30,0)
        that.rect(canvas,data,150,10,540,30,3)//ECC-1
        that.text(canvas,data,400,30,80,30,3)
        that.rect(canvas,data,710,10,400,30,10)//E4US Website/Supplier
        that.text(canvas,data,840,30,150,30,10)
        that.rect(canvas,data,1130,10,250,30,15)//ECC-2
        that.text(canvas,data,1240,30,150,30,15)
        that.rect(canvas,data,1400,10,120,30,19)//OTM
        that.text(canvas,data,1450,30,80,30,19)
        that.rect(canvas,data,1540,10,120,30,21)//ECC-3
        that.text(canvas,data,1590,30,80,30,21)
        that.rect(canvas,data,1680,10,120,30,24)//Supplier
        that.text(canvas,data,1720,30,80,30,24)



        //second line
        that.rect(canvas,data,10,60,120,50,1) // Purchase Contract Creation Process
                that.text(canvas,data,15,80,100,40,1)
        that.rect(canvas,data,150,60,120,50,4)  // Interface Contract  to ECC
                that.text(canvas,data,155,80,100,40,4)
        that.rect(canvas,data,290,60,400,50,6)  // Procurement process in ECC
                that.text(canvas,data,400,90,200,40,6)
        that.rect(canvas,data,710,60,400,50,11) // Supplier Procurement process
                that.text(canvas,data,840,90,200,40,11)
                that.rect(canvas,data,1130,60,250,50,16)  // Procurement process in ECC
                that.text(canvas,data,1170,90,200,40,16)
                 that.rect(canvas,data,1540,60,120,50,22)	// ECC Receiving Process
                that.text(canvas,data,1550,90,100,40,22)

        //tasks
        that.rect(canvas,data,10,130,120,60,2)  // Purchase Contract creation
                that.text(canvas,data,15,150,100,40,2)
                that.line(canvas,data,130,160,150,160)
        that.leftArrow(canvas,data,150,160)
        that.rect(canvas,data,150,130,120,60,5) // Purchase Contract creation
                that.text(canvas,data,155,150,100,40,5)
        that.line(canvas,data,270,160,290,160)
        that.leftArrow(canvas,data,290,160)
                that.rect(canvas,data,290,130,120,60,7)	// Scheduling Agreement (SA) Creation
                that.text(canvas,data,300,150,100,40,7)
                that.line(canvas,data,410,160,430,160)
        that.leftArrow(canvas,data,430,160)
                that.rect(canvas,data,430,130,130,60,8)	// Source List generation(Z7MM_SRCGEN)
                that.text(canvas,data,440,150,100,40,8)

                that.rect(canvas,data,570,130,120,60,9)	// Gross Requirement  and Stock Extract
                that.text(canvas,data,580,150,100,40,9)
                that.line(canvas,data,690,160,710,160)
        that.leftArrow(canvas,data,710,160)
                that.rect(canvas,data,710,130,120,60,12)  // Gross Requirement and Stock Updated
                that.text(canvas,data,720,150,100,40,12)
                 that.line(canvas,data,830,160,850,160)
        that.leftArrow(canvas,data,850,160)
        that.rect(canvas,data,850,130,120,60,13)  // Delivery Proposal Creation
                that.text(canvas,data,860,150,100,40,13)
                 that.line(canvas,data,970,160,1130,160)
        that.leftArrow(canvas,data,1130,160)
        that.rect(canvas,data,990,190,120,60,14)  // Despatch Advice
                that.text(canvas,data,1000,210,100,40,14)
                that.line(canvas,data,1110,220,1260,220)
        that.leftArrow(canvas,data,1260,220)
                that.rect(canvas,data,1130,130,120,60,17) // Schedule Line Creation
                that.text(canvas,data,1140,150,100,40,17)
                 that.line(canvas,data,1250,160,1320,160)
         that.line(canvas,data,1320,160,1320,190)
         that.downArrow(canvas,data,1320,190)
                that.rect(canvas,data,1260,190,120,60,18)	// Inbound Delivery Creation
                that.text(canvas,data,1270,210,100,40,18)
                that.line(canvas,data,1380,220,1400,220)
                that.leftArrow(canvas,data,1400,220)
                that.rect(canvas,data,1400,190,120,60,20)	// Delivery sent to OTM (ZETM/TPSDLS)
                that.text(canvas,data,1410,210,100,40,20)
                 that.rect(canvas,data,1540,130,120,60,23) // Goods Receipt (MIGO)
                that.text(canvas,data,1550,150,100,40,23)
                 that.line(canvas,data,1660,160,1680,160)
        that.leftArrow(canvas,data,1680,160)
                that.rect(canvas,data,1680,130,120,60,25) // Receipt Advice
                that.text(canvas,data,1690,150,100,40,25)
            return canvas;
            }  , 1000 );
        },


        SSRC01B2_TEA_foreginVia_UAPL : function(x){

          var model = this.uisCodeCheck("SSRC01B2");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source Sourcing Tea Buying from Foreign Vendor via UAPL V3";
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
        that.rect(canvas,data,10,10,120,30,0)//SRM
                that.text(canvas,data,50,30,80,30,0)
        that.rect(canvas,data,150,10,580,30,3)//ECC U2K2
        that.text(canvas,data,400,30,80,30,3)
        that.rect(canvas,data,750,10,450,30,11)//ECC Sirius
        that.text(canvas,data,960,30,90,30,11)
        //second line
        that.rect(canvas,data,10,60,120,50,1) //Purchase Order Creation Process
                that.text(canvas,data,15,80,100,40,1)
        that.rect(canvas,data,150,60,120,50,4)  // Interface Order  to U2K2 ECC
                that.text(canvas,data,155,80,100,40,4)
        that.rect(canvas,data,290,60,440,50,6)  // Procurement process in ECC
                that.text(canvas,data,400,90,200,40,6)
        that.rect(canvas,data,750,60,120,50,12) // Interface Order  to Sirius ECC
                that.text(canvas,data,760,80,100,40,12)
                that.rect(canvas,data,890,60,310,50,14)	// Procurement and Receiving process in ECC
                that.text(canvas,data,900,80,250,40,14)

        //tasks
        that.rect(canvas,data,10,130,120,60,2)  // Purchase Order creation
                that.text(canvas,data,15,150,100,40,2)
                that.line(canvas,data,130,160,150,160)
        that.leftArrow(canvas,data,150,160)
        that.rect(canvas,data,150,130,120,60,5) // Purchase Order creation (RFC)
                that.text(canvas,data,155,150,100,40,5)
        that.line(canvas,data,270,160,290,160)
        that.leftArrow(canvas,data,290,160)
                that.rect(canvas,data,290,130,120,60,7)	// Inbound Delivery Creation (Upload program)
                that.text(canvas,data,300,150,100,40,7)
                that.line(canvas,data,410,160,430,160)
        that.leftArrow(canvas,data,430,160)
                that.rect(canvas,data,430,130,140,60,8)	// Automatic Goods Receipts (YR1UMM_PUR0052)
                that.text(canvas,data,440,150,100,40,8)
                that.line(canvas,data,570,160,590,160)
        that.leftArrow(canvas,data,590,160)
                that.rect(canvas,data,590,130,140,60,9)	// Automatic creation of  Sales Order (YR1UMM_PUR0052)
                that.text(canvas,data,600,150,110,40,9)
                that.line(canvas,data,730,160,750,160)
        that.leftArrow(canvas,data,750,160)
                that.line(canvas,data,660,190,660,210)
                that.downArrow(canvas,data,660,210)
                that.rect(canvas,data,590,210,140,70,10)  // Automatic creation Outbound Delivery and Goods Issue (YR1UMM_PUR0052)
                that.text(canvas,data,600,230,110,40,10)
                that.rect(canvas,data,750,130,120,60,13)  // Level 2 Purchase Order creation (IDoc)
                that.text(canvas,data,760,150,110,40,13)
                that.line(canvas,data,870,160,890,160)
        that.leftArrow(canvas,data,890,160)
                that.rect(canvas,data,890,130,170,60,15)  // Inbound Delivery Creation (ZIBX Output/ZGSEIBD_UPLOAD)
                that.text(canvas,data,900,150,150,40,15)
                that.line(canvas,data,1060,160,1080,160)
        that.leftArrow(canvas,data,1080,160)
        that.rect(canvas,data,1080,130,120,60,16) // Goods Receipt (MIGO)
                that.text(canvas,data,1090,150,100,40,16)

            return canvas;
            }  , 1000 );
        },

        SSRC01B1TEA_localVendor : function(x){
          var model = this.uisCodeCheck("SSRC01B1");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source Sourcing Tea Buying from Local Vendor v02";
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
        that.rect(canvas,data,10,10,120,30,0)//SRM
                that.text(canvas,data,50,30,80,30,0)
        that.rect(canvas,data,150,10,450,30,3)//ECC Sirius
        that.text(canvas,data,300,30,80,30,3)
        //second line
        that.rect(canvas,data,10,60,120,50,1) //Purchase Order Creation Process
                that.text(canvas,data,15,80,100,40,1)
        that.rect(canvas,data,150,60,120,50,4)  // Interface Order  to U2K2 ECC
                that.text(canvas,data,155,80,100,40,4)
        that.rect(canvas,data,290,60,310,50,6)  //Procurement process in ECC
                that.text(canvas,data,350,90,200,40,6)
        //tasks
        that.rect(canvas,data,10,130,120,60,2)  //Purchase Order creation
                that.text(canvas,data,15,150,100,40,2)
                that.line(canvas,data,130,160,150,160)
        that.leftArrow(canvas,data,150,160)
        that.rect(canvas,data,150,130,120,60,5) // Purchase Order creation (RFC)
                that.text(canvas,data,155,150,100,40,5)
        that.line(canvas,data,270,160,290,160)
        that.leftArrow(canvas,data,290,160)
                that.rect(canvas,data,290,130,150,60,7)	// Inbound Delivery Creation/Update/Delete (Upload program)
                that.text(canvas,data,300,150,140,40,7)
                that.line(canvas,data,440,160,460,160)
        that.leftArrow(canvas,data,460,160)
                that.rect(canvas,data,460,130,140,60,8)	// Goods Receipt   (MIGO)
                that.text(canvas,data,470,150,100,40,8)

            return canvas;
            }  , 1000 );
        },

        SDEL05D4_Stock_Reconciliation : function(x){
          var model = this.uisCodeCheck("SDEL05D4");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="DC Warehousing Deliver Stock Reconciliation Process_V4";
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
          ///////////////      column1     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,10,10,420,40,0) // ECC
            that.text(canvas,data,200,30,150,40,0)

            that.rect(canvas,data,10,70,420,60,1) // Stock Reconciliation - SAP Stock Levels Extraction
            that.text(canvas,data,70,100,1000,40,1)

            that.rect(canvas,data,10,150,420,60,2) // Program Z2WMS0481
            that.text(canvas,data,150,180,150,40,2)
            that.line(canvas,data,215,210,215,230) // central vertical line
            that.line(canvas,data,105,230,320,230) //horizontal line
            that.line(canvas,data,105,230,105,250) // output line to " Tables Z2WMSREC_TIME_WH and Z2WMSREC_TIME_CS (System SAP)"
            that.downArrow(canvas,data,105,250)

            that.line(canvas,data,320,230,320,250) //output line to "Tables Z2WMSREC_SAP_WH and Z2WMSREC_SAP_CGS"
            that.downArrow(canvas,data,320,250)


            that.rect(canvas,data,10,250,200,80,3) // Tables Z2WMSREC_TIME_WH and Z2WMSREC_TIME_CS (System SAP)
            that.text(canvas,data,30,270,160,40,3)

            that.rect(canvas,data,230,250,200,80,4) // Tables Z2WMSREC_SAP_WH and Z2WMSREC_SAP_CGS
            that.text(canvas,data,250,270,160,40,4)


///////////////      column2     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,450,10,200,40,5) // WMS
            that.text(canvas,data,530,30,150,40,5)

            that.rect(canvas,data,450,70,200,60,6) // Stock Snapshot Interface
            that.text(canvas,data,480,100,150,40,6)

            that.rect(canvas,data,450,150,200,60,7) // Stock Snapshot Interface sent to SAP
            that.text(canvas,data,480,180,150,40,7)


///////////////      column3     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,670,10,900,40,8) // ECC
            that.text(canvas,data,1100,30,150,40,8)
            that.rect(canvas,data,670,70,480,60,9) // Stock Snapshot Interface
            that.text(canvas,data,800,100,150,40,9)
            that.rect(canvas,data,670,150,480,60,10) // Stock Snapshot IDoc received from WMS Msg type: Z2WMSTKLVLZ330
            that.text(canvas,data,690,180,1000,40,10)
            that.line(canvas,data,910,210,910,230,910)// center vertical line
            that.line(canvas,data,785,230,1035,230)   // horizontal line
            that.line(canvas,data,785,230,785,250)    // output line to "Tables Z2WMSREC_TIME_WH and Z2WMSREC_TIME_CS (System WMS)"
            that.downArrow(canvas,data,785,250)
            that.line(canvas,data,1035,230,1035,250)   // output line to "Tables Z2WMSREC_3PLP_WH and Z2WMSREC_3PLP_CS"
            that.downArrow(canvas,data,1035,250)
            that.rect(canvas,data,670,250,230,80,11) // Tables Z2WMSREC_TIME_WH and Z2WMSREC_TIME_CS (System WMS)
            that.text(canvas,data,690,270,160,40,11)
            that.rect(canvas,data,920,250,230,80,12) // Tables Z2WMSREC_3PLP_WH and Z2WMSREC_3PLP_CS
            that.text(canvas,data,940,270,160,40,12)
            that.rect(canvas,data,1170,70,400,60,13) // Stock Reconcilation
            that.text(canvas,data,1300,100,150,40,13)
            that.rect(canvas,data,1170,150,400,60,14) // Transaction  ZREC Stock Reconciliation Report
            that.text(canvas,data,1240,180,1000,40,14)

            return canvas;
            }  , 1000 );

        },

        SSRC01A3_Procure_prodViaSA : function(x){

          var model = this.uisCodeCheck("SSRC01A3");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source Sourcing Procurement via_SA_V3";
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


           // First line
            that.rect(canvas,data,10,10,130,50,0) // CLM
            that.text(canvas,data,65,40,300,40,0)
            that.rect(canvas,data,10,80,130,50,1) // Purchase Contract Creation Process
            that.text(canvas,data,20,100,120,40,1)
            that.rect(canvas,data,10,150,130,50,2) // Purchase Contract creation
            that.text(canvas,data,20,170,140,40,2)

            // Second Line
            that.rect(canvas,data,200,10,820,50,3)  // ECC
            that.text(canvas,data,560,35,300,40,3)
            that.rect(canvas,data,200,80,120,50,4)   // Interface Contract  to ECC
            that.text(canvas,data,210,100,110,40,4)
            that.rect(canvas,data,200,150,120,50,5)  // Purchase Contract creation
            that.text(canvas,data,205,170,140,40,5)
            that.rect(canvas,data,370,80,650,50,6)   // Procurement process in ECC
            that.text(canvas,data,590,103,200,40,6)
            that.rect(canvas,data,370,150,120,50,7)   // Scheduling Agreement (SA) Creation (ME31L)
            that.text(canvas,data,375,165,100,40,7)
            that.rect(canvas,data,540,150,130,50,8)   // Source List generation (Z7MM_SRCGEN)
            that.text(canvas,data,543,165,130,40,8)
            that.rect(canvas,data,720,150,140,50,9)   // Schedule line Creation (ME38/MRP Run)
            that.text(canvas,data,730,165,170,40,9)

            that.rect(canvas,data,720,230,150,50,10)   // Communicate to Supplier
            that.text(canvas,data,730,255,170,40,10)
            that.rect(canvas,data,720,310,150,50,11)   // Suppliers
            that.text(canvas,data,760,335,170,40,11)

            that.rect(canvas,data,900,150,120,50,12)   // Inbound Delivery Creation (ZIBD)
            that.text(canvas,data,910,165,100,40,12)

            // Third Line
            that.rect(canvas,data,1080,10,150,50,13)  // OTM
            that.text(canvas,data,1130,35,300,40,13)
            that.rect(canvas,data,1080,150,150,50,14)  // Delivery sent to OTM (ZETM/TPSDLS)
            that.text(canvas,data,1090,165,170,40,14)

            //Fourth Line
            that.rect(canvas,data,1280,10,150,50,15) // ECC
            that.text(canvas,data,1330,35,300,40,15)
            that.rect(canvas,data,1280,80,150,40,16)   // ECC Receiving Process
            that.text(canvas,data,1290,95,140,50,16)
            that.rect(canvas,data,1280,150,150,50,17)   // Goods Receipt   (MIGO)
            that.text(canvas,data,1290,175,140,40,17)

            // Line And Arrow
            that.line(canvas,data,140,170,200,170) // line connecting index - 2 & index - 5
            that.leftArrow(canvas,data,200,170)


            that.line(canvas,data,320,170,370,170) // line connecting index - 5 & index - 8
            that.leftArrow(canvas,data,370,170)


            that.line(canvas,data,490,170,540,170) // line connecting index - 7 & index - 8
            that.leftArrow(canvas,data,540,170)


            that.line(canvas,data,670,170,720,170) // line connecting index - 8 & index - 9
            that.leftArrow(canvas,data,720,170)

            that.line(canvas,data,790,200,790,230) // line connecting index - 9 & index - 10
            that.downArrow(canvas,data,790,230)

            that.line(canvas,data,790,280,790,310) // line connecting index - 10 & index - 11
            that.downArrow(canvas,data,790,310)




            return canvas;
            }  , 1000 );
        },
        SSRC01A6_Subcontracting : function(x){


          var model = this.uisCodeCheck("SSRC01A6");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source Sourcing Procurement of Subcontracting Materials V1";
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
          ///////////////      column1     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,10,10,170,40,0) // CLM
            that.text(canvas,data,90,30,150,40,0)

            that.rect(canvas,data,10,60,170,70,1) //Purchase Contract Creation Process
            that.text(canvas,data,30,90,150,40,1)

            that.rect(canvas,data,10,150,170,80,2) // Purchase Contract creation
            that.text(canvas,data,30,180,140,40,2)
            that.line(canvas,data,180,190,220,190) //output line to column 2 "Purchase Contract creation"
            that.leftArrow(canvas,data,220,190)

///////////////      column2     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,220,10,1320,40,3) // ECC
            that.text(canvas,data,800,30,150,40,3)

            that.rect(canvas,data,220,60,170,70,4) // Interface Contract  to ECC
            that.text(canvas,data,240,90,150,40,4)

            that.rect(canvas,data,220,150,170,80,5) // Purchase Contract creation
            that.text(canvas,data,230,180,150,40,5)
            that.line(canvas,data,390,190,410,190) // output line to "Purchase Info Record creation (ME11)"
            that.leftArrow(canvas,data,410,190)

            that.rect(canvas,data,410,60,740,70,6) //Procurement process in ECC
            that.text(canvas,data,650,90,1000,40,6)

            that.rect(canvas,data,410,150,170,80,7) //Purchase Info Record creation (ME11)
            that.text(canvas,data,420,180,150,40,7)

            that.rect(canvas,data,600,150,170,80,8) //Source List generation (Z7MM_SRCGEN)
            that.text(canvas,data,620,180,150,40,8)
            that.line(canvas,data,770,190,790,190) // output line to "Purchase Requisition Creation (ME51N/MRP Run)"
            that.leftArrow(canvas,data,790,190)

            that.rect(canvas,data,790,150,170,80,9) //Purchase Requisition Creation (ME51N/MRP Run)
            that.text(canvas,data,810,180,150,40,9)
            that.line(canvas,data,960,190,980,190) // output line to "Purchase Order Creation (ME21N/MD04/ME58/Z7MM_AUTOPO)"
            that.leftArrow(canvas,data,980,190)

            that.rect(canvas,data,980,150,170,80,10) // Purchase Order Creation (ME21N/MD04/ME58/Z7MM_AUTOPO)
            that.text(canvas,data,1000,180,150,40,10)
            that.line(canvas,data,1150,190,1170,190) // output line to "Goods Issue (ME2O/MB1B)"
            that.leftArrow(canvas,data,1170,190)

            that.rect(canvas,data,1170,60,170,70,11) // ECC Issuing Process
            that.text(canvas,data,1190,90,150,40,11)

            that.rect(canvas,data,1170,150,170,80,12) // Goods Issue (ME2O/MB1B)
            that.text(canvas,data,1180,180,150,40,12)
            that.line(canvas,data,1340,190,1360,190) // output line to "Goods Receipt (MIGO)"
            that.leftArrow(canvas,data,1360,190)

            that.rect(canvas,data,1360,60,170,70,13) // ECC Receiving Process
            that.text(canvas,data,1380,90,150,40,13)

            that.rect(canvas,data,1360,150,170,80,14) // Goods Receipt (MIGO)
            that.text(canvas,data,1380,180,150,40,14)
            return canvas;
            }  , 1000 );


        },
        SSRC01A1_Procurement_via_PO : function(x){
          var model = this.uisCodeCheck("SSRC01A1");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source Sourcing Procurement via PO_v3";
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
        // First line
            that.rect(canvas,data,10,10,150,40,0) // CLM
            that.text(canvas,data,70,35,250,40,0)
            that.rect(canvas,data,10,80,150,40,1) // Purchase Contract Creation Process
            that.text(canvas,data,40,100,140,40,1)
            that.rect(canvas,data,10,150,150,50,2) // Purchase Contract creation
            that.text(canvas,data,40,170,140,40,2)

            // Second Line
            that.rect(canvas,data,210,10,950,40,3)  // ECC
            that.text(canvas,data,670,35,300,40,3)
            that.rect(canvas,data,210,80,150,40,4)   // Interface Contract  to ECC
            that.text(canvas,data,220,100,140,50,4)
            that.rect(canvas,data,210,150,150,50,5)  // Purchase Contract creation
            that.text(canvas,data,220,170,140,40,5)
            that.rect(canvas,data,410,80,750,40,6)   // Procurement process in ECC
            that.text(canvas,data,670,103,200,40,6)
            that.rect(canvas,data,410,150,120,50,7)   // Source List generation (Z7MM_SRCGEN)
            that.text(canvas,data,420,165,70,40,7)
            that.rect(canvas,data,580,150,130,50,8)   // Purchase Requisition Creation (ME51N/MRP Run)
            that.text(canvas,data,590,165,120,40,8)
            that.rect(canvas,data,760,150,230,50,9)   // Purchase Order Creation (ME21N/MD04/ME58/Z7MM_AUTOPO)
            that.text(canvas,data,770,170,200,40,9)
            that.rect(canvas,data,1040,150,120,50,10)   // Inbound Delivery Creation (ZIBD)
            that.text(canvas,data,1050,171,100,40,10)

            // Third Line
            that.rect(canvas,data,1210,10,150,40,11)  // OTM
            that.text(canvas,data,1270,35,300,40,11)
            that.rect(canvas,data,1210,150,150,50,12)  // Delivery sent to OTM (ZETM/TPSDLS)
            that.text(canvas,data,1220,170,140,40,12)

            //Fourth Line
            that.rect(canvas,data,1400,10,150,40,13) // ECC
            that.text(canvas,data,1460,35,300,40,13)
            that.rect(canvas,data,1400,80,150,40,14)   // ECC Receiving Process
            that.text(canvas,data,1410,103,140,40,14)
            that.rect(canvas,data,1400,150,150,50,15)   // Goods Receipt   (MIGO)
            that.text(canvas,data,1410,173,140,40,15)

            // Line And Arrow
            that.line(canvas,data,160,175,210,175) // line connecting index - 2 & index - 5
            that.leftArrow(canvas,data,210,175);

            that.line(canvas,data,360,175,410,175) // line connecting index - 5 & index - 7
            that.leftArrow(canvas,data,410,175);

            that.line(canvas,data,530,175,580,175) // line connecting index - 7 & index - 8
            that.leftArrow(canvas,data,580,175);

            that.line(canvas,data,710,175,760,175) // line connecting index - 8 & index - 9
            that.leftArrow(canvas,data,760,175);

            that.line(canvas,data,990,175,1040,175) // line connecting index - 9 & index - 10
            that.leftArrow(canvas,data,1040,175);


            that.line(canvas,data,1160,175,1210,175) // line connecting index - 10 & index - 12
            that.leftArrow(canvas,data,1210,175);

            return canvas;
            }  , 1000 );
        },

        SSRC01A5_Printed_pack_mat : function(x){

          var model = this.uisCodeCheck("SSRC01A5");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source Sourcing Procurement of Printed Packaging material_V1";
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
        ///////////////      column1     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,10,10,150,40,0) // CLM
            that.text(canvas,data,75,30,150,40,0)

            that.rect(canvas,data,10,60,150,70,1) //Purchase Contract Creation Process
            that.text(canvas,data,20,90,150,40,1)

            that.rect(canvas,data,10,150,150,80,2) // Purchase Contract creation
            that.text(canvas,data,20,180,140,40,2)
            that.line(canvas,data,160,190,180,190) //output line to column 2 "Purchase Contract creation"
            that.leftArrow(canvas,data,180,190)


///////////////      column2     //////////////////////////////////////////////////////////////////////////

            //left boxes
            that.rect(canvas,data,180,10,1000,40,3) // ECC
            that.text(canvas,data,580,30,150,40,3)

            that.rect(canvas,data,180,60,150,70,4) // Interface Contract  to ECC
            that.text(canvas,data,185,95,150,40,4)

            that.rect(canvas,data,180,150,150,80,5) // Purchase Contract creation
            that.text(canvas,data,190,180,140,40,5)
            that.line(canvas,data,330,190,350,190) // output line to "Print Release Creation (Z7MM_PRNTREL)"
            that.leftArrow(canvas,data,350,190)


            //right boxes
            that.rect(canvas,data,350,60,830,70,6) //Procurement process in ECC
            that.text(canvas,data,630,90,1000,40,6)

            that.rect(canvas,data,350,150,150,80,7) // Print Release Creation (Z7MM_PRNTREL)
            that.text(canvas,data,360,180,150,40,7)
            that.line(canvas,data,500,190,520,190) // output line to "Source List generation (Z7MM_SRCGEN)"
            that.leftArrow(canvas,data,520,190)

            that.rect(canvas,data,520,150,150,80,8) // Source List generation (Z7MM_SRCGEN)
            that.text(canvas,data,530,180,150,40,8)
            that.line(canvas,data,670,190,690,190) // output line to "Purchase Requisition Creation (ME51N/MRP Run)"
            that.leftArrow(canvas,data,690,190)

            that.rect(canvas,data,690,150,150,80,9) // Purchase Requisition Creation (ME51N/MRP Run)
            that.text(canvas,data,700,180,150,40,9)
            that.line(canvas,data,840,190,860,190) // output line to "Purchase Order Creation (ME21N/MD04/ME58/Z7MM_AUTOPO)"
            that.leftArrow(canvas,data,860,190)

            that.rect(canvas,data,860,150,150,80,10) // Purchase Order Creation (ME21N/MD04/ME58/Z7MM_AUTOPO)
            that.text(canvas,data,870,180,150,40,10)
            that.line(canvas,data,1010,190,1030,190) //output line to "Inbound Delivery Creation (ZIBD)"
            that.leftArrow(canvas,data,1030,190)

            that.rect(canvas,data,1030,150,150,80,11) // Inbound Delivery Creation (ZIBD)
            that.text(canvas,data,1050,180,140,40,11)
            that.line(canvas,data,1180,190,1200,190) // output line to column3 "Delivery sent to OTM (ZETM/TPSDLS)"
            that.leftArrow(canvas,data,1200,190)


///////////////      column3     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,1200,10,150,40,12) // OTM
            that.text(canvas,data,1260,30,150,40,12)

            that.rect(canvas,data,1200,150,150,80,13) // Delivery sent to OTM (ZETM/TPSDLS)
            that.text(canvas,data,1220,180,150,40,13)

///////////////      column4     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,1370,10,200,40,14) // ECC
            that.text(canvas,data,1460,30,150,40,14)

            that.rect(canvas,data,1380,60,180,70,15) // ECC Receiving Process
            that.text(canvas,data,1400,90,150,40,15)

            that.rect(canvas,data,1380,150,180,80,16) // Goods Receipt (MIGO)
            that.text(canvas,data,1400,180,150,40,16)
            return canvas;
            }  , 1000 );


        },

        SSRC01A8_Transport_Management : function(x){


          var model = this.uisCodeCheck("SSRC01A8");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source Sourcing Service Procurement for Transport Management";
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
        that.rect(canvas,data,200,10,800,40,0)//ECC
        that.text(canvas,data,600,35,300,40,0)//ECC


        //second line
        that.rect(canvas,data,200,70,150,40,1)//File from UTMS Planner
        that.text(canvas,data,210,95,150,40,1)//File from UTMS Planner

        that.rect(canvas,data,380,70,620,40,3)//Procurement process in ECC
        that.text(canvas,data,580,95,300,40,3)//Procurement process in ECC



        //tasks
        that.rect(canvas,data,200,130,100,70,2)//Received text file from UTMS planner via email
        that.text(canvas,data,205,155,100,70,2)//Received text file from UTMS planner via email

        that.line(canvas,data,300,165,390,165)//from Received text filefrom UTMSplanner via email to Upload text file forPO generationZSERV_POR2
        that.leftArrow(canvas,data,390,165)//from Received text filefrom UTMSplanner via email to Upload text file forPO generationZSERV_POR2

        that.rect(canvas,data,390,130,110,70,4)//Upload text file forPO generationZSERV_POR2
        that.text(canvas,data,395,155,110,70,4)//Upload text file forPO generationZSERV_POR2

        that.line(canvas,data,500,165,620,165)//from Upload text file forPO generationZSERV_POR2 to Release PurchaseOrderME28/Z2SRC0550
        that.leftArrow(canvas,data,620,165)//from Upload text file forPO generationZSERV_POR2 to Release PurchaseOrderME28/Z2SRC0550

        that.rect(canvas,data,620,130,110,70,5)//Release Purchase Order ME28/Z2SRC0550
        that.text(canvas,data,625,155,110,70,5)//Release Purchase Order ME28/Z2SRC0550

        that.line(canvas,data,730,165,850,165)//from Release Purchase Order ME28/Z2SRC0550 to Post Service EntrySheet and ServiceAcceptanceZSERV_ACC
        that.leftArrow(canvas,data,850,165)//from Release Purchase Order ME28/Z2SRC0550 to Post Service EntrySheet and ServiceAcceptanceZSERV_ACC

        that.rect(canvas,data,850,130,110,70,6)//Post Service Entry Sheet and Service Acceptance ZSERV_ACC
        that.text(canvas,data,855,150,110,70,6)//Post Service Entry Sheet and Service Acceptance ZSERV_ACC
            return canvas;
            }  , 1000 );



        },

      //********************Integrated on May 16th*****************************************************

      //ARIBA for NPI

        SSRC01B4_AribaForNPI : function(x)
        {
          var model = this.uisCodeCheck("SSRC01B4");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source_Sourcing_Procurement via Ariba for NPI";
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

             //Column 1
          that.rect(canvas,data,10,10,110,40,0) //ECC
          that.text(canvas,data,50,35,110,40,0)

          that.rect(canvas,data,10,80,110,50,1) //Master Data Replication to Ariba
          that.text(canvas,data,12,103,110,50,1)

          that.rect(canvas,data,10,150,110,60,2) //Delta Master DataExtract via custom program
          that.text(canvas,data,15,172,110,60,2)

          that.line(canvas,data,120,185,160,185)
          that.leftArrow(canvas,data,160,185)


          //Column 2

          that.rect(canvas,data,160,10,125,40,3) //ARIBA
          that.text(canvas,data,205,35,125,40,3)

          that.rect(canvas,data,160,80,312,50,4) //Purchase Requisition Creation
          that.text(canvas,data,230,110,312,50,4)

          that.rect(canvas,data,160,150,125,60,5) //Purchase Requisition Creation/Change
          that.text(canvas,data,165,180,125,60,5)

          that.line(canvas,data,285,185,349,185)
          that.leftArrow(canvas,data,350,185)

          that.rect(canvas,data,345,10,125,40,6) //ECC
          that.text(canvas,data,395,35,125,40,6)

          that.rect(canvas,data,350,150,125,60,7) //Purchase Requisition Validation via PO simulatio
          that.text(canvas,data,355,173,125,60,7)

          that.line(canvas,data,475,185,530,185)
          that.leftArrow(canvas,data,530,185)

          that.rect(canvas,data,530,10,125,40,8) //ARIBA
          that.text(canvas,data,575,35,125,40,8)

          that.rect(canvas,data,530,80,312,50,9) //Purchase Order Creation
          that.text(canvas,data,620,110,312,50,9)

          that.rect(canvas,data,530,150,125,60,10) //Purchase Order Creation/Change/Cancellation
          that.text(canvas,data,545,173,125,60,10)

          that.line(canvas,data,655,185,720,185)
          that.leftArrow(canvas,data,720,185)

          that.rect(canvas,data,720,10,125,40,11) //ECC
          that.text(canvas,data,770,35,125,40,11)

          that.rect(canvas,data,720,150,125,60,12) //Purchase Order Replication
          that.text(canvas,data,740,180,125,60,12)

          that.line(canvas,data,845,185,930,185)
          that.leftArrow(canvas,data,930,185)

          that.rect(canvas,data,930,10,125,40,13) //ARIBA
          that.text(canvas,data,970,35,125,40,13)

          that.rect(canvas,data,930,80,312,50,14) //Goods Receipt
          that.text(canvas,data,1040,110,312,50,14)

          that.rect(canvas,data,930,150,125,60,15) //Goods Receipt
          that.text(canvas,data,952,185,125,60,15)

          that.line(canvas,data,1055,185,1115,185)
          that.leftArrow(canvas,data,1115,185)

          that.rect(canvas,data,1115,10,125,40,16) //ECC
          that.text(canvas,data,1165,35,125,40,16)

          that.rect(canvas,data,1115,150,125,60,17) //Purchase Order Replication
          that.text(canvas,data,1136,180,125,60,17)

            return canvas;
            }  , 1000 );
        },


        //Primary Transportation_Deliver_Z2ICT_Flow_Planned Load TR

        SDEL04D2_Z2ICT_PlannedLoad_TR : function(x)
        {
          var model = this.uisCodeCheck("SDEL04D2_1");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Primary Transportation_Deliver_Z2ICT_Flow_Planned Load TR";
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


             //------------------------Planned Load PO - Transport Relevant-------------------------------------------//
             ///////////////      column1     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,10,10,260,40,0) // ECC
            that.text(canvas,data,120,30,150,40,0)

            that.rect(canvas,data,10,70,260,60,1)  // Inter Company Transfer (ICT)
            that.text(canvas,data,50,100,200,40,1)

            that.freeText(canvas,data,20,200,1000,40,2,"30px") // Planned Load PO - Transport Relevant

            that.rect(canvas,data,10,240,120,80,3) // Purchase Order creation (UB/NB for Greece) ME21N
            that.text(canvas,data,20,270,130,40,3)
            that.line(canvas,data,130,280,150,280) // output line to "Outbound Delivery creation [ZETM]"
            that.leftArrow(canvas,data,150,280)

            that.rect(canvas,data,150,240,120,80,4) // Outbound Delivery creation [ZETM]
            that.text(canvas,data,160,270,130,40,4)
            that.line(canvas,data,270,260,290,260) // output line to column 2 "Delivery sent to OTM [ZETM/TPSDLS]"
            that.leftArrow(canvas,data,290,260)
            that.line(canvas,data,270,290,290,290)  // input line from column 2 "Delivery sent to OTM [ZETM/TPSDLS]"
            that.rightArrow(canvas,data,270,290)


            ///////////////      column2     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,290,10,120,40,5) // OTM
            that.text(canvas,data,335,30,150,40,5)

            that.rect(canvas,data,290,70,120,60,6) // Interface Delivery to OTM
            that.text(canvas,data,300,100,100,40,6)

            that.rect(canvas,data,290,240,120,80,7) // Delivery sent to OTM [ZETM/TPSDLS]
            that.text(canvas,data,300,270,100,40,7)
            that.line(canvas,data,350,320,350,340) // output line to "OTM Shipment"
            that.downArrow(canvas,data,350,340)


            that.rect(canvas,data,290,340,120,80,8) // OTM Shipment
            that.text(canvas,data,300,370,100,40,8)
            that.line(canvas,data,410,380,420,380) // outputline to column3 "Shipment created in ECC (SHIPPL)"
            that.line(canvas,data,420,380,420,280)
            that.line(canvas,data,420,280,430,280)
            that.leftArrow(canvas,data,430,280)


            ///////////////      column3     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,430,10,580,40,9) // ECC
            that.text(canvas,data,660,30,150,40,9)

            that.rect(canvas,data,430,70,260,60,10) // OTM Shipment Interface
            that.text(canvas,data,490,100,1000,40,10)

            that.rect(canvas,data,430,240,120,80,11) // Shipment created in ECC (SHIPPL)
            that.text(canvas,data,440,270,100,40,11)
            that.line(canvas,data,550,280,570,280)   // output line to "Delivery Linkage"
            that.leftArrow(canvas,data,570,280)

            that.rect(canvas,data,420,390,180,50,12) // Shipment Acknowledgement Interface
            that.text(canvas,data,430,410,200,40,12)
            that.line(canvas,data,600,415,670,415) // output line to "Shipment Acknowledgement received in OTM"
            that.leftArrow(canvas,data,670,415)

            that.rect(canvas,data,570,240,120,80,13) // Delivery Linkage
            that.text(canvas,data,580,270,150,40,13)
            that.line(canvas,data,690,280,710,280) // output line to "Run Z2ICT -Planned Load for PO All Shipping Conditions............"
            that.leftArrow(canvas,data,710,280)

            that.rect(canvas,data,670,390,140,80,14) // Shipment Acknowledgement received in OTM
            that.text(canvas,data,690,410,150,40,14)

            that.rect(canvas,data,710,70,300,60,15) // Inter Company Transfer (ICT) Transaction Z2ICT Process
            that.text(canvas,data,730,100,250,40,15)

            that.rect(canvas,data,710,240,140,120,16) // Run Z2ICT -Planned Load for PO All Shipping Conditions may be used except for 28 and 34 (Not Transport Relevant)
            that.text(canvas,data,720,270,130,40,16)
            that.line(canvas,data,850,300,870,300)  // output line to "Delivery Picked, Goods Issue posted, and Billing posted........"
            that.leftArrow(canvas,data,870,300)

            that.rect(canvas,data,870,240,150,160,17) // Delivery Picked, Goods Issue posted, and Billing posted using PO/Delivery/Shipment documents (Delivery Output ZACT; Shipment Output ZSH3 triggered outbound)
            that.text(canvas,data,880,270,130,40,17)
            that.line(canvas,data,1020,300,1050,300) // output line to column4 "OTM Shipment Interface "
            that.leftArrow(canvas,data,1050,300)
            that.line(canvas,data,1020,340,1030,340)  // output line to  column4 "Shipment Actuals IDoc Msg type: Z2SDSHPMNT01"
            that.line(canvas,data,1030,340,1030,380)
            that.line(canvas,data,1030,380,1050,380)
            that.leftArrow(canvas,data,1050,380)

            ///////////////      column4     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,1050,10,120,40,18) // OTM
            that.text(canvas,data,1090,30,150,40,18)

            that.rect(canvas,data,1050,70,120,60,19) // OTM Interfaces
            that.text(canvas,data,1070,100,150,40,19)

            that.rect(canvas,data,1050,240,120,80,20) // OTM Shipment Interface
            that.text(canvas,data,1060,270,110,40,20)

            that.rect(canvas,data,1050,340,120,80,21) // Shipment Actuals IDoc Msg type: Z2SDSHPMNT01
            that.text(canvas,data,1060,370,110,40,21)
            that.line(canvas,data,1170,380,1180,380) // output line to column5 "Stocks received in Receiving site (MIGO)"
            that.line(canvas,data,1180,380,1180,280)
            that.line(canvas,data,1180,280,1190,280)
            that.leftArrow(canvas,data,1190,280)

            ///////////////      column5     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,1190,10,120,40,22) // ECC
            that.text(canvas,data,1230,30,120,40,22)

            that.rect(canvas,data,1190,70,120,60,23) // ECC Goods Receipt Process
            that.text(canvas,data,1200,100,100,40,23)

            that.rect(canvas,data,1190,240,120,80,24) // Stocks received in Receiving site (MIGO)
            that.text(canvas,data,1200,270,100,40,24)
            that.line(canvas,data,1250,320,1250,350)
            that.downArrow(canvas,data,1250,350)

            that.rect(canvas,data,1190,350,120,80,25) // Material Document Created
            that.text(canvas,data,1200,380,110,40,25)
            that.line(canvas,data,1310,390,1315,390) // output line to column6 "GR Interface IDOC Msg type: Z2SDSHPMNT01"
            that.line(canvas,data,1315,390,1315,280)
            that.line(canvas,data,1315,280,1330,280)
            that.leftArrow(canvas,data,1330,280)

            ///////////////      column6     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,1330,10,120,40,26) // OTM
            that.text(canvas,data,1370,30,120,40,26)

            that.rect(canvas,data,1330,70,120,60,27) // Goods Receipt Interface
            that.text(canvas,data,1340,100,120,40,27)

            that.rect(canvas,data,1330,240,120,80,28) // GR Interface IDOC Msg type: Z2SDSHPMNT01
            that.text(canvas,data,1340,260,120,40,28)


            //-------------------------Planned Load SO - Transport Relevant--------------------------------------//

            that.freeText(canvas,data,10,570,1000,40,29,"30px")  // Planned Load SO - Transport Relevant

            //////////////       column1    //////////////////////////////////////////////////////////////////
            that.rect(canvas,data,10,600,120,80,30) // Sales Order (ZA0) creation VA01
            that.text(canvas,data,20,630,110,40,30)
            that.line(canvas,data,130,640,150,640) // output line to "Outbound Delivery creation"
            that.leftArrow(canvas,data,150,640)

            that.rect(canvas,data,150,600,120,80,31) // Outbound Delivery creation
            that.text(canvas,data,160,630,110,40,31)
            that.line(canvas,data,270,640,290,640) // output line to column 2 "Delivery sent to OTM"
            that.leftArrow(canvas,data,290,640)

            /////////////column2/////////////////////////////////////////////////////////////////
            that.rect(canvas,data,290,600,120,80,32) // Delivery sent to OTM
            that.text(canvas,data,300,630,110,40,32)
            that.line(canvas,data,350,680,350,700) // output line to "OTM Shipment"
            that.downArrow(canvas,data,350,700)

            that.rect(canvas,data,290,700,120,80,33)  //  OTM Shipment
            that.text(canvas,data,300,730,110,40,33)
            that.line(canvas,data,410,740,420,740) // outputline to column3 "Shipment created in ECC (SHIPPL)"
            that.line(canvas,data,420,740,420,640)
            that.line(canvas,data,420,640,430,640)
            that.leftArrow(canvas,data,430,640)
            /////////////column3/////////////////////////////////////////////////////////////////
            that.rect(canvas,data,430,600,120,80,34) // Shipment created in ECC (SHIPPL)
            that.text(canvas,data,440,630,100,40,34)
            that.line(canvas,data,550,640,570,640)   // output line to "Delivery Linkage"
            that.leftArrow(canvas,data,570,640)

            that.rect(canvas,data,570,600,120,80,35) // Delivery Linkage
            that.text(canvas,data,580,630,100,40,35)
            that.line(canvas,data,690,640,710,640) // output line to "Run Z2ICT -Planned Load for SO All Shipping Conditions............"
            that.leftArrow(canvas,data,710,640)

            that.rect(canvas,data,710,600,140,120,36) // Run Z2ICT -Planned Load for SO All Shipping Conditions may be used except for 28 and 34 (Not Transport Relevant)
            that.text(canvas,data,720,630,120,40,36)
            that.line(canvas,data,850,660,870,660)  // output line to "Delivery Picked, Goods Issue posted, and Billing posted........"
            that.leftArrow(canvas,data,870,660)

            that.rect(canvas,data,870,600,150,160,37) // Delivery Picked, Goods Issue posted, and Billing posted using PO/Delivery/Shipment documents (Delivery Output ZACT; Shipment Output ZSH3 triggered outbound)
            that.text(canvas,data,880,630,130,40,37)
            that.line(canvas,data,1020,650,1050,650) // output line to column4 "OTM Shipment Interface "
            that.leftArrow(canvas,data,1050,650)

            /////////////column4          /////////////////////////////////////////////////////////////////
            that.rect(canvas,data,1050,600,120,80,38) // OTM Shipment Interface
            that.text(canvas,data,1060,630,120,40,38)

            that.rect(canvas,data,1050,720,120,80,39) // Shipment Actuals IDoc  Msg type: Z2SDSHPMNT01
            that.text(canvas,data,1060,750,120,40,39)


            return canvas;
            }  , 1000 );
        },

    //Primary Transportation_Deliver_Z2ICT_Flow_Planned Load NTR

        SDEL04D2_Z2ICT_PlannedLoad_NTR : function(x)
        {
          var model = this.uisCodeCheck("SDEL04D2_2");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Primary Transportation_Deliver_Z2ICT_Flow_Planned Load NTR";
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


            //****************column1********************************************************
            that.rect(canvas,data,200,10,1100,40,0) // ECC
            that.text(canvas,data,700,30,1000,40,0)

            that.rect(canvas,data,200,80,250,60,1) // Inter Company Transfer (ICT)
            that.text(canvas,data,220,100,200,40,1)

            that.freeText(canvas,data,200,180,1000,40,2,"30px") // Planned Load PO - No Transport Relevant


            that.rect(canvas,data,210,220,230,80,3) // Purchase Order (UB/NB for Greece) creation ME21N
            that.text(canvas,data,220,240,200,40,3)
            that.line(canvas,data,440,260,510,260)
            that.leftArrow(canvas,data,510,260)

            that.rect(canvas,data,500,80,540,60,4) // Inter Company Transfer (ICT) Transaction Z2ICT Process
            that.text(canvas,data,520,100,500,40,4)

            that.rect(canvas,data,510,220,230,80,5) // Run Z2ICT -Planned Load for POOnly Shipping Conditions 28 and 34 may be used
            that.text(canvas,data,520,240,200,40,5)
            that.line(canvas,data,740,260,780,260)
            that.leftArrow(canvas,data,780,260)

            that.rect(canvas,data,780,220,230,80,6) // Delivery Created,Picked,Goods Issue posted, and Billing posted using PO/Delivery document
            that.text(canvas,data,800,240,200,40,6)
            that.line(canvas,data,1010,260,1060,260)
            that.leftArrow(canvas,data,1060,260)

            that.rect(canvas,data,1060,80,230,60,7) // ECC Goods Receipt Process
            that.text(canvas,data,1080,100,200,40,7)

            that.rect(canvas,data,1060,220,210,80,8) // Stocks received in Receiving site (MIGO)
            that.text(canvas,data,1080,240,200,40,8)
            that.line(canvas,data,1160,300,1160,320)
            that.downArrow(canvas,data,1160,320)

            that.rect(canvas,data,1060,320,210,80,9) // Material Document created
            that.text(canvas,data,1080,340,200,40,9)

            that.freeText(canvas,data,200,460,1000,40,10,"30px") // Planned Load SO - No Transport Relevant

            that.rect(canvas,data,210,500,230,80,11) // Sales Order (ZAO) creation VA01
            that.text(canvas,data,230,520,200,40,11)
            that.line(canvas,data,440,540,510,540)
            that.leftArrow(canvas,data,510,540)

            that.rect(canvas,data,510,500,230,80,12) // Run Z2ICT -Planned Load for SO (External Sales checkbox ticked)Only Shipping Conditions 28 and 34 may be used
            that.text(canvas,data,530,520,200,40,12)
            that.line(canvas,data,740,540,780,540)
            that.leftArrow(canvas,data,780,540)

            that.rect(canvas,data,780,500,230,80,13) // Delivery Created, Picked, Goods Issue posted, and Billing posted using SO/Delivery document
            that.text(canvas,data,800,520,200,40,13)


            return canvas;
            }  , 1000 );
        },


    //Primary Transportation_Deliver_Z2ICT_Flow_Unplanned Load TR

        SDEL04D2_Z2ICT_UnplannedLoad_TR : function(x)
        {
          var model = this.uisCodeCheck("SDEL04D2_3");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Primary Transportation_Deliver_Z2ICT_Flow_Unplanned Load TR";
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


            //----------------------------Unplanned Load PO - Transport Relevant -------------------------------------//
             //column1
            that.rect(canvas,data,10,10,680,40,0) // ECC
            that.text(canvas,data,340,30,100,40,0)

            that.rect(canvas,data,10,70,230,50,1) // OTM Shipment Interface
            that.text(canvas,data,40,90,200,40,1)

            that.freeText(canvas,data,10,150,1000,40,2,"20px") // Unplanned Load PO - Transport Relevant

            that.rect(canvas,data,10,170,200,80,3) // Shipment created in ECC (SHIPPL)
            that.text(canvas,data,20,190,180,40,3)
            that.line(canvas,data,210,210,270,210) // output line to  "Run Z2ICT -Unplanned Load for PO"
            that.leftArrow(canvas,data,270,210)

            that.rect(canvas,data,270,70,420,50,4) // Inter Company Transfer (ICT) Transaction Z2ICT Process
            that.text(canvas,data,280,90,400,40,4)

            that.rect(canvas,data,270,170,200,80,5) // Run Z2ICT -Unplanned Load for PO
            that.text(canvas,data,280,190,180,40,5)

            that.rect(canvas,data,270,270,200,80,6) // Input values in all mandatory fields
            that.text(canvas,data,280,290,200,40,6)
            that.line(canvas,data,470,310,480,310) // output line to "Purchase Order Created Shipping Condition 37"
            that.line(canvas,data,480,310,480,200)
            that.line(canvas,data,480,200,490,200)
            that.leftArrow(canvas,data,490,200)

            that.rect(canvas,data,490,170,200,60,7) // Purchase Order Created Shipping Condition 37
            that.text(canvas,data,500,190,200,40,7)
            that.line(canvas,data,590,230,590,250) // output line to "Delivery Created Outout ZETM"
            that.downArrow(canvas,data,590,250)

            that.rect(canvas,data,490,250,200,60,8) // Delivery Created Outout ZETM
            that.text(canvas,data,500,270,200,40,8)
            that.line(canvas,data,590,310,590,330) // output line to "Delivery Linkage to Shipment"
            that.downArrow(canvas,data,590,330)
            that.line(canvas,data,690,280,700,280) // output line to column2 box "Delivery sent to OTM"
            that.line(canvas,data,700,280,700,210)
            that.line(canvas,data,700,210,730,210)
            that.leftArrow(canvas,data,730,210)

            that.rect(canvas,data,490,330,200,60,9) // Delivery Linkage to Shipment
            that.text(canvas,data,500,350,200,40,9)
            that.line(canvas,data,590,390,590,410) // output line to  "Delivery Picked, Goods Issue posted, and Billing posted (Delivery Output ZACT) (Shipment Output ZSH3)"
            that.downArrow(canvas,data,590,410)

            that.rect(canvas,data,490,410,200,80,10) // Delivery Picked, Goods Issue posted, and Billing posted (Delivery Output ZACT) (Shipment Output ZSH3)
            that.text(canvas,data,500,430,190,40,10)
            that.line(canvas,data,690,450,730,450) // output line to column2 box "Shipment Actuals IDoc  Msg type: Z2SDSHPMNT01"
            that.leftArrow(canvas,data,730,450)

            ///////////////column2//////////////////////////////////////////////////////////////////////////

            that.rect(canvas,data,730,10,200,40,11) // OTM
            that.text(canvas,data,800,30,200,40,11)

            that.rect(canvas,data,730,70,200,50,12) // Goods Issue / Shipment Actuals Interface
            that.text(canvas,data,750,90,200,40,12)

            that.rect(canvas,data,730,170,200,80,13) // Delivery sent to OTM
            that.text(canvas,data,750,190,200,40,13)
            that.line(canvas,data,830,250,830,300) // outpurt line to "Shipment Modification (SHIPPL)"
            that.downArrow(canvas,data,830,300)

            that.rect(canvas,data,730,300,200,80,14) // Shipment Modification (SHIPPL)
            that.text(canvas,data,750,320,200,40,14)
            that.line(canvas,data,730,340,690,340) // output line to column1 box "Delivery Linkage to Shipment"
            that.rightArrow(canvas,data,690,340)

            that.rect(canvas,data,730,410,200,80,15) // Shipment Actuals IDoc  Msg type: Z2SDSHPMNT01
            that.text(canvas,data,750,430,200,40,15)
            that.line(canvas,data,930,450,940,450) // output line to column3 box  "Stocks received in Receiving site (MIGO)"
            that.line(canvas,data,940,450,940,210)
            that.line(canvas,data,940,210,970,210)
            that.leftArrow(canvas,data,970,210)

            ///////////////column3//////////////////////////////////////////////////////////////////////////

            that.rect(canvas,data,970,10,200,40,16) // ECC
            that.text(canvas,data,1000,30,200,40,16)

            that.rect(canvas,data,970,70,200,50,17) // ECC Goods Receipt Process
            that.text(canvas,data,980,90,180,40,17)


            that.rect(canvas,data,970,170,200,80,18) // Stocks received in Receiving site (MIGO)
            that.text(canvas,data,990,190,200,80,18)
            that.line(canvas,data,1070,250,1070,300) //output line to "Material Document created"
            that.downArrow(canvas,data,1070,300)

            that.rect(canvas,data,970,300,200,80,19) // Material Document created
            that.text(canvas,data,990,320,200,40,19)
            that.line(canvas,data,1170,340,1180,340) // output line to column4 box "GR Interface IDOC Msg type: Z2SDSHPMNT01"
            that.line(canvas,data,1180,340,1180,210)
            that.line(canvas,data,1180,210,1200,210)
            that.leftArrow(canvas,data,1200,210)


            //////////////column4//////////////////////////////////////////////////////////////////////////

            that.rect(canvas,data,1200,10,200,40,20) // OTM
            that.text(canvas,data,1250,30,200,40,20)

            that.rect(canvas,data,1200,70,200,50,21) // Goods Receipt Interface
            that.text(canvas,data,1220,90,200,40,21)

            that.rect(canvas,data,1200,170,200,80,22) // GR Interface IDOC Msg type: Z2SDSHPMNT01
            that.text(canvas,data,1220,190,200,40,22)


//----------------------------Unplanned Load SO - Transport Relevant -------------------------------------//
/////////////     column1     ///////////////////////////////////////////////////////////////////////////

            that.freeText(canvas,data,10,540,1000,40,23,"20px")

            that.rect(canvas,data,10,560,200,80,24) // Shipment created in ECC (SHIPPL)
            that.text(canvas,data,20,580,180,40,24)
            that.line(canvas,data,210,600,270,600)  // output line to "Run Z2ICT -Unplanned Load for SO (External Sales checkbox ticked)"
            that.leftArrow(canvas,data,270,600)

            that.rect(canvas,data,270,560,200,80,25) // Run Z2ICT -Unplanned Load for SO (External Sales checkbox ticked)
            that.text(canvas,data,280,580,180,40,25)

            that.rect(canvas,data,270,660,200,80,26) // Input values in all mandatory fields
            that.text(canvas,data,280,680,180,40,26)
            that.line(canvas,data,470,700,480,700)
            that.line(canvas,data,480,700,480,580) // output line to "Sales Order Created Shipping Condition 37"
            that.line(canvas,data,480,580,490,580)
            that.leftArrow(canvas,data,490,580)

            that.rect(canvas,data,490,560,200,60,27) // Sales Order Created Shipping Condition 37
            that.text(canvas,data,500,580,180,40,27)
            that.line(canvas,data,590,620,590,640)   // output line to "Delivery Created Outout ZETM"
            that.downArrow(canvas,data,590,640)

            that.rect(canvas,data,490,640,200,60,28) // Delivery Created Outout ZETM
            that.text(canvas,data,500,660,180,40,28)
            that.line(canvas,data,590,700,590,720)   //output line to "Delivery Linkage to Shipment"
            that.downArrow(canvas,data,590,720)
            that.line(canvas,data,690,670,700,670) // output line to colun2 box "Delivery sent to OTM"
            that.line(canvas,data,700,670,700,600)
            that.line(canvas,data,700,600,730,600)
            that.leftArrow(canvas,data,730,600)

            that.rect(canvas,data,490,720,200,60,29) // Delivery Linkage to Shipment
            that.text(canvas,data,500,740,180,40,29)
            that.line(canvas,data,590,780,590,800)  // output line to "Delivery Picked, Goods Issue posted, and Billing posted (Delivery Output ZACT) (Shipment Output ZSH3)"
            that.downArrow(canvas,data,590,800)

            that.rect(canvas,data,490,800,200,80,30) // Delivery Picked, Goods Issue posted, and Billing posted (Delivery Output ZACT) (Shipment Output ZSH3)
            that.text(canvas,data,500,820,180,40,30)
            that.line(canvas,data,690,840,730,840)
            that.leftArrow(canvas,data,730,840)

            that.rect(canvas,data,730,560,200,80,31) // Delivery sent to OTM
            that.text(canvas,data,740,580,180,40,31)
            that.line(canvas,data,830,640,830,700)
            that.downArrow(canvas,data,830,700)

            that.rect(canvas,data,730,700,200,80,32) // Shipment Modification (SHIPPL)
            that.text(canvas,data,740,720,180,40,32)
            that.line(canvas,data,730,740,690,740)  // output line to column2 box "Delivery Linkage to Shipment"
            that.rightArrow(canvas,data,690,740)

            that.rect(canvas,data,730,810,200,80,33) // Shipment Actuals IDoc  Msg type: Z2SDSHPMNT01
            that.text(canvas,data,740,830,180,40,33)


            return canvas;
            }  , 1000 );
        },

        //Primary Transportation_Deliver_Z2ICT_Flow_Unplanned Load NTR

        SDEL04D2_Z2ICT_UnplannedLoad_NTR : function(x)
        {
          var model = this.uisCodeCheck("SDEL04D2_4");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Primary Transportation_Deliver_Z2ICT_Flow_Unplanned Load NTR";
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

            //----------------   Unplanned Load PO - No Transport Relevant -----------------------------------------//
///////////////      column1     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,200,10,850,40,0) // ECC
            that.text(canvas,data,600,30,1000,40,0)

            that.rect(canvas,data,200,70,550,60,1) // Inter Company Transfer (ICT) Transaction Z2ICT Process
            that.text(canvas,data,220,90,500,40,1)

            that.freeText(canvas,data,200,170,1000,40,2,"20px") // Unplanned Load PO - No Transport Relevant

            that.rect(canvas,data,200,200,250,80,3) // Run Z2ICT -Unplanned Load for PO (No Transport Relevant checkbox ticked)
            that.text(canvas,data,210,220,200,40,3)

            that.rect(canvas,data,200,300,250,80,4) // Input values in all mandatory fields
            that.text(canvas,data,210,320,200,40,4)
            that.line(canvas,data,450,340,470,340) // output line to "Purchase Order Created Shipping Condition 34"
            that.line(canvas,data,470,340,470,240)
            that.line(canvas,data,470,240,500,240)
            that.leftArrow(canvas,data,500,240)


            that.rect(canvas,data,500,200,250,80,5) // Purchase Order Created Shipping Condition 34
            that.text(canvas,data,510,220,200,40,5)
            that.line(canvas,data,625,280,625,300) // output line to "Delivery Created in reference to PO"
            that.downArrow(canvas,data,625,300)

            that.rect(canvas,data,500,300,250,80,6) // Delivery Created in reference to PO
            that.text(canvas,data,510,320,200,40,6)
            that.line(canvas,data,625,380,625,400) // output line to "Delivery Picked & Goods Issue Posted"
            that.downArrow(canvas,data,625,400)

            that.rect(canvas,data,500,400,250,80,7) // Delivery Picked & Goods Issue Posted
            that.text(canvas,data,510,420,200,40,7)
            that.line(canvas,data,625,480,625,500) // output line to "Billing document posted"
            that.downArrow(canvas,data,625,500)

            that.rect(canvas,data,500,500,250,80,8) // Billing document posted
            that.text(canvas,data,510,520,200,40,8)
            that.line(canvas,data,750,540,770,540)  //output line to "Stocks received in Receiving site (MIGO)"
            that.line(canvas,data,770,540,770,240)
            that.line(canvas,data,770,240,800,240)
            that.leftArrow(canvas,data,800,240)

            that.rect(canvas,data,800,70,250,60,9) // ECC Goods Receipt Process
            that.text(canvas,data,810,90,200,40,9)


            that.rect(canvas,data,800,200,250,80,10) // Stocks received in Receiving site (MIGO)
            that.text(canvas,data,810,220,200,40,10)
            that.line(canvas,data,925,280,925,300)  //output line to "Material Document created"
            that.downArrow(canvas,data,925,300)

            that.rect(canvas,data,800,300,250,80,11) // Material Document created
            that.text(canvas,data,810,320,200,40,11)



//----------------   Unplanned Load SO - No Transport Relevant -----------------------------------------//
///////////////      column1     //////////////////////////////////////////////////////////////////////////

            that.freeText(canvas,data,200,620,1000,40,12,"20px"); //Unplanned Load SO - No Transport Relevant

            that.rect(canvas,data,200,640,250,80,13) // Run Z2ICT -Unplanned Load for SO (No Transport Relevant checkbox ticked)
            that.text(canvas,data,210,660,200,40,13)

            that.rect(canvas,data,200,740,250,80,14) // Input values in all mandatory fields
            that.text(canvas,data,210,760,200,40,14)
            that.line(canvas,data,450,780,470,780) // output line to "Sales Order Created Shipping Condition 34"
            that.line(canvas,data,470,780,470,680)
            that.line(canvas,data,470,680,500,680)
            that.leftArrow(canvas,data,500,680)

            that.rect(canvas,data,500,640,250,80,15) // Sales Order Created Shipping Condition 34
            that.text(canvas,data,510,660,200,40,15)
            that.line(canvas,data,625,720,625,740)  // output line to "Delivery Created in reference to SO"
            that.downArrow(canvas,data,625,740)

            that.rect(canvas,data,500,740,250,80,16) // Delivery Created in reference to SO
            that.text(canvas,data,510,760,200,40,16)
            that.line(canvas,data,625,820,625,840)   // output line to "Delivery Picked & Goods Issue Posted"
            that.downArrow(canvas,data,625,840)

            that.rect(canvas,data,500,840,250,80,17) // Delivery Picked & Goods Issue Posted
            that.text(canvas,data,510,860,200,40,17)
            that.line(canvas,data,625,920,625,940)  // output line to "Billing document posted"
            that.downArrow(canvas,data,625,940)

            that.rect(canvas,data,500,940,250,80,18) // Billing document posted
            that.text(canvas,data,510,960,200,40,18)


            return canvas;
            }  , 1000 );
        },


        //DC Warehousing Deliver DC to DC Transfers

        SDEL05D7_dcWare_DCtoDC : function(x){
          var model = this.uisCodeCheck("SDEL05D7");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="DC Warehousing Deliver DC to DC Transfers";
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
    //First Row(Top to Bottom)
            that.rect(canvas,data,10,10,300,40,0) // ECC
            that.text(canvas,data,135,35,300,40,0)
            that.rect(canvas,data,10,90,300,40,1) // ECC Purchasing Process
            that.text(canvas,data,85,115,150,40,1)
            that.rect(canvas,data,10,170,120,155,2) // Purchase Order creation ME21N(Supplying and Receiving are DCs)
            that.text(canvas,data,18,190,40,40,2)
            that.rect(canvas,data,190,170,120,70,3) // Outbound Delivery A creation - type NL
            that.text(canvas,data,200,190,100,40,3)

            that.line(canvas,data,130,200,190,200) // line connecting index - 2 & index - 3
            that.leftArrow(canvas,data,190,200)
            //Second Row(Top to Bottom)
            that.rect(canvas,data,330,10,150,40,4)  // WMS
            that.text(canvas,data,390,35,300,40,4)
            that.rect(canvas,data,330,90,150,40,5)  // Delivery Process
            that.text(canvas,data,360,115,100,40,5)
            that.rect(canvas,data,330,320,120,70,6) // Delivery Instruction (WMS190 upon delivery creation)
            that.text(canvas,data,340,340,120,40,6)

            that.line(canvas,data,280,240,280,350) // line connecting index - 3 & index - 6
            that.line(canvas,data,280,350,330,350)
            that.leftArrow(canvas,data,330,350)
            //Third Row(Top to Bottom)
            that.rect(canvas,data,510,10,150,40,7)  // OTM
            that.text(canvas,data,570,35,300,40,7)
            that.rect(canvas,data,510,90,150,40,8)  // Interface Delivery to OTM
            that.text(canvas,data,518,115,140,40,8)
            that.rect(canvas,data,510,170,150,70,9) // Delivery sent to OTM [ZETM] TPSDLS sent back to ECC
            that.text(canvas,data,530,190,100,40,9)
            that.rect(canvas,data,510,320,150,70,10)  // OTM Shipment
            that.text(canvas,data,540,355,150,40,10)

            that.line(canvas,data,310,200,510,200) // line connecting index - 3 & index - 9
            that.rightArrow(canvas,data,310,200)


            that.line(canvas,data,310,220,510,220) // line connecting index - 9 & index - 3
            that.leftArrow(canvas,data,510,220)

            that.line(canvas,data,550,320,550,240) // line connecting index - 9 & index - 10
            that.downArrow(canvas,data,550,320)



            that.line(canvas,data,570,320,570,240) // line connecting index - 9 & index - 10


            //Fourth Row(Top to Bottom)
            that.rect(canvas,data,680,10,300,40,11) // ECC
            that.text(canvas,data,800,35,300,40,11)
            that.rect(canvas,data,680,90,200,40,12) // OTM Shipment Interface
            that.text(canvas,data,700,115,300,40,12)
            that.rect(canvas,data,680,170,100,70,13)  // Shipment created in ECC(SHIPPL)
            that.text(canvas,data,690,190,80,30,13)
            that.rect(canvas,data,680,260,300,40,14)  // Shipment Acknowledgement Interface
            that.text(canvas,data,700,280,300,40,14)
            that.rect(canvas,data,680,340,130,70,15)  // Shipment Acknowledgement XML Created in ECC
            that.text(canvas,data,700,360,80,30,15)
            that.rect(canvas,data,800,170,100,70,16)  // Delivery Linkage
            that.text(canvas,data,820,200,80,30,16)
            that.rect(canvas,data,840,350,170,50,17)  // Shipment Acknowledgement received in OTM
            that.text(canvas,data,850,370,150,30,17)

            that.line(canvas,data,800,210,780,210) // line connecting index - 13 & index - 16
            that.leftArrow(canvas,data,800,210)


            that.line(canvas,data,710,240,710,260) // line connecting index - 13 & index - 14
            that.line(canvas,data,720,240,720,260) // line connecting index - 13 & index - 14

            that.line(canvas,data,720,300,720,340) // line connecting index - 14 & index - 15

            that.line(canvas,data,810,370,840,370) // line connecting index - 15 & index - 17
            that.leftArrow(canvas,data,840,370)
            that.line(canvas,data,660,380,665,380) // line connecting index - 10 & index - 13
            that.line(canvas,data,665,380,665,210)
            that.line(canvas,data,665,210,680,210)
            that.leftArrow(canvas,data,680,210)
            //Fifth Row(Top to Bottom)
            that.rect(canvas,data,1020,10,130,40,18)  // WMS
            that.text(canvas,data,1060,35,300,40,18)
            that.rect(canvas,data,1020,90,130,40,19)  // Delivery Process
            that.text(canvas,data,1040,115,300,40,19)
            that.rect(canvas,data,1020,170,130,90,20) // Delivery Confirmation (WMS200 for picking and PGI)
            that.text(canvas,data,1050,190,80,30,20)

            //Sixth Row(Top to Bottom)
            that.rect(canvas,data,1170,10,300,40,21)    // ECC
            that.text(canvas,data,1290,35,300,40,21)
            that.rect(canvas,data,1180,90,130,50,22)      // ECC Picking & Goods Issue Process
            that.text(canvas,data,1200,110,100,40,22)
            that.rect(canvas,data,1180,170,130,50,23) // Delivery Picked and PGI
            that.text(canvas,data,1200,190,100,40,23)
            that.rect(canvas,data,1180,260,130,50,24) // LAVA Output type is triggered in delivery - Z2WMADVSHPX240
            that.text(canvas,data,1190,275,150,40,24)
            that.rect(canvas,data,1180,350,140,50,25) // LAVA Output received in OTM
            that.text(canvas,data,1185,370,150,40,25)
            that.rect(canvas,data,1340,90,130,50,26)      // OTM Shipment Actuals Interface(Outbound Flow)
            that.text(canvas,data,1345,110,130,40,26)
            that.rect(canvas,data,1340,170,130,50,27) //  Outbound Delivery [ZACT]
            that.text(canvas,data,1345,190,100,40,27)
            that.rect(canvas,data,1340,257,130,50,28) // Shipment Completion [ZSH3]
            that.text(canvas,data,1345,272,150,40,28)

            that.line(canvas,data,1470,285,1510,285) // line connecting index - 28 & index - 31
            that.leftArrow(canvas,data,1510,285)


            that.line(canvas,data,1310,195,1340,195) // line connecting index - 23 & index - 27
            that.leftArrow(canvas,data,1340,195)

            that.line(canvas,data,1325,195,1325,280) // line connecting index - 23 & index - 28
            that.line(canvas,data,1325,280,1340,280)
            that.leftArrow(canvas,data,1340,280)


            that.line(canvas,data,1240,220,1240,260) // line connecting index - 23 & index - 24
            that.line(canvas,data,1260,220,1260,260) // line connecting index - 23 & index - 24

            that.line(canvas,data,1240,310,1240,350) // line connecting index - 24 & index - 25
            that.line(canvas,data,1260,310,1260,350) // line connecting index - 24 & index - 25
            that.downArrow(canvas,data,1260,350)
            that.line(canvas,data,1150,190,1180,190) // line connecting index - 20 & index - 23
            that.leftArrow(canvas,data,1180,190)
            that.line(canvas,data,900,210,1020,210) // line connecting index - 16 & index - 20
            //Seventh Row(Top to Bottom)
            that.rect(canvas,data,1500,10,200,40,29)  // OTM
            that.text(canvas,data,1580,35,300,40,29)
            that.rect(canvas,data,1510,140,180,65,30) //  Shipment Actuals IDoc received from ECC Msg type: Z2SDSHPMNT01 Msg Variant: ACT
            that.text(canvas,data,1515,155,180,40,30)
            that.rect(canvas,data,1510,257,180,65,31) //  Shipment Actuals IDoc received from ECC Msg type: Z2SDSHPMNT01 Msg Variant: ACT
            that.text(canvas,data,1515,269,180,40,31)
            that.line(canvas,data,1590,205,1590,257) // line connecting index - 37 & index - 39
            //Eigth Row(Top to Bottom)
            that.rect(canvas,data,1720,10,90,40,32)   // WMS
            that.text(canvas,data,1750,35,200,40,32)
            that.rect(canvas,data,1720,90,90,65,33)   //  Goods Receipt Confirmation
            that.text(canvas,data,1725,120,100,40,33)
            that.rect(canvas,data,1720,180,90,65,34)    //  Goods Receipt Confirmation(WMS250)
            that.text(canvas,data,1725,200,100,40,34)

            // Nineth Row
            that.rect(canvas,data,1840,10,250,40,35)  // ECC
            that.text(canvas,data,1920,35,300,40,35)
            that.rect(canvas,data,1840,90,110,40,36)  // ECC Receiving Process
            that.text(canvas,data,1860,110,100,40,36)
            that.rect(canvas,data,1840,170,110,40,37)   // Material Document
            that.text(canvas,data,1848,190,100,40,37)
            that.rect(canvas,data,1980,90,110,40,38)  // OTM Goods Receipt Interface
            that.text(canvas,data,1990,110,100,40,38)
            that.rect(canvas,data,1980,170,110,40,39)   // GR Interface triggered in ECC
            that.text(canvas,data,1990,190,100,40,39)

            that.line(canvas,data,1950,190,1980,190) // line connecting index - 37 & index - 39
            that.leftArrow(canvas,data,1980,190)


            that.line(canvas,data,1810,190,1840,190) // line connecting index - 34 & index - 37
            that.leftArrow(canvas,data,1840,190)


            that.line(canvas,data,20,325,20,450) // line connecting index - 2 & index - 34
            that.line(canvas,data,20,450,1930,450)
            that.line(canvas,data,1930,450,1930,210)
            that.upArrow(canvas,data,1930,210)


            //Tenth Row
            that.rect(canvas,data,2120,10,200,40,40)  // OTM
            that.text(canvas,data,2170,35,300,40,40)
            that.rect(canvas,data,2120,170,200,45,41)   // GR Interface IDOC received from ECC  Msg type: Z2SDSHPMNT01 Msg Variant: GR
            that.text(canvas,data,2133,180,200,40,41)

            that.line(canvas,data,2090,190,2120,190) // line connecting index - 39 & index - 41
            that.leftArrow(canvas,data,2120,190)
            return canvas;
            }  , 1000 );

        },


      //Primary Transportation_Deliver_Z2ICT_Flow_Unplanned Load Shuttle


        SDEL04D2_Z2ICT_UnplannedLoad_Shuttle : function(x){
          var model = this.uisCodeCheck("SDEL04D2_5");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Primary Transportation_Deliver Z2ICT Flow Unplanned Load Shuttle";
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

             ///////////////      column1     //////////////////////////////////////////////////////////////////////////
            that.rect(canvas,data,200,10,700,40,0) // ECC
            that.text(canvas,data,500,30,100,40,0)

            that.rect(canvas,data,200,80,700,60,1) // Inter Company Transfer (ICT) Transaction Z2ICT Process
            that.text(canvas,data,380,110,700,40,1)

            that.freeText(canvas,data,200,180,1000,40,2,"30px") // Unplanned Load PO - Shuttle Process

            that.rect(canvas,data,250,200,300,80,3) // Run Z2ICT -Unplanned Load for PO Supplying and Receiving Details maintained in table Z0MM_SHUTTLETAB with Shipping Condition 28
            that.text(canvas,data,260,220,300,40,3)
            that.line(canvas,data,400,280,400,310) //output line to "No Transport Relevant" checkbox automatically ticked"
            that.downArrow(canvas,data,400,310)

            that.rect(canvas,data,250,310,300,80,4) // No Transport Relevant" checkbox automatically ticked
            that.text(canvas,data,260,340,300,40,4)
            that.line(canvas,data,550,350,560,350) //output line to  "Purchase Order Created Shipping Condition 28"
            that.line(canvas,data,560,350,560,240)
            that.line(canvas,data,560,240,580,240)
            that.leftArrow(canvas,data,580,240)

            that.rect(canvas,data,580,200,300,80,5) // Purchase Order Created Shipping Condition 28
            that.text(canvas,data,600,240,300,80,5)
            that.line(canvas,data,730,280,730,300) // output line to "Delivery Created in reference to PO"
            that.downArrow(canvas,data,730,300)

            that.rect(canvas,data,580,300,300,80,6) // Delivery Created in reference to PO
            that.text(canvas,data,600,340,300,40,6)
            that.line(canvas,data,730,380,730,400) // output line to "Delivery Picked & Goods Issue Posted"
            that.downArrow(canvas,data,730,400)

            that.rect(canvas,data,580,400,300,80,7) // Delivery Picked & Goods Issue Posted
            that.text(canvas,data,600,440,300,40,7)
            that.line(canvas,data,730,480,730,500) //output line to "Billing document posted"
            that.downArrow(canvas,data,730,500)

            that.rect(canvas,data,580,500,300,80,8) // Billing document posted
            that.text(canvas,data,600,540,300,40,8)
            that.line(canvas,data,880,540,910,540) // output line to column2 box "Stocks received in Receiving site (MIGO)"
            that.line(canvas,data,910,540,910,240)
            that.line(canvas,data,910,240,980,240)
            that.leftArrow(canvas,data,980,240)

///////////////      column2     //////////////////////////////////////////////////////////////////////////

            that.rect(canvas,data,980,10,300,40,9) // ECC
            that.text(canvas,data,1100,30,100,40,9)

            that.rect(canvas,data,980,80,300,60,10) // ECC Goods Receipt Process
            that.text(canvas,data,1010,100,300,40,10)

            that.rect(canvas,data,980,200,300,80,11) // Stocks received in Receiving site (MIGO)
            that.text(canvas,data,1010,240,300,40,11)
            that.line(canvas,data,1130,280,1130,330) // output line to "Material Document Created"
            that.downArrow(canvas,data,1130,330)

            that.rect(canvas,data,980,330,300,80,12) // Material Document Created
            that.text(canvas,data,1010,370,300,80,12)

            return canvas;
            }  , 1000 );

        },


        //Transportation_Deliver_Cross Docking_V4_Inbound

        SDEL04D3_Inbound_DeliveryCrossDocking : function(x){
          var model = this.uisCodeCheck("SDEL04D3_2");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Transportation_Deliver_Cross Docking_V4_Inbound";
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
        that.rect(canvas,data,10,10,260,30,0)//ECC-1
        that.text(canvas,data,120,30,80,30,0)
        that.rect(canvas,data,290,10,120,30,5)//OTM
        that.text(canvas,data,340,30,80,30,5)
        that.rect(canvas,data,430,10,430,30,9)//ECC-2
        that.text(canvas,data,630,30,80,30,9)
        that.rect(canvas,data,880,10,140,30,17)//WMS
        that.text(canvas,data,940,30,80,30,17)
        that.rect(canvas,data,1040,10,320,30,21)//ECC-3
        that.text(canvas,data,1200,30,80,30,21)
        //second line
        that.rect(canvas,data,10,60,260,50,1) // ECC Purchasing Process
                that.text(canvas,data,70,80,150,40,1)
                that.freeText(canvas,data,10,170,1000,40,2,"30px")//Primary Inbound
                that.rect(canvas,data,290,60,120,50,6)  // Interface Delivery to OTM
                that.text(canvas,data,300,80,100,40,6)
                that.rect(canvas,data,430,60,120,50,10)	// OTM Shipment Interface
                that.text(canvas,data,450,80,100,40,10)
                that.rect(canvas,data,570,60,290,50,13)	// Picking and PGI Process
                that.text(canvas,data,630,80,150,40,13)
        that.rect(canvas,data,880,60,140,50,18) // Xdock Site Delivery Process
                that.text(canvas,data,900,80,130,40,18)
        that.rect(canvas,data,1040,60,150,50,22)  // Deliveries Confirmation
                that.text(canvas,data,1050,80,130,40,22)
                that.rect(canvas,data,1210,60,150,50,25)  // Goods Receipt Process
                that.text(canvas,data,1220,80,130,40,25)

        //tasks
                that.rect(canvas,data,10,260,120,60,3)  // Standard PO (NB) creation
                that.text(canvas,data,20,280,110,40,3)
                that.line(canvas,data,70,320,70,350)
                that.upArrow(canvas,data,70,320)
                that.line(canvas,data,70,350,1280,350)

                that.line(canvas,data,130,290,150,290)
        that.leftArrow(canvas,data,150,290)
                that.rect(canvas,data,150,260,120,60,4)	// Inbound Delivery A creation - type
                that.text(canvas,data,160,280,110,40,4)
                that.line(canvas,data,270,290,290,290)
                that.leftArrow(canvas,data,290,290)
                that.rect(canvas,data,290,260,120,60,7)	// Delivery sent to OTM (ZETM)
                that.text(canvas,data,300,280,110,40,7)
                that.upArrow(canvas,data,370,320)
                that.line(canvas,data,370,320,370,340)
                that.line(canvas,data,370,340,640,340)

                that.line(canvas,data,640,340,640,460)
                that.line(canvas,data,640,460,950,460)

                that.line(canvas,data,950,420,950,460)


                 that.line(canvas,data,350,230,350,260)

                that.line(canvas,data,350,230,950,230)

                that.line(canvas,data,950,230,950,260)
                that.downArrow(canvas,data,950,260)
                that.line(canvas,data,350,320,350,360)
                that.downArrow(canvas,data,350,360)
                that.rect(canvas,data,290,360,120,60,8)	// OTM Shipment

                that.text(canvas,data,300,380,110,40,8)
                that.line(canvas,data,410,390,430,390)
                that.leftArrow(canvas,data,430,390)
                that.line(canvas,data,415,290,415,390)
                 that.line(canvas,data,415,290,430,290)
                 that.leftArrow(canvas,data,430,290)
                that.rect(canvas,data,430,260,140,60,11)  // Shipment 2 created in ECC

                that.text(canvas,data,440,275,130,40,11)
                  that.line(canvas,data,570,290,590,290)
                 that.leftArrow(canvas,data,590,290)
                that.rect(canvas,data,430,360,140,60,12)  // Shipment 1 created in ECC(SHIPPL)

                that.text(canvas,data,440,380,130,40,12)
                that.rect(canvas,data,590,260,120,60,14)  // Delivery A - Output ZCDX (upon shipment linkage)

                that.text(canvas,data,600,280,110,40,14)
                that.line(canvas,data,710,290,740,290)

                 that.leftArrow(canvas,data,740,290)
                that.rect(canvas,data,740,260,120,60,15)  // Xdock Inbound Delivery B - Output ZCDI

                that.text(canvas,data,750,280,100,40,15)
                that.line(canvas,data,810,320,810,360)
                that.downArrow(canvas,data,810,360)
                that.line(canvas,data,770,320,770,340)
                that.upArrow(canvas,data,770,320)

                that.line(canvas,data,710,340,770,340)

                that.line(canvas,data,710,340,710,480)

                that.line(canvas,data,710,480,1340,480)

                that.line(canvas,data,1340,420,1340,480)
                 that.line(canvas,data,860,290,880,290)
                 that.leftArrow(canvas,data,880,290)
                 that.line(canvas,data,865,290,865,390)
                 that.line(canvas,data,860,390,865,390)


                that.rect(canvas,data,740,360,120,60,16)  // Xdock Outbound Delivery C

                that.text(canvas,data,750,380,100,40,16)
                that.line(canvas,data,800,420,800,440)
                that.upArrow(canvas,data,800,420)
                 that.line(canvas,data,800,440,1300,440)

                 that.line(canvas,data,1300,420,1300,440)
                that.rect(canvas,data,880,260,140,60,19)  // Delivery Instruction (WMS195 for B, WMS190 for C)
                that.text(canvas,data,890,280,130,40,19)
                that.line(canvas,data,950,320,950,360)
                that.downArrow(canvas,data,950,360)
                that.rect(canvas,data,880,360,140,60,20)  // Delivery Confirmation (WMS200)
                that.text(canvas,data,890,380,130,40,20)
                that.line(canvas,data,1020,390,1040,390)
                that.line(canvas,data,1030,290,1030,390)
                that.line(canvas,data,1030,290,1040,290)
                that.leftArrow(canvas,data,1040,290)
                 that.leftArrow(canvas,data,1040,390)
                 that.rect(canvas,data,1040,260,150,60,23)  // Xdock Inbound Delivery B Confirmed (PGR) - mvt ZX1

                that.text(canvas,data,1050,280,130,40,23)
                that.line(canvas,data,1110,320,1110,360)
                that.downArrow(canvas,data,1110,360)

        that.rect(canvas,data,1040,360,150,60,24) // Xdock Outbound Delivery C Confirmed (PGI) - mvt 313

                that.text(canvas,data,1050,380,130,40,24)
                that.line(canvas,data,1190,390,1200,390)
                that.line(canvas,data,1200,290,1200,390)
                that.line(canvas,data,1200,290,1210,290)
                that.leftArrow(canvas,data,1210,290)
                that.line(canvas,data,1280,320,1280,350)
                that.rect(canvas,data,1210,260,150,60,26)	// Goods Receipt against PO or Inbound Delivery A (MIGO)

                that.text(canvas,data,1220,280,130,40,26)

                that.line(canvas,data,1310,320,1310,360)
                that.downArrow(canvas,data,1310,360)

                 that.rect(canvas,data,1210,360,150,60,27)  // WMS310 IDOC created in background (LOOPBACK)315 and ZX2

                that.text(canvas,data,1215,375,140,50,27)
            return canvas;
            }  , 1000 );

        },

        //Transportation_Deliver_Cross Docking_V4_Outbound

        SDEL04D3_Outbound_DeliveryCrossDocking : function(x){
          var model = this.uisCodeCheck("SDEL04D3_1");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Transportation_Deliver_Cross Docking_V4_Outbound";
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
        that.rect(canvas,data,10,10,260,30,0)//ECC-1
        that.text(canvas,data,120,30,80,30,0)
        that.rect(canvas,data,290,10,120,30,6)//OTM
        that.text(canvas,data,340,30,80,30,6)
        that.rect(canvas,data,430,10,430,30,10)//ECC-2
        that.text(canvas,data,630,30,80,30,10)
        that.rect(canvas,data,880,10,140,30,18)//WMS
        that.text(canvas,data,940,30,80,30,18)
        that.rect(canvas,data,1040,10,320,30,22)//ECC-3
        that.text(canvas,data,1200,30,80,30,22)
        //second line
        that.rect(canvas,data,10,60,260,50,1) // ECC Purchasing Process
                that.text(canvas,data,70,80,150,40,1)
                that.freeText(canvas,data,10,170,1000,40,2,"30px")//Primary Outbound
                that.freeText(canvas,data,10,200,1000,40,3,"15px")//Intracompany Transfers
                that.freeText(canvas,data,10,500,1000,40,28,"15px")//Intercompany Transfers
                that.rect(canvas,data,290,60,120,50,7)  // Interface Delivery to OTM
                that.text(canvas,data,300,80,100,40,7)
                that.rect(canvas,data,430,60,120,50,11)	// OTM Shipment Interface
                that.text(canvas,data,450,80,100,40,11)
                that.rect(canvas,data,570,60,290,50,14)	// Picking and PGI Process
                that.text(canvas,data,630,80,150,40,14)
        that.rect(canvas,data,880,60,140,50,19) // Xdock Site Delivery Process
                that.text(canvas,data,900,80,130,40,19)
        that.rect(canvas,data,1040,60,150,50,23)  // Deliveries Confirmation
                that.text(canvas,data,1050,80,130,40,23)
                that.rect(canvas,data,1210,60,150,50,26)  // Goods Receipt Process
                that.text(canvas,data,1220,80,130,40,26)
        //tasks

                that.rect(canvas,data,10,260,120,60,4)  // Purchase Order (UB) creation ME21N
                that.text(canvas,data,20,280,110,40,4)
                that.line(canvas,data,70,320,70,350)
                that.upArrow(canvas,data,70,320)
                that.line(canvas,data,70,350,1280,350)

                that.line(canvas,data,130,290,150,290)
        that.leftArrow(canvas,data,150,290)
                that.rect(canvas,data,150,260,120,60,5)	// Outbound Delivery A creation - type NL
                that.text(canvas,data,160,280,110,40,5)
                that.line(canvas,data,270,290,290,290)
                that.leftArrow(canvas,data,290,290)
                that.rect(canvas,data,290,260,120,60,8)	// Delivery sent to OTM (ZETM)
                that.text(canvas,data,300,280,110,40,8)
                that.upArrow(canvas,data,370,320)
                that.line(canvas,data,370,320,370,340)
                that.line(canvas,data,370,340,640,340)

                that.line(canvas,data,640,340,640,460)
                that.line(canvas,data,640,460,950,460)

                that.line(canvas,data,950,420,950,460)


                 that.line(canvas,data,350,230,350,260)

                that.line(canvas,data,350,230,950,230)

                that.line(canvas,data,950,230,950,260)
                that.downArrow(canvas,data,950,260)
                that.line(canvas,data,350,320,350,360)
                that.downArrow(canvas,data,350,360)
                that.rect(canvas,data,290,360,120,60,9)	// OTM Shipment
                that.text(canvas,data,300,380,110,40,9)
                that.line(canvas,data,410,390,430,390)
                that.leftArrow(canvas,data,430,390)
                that.line(canvas,data,415,290,415,390)
                 that.line(canvas,data,415,290,430,290)
                 that.leftArrow(canvas,data,430,290)
                that.rect(canvas,data,430,260,140,60,12)  // Shipment 2 created in ECC (SHIPPL Supplying to Xdock site)
                that.text(canvas,data,440,275,130,40,12)
                  that.line(canvas,data,570,290,590,290)
                 that.leftArrow(canvas,data,590,290)
                that.rect(canvas,data,430,360,140,60,13)  // Shipment 1 created in ECC (SHIPPL Xdock site to Receiving)
                that.text(canvas,data,440,380,130,40,13)
                that.rect(canvas,data,590,260,120,60,15)  // Delivery A Picked and PGI - Output ZCDO
                that.text(canvas,data,600,280,100,40,15)
                that.line(canvas,data,710,290,740,290)
                 that.line(canvas,data,725,290,725,390)
                  that.line(canvas,data,725,390,740,390)
                  that.leftArrow(canvas,data,740,390)

                 that.leftArrow(canvas,data,740,290)
                that.rect(canvas,data,740,260,120,60,16)  // Xdock Inbound Delivery B – type HID
                that.text(canvas,data,750,280,100,40,16)
                 that.line(canvas,data,860,290,880,290)
                 that.leftArrow(canvas,data,880,290)
                 that.line(canvas,data,865,290,865,390)
                 that.line(canvas,data,860,390,865,390)

                that.rect(canvas,data,740,360,120,60,17)  // Xdock Outbound Delivery C – type NL
                that.text(canvas,data,750,380,100,40,17)
                that.rect(canvas,data,880,260,140,60,20)  // Delivery Instruction (WMS195 for B, WMS190 for C)
                that.text(canvas,data,890,280,130,40,20)
                that.line(canvas,data,950,320,950,360)
                that.downArrow(canvas,data,950,360)


                that.rect(canvas,data,880,360,140,60,21)  // Delivery Confirmation (WMS200) for Delivery B & C
                that.text(canvas,data,890,380,130,40,21)
                that.line(canvas,data,1020,390,1040,390)
                that.line(canvas,data,1030,290,1030,390)
                that.line(canvas,data,1030,290,1040,290)
                that.leftArrow(canvas,data,1040,290)
                 that.leftArrow(canvas,data,1040,390)
                 that.rect(canvas,data,1040,260,150,60,24)  // Xdock Outbound Delivery B Confirmed (PGR)
                that.text(canvas,data,1050,280,130,40,24)
                that.line(canvas,data,1110,320,1110,360)
                that.downArrow(canvas,data,1110,360)
        that.rect(canvas,data,1040,360,150,60,25) // Xdock Inbound Delivery C Confirmed (PGI)
                that.text(canvas,data,1050,380,130,40,25)
                that.line(canvas,data,1190,390,1200,390)
                that.line(canvas,data,1200,290,1200,390)
                that.line(canvas,data,1200,290,1210,290)
                that.leftArrow(canvas,data,1210,290)
                that.line(canvas,data,1280,320,1280,350)
                that.rect(canvas,data,1210,260,150,60,27)	// Goods Receipt against  Xdock Outbound Delivery C
                that.text(canvas,data,1220,280,130,40,27)
                that.rect(canvas,data,10,550,120,60,29)	// Purchase Order (NB) creation ME21N
                that.text(canvas,data,20,570,110,40,29)
                that.line(canvas,data,70,610,70,640)
                that.upArrow(canvas,data,70,610)
                that.line(canvas,data,70,640,1280,640)

                that.line(canvas,data,130,580,150,580)
                that.leftArrow(canvas,data,150,580)
                that.rect(canvas,data,150,550,120,60,30)  // Outbound Delivery A creation - type NLCC
                that.text(canvas,data,160,570,110,40,30)
                that.line(canvas,data,270,580,290,580)
                that.leftArrow(canvas,data,290,580)
                that.rect(canvas,data,290,550,120,60,31)  // Delivery sent to OTM (ZETM)
                that.text(canvas,data,300,570,110,40,31)
               that.upArrow(canvas,data,370,610)
                that.line(canvas,data,370,610,370,630)
                that.line(canvas,data,370,630,640,630)
                that.line(canvas,data,640,630,640,750)
                that.line(canvas,data,640,750,950,750)
                that.line(canvas,data,950,710,950,750)
                 that.line(canvas,data,350,520,350,550)
                that.line(canvas,data,350,520,950,520)
                that.line(canvas,data,950,520,950,550)
                that.downArrow(canvas,data,950,550)
                that.line(canvas,data,350,610,350,650)
                that.downArrow(canvas,data,350,650)
                that.rect(canvas,data,290,650,120,60,32)  //OTM Shipment
                that.text(canvas,data,300,670,110,40,32)
                that.line(canvas,data,410,680,430,680)
                that.leftArrow(canvas,data,430,680)
                that.line(canvas,data,415,580,415,680)
                that.line(canvas,data,415,580,430,580)
                that.leftArrow(canvas,data,430,580)
                that.rect(canvas,data,430,550,140,60,33)  // Shipment 2 created in ECC
                that.text(canvas,data,440,565,130,40,33)
                  that.line(canvas,data,570,580,590,580)
                 that.leftArrow(canvas,data,590,580)
                that.rect(canvas,data,430,650,140,60,34)  // Shipment 1 created in ECC (SHIPPL)
                that.text(canvas,data,440,670,130,40,34)
                that.rect(canvas,data,590,550,120,60,35)  //Delivery A Picked and PGI - Output ZCDO
                that.text(canvas,data,600,570,100,40,35)
                that.line(canvas,data,710,580,740,580)
                 that.leftArrow(canvas,data,740,580)
                 that.line(canvas,data,725,580,725,680)
                  that.line(canvas,data,725,680,740,680)
                  that.leftArrow(canvas,data,740,680)
               that.rect(canvas,data,740,550,120,60,36)	// Xdock Inbound Delivery B – type HID
               that.text(canvas,data,750,570,100,40,36)
                 that.line(canvas,data,860,580,880,580)
                 that.leftArrow(canvas,data,880,580)
                 that.line(canvas,data,860,680,865,680)
                  that.line(canvas,data,865,580,865,680)
                that.rect(canvas,data,740,650,120,60,37)  // Xdock Outbound Delivery C – type NLCC
                that.text(canvas,data,750,670,100,40,37)
                that.rect(canvas,data,880,550,140,60,38)  // Delivery Instruction (WMS195 for B, WMS190 for C)
                that.text(canvas,data,890,570,130,40,38)
                that.line(canvas,data,950,610,950,650)
                that.downArrow(canvas,data,950,650)


                that.rect(canvas,data,880,650,140,60,39)  // Delivery Confirmation (WMS200) For Delivery B&C
                that.text(canvas,data,890,670,130,40,39)
                that.line(canvas,data,1020,680,1040,680)
               that.line(canvas,data,1030,580,1030,680)
                that.line(canvas,data,1030,580,1040,580)
                that.leftArrow(canvas,data,1040,580)
                that.leftArrow(canvas,data,1040,680)
                that.rect(canvas,data,1040,550,150,60,40)	// Xdock Outbound Delivery B Confirmed (PGR)
                that.text(canvas,data,1050,570,130,40,40)
                that.line(canvas,data,1110,610,1110,650)
                that.downArrow(canvas,data,1110,650)

        that.rect(canvas,data,1040,650,150,60,41) // Xdock Inbound Delivery C Confirmed (PGI)
                that.text(canvas,data,1050,670,130,40,41)
                that.line(canvas,data,1190,680,1200,680)
                that.line(canvas,data,1200,580,1200,680)
                that.line(canvas,data,1200,580,1210,580)
                that.leftArrow(canvas,data,1210,580)
                that.line(canvas,data,1280,610,1280,640)

                that.rect(canvas,data,1210,550,150,60,42)	// Goods Receipt against  Xdock Outbound Delivery C
                  that.text(canvas,data,1220,570,130,40,42)




              return canvas;
            }  , 1000 );

        },


        //Primary Transportation_Deliver_UTMS related Interfaces_v4

        SDEL04D1_PT_UTMSRelatedInterface : function(x){
          var model = this.uisCodeCheck("SDEL04D1");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Primary Transportation_Deliver_UTMS related Interfaces_v4";
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
        that.rect(canvas,data,10,10,240,40,0)//ECC **
        that.text(canvas,data,110,35,300,40,0)//ECC **

        that.rect(canvas,data,270,10,120,40,4) //OTM **
        that.text(canvas,data,305,35,300,40,4) //OTM **

        that.rect(canvas,data,400,10,700,40,8) //ECC second **
        that.text(canvas,data,700,35,700,40,8)//ECC second **

        that.rect(canvas,data,1110,10,140,40,24)  // OTM second **
        that.text(canvas,data,1145,30,150,40,24) //OTM second **

        that.rect(canvas,data,1270,10,290,40,27)// ECC third **
        that.text(canvas,data,1320,30,290,40,27)//ECC third**

        that.rect(canvas,data,1570,10,200,40,33)// OTM third **
        that.text(canvas,data,1600,30,200,40,33)// OTM third **


        //second line
        that.rect(canvas,data,10,70,240,40,1) // ECC Purchasing Process **
        that.text(canvas,data,40,95,300,40,1)   // ECC Purchasing Process **


        that.rect(canvas,data,270,70,120,40,5) //Interface Delivery to OTM **
        that.text(canvas,data,285,85,100,40,5) //Interface Delivery to OTM **

        that.rect(canvas,data,400,70,200,40,9)  // OTM Shipment interface **
        that.text(canvas,data,410,90,110,40,9)  // OTM Shipment interface **

        that.rect(canvas,data,610,70,280,40,14) // ECC Picking & Goods Issue Process (Outbound Flow) **
        that.text(canvas,data,615,85,280,40,14) //ECC Picking & Goods Issue Process (Outbound Flow) **

        that.rect(canvas,data,900,70,200,40,21) // OTM Shipment Actuals Interface (Outbound Flow) **
        that.text(canvas,data,915,85,200,40,21)  //OTM Shipment Actuals Interface (Outbound Flow) **

        that.rect(canvas,data,1280,70,135,40,28)//  ECC Receiving Process**
        that.text(canvas,data,1285,90,135,40,28)//  ECC Receiving Process**

        that.rect(canvas,data,1425,70,135,40,31)//  OTM Goods Receipt Interface**
        that.text(canvas,data,1435,90,135,40,31)// OTM Goods Receipt Interface**


        //tasks
        that.rect(canvas,data,10,160,100,70,2) //Purchase Order creation ME21N **
        that.text(canvas,data,15,185,100,40,2) //Purchase Order creation ME21N **

        that.line(canvas,data,110,200,140,200) //Purchase order creation to Outbound delivery A creation**
        that.leftArrow(canvas,data,140,200)    //Purchase order creation to Outbound delivery A creation**

        that.rect(canvas,data,140,160,105,70,3)//Outbound Delivery A creation - type NL **
        that.text(canvas,data,145,185,100,40,3)//Outbound Delivery A creation - type NL **

        that.rect(canvas,data,280,160,100,70,6)//Delivery sent to OTM [ZETM/TPSDLS] **
        that.text(canvas,data,290,185,100,40,6)//Delivery sent to OTM [ZETM/TPSDLS] **

        that.line(canvas,data,245,215,280,215)//outbound delivery to delivery sent to OTM**
        that.leftArrow(canvas,data,280,215)//outbound delivery to delivery sent to OTM**
        that.line(canvas,data,245,180,280,180)// delivery sent to OTM to outbound delivery**
        that.rightArrow(canvas,data,245,180)// delivery sent to OTM to outbound delivery**

        that.rect(canvas,data,280,300,100,70,7)//OTM Shipment**
        that.text(canvas,data,290,335,100,70,7)//OTM Shipment**

        that.line(canvas,data,330,230,330,300)//delivery sent to OTM to OTM shipment **
        that.downArrow(canvas,data,330,300)//delivery sent to OTM to OTM shipment **

        that.rect(canvas,data,400,160,85,70,10) //Shipment created in ECC (SHIPPL) **
        that.text(canvas,data,405,185,80,70,10) //Shipment created in ECC (SHIPPL) **

        that.rect(canvas,data,510,160,90,70,11) // Delivery Linkage **
        that.text(canvas,data,512,185,90,70,11)  // Delivery Linkage **

        that.line(canvas,data,485,195,510,195)//shipment created in ECC to delivery linkage **
        that.leftArrow(canvas,data,510,195)//shipment created in ECC to delivery linkage **

        that.line(canvas,data,440,230,440,250)// shipment created in ECC to shipment acknowledge interface **
        that.line(canvas,data,440,290,440,340) // shipment acknowledge interface to shipment ack XML in ECC **
        that.downArrow(canvas,data,440,340)// shipment acknowledge interface to shipment ack XML in ECC **

        that.line(canvas,data,380,350,390,350) // from otm shipment ** horizontal below
        that.line(canvas,data,390,350,390,200) // from otm shipement ** vertical
        that.line(canvas,data,390,200,400,200) // from otm shipment ** horizontal top
        that.leftArrow(canvas,data,400,200)//from otm shipment to Shipmentcreated in ECC (SHIPPL) **

        that.rect(canvas,data,400,250,200,40,12)  // Shipment Acknowledgement Interface ** in orange
        that.text(canvas,data,410,270,200,40,12)  // Shipment Acknowledgement Interface ** in orange

        that.rect(canvas,data,400,340,110,70,13)  //Shipment Acknowledgement XML created in ECC **
        that.text(canvas,data,405,355,90,70,13)  //Shipment Acknowledgement XML created in ECC **

        that.line(canvas,data,510,355,550,355)//Shipment Ack XML created inECC to Shipment Ack recvd in OTM**
        that.leftArrow(canvas,data,550,355)//Shipment Ack XML created inECC to Shipment Ack recvd in OTM**

        that.rect(canvas,data,660,160,120,25,15) //Picking (VL02N) **
        that.text(canvas,data,680,175,100,70,15)//Picking (VL02N) **

        that.line(canvas,data,680,185,680,220) // from Picking(VL02N) to Deliver goods issue((VL02N)
        that.downArrow(canvas,data,680,220) //from Picking(VL02N) to Deliver goods issue((VL02N)

        that.line(canvas,data,760,185,760,220) // from Picking(VL02N) to Deliver goods issue via interface -Z2WMDELCNFX20
        that.downArrow(canvas,data,760,220)// from Picking(VL02N) to Deliver goods issue via interface -Z2WMDELCNFX20

        that.rect(canvas,data,620,220,100,70,16) //Delivery Goods Issue  (VL02N) **
        that.text(canvas,data,630,250,100,70,16) //Delivery Goods Issue  (VL02N) **

        that.rect(canvas,data,735,220,115,70,17) //Delivery Goods Issue via interface - Z2WMDELCNFX200 **
        that.text(canvas,data,738,240,115,70,17) //Delivery Goods Issue via interface - Z2WMDELCNFX200 **

        that.line(canvas,data,850,250,900,250)//from Delivery Goods Z2WMDELCNFX200 to Shipment Completion [ZSH3]
        that.leftArrow(canvas,data,900,250)//from Delivery Goods Z2WMDELCNFX200 to Shipment Completion [ZSH3]
        that.line(canvas,data,865,250,865,180)//vertical line with no arrows
        that.line(canvas,data,865,180,900,180)//horizontal line from Delivery Goods Z2WMDELCNFX20 to Outbound Delivery [ZACT]
        that.leftArrow(canvas,data,900,180)//from Delivery Goods Z2WMDELCNFX20 to Outbound Delivery [ZACT]

        that.rect(canvas,data,550,340,160,40,18) //Shipment Acknowledgement received in OTM **
        that.text(canvas,data,555,355,160,40,18) //Shipment Acknowledgement received in OTM **

        that.rect(canvas,data,600,420,180,50,19) //LAVA Output type is triggered from delivery - Z2WMADVSHPX240**
        that.text(canvas,data,615,435,180,50,19) //LAVA Output type is triggered from delivery - Z2WMADVSHPX240**

        that.rect(canvas,data,800,420,180,50,20) //LAVA oputput received in OTM**
        that.text(canvas,data,810,435,180,50,20) //LAVA oputput received in OTM**

        that.line(canvas,data,780,445,800,445)//from LAVA Output Z2WMADVSHPX240 to LAVA output received in OTM**
        that.leftArrow(canvas,data,800,445)//from LAVA Output Z2WMADVSHPX240 to LAVA output received in OTM**

        that.rect(canvas,data,900,160,200,40,22)  // Outbound Delivery [ZACT] **
        that.text(canvas,data,915,180,200,40,22)  // Outbound Delivery [ZACT] **

        that.rect(canvas,data,900,230,200,40,23)  // Shipment Completion [ZSH3] **
        that.text(canvas,data,915,250,200,40,23) // Shipment Completion [ZSH3] **

        that.rect(canvas,data,1120,130,135,70,25) // Shipment Actuals IDoc received from ECC **
        that.text(canvas,data,1125,145,135,70,25) // Shipment Actuals IDoc received from ECC **

        that.line(canvas,data,1255,170,1270,170)//horizontal line from Shipment Actuals IDoc received from ECC - top box
        that.line(canvas,data,1270,170,1270,310)//vertical line downwards from Shipment Actuals IDoc received from ECC - top box
        that.line(canvas,data,1270,310,390,310)//horizontal line towards left
        that.rightArrow(canvas,data,390,310)//towards otm shipment

        that.rect(canvas,data,1120,230,135,60,26)// Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01
        that.text(canvas,data,1125,245,135,60,26)// Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01

        that.line(canvas,data,1100,175,1120,175)//from Outbound Delivery [ZACT] to Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01
        that.leftArrow(canvas,data,1120,175)// from Outbound Delivery [ZACT] to Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01

        that.line(canvas,data,1100,250,1120,250)//from Shipment Completion [ZSH3] to Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01
        that.leftArrow(canvas,data,1120,250)//from Shipment Completion [ZSH3] to Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01

        that.rect(canvas,data,1290,130,120,70,29)//  Goods Receipt   (MIGO)**
        that.text(canvas,data,1300,150,120 ,70,29)// Goods Receipt   (MIGO)**

        that.rect(canvas,data,1290,230,120,70,30)//  Material Document **
        that.text(canvas,data,1300,250,120 ,70,30)//Material Document **

        that.line(canvas,data,1340,300,1340,520)//vertical line downwards from Material document
        that.downArrow(canvas,data,1340,520)//vertical line downwards from Material document
        that.line(canvas,data,1340,520,60,520)//horizontal line towards left
        that.rightArrow(canvas,data,60,520)//horizontal line towards left
        that.line(canvas,data,60,520,60,230)
        that.upArrow(canvas,data,60,230)

        that.rect(canvas,data,1435,230,125,70,32)//  GR Interface triggered in ECC  **
        that.text(canvas,data,1438,260,125,70,32)// GR Interface triggered in ECC  **

        that.rect(canvas,data,1595,200,140,70,34)//  GR Interface IDOC received from ECC Msg type: Z2SDSHPMNT01 Msg Variant: GR
        that.text(canvas,data,1605,220,140,70,34)//GR Interface IDOC received from ECC Msg type: Z2SDSHPMNT01 Msg Variant: GR


              return canvas;
            }  , 1000 );

        },


      //Source_Sourcing_Service Procurement for Transport Management

        SSRC01A8_SRC_ServiceProcurement_TM : function(x){
          var model = this.uisCodeCheck("SSRC01A8");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source_Sourcing_Service Procurement for Transport Management";
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
        that.rect(canvas,data,200,10,800,40,0)//ECC
        that.text(canvas,data,600,35,300,40,0)//ECC


        //second line
        that.rect(canvas,data,200,70,150,40,1)//File from UTMS Planner
        that.text(canvas,data,210,95,150,40,1)//File from UTMS Planner

        that.rect(canvas,data,380,70,620,40,3)//Procurement process in ECC
        that.text(canvas,data,580,95,300,40,3)//Procurement process in ECC



        //tasks
        that.rect(canvas,data,200,130,100,70,2)//Received text file from UTMS planner via email
        that.text(canvas,data,205,155,100,70,2)//Received text file from UTMS planner via email

        that.line(canvas,data,300,165,390,165)//from Received text filefrom UTMSplanner via email to Upload text file forPO generationZSERV_POR2
        that.leftArrow(canvas,data,390,165)//from Received text filefrom UTMSplanner via email to Upload text file forPO generationZSERV_POR2

        that.rect(canvas,data,390,130,110,70,4)//Upload text file forPO generationZSERV_POR2
        that.text(canvas,data,395,155,110,70,4)//Upload text file forPO generationZSERV_POR2

        that.line(canvas,data,500,165,620,165)//from Upload text file forPO generationZSERV_POR2 to Release PurchaseOrderME28/Z2SRC0550
        that.leftArrow(canvas,data,620,165)//from Upload text file forPO generationZSERV_POR2 to Release PurchaseOrderME28/Z2SRC0550

        that.rect(canvas,data,620,130,110,70,5)//Release Purchase Order ME28/Z2SRC0550
        that.text(canvas,data,625,155,110,70,5)//Release Purchase Order ME28/Z2SRC0550

        that.line(canvas,data,730,165,850,165)//from Release Purchase Order ME28/Z2SRC0550 to Post Service EntrySheet and ServiceAcceptanceZSERV_ACC
        that.leftArrow(canvas,data,850,165)//from Release Purchase Order ME28/Z2SRC0550 to Post Service EntrySheet and ServiceAcceptanceZSERV_ACC

        that.rect(canvas,data,850,130,110,70,6)//Post Service Entry Sheet and Service Acceptance ZSERV_ACC
        that.text(canvas,data,855,150,110,70,6)//Post Service Entry Sheet and Service Acceptance ZSERV_ACC

              return canvas;
            }  , 1000 );

        },



      //Source_Sourcing_Purchasing Master Data-MRP-Supplier Det

        SSRC01A2_SRC_PurchasingMasterData_MRPSup : function(x){
          var model = this.uisCodeCheck("SSRC01A2");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Source_Sourcing_Purchasing Master Data-MRP-Supplier Det";
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
        that.rect(canvas,data,10,10,880,40,0)//ECC
        that.text(canvas,data,400,35,880,40,0)//ECC

        that.rect(canvas,data,910,10,340,40,10)//APO
        that.text(canvas,data,1060,35,340,40,10)//APO

        that.rect(canvas,data,1270,10,310,40,15)//ECC second
        that.text(canvas,data,1400,35,310,40,15)//ECC second


        //second line
        that.rect(canvas,data,10,70,180,40,1)//Master Data Replication to APO
        that.text(canvas,data,15,95,180,40,1)//Master Data Replication to APO

        that.rect(canvas,data,210,70,610,25,3)//Source Determination
        that.text(canvas,data,450,85,610,25,3)//Source Determination

        that.rect(canvas,data,910,70,340,40,11)//Demand Determination
        that.text(canvas,data,1020,95,340,40,11)//Demand Determination

        that.rect(canvas,data,1270,70,310,40,16)//Requirement Creation
        that.text(canvas,data,1370,95,310,40,16)//Requirement Creation
        //tasks
        that.rect(canvas,data,40,130,120,60,2)//Master Data replication via Core Interface (CIF)
        that.text(canvas,data,45,150,120,60,2)//Master Data replication via Core Interface (CIF)

        that.line(canvas,data,85,190,85,260)//vertical line from Master Data replication via Core Interface (CIF)
        that.line(canvas,data,85,260,910,260)//horizontal line connecting Master Data replication via Core Interface(CIF) to Master Data Replication
        that.leftArrow(canvas,data,910,260)//horizontal line connecting Master Data replication via Core Interface(CIF) to Master Data Replication

        that.rect(canvas,data,210,130,120,60,4)//Quota Arrangement(MEQ1)
        that.text(canvas,data,215,150,120,60,4)//Quota Arrangement(MEQ1)

        that.line(canvas,data,330,160,340,160)//horizontal line from Quota arrangement(MEQ1)
        that.line(canvas,data,340,160,340,365)//vertical line
        that.line(canvas,data,340,365,790,365)//horizontal line connecting Quota arrangement(MEQ1) to light green rect
        that.leftArrow(canvas,data,790,365)//connecting Quota arrangement(MEQ1) to light green rect

        that.rect(canvas,data,360,130,140,60,5)//SourceList (ME01/Z7MM_SRCGEN)
        that.text(canvas,data,365,150,140,60,5)//SourceList (ME01/Z7MM_SRCGEN)

        that.line(canvas,data,500,175,510,175)//horizontal line from SourceList (ME01/Z7MM_SRCGEN)
        that.line(canvas,data,510,175,510,350)//vertical line
        that.line(canvas,data,510,350,790,350)//horizontal line connecting SourceList (ME01/Z7MM_SRCGEN) to light green rect
        that.leftArrow(canvas,data,790,350)//connecting SourceList (ME01/Z7MM_SRCGEN) to light green rect

        that.rect(canvas,data,550,130,120,60,6)//Contract (via CLM/ME31K)
        that.text(canvas,data,555,150,120,60,6)//Contract (via CLM/ME31K)

        that.line(canvas,data,670,160,680,160)//horizontal line from Contract (via CLM/ME31K)
        that.line(canvas,data,680,160,680,335)//vertical line
        that.line(canvas,data,680,335,790,335)//horizontal line connecting Contract (via CLM/ME31K) to light green rect
        that.leftArrow(canvas,data,790,335)//connecting Contract (via CLM/ME31K) to light green rect

        that.rect(canvas,data,700,130,120,60,7)//Purchasing Info Record (ME11)
        that.text(canvas,data,705,150,120,60,7)//Purchasing Info Record (ME11)

        that.line(canvas,data,800,190,800,320)//vertical line from Purchasing Info Record (ME11) to light green rect
        that.downArrow(canvas,data,800,320)//vertical line from Purchasing Info Record (ME11) to light green rect

        that.line(canvas,data,820,160,930,160)//from Purchasing InfoRecord (ME11) to Purchasing Info Record Replication
        that.leftArrow(canvas,data,930,160)//from Purchasing InfoRecord (ME11) to Purchasing Info Record Replication

        that.rect(canvas,data,500,95,80,20,8)//CLM in blue color
        that.text(canvas,data,525,110,80,20,8)//CLM in blue color

        that.line(canvas,data,515,115,515,150)//vertical line downwards from CLM
        //that.downArrow(canvas,data,515,150)//vertical line downwards from CLM

        that.line(canvas,data,515,150,550,150)//from CLM to Contract (viaCLM/ME31K)
        that.leftArrow(canvas,data,550,150)//from CLM to Contract (viaCLM/ME31K)

        that.rect(canvas,data,790,320,80,50,9)//light Green rectangle
        //poly(790,320,50,9)

        that.line(canvas,data,870,325,1400,325)
        that.leftArrow(canvas,data,1400,325)

        that.rect(canvas,data,910,230,120,60,12)//Master Data Replication
        that.text(canvas,data,920,250,120,60,12)//Master Data Replication

        that.rect(canvas,data,930,130,120,60,13)//Purchasing Info Record Replication
        that.text(canvas,data,940,150,120,60,13)//Purchasing Info Record Replication

        that.line(canvas,data,1050,160,1100,160)// from Purchasing Info Record Replication to Forecast Demand and Requirement (FERT)
        that.leftArrow(canvas,data,1100,160)// from Purchasing Info Record Replication to Forecast Demand and Requirement (FERT)

        that.rect(canvas,data,1100,130,125,60,14)//Forecast Demand and Requirement  (FERT)
        that.text(canvas,data,1105,150,125,60,14)//Forecast Demand and Requirement  (FERT)

        that.line(canvas,data,1225,160,1280,160)//from Forecast Demand andRequirement (FERT) to RequirementReplication in ECC
        that.leftArrow(canvas,data,1280,160)//from Forecast Demand andRequirement (FERT) to RequirementReplication in ECC

        that.rect(canvas,data,1280,130,120,60,17)//Requirement Replication in ECC
        that.text(canvas,data,1285,150,120,60,17)//Requirement Replication in ECC

        that.line(canvas,data,1400,160,1450,160)//from RequirementReplication in ECC to Purchase Requisition
        that.leftArrow(canvas,data,1450,160)//from RequirementReplication in ECC to Purchase Requisition

        that.rect(canvas,data,1400,270,130,60,18)//Requirement Planning(MD01/MD02/MDBT or batch job)
        that.text(canvas,data,1405,290,130,60,18)//Requirement Planning(MD01/MD02/MDBT or batch job)

        //that.line(canvas,data,1645,300,1650,300)//horizontal line from requirement Planning(MD01/MD02/MDBT or batch job)
        that.line(canvas,data,1490,270,1490,190)//vertical line
        that.upArrow(canvas,data,1490,190)

        that.rect(canvas,data,1450,130,125,60,19)//Purchase Requisition
        that.text(canvas,data,1455,155,125,60,19)//Purchase Requisition
              return canvas;
            }  , 1000 );

        },


      //Primary Transportation_Deliver_SU to DC Transfers_V4

        SDEL04C9_PT_Del_SUtoDC_Transfer : function(x){
          var model = this.uisCodeCheck("SDEL04C9");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Primary Transportation_Deliver_SU to DC Transfers_V4";
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
            that.rect(canvas,data,10,10,240,40,0)//ECC **
            that.text(canvas,data,110,35,300,40,0)//ECC **

            that.rect(canvas,data,270,10,120,40,4) //OTM **
            that.text(canvas,data,305,35,300,40,4) //OTM **

            that.rect(canvas,data,400,10,700,40,8) //ECC second **
            that.text(canvas,data,700,35,700,40,8)//ECC second **

            that.rect(canvas,data,1110,10,140,40,24)  // OTM second **
            that.text(canvas,data,1145,30,150,40,24) //OTM second **

            that.rect(canvas,data,1270,10,290,40,27)// ECC third **
            that.text(canvas,data,1320,30,290,40,27)//ECC third**

            that.rect(canvas,data,1570,10,200,40,33)// OTM third **
            that.text(canvas,data,1600,30,200,40,33)// OTM third **


            //second line
            that.rect(canvas,data,10,70,240,40,1) // ECC Purchasing Process **
            that.text(canvas,data,40,95,300,40,1)   // ECC Purchasing Process **


            that.rect(canvas,data,270,70,120,40,5) //Interface Delivery to OTM **
            that.text(canvas,data,285,85,100,40,5) //Interface Delivery to OTM **

            that.rect(canvas,data,400,70,200,40,9)  // OTM Shipment interface **
            that.text(canvas,data,410,90,110,40,9)  // OTM Shipment interface **

            that.rect(canvas,data,610,70,280,40,14) // ECC Picking & Goods Issue Process (Outbound Flow) **
            that.text(canvas,data,615,85,280,40,14) //ECC Picking & Goods Issue Process (Outbound Flow) **

            that.rect(canvas,data,900,70,200,40,21) // OTM Shipment Actuals Interface (Outbound Flow) **
            that.text(canvas,data,915,85,200,40,21)  //OTM Shipment Actuals Interface (Outbound Flow) **

            that.rect(canvas,data,1280,70,135,40,28)//  ECC Receiving Process**
            that.text(canvas,data,1285,90,135,40,28)//  ECC Receiving Process**

            that.rect(canvas,data,1425,70,135,40,31)//  OTM Goods Receipt Interface**
            that.text(canvas,data,1435,90,135,40,31)// OTM Goods Receipt Interface**


            //tasks
            that.rect(canvas,data,10,160,100,70,2) //Purchase Order creation ME21N **
            that.text(canvas,data,15,185,100,40,2) //Purchase Order creation ME21N **

            that.line(canvas,data,110,200,140,200) //Purchase order creation to Outbound delivery A creation**
            that.leftArrow(canvas,data,140,200)    //Purchase order creation to Outbound delivery A creation**

            that.rect(canvas,data,140,160,105,70,3)//Outbound Delivery A creation - type NL **
            that.text(canvas,data,145,185,100,40,3)//Outbound Delivery A creation - type NL **

            that.rect(canvas,data,280,160,100,70,6)//Delivery sent to OTM [ZETM/TPSDLS] **
            that.text(canvas,data,290,185,100,40,6)//Delivery sent to OTM [ZETM/TPSDLS] **

            that.line(canvas,data,245,215,280,215)//outbound delivery to delivery sent to OTM**
            that.leftArrow(canvas,data,280,215)//outbound delivery to delivery sent to OTM**
            that.line(canvas,data,245,180,280,180)// delivery sent to OTM to outbound delivery**
            that.rightArrow(canvas,data,245,180)// delivery sent to OTM to outbound delivery**

            that.rect(canvas,data,280,300,100,70,7)//OTM Shipment**
            that.text(canvas,data,290,335,100,70,7)//OTM Shipment**

            that.line(canvas,data,330,230,330,300)//delivery sent to OTM to OTM shipment **
            that.downArrow(canvas,data,330,300)//delivery sent to OTM to OTM shipment **

            that.rect(canvas,data,400,160,85,70,10) //Shipment created in ECC (SHIPPL) **
            that.text(canvas,data,405,185,80,70,10) //Shipment created in ECC (SHIPPL) **

            that.rect(canvas,data,510,160,90,70,11) // Delivery Linkage **
            that.text(canvas,data,512,185,90,70,11)  // Delivery Linkage **

            that.line(canvas,data,485,195,510,195)//shipment created in ECC to delivery linkage **
            that.leftArrow(canvas,data,510,195)//shipment created in ECC to delivery linkage **

            that.line(canvas,data,440,230,440,250)// shipment created in ECC to shipment acknowledge interface **
            that.line(canvas,data,440,290,440,340) // shipment acknowledge interface to shipment ack XML in ECC **
            that.downArrow(canvas,data,440,340)// shipment acknowledge interface to shipment ack XML in ECC **

            that.line(canvas,data,380,350,390,350) // from otm shipment ** horizontal below
            that.line(canvas,data,390,350,390,200) // from otm shipement ** vertical
            that.line(canvas,data,390,200,400,200) // from otm shipment ** horizontal top
            that.leftArrow(canvas,data,400,200)//from otm shipment to Shipmentcreated in ECC (SHIPPL) **

            that.rect(canvas,data,400,250,200,40,12)  // Shipment Acknowledgement Interface ** in orange
            that.text(canvas,data,410,270,200,40,12)  // Shipment Acknowledgement Interface ** in orange

            that.rect(canvas,data,400,340,110,70,13)  //Shipment Acknowledgement XML created in ECC **
            that.text(canvas,data,405,355,90,70,13)  //Shipment Acknowledgement XML created in ECC **

            that.line(canvas,data,510,355,550,355)//Shipment Ack XML created inECC to Shipment Ack recvd in OTM**
            that.leftArrow(canvas,data,550,355)//Shipment Ack XML created inECC to Shipment Ack recvd in OTM**

            that.rect(canvas,data,660,160,120,25,15) //Picking (VL02N) **
            that.text(canvas,data,680,175,100,70,15)//Picking (VL02N) **

            that.line(canvas,data,680,185,680,220) // from Picking(VL02N) to Deliver goods issue((VL02N)
            that.downArrow(canvas,data,680,220) //from Picking(VL02N) to Deliver goods issue((VL02N)

            that.line(canvas,data,760,185,760,220) // from Picking(VL02N) to Deliver goods issue via interface -Z2WMDELCNFX20
            that.downArrow(canvas,data,760,220)// from Picking(VL02N) to Deliver goods issue via interface -Z2WMDELCNFX20

            that.rect(canvas,data,620,220,100,70,16) //Delivery Goods Issue  (VL02N) **
            that.text(canvas,data,630,250,100,70,16) //Delivery Goods Issue  (VL02N) **

            that.rect(canvas,data,735,220,115,70,17) //Delivery Goods Issue via interface - Z2WMDELCNFX200 **
            that.text(canvas,data,738,240,115,70,17) //Delivery Goods Issue via interface - Z2WMDELCNFX200 **

            that.line(canvas,data,850,250,900,250)//from Delivery Goods Z2WMDELCNFX200 to Shipment Completion [ZSH3]
            that.leftArrow(canvas,data,900,250)//from Delivery Goods Z2WMDELCNFX200 to Shipment Completion [ZSH3]
            that.line(canvas,data,865,250,865,180)//vertical line with no arrows
            that.line(canvas,data,865,180,900,180)//horizontal line from Delivery Goods Z2WMDELCNFX20 to Outbound Delivery [ZACT]
            that.leftArrow(canvas,data,900,180)//from Delivery Goods Z2WMDELCNFX20 to Outbound Delivery [ZACT]

            that.rect(canvas,data,550,340,160,40,18) //Shipment Acknowledgement received in OTM **
            that.text(canvas,data,555,355,160,40,18) //Shipment Acknowledgement received in OTM **

            that.rect(canvas,data,600,420,180,50,19) //LAVA Output type is triggered from delivery - Z2WMADVSHPX240**
            that.text(canvas,data,615,435,180,50,19) //LAVA Output type is triggered from delivery - Z2WMADVSHPX240**

            that.rect(canvas,data,800,420,180,50,20) //LAVA oputput received in OTM**
            that.text(canvas,data,810,435,180,50,20) //LAVA oputput received in OTM**

            that.line(canvas,data,780,445,800,445)//from LAVA Output Z2WMADVSHPX240 to LAVA output received in OTM**
            that.leftArrow(canvas,data,800,445)//from LAVA Output Z2WMADVSHPX240 to LAVA output received in OTM**

            that.rect(canvas,data,900,160,200,40,22)  // Outbound Delivery [ZACT] **
            that.text(canvas,data,915,180,200,40,22)  // Outbound Delivery [ZACT] **

            that.rect(canvas,data,900,230,200,40,23)  // Shipment Completion [ZSH3] **
            that.text(canvas,data,915,250,200,40,23) // Shipment Completion [ZSH3] **

            that.rect(canvas,data,1120,130,135,70,25) // Shipment Actuals IDoc received from ECC **
            that.text(canvas,data,1125,145,135,70,25) // Shipment Actuals IDoc received from ECC **
            that.rect(canvas,data,1120,230,135,60,26)// Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01
            that.text(canvas,data,1125,245,135,60,26)// Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01

            that.line(canvas,data,1100,175,1120,175)//from Outbound Delivery [ZACT] to Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01
            that.leftArrow(canvas,data,1120,175)// from Outbound Delivery [ZACT] to Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01

            that.line(canvas,data,1100,250,1120,250)//from Shipment Completion [ZSH3] to Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01
            that.leftArrow(canvas,data,1120,250)//from Shipment Completion [ZSH3] to Shipment Actuals IDoc recvd frm ECC  Msg type: Z2SDSHPMNT01

            that.rect(canvas,data,1290,130,120,70,29)//  Goods Receipt   (MIGO)**
            that.text(canvas,data,1300,150,120 ,70,29)// Goods Receipt   (MIGO)**

            that.rect(canvas,data,1290,230,120,70,30)//  Material Document **
            that.text(canvas,data,1300,250,120 ,70,30)//Material Document **

            that.line(canvas,data,1340,300,1340,520)//vertical line downwards from Material document
            that.downArrow(canvas,data,1340,520)//vertical line downwards from Material document
            that.line(canvas,data,1340,520,60,520)//horizontal line towards left
            that.rightArrow(canvas,data,60,520)//horizontal line towards left
            that.line(canvas,data,60,520,60,230)
            that.upArrow(canvas,data,60,230)

            that.rect(canvas,data,1435,230,125,70,32)//  GR Interface triggered in ECC  **
            that.text(canvas,data,1438,260,125,70,32)// GR Interface triggered in ECC  **

            that.rect(canvas,data,1595,200,135,70,34)//  GR Interface IDOC received from ECC Msg type: Z2SDSHPMNT01 Msg Variant: GR
            that.text(canvas,data,1605,220,135,70,34)//GR Interface IDOC received from ECC Msg type: Z2SDSHPMNT01 Msg Variant: GR




              return canvas;
            }  , 1000 );

        },


        //DC Warehousing_Deliver_Goods Receipt using WMS_V4

        SDEL05D6_GoodsReceiptViaWMS : function(x){
          var model = this.uisCodeCheck("SDEL05D6");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="DC Warehousing_Deliver_Goods Receipt using WMS_V4";
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
            that.rect(canvas,data,10,10,300,40,0)
            that.text(canvas,data,140,35,300,40,0)
            that.rect(canvas,data,350,10,130,40,13)
            that.text(canvas,data,390,35,130,40,13)
            that.rect(canvas,data,520,10,130,40,0)//Delivery sent to OTM (ZETM)
            that.text(canvas,data,560,35,130,40,0)
            that.rect(canvas,data,710,10,620,40,9)
            that.text(canvas,data,990,35,620,40,9)


            //second line
            that.rect(canvas,data,10,70,300,40,1) // 20px difference from first row
            that.text(canvas,data,55,95,300,40,1)
            that.rect(canvas,data,350,70,130,40,4)
            that.text(canvas,data,360,90,130,40,4)
            that.rect(canvas,data,520,70,130,40,7)//Delivery sent to OTM (ZETM)
            that.text(canvas,data,520,95,130,40,7)
            that.rect(canvas,data,710,70,110,40,10)
            that.text(canvas,data,720,90,110,40,10)
            that.rect(canvas,data,880,70,110,40,14)//
            that.text(canvas,data,890,90,110,40,14)
            that.rect(canvas,data,1050,70,110,40,15)//Delivery Confirmation sent to WMS
            that.text(canvas,data,1060,90,110,40,15)
            that.rect(canvas,data,1220,70,110,40,17)//Delivery Confirmation (WMS200)
            that.text(canvas,data,1230,90,110,40,17)

            //tasks
            that.rect(canvas,data,30,180,110,80,2) //Purchase Order (UB) creation ME21N
            that.text(canvas,data,45,205,110,80,2)
            that.line(canvas,data,140,220,200,220)
            that.leftArrow(canvas,data,200,220)
            that.rect(canvas,data,200,180,110,80,3) //Outbound Delivery creation type NL - Output Z003
            that.text(canvas,data,210,205,110,80,3)
            that.line(canvas,data,310,220,350,220)
            that.leftArrow(canvas,data,350,220)
            that.line(canvas,data,260,160,260,180)
            that.line(canvas,data,260,160,760,160)
            that.line(canvas,data,760,160,760,180)
            that.downArrow(canvas,data,760,180)
            that.rect(canvas,data,350,180,130,80,5)//Delivery sent to OTM (ZETM)
            that.text(canvas,data,360,205,130,70,5)
            that.line(canvas,data,410,260,410,300)
            that.downArrow(canvas,data,410,300)
            that.rect(canvas,data,350,300,130,80,6)//OTM Shipment
            that.text(canvas,data,370,335,130,70,6)
            that.line(canvas,data,480,340,580,340)
            that.line(canvas,data,580,340,580,260)
            that.upArrow(canvas,data,580,260)
            that.rect(canvas,data,520,180,130,80,8)//Shipment 1 created in ECC
            that.text(canvas,data,530,205,130,70,8)
            that.line(canvas,data,650,220,710,220)
            that.leftArrow(canvas,data,710,220)
            that.rect(canvas,data,710,180,110,80,11)//Delivery Instruction (WMS190)
            that.text(canvas,data,710,205,110,70,11)
            that.line(canvas,data,820,220,880,220)
            that.leftArrow(canvas,data,880,220)
            that.rect(canvas,data,880,180,110,80,12)//Delivery Confirmation sent to WMS
            that.text(canvas,data,890,205,110,70,12)
            that.line(canvas,data,990,220,1050,220)
            that.leftArrow(canvas,data,1050,220)
            that.rect(canvas,data,1050,180,110,80,16)//Delivery Confirmation (WMS200)
            that.text(canvas,data,1060,205,110,70,16)
            that.line(canvas,data,1160,220,1220,220)
            that.leftArrow(canvas,data,1220,220)
            that.line(canvas,data,1100,260,1100,280)
            that.line(canvas,data,1100,280,460,280)
            that.line(canvas,data,460,280,460,260)
            that.upArrow(canvas,data,460,260)
            that.rect(canvas,data,1220,180,110,80,18)//Goods Receipt Confirmation for PO (WMS250)
            that.text(canvas,data,1230,205,110,70,18)
            that.line(canvas,data,1280,260,1280,400)
            that.line(canvas,data,1280,400,90,400)
            that.line(canvas,data,90,400,90,260)
            that.upArrow(canvas,data,90,260)
              return canvas;
            }  , 1000 );

        },


      //Warehousing_Deliver_Stock_Management_Interfaces_V4_WMS_0300

        SDEL05D5_StockManagementInterface_0300 : function(x){
          var model = this.uisCodeCheck("SDEL05D5_1");
          var data = sap.ui.getCore().getModel("bindingModel").oData;
          x.getView().getModel("oModelHeader").oData.header="Warehousing_Deliver_Stock_Management_Interfaces_V4_WMS_0300";
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
            that.rect(canvas,data,150,10,500,40,0) // WMS
            that.text(canvas,data,400,35,300,40,0)

            that.rect(canvas,data,150,90,500,40,1) // Change Stock Status
            that.text(canvas,data,360,115,300,40,1)
            that.rect(canvas,data,150,170,200,60,2) // Change Stock Status
            that.text(canvas,data,190,205,300,40,2)
            that.rect(canvas,data,450,170,200,60,3) // Change Stock Status  Interface to ECC
            that.text(canvas,data,458,200,200,40,3)


            //Second Column
            that.rect(canvas,data,700,10,500,40,4) // ECC
            that.text(canvas,data,950,35,300,40,4)
            that.rect(canvas,data,700,90,500,40,5) // Change Stock Status Confirmation
            that.text(canvas,data,850,115,300,40,5)
            that.rect(canvas,data,700,170,202,60,6) // Change Stock Status Confirmation Interface Z2WMCSSCNFX300
            that.text(canvas,data,710,190,190,40,6)
            that.rect(canvas,data,700,270,202,60,7) // Post Material Document Stock type transfer posting
            that.text(canvas,data,710,290,190,40,7)

            // Line And Arrow
            that.line(canvas,data,350,200,450,200) // line connecting index - 2 & index - 3
            that.leftArrow(canvas,data,450,200)
            that.line(canvas,data,650,200,700,200) // line connecting index - 3 & index - 6
            that.leftArrow(canvas,data,700,200)
            that.line(canvas,data,800,230,800,270) // line connecting index - 6 & index - 7
            that.downArrow(canvas,data,800,270)

              return canvas;
          }  , 1000 );

      },

      SDEL04D2_Z2ICT_UnplannedLoad_STR : function(x){
  var model = this.uisCodeCheck("SDEL04D2_6");
  var data = sap.ui.getCore().getModel("bindingModel").oData;
  x.getView().getModel("oModelHeader").oData.header="Primary Transportation Deliver Z2ICT Flow Unplanned Load STP";
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
     		that.rect(canvas,data,10,10,400,40,0) // ECC
            that.text(canvas,data,200,35,300,40,0)
            that.rect(canvas,data,10,60,400,70,1) //Inter Company Transfer(ICT)
            that.text(canvas,data,50,90,1000,40,1)
            that.freeText(canvas,data,10,170,1000,40,2,"30px") // label---- Unplanned Load PO - Standby Trailer Process
            //left side boxes
            that.rect(canvas,data,10,200,180,80,3) // Run Z2ICT -Unplanned Load for PO
            that.text(canvas,data,30,225,150,40,3)
            that.line(canvas,data,100,280,100,300) //output line to "No transport relevant.........."
            that.downArrow(canvas,data,100,300)
            that.rect(canvas,data,20,300,150,80,4) //No Transport Relevant" is greyed out Haulier is mandatory
            that.text(canvas,data,30,330,150,40,4)
            that.line(canvas,data,100,380,100,400)// output line to "List of possible equipment.........."
            that.downArrow(canvas,data,100,400)
            that.rect(canvas,data,20,400,150,80,5) //List of possible Equipment for selected Haulier are maintained in Z0MM_STANDBY
            that.text(canvas,data,30,420,130,40,5)
            that.line(canvas,data,170,440,210,440) // output line to "Purchase order created..........."
            that.line(canvas,data,210,440,210,240)
            that.line(canvas,data,210,240,230,240)
            that.leftArrow(canvas,data,230,240)
            //right side boxes
            that.rect(canvas,data,230,200,180,80,6) // Purchase Order Created Equipment field populated Standby Trailer indicator marked Shipping Condition 28
            that.text(canvas,data,250,220,150,40,6)
            that.line(canvas,data,320,280,320,300) // output line to "Delivery Created in reference to PO(output ZETM"
            that.downArrow(canvas,data,320,300)
            that.rect(canvas,data,230,300,180,60,7)// Delivery Created in reference to PO(output ZETM)
            that.text(canvas,data,250,320,150,40,7)
            that.line(canvas,data,410,330,430,330)// output line to column2 box "Delivery Interface TPSDLS"
            that.leftArrow(canvas,data,430,330)
            that.line(canvas,data,320,360,320,380) // output line to "Delivery Picked & Goods Issue........"
            that.downArrow(canvas,data,320,380)
            that.rect(canvas,data,230,380,180,60,8)// Delivery Picked & Goods Issue Posted
            that.text(canvas,data,250,400,150,40,8)
            that.line(canvas,data,410,410,430,410)// output line to column2 box "NO Shipment Actuals IDoc......."
            that.leftArrow(canvas,data,430,410)
            that.line(canvas,data,320,440,320,460) // output line to "Billing document posted."
            that.downArrow(canvas,data,320,460)


            that.rect(canvas,data,230,460,180,60,9)//Billing document posted
            that.text(canvas,data,250,490,150,40,9)

////////////////        column2    ///////////////////////////
            that.rect(canvas,data,430,10,200,40,10) // OTM
            that.text(canvas,data,510,30,150,40,10)
            that.rect(canvas,data,430,60,200,70,11) //OTM Interfaces
            that.text(canvas,data,490,90,150,40,11)
            that.rect(canvas,data,430,300,200,60,12) // Delivery Interface TPSDLS
            that.text(canvas,data,450,330,150,40,12)
            that.line(canvas,data,630,330,650,330)// output line to column3 box "Shipment created in ECC (SHIPPL)"
            that.leftArrow(canvas,data,650,330)
            that.rect(canvas,data,430,380,200,60,13)//NO Shipment Actuals IDoc yet Msg type: Z2SDSHPMNT01
            that.text(canvas,data,450,400,150,40,13)
//////////////          column3   //////////////////////////////
            that.rect(canvas,data,650,10,300,40,14)// ECC
            that.text(canvas,data,780,30,150,40,14)
            that.rect(canvas,data,650,60,300,70,15)//Shipment Interface
            that.text(canvas,data,750,90,150,40,15)
            //left side boxes
            that.rect(canvas,data,650,300,180,60,16)// Shipment created in ECC (SHIPPL)
            that.text(canvas,data,680,330,150,40,16)
            that.line(canvas,data,830,330,850,330) // output line to "Delivery Linkage"
            that.leftArrow(canvas,data,850,330)
            that.rect(canvas,data,850,300,100,60,17)// Delivery Linkage
            that.text(canvas,data,855,330,110,40,17)
            that.line(canvas,data,900,360,900,380)// output line to "Delivery Output ZACT, Shipment ......."
            that.downArrow(canvas,data,900,380)
            that.rect(canvas,data,850,380,100,90,18)// Delivery Output ZACT, Shipment Output ZSH3
            that.text(canvas,data,855,410,110,40,18)
            that.line(canvas,data,950,425,960,425)//output line to column4 box "Shipment Actuals Interface IDOC.........."
            that.line(canvas,data,960,425,960,230)
            that.line(canvas,data,960,230,980,230)
            that.leftArrow(canvas,data,980,230)
////////////           column 4   //////////////////////////////////
            that.rect(canvas,data,970,10,200,40,19)// OTM
            that.text(canvas,data,1050,30,150,40,19)

            that.rect(canvas,data,970,60,200,70,20)// Goods Issue / Shipment Actuals Ingerface
            that.text(canvas,data,990,90,150,40,20)

            that.rect(canvas,data,980,200,180,60,21)// Shipment Actuals Interface IDOC Msg tyoe: ZS2SDSHPMNT01
            that.text(canvas,data,990,220,150,40,21)


///////////     column 5  /////////////////////////////////////
            that.rect(canvas,data,1190,10,200,40,22)//  ECC
            that.text(canvas,data,1280,30,150,40,22)

            that.rect(canvas,data,1190,60,200,70,23)//ECC Goods Receipt Process
            that.text(canvas,data,1220,90,150,40,23)

            that.rect(canvas,data,1190,220,200,60,24)// Stocks received in Receiving site (MIGO)
            that.text(canvas,data,1210,240,150,40,24)
            that.line(canvas,data,1290,280,1290,300)// output line to "Material Document Created"
            that.downArrow(canvas,data,1290,300)

            that.rect(canvas,data,1190,300,200,60,25)// Material Document Created
            that.text(canvas,data,1210,330,150,40,25)
            that.line(canvas,data,1390,330,1400,330) // output line to column 6 box " GR Interface IDOC Msg type: Z2SDSHPMNT01".
            that.line(canvas,data,1400,330,1400,260)
            that.line(canvas,data,1400,260,1420,260)
            that.leftArrow(canvas,data,1420,260)

//////////      column 6 /////////////////////////////////////////
            that.rect(canvas,data,1410,10,150,40,26)//  OTM
            that.text(canvas,data,1470,30,150,40,26)

            that.rect(canvas,data,1410,60,150,70,27)// Goods Receipt Interface
            that.text(canvas,data,1430,90,130,40,27)

            that.rect(canvas,data,1420,220,130,80,28)// GR Interface IDOC Msg type: Z2SDSHPMNT01
            that.text(canvas,data,1430,240,120,40,28)



//--------------------UNPLANNED LOAD SO - STANDBY TRAILER PROCESS--------------------------------------------------------------------------------//

            that.freeText(canvas,data,10,600,1000,40,29,"30px") // label for Unplanned load so - standby trailer process ( In json file id starts from 29 )

/////////////   column1 ///////////////////////////////////////////////////
            that.rect(canvas,data,10,630,180,80,30) // Run Z2ICT -Unplanned Load for SO Standby Trailer checkbox ticked ( json id --> 30)
            that.text(canvas,data,30,660,150,40,30)
            that.line(canvas,data,100,710,100,730) //output line to "No transport relevant.........."
            that.downArrow(canvas,data,100,730)

            that.rect(canvas,data,20,730,150,80,31) //No Transport Relevant is greyed out Haulier is mandatory
            that.text(canvas,data,40,750,120,40,31)
            that.line(canvas,data,100,810,100,830)// output line to "List of possible equipment.........."
            that.downArrow(canvas,data,100,830)

            that.rect(canvas,data,20,830,150,80,32) //List of possible Equipment for selected Haulier are maintained in Z0MM_STANDBY
            that.text(canvas,data,40,850,120,40,32)
            that.line(canvas,data,170,870,210,870) // output line to "Sales order created..........."
            that.line(canvas,data,210,870,210,670)
            that.line(canvas,data,210,670,230,670)
            that.leftArrow(canvas,data,230,670)


            //right side boxes
            that.rect(canvas,data,230,630,180,80,33) // Sales Order Created Equipment field populated Standby Trailer indicator marked Shipping Condition 28
            that.text(canvas,data,250,650,150,40,33)
            that.line(canvas,data,320,710,320,730) // output line to "Delivery Created in reference to PO(output ZETM"
            that.downArrow(canvas,data,320,730)

            that.rect(canvas,data,230,730,180,60,34)// Delivery Created in reference to SO (output ZETM)
            that.text(canvas,data,250,750,150,40,34)
            that.line(canvas,data,410,760,430,760)// output line to column2 box "Delivery Interface TPSDLS"
            that.leftArrow(canvas,data,430,760)
            that.line(canvas,data,320,790,320,810) // output line to "Delivery Picked & Goods Issue........"
            that.downArrow(canvas,data,320,810)
            that.rect(canvas,data,230,810,180,60,35)// Delivery Picked & Goods Issue Posted
            that.text(canvas,data,250,830,150,40,35)
            that.line(canvas,data,410,830,430,830)// output line to column2 box "NO Shipment Actuals IDoc......."
            that.leftArrow(canvas,data,430,830)
            that.line(canvas,data,320,870,320,890) // output line to "Billing document posted."
            that.downArrow(canvas,data,320,890)
            that.rect(canvas,data,230,890,180,60,36)//Billing document posted
            that.text(canvas,data,250,920,150,40,36)
////////////////        column2    ///////////////////////////
            that.rect(canvas,data,430,730,200,60,37) // Delivery Interface TPSDLS
            that.text(canvas,data,450,760,150,40,37)
            that.line(canvas,data,630,760,650,760)// output line to column3 box "Shipment created in ECC (SHIPPL)"
            that.leftArrow(canvas,data,650,760)


            that.rect(canvas,data,430,810,200,60,38)//NO Shipment Actuals IDoc  Msg type: Z2SDSHPMNT01
            that.text(canvas,data,450,830,150,40,38)


//////////////          column3   //////////////////////////////

            //left side boxes
            that.rect(canvas,data,650,730,180,60,39)// Shipment created in ECC(SHIPPL)
            that.text(canvas,data,680,750,150,40,39)
            that.line(canvas,data,830,760,850,760) // output line to "Delivery Linkage"
            that.leftArrow(canvas,data,850,760)

            that.rect(canvas,data,850,730,100,60,40)// Delivery Linkage
            that.text(canvas,data,855,760,110,40,40)
            that.line(canvas,data,900,790,900,810)// output line to "Delivery Output ZACT, Shipment ......."
            that.downArrow(canvas,data,900,810)

            that.rect(canvas,data,850,810,100,90,41)// Delivery Output ZACT, Shipment Output ZSH3
            that.text(canvas,data,855,830,110,40,41)
            that.line(canvas,data,950,855,960,855)//output line to column4 box "Shipment Actuals Interface IDOC.........."
            that.line(canvas,data,960,855,960,660)
            that.line(canvas,data,960,660,980,660)
            that.leftArrow(canvas,data,980,660)

////////////             column 4   //////////////////////////////////

            that.rect(canvas,data,980,630,180,60,42)// Shipment Actuals Interface IDOC Msg tyoe: ZS2SDSHPMNT01
            that.text(canvas,data,990,650,150,40,42)

      return canvas;
  }  , 1000 );




},


      //Warehousing_Deliver_Stock_Management_Interfaces_V4_WMS_0305

      SDEL05D5_StockManagementInterface_0305 : function(x){
        var model = this.uisCodeCheck("SDEL05D5_2");
        var data = sap.ui.getCore().getModel("bindingModel").oData;
        x.getView().getModel("oModelHeader").oData.header="Warehousing_Deliver_Stock_Management_Interfaces_V4_WMS_0305";
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
            //First Column
            that.rect(canvas,data,150,10,500,40,0) // WMS
            that.text(canvas,data,400,35,300,40,0)
            that.rect(canvas,data,150,90,500,40,1) // Batch Code Change
            that.text(canvas,data,360,115,300,40,1)
            that.rect(canvas,data,150,170,200,60,2) // Batch code change
            that.text(canvas,data,190,205,300,40,2)
            that.rect(canvas,data,450,170,200,60,3) // Batch Code Change Interface to ECC
            that.text(canvas,data,458,200,190,40,3)
            //Second Column
            that.rect(canvas,data,700,10,500,40,4) // ECC
            that.text(canvas,data,950,35,300,40,4)
            that.rect(canvas,data,700,90,500,40,5) // Batch Code Change Confirmation
            that.text(canvas,data,850,115,300,40,5)
            that.rect(canvas,data,700,170,202,60,6) // Batch Code Change Confirmation Interface Z2WMBATCHCX305
            that.text(canvas,data,710,190,190,40,6)
            that.rect(canvas,data,700,270,202,60,7) // Post Material Document Batch to Batch Transfer Posting
            that.text(canvas,data,710,290,190,40,7)
            // Line And Arrow
            that.line(canvas,data,350,200,450,200) // line connecting index - 2 & index - 3
            that.leftArrow(canvas,data,450,200)
            that.line(canvas,data,650,200,700,200) // line connecting index - 3 & index - 6
            that.leftArrow(canvas,data,700,200)
            that.line(canvas,data,800,230,800,270) // line connecting index - 6 & index - 7
            that.downArrow(canvas,data,800,270)
          that.downArrow(canvas,data,800,270)

            return canvas;
        }  , 1000 );

    },


    //Warehousing_Deliver_Stock_Management_Interfaces_V4_WMS_0310

    SDEL05D5_StockManagementInterface_0310 : function(x){
      var model = this.uisCodeCheck("SDEL05D5_3");
      var data = sap.ui.getCore().getModel("bindingModel").oData;
      x.getView().getModel("oModelHeader").oData.header="Warehousing_Deliver_Stock_Management_Interfaces_V4_WMS_0310";
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
            that.rect(canvas,data,150,10,500,40,0) // WMS
            that.text(canvas,data,400,35,300,40,0)
            that.rect(canvas,data,150,90,500,40,1) // Stock Level Adjusment
            that.text(canvas,data,360,115,300,40,1)
            that.rect(canvas,data,150,170,200,60,2) // Perform stock level adjustment
            that.text(canvas,data,170,205,300,40,2)
            that.rect(canvas,data,450,170,200,60,3) // Stock adjustment Interface to ECC
            that.text(canvas,data,458,200,200,40,3)
            //Second Column
            that.rect(canvas,data,700,10,500,40,4) // ECC
            that.text(canvas,data,950,35,300,40,4)
            that.rect(canvas,data,700,90,500,40,5) // Stock Level Adjusment Confirmation
            that.text(canvas,data,850,115,300,40,5)
            that.rect(canvas,data,700,170,202,60,6) // Stock Level Adjusment Confirmation Interface Z2WMSLACNFX310
            that.text(canvas,data,710,190,196,40,6)
            that.rect(canvas,data,1000,170,202,60,7) // Generate Movement (MIGO)
            that.text(canvas,data,1020,200,190,40,7)
            that.rect(canvas,data,1000,280,202,60,8) // Material Document Transfer posting
            that.text(canvas,data,1020,310,190,40,8)
            // Line And Arrow
            that.line(canvas,data,350,200,450,200) // line connecting index - 2 & index - 3
            that.leftArrow(canvas,data,450,200)
            that.line(canvas,data,650,200,700,200) // line connecting index - 3 & index - 6
            that.leftArrow(canvas,data,700,200)
            that.line(canvas,data,902,200,1000,200) // line connecting index - 6 & index - 7
            that.leftArrow(canvas,data,1000,200)
            that.line(canvas,data,1102,230,1102,280) // line connecting index - 7 & index - 8
            that.downArrow(canvas,data,1102,280)
          return canvas;
      }  , 1000 );

  },


  //Warehousing_Deliver_Stock_Management_Interfaces_V4_WMS_0330

  SDEL05D5_StockManagementInterface_0330 : function(x){
    var model = this.uisCodeCheck("SDEL05D5_4");
    var data = sap.ui.getCore().getModel("bindingModel").oData;
    x.getView().getModel("oModelHeader").oData.header="Warehousing_Deliver_Stock_Management_Interfaces_V4_WMS_0330";
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
            that.rect(canvas,data,150,10,500,40,0) // WMS
            that.text(canvas,data,400,35,300,40,0)
            that.rect(canvas,data,150,90,500,40,1) // WMS & 3rd Party Stock Snapshot
            that.text(canvas,data,360,115,300,40,1)
            that.rect(canvas,data,150,170,200,60,2) // Trigger Stock Snapshot
            that.text(canvas,data,170,205,300,40,2)
            that.rect(canvas,data,450,170,200,60,3) // Stock Snapshot Interface to ECC
            that.text(canvas,data,458,200,200,40,3)
            //Second Column
            that.rect(canvas,data,700,10,500,40,4) // ECC
            that.text(canvas,data,950,35,300,40,4)
            that.rect(canvas,data,700,90,500,40,5) // WMS & 3rd Party Stock Snapshot Confirmation
            that.text(canvas,data,850,115,300,40,5)
            that.rect(canvas,data,700,170,202,60,6) // Stock Level Adjusment Confirmation Interface Z2WMSTKLVLZ330
            that.text(canvas,data,710,190,196,40,6)
            that.rect(canvas,data,1000,170,202,60,7) // Update Table (Normal Stock) Z2WMSREC_3PLP_WH (Consignment) Z2WMSREC_3PLP_CS
            that.text(canvas,data,1020,183,190,40,7)
            // Line And Arrow
            that.line(canvas,data,350,200,450,200) // line connecting index - 2 & index - 3
            that.leftArrow(canvas,data,450,200)
            that.line(canvas,data,650,200,700,200) // line connecting index - 3 & index - 6
            that.leftArrow(canvas,data,700,200)
            that.line(canvas,data,902,200,1000,200) // line connecting index - 6 & index - 7
            that.leftArrow(canvas,data,1000,200)
        return canvas;
    }  , 1000 );

},


//Warehousing_Deliver_Stock_Management_Interfaces_V4_WMS_0335

SDEL05D5_StockManagementInterface_0335 : function(x){
  var model = this.uisCodeCheck("SDEL05D5_5");
  var data = sap.ui.getCore().getModel("bindingModel").oData;
  x.getView().getModel("oModelHeader").oData.header="Warehousing_Deliver_Stock_Management_Interfaces_V4_WMS_0335";
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
            that.rect(canvas,data,150,10,500,40,0) // WMS
            that.text(canvas,data,400,35,300,40,0)
            that.rect(canvas,data,150,90,500,40,1) // 3rd Party Stock Movements
            that.text(canvas,data,360,115,300,40,1)
            that.rect(canvas,data,150,170,200,60,2) // Trigger Stock Movement Snapshot
            that.text(canvas,data,160,205,300,40,2)
            that.rect(canvas,data,450,170,200,60,3) // 3rd Party Stock Movements Interface to ECC
            that.text(canvas,data,458,200,190,40,3)
            //Second Column
            that.rect(canvas,data,700,10,500,40,4) // ECC
            that.text(canvas,data,950,35,300,40,4)
            that.rect(canvas,data,700,90,500,40,5) // 3rd Party Stock Movement Confirmation
            that.text(canvas,data,850,115,300,40,5)
            that.rect(canvas,data,700,170,202,60,6) // 3rd Party Stock Movement Confirmation Interface Z2WMSTKMVTZ335
            that.text(canvas,data,710,190,190,40,6)
            that.rect(canvas,data,700,270,202,60,7) // Update Table Z2WMS335_STK_MVT
            that.text(canvas,data,710,300,200,40,7)
            // Line And Arrow
            that.line(canvas,data,350,200,450,200) // line connecting index - 2 & index - 3
            that.leftArrow(canvas,data,450,200)
            that.line(canvas,data,650,200,700,200) // line connecting index - 3 & index - 6
            that.leftArrow(canvas,data,700,200)
            that.line(canvas,data,800,230,800,270) // line connecting index - 6 & index - 7
            that.downArrow(canvas,data,800,270)
      return canvas;
  }  , 1000 );

},


      //Source_Sourcing_USCC Procurement for Portugal

        SSRC01A7_SRC_USCCProcurementFor_Portugal : function(x){
	        var model = this.uisCodeCheck("SSRC01A7");
	        var data = sap.ui.getCore().getModel("bindingModel").oData;
	        x.getView().getModel("oModelHeader").oData.header="Source_Sourcing_USCC Procurement for Portugal";
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
						
						          // First Row
						that.rect(canvas,data,10,10,200,40,0) // CLM
						that.text(canvas,data,100,35,300,40,0)
						that.rect(canvas,data,10,80,200,40,1) // Purchase Contract Creation Process
						that.text(canvas,data,20,100,190,40,1)
						that.rect(canvas,data,10,150,200,50,2) // Purchase Contract creation
						that.text(canvas,data,20,175,190,40,2)
						// Second Row
						that.rect(canvas,data,260,10,670,40,3)  // ECC
						that.text(canvas,data,620,35,300,40,3)
						that.rect(canvas,data,260,80,150,40,4)   // Interface Contract  to ECC
						that.text(canvas,data,265,103,140,40,4)
						that.rect(canvas,data,260,150,150,50,5)  // Purchase Contract creation
						that.text(canvas,data,270,170,140,40,5)
						that.rect(canvas,data,460,80,470,40,6)   // Procurement process in ECC
						that.text(canvas,data,630,103,200,40,6)
						that.rect(canvas,data,460,150,190,50,7)   // Scheduling Agreement (SA) Creation (ME31L)
						that.text(canvas,data,470,170,180,40,7)
						that.rect(canvas,data,700,150,230,50,8)   // Change Contract and Scheduling Agreement (Price) ME32K or via job for the price
						that.text(canvas,data,710,170,220,40,8)
						// Third Row
						that.rect(canvas,data,990,10,540,40,9)  // Local System
						that.text(canvas,data,1200,35,300,40,9)
						that.rect(canvas,data,990,80,540,40,10)  // SU Procurement Process
						that.text(canvas,data,1195,105,300,40,10)
						that.rect(canvas,data,990,150,90,50,11)  // Scheduling Agreement
						that.text(canvas,data,1000,170,100,40,11)
						that.rect(canvas,data,1130,150,100,50,12)  // Sched. Line
						that.text(canvas,data,1140,175,100,40,12)
						that.rect(canvas,data,1280,150,100,50,13)  // GR
						that.text(canvas,data,1320,175,100,40,13)
						that.rect(canvas,data,1430,150,100,50,14)  // IV
						that.text(canvas,data,1470,175,100,40,14)
						// Line And Arrow
						that.line(canvas,data,210,170,260,170) // line connecting index - 2 & index - 5
						that.leftArrow(canvas,data,260,170)
						that.line(canvas,data,410,170,460,170) // line connecting index - 5 & index - 7
						that.leftArrow(canvas,data,460,170)
						that.line(canvas,data,650,170,700,170) // line connecting index - 7 & index - 8
						that.leftArrow(canvas,data,700,170)
						//Dotted line
						that.dottedLine(canvas,data,930,170,990,170) // line connecting index - 8 & index - 11
						that.leftArrow(canvas,data,990,170)
						that.dottedLine(canvas,data,545,200,545,300) // line connecting index - 7 & index - 11
						that.dottedLine(canvas,data,545,300,970,300)
						that.dottedLine(canvas,data,970,300,970,195)
						that.dottedLine(canvas,data,970,195,990,195)
						that.leftArrow(canvas,data,990,195)
						that.dottedLine(canvas,data,1080,170,1130,170) // line connecting index - 11 & index - 12
						that.leftArrow(canvas,data,1130,170)
						that.dottedLine(canvas,data,1230,170,1280,170) // line connecting index - 12 & index - 13
						that.leftArrow(canvas,data,1280,170)
						that.dottedLine(canvas,data,1380,170,1430,170) // line connecting index - 13 & index - 14
						that.leftArrow(canvas,data,1430,170)
            return canvas;
        }  , 1000 );

      },
      
      /* ----------------make-------------------------*/ 
      		
      SMKE02C2_BlendingProcess : function(x){
	        var model = this.uisCodeCheck("SMKE02C2");
	        var data = sap.ui.getCore().getModel("bindingModel").oData;
	        x.getView().getModel("oModelHeader").oData.header="Manufacturing Make Critical Business Processes(MAKE-BLND)";
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
						that.rect(canvas,data,10,10,150,50,0) 	// APS
						that.text(canvas,data,70,35,300,40,0)
						that.rect(canvas,data,10,80,150,50,1) 	// Planning
						that.text(canvas,data,60,105,300,40,1)
						that.rect(canvas,data,10,150,150,50,2) 	// Semi Finished Goods demand
						that.text(canvas,data,20,170,140,40,2)
						that.rect(canvas,data,10,220,150,50,3) 	// Material Requirements Planning (MRP) Run MD01 or MD02
						that.text(canvas,data,20,240,140,40,3)
						that.rect(canvas,data,10,290,150,50,4) 	// Raw Material Demand generated in APS (BoM) ZGSM_TEA_APSPLAN
						that.text(canvas,data,20,310,140,40,4)
						// Second Column
						that.rect(canvas,data,280,10,870,50,5) 	// ECC
						that.text(canvas,data,620,35,300,40,5)
						that.rect(canvas,data,280,80,150,50,6) 	// Demand Management
						that.text(canvas,data,290,105,300,40,6)
						that.rect(canvas,data,280,290,150,50,7) 	//	Planned Order
						that.text(canvas,data,312,315,140,40,7)
						that.rect(canvas,data,460,80,690,50,8) 	//  Production Execution & Quality Control
						that.text(canvas,data,630,105,3000,40,8)
						that.rect(canvas,data,460,290,150,50,9) 	//	Recategorization / Batch Update ZGSMRECAT
						that.text(canvas,data,470,310,140,40,9)
						that.rect(canvas,data,640,290,150,50,10) 	//	Tea Blending  Execution ZGSMBLENDPROCESS
						that.text(canvas,data,650,310,140,40,10)
						that.rect(canvas,data,820,290,150,50,11) 	//	Production Execution
						that.text(canvas,data,835,315,140,40,11)
						that.rect(canvas,data,820,410,150,50,12) 	//	Stock Quality Assessment
						that.text(canvas,data,855,430,110,40,12)
						that.rect(canvas,data,1010,220,150,50,13) 	// Blending Trial ZGSM_TRIALBLEND
						that.text(canvas,data,1020,240,140,40,13)
						that.rect(canvas,data,1010,290,150,50,14) 	//	Production Approval &  Confirmation ZGSM_CONFBLEND
						that.text(canvas,data,1020,305,140,40,14)
						//LINE AND ARROW
						that.line(canvas,data,80,200,80,220) // line connecting index - 2 & index - 3
						that.downArrow(canvas,data,80,220)
						that.line(canvas,data,80,270,80,290) // line connecting index - 3 & index - 4
						that.downArrow(canvas,data,80,290)
						that.line(canvas,data,160,315,280,315) // line connecting index - 4 & index - 7
						that.leftArrow(canvas,data,280,315)
						that.line(canvas,data,430,315,460,315) // line connecting index - 7 & index - 9
						that.leftArrow(canvas,data,460,315)
						that.line(canvas,data,610,315,640,315) // line connecting index - 9 & index - 10
						that.leftArrow(canvas,data,640,315)
						that.line(canvas,data,790,315,820,315) // line connecting index - 10 & index - 11
						that.leftArrow(canvas,data,820,315)
						that.line(canvas,data,970,315,1010,315) // line connecting index - 11 & index - 14
						that.leftArrow(canvas,data,1010,315)
						that.line(canvas,data,895,340,895,410) // line connecting index - 11 & index - 12
						that.downArrow(canvas,data,895,410)
						that.line(canvas,data,1085,270,1085,290) // line connecting index - 13 & index - 14
						that.downArrow(canvas,data,1085,290)
		return canvas;
		}  , 1000 );

},
SMKE03C4_QualityInspectionProcess : function(x){
    var model = this.uisCodeCheck("CMKE03C4");
    var data = sap.ui.getCore().getModel("bindingModel").oData;
    x.getView().getModel("oModelHeader").oData.header="Quality Management C4 Quality Inspection Process";
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
						that.rect(canvas,data,400,10,805,50,0) 	// ECC
						that.text(canvas,data,780,40,300,40,0)
						that.rect(canvas,data,400,105,675,50,1) 	// Results Recording
						that.text(canvas,data,715,135,300,40,1)
						that.rect(canvas,data,400,200,100,70,2) 	// Inspecton lot selection
						that.text(canvas,data,410,225,90,40,2)
						that.rect(canvas,data,540,200,100,70,3) 	// Inspection Point Data
						that.text(canvas,data,550,225,90,40,3)
						that.rect(canvas,data,680,200,100,70,4)	// Inspection Instruction
						that.text(canvas,data,690,225,90,40,4)
						that.rect(canvas,data,820,200,100,70,5)	// Enter the results for the characteristics
						that.text(canvas,data,830,225,90,40,5)
						that.rect(canvas,data,960,200,120,70,6)	// Accepted Valuation for MIC
						that.text(canvas,data,970,230,110,40,6)
						that.rect(canvas,data,960,310,120,70,7)	// Rejected Valuation for MIC 
						that.text(canvas,data,970,335,110,40,7)
						that.rect(canvas,data,1110,105,95,50,8)	// Usage Decision
						that.text(canvas,data,1120,125,80,40,8)
						that.rect(canvas,data,1110,200,100,70,9)	// Usage decision for Inspection Lot
						that.text(canvas,data,1120,225,90,40,9)
						//LINE AND ARROW
						that.line(canvas,data,500,235,540,235) // line connecting index - 2 & index - 3
						that.leftArrow(canvas,data,540,235)
						that.line(canvas,data,640,235,680,235) // line connecting index - 3 & index - 4
						that.leftArrow(canvas,data,680,235)
						that.line(canvas,data,780,235,820,235) // line connecting index - 4 & index - 5
						that.leftArrow(canvas,data,820,235)
						that.line(canvas,data,920,235,960,235) // line connecting index - 5 & index - 6
						that.leftArrow(canvas,data,960,235)
						that.line(canvas,data,1080,235,1110,235) // line connecting index - 6 & index - 8
						that.leftArrow(canvas,data,1110,235)
						that.line(canvas,data,1080,355,1090,355) // line connecting index - 7 & index - 9
						that.line(canvas,data,1090,355,1090,235)
return canvas;
}  , 1000 );

},
SMKE03C5_CRQSInspection : function(x){
    var model = this.uisCodeCheck("SMKE03C5");
    var data = sap.ui.getCore().getModel("bindingModel").oData;
    x.getView().getModel("oModelHeader").oData.header="S_DEL_03_Quality Management C5 CRQS Inspection";
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
						that.rect(canvas,data,400,10,660,50,0) 	// ECC
						that.text(canvas,data,700,35,300,40,0)
						that.rect(canvas,data,400,100,660,50,1) 	// Results Recording
						that.text(canvas,data,715,130,300,40,1)
						that.rect(canvas,data,400,200,100,70,2) 	// Inspecton lot selection
						that.text(canvas,data,410,225,90,40,2)
						that.rect(canvas,data,540,200,100,70,3) 	// Inspection Point Data
						that.text(canvas,data,550,225,90,40,3)
						that.rect(canvas,data,680,200,100,70,4)	// Inspection Instruction
						that.text(canvas,data,690,225,90,40,4)
						that.rect(canvas,data,820,200,100,70,5)	// Enter the results for the characteristics
						that.text(canvas,data,830,225,90,40,5)
						that.rect(canvas,data,960,200,100,70,6)	// Accepted Valuation for MIC
						that.text(canvas,data,970,225,90,40,6)
						that.rect(canvas,data,960,310,100,70,7)	// Rejected Valuation for MIC 
						that.text(canvas,data,970,330,90,40,7)
						//LINE AND ARROW
						that.line(canvas,data,500,235,540,235) // line connecting index - 2 & index - 3
						that.leftArrow(canvas,data,540,235)
						that.line(canvas,data,640,235,680,235) // line connecting index - 3 & index - 4
						that.leftArrow(canvas,data,680,235)
						that.line(canvas,data,780,235,820,235) // line connecting index - 4 & index - 5
						that.leftArrow(canvas,data,820,235)
						that.line(canvas,data,920,235,960,235) // line connecting index - 5 & index - 6
						that.leftArrow(canvas,data,960,235)
return canvas;
}  , 1000 );

},
		SMKE03C6_QuarantineProcess : function(x){
		    var model = this.uisCodeCheck("SMKE03C6");
		    var data = sap.ui.getCore().getModel("bindingModel").oData;
		    x.getView().getModel("oModelHeader").oData.header="S_DEL_03_Quality Management C6 Quarantine Process ";
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
					that.rect(canvas,data,400,210,200,60,0) 	// Confirmation of Production Order (Inspection lot CRQS_Q or Q04 generated)
					that.text(canvas,data,410,230,190,40,0)
					that.rect(canvas,data,700,210,200,60,1) 	// ICT Process to move the stocks from SU to DC
					that.text(canvas,data,710,230,190,40,1)
					that.rect(canvas,data,1000,210,200,60,2) 	// ICT Process to move the stocks from SU to DC
					that.text(canvas,data,1010,230,190,40,2)
		return canvas;
		}  , 1000 );
		
		},

SMKE03C3_1_QualityManagement_C3_IP : function(x){
    var model = this.uisCodeCheck("SMKE03C3_1");
    var data = sap.ui.getCore().getModel("bindingModel").oData;
    x.getView().getModel("oModelHeader").oData.header="Quality Management C3 Inspection Planning";
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
				that.rect(canvas,data,10,10,1120,50,0)//ECC-1
				that.text(canvas,data,600,30,80,40,0)
				//second line
				that.rect(canvas,data,10,80,140,60,1)	// Selection Screen
                that.text(canvas,data,20,100,120,50,1)
               that.rect(canvas,data,190,80,140,60,3)	// Header Details
                that.text(canvas,data,200,100,120,50,3)
                that.rect(canvas,data,370,80,140,60,5)	// Operation-1
                that.text(canvas,data,380,100,120,50,5)
                that.rect(canvas,data,550,80,400,60,7)	// Inspection Characteristics
                that.text(canvas,data,680,100,200,50,7)
                that.rect(canvas,data,990,80,140,60,13)	// Operation-2
                that.text(canvas,data,1000,100,120,50,13)
				//tasks
                that.rect(canvas,data,10,170,140,110,2)	// Enter the plant and the name of the plan (Group)
                that.text(canvas,data,20,190,120,100,2)
                that.line(canvas,data,150,220,190,220)
				that.leftArrow(canvas,data,190,220)
                that.rect(canvas,data,190,170,140,110,4)	// Write a description for the plan and enter value for Plant, Usage, Status, lot size
                that.text(canvas,data,200,190,120,100,4)
                that.line(canvas,data,330,220,370,220)
				that.leftArrow(canvas,data,370,220)
                that.rect(canvas,data,370,170,140,110,6)	// Enter  Insp. Point code and chose level if needed.Chose Work center, Plant, and Control Key
                that.text(canvas,data,380,190,120,100,6)
                that.line(canvas,data,510,220,550,220)
				that.leftArrow(canvas,data,550,220)
                that.rect(canvas,data,550,170,140,110,8)	// Choose MIC from Master Inspection-field.
                that.text(canvas,data,560,190,120,100,8)
                 that.line(canvas,data,620,280,620,400)
                 that.line(canvas,data,620,400,730,400)
                 that.leftArrow(canvas,data,730,400)
                 that.line(canvas,data,620,400,620,500)
                   that.line(canvas,data,620,500,730,500)
                 that.leftArrow(canvas,data,730,500)
                that.line(canvas,data,690,220,710,220)
                 that.line(canvas,data,710,210,710,220)
                 that.line(canvas,data,710,210,730,210)
                 that.leftArrow(canvas,data,730,210)
				that.line(canvas,data,710,210,710,300)
				that.line(canvas,data,710,300,730,300)
				that.leftArrow(canvas,data,730,300)
                that.rect(canvas,data,730,170,220,80,9)	// On the Catalog, specify the catalog. These can be automatically poluated based from the MIC or can be updated manually.
                that.text(canvas,data,740,190,200,60,9)
                that.line(canvas,data,950,200,970,200)
                 that.line(canvas,data,950,300,970,300)
                  that.line(canvas,data,950,400,970,400)
                   that.line(canvas,data,950,500,970,500)
                    that.line(canvas,data,970,200,970,500)
                    that.line(canvas,data,970,200,990,200)
                    that.leftArrow(canvas,data,990,200)
                that.rect(canvas,data,730,260,220,70,10)	// On the Quant Data Details, specify weighting, and catalog.
                that.text(canvas,data,740,280,200,60,10)
                that.rect(canvas,data,730,360,220,70,11)	// On the Sample, specify the sampling procedure.
                that.text(canvas,data,740,380,200,60,11)
                that.rect(canvas,data,730,460,220,70,12)	// On the control indicators, specify the needed set up.
                that.text(canvas,data,740,480,200,60,12)
                that.rect(canvas,data,990,170,140,110,14)	//Enter Group counter, Material and Plant.
                that.text(canvas,data,1000,190,120,100,14)
return canvas;
}  , 1000 );

},

			SMKE03C3_2_QualityManagement_C3_IP : function(x){
			    var model = this.uisCodeCheck("SMKE03C3_2");
			    var data = sap.ui.getCore().getModel("bindingModel").oData;
			    x.getView().getModel("oModelHeader").oData.header="S_DEL_03_Quality Management C3 Inspection Planning";
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
				that.rect(canvas,data,10,10,1120,50,0)//ECC-1
				that.text(canvas,data,600,30,80,40,0)
				//second line
				that.rect(canvas,data,10,80,1120,60,1)	// Inspection Planning Process (Inspection Plan Creation)
                that.text(canvas,data,480,100,300,50,1)
				that.rect(canvas,data,10,160,140,60,2)	// Selection Screen
                that.text(canvas,data,20,180,120,50,2)
               that.rect(canvas,data,190,160,140,60,4)	// Header Details
                that.text(canvas,data,200,180,120,50,4)
                that.rect(canvas,data,370,160,140,60,6)	// Operation-1
                that.text(canvas,data,380,180,120,50,6)
                that.rect(canvas,data,550,160,400,60,8)	// Inspection Characteristics
                that.text(canvas,data,660,180,200,50,8)
                 that.rect(canvas,data,990,160,140,60,14)	// Operation-2
                that.text(canvas,data,1000,180,120,50,14)
				//tasks
                that.rect(canvas,data,10,240,140,110,3)	// Enter the plant and the name of the plan (Group)
                that.text(canvas,data,20,260,120,100,3)
                that.line(canvas,data,150,290,190,290)
				that.leftArrow(canvas,data,190,290)
                that.rect(canvas,data,190,240,140,110,5)	// Write a description for the plan and enter value for Plant, Usage, Status, lot size
                that.text(canvas,data,200,260,120,100,5)
                that.line(canvas,data,330,290,370,290)
				that.leftArrow(canvas,data,370,290)
                that.rect(canvas,data,370,240,140,110,7)	// Enter  Insp. Point code and chose level if needed.Chose Work center, Plant, and Control Key
                that.text(canvas,data,380,260,120,100,7)
                that.line(canvas,data,510,290,550,290)
				that.leftArrow(canvas,data,550,290)
                that.rect(canvas,data,550,240,140,110,9)	// Choose MIC from Master Inspection-field.
                that.text(canvas,data,560,260,120,100,9)
                  that.line(canvas,data,620,350,620,460)
                 that.line(canvas,data,620,460,730,460)
                 that.leftArrow(canvas,data,730,460)
                 that.line(canvas,data,620,460,620,560)
                   that.line(canvas,data,620,560,730,560)
                 that.leftArrow(canvas,data,730,560)
                that.line(canvas,data,690,280,710,280)
                 that.line(canvas,data,710,270,710,280)
                 that.line(canvas,data,710,270,730,270)
                 that.leftArrow(canvas,data,730,270)
				that.line(canvas,data,710,270,710,360)
				that.line(canvas,data,710,360,730,360)
				that.leftArrow(canvas,data,730,360)
               that.rect(canvas,data,730,240,220,80,10)	// On the Catalog, specify the catalog. These can be automatically poluated based from the MIC or can be updated manually.
                that.text(canvas,data,740,260,200,60,10)
                that.rect(canvas,data,730,330,220,70,11)	// On the Quant Data Details, specify weighting, and catalog.
                that.text(canvas,data,740,350,200,60,11)
                that.rect(canvas,data,730,420,220,70,12)	// On the Sample, specify the sampling procedure.
                that.text(canvas,data,740,440,200,60,12)
                that.rect(canvas,data,730,510,220,70,13)	// On the control indicators, specify the needed set up.
                that.text(canvas,data,740,530,200,60,13)
                that.line(canvas,data,950,260,970,260)
                 that.line(canvas,data,950,360,970,360)
                  that.line(canvas,data,950,460,970,460)
                   that.line(canvas,data,950,560,970,560)
                    that.line(canvas,data,970,260,970,560)
                    that.line(canvas,data,970,290,990,290)
                    that.leftArrow(canvas,data,990,290)
              that.rect(canvas,data,990,240,140,110,15)	//Enter Group counter, Material and Plant.
                that.text(canvas,data,1000,260,120,100,15)
              
return canvas;
}  , 1000 );

},
SMKE03C7_PLM_InternalAuditManagement : function(x){
    var model = this.uisCodeCheck("SMKE03C7");
    var data = sap.ui.getCore().getModel("bindingModel").oData;
    x.getView().getModel("oModelHeader").oData.header="PLM_Internal Audit Management";
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
			that.rect(canvas,data,60,10,600,40,0)//ECC 
			that.text(canvas,data,350,35,600,40,0)//ECC 
			that.rect(canvas,data,700,10,350,40,8)//Mobile Device (Interactive PDF)
			that.text(canvas,data,790,35,350,40,8)//Mobile Device (Interactive PDF)
			//second line
			that.rect(canvas,data,60,60,600,40,1)	// ECC Audit Management Process
			that.text(canvas,data,270,85,600,40,1)   // ECC Audit Management Process
			that.rect(canvas,data,700,60,350,40,9)//Unilever Audit Management Process
			that.text(canvas,data,780,85,350,40,9)//Unilever Audit Management Process
			//tasks
			that.rect(canvas,data,70,130,100,50,2) //Start
			that.text(canvas,data,105,145,100,50,2) //Start
			that.line(canvas,data,170,155,210,155)//from Start to Creation of AuditQuestion List
			that.leftArrow(canvas,data,210,155)//from Start to Creation of AuditQuestion List
			that.line(canvas,data,190,155,190,225)//vertical line downwards from Start
			that.line(canvas,data,190,225,250,225)//horizontal line connecting to Creation of Audit Plan
			that.leftArrow(canvas,data,250,225)
			that.line(canvas,data,190,155,190,295)//vertical line downwards from Start - longer
			that.line(canvas,data,190,295,290,295)//horizontal line connecting to Creation of Audit
			that.leftArrow(canvas,data,290,295)
			that.rect(canvas,data,210,130,100,50,3)//Creation of Audit Question List
			that.text(canvas,data,215,145,100,50,3)//Creation of Audit Question List
			that.rect(canvas,data,250,200,100,50,4)//Creation of Audit Plan
			that.text(canvas,data,255,215,100,50,4)//Creation of Audit Plan
			that.line(canvas,data,350,225,370,225)//horizontal line towards right from Creation of Audit Plan
			that.line(canvas,data,370,225,370,270)//vertical line downwards to Creation of Audit
			that.downArrow(canvas,data,370,270)
			that.rect(canvas,data,290,270,100,50,5)//Creation of Audit
			that.text(canvas,data,295,285,100,50,5)//Creation of Audit
			that.line(canvas,data,370,320,370,340)//vertical line dwnwards from Creation of Audit to Completion ofAudit
			that.downArrow(canvas,data,370,340)
			that.line(canvas,data,390,290,430,290)//horizontal line towards right from Creation of Audit
			that.line(canvas,data,430,290,430,190)//vertical line upwards from Creation of Audit
			that.line(canvas,data,430,190,710,190)//horizontal line towards right connecting to Processing of Audit
			that.leftArrow(canvas,data,710,190)
			that.rect(canvas,data,330,340,100,50,6)//Completion of Audit
			that.text(canvas,data,335,355,100,50,6)//Completion of Audit
			that.rect(canvas,data,500,240,100,50,7)//Upload of PDF in ECC to Update Audit
			that.text(canvas,data,505,255,100,50,7)//Upload of PDF in ECC to Update Audit
			that.line(canvas,data,550,240,550,190)//vertical line upwards from Upload of PDF in ECC to Update Audit
			that.upArrow(canvas,data,550,190)
			that.line(canvas,data,550,290,550,365)//vertical line downwards from Upload of PDF in ECC to Update Audit
			that.line(canvas,data,550,365,430,365)//horizontal line towards left from Upload of PDF in ECC to Update Audit
			that.rightArrow(canvas,data,430,365)
			that.rect(canvas,data,710,160,120,60,10)//Processing of Audit
			that.text(canvas,data,715,175,120,60,10)//Processing of Audit
			that.line(canvas,data,770,220,770,260)//vertical line downwards from Processing of Audit
			that.line(canvas,data,770,260,600,260)//horizontal line to  Upload of PDF inECC to UpdateAudit
			that.rightArrow(canvas,data,600,260)
			that.line(canvas,data,770,160,770,130)//from Creation and Processing of CAPA(Corrective / Preventive Action) to Processing of Audit
			that.downArrow(canvas,data,770,160)
			that.line(canvas,data,830,190,870,190)//from Processing of Audit to Creation and Processing of CAPA(Corrective / Preventive Action)
			that.leftArrow(canvas,data,870,190)
			that.line(canvas,data,990,190,1030,190)// horizontal small line from Creation and Processing of CAPA(Corrective / Preventive Action) to Processing of Audit
			that.line(canvas,data,1030,190,1030,130)//vertical line upwards from "-"
			that.line(canvas,data,1030,130,770,130)//horizontal line (long n on top) from "-"
			that.rect(canvas,data,870,160,120,60,11)//Creation and Processing of CAPA(Corrective / Preventive Action)
			that.text(canvas,data,875,175,120,60,11)//Creation and Processing of CAPA(Corrective / Preventive Action)
			that.line(canvas,data,950,220,950,260)//from Creation and Processing of CAPA(Corrective / Preventive Action) to Completion ofCAPA(Corrective / Preventive Action)
			that.downArrow(canvas,data,950,260)
			that.rect(canvas,data,920,260,120,60,12)//Completion ofCAPA(Corrective / Preventive Action)
			that.text(canvas,data,925,275,120,60,12)//Completion ofCAPA(Corrective / Preventive Action)
			that.line(canvas,data,920,290,720,290)//horizontal line towards left from Completion ofCAPA(Corrective / Preventive Action)
			that.line(canvas,data,720,290,720,260)//vertical line upwards from Completion ofCAPA(Corrective / Preventive Action)
			that.upArrow(canvas,data,720,260)

return canvas;
}  , 1000 );

},
SMKE01_MAKE_PP :  function(x){
    var model = this.uisCodeCheck("MAKE_1");
    var data = sap.ui.getCore().getModel("bindingModel").oData;
    x.getView().getModel("oModelHeader").oData.header="Manufacturing Make Critical Business Processes(MAKE-PP)";
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
				// top system boxes
				that.rect(canvas,data,10,10,300,40,0)
				that.text(canvas,data,140,35,300,40,0)
				that.rect(canvas,data,360,10,300,40,0)
				that.text(canvas,data,500,35,300,40,0)
				that.rect(canvas,data,720,10,1130,40,0)
				that.text(canvas,data,1200,35,1000,40,0)
				
			//second line boxes
				that.rect(canvas,data,10,70,300,40,1)	// 20px difference from first row
				that.text(canvas,data,55,95,300,40,1)
				that.rect(canvas,data,360,70,300,40,1)	
				that.text(canvas,data,450,95,300,40,7)
				that.rect(canvas,data,720,70,640,40,13)
				that.text(canvas,data,980,95,300,40,13)
				that.rect(canvas,data,1400,70,200,40,25)//Consumption Bookings
				that.text(canvas,data,1420,95,200,40,25)
				that.rect(canvas,data,1650,70,200,40,26)//Consumption Bookings
				that.text(canvas,data,1690,95,200,40,26)
			//tasks
				that.rect(canvas,data,10,220,130,80,3) //Material Requirements
				that.text(canvas,data,15,240,130,80,2)
				that.line(canvas,data,70,220,70,160)
				that.downArrow(canvas,data,70,220)
				that.line(canvas,data,70,300,70,420)
				that.line(canvas,data,70,420,160,420)
				that.leftArrow(canvas,data,160,420)
				that.line(canvas,data,70,160,360,160)
				that.leftArrow(canvas,data,360,160)
				that.rect(canvas,data,190, 240, 280, 40, 3) //Maintain Schedules, Sequences & Capacitie
				that.text(canvas,data,200, 260, 280, 40, 3)
				that.rect(canvas,data,190, 300, 50, 45, 4)
				that.text(canvas,data,195, 313, 50, 45, 4)
				that.line(canvas,data,240,320,300,320)
				that.leftArrow(canvas,data,295,320)
				that.rect(canvas,data,295, 300, 50, 45, 5)
				that.text(canvas,data,300, 320, 50, 45, 5)
				that.line(canvas,data,345,320,400,320)
				that.leftArrow(canvas,data,400,320)
				that.rect(canvas,data,400, 300, 70, 45, 6)
				that.text(canvas,data,405, 312, 70, 45, 6)
				that.line(canvas,data,470,320,540,320)
				that.leftArrow(canvas,data,540,320)
				that.rect(canvas,data,360, 130, 90, 60, 8) //Warehouse Management Internal Transportation
				that.text(canvas,data,365, 142, 90, 60, 8)
				that.rect(canvas,data,160,380,130,70,9) //APO Demand PlanningPlanned OrdersMD11
				that.text(canvas,data,175,400,100,70,9)
				that.line(canvas,data,290,420,360,420)
				that.leftArrow(canvas,data,360,420)
				that.rect(canvas,data,360,380,120,70,10) //Generate Production Order CO40 or CO01
				that.text(canvas,data,370,400,100,70,10)
				that.line(canvas,data,480,420,540,420)
				that.leftArrow(canvas,data,540,420)
				that.rect(canvas,data,540,300,120,50,11) //Maintain Production Master Data
				that.text(canvas,data,555,315,100,50,11)
				that.line(canvas,data,600,350,600,380)
				that.downArrow(canvas,data,600,380)
				that.rect(canvas,data,540,380,120,70,12) //Availability Check & Production Order Printing
				that.text(canvas,data,555,400,100,50,12)
				that.line(canvas,data,660,420,730,420)
				that.leftArrow(canvas,data,730,420)
				that.rect(canvas,data,730,380,120,70,14) //Release Production Order CO02
				that.text(canvas,data,735,400,100,50,14)
				that.line(canvas,data,850,420,1000,420)
				that.leftArrow(canvas,data,1000,420)
				that.rect(canvas,data,850,250,120,50,15) //Bill of Materials and CS01
				that.text(canvas,data,860,270,100,50,15)
				that.line(canvas,data,910,250,910,190)
				that.downArrow(canvas,data,910,250)
				that.upArrow(canvas,data,910,190)
				that.rect(canvas,data,850, 130, 120, 60, 16)
				that.text(canvas,data,865, 146, 120, 60, 16)
				that.line(canvas,data,850,160,450,160)
				that.leftArrow(canvas,data,850,160)
				that.rightArrow(canvas,data,450,160)
				that.line(canvas,data,910,420,910,300)
				that.rect(canvas,data,1000,380,120,70,17) //Production Execution
				that.text(canvas,data,1030,410,100,70,17)
				that.line(canvas,data,1060,380,1060,300)
				that.upArrow(canvas,data,1060,300)
				that.line(canvas,data,1120,420,1200,420)
				that.leftArrow(canvas,data,1200,420)
				that.rect(canvas,data,1000,230,120,70,18) //Stock Quality Assessment
				that.text(canvas,data,1025,260,100,70,18)
				that.rect(canvas,data,1200,380,120,70,19) //Production Confirmation CO11N, ZCONF
				that.text(canvas,data,1220,405,100,70,19)
				that.line(canvas,data,1260,380,1260,300)
				that.upArrow(canvas,data,1260,300)
				that.line(canvas,data,1320,420,1380,420)
				that.line(canvas,data,1380,380,1380,450)
				that.line(canvas,data,1380,380,1410,380)
				that.leftArrow(canvas,data,1410,380)
				that.line(canvas,data,1380,450,1410,450)
				that.leftArrow(canvas,data,1410,450)
				that.rect(canvas,data,1200,230,120,70,20) //Production Confirmation CO11N, ZCONF
				that.text(canvas,data,1220,250,100,70,20)
				that.line(canvas,data,1260,230,1260,200)
				that.upArrow(canvas,data,1260,200)
				that.line(canvas,data,1320,270,1410,270)
				that.leftArrow(canvas,data,1410,270)
				that.rect(canvas,data,1200,130,120,70,21) //Batch Status Changed
				that.text(canvas,data,1230,160,100,70,21)
				that.line(canvas,data,1320,165,1710,165)
				that.line(canvas,data,1710,165,1710,360)
				that.downArrow(canvas,data,1710,360)
				that.rect(canvas,data,1410,425,120,50,22) //Goods Issue to Production with Backflush
				that.text(canvas,data,1415,440,100,50,22)
				that.line(canvas,data,1530,450,1580,450)
				that.line(canvas,data,1580,450,1580,270)
				that.line(canvas,data,1580,270,1520,270)
				that.leftArrow(canvas,data,1530,270)
				that.rect(canvas,data,1410,360,120,50,23) //Goods Issue (Automatic)
				that.text(canvas,data,1425,380,100,50,23)
				that.line(canvas,data,1530,385,1650,385)
				that.leftArrow(canvas,data,1650,385)
				that.rect(canvas,data,1410,250,120,50,24) //Goods Issue after Count
				that.text(canvas,data,1420,270,100,50,24)
				that.rect(canvas,data,1650,360,120,70,27) //Production Report Analysis & Actual Cost Collection
				that.text(canvas,data,1665,380,100,70,27)
				that.rect(canvas,data,730,500,120,50,28) //Labeller or SCADA
				that.text(canvas,data,735,520,100,50,28)
				that.line(canvas,data,750,500,750,450)
				that.upArrow(canvas,data,750,450)
				that.line(canvas,data,830,500,830,450)
				that.downArrow(canvas,data,830,500)
				that.rect(canvas,data,860,500,120,50,29) //InterSpec
				that.text(canvas,data,880,520,120,50,29)
				that.line(canvas,data,880,500,880,300)
				that.upArrow(canvas,data,880,300)
				that.line(canvas,data,950,500,950,300)
				that.downArrow(canvas,data,950,500)
				that.rect(canvas,data,730,590,250,50,33) //External system
				that.text(canvas,data,800,615,250,50,33)
				that.rect(canvas,data,730,650,250,50,34) //3rd party system
				that.text(canvas,data,800,670,250,50,34)
				that.rect(canvas,data,1000,500,120,50,30) //Tea Blending Process
				that.text(canvas,data,1025,520,100,50,30)
				that.line(canvas,data,1060,500,1060,450)
				that.upArrow(canvas,data,1060,450)
				that.rect(canvas,data,1000,590,120,50,35) //Blending
				that.text(canvas,data,1015,615,100,50,35)
				that.rect(canvas,data,1000,650,120,50,0) //ECC
				that.text(canvas,data,1025,670,100,50,0)
				that.rect(canvas,data,1200,500,120,50,31) //Labeller or SCADA
				that.text(canvas,data,1210,520,100,50,31)
				that.line(canvas,data,1260,500,1260,450)
				that.upArrow(canvas,data,1260,450)
				that.rect(canvas,data,1410,500,120,50,32) //Labeller or SCADA
				that.text(canvas,data,1415,520,100,50,32)
				that.line(canvas,data,1460,500,1460,475)
				that.upArrow(canvas,data,1460,475)
				that.rect(canvas,data,1200,590,330,50,33) //External system
				that.text(canvas,data,1310,615,330,50,33)
				that.rect(canvas,data,1200,650,330,50,34) //3rd party system
				that.text(canvas,data,1310,670,330,50,34)

return canvas;
}  , 1000 );

},

/*===========APO==========*/

/*===========APO==========*/

SAPO21R2P1_copackingPart :  function(x){
	    var model = this.uisCodeCheck("SAPO21R2P1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="Copacking";
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
				// First Row
			that.pentagon(canvas,data,500,30,1210,1250,55,85,0) // APO
			that.text(canvas,data,820,60,300,40,0)
			// Second Row
			that.rect(canvas,data,675,125,370,60,1) // Copacking
			that.text(canvas,data,830,157,300,40,1)
			// Third Row
			that.rect(canvas,data,650,225,420,60,2) // Copacking Part of Regular Run
			that.text(canvas,data,760,260,300,40,2)	
	
	return canvas;
	}  , 1000 );
	
	},
	
	SAPO21Q8P1_prodPlanningAtSU :  function(x){
	    var model = this.uisCodeCheck("SAPO21Q8P1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="In-House Production Planning";
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
				// First Row
			that.pentagon(canvas,data,500,30,1210,1250,55,85,0) // APO
			that.text(canvas,data,820,60,300,40,0)
			// Second Row
			that.rect(canvas,data,675,125,370,60,1) // SU In-House Production Planning
			that.text(canvas,data,780,157,300,40,1)
			// Third Row
			that.rect(canvas,data,650,225,420,60,2) // In-House Production Planning at SU 
			that.text(canvas,data,760,260,300,40,2)
	return canvas;
	}  , 1000 );
	
	},
	
	SAPO21Q9P1_subContplanning :  function(x){
	    var model = this.uisCodeCheck("SAPO21Q9P1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="Subcontracting";
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
			// First Row
			that.pentagon(canvas,data,500,30,1210,1250,55,85,0) // APO
			that.text(canvas,data,820,60,300,40,0)
			// Second Row
			that.rect(canvas,data,675,125,370,60,1) // Subcontracting
			that.text(canvas,data,810,157,300,40,1)
			// Third Row
			that.rect(canvas,data,650,225,420,60,2) // Subcontacting Planning 
			that.text(canvas,data,790,260,300,40,2)
	return canvas;
	}  , 1000 );
	
	},
	
	SAPO21R5_terraInterface :  function(x){
	    var model = this.uisCodeCheck("SAPO21R5");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="TERRA";
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
			that.pentagon(canvas,data,10,30,380,420,55,85,0) // SCDG
			that.text(canvas,data,180,60,300,40,0)
			that.rect(canvas,data,50,125,280,60,1) // MIO Stock Figure
			that.text(canvas,data,140,160,300,40,1)
			that.rect(canvas,data,30,225,320,60,2) // MIO Stock report to update Terra ASB Report 
			that.text(canvas,data,65,260,300,40,2)
			that.pentagon(canvas,data,10,385,380,420,410,440,3) // ECC (S1P)
			that.text(canvas,data,170,415,300,40,3)
			that.rect(canvas,data,50,480,280,60,4) // Transction Data & Master Data Flow
			that.text(canvas,data,90,515,300,40,4)
			that.rect(canvas,data,30,580,320,60,5) // MD & TD Release to Terra 
			that.text(canvas,data,110,615,300,40,5)
			//Second Column
			that.doubleHeadedPipedArrow(canvas,data,520, 410, 550, 370, 390, 800, 830, 450, 430, 6) // BODS
			that.text(canvas,data,655,415,100,410,6)
			that.rect(canvas,data,520,580,310,60,7) // BODS
			that.text(canvas,data,655,615,300,40,7)
			//Third Column
			that.pentagon(canvas,data,930,30,1300,1340,55,85,8) // APO - BW (BP1)
			that.text(canvas,data,1070,60,300,40,8)
			that.rect(canvas,data,1000,190,250,70,9) // BODS 
			that.text(canvas,data,1100,230,300,40,9)
			that.pentagon(canvas,data,930,385,1300,1340,415,445,10) // TERRA
			that.text(canvas,data,1100,420,300,40,10)
			that.rect(canvas,data,970,480,280,60,11) // Terra Demand Signal
			that.text(canvas,data,1050,515,300,40,11)
			that.rect(canvas,data,950,580,320,60,12) // Terra Demand Signal file Release 
			that.text(canvas,data,1020,615,300,40,12)
			//Fourth Column
			that.doubleHeadedPipedArrow(canvas,data,1440, 410, 1470, 370, 390, 1720, 1750, 450, 430, 13) // BODS
			that.text(canvas,data,1570,415,100,410,13)
			that.rect(canvas,data,1440,580,310,60,14) // BODS
			that.text(canvas,data,1580,615,300,40,14)
			//Fifth Column
			that.pentagon(canvas,data,1850,30,2200,2240,55,85,15) // APO (IAP)
			that.text(canvas,data,2000,60,300,40,15)
			that.rect(canvas,data,1890,125,280,60,16) // DP Forecast release to Terra 
			that.text(canvas,data,1965,160,300,40,16)
			that.rect(canvas,data,1870,225,320,60,17) // Forecast release from DP to Terra 
			that.text(canvas,data,1940,260,300,40,17)
			that.pentagon(canvas,data,1850,385,2220,2260,410,440,18) // APO (IAP)
			that.text(canvas,data,2000,415,300,40,18)
			that.rect(canvas,data,1890,480,280,60,19) // Forecast Release from DP to SNP
			that.text(canvas,data,1935,515,300,40,19)
			that.rect(canvas,data,1870,580,320,60,20) // Short Term (4 Weeks) Terra Demand Signal Release to SNP 
			that.text(canvas,data,1930,605,200,40,20)
			//Lines And Arrows
			that.line(canvas,data,1115, 85, 1115, 190) // Line connecting index - 9 & index - 10
			that.downArrow(canvas,data,1115, 190)
			that.line(canvas,data,350,610,520,610) // Line connecting index - 6 & index - 8
			that.leftArrow(canvas,data,520, 610)
			that.line(canvas,data,830,610,950,610) // Line connecting index - 8 & index - 13
			that.leftArrow(canvas,data,950, 610)
			that.line(canvas,data,1270,610,1440,610)// Line connecting index - 13 & index - 15
			that.leftArrow(canvas,data,1440, 610)
			that.line(canvas,data,1750,610,1870,610)// Line connecting index - 15 & index - 21
			that.leftArrow(canvas,data,1870, 610)
	return canvas;
	}  , 1000 );
	
	},
	
	SAPO21P1_weeklyJob : function(x){
	    var model = this.uisCodeCheck("SAPO21P1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="Weekly Job Cycle MasterData";
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
			// First row
			that.pentagon(canvas,data,10,30,1520,1560,55,85,0) // APO
			that.text(canvas,data,800,60,300,40,0)
			// Second Row
			that.rect(canvas,data,40,125,280,60,1) // Saturday Run
			that.text(canvas,data,110,160,300,40,1)
			that.rect(canvas,data,440,125,280,60,2) // Sunday Run 
			that.text(canvas,data,545,155,300,40,2)
			that.rect(canvas,data,840,125,280,60,3) // Monday Run
			that.text(canvas,data,945,155,300,40,3)
			that.rect(canvas,data,1240,125,280,60,4) // Regular Days (Tue, Wed, Thu)
			that.text(canvas,data,1295,155,300,40,4)
			//Third Row
			that.rect(canvas,data,10,255,330,70,5) // Unconstraint  Run
			that.text(canvas,data,120,290,300,40,5)
			that.rect(canvas,data,420,255,330,70,6) // Net Requirment Constraint run
			that.text(canvas,data,500,290,300,40,6)
			that.rect(canvas,data,820,255,330,70,7) // Production Run
			that.text(canvas,data,940,290,300,40,7)
			that.rect(canvas,data,1220,255,330,70,8) // Distribution Requirement Planning Run
			that.text(canvas,data,1280,290,300,40,8)
			//Lines And Arrows
			that.line(canvas,data,340,290,420, 290) // Line connecting index - 6 & index - 7
			that.leftArrow(canvas,data,420, 290)
			that.line(canvas,data,750,290,820,290) // Line connecting index - 7 & index - 8
			that.leftArrow(canvas,data,820, 290)
			that.line(canvas,data,1150,290,1220,290) // Line connecting index - 8 & index - 9
			that.leftArrow(canvas,data,1220, 290)
	return canvas;
	}  , 1000 );
	},
	
	SAPO21Q7_Transaction_Data:  function(x){
	    var model = this.uisCodeCheck("SAPO21Q7");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="SNP Transaction Data";
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
					that.rect(canvas,data,100,10,250,40,0) // ECC
					that.text(canvas,data,210,35,250,40,0)
					that.rect(canvas,data,100,80,250,40,1) // Transaction Data Load
					that.text(canvas,data,160,105,250,40,1)
					that.rect(canvas,data,100,150,250,40,2) // Transaction Data sent from ECC to APO 
					that.text(canvas,data,120,175,250,40,2)
					that.rect(canvas,data,450,10,250,40,3) // APO
					that.text(canvas,data,550,35,250,40,3)
					that.rect(canvas,data,450,80,250,40,4) // Transaction Data Update
					that.text(canvas,data,500,105,250,40,4)
					that.rect(canvas,data,450,150,250,40,5) // Transaction data update in APO 
					that.text(canvas,data,490,175,250,40,5)
					that.rect(canvas,data,800,10,250,40,6) // APO
					that.text(canvas,data,900,35,250,40,6)
					that.rect(canvas,data,800,80,250,40,7) // Transaction Data Load
					that.text(canvas,data,860,105,250,40,7)
					that.rect(canvas,data,800,150,250,40,8) // Transaction data sent from APO 
					that.text(canvas,data,840,175,250,40,8)
					that.rect(canvas,data,1150,10,250,40,9) // ECC
					that.text(canvas,data,1250,35,250,40,9)
					that.rect(canvas,data,1150,80,250,40,10) // Transaction Data Update
					that.text(canvas,data,1210,105,250,40,10)
					that.rect(canvas,data,1150,150,250,40,11) // Transaction Data Update in ECC 
					that.text(canvas,data,1190,175,250,40,11)
					that.textBlack(canvas,data,352,159,100,40,12) 
					that.textBlack(canvas,data,1052,159,100,40,13) 
					// Line And Arrow
					that.line(canvas,data,350,170,450,170) // line connecting index - 2 & index - 5
					that.leftArrow(canvas,data,450,170)
					that.line(canvas,data,1050,170,1150,170) // line connecting index - 8 & index - 11
					that.leftArrow(canvas,data,1150,170)
	return canvas;
	}  , 1000 );
	
	},
	
	SAPO21Q3_Master_Data :  function(x){
	    var model = this.uisCodeCheck("SAPO21Q3");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="SNP Master Data";
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
					that.rect(canvas,data,450,10,300,40,0) // ECC
					that.text(canvas,data,580,35,300,40,0)
					that.rect(canvas,data,450,80,300,40,1) // Master Data Load
					that.text(canvas,data,550,105,300,40,1)
					that.rect(canvas,data,450,150,300,40,2) // Master Data sent from ECC to APO 
					that.text(canvas,data,510,175,300,40,2)
					that.rect(canvas,data,850,10,300,40,3) // APO
					that.text(canvas,data,980,35,300,40,3)
					that.rect(canvas,data,850,80,300,40,4) // Master Data Update
					that.text(canvas,data,950,105,300,40,4)
					that.rect(canvas,data,850,150,300,40,5) // Master data update in APO 
					that.text(canvas,data,930,175,300,40,5)
					// Line And Arrow
					that.line(canvas,data,750,170,850,170) // line connecting index - 2 & index - 5
					that.leftArrow(canvas,data,850,170)
					that.textBlack(canvas,data,753,158,100,80,6)
	return canvas;
	}  , 1000 );
	
	},
	
	SAPO21R1_Interchangability :  function(x){
	    var model = this.uisCodeCheck("SAPO21R1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="SP INTERCHANGEABILITY";
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
					that.rect(canvas,data,500,10,500,40,0) // APO
					that.text(canvas,data,750,35,300,40,0)
					that.rect(canvas,data,500,80,500,40,1) // Interchangeability
					that.text(canvas,data,720,105,300,40,1)
					that.rect(canvas,data,500,150,500,40,2) // Interchangeability Part of Opt run 
					that.text(canvas,data,680,175,300,40,2)
	return canvas;
	}  , 1000 );
	
	},
	
	SAPO21R7_Reporting_SCDG :  function(x){
	    var model = this.uisCodeCheck("SAPO21R7");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="SP Reporting SCDG";
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
					that.rect(canvas,data,200,10,400,40,0) // BP1
					that.text(canvas,data,380,35,300,40,0)
					that.rect(canvas,data,200,80,400,40,1) // ODS90 & ODS91
					that.text(canvas,data,350,105,300,40,1)
					that.rect(canvas,data,200,150,400,40,2) // Transaction Data Update in BW from APO (MALA & MALO) 
					that.text(canvas,data,240,175,380,40,2)
					that.rect(canvas,data,650,150,100,40,3) // BODS 
					that.text(canvas,data,680,175,180,40,3)
					that.rect(canvas,data,800,10,200,40,4) // SCDG
					that.text(canvas,data,880,35,200,40,4)
					that.rect(canvas,data,800,80,200,40,5) // SCDG Report
					that.text(canvas,data,860,105,200,40,5)
					that.rect(canvas,data,800,150,200,40,6) // MALA & MALO 
					that.text(canvas,data,850,175,200,40,6)
					that.rect(canvas,data,1050,10,210,40,7) // BP1
					that.text(canvas,data,1140,35,200,40,7)
					that.rect(canvas,data,1050,80,210,40,8) // TD Update in Cubes
					that.text(canvas,data,1110,105,200,40,8)
					that.rect(canvas,data,1050,150,210,40,9) // TD update in BP1 cubes from APO
					that.text(canvas,data,1060,175,200,40,9)
					// Line And Arrow
					that.line(canvas,data,600,170,650,170) // line connecting index - 2 & index - 3
					that.line(canvas,data,750,170,800,170) // line connecting index - 2 & index - 3
					that.leftArrow(canvas,data,800,170)
	return canvas;
	}  , 1000 );
	
	},
	
	SAPO21R4_Short_term_Scheduling :  function(x){
	    var model = this.uisCodeCheck("SAPO21R4P1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="SP Short Term Scheduling";
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
					that.rect(canvas,data,600,10,400,40,0) // APO
					that.text(canvas,data,780,35,300,40,0)
					that.rect(canvas,data,600,80,400,40,1) // Short Term Scheduling
					that.text(canvas,data,750,105,300,40,1)
					that.rect(canvas,data,600,150,400,40,2) // Semi finished PPDS Planning 
					that.text(canvas,data,720,175,380,40,2)
	return canvas;
	}  , 1000 );
	
	},

	SAPO20P2_DP_Disaggregation :  function(x){
	    var model = this.uisCodeCheck("SAPO20P2");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="DP Disaggregation";
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
					that.rect(canvas,data,100,10,1170,40,0) // APO
					that.text(canvas,data,680,30,1000,40,0)
					that.rect(canvas,data,100,80,100,50,1) // Proportional Factor Generation
					that.text(canvas,data,110,100,90,40,1)
					that.rect(canvas,data,100,160,100,60,2) // For PA Z1PA010
					that.text(canvas,data,110,180,80,40,2)
					that.rect(canvas,data,250,80,240,50,3) // CDF Generation 
					that.text(canvas,data,320,100,220,40,3)
					that.rect(canvas,data,250,160,240,60,4) // Copy System Generated Proportional Factor into Custom Disaggregation Factor
					that.text(canvas,data,260,180,230,40,4)
					that.rect(canvas,data,540,80,550,50,5) // TDF Generation 
					that.text(canvas,data,750,100,520,40,5)
					that.rect(canvas,data,540,160,100,60,6) // Calculate Time Disaggregation
					that.text(canvas,data,550,180,90,40,6)
					that.rect(canvas,data,690,160,100,60,7) // Time Disaggregation Store
					that.text(canvas,data,700,180,90,40,7)
					that.rect(canvas,data,840,160,100,60,8) // Time Disaggregation Reset
					that.text(canvas,data,850,180,90,40,8)
					that.rect(canvas,data,990,160,100,60,9) // Copy Time Disaggregation from Cube
					that.text(canvas,data,1000,180,90,40,9)
					that.rect(canvas,data,1140,80,130,50,10) // File Upload Process 
					that.text(canvas,data,1150,100,520,40,10)
					that.rect(canvas,data,1140,160,130,60,11) // Load CDF from flat file to PA 
					that.text(canvas,data,1150,180,110,40,11)
					// Line And Arrow
					that.line(canvas,data,200,190,250,190)
					that.leftArrow(canvas,data,250,190)
					that.line(canvas,data,640,190,690,190)
					that.leftArrow(canvas,data,690,190)
					that.line(canvas,data,790,190,840,190)
					that.leftArrow(canvas,data,840,190)
	return canvas;
	}  , 1000 );
	
	},

	SAPO20P1_DP_Master_Data :  function(x){
	    var model = this.uisCodeCheck("SAPO20P1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="DP Master Data";
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
					that.rect(canvas,data,50,10,1380,40,0) // APO
					that.text(canvas,data,710,30,1000,40,0)
					that.rect(canvas,data,50,80,110,50,1) // TVARVC variant update
					that.text(canvas,data,60,100,90,40,1)
					that.rect(canvas,data,50,160,110,60,2) // Create Date Variables in TVARVC 
					that.text(canvas,data,60,180,100,60,2)
					that.rect(canvas,data,190,80,110,50,3) // Master Data
					that.text(canvas,data,200,100,90,40,3)
					that.rect(canvas,data,190,160,110,60,4) // Master Data Load 
					that.text(canvas,data,200,184,90,60,4)
					that.rect(canvas,data,330,80,530,50,5) // File Upload Process
					that.text(canvas,data,550,100,700,40,5)
					that.rect(canvas,data,330,160,110,60,6) // Promo File Upload 
					that.text(canvas,data,340,180,90,60,6)
					that.rect(canvas,data,470,160,110,60,7) // Promo Dip File Upload
					that.text(canvas,data,480,180,100,60,7)
					that.rect(canvas,data,610,160,110,60,8) // Upload Manual Adjustments
					that.text(canvas,data,620,180,100,60,8)
					that.rect(canvas,data,750,160,110,60,9) // Calculate Calendar Values for OpCos
					that.text(canvas,data,760,180,100,60,9)
					that.rect(canvas,data,900,80,530,50,10) // DPC Generation Process
					that.text(canvas,data,1100,100,700,40,10)
					that.rect(canvas,data,900,160,110,60,11) // Creation of Mapping Table entries from POS
					that.text(canvas,data,910,180,100,60,11)
					that.rect(canvas,data,1040,160,110,60,12) // DPC Generation for PA 010
					that.text(canvas,data,1050,180,100,60,12)
					that.rect(canvas,data,1180,160,110,60,13) // DPC Generation for PA 011
					that.text(canvas,data,1190,180,100,60,13)
					that.rect(canvas,data,1320,160,110,60,14) // DPC Generation by users
					that.text(canvas,data,1330,180,100,60,14)
	return canvas;
	}  , 1000 );
	
	},

	SAPO20P3_Sales_History_Process : function(x){
	    var model = this.uisCodeCheck("SAPO20P3");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="DP Sales History Processing";
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
					that.rect(canvas,data,100,10,1450,40,0) // APO
					that.text(canvas,data,780,30,1000,40,0)
					that.rect(canvas,data,100,80,100,50,1) // Flat File Processing 
					that.text(canvas,data,110,100,90,40,1)
					that.rect(canvas,data,100,160,100,60,2) // EPoS flat file Processing  
					that.text(canvas,data,110,180,90,50,2)
					that.rect(canvas,data,250,80,280,50,3) // EPoS Processing   
					that.text(canvas,data,330,100,250,40,3)
					that.rect(canvas,data,250,160,110,60,4) // Delete & Reload EPoS Volumes  
					that.text(canvas,data,260,180,90,50,4)
					that.rect(canvas,data,410,160,120,60,5) // Recalculate EPoS History Used for Forecasting  
					that.text(canvas,data,420,180,110,50,5)
					that.rect(canvas,data,580,80,970,50,6) // Sales History Processing 
					that.text(canvas,data,1020,100,250,40,6)
					that.rect(canvas,data,580,160,120,60,7) // Sales History Upload to Infocubes in APO  
					that.text(canvas,data,590,180,100,50,7)
					that.rect(canvas,data,750,160,120,60,8) // DPC Generation based on History received  
					that.text(canvas,data,760,180,110,50,8)
					that.rect(canvas,data,920,160,120,60,9) // History Load to Planning Area  
					that.text(canvas,data,930,180,110,50,9)
					that.rect(canvas,data,1090,160,120,60,10) // Load Manual History Adjustments  
					that.text(canvas,data,1100,180,100,50,10)
					that.rect(canvas,data,1260,160,120,60,11) // Recalculate History Used for Forecasting  
					that.text(canvas,data,1270,180,110,50,11)
					that.rect(canvas,data,1430,160,120,60,12) // Run Carry Forward Macro 
					that.text(canvas,data,1440,180,110,50,12)
					// Line And Arrow
					that.line(canvas,data,200,190,250,190)
					that.leftArrow(canvas,data,250,190)
					that.line(canvas,data,360,190,410,190)
					that.leftArrow(canvas,data,410,190)
					that.line(canvas,data,700,190,750,190)
					that.leftArrow(canvas,data,750,190)
					that.line(canvas,data,870,190,920,190)
					that.leftArrow(canvas,data,920,190)
					that.line(canvas,data,1040,190,1090,190)
					that.leftArrow(canvas,data,1090,190)
					that.line(canvas,data,1210,190,1260,190)
					that.leftArrow(canvas,data,1260,190)
					that.line(canvas,data,1380,190,1430,190)
					that.leftArrow(canvas,data,1430,190)
	return canvas;
	}  , 1000 );
	
	},

	SAPO21R6_SUMI_SUProcessFood : function(x){
	    var model = this.uisCodeCheck("SAPO21R6_1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="SUMI Interface - SU process food";
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
			that.rect(canvas,data,10,380,240,60,0) // Stock from ECC to SUMI
			that.text(canvas,data,45,415,300,40,0)
			that.rect(canvas,data,10,460,280,60,1) // STOCK
			that.text(canvas,data,120,495,300,40,1)
			that.pentagon(canvas,data,10,540,340,380,565,595,2) // ECC
			that.text(canvas,data,170,570,300,40,2)
			that.rect(canvas,data,10,615,280,60,3) // PRs in ECC & CIF to APO
			that.text(canvas,data,75,645,300,40,3)
			that.rect(canvas,data,10,695,240,60,4) // PRs Generation in ECC (MD04) 
			that.text(canvas,data,45,725,300,40,4)
			//Second Column
			that.doubleHeadedPipedArrow(canvas,data,420, 565, 450, 525, 545, 600, 630, 600, 580, 5) // BODS
			//x1,y1,x2,y2,y3,x3,x4,y4,y5,index
			that.text(canvas,data,505,565,100,410,5)
			that.rect(canvas,data,420,695,210,60,6) // BODS
			that.text(canvas,data,505,730,300,40,6)
			//Third Column
			that.pentagon(canvas,data,710,10,1080,1120,45,75,7) // BP1
			that.text(canvas,data,890,45,300,40,7)
			that.rect(canvas,data,760,100,280,70,8) // ODS 81 
			that.text(canvas,data,880,135,300,40,8)
			that.rect(canvas,data,780,190,240,70,9) // ODS Cube 81 on Sunday with Gross requirement
			that.text(canvas,data,800,220,200,40,9)
			that.rect(canvas,data,830,380,160,50,10) // BODS 
			that.text(canvas,data,885,410,300,40,10)
			that.pentagon(canvas,data,680,540,1100,1140,565,595,11) // SUMI
			that.text(canvas,data,880,570,300,40,11)
			that.rect(canvas,data,760,615,280,60,12) // BP1 to SUMI GR & Stock
			that.text(canvas,data,830,645,300,40,12)
			that.rect(canvas,data,780,695,240,60,13) // GR & Stock update in SUMI from ECC & BP1
			that.text(canvas,data,810,725,200,40,13)
			//Fourth Column
			that.pentagon(canvas,data,1190,540,1610,1650,565,595,14) // APO
			that.text(canvas,data,1400,570,300,40,14)
			that.rect(canvas,data,1270,615,280,60,15) // PRs in APO 
			that.text(canvas,data,1370,645,300,40,15)
			that.rect(canvas,data,1290,695,240,60,16) // PRs CIFed to APO from ECC 
			that.text(canvas,data,1330,730,300,40,16)
			//Lines And Arrows
			that.line(canvas,data,910, 430, 910, 540) // Line connecting index - 11 & index - 12
			that.downArrow(canvas,data,910, 540)
			that.line(canvas,data,780,725,630,725) // Line connecting index - 14 & index - 7
			that.rightArrow(canvas,data,630, 725)
			that.line(canvas,data,420,725,250,725) // Line connecting index - 7 & index - 5
			that.rightArrow(canvas,data,250, 725)
			that.line(canvas,data,165,755,165,800)// Line connecting index - 5 & index - 17
			that.line(canvas,data,165,800,1580,800)
			that.line(canvas,data,1580,800,1580,725)
			that.line(canvas,data,1580,725,1530,725)
			that.rightArrow(canvas,data,1530, 725)
	return canvas;
	}  , 1000 );
	
	},
	SAPO21R6_SUMI_MSOProcessFood : function(x){
	    var model = this.uisCodeCheck("SAPO21R6_2");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="SUMI Interface - MSO process food";
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
			// First Row
			that.pentagon(canvas,data,10,10,340,380,40,70,0) // SUMI
			that.text(canvas,data,170,45,300,40,0)
			that.doubleHeadedPipedArrow(canvas,data,440, 40, 470, 10 , 30, 620, 650, 75, 55, 1)// BODS
			that.text(canvas,data,525,47,200,40,1)
			that.pentagon(canvas,data,730,10,1060,1100,40,70,2) // APO
			that.text(canvas,data,880,45,300,40,2)
			that.pentagon(canvas,data,1200,10,1530,1570,40,70,3) // BP1
			that.text(canvas,data,1350,45,300,40,3)
			//Second Row
			that.rect(canvas,data,70,110,210,60,4) // GR & Stock
			that.text(canvas,data,140,145,300,40,4)
			that.rect(canvas,data,800,110,210,60,5) // GR & Stock Update in PA
			that.text(canvas,data,840,145,300,40,5)
			that.rect(canvas,data,1270,110,210,60,6) // Cube 70 Update 
			that.text(canvas,data,1330,145,300,40,6)
			//Third Row
			that.rect(canvas,data,70,210,210,70,7) // GR & Stock from SUMI to APO 
			that.text(canvas,data,95,250,300,40,7)
			that.rect(canvas,data,440,210,210,70,8) // BODS
			that.text(canvas,data,525,250,300,40,8)
			that.rect(canvas,data,800,210,210,70,9) // GR & Stock Update in Planning Book 400 & 100
			that.text(canvas,data,820,240,200,40,9)
			that.rect(canvas,data,1270,210,210,70,10) // Delivery Plan updated in Cube 70
			that.text(canvas,data,1280,250,200,40,10)
			//Lines And Arrows
			that.line(canvas,data,280,245,440,245) // Line connecting index - 8 & index - 9
			that.leftArrow(canvas,data,440, 245)
			that.line(canvas,data,650,245,800,245) // Line connecting index - 9 & index - 10
			that.leftArrow(canvas,data,800, 245)
			that.line(canvas,data,1010,245,1270,245) // Line connecting index - 10 & index - 11
			that.leftArrow(canvas,data,1270, 245)
	return canvas;
	}  , 1000 );
	
	},
	
	SAPO21R6_SUMI_SUProcess_HPC : function(x){
	    var model = this.uisCodeCheck("SAPO21R6_3");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="SUMI Interface - SU process (HPC)";
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
				// First Row
				that.pentagon(canvas,data,10,10,340,380,40,70,0) // ECC
				that.text(canvas,data,170,45,300,40,0)
				that.pentagon(canvas,data,440,10,770,810,40,70,1) // APO
				that.text(canvas,data,580,45,300,40,1)
				that.doubleHeadedPipedArrow(canvas,data,850, 40, 890, 10 , 30, 1030, 1060, 75, 55, 2)// XI
				that.text(canvas,data,950,47,200,40,2)
				that.pentagon(canvas,data,1130,10,1460,1500,40,70,3) // SUMI
				that.text(canvas,data,1290,45,300,40,3)
				//Second Row
				that.rect(canvas,data,70,110,210,60,4) // MD for SUMI vendor
				that.text(canvas,data,120,145,300,40,4)
				that.rect(canvas,data,500,110,210,60,5) // SUMI SU & UL MSO
				that.text(canvas,data,550,145,300,40,5)
				that.rect(canvas,data,1190,110,210,60,6) // Request File 
				that.text(canvas,data,1260,145,300,40,6)
				//Third Row
				that.rect(canvas,data,70,210,210,70,7) // PIR and PDS CIF to APO 
				that.text(canvas,data,95,250,300,40,7)
				that.rect(canvas,data,460,210,290,70,8) // Request File uploades to Cube 72 & Request file sent to SUMI from Cube 72
				that.text(canvas,data,500,240,220,40,8)
				that.rect(canvas,data,850,210,210,70,9) // XI Team
				that.text(canvas,data,930,250,200,40,9)
				that.rect(canvas,data,1190,210,210,70,10) // SUMI updated with req file from Cube 72
				that.text(canvas,data,1210,240,200,40,10)
				//Lines And Arrows
				that.line(canvas,data,280,245,460,245) // Line connecting index - 8 & index - 9
				that.leftArrow(canvas,data,460, 245)
				that.line(canvas,data,750,245,850,245) // Line connecting index - 9 & index - 10
				that.leftArrow(canvas,data,850, 245)
				that.line(canvas,data,1060,245,1190,245) // Line connecting index - 10 & index - 11
				that.leftArrow(canvas,data,1190, 245)
	return canvas;
	}  , 1000 );
	
	},
	SAPO21R6_SUMI_MSO_ProcessHPC : function(x){
	    var model = this.uisCodeCheck("SAPO21R6_4");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="SUMI Interface - MSO process (HPC)";
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
			// First Row
			that.pentagon(canvas,data,10,10,340,380,40,70,0) // SUMI
			that.text(canvas,data,170,45,300,40,0)
			that.doubleHeadedPipedArrow(canvas,data,440, 40, 470, 10 , 30, 620, 650, 75, 55, 1)// XI
			that.text(canvas,data,525,47,200,40,1)
			that.pentagon(canvas,data,730,10,1060,1100,40,70,2) // APO
			that.text(canvas,data,880,45,300,40,2)
			that.pentagon(canvas,data,1200,10,1530,1570,40,70,3) // BP1
			that.text(canvas,data,1350,45,300,40,3)
			//Second Row
			that.rect(canvas,data,70,110,210,60,4) // TD Data
			that.text(canvas,data,150,145,300,40,4)
			that.rect(canvas,data,800,110,210,60,5) // TD update in APO
			that.text(canvas,data,840,145,300,40,5)
			that.rect(canvas,data,1270,110,210,60,6) // Cube 70 
			that.text(canvas,data,1350,145,300,40,6)
			//Third Row
			that.rect(canvas,data,70,210,210,70,7) // TD from SUMI to APO
			that.text(canvas,data,105,250,300,40,7)
			that.rect(canvas,data,440,210,210,70,8) // XI
			that.text(canvas,data,525,250,300,40,8)
			that.rect(canvas,data,800,210,210,70,9) // TD Update in APO from SUMI
			that.text(canvas,data,820,250,200,40,9)
			that.rect(canvas,data,1270,210,210,70,10) // Delivery plan update in Cube 70
			that.text(canvas,data,1285,250,200,40,10)
			//Lines And Arrows
			that.line(canvas,data,280,245,440,245) // Line connecting index - 8 & index - 9
			that.leftArrow(canvas,data,440, 245)
			that.line(canvas,data,650,245,800,245) // Line connecting index - 9 & index - 10
			that.leftArrow(canvas,data,800, 245)
			that.line(canvas,data,1010,245,1270,245) // Line connecting index - 10 & index - 11
			that.leftArrow(canvas,data,1270, 245)
	return canvas;
	}  , 1000 );
	
	},
	
	SAPO21R6_Response_to_SUMI : function(x){
	    var model = this.uisCodeCheck("SAPO21R6_5");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="SUMI Interface - SUMI Response";
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
			// First Row
			that.pentagon(canvas,data,10,10,340,380,40,70,0) // APO
			that.text(canvas,data,170,45,300,40,0)
			that.pentagon(canvas,data,440,10,770,810,40,70,1) // BP1
			that.text(canvas,data,580,45,300,40,1)
			that.doubleHeadedPipedArrow(canvas,data,850, 40, 890, 10 , 30, 1030, 1060, 75, 55, 2)// BODS
			that.text(canvas,data,940,47,200,40,2)
			that.pentagon(canvas,data,1130,10,1460,1500,40,70,3) // SUMI
			that.text(canvas,data,1290,45,300,40,3)
			//Second Row
			that.rect(canvas,data,70,110,210,60,4) // Delivery Plan
			that.text(canvas,data,120,145,300,40,4)
			that.rect(canvas,data,500,110,210,60,5) // Cube 70
			that.text(canvas,data,580,145,300,40,5)
			that.rect(canvas,data,1190,110,210,60,6) // Delivery plan in SUMI
			that.text(canvas,data,1230,145,300,40,6)
			//Third Row
			that.rect(canvas,data,70,210,210,70,7) // Delivery Plan release from PB to BP1 Cube 70
			that.text(canvas,data,85,240,200,40,7)
			that.rect(canvas,data,460,210,290,70,8) // Delivery Plan Update in BP1 Cube 70
			that.text(canvas,data,500,250,220,40,8)
			that.rect(canvas,data,850,210,210,70,9) // BODS
			that.text(canvas,data,930,250,200,40,9)
			that.rect(canvas,data,1190,210,210,70,10) // Delivery Plan in SUMI
			that.text(canvas,data,1235,250,200,40,10)
			//Lines And Arrows
			that.line(canvas,data,280,245,460,245) // Line connecting index - 8 & index - 9
			that.leftArrow(canvas,data,460, 245)
			that.line(canvas,data,750,245,850,245) // Line connecting index - 9 & index - 10
			that.leftArrow(canvas,data,850, 245)
			that.line(canvas,data,1060,245,1190,245) // Line connecting index - 10 & index - 11
			that.leftArrow(canvas,data,1190, 245)
	return canvas;
	}  , 1000 );
	
	},
	SAPO20P8_Alerts :  function(x){
	    var model = this.uisCodeCheck("SAPO20P8");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="DP Alerts";
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
			that.rect(canvas,data,10,10,1380,30,0)//APO
			that.text(canvas,data,650,30,130,30,0)
			//second line
			  that.rect(canvas,data,10,50,120,40,1)//Housekeeping Activities
	 		 that.text(canvas,data,20,70,100,30,1)
			  that.rect(canvas,data,150,50,1240,40,3)//Raise Alerts
	 		 that.text(canvas,data,700,70,200,30,3)
			//tasks
		     that.rect(canvas,data,10,110,120,70,2)//Deletion of Alerts (OLD)
	 		 that.text(canvas,data,20,130,100,50,2)
	 		that.rect(canvas,data,150,110,120,70,4)//Raise Proportional Factor Alert
	 		 that.text(canvas,data,160,130,100,50,4)
	 		that.rect(canvas,data,290,110,120,70,5)//Raise History Clean Alert
	 		 that.text(canvas,data,300,130,100,50,5)
	 		that.rect(canvas,data,430,110,120,70,6)//Auto History Cleaning Alert
	 		 that.text(canvas,data,440,130,100,50,6)
	 		that.rect(canvas,data,570,110,120,70,7)//Save Stat Forecast for comparison
	 		 that.text(canvas,data,580,130,100,50,7)
	 		that.rect(canvas,data,710,110,120,70,8)//Compare Stat Forecast Alert
	 		 that.text(canvas,data,720,130,100,50,8)
	 		that.rect(canvas,data,850,110,120,70,9)//Zero Empty Keyfigures
	 		 that.text(canvas,data,860,130,100,50,9)
	 		that.rect(canvas,data,990,110,120,70,10)//Raise Carry Forward Alert
	 		 that.text(canvas,data,1000,130,100,50,10)
	 		that.rect(canvas,data,1130,110,120,70,11)//Compare Finalised Base Forecast Alert
	 		 that.text(canvas,data,1140,130,100,50,11)
	 		 that.line(canvas,data,1250,140,1270,140)
	 		 that.leftArrow(canvas,data,1270,140)
	 		that.rect(canvas,data,1270,110,120,70,12)//Finalised Base Forecast Alert
	 		 that.text(canvas,data,1280,130,100,50,12)
	return canvas;
	}  , 1000 );
	
	},
	

	SAPO20P9_JobScheduling :  function(x){
	    var model = this.uisCodeCheck("SAPO20P9");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="DP Job Scheduling";
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
			that.rect(canvas,data,10,10,1070,30,0)//APO
			that.text(canvas,data,520,30,130,30,0)
			//second line
			  that.rect(canvas,data,10,50,160,50,1)//Sunday Run
	 		that.text(canvas,data,20,70,120,40,1)
	 		 that.rect(canvas,data,190,50,160,50,7)//Monday Run
	 		that.text(canvas,data,200,70,120,40,7)
	 	that.rect(canvas,data,370,50,160,50,14)//Tuesday/Wednesday Run
	 		that.text(canvas,data,380,70,120,40,14)
	 	
	 			that.rect(canvas,data,550,50,160,50,22)//Thursday Run
	 		that.text(canvas,data,560,70,120,40,22)
	 	that.rect(canvas,data,730,50,160,50,29)//Friday Run
	 		that.text(canvas,data,740,70,120,40,29)
	 	that.rect(canvas,data,910,50,160,50,42)//Saturday Run
	 		that.text(canvas,data,920,70,120,40,42)
			//tasks
		     that.rect(canvas,data,10,110,160,440,2)//- DP Consistency
	 		 that.text(canvas,data,20,130,130,10,2)//- DP Consistency
	 		 that.text(canvas,data,20,150,130,10,3)//- Promo Management
 		     that.text(canvas,data,20,170,130,20,4)//- PPM transfer from ECC
 		     that.text(canvas,data,20,200,130,20,5)//- Sales History Processing
 		     that.text(canvas,data,20,230,130,20,6)//- DPC Maintainence and Dependent Demand Calculation
	 		   that.rect(canvas,data,190,110,160,440,8)//- DP Consistency
		 		 that.text(canvas,data,200,130,130,10,8)//- DP Consistency
		 		 that.text(canvas,data,200,150,130,10,9)//- Promo Management
		 		  that.text(canvas,data,200,170,130,20,10)//- DP Master Data/flat file uploads
		 		   that.text(canvas,data,200,200,130,20,11)//- EPoS Flat file and Planning area processing
		 		    that.text(canvas,data,200,230,130,20,12)//- Planning Master update for Dependent Demand
		 		     that.text(canvas,data,200,260,130,20,13)//- DPC Maintainence and Dependent Demand Calculation
		 		      that.rect(canvas,data,370,110,160,440,15)//- DP Consistency
		 		 that.text(canvas,data,380,130,130,10,15)//- DP Consistency
		 		 that.text(canvas,data,380,150,130,10,16)//- Promo Management
		 		  that.text(canvas,data,380,170,130,20,17)//- DP Master data incl PPM & Flat file uploads
		 		   that.text(canvas,data,380,200,130,20,18)//- EPoS file processing
		 		    that.text(canvas,data,380,230,130,20,19)//- EPoS planning area data processing
		 		     that.text(canvas,data,380,260,130,20,20)//- Planning Master update for dependant demand
		 		     that.text(canvas,data,380,290,130,20,21)//- DPC Maintainence and Dependent Demand Calculation
		 		    that.rect(canvas,data,550,110,160,440,23)//- DP Consistency
			 		 that.text(canvas,data,560,130,130,10,23)//- DP Consistency
			 		 that.text(canvas,data,560,150,130,10,24)//- Promo Management
			 		  that.text(canvas,data,560,170,130,20,25)//- DP Master data incl PPM & Flat file uploads
			 		   that.text(canvas,data,560,200,130,20,26)//- Planning Master update for dependant demand
			 		    that.text(canvas,data,560,230,130,20,27)//- DPC Maintainence and Dependent Demand Calculation
			 		     that.text(canvas,data,560,260,130,20,28)//- Promotion Explosion jobs
                     that.rect(canvas,data,730,110,160,440,30)//- DP Consistency
			 		 that.text(canvas,data,740,130,130,10,30)//- DP Consistency
		        that.text(canvas,data,740,150,130,10,31)//- Promo Management
		         that.text(canvas,data,740,170,130,40,32)//- Dependent Demand recalculation for Cash Up
		          that.text(canvas,data,740,210,130,40,33)//- DP Master data incl PPM & Flat file uploads
		           that.text(canvas,data,740,250,130,30,34)//- Sales History Processing
		            that.text(canvas,data,740,280,130,40,35)//- Planning Master update for dependant demand
		             that.text(canvas,data,740,320,130,40,36)//- DPC Maintainence and Dependent Demand Calculation
		              that.text(canvas,data,740,370,130,10,37)//- Disaggregation
		               that.text(canvas,data,740,390,130,30,38)//- Data Archive for DP Alerts
			that.text(canvas,data,740,420,130,10,39)//- Forecast Calculations
			that.text(canvas,data,740,440,130,10,40)//- Alerts Generation
			that.text(canvas,data,740,460,130,10,41)//- Release Forecast to SNP
			that.textBlack(canvas,data,910,145,160,30,43)
			that.line(canvas,data,900,130,1080,130)
			that.line(canvas,data,900,130,900,150)
			that.line(canvas,data,1080,130,1080,150)
			that.line(canvas,data,900,150,1080,150)
	return canvas;
	}  , 1000 );
	
	},
	SAPO20Q1_Realignment:  function(x){
	    var model = this.uisCodeCheck("SAPO20Q1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="DP Realignment";
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
			that.rect(canvas,data,10,10,1015,30,0)//APO
			that.text(canvas,data,500,30,130,30,0)
			that.rect(canvas,data,1060,10,120,30,11)//APO - BW
			that.text(canvas,data,1070,30,110,30,11)
			//second line
			 that.rect(canvas,data,10,50,170,50,1)//Communication
	 		that.text(canvas,data,20,70,120,40,1)
	 		 that.rect(canvas,data,210,50,280,50,3)//Validation Process
	 		that.text(canvas,data,290,70,120,40,3)
	 		 that.rect(canvas,data,520,50,660,50,6)//Realignment Activities
	 		that.text(canvas,data,800,70,120,40,6)
			//tasks
	 		that.textBlack(canvas,data,20,140,150,50,2)//Unilever Bus. Ops. engage project team and confirm scope of realignment (countries, volume)
	 		that.line(canvas,data,10,120,180,120)
	 		that.line(canvas,data,10,120,10,210)
	 		that.line(canvas,data,180,120,180,210)
	 		that.line(canvas,data,10,210,180,210)
	 		 that.rect(canvas,data,210,110,120,100,4)//Planners Validate their Realignment Requests in Validation Tool in QA
		 	that.text(canvas,data,220,130,100,80,4)
		 	that.line(canvas,data,330,150,370,150)
		 	that.leftArrow(canvas,data,370,150)
		 	that.rect(canvas,data,370,110,120,100,5)//Project Coordinator does a final check with business, before submitting to realignment table in QA
		 	that.text(canvas,data,380,130,100,80,5)
		 	that.rect(canvas,data,520,110,120,100,7)//UAT Testing of Realignment in Test Systems (QA)
		 	that.text(canvas,data,530,130,100,80,7)
		 	that.line(canvas,data,640,150,670,150)
		 	that.leftArrow(canvas,data,670,150)
		 	that.textBlack(canvas,data,680,140,150,50,8)//Cutover Preparation for P2P (Plan to Prod)
	 		that.line(canvas,data,670,120,860,120)
	 		that.line(canvas,data,670,120,670,210)
	 		that.line(canvas,data,860,120,860,210)
	 		that.line(canvas,data,670,210,860,210)
	 		that.line(canvas,data,860,150,900,150)
		 	that.leftArrow(canvas,data,900,150)
	 		that.rect(canvas,data,900,110,125,100,9)//Realignment Execution in APO (Product & Customer Realignment in Planning Area and APO Cubes)
		 	that.text(canvas,data,910,130,110,80,9)
		 	that.line(canvas,data,1025,150,1060,150)
		 	that.leftArrow(canvas,data,1060,150)
		 	that.rect(canvas,data,1060,110,120,100,10)//Realignment Execution in BW
		 	that.text(canvas,data,1070,130,100,80,10)
	return canvas;
	}  , 1000 );
	
	},
	SAPO20P7_DependentDemand:  function(x){
	    var model = this.uisCodeCheck("SAPO20P7");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="DP Dependent Demand";
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
			that.rect(canvas,data,10,10,110,40,0)//ECC
			that.text(canvas,data,45,35,110,40,0)//ECC
			that.rect(canvas,data,140,10,1100,40,1)//APO
			that.text(canvas,data,650,35,100,40,1)//APO
			//second line
			that.rect(canvas,data,10,70,510,40,2)//PPM Transfer/Upload from ECC
			that.text(canvas,data,150,90,510,40,2)//PPM Transfer/Upload from ECC
			that.rect(canvas,data,540,70,480,40,7)//Master Data for Dependant Demand in APO  
			that.text(canvas,data,655,90,480,40,7)//Master Data for Dependant Demand in APO  
			that.rect(canvas,data,540,110,480,20,8)//MONDAY TO FRIDAY
			that.text(canvas,data,700,125,480,20,8)//MONDAY TO FRIDAY
			that.rect(canvas,data,1040,70,200,40,13)//Calculate Dependant Demand, Total Demand 
			that.text(canvas,data,1050,85,190,40,13)//Calculate Dependant Demand, Total Demand 
			//tasks
			that.rect(canvas,data,10,150,100,70,3)//Sales BOM Extraction (ECC)
			that.text(canvas,data,15,165,90,70,3)//Sales BOM Extraction (ECC)
			that.line(canvas,data,110,185,140,185)//from sales bom to move files from eCc
			that.leftArrow(canvas,data,140,185)
			that.rect(canvas,data,140,150,105,70,4)//Move files from ECC to APO Directory in AL11 
			that.text(canvas,data,145,165,100,70,4)//Move files from ECC to APO Directory in AL11 
			that.line(canvas,data,245,185,275,185)//Move files from ECC to APO Directory in AL11 to PPM  Creation
			that.leftArrow(canvas,data,275,185)
			that.rect(canvas,data,275,150,110,70,5)//PPM  Creation
			that.text(canvas,data,280,165,100,70,5)//PPM  Creation
			that.rect(canvas,data,415,150,100,70,6)//Archive uploaded BOM files
			that.text(canvas,data,420,165,100,70,6)//Archive uploaded BOM files
			that.rect(canvas,data,540,150,100,70,9)//Import Complex Packs DPCs
			that.text(canvas,data,545,165,90,70,9)//Import Complex Packs DPCs
			that.line(canvas,data,640,185,660,185)//from Import Complex Packs DPCs to DPC Creation for PA 11 from IC 211
			that.leftArrow(canvas,data,660,185)
			that.rect(canvas,data,660,150,100,70,10)//DPC Creation for PA 11 from IC 211
			that.text(canvas,data,665,165,100,70,10)//DPC Creation for PA 11 from IC 211
			that.line(canvas,data,760,185,780,185)//from DPC creation to ADD BOM info
			that.leftArrow(canvas,data,780,185)
			that.rect(canvas,data,780,150,110,70,11)//Add BOM Info in POS 11
			that.text(canvas,data,785,165,100,70,11)//Add BOM Info in POS 11
			that.line(canvas,data,890,185,910,185)//from add BOM Info in POS 11 to Import DPCs from POS 11 to Cube 210
			that.leftArrow(canvas,data,910,185)
			that.rect(canvas,data,910,150,110,70,12)//Import DPCs from POS 11 to Cube 210
			that.text(canvas,data,915,165,100,70,12)//Import DPCs from POS 11 to Cube 210
			that.rect(canvas,data,1040,150,90,70,14)//Calculate Dependant Demand
			that.text(canvas,data,1045,165,100,70,14)//Calculate Dependant Demand
			that.rect(canvas,data,1150,150,90,70,15)//Calculate Total Demand 
			that.text(canvas,data,1155,165,90,70,15)//Calculate Total Demand 
	return canvas;
	}  , 1000 );
	
	},
			

	SAPO20P6_NOFCalculation:  function(x){
	    var model = this.uisCodeCheck("SAPO20P6");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="DP NOF Calculation";
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
			that.rect(canvas,data,10,10,1340,40,0)//APO
			that.text(canvas,data,650,35,1340,40,0)//APO
			//second line
			that.rect(canvas,data,10,70,470,40,1)//Calculate Selected Forecast
			that.text(canvas,data,20,90,470,40,1)//Calculate Selected Forecast
			that.rect(canvas,data,500,70,120,40,6)//Calculate Finalized Carry Forward 
			that.text(canvas,data,510,85,120,40,6)//Calculate Finalized Carry Forward 
			that.rect(canvas,data,640,70,120,40,8)//Calculate S&OP forecast
			that.text(canvas,data,650,85,120,40,8)//Calculate S&OP forecast
			that.rect(canvas,data,780,70,240,40,10)//Calculate Naive Forecast
			that.text(canvas,data,790,85,240,40,10)//Calculate Naive Forecast
			that.rect(canvas,data,1040,70,170,40,13)//Calculate National Operational Forecast(NOF)
			that.text(canvas,data,1045,85,170,40,13)//Calculate National Operational Forecast(NOF)
			that.rect(canvas,data,1230,70,120,40,15)//Release Forecast to SNP
			that.text(canvas,data,1235,90,120,40,15)//Release Forecast to SNP
			//tasks
			that.rect(canvas,data,10,130,100,70,2)//Statistical Forecast(Baseline)
			that.textBlack(canvas,data,15,145,90,70,2)//Statistical Forecast(Baseline)
			that.line(canvas,data,110,160,140,160)//from Statistical Forecast(Baseline) to Calculate Finalized Baseline Forecast
			that.leftArrow(canvas,data,140,160)
			that.rect(canvas,data,140,130,105,70,3)//Calculate Finalized Baseline Forecast
			that.text(canvas,data,145,145,100,70,3)//Calculate Finalized Baseline Forecast
			that.line(canvas,data,245,160,380,160)//from calculate Finalized Baseline Forecast to Derive Selected Forecast
			that.leftArrow(canvas,data,380,160)
			that.rect(canvas,data,265,220,110,70,4)//Final Promotions & Baseline reduction/Cannib
			that.textBlack(canvas,data,270,235,100,70,4)//Final Promotions & Baseline reduction/Cannib
			that.line(canvas,data,310,220,310,160)//from Final Promotions & Baseline reduction/Cannib to horizontal line
			that.upArrow(canvas,data,310,160)
			that.rect(canvas,data,380,130,100,70,5)//Derive Selected Forecast
			that.text(canvas,data,385,145,100,70,5)//Derive Selected Forecast
			that.rect(canvas,data,510,130,100,70,7)//Run DP Macro to Calculate FCF
			that.text(canvas,data,515,145,90,70,7)//Run DP Macro to Calculate FCF
			that.line(canvas,data,610,160,650,160)//from Run DP Macro to Calculate FCF to Run DP Macro to Calculate S&OP forecast
			that.leftArrow(canvas,data,650,160)
			that.rect(canvas,data,650,130,100,70,9)//Run DP Macro to Calculate S&OP forecast
			that.text(canvas,data,655,145,100,70,9)//Run DP Macro to Calculate S&OP forecast
			that.rect(canvas,data,780,130,110,70,11)//Naive Case Determination and Calculate Naive Forecast
			that.text(canvas,data,785,145,100,70,11)//Naive Case Determination and Calculate Naive Forecast
			that.rect(canvas,data,910,130,110,70,12)//Copy Smoothed History for Naive
			that.text(canvas,data,915,145,100,70,12)//Copy Smoothed History for Naive
			that.rect(canvas,data,1070,130,100,70,14)//Run DP Macro to Calculate NOF
			that.text(canvas,data,1075,145,100,70,14)//Run DP Macro to Calculate NOF
			that.line(canvas,data,1170,160,1240,160)//from Run DP Macro to Calculate NOF to Release NOF to SNP
			that.leftArrow(canvas,data,1240,160)
			that.rect(canvas,data,1240,130,100,70,16)//Release NOF to SNP
			that.text(canvas,data,1245,145,90,70,16)//Release NOF to SNP

	return canvas;
	}  , 1000 );
	
	},

	SAPO20P5_DPPromotionalPlanning:  function(x){
	    var model = this.uisCodeCheck("SAPO20P5");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="DP Promotional Planning";
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
			that.rect(canvas,data,10,10,1380,40,0)//APO
			that.text(canvas,data,650,35,1380,40,0)//APO
			//second line
			that.rect(canvas,data,10,70,150,40,1)//Export Forecast Upload
			that.text(canvas,data,20,90,150,40,1)//Export Forecast Upload
			that.rect(canvas,data,180,70,230,40,3)//File Upload Process 
			that.text(canvas,data,240,90,230,40,3)//File Upload Process 
			that.rect(canvas,data,430,70,130,40,6)//DPC Generation on Promo Data 
			that.text(canvas,data,440,85,120,40,6)//DPC Generation on Promo Data 
			that.rect(canvas,data,580,70,220,40,8)//Load Data into DP PA
			that.text(canvas,data,630,90,220,40,8)//Load Data into DP PA
			that.rect(canvas,data,820,70,570,40,11)//DP Macro Processing
			that.text(canvas,data,1030,90,570,40,11)//DP Macro Processing
			//tasks
			that.rect(canvas,data,30,130,100,70,2)//Forecast Upload and DP Processing
			that.text(canvas,data,35,145,90,70,2)//Forecast Upload and DP Processing
			that.rect(canvas,data,180,130,100,70,4)//Promo File Upload
			that.text(canvas,data,185,145,90,70,4)//Promo File Upload
			that.line(canvas,data,280,160,310,160)//from promo file upload to promo dip file upload
			that.leftArrow(canvas,data,310,160)
			that.rect(canvas,data,310,130,100,70,5)//Promo Dip File Upload
			that.text(canvas,data,315,145,90,70,5)//Promo Dip File Upload
			that.rect(canvas,data,445,130,100,70,7)//Generate DPCs from Promo Upload
			that.text(canvas,data,450,145,100,70,7)//Generate DPCs from Promo Upload
			that.rect(canvas,data,580,130,100,70,9)//Delete and Reload Promo Volumes
			that.text(canvas,data,585,145,90,70,9)//Delete and Reload Promo Volumes
			that.rect(canvas,data,700,130,100,70,10)//Load Promo Dip% to PA 010
			that.text(canvas,data,705,145,100,70,10)//Load Promo Dip% to PA 010
			that.rect(canvas,data,820,130,100,70,12)//Selective Promo adoption within selected weeks
			that.text(canvas,data,825,145,100,70,12)//Selective Promo adoption within selected weeks
			that.line(canvas,data,920,160,940,160)//from Selective Promo adoption within selected weeks to Copy Planned Promo to Finalized Promo
			that.leftArrow(canvas,data,940,160)
			that.rect(canvas,data,940,130,100,70,13)//Copy Planned Promo to Finalized Promo
			that.text(canvas,data,945,145,90,70,13)//Copy Planned Promo to Finalized Promo
			that.rect(canvas,data,1060,130,100,70,14)//Delete baseline reduction for Selected OpCos
			that.text(canvas,data,1065,145,100,70,14)//Delete baseline reduction for Selected OpCos
			that.line(canvas,data,1160,160,1180,160)//from Delete baseline reduction for Selected OpCos to Mass Promo Cannibalisation
			that.leftArrow(canvas,data,1180,160)
			that.rect(canvas,data,1180,130,90,70,15)//Mass Promo Cannibalisation
			that.text(canvas,data,1185,145,80,70,15)//Mass Promo Cannibalisation
			that.rect(canvas,data,1290,130,100,70,16)//Copy Planned Promotions into Previous Promotions from AMPS
			that.text(canvas,data,1295,145,100,70,16)//Copy Planned Promotions into Previous Promotions from AMPS
	return canvas;
	}  , 1000 );
	
	},

	SAPO20P4_StatForecasting:  function(x){
	    var model = this.uisCodeCheck("SAPO20P4");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="DP Stat Forecasting";
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
			that.rect(canvas,data,10,70,250,40,1)//Housekeeping Activities
			that.text(canvas,data,70,90,250,40,1)//Housekeeping Activities
			that.rect(canvas,data,290,70,250,40,4)//Statistical Forecast Generation (Standard)
			that.text(canvas,data,305,90,250,40,4)//Statistical Forecast Generation (Standard)
			that.rect(canvas,data,620,70,300,40,6)//Custom Stat Forecast Load via Flat File
			that.text(canvas,data,660,90,300,40,6)//Custom Stat Forecast Load via Flat File
			//tasks
			that.rect(canvas,data,10,130,100,60,2)//Deletion of Old DP Logs
			that.text(canvas,data,15,145,90,60,2)//Deletion of Old DP Logs
			that.rect(canvas,data,140,130,120,60,3)//Consistency Report for Forecast Profiles
			that.text(canvas,data,145,145,120,60,3)//Consistency Report for Forecast Profiles
			that.rect(canvas,data,340,130,120,60,5)//Statistical Forecast Generation
			that.text(canvas,data,345,145,120,60,5)//Statistical Forecast Generation
			that.dottedLine(canvas,data,580,70,580,200)
			that.rect(canvas,data,700,130,120,60,7)//Stat Forecast - Flat File upload for reduced horizons
			that.text(canvas,data,705,145,120,60,7)//Stat Forecast - Flat File upload for reduced horizons"
	return canvas;
	}  , 1000 );
	
	},

	SAPO21Q5P1_CCR:  function(x){
	    var model = this.uisCodeCheck("SAPO21Q5P1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="SP CCR";
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
			that.rect(canvas,data,400,10,390,40,0)//APO
			that.text(canvas,data,580,35,390,40,0)//APO
			//second line
			that.rect(canvas,data,440,70,300,40,1)//CIF Comparision/Reconcilliation Report 
			that.text(canvas,data,490,90,300,40,1)//CIF Comparision/Reconcilliation Report 
			//tasks
			that.rect(canvas,data,450,130,280,50,2)//Comparision and Reconcilliation of Transaction Data between ECC and APO.
			that.text(canvas,data,455,145,260,50,2)//Comparision and Reconcilliation of Transaction Data between ECC and APO.
	return canvas;
	}  , 1000 );
	
	},

	SAPO21R3R1_DeploymentAndTLBPlanning:  function(x){
	    var model = this.uisCodeCheck("SAPO21R3R1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="Deployement TLB";
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
			that.rect(canvas,data,400,10,390,40,0)//APO
			that.text(canvas,data,580,35,390,40,0)//APO
			//second line
			that.rect(canvas,data,440,70,300,40,1)//Deployment 
			that.text(canvas,data,560,90,300,40,1)//Deployment 
			//tasks
			that.rect(canvas,data,450,130,280,40,2)//Deployment Run
			that.text(canvas,data,550,145,260,40,2)//Deployment Run
			
	return canvas;
	}  , 1000 );
	
	},
	
	SAPO21Q6_ForecastReleaseToSNP:  function(x){
	    var model = this.uisCodeCheck("SAPO21Q6");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="P2F SP Forecast Release";
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
			that.rect(canvas,data,10,10,250,40,0)//TERRA
			that.text(canvas,data,110,35,250,40,0)//TERRA
			that.rect(canvas,data,280,10,250,40,3)//BODS
			that.text(canvas,data,380,35,250,40,3)//BODS
			that.rect(canvas,data,550,10,600,40,5)//APO
			that.text(canvas,data,840,35,600,40,5)//APO
			//second line
			that.rect(canvas,data,10,70,250,40,1)//Terra Demand Signal
			that.text(canvas,data,80,90,250,40,1)//Terra Demand Signal
			that.rect(canvas,data,570,70,230,40,6)//Terra Demand Signal
			that.text(canvas,data,630,90,230,40,6)//Terra Demand Signal second
			that.rect(canvas,data,900,70,230,40,8)//Forecast Release from DP to SNP
			that.text(canvas,data,925,90,230,40,8)//Forecast Release from DP to SNP
			//tasks
			that.rect(canvas,data,30,130,130,50,2)//Terra Demand Signal File release
			that.text(canvas,data,35,145,120,50,2)//Terra Demand Signal File release
			that.line(canvas,data,160,155,335,155)//from terra dmd signam file release to bods
			that.leftArrow(canvas,data,335,155)
			that.rect(canvas,data,335,130,130,50,4)//BODS
			that.text(canvas,data,340,145,130,50,4)//BODS
			that.line(canvas,data,465,155,560,155)//from bods to short term(4 weeks) Terra DemandSignal Release to SNP
			that.leftArrow(canvas,data,560,155)
			that.dottedLine(canvas,data,850,70,850,180)
			that.rect(canvas,data,560,130,250,50,7)//Short Term (4 Weeks) Terra DemandSignal Release to SNP
			that.text(canvas,data,565,145,250,50,7)//Short Term (4 Weeks) Terra DemandSignal Release to SNP
			that.rect(canvas,data,890,130,250,50,9)//Long Term Forecast Release DP to SNP
			that.text(canvas,data,895,145,250,50,9)//Long Term Forecast Release DP to SNP
			
			
	return canvas;
	}  , 1000 );
	
	},
	
	/*------*FINANACE*-----------*/
	
	SR2R13J6K1_ActualCostForMaterials:  function(x){
	    var model = this.uisCodeCheck("SR2R13J6K1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="Material Ledger";
	    setTimeout( function(){
	      x.editPopUp.close();
	      var that=x;
	      var width=3000;
	       var height=1500;
	       var dom;
	       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
	       var canvas = d3.select(ScrollID).append("svg")
	       .attr("width",width)
	       .attr("id","idCanvas")
	       .attr("height",height).append("g")
					that.rect(canvas,data,10,10,2800,60,0) // ECC
					that.text(canvas,data,1390,40,2000,60,0)
					
					that.rect(canvas,data,10,90,150,80,1)  // Master Data
					that.text(canvas,data,40,130,130,40,1)
					
					that.rect(canvas,data,180,90,1020,80,2)	// Data Sources
					that.text(canvas,data,650,130,1000,40,2)
					
					that.rect(canvas,data,1230,90,1190,80,3) // Material Ledger Run
					that.text(canvas,data,1700,130,1000,40,3)
					
					that.rect(canvas,data,2460,90,340,80,4) // Reporting
					that.text(canvas,data,2600,130,300,40,4)
					
					that.rect(canvas,data,10,200,150,100,5) // Accounting 1 View
					that.text(canvas,data,30,240,130,40,5)
					
					that.rect(canvas,data,180,200,150,100,6) // Buying Price Variances
					that.text(canvas,data,195,240,130,40,6)
					
					that.rect(canvas,data,350,200,150,100,7) // Subcon/Repack Variances
					that.text(canvas,data,365,240,130,40,7)
					
					that.rect(canvas,data,520,200,150,100,8) // Revaluation Variances
					that.text(canvas,data,535,240,130,40,8)
					
					that.rect(canvas,data,690,200,150,100,9)	// Stock Transfer Variances
					that.text(canvas,data,705,240,130,40,9)
					
					that.rect(canvas,data,860,200,150,100,10) // Production Variances
					that.text(canvas,data,875,240,130,40,10)
					
					that.rect(canvas,data,1030,200,150,100,11) // MR22 Postings
					that.text(canvas,data,1045,240,130,40,11)

					that.rect(canvas,data,1230,200,150,100,12) // Selection
					that.text(canvas,data,1245,240,130,40,12)

					that.rect(canvas,data,1400,200,150,100,13) // Sequence Determination
					that.text(canvas,data,1415,240,130,40,13)
					
					that.rect(canvas,data,1570,200,150,100,14) // Single-level Price Determ.
					that.text(canvas,data,1585,240,130,40,14)
					
					that.rect(canvas,data,1740,200,150,100,15) // Multi-level Price Determ.
					that.text(canvas,data,1755,240,130,40,15)
					
					that.rect(canvas,data,1910,200,150,100,16) // Consumption Revaluation
					that.text(canvas,data,1925,240,130,40,16)
				
					that.rect(canvas,data,2080,200,150,100,17) // WIP Revaluation
					that.text(canvas,data,2095,240,130,40,17)
					
					that.rect(canvas,data,2250,200,150,100,18) // Posting Closing Entries
					that.text(canvas,data,2265,240,130,40,18)
					
					that.rect(canvas,data,2460,200,150,100,19) // Individual Materials
					that.text(canvas,data,2475,240,130,40,19)
					
					that.rect(canvas,data,2650,200,150,100,20) // Multiple Materials
					that.text(canvas,data,2665,240,130,40,20)	
	return canvas;
	}  , 1000 );
	
	},
	
	S_Fin_1_SiriusAP:  function(x){
	    var model = this.uisCodeCheck("S_FIN_1");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="R2R Sirius AP";
	    setTimeout( function(){
	      x.editPopUp.close();
	      var that=x;
	      var width=6000;
	       var height=6000;
	       var dom;
	       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
	       var canvas = d3.select(ScrollID).append("svg")
	       .attr("width",width)
	       .attr("id","idCanvas")
	       .attr("height",height).append("g")
		//**********************Column1************************************************//
					that.pentagon(canvas,data,10,50,90,100,70,90,0)  	// x1,y1,x2,x3,y3,y4  GVMD
					that.text(canvas,data,30,70,100,40,0)

					that.pentagon(canvas,data,10,100,90,100,120,140,1)	// MP1
					that.text(canvas,data,30,120,100,40,1)
					
					that.pentagon(canvas,data,110,50,190,220,95,140,2)	//PI
					that.text(canvas,data,150,100,100,40,2)

					that.pentagon(canvas,data,230,50,310,340,95,140,3)	// ECC
					that.text(canvas,data,260,100,100,40,3)
					
					that.rect(canvas,data,10,160,330,90,4)			// Vendor Master Data Creation
					that.text(canvas,data,80,200,300,70,4)
					
					that.rect(canvas,data,10,270,330,120,5)			// Vendor Master Data creation or modification 
					that.text(canvas,data,50,320,300,100,5)
					that.line(canvas,data,340,320,360,320)			// output line to column2 box"Vendor Master Data created or modified sent to ARIBA and DCIW"
					that.leftArrow(canvas,data,360,320)
//*********************Column2****************************************************//
					that.pentagon(canvas,data,360,20,460,470,35,50,6)	// RFC connection
					that.text(canvas,data,370,40,100,40,6)
					
					that.pentagon(canvas,data,360,60,460,470,78,95,7)	// PI
					that.text(canvas,data,400,80,100,40,7)
					
					that.pentagon(canvas,data,360,110,460,470,125,140,8)	// BODS(Sirius)
					that.text(canvas,data,370,130,100,40,8)
					
					that.pentagon(canvas,data,480,20,570,580,35,50,9)	// PHP
					that.text(canvas,data,500,40,100,40,9)
					
					that.pentagon(canvas,data,480,60,570,580,78,95,10)	// ARIBA
					that.text(canvas,data,500,80,100,40,10)
					
					that.pentagon(canvas,data,480,110,570,580,125,140,11) 	//	DCIW
					that.text(canvas,data,500,130,100,40,11)
					
					that.rect(canvas,data,360,160,220,90,12) 		//  Interface Vendor Master Data to ARIBA and DCIW (Outbound)
					that.text(canvas,data,380,200,200,70,12)
					
					that.rect(canvas,data,360,270,220,120,13)		// Vendor Master Data created or modified sent to ARIBA and DCIW
					that.text(canvas,data,380,320,200,100,13)	
//*********************Column3****************************************************//
					that.pentagon(canvas,data,600,60,615,630,100,140,14)	// Direct
					that.rotateText(canvas,data,615,120,100,40,14,270)
					
					that.pentagon(canvas,data,600,160,615,630,210,250,15)	// Indirect
					that.rotateText(canvas,data,615,230,100,40,15,270)
					
					that.pentagon(canvas,data,640,60,1060,1080,100,140,16)	// ECC
					that.text(canvas,data,830,100,300,40,16)
					
					that.pentagon(canvas,data,640,160,700,720,205,250,17)	//	ARIBA
					that.text(canvas,data,655,200,100,80,17)
					
					that.freeText(canvas,data,715,175,70,40,66,"15px")
					that.line(canvas,data,710,180,785,180)
					that.leftArrow(canvas,data,785,180)
					
					that.line(canvas,data,705,240,785,240)
					that.rightArrow(canvas,data,705,240)
					that.freeText(canvas,data,710,265,1000,40,67,"15px")
					
					that.pentagon(canvas,data,725,190,770,780,205,220,18)	// PI
					that.text(canvas,data,740,210,80,40,18)
					
					that.pentagon(canvas,data,785,160,850,870,205,250,19)	// ECC
					that.text(canvas,data,810,205,100,80,19)
					
					that.pentagon(canvas,data,875,170,940,960,210,240,20)	//	BODS
					that.text(canvas,data,895,210,100,80,20)
					
					that.pentagon(canvas,data,970,160,1060,1080,205,250,21)	// DCIW
					that.text(canvas,data,1000,210,100,80,21)
					
					that.rect(canvas,data,600,270,480,90,22)		// Purchase Requisition/ Purchase Order Creation
					that.text(canvas,data,710,310,400,80,22)
					
					that.rect(canvas,data,610,380,210,120,23)		// Purchase Requisition/Purchase Order creation
					that.text(canvas,data,630,420,180,100,23)
					that.line(canvas,data,820,440,870,440)			// output line to "Send Status of Purchase Requisition/Purchase Order created(ACK)"
					that.leftArrow(canvas,data,870,440)
					
					that.rect(canvas,data,870,380,210,120,24)		// Send Status of Purchase Requisition/Purchase Order created(ACK)
					that.text(canvas,data,890,420,180,100,24)
//*********************Column4****************************************************//
					that.pentagon(canvas,data,1100,160,1115,1130,210,250,25)		// Direct
					that.rotateText(canvas,data,1115,220,100,30,25,270)
					
					that.pentagon(canvas,data,1100,270,1115,1130,320,365,26)		// Indirect
					that.rotateText(canvas,data,1115,340,100,30,26,270)
					
					that.pentagon(canvas,data,1140,160,1560,1580,200,240,27)		// ECC
					that.text(canvas,data,1330,200,400,60,27)
					
					that.pentagon(canvas,data,1140,270,1200,1220,315,365,28)		// ARIBA
					that.text(canvas,data,1155,320,100,60,28)
					
					that.freeText(canvas,data,1210,280,1000,40,68,"15px")
					that.line(canvas,data,1205,285,1285,285)
					that.leftArrow(canvas,data,1285,285)
					
					that.line(canvas,data,1205,350,1285,350)
					that.rightArrow(canvas,data,1205,350)
					that.freeText(canvas,data,1210,370,1000,40,69,"15px")
					
					that.pentagon(canvas,data,1225,300,1270,1280,315,330,29)	//	PI
					that.text(canvas,data,1240,320,50,30,29)
					
					that.pentagon(canvas,data,1285,270,1360,1380,315,365,30)	// ECC
					that.text(canvas,data,1310,320,100,60,30)
					
					that.pentagon(canvas,data,1390,275,1430,1460,315,355,31)	// BODS
					that.text(canvas,data,1400,320,100,60,31)
					
					that.pentagon(canvas,data,1470,270,1550,1570,315,365,32)	//DCIW
					that.text(canvas,data,1500,320,100,60,32)
					
					that.rect(canvas,data,1100,380,470,90,33)			// Goods Receipt Creation
					that.text(canvas,data,1270,420,400,70,33)
					
					that.rect(canvas,data,1110,480,200,120,34)			//Goods Receipt creation
					that.text(canvas,data,1140,530,180,100,34)
					that.line(canvas,data,1310,540,1360,540)			// output line to "Send Status of Goods Receipt created (N/A for direct purchasing)(ACK)"
					that.leftArrow(canvas,data,1360,540)
					
					that.rect(canvas,data,1360,480,200,120,35)			// Send Status of Goods Receipt created (N/A for direct purchasing)(ACK)
					that.text(canvas,data,1370,520,180,100,35)
//*********************Column5****************************************************//
					that.pentagon(canvas,data,1600,270,1615,1640,315,365,36)		// Direct
					that.rotateText(canvas,data,1615,345,100,40,36,270)
					
					that.pentagon(canvas,data,1600,380,1615,1640,490,600,37)		// Indirect
					that.rotateText(canvas,data,1620,500,200,40,37,270)
					
					that.pentagon(canvas,data,1650,270,1970,1990,315,365,38)		// ECC
					that.text(canvas,data,1800,320,300,80,38)
					
					that.pentagon(canvas,data,1650,400,1750,1770,420,440,39)		// COMPUDATA (intercompany)
					that.text(canvas,data,1660,420,100,30,39)
					
					that.pentagon(canvas,data,1650,460,1750,1770,480,500,40)		// GERS/GTES
					that.text(canvas,data,1660,480,100,30,40)
					
					that.pentagon(canvas,data,1650,520,1750,1770,540,560,41)		// DCIW
					that.text(canvas,data,1680,540,100,30,41)
					
					that.pentagon(canvas,data,1780,400,1810,1845,480,560,42)		// PI (IDOCS)
					that.text(canvas,data,1780,480,60,40,42)
					
					that.pentagon(canvas,data,1850,400,1880,1910,480,560,43)		// ECC
					that.text(canvas,data,1865,480,50,60,43)
					that.line(canvas,data,1850,580,1700,580)
					that.line(canvas,data,1700,580,1700,565)
					that.upArrow(canvas,data,1700,565)
					
					that.circle(canvas,data,1950,400,20,78)						// circle 1
			
					
					that.circle(canvas,data,1950,460,25,79)						// Circle 2
					that.box(canvas,data,2000,380,100,40,80,"0.5px")				//Down Payment
					that.freeText(canvas,data,2010,400,80,40,81,"15px")
				that.box(canvas,data,2000,440,200,80,82,"0.5px")
					that.freeText(canvas,data,2010,460,180,80,83,"15px")			// Cheque Register Maintenance (sent to Bank via courier)
					
					that.box(canvas,data,1690,585,150,20,70,"0.5px")
					that.freeText(canvas,data,1715,600,150,50,71,"15px")
					
					
					that.rect(canvas,data,1600,610,385,90,44)					// Invoice Creation
					that.text(canvas,data,1750,660,300,70,44)
					
					that.rect(canvas,data,1600,710,210,120,45)					// Invoice creation
					that.text(canvas,data,1660,760,200,100,45)
					that.line(canvas,data,1810,770,1830,770)						// output line to "end Status of Invoice created to DCIW (ACK/STATUS REPORT)"
					that.leftArrow(canvas,data,1830,770)
					
					that.rect(canvas,data,1830,710,150,120,46)					// Send Status of Invoice created to DCIW (ACK/STATUS REPORT)
					that.text(canvas,data,1840,750,130,100,46)


//*********************Column6****************************************************//
					that.pentagon(canvas,data,2030,610,2600,2630,655,690,47)			//	ECC
					that.text(canvas,data,2330,650,600,60,47)
					
					that.pentagon(canvas,data,2700,610,3200,3220,655,690,48)			//	PI/UPXI/SWIFT/BBP
					that.text(canvas,data,2900,650,6000,60,48)
					
					that.pentagon(canvas,data,3260,610,3480,3500,655,690,49)			// BANK
					that.text(canvas,data,3360,650,300,60,49)
					
					that.rect(canvas,data,2030,710,1480,70,50)					// Payment (Outbound/Inbound)
					that.text(canvas,data,2720,750,700,50,50)
					
					that.rect(canvas,data,2030,800,200,110,51)					// Payment Run F110 
					that.text(canvas,data,2060,850,180,90,51)
					that.line(canvas,data,2230,855,2260,855)					// output line to "Payment  Batch Generated FBPM1"
					that.leftArrow(canvas,data,2260,855)
					
					that.rect(canvas,data,2030,940,200,110,52)					// Payment Run F111 - Manual 
					that.text(canvas,data,2050,990,180,90,52)
					that.line(canvas,data,2230,995,2260,995)					// output line to "Payment  Generated FBPM1 - Manual"
					that.leftArrow(canvas,data,2260,995)
					
					that.rect(canvas,data,2260,800,390,110,53)					// Payment  Batch Generated FBPM1
					that.text(canvas,data,2340,850,360,90,53)
					that.line(canvas,data,2650,855,2710,855)					// output line "Payment Details sent to regional PI (EU)"
					that.leftArrow(canvas,data,2710,855)
					
					that.rect(canvas,data,2260,940,180,110,54)					// Payment  Generated FBPM1 - Manual
					that.text(canvas,data,2270,980,160,90,54)
					that.line(canvas,data,2440,995,2480,995)					// output line to "Payment Approval BNK_APP - Manual"
					that.leftArrow(canvas,data,2480,995)
					
					that.rect(canvas,data,2480,940,180,110,55)					// Payment Approval BNK_APP - Manual
					that.text(canvas,data,2490,980,160,90,55)
					that.line(canvas,data,2660,960,2710,960)					// output line "Payment Details sent to regional PI (EU)"
					that.leftArrow(canvas,data,2710,960)
					
					that.rotateFreeText(canvas,data,2680,980,200,30,72,270,"17px")
					
					that.rect(canvas,data,2710,800,150,180,56)					// Payment Details sent to regional PI (EU)
					that.text(canvas,data,2720,870,130,160,56)
					that.line(canvas,data,2860,890,2890,890)					// output line to "Payment Details sent to Global B2B hub UPXI"
					that.leftArrow(canvas,data,2890,890)
					
					that.box(canvas,data,2862,790,20,80,73,"0.5px")
					that.rotateFreeText(canvas,data,2875,865,80,20,74,270,"15px")
					
					that.rect(canvas,data,2890,800,150,180,57)					// Payment Details sent to Global B2B hub UPXI
					that.text(canvas,data,2900,870,130,160,57)
					that.line(canvas,data,3040,890,3070,890)					// output line to "Payment Details sent to SWIFT/ BBP"
					that.leftArrow(canvas,data,3070,890)
					
					that.box(canvas,data,3042,790,20,80,75,"0.5px")
					that.rotateFreeText(canvas,data,3058,865,100,20,76,270,"12px")
					
					that.rect(canvas,data,3070,800,150,180,58)					// Payment Details sent to SWIFT/ BBP
					that.text(canvas,data,3080,870,130,160,58)
					that.line(canvas,data,3220,890,3250,890)					// output line to "Payment Details sent to BANK"
					that.leftArrow(canvas,data,3250,890)
					
					that.rect(canvas,data,3250,810,250,150,59)					// Payment Details sent to BANK
					that.text(canvas,data,3280,870,230,130,59)
					
					that.line(canvas,data,3375,1050,2780,1050)
					that.rightArrow(canvas,data,2780,1050)
					that.freeText(canvas,data,2900,1040,1000,40,77,"15px")
//*********************Column7****************************************************//
					that.pentagon(canvas,data,3600,610,4260,4280,655,690,60)			// ECC (Vendor Reconciliation)
					that.text(canvas,data,3870,650,600,40,60)
					
					that.rect(canvas,data,3600,710,660,70,61)					// Reconciliation, Periodic Processing and Reporting
					that.text(canvas,data,3800,750,600,50,61)
					
					that.rect(canvas,data,3600,800,150,180,62)					//Balances/Vendor Line Item/S_ALR
					that.text(canvas,data,3610,870,130,150,62)
					that.line(canvas,data,3750,890,3770,890)					// output line to "GRIR"
					that.leftArrow(canvas,data,3770,890)
					
					that.rect(canvas,data,3770,800,150,180,63)					// GRIR
					that.text(canvas,data,3820,870,130,150,63)
					that.line(canvas,data,3920,890,3940,890)					// output line to "BLOCKED INVOICES"
					that.leftArrow(canvas,data,3940,890)
					
					that.rect(canvas,data,3940,800,150,180,64)					// BLOCKED INVOICES
					that.text(canvas,data,3950,870,130,150,64)
					that.line(canvas,data,4090,890,4110,890)					// output line to "CLEARING/REVERSAL"
					that.leftArrow(canvas,data,4110,890)
					
					that.rect(canvas,data,4110,800,150,180,65)					// CLEARING/REVERSAL
					that.text(canvas,data,4120,870,130,150,65)


	return canvas;
	}  , 1000 );
	
	},
	
	S_Fin_2_AccountsReceivableV2:  function(x){
	    var model = this.uisCodeCheck("S_FIN_2");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="R2R Accounts Receivable V2";
	    setTimeout( function(){
	      x.editPopUp.close();
	      var that=x;
	      var width=8000;
	       var height=3000;
	       var dom;
	       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
	       var canvas = d3.select(ScrollID).append("svg")
	       .attr("width",width)
	       .attr("id","idCanvas")
	       .attr("height",height).append("g")
		//********************* column1 **************************************************//
				that.pentagon(canvas,data,10,10,60,70,30,50,0) 		// x1,y1,x2,x3,y3,y4,index  MP1
				that.text(canvas,data,20,35,50,40,0)
				
				that.pentagon(canvas,data,75,10,125,135,30,50,1)	// PI
				that.text(canvas,data,90,35,50,40,1)
				
				that.pentagon(canvas,data,140,10,190,200,30,50,2) 	// ECC
				that.text(canvas,data,150,35,50,40,2)
				
				that.rect(canvas,data,10,70,190,60,3)			// Customer Master Data Creation
				that.text(canvas,data,40,90,160,40,3)
				
				that.rect(canvas,data,10,150,190,80,4)			//  Customer Master Data creation or modification 
				that.text(canvas,data,40,180,160,40,4)
				that.line(canvas,data,200,190,230,190)
				that.leftArrow(canvas,data,220,190)
				
//********************* column2 *************************************************//
				that.pentagon(canvas,data,220,10,280,290,20,30,5)	// PI
				that.text(canvas,data,240,25,60,30,5)
				
				that.pentagon(canvas,data,220,35,280,290,45,55,6)	// BODS
				that.text(canvas,data,225,40,30,10,6)
				
				that.pentagon(canvas,data,300,5,360,370,20,30,7)	// 3rd Party (CLM)
				that.text(canvas,data,300,15,60,30,7)
				
				that.pentagon(canvas,data,300,35,375,380,45,55,8)	// ARCOLLECT
				that.text(canvas,data,302,40,60,30,8)
				
				that.rect(canvas,data,220,70,150,60,9)			// Interface Customer Master Data to 3RD PARTY
				that.text(canvas,data,230,90,130,40,9)
				
				that.rect(canvas,data,220,150,150,80,10)		// Customer Master Data created or modified sent to 3RD PRTY and ARCOLLECT
				that.text(canvas,data,230,170,130,40,10)

//******************** column3 **************************************************//
				that.pentagon(canvas,data,390,10,980,990,30,50,11)	  // ECC
				that.text(canvas,data,650,30,700,40,11)
				
				that.pentagon(canvas,data,1000,10,1050,1060,30,50,12)	 // PI
				that.text(canvas,data,1020,30,50,30,12)
				
				that.pentagon(canvas,data,1070,10,1150,1160,30,50,13)	 // Compudata
				that.text(canvas,data,1080,20,50,30,13)
				
				that.pentagon(canvas,data,1170,10,1210,1220,30,50,14) 	// PI
				that.text(canvas,data,1190,30,50,30,14)
				
				that.pentagon(canvas,data,1230,10,1300,1310,30,50,15) 	// ECC
				that.text(canvas,data,1245,30,50,30,15)
				
				that.pentagon(canvas,data,1320,10,1370,1380,30,50,16)	 // BODS
				that.text(canvas,data,1330,30,50,30,16)
				
				that.rect(canvas,data,390,70,980,60,17)			// ECC Standard Sales Order Process 
				that.text(canvas,data,750,100,700,40,17)
				
				that.rect(canvas,data,390,150,150,80,18)		// Sales Order Creation VA01 (SO type ZA0)
				that.text(canvas,data,400,180,130,40,18)
				that.line(canvas,data,540,190,560,190)
				that.leftArrow(canvas,data,560,190)
				
				that.rect(canvas,data,390,500,150,80,19)		//Purchase Order Creation ME21N (PO type NB)
				that.text(canvas,data,400,530,130,40,19)
				that.line(canvas,data,540,540,560,540)
				that.leftArrow(canvas,data,560,540)

				that.rect(canvas,data,560,150,150,80,20)		// OutboundDelivery Creation VL02N
				that.text(canvas,data,570,180,130,40,20)
				
				that.line(canvas,data,710,190,810,190)			// output line to " MSO Billing on ......"
				that.leftArrow(canvas,data,810,190)
				
				that.line(canvas,data,710,190,790,320)			   // output line to "Inter Company Invoice (from USCC CC 2611) on...."
				that.line(canvas,data,790,320,810,320)
				that.leftArrow(canvas,data,810,320)
				
				that.rect(canvas,data,560,500,150,80,21)			// Outbound Delivery Creation VL10N
				that.text(canvas,data,570,530,130,40,21)
				that.line(canvas,data,710,540,790,460)				// output line to "Inter Company Invoice (from USCC CC 2611) on......"
				that.line(canvas,data,790,460,810,460)
				that.leftArrow(canvas,data,810,460)

				that.rect(canvas,data,810,150,150,80,22)			// MSO Billing on End Customer Creation(from MSO CC) VF01 (F2)
				that.text(canvas,data,820,180,130,40,22)
				
				that.rect(canvas,data,810,280,150,80,23)			// Inter Company Invoice (from USCC CC 2611) on MSO Payer Creation VF01 (IV)
				that.text(canvas,data,820,310,130,40,23)
				that.pipedArrow(canvas,data,965,320,985,300,995,330,360,340,57) 
				
				that.line(canvas,data,880,280,880,260)				// line to "Customer line items...."
				that.line(canvas,data,880,260,1400,260)
				that.leftArrow(canvas,data,1400,260)
				
				that.rect(canvas,data,810,410,150,100,24)			// Inter Company Invoice (from USCC CC 2611) on MSO Payer Creation VF01 (IV)
				that.text(canvas,data,820,440,130,40,24)
				
				that.line(canvas,data,880,410,880,380)				// line to "Customer line items....."
				that.line(canvas,data,880,380,1400,380)
				that.leftArrow(canvas,data,1400,380)
				
				that.pipedArrow(canvas,data,965,450,985,430,995,460,490,470,58) 
				
				that.rect(canvas,data,1000,270,150,100,25)			// Billing sent to Compudata via IDOC for E-Signature (Trigger by Output type ZRD5) Jobs: J2611-SD-BILL-OUTPUT-EDI-ZRD5-XX
				that.text(canvas,data,1010,285,120,40,25)
				
				that.pipedArrow(canvas,data,1155,320,1175,300,1185,330,360,340,59) 
				
				that.rect(canvas,data,1000,410,150,100,26)			// Billing sent to Compudata  in real-time via IDOC for E-Signature (Trigger by Output type ZRD4 immediately)
				that.text(canvas,data,1010,425,130,40,26)
				
				that.pipedArrow(canvas,data,1155,450,1175,430,1185,460,490,470,60) 
				
				that.rect(canvas,data,1190,275,150,80,27)			// MSO AP Invoice Postings in MSO CC (FI Postings) via IDOC 
				that.text(canvas,data,1200,295,130,40,27)
				
				that.rect(canvas,data,1190,410,150,100,28)			// MSO AP Invoice Postings in MSO CC (LIV Invoice) With ref to the PO via IDOC (Trigger by Output type ZRD4)
				that.text(canvas,data,1200,430,130,40,28)

//******************** column4 **************************************************//
				that.pentagon(canvas,data,1410,10,1560,1570,30,50,29)	// ARCOLLECT
				that.text(canvas,data,1430,20,50,30,29)
				
				that.rect(canvas,data,1410,265,150,110,30)				// Customer line items (RV and RW type) extracted by jobs: J-DSO_CUST_*J0000-FI-IBM-TGTT-* going to ARCollect
				that.text(canvas,data,1420,290,130,40,30)
				
//******************** column5 **************************************************//
				that.pentagon(canvas,data,1680,70,2220,2230,100,130,31)			// ECC
				that.text(canvas,data,1950,100,600,40,31)
				
				that.pentagon(canvas,data,2260,70,2870,2880,100,130,32)			// PI/UPXI/SWIFT/BBP
				that.text(canvas,data,2500,100,600,40,32)
				
				that.pentagon(canvas,data,2890,70,3030,3040,100,130,33)			// BANK
				that.text(canvas,data,2950,100,100,40,33)

				that.rect(canvas,data,1680,150,1360,60,34)				// Payment (Outbound/Inbound)
				that.text(canvas,data,2200,180,1200,40,34)
				
				that.freeText(canvas,data,1610,230,80,40,61,"12px")
				
				that.rect(canvas,data,1680,230,200,80,35)				// Payment Run F110 
				that.text(canvas,data,1720,260,180,40,35)
				that.line(canvas,data,1880,270,1920,270)				// output line to "Payment Batch Generated FBPM1"
				that.leftArrow(canvas,data,1920,270)
				
				that.freeText(canvas,data,1610,330,80,40,62,"12px")
				
				that.rect(canvas,data,1680,330,200,80,36)				// Payment Run F111 - Manual 
				that.text(canvas,data,1700,360,180,40,36)
				that.line(canvas,data,1880,370,1920,370)				// output line to "Payment  Batch Generated FBPM1"
				that.leftArrow(canvas,data,1920,370)
				
				that.rect(canvas,data,1920,230,320,60,37)				// Payment  Batch Generated FBPM1
				that.text(canvas,data,1970,260,250,40,37)
				that.line(canvas,data,2240,260,2280,260)				// output line to "Payment Details sent to...."
				that.leftArrow(canvas,data,2280,260)
				
				that.rotateFreeText(canvas,data,2255,320,100,40,63,270,"15px")
				
				that.rect(canvas,data,1920,310,150,100,38)				// Payment  Generated FBPM1 - Manual
				that.text(canvas,data,1940,340,130,40,38)
				that.line(canvas,data,2070,360,2090,360)				// output line to "Payment Approval BNK_APP - Manual"
				that.leftArrow(canvas,data,2090,360)
				
				
				that.rect(canvas,data,2090,310,150,100,39)				// Payment Approval BNK_APP - Manual
				that.text(canvas,data,2110,340,130,40,39)
				that.line(canvas,data,2240,320,2280,320)				// output line to "Payment Details sent to...."
				that.leftArrow(canvas,data,2280,320)
				
				that.rect(canvas,data,2280,230,150,100,40)				// Payment Details sent to regional PI (EU)
				that.text(canvas,data,2300,260,120,40,40)
				that.line(canvas,data,2430,280,2500,280)				// output line to "Payment Details sent to Global....."
				that.leftArrow(canvas,data,2500,280)
				
				that.freeText(canvas,data,2500,360,1000,40,66,"10px")
				that.line(canvas,data,2290,370,3040,370)
				that.rightArrow(canvas,data,2290,370)
				
				that.freeText(canvas,data,2440,230,100,40,64,"12px")
				
				that.rect(canvas,data,2500,230,150,100,41)				// Payment Details sent to Global B2B hub UPXI
				that.text(canvas,data,2520,260,120,40,41)
				that.line(canvas,data,2650,280,2700,280)				// output line to "Payment Details sent to SWIFT/ BBP"
				that.leftArrow(canvas,data,2700,280)
				
				that.freeText(canvas,data,2652,228,80,40,65,"12px")
				
				that.rect(canvas,data,2700,230,170,100,42)				// Payment Details sent to SWIFT/ BBP
				that.text(canvas,data,2720,260,120,40,42)
				that.line(canvas,data,2870,280,2890,280)				// output line to  "Payment Details sent to BANK"
				that.leftArrow(canvas,data,2890,280)
				
				that.rect(canvas,data,2890,230,150,100,43)				// Payment Details sent to BANK
				that.text(canvas,data,2910,260,120,40,43)

//******************** column6 **************************************************//
				that.pentagon(canvas,data,3070,10,3770,3780,30,50,44)			// ECC
				that.text(canvas,data,3400,30,3000,40,44)
				
				that.rect(canvas,data,3070,60,700,60,45)				// Reconciliation, Periodic Processing and Reporting
				that.text(canvas,data,3320,90,500,40,45)
				
				that.rect(canvas,data,3070,140,120,100,46)				// Create Dunning Run and schedule
				that.text(canvas,data,3080,170,100,40,46)
				that.line(canvas,data,3190,190,3210,190)				// output line to "Dunning Notice sent"
				that.leftArrow(canvas,data,3210,190)	

				that.rect(canvas,data,3210,140,120,100,47)				// Dunning Notice sent
				that.text(canvas,data,3220,170,100,40,47)
				that.line(canvas,data,3330,190,3350,190)				// output line to "Balances/Customer Line Item/S_ALR"
				that.leftArrow(canvas,data,3350,190)

				that.rect(canvas,data,3350,140,120,100,48)				// Balances/Customer Line Item/S_ALR
				that.text(canvas,data,3360,160,100,40,48)
				that.line(canvas,data,3470,190,3490,190)				// output line to "BLOCKED INVOICES"
				that.leftArrow(canvas,data,3490,190)
				
				that.rect(canvas,data,3490,140,120,100,49)				// BLOCKED INVOICES
				that.text(canvas,data,3510,170,100,40,49)
				that.line(canvas,data,3610,190,3630,190)				// output line to "CLEARING/REVERSAL"
				that.leftArrow(canvas,data,3630,190)
				
				that.rect(canvas,data,3630,140,120,100,50)				// CLEARING/REVERSAL
				that.text(canvas,data,3640,170,100,40,50)
				
				
//******************** column7 **************************************************//		
				that.pentagon(canvas,data,3800,10,3950,3960,30,50,51)			// ECC
				that.text(canvas,data,3850,30,100,40,51)
				
				that.rect(canvas,data,3800,70,150,100,52)			      // Trintech AR Subledger Job: J0000-FI-APAR-SUBLEDGER-EXT-XXXX> Scheduled run every 3rd day of the month @2:00CET
				that.text(canvas,data,3810,90,130,40,52)
				
				that.pipedArrow(canvas,data,3960,120,3980,100,3990,130,160,140,0) 
//******************** column8 **************************************************//	
				that.pentagon(canvas,data,4000,10,4140,4150,30,50,53)			// PI
				that.text(canvas,data,4070,30,120,40,53)
				
				that.rect(canvas,data,4000,70,150,100,54)				// Using ABAP proxy,(real time)
				that.text(canvas,data,4010,100,130,40,54)
				
				that.pipedArrow(canvas,data,4160,120,4180,100,4190,130,160,140,0) 
//******************** column9 **************************************************//	
				that.pentagon(canvas,data,4200,10,4340,4350,30,50,55)			// Trintech
				that.text(canvas,data,4240,30,120,40,55)
				
				that.rect(canvas,data,4200,70,150,100,56)				// Trintech flat file will be received to Trintech. Naming Convention: SLBAL_XX_COCO_SID_MM_YYYYMMDDhhmmss.txt.
				that.text(canvas,data,4210,90,130,40,56)

	return canvas;
	}  , 1000 );
	
	},
	
	SR2R12K8K8_BPV_update:  function(x){
	    var model = this.uisCodeCheck("SR2R12K8K8");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="BPV Updated";
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
			// First row
			that.rect(canvas,data,10,10,1560,40,0) // ECC
			that.text(canvas,data,770,35,300,40,0)
			// Second Row First Column
			that.rect(canvas,data,10,70,480,50,1) // Material Costing
			that.text(canvas,data,200,100,300,40,1)
			that.rect(canvas,data,10,150,120,70,2) // Future Price Maintenance (ZG_PTUPDATE) 
			that.text(canvas,data,20,175,130,40,2)
			that.rect(canvas,data,140,150,130,70,3) // Calculation (EXIT_SAPLCK21_002) 
			that.text(canvas,data,160,175,90,40,3)
			that.rect(canvas,data,280,150,100,70,4) // Marking 
			that.text(canvas,data,310,190,140,40,4)
			that.rect(canvas,data,390,150,100,70,5) // Releasing
			that.text(canvas,data,410,190,140,40,5)
			// Second row Second Column
			that.rect(canvas,data,520,70,480,50,6) // Material Management (Purchasing)
			that.text(canvas,data,650,100,300,40,6)
			that.rect(canvas,data,520,150,110,70,7) // Contract / IR Creation
			that.text(canvas,data,540,180,100,40,7)
			that.rect(canvas,data,640,150,110,70,8) // Source List Maintenance 
			that.text(canvas,data,660,180,100,40,8)
			that.rect(canvas,data,760,150,120,70,9) // PO / SA Creation 
			that.text(canvas,data,775,190,100,40,9)
			that.rect(canvas,data,890,150,110,70,10) // Goods Receipt 
			that.text(canvas,data,905,190,100,40,10)
			// Second row Third Column
			that.rect(canvas,data,1030,70,250,50,11) // Accounts Payable
			that.text(canvas,data,1105,100,100,40,11)
			that.rect(canvas,data,1030,150,120,70,12) //  Invoice Receipt
			that.text(canvas,data,1045,190,100,40,12)
			that.rect(canvas,data,1160,150,120,70,13) //  Consignment / Pipeline Settlement
			that.text(canvas,data,1180,175,100,40,13)
			that.rect(canvas,data,1310,70,260,50,14) //  Actual Costing
			that.text(canvas,data,1400,100,100,40,14)
			that.rect(canvas,data,1310,150,130,70,15) //  Additional Cost Allocation
			that.text(canvas,data,1335,180,100,40,15)
			that.rect(canvas,data,1450,150,120,70,16) // BPV Analysis
			that.text(canvas,data,1475,190,100,40,16)
	return canvas;
	}  , 1000 );
	
	},

	S_Fin_3_FinanceClose:  function(x){
	    var model = this.uisCodeCheck("S_FIN_3");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="R2R SIRIUS Finance Close (000001)";
	    setTimeout( function(){
	      x.editPopUp.close();
	      var that=x;
	      var width=16000;
	       var height=40000;
	       var dom;
	       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
	       var canvas = d3.select(ScrollID).append("svg")
	       .attr("width",width)
	       .attr("id","idCanvas")
	       .attr("height",height).append("g")
		// First Row
			that.pentagon(canvas,data,10,30,1395,1435,55,85,0) // ECC
			that.text(canvas,data,690,60,300,40,0)
			that.pentagon(canvas,data,1560,30,3070,3120,55,85,12) // ECC(2nd Part)
			that.text(canvas,data,2330,60,300,40,12)
			that.pentagon(canvas,data,3245,30,4035,4085,55,85,25) // ECC(3rd Part)
			that.text(canvas,data,3660,60,300,40,25)
			that.pentagon(canvas,data,4205,30,4710,4760,55,85,33) // ECC(4th Part)
			that.text(canvas,data,4465,60,300,40,33)
			that.pentagon(canvas,data,4785,30,5425,5475,55,85,39) // ECC(5th Part)
			that.text(canvas,data,5085,60,300,40,39)
			that.pentagon(canvas,data,5600,30,6240,6290,55,85,46) // ECC(6th Part)
			that.text(canvas,data,5925,60,300,40,46)
			that.pentagon(canvas,data,6415,30,6910,6960,55,85,53) // ECC(7th Part)
			that.text(canvas,data,6650,60,300,40,53)
			that.pentagon(canvas,data,6980,30,7090,7110,40,50,64) // PI
			that.text(canvas,data,7033,43,300,40,64)
			that.hexagon(canvas,data,6980,70,6990,60,7100,7110,80,65) // DIRECT RFC 
			that.text(canvas,data,7010,73,300,40,65)
			that.pentagon(canvas,data,7130,30,7635,7685,55,85,66) // TRINTECH
			that.text(canvas,data,7370,60,300,40,66)
			that.pentagon(canvas,data,7810,30,8035,8085,55,85,67) // ECC(8th Part)
			that.text(canvas,data,7920,60,300,40,67)
			that.pentagon(canvas,data,8095,45,8195,8210,55,65,74) // PI (2nd)
			that.text(canvas,data,8145,60,300,40,74)
			that.pentagon(canvas,data,8225,30,8455,8505,55,85,75) // TRINTECH(2nd)
			that.text(canvas,data,8325,60,300,40,75)
			that.pentagon(canvas,data,8625,30,9415,9465,55,85,76) // ECC(9th Part)
			that.text(canvas,data,9030,60,300,40,76)
			that.pentagon(canvas,data,9585,30,10520,10570,55,85,84) // ECC(10th Part)
			that.text(canvas,data,10085,60,300,40,84)
			// Second Row
			that.rect(canvas,data,10,105,1425,60,1) // Month End Close  for Accounts Payable
			that.text(canvas,data,600,140,300,40,1)
			that.rect(canvas,data,1560,105,1565,60,13) // Month End Close  for  Accounts Receivable
			that.text(canvas,data,2250,140,300,40,13)
			that.rect(canvas,data,3245,105,840,60,26) // Month End Close  for  Asset Accounting
			that.text(canvas,data,3580,140,300,40,26)
			that.rect(canvas,data,4205,105,550,60,34) // Intrastat Reporting
			that.text(canvas,data,4430,140,300,40,34)
			that.rect(canvas,data,4785,105,695,60,40) // VAT Reporting
			that.text(canvas,data,5065,140,300,40,40)
			that.rect(canvas,data,5600,105,695,60,47) // Foreign Currency Payment
			that.text(canvas,data,5870,140,300,40,47)
			that.rect(canvas,data,6415,105,1275,60,54) // General Ledger Journal Entries 
			that.text(canvas,data,7000,140,300,40,54)
			that.rect(canvas,data,7810,105,695,60,68) // Data Extract to Trintech 
			that.text(canvas,data,8110,140,300,40,68)
			that.rect(canvas,data,8625,105,845,60,77) // Close General Ledger Accounting
			that.text(canvas,data,8950,140,300,40,77)
			that.rect(canvas,data,9585,105,985,60,85) // Year End Close
			that.text(canvas,data,10035,140,300,40,85)
			//-----------------------------------First Column-------------------------//
			//Third Row
			that.rect(canvas,data,10,210,115,90,2) // Calculate Interest on Account Balances
			that.text(canvas,data,23,245,100,40,2)
			
			that.rect(canvas,data,155,210,115,90,3) // Post Interest
			that.text(canvas,data,180,260,100,40,3)
			
			that.rect(canvas,data,300,210,115,90,4) // Clear Down Payments
			that.text(canvas,data,325,250,100,40,4)
			
			that.rect(canvas,data,445,210,115,90,5) // Foreign Currency Revaluation for AP line items
			that.text(canvas,data,455,245,100,40,5)
			
			that.rect(canvas,data,590,210,115,90,6) // Agree Balances with Vendors
			that.text(canvas,data,605,250,100,40,6)
			
			that.rect(canvas,data,735,210,115,90,7) // Agree Balance with Other Unilever Companies
			that.text(canvas,data,750,240,100,40,7)
			
			that.rect(canvas,data,880,210,115,90,8) // Open & Close Posting Period for AP Subledger
			that.text(canvas,data,890,245,100,40,8)
			
			that.rect(canvas,data,1025,210,115,90,9) // Reconcile AP & General Ledger
			that.text(canvas,data,1035,250,100,40,9)
			
			that.rect(canvas,data,1170,210,115,90,10) // Open & Close Posting Period for MM
			that.text(canvas,data,1180,245,100,40,10)
			
			that.rect(canvas,data,1315,210,115,90,11) // Allow Posting to Previous Period (MM)
			that.text(canvas,data,1330,245,100,40,11)
			
			//------------------------------------Second Column------------------------------//
			
			that.rect(canvas,data,1560,210,115,90,14) // Calculate Interest on Account Balances
			that.text(canvas,data,1575,245,100,40,14)
			
			that.rect(canvas,data,1705,210,115,90,15) // Post Interest
			that.text(canvas,data,1725,255,100,40,15)
			
			that.rect(canvas,data,1850,210,115,90,16) // Clear Down Payments
			that.text(canvas,data,1875,255,100,40,16)
			
			that.rect(canvas,data,1995,210,115,90,17) // Print Customer Statement
			that.text(canvas,data,2010,255,100,40,17)
			
			that.rect(canvas,data,2140,210,115,90,18) // Agree Balances with Other Unilever Companies
			that.text(canvas,data,2155,235,100,40,18)
			
			that.rect(canvas,data,2285,210,115,90,19) // Foreign Currency Revaluation for AR line items
			that.text(canvas,data,2300,235,90,40,19)
			
			that.rect(canvas,data,2430,210,115,90,20) // Book Provision for Bad Debts
			that.text(canvas,data,2445,250,90,40,20)
			
			that.rect(canvas,data,2575,210,115,90,21) // Book Provisions for Disputed Items
			that.text(canvas,data,2590,245,90,40,21)
			
			that.rect(canvas,data,2720,210,115,90,22) // Book General Provisions against Debtors
			that.text(canvas,data,2735,245,90,40,22)

			that.rect(canvas,data,2865,210,115,90,23) // Open & Close Posting Period for AR Subledger
			that.text(canvas,data,2880,235,90,40,23)
			
			that.rect(canvas,data,3010,210,115,90,24) // Reconcile AR & General Ledger
			that.text(canvas,data,3025,250,90,40,24)

			//-----------------------------------Third Column----------------------------//
			
			that.rect(canvas,data,3245,210,115,90,27) // Check Incomplete Assets
			that.text(canvas,data,3260,250,100,40,27)
			
			that.rect(canvas,data,3390,210,115,90,28) // Run Periodic Postings
			that.text(canvas,data,3410,250,100,40,28)
			
			that.rect(canvas,data,3535,210,115,90,29) // Offset Unilever Valuation
			that.text(canvas,data,3550,250,100,40,29)
			
			that.rect(canvas,data,3680,210,115,90,30) // Book Provisions againts Assets
			that.text(canvas,data,3695,250,100,40,30)
			
			that.rect(canvas,data,3825,210,115,90,31) // Open & Close Posting Period for AA Subledger
			that.text(canvas,data,3840,245,100,40,31)
			
			that.rect(canvas,data,3970,210,115,90,32) // Reconcile AA & General Ledger
			that.text(canvas,data,3985,250,100,40,32)
			
			//--------------------------------------------Fourth Column------------//
			
			that.rect(canvas,data,4205,210,115,90,35) // Capture Statistical Values
			that.text(canvas,data,4215,250,100,40,35)
			
			that.rect(canvas,data,4350,210,115,90,36) // Run Intrastat Declaration
			that.text(canvas,data,4360,250,100,40,36)
			
			that.rect(canvas,data,4495,210,115,90,37) // Review and Update as Necessary
			that.text(canvas,data,4505,250,100,40,37)
			
			that.rect(canvas,data,4640,210,115,90,38) // Generate Intrastat Report
			that.text(canvas,data,4650,250,100,40,38)
			
			//------------------------------Fifth Column--------------------------//
			
			that.rect(canvas,data,4785,210,115,90,41) // Extract VAT Amount
			that.text(canvas,data,4810,250,100,40,41)
			
			that.rect(canvas,data,4930,210,115,90,42) // Post Tax Payable/Reclaimable
			that.text(canvas,data,4935,250,100,40,42)
			
			that.rect(canvas,data,5075,210,115,90,43) //Post Outgoing/Incoming VAT Payment
			that.text(canvas,data,5085,250,100,40,43)
			
			that.rect(canvas,data,5220,210,115,90,44) // Reconcile VAT and Intrastat
			that.text(canvas,data,5230,250,100,40,44)
			
			that.rect(canvas,data,5365,210,115,90,45) // Reconcile VAT Report and GL
			that.text(canvas,data,5375,250,100,40,45)
			
			//--------------------------------------------- Sixth Column---------------------//
			
			that.rect(canvas,data,5600,210,115,90,48) // Vendor/Customer Documents with Foreign Currency
			that.text(canvas,data,5610,245,100,40,48)
			
			that.rect(canvas,data,5745,210,115,90,49) // Automatic Payment in Foreign Currency
			that.text(canvas,data,5760,245,100,40,49)
			
			that.rect(canvas,data,5890,210,115,90,50) // Clear Documents in Foreign Currency
			that.text(canvas,data,5905,245,100,40,50)
			
			that.rect(canvas,data,6035,210,115,90,51) // Valuate Open Items in Foreign Currency
			that.text(canvas,data,6050,245,100,40,51)
			
			that.rect(canvas,data,6180,210,115,90,52) // Post Foreign Currency Valuation
			that.text(canvas,data,6195,245,100,40,52)
			
			//--------------------------------------------------Seventh Column----------------//
			
			that.rect(canvas,data,6415,210,115,90,55) // Manual Entries (Direct Posting)
			that.text(canvas,data,6430,245,100,40,55)
			
			that.rect(canvas,data,6560,210,115,90,56) // Approve & Release Parked Documents
			that.text(canvas,data,6570,245,100,40,56)
			
			that.rect(canvas,data,6705,210,115,90,57) // Post Recurring Entries
			that.text(canvas,data,6710,250,100,40,57)
			
			that.rect(canvas,data,6850,210,115,90,58) // Reverse Accruals & Provisions from the Previous Period
			that.text(canvas,data,6860,240,100,40,58)
			
			that.rect(canvas,data,6995,210,115,90,59) // Prepare & Submit Request for Accruals/Provision
			that.text(canvas,data,7005,245,100,40,59)
			
			that.rect(canvas,data,7140,210,115,90,60) // Validate & Approve  Accruals/Provisions
			that.text(canvas,data,7150,245,100,40,60)
			
			that.rect(canvas,data,7285,210,115,90,61) // Post Provision Journals
			that.text(canvas,data,7300,250,100,40,61)
			
			that.rect(canvas,data,7430,210,115,90,62) // Posting of Accrual Journals
			that.text(canvas,data,7440,250,100,40,62)
			
			that.rect(canvas,data,7575,210,115,90,63) // Post Incoming/Outgoing Payments via GL Module
			that.text(canvas,data,7585,240,100,40,63)
			
			//----------------------------------------------Eighth Column-----------------//
			
			that.rect(canvas,data,7810,210,115,90,69) // Extract Balances from Balance Sheet Accounts
			that.text(canvas,data,7820,245,100,40,69)
			
			that.rect(canvas,data,7955,210,115,90,70) // Extract Sub Ledger Balances
			that.text(canvas,data,7970,250,100,40,70)
			
			that.rect(canvas,data,8100,210,115,90,71) // Extract Open Items
			that.text(canvas,data,8115,250,100,40,71)
			
			that.rect(canvas,data,8245,210,115,90,72) // Exctract Foreign Exchange Rates
			that.text(canvas,data,8260,250,100,40,72)
			
			that.rect(canvas,data,8390,210,115,90,73) // Open  & Close Accounting Period in Trintech
			that.text(canvas,data,8400,245,100,40,73)
			
			//--------------------------------------Ninth Column----------------///
			
			that.rect(canvas,data,8625,210,115,90,78) // Manual Automatic Clearing of Open Items
			that.text(canvas,data,8635,245,100,40,78)
			
			that.rect(canvas,data,8770,210,115,90,79) // Run Foreign Currency Revaluation
			that.text(canvas,data,8780,245,100,40,79)
			
			that.rect(canvas,data,8915,210,115,90,80) // Reconcile Sub Ledgers to GL
			that.text(canvas,data,8925,245,100,40,80)
			
			that.rect(canvas,data,9060,210,115,90,81) // Reconcile Account - Open Items Managed
			that.text(canvas,data,9070,245,100,40,81)
			
			that.rect(canvas,data,9205,210,115,90,82) // Reconcile Account - Balance Managed
			that.text(canvas,data,9215,245,100,40,82)
			
			that.rect(canvas,data,9350,210,115,90,83) // Open & Close Accounting Period for GL Accounting
			that.text(canvas,data,9360,245,100,40,83)
			
			//------------------------------------------Tenth Column------////
			
			that.rect(canvas,data,9585,210,115,90,86) // Maintain Fiscal Year Variant
			that.text(canvas,data,9595,245,100,40,86)
			
			that.rect(canvas,data,9730,210,115,90,87) // Maintain Number Range for Accounting Documents
			that.text(canvas,data,9740,245,100,40,87)
			
			that.rect(canvas,data,9875,210,115,90,88) // Maintain Number Range for SD Documents
			that.text(canvas,data,9885,245,100,40,88)
			
			that.rect(canvas,data,10020,210,115,90,89) // Maintain Cheque Number Range
			that.text(canvas,data,10030,245,100,40,89)
			
			that.rect(canvas,data,10165,210,115,90,90) // Carry Forward Balances
			that.text(canvas,data,10175,245,100,40,90)
			
			that.rect(canvas,data,10310,210,115,90,91) // Run Asset Fiscal Year Change
			that.text(canvas,data,10320,245,100,40,91)
			
			that.rect(canvas,data,10455,210,115,90,92) // Run Year-end Closing of Asset Accounting
			that.text(canvas,data,10465,245,100,40,92) //10565
			
			
			// Lines and Arrows
			that.line(canvas,data,125,255,155,255) // Line Connecting index - 3 & index - 4
			that.leftArrow(canvas,data,155,255)
			
			that.line(canvas,data,270,255,300,255) // Line Connecting inde - 4 & index - 5
			that.leftArrow(canvas,data,300, 255)
			
			that.line(canvas,data,415,255,445,255) // Line Connecting inde - 5 & index - 6
			that.leftArrow(canvas,data,445,255)
			
			that.line(canvas,data,560,255,590,255) // Line Connecting inde - 6 & index - 7
			that.leftArrow(canvas,data,590, 255)
			
			that.line(canvas,data,705,255,735,255) // Line Connecting inde - 7 & index - 8
			that.leftArrow(canvas,data,735, 255)
			
			that.line(canvas,data,850,255,880,255) // Line Connecting inde - 8 & index - 9
			that.leftArrow(canvas,data,880, 255)
			
			that.line(canvas,data,995,255,1025,255) // Line Connecting inde - 9 & index - 10
			that.leftArrow(canvas,data,1025, 255)
			
			that.line(canvas,data,1140,255,1155,255)
			that.line(canvas,data,1155,255,1155,190)
			that.line(canvas,data,1155,190,1500,190)
			that.leftArrow(canvas,data,1500, 190)
			
			that.line(canvas,data,1285,255,1315,255)// Line Connecting inde - 11 & index - 12
			that.leftArrow(canvas,data,1315, 255)
			
			that.line(canvas,data,1500,485,1500,5)
//			that.upArrow(canvas,data,1500, 5)
			
			that.line(canvas,data,1500,5,8565,5)
			
			//----------------------------------------For Second Column---------------------//
			
			that.line(canvas,data,1675,255,1705,255) // Line connecting index - 15  & index - 16
			that.leftArrow(canvas,data,1705, 255)
			
			that.line(canvas,data,1820,255,1850,255) // Line connecting index - 16  & index - 17
			that.leftArrow(canvas,data,1850, 255)
			
			that.line(canvas,data,1965,255,1995,255) // Line connecting index - 17  & index - 18
			that.leftArrow(canvas,data,1995, 255)
			
			that.line(canvas,data,2110,255,2140,255) // Line connecting index - 18  & index - 19
			that.leftArrow(canvas,data,2140, 255)
			
			that.line(canvas,data,2255,255,2285,255) // Line connecting index - 19  & index - 20
			that.leftArrow(canvas,data,2285, 255)
			
			that.line(canvas,data,2400,255,2430,255) // Line connecting index - 20  & index - 21
			that.leftArrow(canvas,data,2430, 255)
			
			that.line(canvas,data,2545,255,2575,255) // Line connecting index - 21  & index - 22
			that.leftArrow(canvas,data,2575, 255)
			
			that.line(canvas,data,2690,255,2720,255) // Line connecting index - 22  & index - 23
			that.leftArrow(canvas,data,2720, 255)
			
			that.line(canvas,data,2835,255,2865,255) // Line connecting index - 23  & index - 24
			that.leftArrow(canvas,data,2865, 255)
			
			that.line(canvas,data,2980,255,3010,255) // Line connecting index - 24  & index - 25
			that.leftArrow(canvas,data,3010, 255)
			
			that.line(canvas,data,3125,255,3185,255) // Line connecting up Arrow
			that.leftArrow(canvas,data,3185, 255)
			
			that.line(canvas,data,3185,485,3185,5)
			that.upArrow(canvas,data,3185, 5)
			
			//----------------------------------------- For Third Column--------------//
			
			that.line(canvas,data,3360,255,3390,255) // Line connecting index - 28  & index - 29
			that.leftArrow(canvas,data,3390, 255)
			
			that.line(canvas,data,3505,255,3535,255) // Line connecting index - 29  & index - 30
			that.leftArrow(canvas,data,3535, 255)
			
			that.line(canvas,data,3650,255,3680,255) // Line connecting index - 30  & index - 31
			that.leftArrow(canvas,data,3680, 255)
			
			that.line(canvas,data,3795,255,3825,255) // Line connecting index - 31  & index - 32
			that.leftArrow(canvas,data,3825, 255)
			
			that.line(canvas,data,3940,255,3970,255) // Line connecting index - 32  & index - 33
			that.leftArrow(canvas,data,3970, 255)
			
			that.line(canvas,data,4085,255,4145,255) // 
			that.leftArrow(canvas,data,4145, 255)
			
			that.line(canvas,data,4145,485,4145,5)
			that.upArrow(canvas,data,4145, 5)
			
			//------------------------------------------------ For Fourth Column-------//
			
			that.line(canvas,data,4320,255,4350,255) // Line connecting index - 36  & index - 37
			that.leftArrow(canvas,data,4350, 255)
			
			that.line(canvas,data,4465,255,4495,255) // Line connecting index - 37  & index - 38
			that.leftArrow(canvas,data,4495, 255)
			
			that.line(canvas,data,4610,255,4640,255) // Line connecting index - 38  & index - 39
			that.leftArrow(canvas,data,4640, 255)
			
			that.line(canvas,data,4755,255,4785,255) // 
			that.leftArrow(canvas,data,4785, 255)
			
			//--------------------------------------------For Fifth Column---------------//
			
			that.line(canvas,data,4900,255,4930,255) // Line connecting index - 42  & index - 43
			that.leftArrow(canvas,data,4930, 255)
			
			that.line(canvas,data,5045,255,5075,255) // Line connecting index - 43  & index - 44
			that.leftArrow(canvas,data,5075, 255)
			
			that.line(canvas,data,5190,255,5220,255) // Line connecting index - 44  & index - 45
			that.leftArrow(canvas,data,5220, 255)
			
			that.line(canvas,data,5335,255,5365,255) // Line connecting index - 45  & index - 46
			that.leftArrow(canvas,data,5365, 255)
			
			that.line(canvas,data,5480,255,5540,255)
			that.leftArrow(canvas,data,5540, 255)
			
			that.line(canvas,data,5540,485,5540,5) // 
			that.upArrow(canvas,data,5540, 5)
			
			//-----------------------------------------------------For Sixth Column-------//
			
			that.line(canvas,data,5715,255,5745,255) // Line connecting index - 49  & index - 50
			that.leftArrow(canvas,data,5745, 255)
			
			that.line(canvas,data,5860,255,5890,255) // Line connecting index - 50  & index - 51
			that.leftArrow(canvas,data,5890, 255)
			
			that.line(canvas,data,6005,255,6035,255) // Line connecting index - 51  & index - 52
			that.leftArrow(canvas,data,6035, 255)
			
			that.line(canvas,data,6150,255,6180,255) // Line connecting index - 52  & index - 53
			that.leftArrow(canvas,data,6180, 255)
			
			that.line(canvas,data,6295,255,6355,255) 
			that.leftArrow(canvas,data,6355, 255)
			
			that.line(canvas,data,6355,485,6355,5) // 
			that.upArrow(canvas,data,6355, 5)
			
			//-------------------------------------------------For Seventh Column----//
			
			that.line(canvas,data,6530,255,6560,255) // Line connecting index - 56  & index - 57
			that.leftArrow(canvas,data,6560, 255)
			
			that.line(canvas,data,6675,255,6705,255) // Line connecting index - 56  & index - 57
			that.leftArrow(canvas,data,6705, 255)
			
			that.line(canvas,data,6820,255,6850,255) // Line connecting index - 56  & index - 57
			that.leftArrow(canvas,data,6850, 255)
			
			that.line(canvas,data,6965,255,6995,255) // Line connecting index - 56  & index - 57
			that.leftArrow(canvas,data,6995, 255)
			
			that.line(canvas,data,7110,255,7140,255) // Line connecting index - 56  & index - 57
			that.leftArrow(canvas,data,7140, 255)
			
			that.line(canvas,data,7255,255,7285,255) // Line connecting index - 56  & index - 57
			that.leftArrow(canvas,data,7285, 255)
			
			that.line(canvas,data,7400,255,7430,255) // Line connecting index - 56  & index - 57
			that.leftArrow(canvas,data,7430, 255)
			
			that.line(canvas,data,7545,255,7575,255) // Line connecting index - 56  & index - 57
			that.leftArrow(canvas,data,7575, 255)
			
			that.line(canvas,data,7690,255,7750,255) 
			that.leftArrow(canvas,data,7750, 255)
			
			that.line(canvas,data,7750,485,7750,5) // 
			that.upArrow(canvas,data,7750, 5)
			
			//------------------------------------- For Eighth Column---------//
			
			that.line(canvas,data,7925,255,7955,255) // Line connecting index - 70  & index - 71
			that.leftArrow(canvas,data,7955, 255)
			
			that.line(canvas,data,8070,255,8100,255) // Line connecting index - 71  & index - 72
			that.leftArrow(canvas,data,8100, 255)
			
			that.line(canvas,data,8215,255,8245,255) // Line connecting index - 72  & index - 73
			that.leftArrow(canvas,data,8245, 255)
			
			that.line(canvas,data,8360,255,8390,255) // Line connecting index - 73  & index - 74
			that.leftArrow(canvas,data,8390, 255)
			
			that.line(canvas,data,8505,255,8565,255) 
			that.leftArrow(canvas,data,8565, 255)
			
			that.line(canvas,data,8565,255,8565,5) // 
			that.line(canvas,data,8565,255,8625,255)
			that.leftArrow(canvas,data,8625,255)
			
			//---------------------------------------For Ninth Column-------///
			
			that.line(canvas,data,8740,255,8770,255) // Line connecting index - 79  & index - 80
			that.leftArrow(canvas,data,8770, 255)
			
			that.line(canvas,data,8885,255,8915,255) // Line connecting index - 80  & index - 81
			that.leftArrow(canvas,data,8915, 255)
			
			that.line(canvas,data,9030,255,9060,255) // Line connecting index - 81  & index - 82
			that.leftArrow(canvas,data,9060, 255)
			
			that.line(canvas,data,9175,255,9205,255) // Line connecting index - 82  & index - 83
			that.leftArrow(canvas,data,9205, 255)
			
			that.line(canvas,data,9320,255,9350,255) // Line connecting index - 83  & index - 84
			that.leftArrow(canvas,data,9350, 255)
			
			that.line(canvas,data,9465,255,9525,255) 
			that.leftArrow(canvas,data,9525, 255)
			
			that.line(canvas,data,9525,485,9525,30) //
			that.line(canvas,data,9525,30,9585,30)
			that.leftArrow(canvas,data,9585,30)
			
			//-----------------------------------For Tenth Column---///
			that.line(canvas,data,10425,255,10455,255)// Line connecting index - 92  & index - 93
			that.leftArrow(canvas,data,10455, 255)
				
	return canvas;
	}  , 1000 );
	
	},
	S_Fin_4_FMDExchangeRates:  function(x){
	    var model = this.uisCodeCheck("S_FIN_4");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="RTR Sirius Financial Master Data - Exchange Rates";
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
that.rect(canvas,data,10,10,570,30,0)//ECC-1
that.text(canvas,data,280,30,130,30,0)
that.rect(canvas,data,610,10,270,30,6)//ECC-2
that.text(canvas,data,760,30,130,30,6)
//second line
 
that.rect(canvas,data,10,50,570,40,1) //Exchange Rates
  that.text(canvas,data,250,70,200,30,1)
 
  that.rect(canvas,data,610,50,270,40,7) //Exchange Rate Transactions
  that.text(canvas,data,700,70,200,30,7)
 
  
//tasks
 
    that.rect(canvas,data,10,110,120,100,2)//Define Translation Ratios for Currency Translation (OBBS)
that.text(canvas,data,20,130,100,80,2)
that.line(canvas,data,130,150,160,150)
that.leftArrow(canvas,data,160,150)
 
that.rect(canvas,data,160,110,120,100,3)//Create Exchange Rates Worklist (update table TCURWKRTS)
that.text(canvas,data,170,130,100,80,3)
that.line(canvas,data,280,150,310,150)
that.leftArrow(canvas,data,310,150)
that.rect(canvas,data,310,110,120,100,4)//Enter Exchange Rates (OB45)
that.text(canvas,data,320,130,100,80,4)
that.line(canvas,data,430,150,460,150)
that.leftArrow(canvas,data,460,150)
that.rect(canvas,data,460,110,120,100,5)//Update Exchange Rates (OB08)
that.text(canvas,data,470,130,100,80,5)
that.rect(canvas,data,610,110,120,100,8)//Sales Order Process
that.text(canvas,data,620,130,100,80,8)
that.rect(canvas,data,760,110,120,100,9)//Purchas Order Process
that.text(canvas,data,770,130,100,80,9)
	 	
	return canvas;
	}  , 1000 );
	
	},

	SR2R10H8_CostControlCube:  function(x){
	    var model = this.uisCodeCheck("SR2R10H8");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="Controlling CCC (Cost Control)";
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
			that.rect(canvas,data,10,10,230,30,0)//GMRDR
			that.text(canvas,data,110,30,130,30,0)
			
			that.rect(canvas,data,270,10,100,30,13)//BODS-1
	 		 that.text(canvas,data,300,30,80,30,13)
	 		 that.rect(canvas,data,400,10,230,30,16)//ECC-1
	 		 that.text(canvas,data,500,30,80,30,16)
	 		 that.rect(canvas,data,970,10,230,30,29)//ECC-2
			that.text(canvas,data,1080,30,130,30,29)
			 that.rect(canvas,data,1230,10,50,30,33)//BODS-2
	 		 that.text(canvas,data,1240,30,40,30,33)
	 		  that.rect(canvas,data,1290,10,80,30,34)//TERADATA
	 		 that.text(canvas,data,1300,17,40,30,34)
			//second line
			 that.rect(canvas,data,10,50,230,40,1) //Central data created in GMRDR
		   	that.text(canvas,data,20,70,200,30,1)
		   	 that.rect(canvas,data,270,50,100,40,14) //Transfer data to ECC
		   	that.text(canvas,data,280,70,80,30,14)
		   	 that.rect(canvas,data,400,50,230,40,17) //CO object creation
		   	that.text(canvas,data,470,70,150,30,17)
		   	 that.rect(canvas,data,970,50,100,40,30) //CO posting validation
		   	that.text(canvas,data,980,70,80,30,30)
		   	 that.rect(canvas,data,1230,50,140,40,35) //CCC data extraction
		   	that.text(canvas,data,1240,70,120,30,35)
			//tasks
		     that.rect(canvas,data,10,180,100,50,2)//Busness Unit (BU)
	 		 that.text(canvas,data,20,200,80,40,2)
	 		 that.line(canvas,data,110,200,400,200)
	 		 that.leftArrow(canvas,data,400,200)
	 		 
            that.line(canvas,data,5,250,245,250)
            that.line(canvas,data,5,250,5,460)
	that.line(canvas,data,245,250,245,460)
that.line(canvas,data,245,460,5,460)

	 		  that.rect(canvas,data,10,260,100,50,3)//Channel Dimension
	 		 that.text(canvas,data,20,280,80,40,3)
	 		 that.line(canvas,data,245,380,400,380)
	 		 that.leftArrow(canvas,data,400,380)
	 		  that.line(canvas,data,245,530,400,530)
	 		 that.leftArrow(canvas,data,400,530)
	 		  that.rect(canvas,data,10,330,100,50,4)//Acquisition / Disposal
	 		 that.text(canvas,data,20,350,80,40,4)
	 		  that.rect(canvas,data,10,400,100,50,5)//Function ID
	 		 that.text(canvas,data,20,420,80,40,5)
	 		 
	 		 that.line(canvas,data,5,470,245,470)
	 		 that.line(canvas,data,5,470,5,610)
	 		 that.line(canvas,data,5,610,245,610)
	 		 that.line(canvas,data,245,470,245,610)
	 		that.rect(canvas,data,10,480,100,50,6)//Project subtype
	 		 that.text(canvas,data,20,500,80,40,6)
	 		that.rect(canvas,data,10,550,100,50,7)//External Proj. ID
	 		 that.text(canvas,data,20,570,80,40,7)
	 		 
	 		 that.rect(canvas,data,140,110,100,50,8)//BU / LE / Company code
	 		 that.text(canvas,data,150,130,80,40,8)
	 		 that.line(canvas,data,240,120,550,120)
	 		 that.line(canvas,data,550,120,550,140)
	 		 that.downArrow(canvas,data,550,140)
	 		  that.rect(canvas,data,140,260,100,50,9)//Product Dimension
	 		 that.text(canvas,data,150,280,80,40,9)
	 		   that.rect(canvas,data,140,330,100,50,10)//ICC ID
	 		 that.text(canvas,data,150,350,80,40,10)
	 		 that.rect(canvas,data,140,400,100,50,11)//Customer dimmension
	 		 that.text(canvas,data,150,420,80,40,11)
	 		 that.rect(canvas,data,140,480,100,50,12)//Proj. Executive Board
	 		 that.text(canvas,data,150,500,80,40,12)
	 		 
	 		 that.rect(canvas,data,270,110,100,490,15) //Transfer data to ECC
			   	that.text(canvas,data,280,340,80,300,15)
			   	
			   	 that.rect(canvas,data,400,140,100,140,18)//COPA characteristic table (T2598)
	 		 that.text(canvas,data,410,160,80,130,18)
	 		 
	 		 that.rect(canvas,data,400,300,100,140,19)//Custom tables (ZICC) for CO objects additional attributes
	 		 that.text(canvas,data,410,320,80,130,19)
	 		 that.line(canvas,data,500,370,530,370)
	 		 that.leftArrow(canvas,data,530,370)
	 		 
	 		 that.rect(canvas,data,400,460,100,140,20)//Custom tables (ZS2FIPROJ , ZS2FIPROJSUB, ZS2FIEXBoard  and ZS2FICAPEX) for Project IO additional attributes
	 		 that.text(canvas,data,410,480,80,130,20)
				that.line(canvas,data,500,530,530,530)
	 		 that.leftArrow(canvas,data,530,530)
	 		 
	 		  that.rect(canvas,data,530,140,100,140,21)//Custom table (ZS2FIBUSLE) for CO objects data validation BU/LE/CC CRG/Function
	 		 that.text(canvas,data,540,160,80,130,21)
	 		 that.line(canvas,data,580,280,580,300)
	 		 that.downArrow(canvas,data,580,300)
	 		 
	 		 that.rect(canvas,data,530,300,100,140,22)//Cost center / Internal Order Creation (ZB01/ZB02)
	 		 that.text(canvas,data,540,320,80,130,22)
	 		 that.line(canvas,data,630,430,660,430)
	 		 that.leftArrow(canvas,data,660,430)
	 		 
	 		 that.rect(canvas,data,530,460,100,140,23)//Project IO Master Data creation ZA21-ZA26
	 		 that.text(canvas,data,540,480,80,130,23)
	 		 that.line(canvas,data,630,470,660,470)
	 		 that.leftArrow(canvas,data,660,470)
	 		 that.line(canvas,data,650,290,950,290)
	 		 that.line(canvas,data,650,290,650,610)
	 		 that.line(canvas,data,650,610,950,610)
	 		 that.line(canvas,data,950,610,950,290)
	 		that.pentagon(canvas,data,660,300,710,740,350,400,24)
	 		that.text(canvas,data,670,350,70,80,24)//GMRDR
	 	   
	 		that.pentagon(canvas,data,760,300,810,840,350,400,25)
	 		that.text(canvas,data,770,350,70,80,25)//BODS
	 		that.pentagon(canvas,data,860,300,910,940,350,400,26)
	 		that.text(canvas,data,865,350,70,80,26)//TERADATA
	 		
	 		that.rect(canvas,data,660,420,130,80,27)//CO objects master data interface to GMRDR
	 		 that.text(canvas,data,670,440,100,70,27)
	 		 that.line(canvas,data,790,460,810,460)
	 		 that.line(canvas,data,810,460,810,520)
	 		 that.downArrow(canvas,data,810,520)
	 		that.rect(canvas,data,790,520,130,80,28)//CO objects master data interface to TERADATA
	 		 that.text(canvas,data,800,540,100,70,28)
	 		  that.rect(canvas,data,970,110,100,80,31) //Custom tables for CO posting validation (CRG/CbT)
		   	that.text(canvas,data,980,130,80,70,31)
	 		 that.line(canvas,data,1070,150,1100,150)
	 		 that.leftArrow(canvas,data,1100,150)
		    that.rect(canvas,data,1100,110,100,80,32) //CO posting
		   	that.text(canvas,data,1110,130,80,70,32)
		   		 that.rect(canvas,data,1230,110,140,80,36) //CO line items extracted and sent to TERADATA
		   	that.text(canvas,data,1240,130,120,70,36)
	 	
	
	return canvas;
	}  , 1000 );
	
	},

	SR2R14F3_COPAMasterData:  function(x){
	    var model = this.uisCodeCheck("SR2R14F3");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="COPA Derivation and Master data controller";
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
			that.rect(canvas,data,10,10,90,40,0)//Vanguard
			that.text(canvas,data,25,35,90,40,0)//Vanguard
			that.rect(canvas,data,110,10,90,40,1)//GMRDR
			that.text(canvas,data,130,35,90,40,1)//GMRDR
			that.rect(canvas,data,210,10,1550,40,16)//ECC
			that.text(canvas,data,950,35,1550,40,16)//ECC
			//second line
			that.rect(canvas,data,10,70,340,40,2)//Product HIerarchy definition
			that.text(canvas,data,100,90,340,40,2)//Product HIerarchy definition
			that.rect(canvas,data,370,70,340,40,7)//COPA characteristic values update 
			that.text(canvas,data,445,90,340,40,7)//COPA characteristic values update  
			that.rect(canvas,data,730,70,150,40,13)//COPA characteristic derivation tables update
			that.text(canvas,data,740,85,150,40,13)//COPA characteristic derivation tables update 
			that.rect(canvas,data,900,70,860,40,17)//COPA Derivation
			that.text(canvas,data,1280,90,860,40,17)//COPA Derivation
			//tasks
			that.rect(canvas,data,130,130,100,80,3)//BU definition
			that.text(canvas,data,135,145,90,80,3)//BU definition
			that.line(canvas,data,230,170,370,170)//from BU definition to COPA BU charcteristic values update
			that.leftArrow(canvas,data,370,170)
			that.rect(canvas,data,10,240,100,80,4)//Local Level of Product Hierarchy
			that.text(canvas,data,15,255,90,80,4)//Local Level of Product Hierarchy
			that.line(canvas,data,110,280,130,280)//from Local Level of Product Hierarchy to Global Level of Product Hierarchy
			that.leftArrow(canvas,data,130,280)
			that.rect(canvas,data,130,240,100,80,5)//Global Level of Product Hierarchy
			that.text(canvas,data,135,255,90,80,5)//Global Level of Product Hierarchy
			that.line(canvas,data,230,280,250,280)//from Global Level of Product Hierarchy to MM characteristic (class type 'z05')
			that.leftArrow(canvas,data,250,280)
			that.rect(canvas,data,250,240,100,80,6)//MM characteristic (class type 'z05')
			that.text(canvas,data,255,255,80,80,6)//MM characteristic (class type 'z05')
			that.line(canvas,data,350,280,370,280)//frm MM characteristic (class type 'z05') to COPA product hierarchy maintenance program
			that.leftArrow(canvas,data,370,280)
			that.rect(canvas,data,370,130,130,80,8)//COPA BU charcteristic values update
			that.text(canvas,data,375,145,130,80,8)//COPA BU charcteristic values update
			that.rect(canvas,data,370,240,130,80,9)//COPA product hierarchy maintenance program (ZS2FI_PRODUCT_HIERARCHY)
			that.text(canvas,data,375,255,128,80,9)//COPA product hierarchy maintenance program (ZS2FI_PRODUCT_HIERARCHY)
			that.line(canvas,data,500,280,800,280)//horizontal towards right from COPA product hierarchy maintenance program
			that.rightArrow(canvas,data,500,280)
			that.line(canvas,data,800,280,800,340)//vertical line downwards from horizontal line above to Update COPAcharcteristic derivationrules to maintain validCombinations
			that.line(canvas,data,640,280,640,340)//vert line connectng to Update COPAcharcteristic valueswith product hierarchyvalues (use kes1 forreview
			that.downArrow(canvas,data,640,340)
			that.line(canvas,data,520,280,520,340)//vert line connecting to Consistence table ZS2FI_PRODH_MATC
			that.downArrow(canvas,data,520,340)
			that.rect(canvas,data,440,340,110,80,10)//Consistence table ZS2FI_PRODH_MATC
			that.text(canvas,data,445,355,110,80,10)//Consistence table ZS2FI_PRODH_MATC
			that.rect(canvas,data,560,130,110,80,11)//Manual COPA Retail/FS charcteristic values update (new processes)
			that.text(canvas,data,565,145,110,80,11)//Manual COPA Retail/FS charcteristic values update (new processes)
			that.rect(canvas,data,575,340,130,80,12)//Update COPA charcteristic values with product hierarchy values (use kes1 for review)
			that.text(canvas,data,580,355,120,80,12)//Update COPA charcteristic values with product hierarchy values (use kes1 for review)
			that.rect(canvas,data,735,130,135,80,14)//Manual COPA charcteristic derivation update (new processes) - Segment - Retail/FS - BU
			that.text(canvas,data,740,145,125,80,14)//Manual COPA charcteristic derivation update (new processes) - Segment - Retail/FS - BU 
			that.rect(canvas,data,735,340,130,80,15)//Update COPA charcteristic derivation rules to maintain valid Combinations
			that.text(canvas,data,740,355,120,80,15)//Update COPA charcteristic derivation rules to maintain valid Combinations
			that.rect(canvas,data,900,210,100,40,18)//Organication unit characteristics
			that.text(canvas,data,905,225,100,40,18)//Organication unit characteristics
			that.rect(canvas,data,900,310,100,40,19)//Material related characteristics
			that.text(canvas,data,905,325,100,40,19)//Material related characteristics
			that.rect(canvas,data,900,410,100,40,20)//Customer related characteristics
			that.text(canvas,data,905,425,100,40,20)//Customer related characteristics
			that.rect(canvas,data,900,510,100,40,21)//Other characteristics
			that.text(canvas,data,905,525,100,40,21)//Other characteristics
			that.rect(canvas,data,1000,130,100,60,22)//Derivation MSO Billing process
			that.text(canvas,data,1005,145,100,60,22)//Derivation MSO Billing process
			that.rect(canvas,data,1110,130,100,60,23)//Derivation USCC intercompany Billing process
			that.text(canvas,data,1115,145,100,60,23)//Derivation USCC intercompany Billing process
			that.rect(canvas,data,1220,130,100,60,24)//Derivation USCC direct sales Billing process
			that.text(canvas,data,1225,145,95,60,24)//Derivation USCC direct sales Billing process
			that.rect(canvas,data,1330,130,100,60,25)//Derivation MSO FI postings to COPA
			that.text(canvas,data,1335,145,90,60,25)//Derivation MSO FI postings to COPA
			that.rect(canvas,data,1440,130,100,60,26)//Derivation USCC FI postings to COPA
			that.text(canvas,data,1445,145,100,60,26)//Derivation USCC FI postings to COPA
			that.rect(canvas,data,1550,130,100,60,27)//Derivation MSO Bus. Waste MM/FI postings to COPA
			that.text(canvas,data,1555,145,90,60,27)//Derivation MSO Bus. Waste MM/FI postings to COPA
			that.rect(canvas,data,1660,130,100,60,28)//Derivation USCC Bus. Waste MM/FI postings to COPA
			that.text(canvas,data,1665,145,95,60,28)//Derivation USCC Bus. Waste MM/FI postings to COPA	
	return canvas;
	}  , 1000 );
	
	},
	SR2R33H9_FIAndCOExtractors:  function(x){
	    var model = this.uisCodeCheck("SR2R33H9");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="RTR Sirius ECC Finance Connect Extractor controller";
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
			that.rect(canvas,data,10,10,210,40,0)//ECC
			that.text(canvas,data,100,35,210,40,0)//ECC
			that.rect(canvas,data,350,10,210,40,3)//BODS Connect
			that.text(canvas,data,410,35,210,40,3)//BODS Connect
			that.rect(canvas,data,700,10,210,40,6)//Teradata
			that.text(canvas,data,770,35,210,40,6)//Teradata
			//second line
			that.rect(canvas,data,10,70,210,50,1)//Customer Master Data, Transactional, Hierarchy data creation or modification
			that.text(canvas,data,15,85,200,50,1)//Customer Master Data, Transactional, Hierarchy data creation or modification
			that.rect(canvas,data,350,70,210,50,4)//Data Integration Processing
			that.text(canvas,data,355,85,210,50,4)//Data Integration Processing
			that.rect(canvas,data,700,70,210,50,7)//ETL and Reporting
			that.text(canvas,data,705,85,210,50,7)//ETL and Reporting
			//pentagons
			that.pentagon(canvas,data,250,10,290,320,75,150,2)//extractors
			that.text(canvas,data,255,80,300,60,2)//extractors
			
			that.pentagon(canvas,data,600,10,640,670,75,150,5)//Direct
			that.text(canvas,data,605,80,300,60,5)//Direct
			
	return canvas;
	}  , 1000 );
	
	},

	S_Fin_5_FinanceReporting:  function(x){
	    var model = this.uisCodeCheck("S_FIN_5");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="RTR Sirius Financial Reporting controller";
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
			that.rect(canvas,data,10,10,460,40,0)//ECC
			that.text(canvas,data,215,35,460,40,0)//ECC
			that.rect(canvas,data,530,220,455,40,6)//ECC second
			that.text(canvas,data,745,245,455,40,6)//ECC second
			that.rect(canvas,data,1030,10,120,40,11)//ECC third
			that.text(canvas,data,1075,35,120,40,11)//ECC third
			//second line
			that.rect(canvas,data,10,70,300,40,1)//Financial Statement Version
			that.text(canvas,data,80,90,300,40,1)//Financial Statement Version
			that.rect(canvas,data,335,70,130,40,4)//Financial Statement
			that.text(canvas,data,345,90,130,40,4)//Financial Statement
			that.rect(canvas,data,530,280,130,40,7)//Preparation forConsolidation
			that.text(canvas,data,535,295,130,40,7)//Preparation forConsolidation
			that.rect(canvas,data,685,280,300,40,9)//Consolidation
			that.text(canvas,data,780,300,300,40,9)//Consolidation
			that.rect(canvas,data,1030,70,120,40,12)//Reporting
			that.text(canvas,data,1060,90,120,40,12)//Reporting			
			//tasks
			that.rect(canvas,data,10,130,130,70,2)//Define Financial StatementVersion (OB58)
			that.text(canvas,data,15,145,120,70,2)//Define Financial StatementVersion (OB58)
			that.line(canvas,data,140,160,180,160)//from Define Financial StatementVersion (OB58) to Maintain FinancialStatement Item andAccount (OB58)
			that.leftArrow(canvas,data,180,160)
			that.rect(canvas,data,180,130,130,70,3)//Maintain FinancialStatement Item andAccount (OB58)
			that.text(canvas,data,185,145,120,70,3)//Maintain FinancialStatement Item andAccount (OB58)
			that.rect(canvas,data,335,130,130,70,5)//Financial Statements(S_ALR_87012284 orF.01) ----1
			that.text(canvas,data,340,145,120,70,5)//Financial Statements(S_ALR_87012284 orF.01) ----1
			that.line(canvas,data,465,150,1030,150)//from Financial Statements(S_ALR_87012284 orF.01) ---1 to Fiscal and LegalReporting
			that.leftArrow(canvas,data,1030,150)
			that.line(canvas,data,485,150,485,370)//vertical line downwards from Financial Statements(S_ALR_87012284 orF.01)---1
			that.line(canvas,data,485,370,530,370)//from vertical line to Financial Statements(S_ALR_87012284 orF.01 ----2
			that.leftArrow(canvas,data,530,370)
			that.rect(canvas,data,530,340,130,70,8)//Financial Statements(S_ALR_87012284 orF.01 ----2
			that.text(canvas,data,535,355,130,70,8)//Financial Statements(S_ALR_87012284 orF.01 ----2
			that.rect(canvas,data,685,340,300,100,10)//Reporting of Special GL w/o codes A & W (FBF1) etc
			that.text(canvas,data,690,355,290,100,10)//Reporting of Special GL w/o codes A & W (FBF1) etc
			that.rect(canvas,data,1030,130,120,40,13)//Fiscal and LegalReporting
			that.text(canvas,data,1035,145,120,40,13)//Fiscal and LegalReporting	
	return canvas;
	}  , 1000 );
	
	},

	S_Fin_6_CostingProcessReport:  function(x){
	    var model = this.uisCodeCheck("S_FIN_6");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="Product Costing Costing Process Report";
	    setTimeout( function(){
	      x.editPopUp.close();
	      var that=x;
	      var width=6000;
	       var height=6000;
	       var dom;
	       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
	       var canvas = d3.select(ScrollID).append("svg")
	       .attr("width",width)
	       .attr("id","idCanvas")
	       .attr("height",height).append("g")
								//First Row(Top to Bottom) (x,y,width,height,index,angle,fontSize)
					that.box(canvas,data,15,80,50,200,0,"1px")       //Box
					that.rotateFreeText(canvas,data,46,215,90,250,0,270,"12px") //SU Costing
					that.pentagon(canvas,data,80,10,3500,3520,30,50,1)
					that.text(canvas,data,1740,30,300,40,1)
					that.rect(canvas,data,80,80,490,40,2) // Master Data
					that.text(canvas,data,280,104,300,40,2)
					that.rect(canvas,data,80,150,100,60,3) // MRP/Costing Views
					that.text(canvas,data,90,180,90,50,3)
					that.rect(canvas,data,210,150,100,60,4) // Costing BOMs
					that.text(canvas,data,220,180,90,50,4)
					that.rect(canvas,data,340,150,100,60,5) // Prod./Costing Routings
					that.text(canvas,data,350,180,90,50,5)
					that.rect(canvas,data,470,150,100,60,6) // Templates
					that.text(canvas,data,480,180,90,50,6)
					that.rect(canvas,data,600,80,1410,40,7) // Preparation (only BP costing)
					that.text(canvas,data,1200,104,300,40,7)
					that.rect(canvas,data,600,150,100,60,8) // Planned FP Volumes
					that.text(canvas,data,610,174,90,50,8)
					that.rect(canvas,data,730,150,100,60,9) // SFP Demand Calculation
					that.text(canvas,data,740,174,90,50,9)
					that.rect(canvas,data,860,150,100,60,10) // Transfer SFP Volumes
					that.text(canvas,data,870,174,90,50,10)
					that.rect(canvas,data,990,150,100,60,11) // Full Own SFP Demand
					that.text(canvas,data,1000,174,90,50,11)
					that.rect(canvas,data,1120,150,100,60,12) // Total Activity Quantities
					that.text(canvas,data,1130,174,90,50,12)
					that.rect(canvas,data,1250,150,100,60,13) // Planned  Upload
					that.text(canvas,data,1260,174,85,50,13)
					that.rect(canvas,data,1380,150,100,60,14) // Assessment Cycle Update
					that.text(canvas,data,1390,174,90,50,14)
					that.rect(canvas,data,1510,150,100,60,15) // Plan Assessment
					that.text(canvas,data,1520,174,85,50,15)
					that.rect(canvas,data,1640,150,100,60,16) // Splitting
					that.text(canvas,data,1650,174,90,50,16)
					that.rect(canvas,data,1770,150,100,60,17) // Planned Activity Prices
					that.text(canvas,data,1780,174,90,50,17)
					that.rect(canvas,data,1910,150,100,60,18) // Activity Price Adjustment
					that.text(canvas,data,1920,174,90,50,18)
					that.rect(canvas,data,2040,80,370,40,19) // Preparation (common)
					that.text(canvas,data,2170,104,300,40,19)
					that.rect(canvas,data,2040,150,100,60,20) // RM & PM Future Prices
					that.text(canvas,data,2050,174,80,50,20)
					that.rect(canvas,data,2170,150,100,60,21) // Subcontracting Rates
					that.text(canvas,data,2180,174,90,50,21)
					that.rect(canvas,data,2310,150,100,60,22) // Selection Lists
					that.text(canvas,data,2320,174,80,50,22)
					that.rect(canvas,data,2440,80,100,40,23) // Product Costing
					that.text(canvas,data,2450,104,90,40,23)
					that.rect(canvas,data,2440,150,100,60,24) // Calculation
					that.text(canvas,data,2450,174,80,50,24)
					that.rect(canvas,data,2570,80,100,40,25) // Checking (only BP cost.)
					that.text(canvas,data,2580,102,90,40,25)
					that.rect(canvas,data,2570,150,100,60,26) // Convers. Cost Absorption
					that.text(canvas,data,2580,174,80,50,26)
					that.box(canvas,data,15,400,50,200,27,"1px")       //Box
					that.rotateFreeText(canvas,data,46,530,90,250,27,270,"12px") //DC Costing
					that.rect(canvas,data,80,400,370,40,28) // Master Data
					that.text(canvas,data,220,424,300,40,28)
					that.rect(canvas,data,80,470,100,60,29) // MRP/Costing Views
					that.text(canvas,data,90,494,90,50,29)
					that.rect(canvas,data,210,470,100,60,30) // Costing BOMs
					that.text(canvas,data,220,494,90,50,30)
					that.rect(canvas,data,350,470,100,60,31) // Sales Views / Sales BOMs
					that.text(canvas,data,360,494,90,50,31)
					that.rect(canvas,data,480,400,880,40,32) // Preparation (only BP costing)
					that.text(canvas,data,850,424,300,40,32)
					that.rect(canvas,data,480,470,100,60,33) // Source Matrix Upload
					that.text(canvas,data,490,494,90,50,33)
					that.rect(canvas,data,610,470,100,60,34) // Turnover Upload
					that.text(canvas,data,620,494,80,50,34)
					that.rect(canvas,data,740,470,100,60,35) // Hierarchy Levels Reference
					that.text(canvas,data,750,494,80,50,35)
					that.rect(canvas,data,870,470,100,60,36) // Exclusion Definitions
					that.text(canvas,data,880,494,90,50,36)
					that.rect(canvas,data,1000,470,100,60,37) // Parameter Records
					that.text(canvas,data,1010,494,90,50,37)
					that.rect(canvas,data,1130,470,100,60,38) // Planned Cost Upload
					that.text(canvas,data,1140,494,90,50,38)
					that.rect(canvas,data,1260,470,100,60,39) // Rate Calculations
					that.text(canvas,data,1270,494,85,50,39)
					that.rect(canvas,data,1390,400,360,40,40) // Preparation (COmmon)
					that.text(canvas,data,1510,424,300,40,40)
					that.rect(canvas,data,1390,470,100,60,41) // Bought-in Future Prices
					that.text(canvas,data,1400,494,80,50,41)
					that.rect(canvas,data,1520,470,100,60,42) // Subcontracting Rates
					that.text(canvas,data,1530,494,90,50,42)
					that.rect(canvas,data,1650,470,100,60,43) // Selection Lists
					that.text(canvas,data,1660,494,90,50,43)
					that.rect(canvas,data,2740,400,100,40,44) // Product Costing
					that.text(canvas,data,2750,424,90,40,44)
					that.rect(canvas,data,2740,470,100,60,45) // Calculation
					that.text(canvas,data,2750,494,90,50,45)
					that.rect(canvas,data,2870,470,100,60,46) // Marking
					that.text(canvas,data,2880,494,90,50,46)
					that.rect(canvas,data,3000,470,100,60,47) // COndition Cr..
					that.text(canvas,data,3010,494,90,50,47)
					that.rect(canvas,data,3130,470,100,60,48) // Releasing
					that.text(canvas,data,3140,494,90,50,48)
					that.rect(canvas,data,3260,470,100,60,49) // Condition Creation/Check
					that.text(canvas,data,3270,494,90,50,49)
					that.rect(canvas,data,3390,470,100,60,50) // Condition Creation/Check
					that.text(canvas,data,3400,494,90,50,50)	
	return canvas;
	}  , 1000 );
	
	},
	S_Fin_7_ProductionOrders :  function(x){
	    var model = this.uisCodeCheck("S_FIN_7");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="Finance Production Orders and Reallocate costs";
	    setTimeout( function(){
	      x.editPopUp.close();
	      var that=x;
	      var width=6000;
	       var height=4000;
	       var dom;
	       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
	       var canvas = d3.select(ScrollID).append("svg")
	       .attr("width",width)
	       .attr("id","idCanvas")
	       .attr("height",height).append("g")
									//First Row(Top to Bottom) 
                    //that.pentagon(canvas,data,80,10,180,250,30,80,0) //x1,y1,x2,x3,y3,y4,index
					that.pentagon(canvas,data,80,10,3660,3680,30,50,0)
					that.text(canvas,data,1740,30,300,40,0)
					that.rect(canvas,data,80,80,800,40,1) // ECC
					that.text(canvas,data,450,100,300,40,1)
					that.rect(canvas,data,80,150,100,60,2) // Product Cost COllectors
					that.text(canvas,data,90,170,90,40,2)
					that.rect(canvas,data,220,150,100,60,3) // Preliminary Cost Estimates
					that.text(canvas,data,230,170,80,40,3)
					that.rect(canvas,data,360,150,100,60,4) // Correction Cost Estimates
					that.text(canvas,data,370,170,80,40,4)
					that.rect(canvas,data,500,150,100,60,5) // Assessment Cycles - Actual
					that.text(canvas,data,510,170,90,40,5)
					that.rect(canvas,data,640,150,100,60,6) // Templates
					that.text(canvas,data,650,170,90,40,6)
					that.rect(canvas,data,780,150,100,60,7) // Rect. & Dev. Trial Orders
					that.text(canvas,data,790,170,90,40,7)
					that.rect(canvas,data,920,80,100,40,8) // Processing
					that.text(canvas,data,930,100,90,40,8)
					that.rect(canvas,data,920,150,100,60,9) // Actual Costs
					that.text(canvas,data,930,170,90,40,9)
					that.rect(canvas,data,1060,80,2200,40,10) // Period Closing
					that.text(canvas,data,2100,100,90,40,10)
					that.rect(canvas,data,1060,150,100,60,11) //SU Actual Cost Adjustment
					that.text(canvas,data,1070,170,90,40,11)
					that.rect(canvas,data,1200,150,100,60,12) // Template Allocation
					that.text(canvas,data,1210,170,90,40,12)
					that.rect(canvas,data,1340,150,100,60,13) // Actual Overhead Allocation
					that.text(canvas,data,1350,170,80,40,13)
					that.rect(canvas,data,1480,150,100,60,14) // Actual Cost Assessment
					that.text(canvas,data,1490,170,90,40,14)
					that.rect(canvas,data,1620,150,100,60,15) // Splitting
					that.text(canvas,data,1630,170,90,40,15)
					that.rect(canvas,data,1760,150,100,60,16) // Actual Activ. Price Calc.
					that.text(canvas,data,1770,170,90,40,16)
					that.rect(canvas,data,1900,150,100,60,17) // Activity Price Adjustment
					that.text(canvas,data,1910,170,90,40,17)
					that.rect(canvas,data,2040,150,100,60,18) // Revaluation @ Actual Price
					that.text(canvas,data,2050,170,90,40,18)
					that.rect(canvas,data,2180,150,100,60,19) // WIP Calculation
					that.text(canvas,data,2190,170,90,40,19)
					that.rect(canvas,data,2320,150,100,60,20) // Variance Calculation
					that.text(canvas,data,2330,170,90,40,20)
					that.rect(canvas,data,2460,150,100,60,21) // Settlement
					that.text(canvas,data,2470,170,90,40,21)
					that.rect(canvas,data,2600,150,100,60,22) //Closing Orders
					that.text(canvas,data,2610,170,90,40,22)
					that.rect(canvas,data,2740,150,100,60,23) // Remaining Cost Assessm.
					that.text(canvas,data,2750,170,80,40,23)
					that.rect(canvas,data,2880,150,100,60,24) // Reconciliation Ledger
					that.text(canvas,data,2890,170,90,40,24)
					that.rect(canvas,data,3020,150,100,60,25) // Recon. Ledger Adjustment
					that.text(canvas,data,3030,170,80,40,25)
					that.rect(canvas,data,3160,150,100,60,26) // Additional Mat. Costs
					that.text(canvas,data,3170,170,90,40,26)
					that.rect(canvas,data,3300,80,380,40,27) // Reporting
					that.text(canvas,data,3460,100,190,40,27)
					that.rect(canvas,data,3300,150,100,60,28) //Rectification Costs
					that.text(canvas,data,3310,170,90,40,28)
					that.rect(canvas,data,3440,150,100,60,29) //Order Variances
					that.text(canvas,data,3450,170,90,40,29)
					that.rect(canvas,data,3580,150,100,60,30) //PCC Variances
					that.text(canvas,data,3590,170,90,40,30)
					that.pentagon(canvas,data,3720,10,3800,3820,30,50,31) //COnnect
					that.text(canvas,data,3730,30,90,40,31)
					that.rect(canvas,data,3720,80,100,40,32) // Reporting
					that.text(canvas,data,3730,100,90,40,32)
					that.rect(canvas,data,3720,150,100,60,33) //Variances @ Prod. Costs
					that.text(canvas,data,3730,170,90,40,33)
					
	return canvas;
	}  , 1000 );
	
	},
	S_Fin_8_FinancialMasterData:  function(x){
	    var model = this.uisCodeCheck("S_FIN_8");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="RTR Sirius Financial Master Data - General Ledger";
	    setTimeout( function(){
	      x.editPopUp.close();
	      var that=x;
	      var width=6000;
	       var height=1500;
	       var dom;
	       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
	       var canvas = d3.select(ScrollID).append("svg")
	       .attr("width",width)
	       .attr("id","idCanvas")
	       .attr("height",height).append("g")
			//top line
			that.rect(canvas,data,10,10,700,40,0)//ECC
			that.text(canvas,data,350,35,700,40,0)//ECC
			that.rect(canvas,data,920,10,590,40,13)//ECC second
			that.text(canvas,data,1200,35,590,40,13)//ECC
			that.rect(canvas,data,1520,10,210,40,19)//ECC
			that.text(canvas,data,1610,35,210,40,19)//ECC third
			that.rect(canvas,data,1740,10,250,40,23)//ECC fourth
			that.text(canvas,data,1850,35,250,40,23)
			//second line
			that.rect(canvas,data,10,70,700,40,1)//General Ledger Account
			that.text(canvas,data,300,90,700,40,1)//General Ledger Account
			
			that.rect(canvas,data,920,70,590,40,14)//Automatic Account Assignments 
			that.text(canvas,data,1130,90,590,40,14)//Automatic Account Assignments 
							
			that.rect(canvas,data,1520,70,210,40,20)//Validation and Substitution
			that.text(canvas,data,1560,90,210,40,20)//Validation and Substitution
			that.rect(canvas,data,1740,70,250,40,24)//Custom Tables for with GL Accounts
			that.text(canvas,data,1760,90,250,40,24)//Custom Tables for with GL Accounts 
			//tasks
			that.rect(canvas,data,10,130,100,70,2)//Create GL Account (FSP0)
			that.text(canvas,data,15,145,90,70,2)//Create GL Account (FSP0)
			that.line(canvas,data,110,160,130,160)//from Create GL Account (FSP0) to Extend GL Account to Company Code (FS00)
			that.leftArrow(canvas,data,130,160)
			that.rect(canvas,data,130,130,100,70,3)//Extend GL Account to Company Code (FS00)
			that.text(canvas,data,135,145,90,70,3)//Extend GL Account to Company Code (FS00)
			that.line(canvas,data,230,160,420,160)//horizontal towards left from Extend GL Account to Company Code (FS00)
			that.line(canvas,data,300,160,300,200)//vert line to Modify/Edit GL Account (FS00)
			that.downArrow(canvas,data,300,200)
			that.line(canvas,data,420,160,420,200)//vert line to Create Cost Element (KA01)
			that.downArrow(canvas,data,420,200)
			that.rect(canvas,data,250,200,100,70,4)//Modify/Edit GL Account (FS00)
			that.text(canvas,data,255,215,90,70,4)//Modify/Edit GL Account (FS00)
			that.line(canvas,data,350,230,370,230)//from Modify/Edit GL Account (FS00) to Create Cost Element (KA01)
			that.leftArrow(canvas,data,370,230)
			that.line(canvas,data,300,270,300,290)//vert downwards from Modify/Edit GL Account (FS00)
			that.line(canvas,data,300,290,490,290)//from Modify/Edit GL Account (FS00) to Block GL Account (FSS0)
			that.leftArrow(canvas,data,490,290)
			that.rect(canvas,data,370,200,100,70,5)//Create Cost Element (KA01)
			that.text(canvas,data,375,215,90,70,5)//Create Cost Element (KA01)
			that.line(canvas,data,470,230,610,230)//from Create Cost Element (KA01) to Block Cost Element (KA04)
			that.leftArrow(canvas,data,610,230)
			that.rect(canvas,data,490,250,100,70,6)//Block GL Account (FSS0)
			that.text(canvas,data,495,265,90,70,6)//Block GL Account (FSS0)
			that.rect(canvas,data,610,200,100,70,7)//Block Cost Element (KA04)
			that.text(canvas,data,615,215,90,70,7)//Block Cost Element (KA04)
			that.rect(canvas,data,720,170,200,40,12)//Interface GL Account Master Data
			that.text(canvas,data,725,190,190,40,12)//Interface GL Account Master Data
			that.rect(canvas,data,930,130,100,70,15)//SD Account Determination (VKOA) 
			that.text(canvas,data,935,145,100,70,15)//SD Account Determination (VKOA) 
			that.rect(canvas,data,1050,130,100,70,16)//MM Account Determination (OBYC)
			that.text(canvas,data,1055,145,100,70,16)//MM Account Determination (OBYC)
			that.rect(canvas,data,1170,130,100,70,17)//Automatic Account Determination (OKB9) 
			that.text(canvas,data,1175,145,100,70,17)//Automatic Account Determination (OKB9) 
			that.rect(canvas,data,1290,130,220,125,18)//Tables for GL Account Determination TCJ_TRANSACTION - Cash Journal etc
			that.text(canvas,data,1295,145,210,125,18)//Tables for GL Account Determination TCJ_TRANSACTION - Cash Journal etc
			that.rect(canvas,data,1520,130,100,70,21)//Update Substitutions (GGB1/OBBH)
			that.text(canvas,data,1525,145,100,70,21)//Update Substitutions (GGB1/OBBH)
			that.rect(canvas,data,1630,130,100,70,22)//Update Validations (GGB0/OB28)
			that.text(canvas,data,1635,145,90,70,22)//Update Validations (GGB0/OB28)
			that.rect(canvas,data,1740,130,250,130,25)//Z0FIPARAM_CBT - EFCR FCRO Parameters etc
			that.text(canvas,data,1745,145,245,130,25)//Z0FIPARAM_CBT - EFCR FCRO Parameters etc
			//pentagons
			that.pentagon(canvas,data,720,10,750,780,70,140,8)//PI
			that.text(canvas,data,740,75,70,70,8)//PI
			that.pentagon(canvas,data,800,10,890,910,25,40,9)//Ariba
			that.text(canvas,data,820,30,70,70,9)
			that.pentagon(canvas,data,800,60,890,910,75,90,10)//DCIW
			that.text(canvas,data,820,80,70,70,10)
			that.pentagon(canvas,data,800,110,890,910,125,140,11)//GTES/CONCUR
			that.text(canvas,data,805,115,70,70,11)
			
	return canvas;
	}  , 1000 );
	
	},

	S_Fin_9_IntercompanyReconciliation:  function(x){
	    var model = this.uisCodeCheck("S_FIN_9");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="R2R Intercompany Reconciliation V2";
	    setTimeout( function(){
	      x.editPopUp.close();
	      var that=x;
	      var width=6000;
	       var height=6000;
	       var dom;
	       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
	       var canvas = d3.select(ScrollID).append("svg")
	       .attr("width",width)
	       .attr("id","idCanvas")
	       .attr("height",height).append("g")
			// First Row
			that.pentagon(canvas,data,10,10,1580,1610,30,50,0) // ECC
			that.text(canvas,data,720,35,300,40,0)
			//Second Row
			that.rect(canvas,data,10,80,1600,50,1) // Intercompany Reconciliation 
			that.text(canvas,data,660,110,300,40,1)
			// First Column
			that.rect(canvas,data,10,260,150,90,2) // Inter Company Invoice(from USCC CC 2611) on MSO Payer Creation VF01 (IV) 
			that.text(canvas,data,25,290,130,40,2)
			// Second Column
			that.rect(canvas,data,180,260,150,85,3) // Billing sent to Compudata via IDOC for E-Signature(Trigger by Output type ZRD4//ZRD5) 
			that.text(canvas,data,195,280,130,40,3)
			//Third Column
			that.rect(canvas,data,350,260,150,80,4) // MSO AP Invoice Postings in MSO CC (FI Postings) via IDOC 
			that.text(canvas,data,365,290,130,40,4)
			//Fourth Column
			that.rect(canvas,data,560,150,130,90,5) //  AP/AR Intercompany Postings
			that.text(canvas,data,570,190,160,40,5)
			//Fifth Column
			that.rect(canvas,data,655,550,130,70,6) //  This activity is being performed by business
			that.textBlack(canvas,data,665,575,120,40,6)
			//Sixth Column
			that.rect(canvas,data,730,150,130,90,7) //  Generate Intercompany Vendor & Customer Open items
			that.text(canvas,data,745,180,110,40,7)
			//Seventh Column
			that.rect(canvas,data,900,150,110,90,8) // Data Selection
			that.text(canvas,data,915,200,250,40,8)
			//Eighth Column
			that.rect(canvas,data,1050,150,110,90,9) // Data Assignment
			that.text(canvas,data,1057,200,250,40,9)
			//Ninth Column
			that.rect(canvas,data,1125,550,130,70,10) // This activity is being performed by business
			that.textBlack(canvas,data,1135,575,120,40,10)
			//Tenth Column
			that.rect(canvas,data,1200,150,110,90,11) // Data Presentation and Analysis*
			that.text(canvas,data,1220,190,90,40,11)
			//Eleventh Column
			that.rect(canvas,data,1350,150,110,90,12) // Communication
			that.text(canvas,data,1362,200,90,40,12)
			//Twelveth Column
			that.rect(canvas,data,1420,550,130,70,13) // Manual postings are being performed by Capgemini team.
			that.textBlack(canvas,data,1430,575,120,40,13)
			//Thiteenth Column
			that.rect(canvas,data,1500,150,110,90,14) // Post Corrections(only if necessary)
			that.text(canvas,data,1510,185,90,40,14)
			//Lines and Arrow ------Change comments below-----
			that.line(canvas,data,690,195,730,195)// Line Connecting index - 5 & 6
			that.leftArrow(canvas,data,730,195)
			that.line(canvas,data,860,195,900,195) // Line connecting index - 5&6 to index -9
			that.leftArrow(canvas,data,900,195)
			that.line(canvas,data,1010,195,1050,195) // Line Connecting index - 5 & 6 to index - 10
			that.leftArrow(canvas,data,1050, 195)
			that.line(canvas,data,1160,195,1200,195) // Line Connecting index - 9 & 10 to index - 11
			that.leftArrow(canvas,data,1200, 195)
			that.line(canvas,data,1310,195,1350,195) // Line Connecting index - 11 & 16
			that.leftArrow(canvas,data,1350, 195)
			that.line(canvas,data,1460,195,1500,195)// Line Connecting index - 13 & 14
			that.leftArrow(canvas,data,1500, 195)
			that.line(canvas,data,710,550,710,215) // Line Connecting index - 14 & 16
			that.line(canvas,data,710,215,730,215)
			that.line(canvas,data,1180,550,1180,215)
			that.line(canvas,data,1180,215,1200,215)
			that.line(canvas,data,1480,550,1480,215)
			that.line(canvas,data,1480,215,1500,215)
	        that.pipedRightArrow(canvas,data,160,300,170,295,180,305,315,310)
			that.pipedRightArrow(canvas,data,330,300,340,295,350,305,315,310)
			that.line(canvas,data,20,250,20,170)
			that.line(canvas,data,20,170,550,170)
			that.leftArrow(canvas,data,550, 170)
			
	return canvas;
	}  , 1000 );
	
	},
	S_Fin_10_CapitalInvestmentProcedure:  function(x){
	    var model = this.uisCodeCheck("S_FIN_10");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="RTR Sirius Capital Investment Procedure v2";
	    setTimeout( function(){
	      x.editPopUp.close();
	      var that=x;
	      var width=6000;
	       var height=1500;
	       var dom;
	       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
	       var canvas = d3.select(ScrollID).append("svg")
	       .attr("width",width)
	       .attr("id","idCanvas")
	       .attr("height",height).append("g")
			// First Row
			that.pentagon(canvas,data,10,10,2200,2230,30,50,0) // ECC
			that.text(canvas,data,720,35,300,40,0)
			that.pentagon(canvas,data,2620,10,3280,3310,30,50,1) // ECC 
			that.text(canvas,data,2960,35,300,40,1)
			// Second Row
			that.rect(canvas,data,10,80,1950,50,2) // Capital Investment Processing 
			that.text(canvas,data,660,110,300,40,2)
			that.rect(canvas,data,1990,80,240,50,3) // Budget and Investment Reporting 
			that.text(canvas,data,2010,110,300,40,3)
			that.rect(canvas,data,2260,80,1050,50,4) // Year-End Process 
			that.text(canvas,data,2720,110,300,40,4)
			// Third Row
			that.rect(canvas,data,10,160,150,90,5) // Prepare Capital Budget 
			that.text(canvas,data,25,210,130,40,5)
			that.rect(canvas,data,190,160,150,90,6) // Approved Capital Investment Budget 
			that.text(canvas,data,205,200,130,40,6)
			that.rect(canvas,data,370,160,150,90,7) // Create Capital Investment Program - CIP(IM01) 
			that.text(canvas,data,390,195,130,40,7)
			that.rect(canvas,data,550,160,150,90,8) //  Create Investment Program Structure(IM22)
			that.text(canvas,data,560,200,140,40,8)
			that.rect(canvas,data,730,160,150,90,9) //  Enter Budget for Investments(IM32)
			that.text(canvas,data,755,200,140,40,9)
			that.rect(canvas,data,910,160,150,90,10) //  Capital Proposal assigned to Capital Investment Structure(IM22)
			that.text(canvas,data,920,190,110,40,10)
			that.rect(canvas,data,1090,160,150,90,11) // Allocate Budget to Capital Proposal(IM32/IM52)
			that.text(canvas,data,1110,195,140,40,11)
			that.rect(canvas,data,1270,250,150,90,12) // Asset and Internal Order Master Data
			that.text(canvas,data,1275,290,160,40,12)
			that.rect(canvas,data,1450,250,150,90,13) // Assign Capital Investment Orders to Fixed Assets(AS01/AS02)
			that.text(canvas,data,1470,280,120,40,13)
			that.rect(canvas,data,1630,250,150,90,14) // Assign Capital Investment Orders to Capital Expenditure Program - CEP(KO01/KO02)
			that.text(canvas,data,1650,275,140,40,14)
			that.rect(canvas,data,1810,250,150,90,15) // Check Inheritance of Organizational Structure(IMR9)
			that.text(canvas,data,1830,285,140,40,15)
			that.rect(canvas,data,1990,250,240,90,16) // - Capital Reporting (S_ALR_87012806)
			that.text(canvas,data,2000,275,250,40,16)
			that.text(canvas,data,2000,290,250,40,17)
			that.text(canvas,data,2000,305,250,40,18)
			that.text(canvas,data,2000,320,250,40,19)
			that.rect(canvas,data,2260,250,150,90,20) // Prepare Annual Capital Investment Budget
			that.text(canvas,data,2270,295,160,40,20)
			that.rect(canvas,data,2440,250,150,90,21) // Create Lower Levels
			that.text(canvas,data,2460,295,160,40,21)
			that.rect(canvas,data,2620,250,150,90,22) // Closed Off Internal Orders for Completed Proposal(KO02)
			that.text(canvas,data,2650,280,100,40,22)
			that.rect(canvas,data,2800,250,150,90,23) // Carry Forward Internal Orders/Open New Approval Year(IM27)
			that.text(canvas,data,2825,275,100,40,23)
			that.rect(canvas,data,2980,250,150,90,24) // Carry Forward Commitment for Open Capital Proposals(KOCF)
			that.text(canvas,data,3000,275,100,40,24)
			that.rect(canvas,data,3160,250,150,90,25) // Close Fiscal Year
			that.text(canvas,data,3190,295,160,40,25)
			//Fourth Row
			that.rect(canvas,data,1630,370,150,90,26) // Enter budget for Internal Order(KO22)
			that.text(canvas,data,1640,415,160,40,26)
			//Lines and Arrow ------Change comments below-----
			that.line(canvas,data,160,205,190,205)// Line Connecting index - 6 & 7
			that.leftArrow(canvas,data,190,205)
			that.line(canvas,data,340,205,370,205) // Line connecting index - 7 to index - 8
			that.leftArrow(canvas,data,370,205)
			that.line(canvas,data,520,205,550,205) // Line Connecting index - 8 to index - 9
			that.leftArrow(canvas,data,550, 205)
			that.line(canvas,data,700,205,730,205) // Line Connecting index - 9 to index - 10
			that.leftArrow(canvas,data,730, 205)
			that.line(canvas,data,880,205,910,205) // Line Connecting index - 10 & 11
			that.leftArrow(canvas,data,910, 205)
			that.line(canvas,data,1060,205,1090,205)// Line Connecting index - 11 & 12
			that.leftArrow(canvas,data,1090, 205)
			that.line(canvas,data,1240,205,1525,205) // Line Connecting index - 12 & 14
			that.line(canvas,data,1525,205,1525,250)
			that.downArrow(canvas,data,1525, 250)
			that.line(canvas,data,1420,295,1450,295)// Line Connecting index - 12 & 13
			that.leftArrow(canvas,data,1450, 295)
			that.line(canvas,data,1600,295,1630,295)// Line Connecting index - 13 & 14
			that.leftArrow(canvas,data,1630, 295)
			that.line(canvas,data,1780,295,1810,295)// Line Connecting index - 14 & 15
			that.leftArrow(canvas,data,1810, 295)
			that.line(canvas,data,2410,295,2440,295)// Line Connecting index - 21 & 22
			that.leftArrow(canvas,data,2440, 295)
			that.line(canvas,data,2590,295,2620,295)// Line Connecting index - 22 & 23
			that.leftArrow(canvas,data,2620, 295)
			that.line(canvas,data,2770,295,2800,295)// Line Connecting index - 23 & 24
			that.leftArrow(canvas,data,2800, 295)
			that.line(canvas,data,2950,295,2980,295)// Line Connecting index - 24 & 25
			that.leftArrow(canvas,data,2980, 295)
			that.line(canvas,data,3130,295,3160,295)// Line Connecting index - 25 & 26
			that.leftArrow(canvas,data,3160, 295)
			that.line(canvas,data,1705, 340, 1705, 370) // Line Connecting index - 15 & 27
			that.downArrow(canvas,data,1705, 370)
	return canvas;
	}  , 1000 );
	
	},
	SR2R09F4_FixedAssests:  function(x){
	    var model = this.uisCodeCheck("SR2R09F4");
	    var data = sap.ui.getCore().getModel("bindingModel").oData;
	    x.getView().getModel("oModelHeader").oData.header="R2R Asset Accounting";
	    setTimeout( function(){
	      x.editPopUp.close();
	      var that=x;
	      var width=8000;
	       var height=8000;
	       var dom;
	       var ScrollID= "#"+that.getView().byId("idScrollCon").getDomRef().id;
	       var canvas = d3.select(ScrollID).append("svg")
	       .attr("width",width)
	       .attr("id","idCanvas")
	       .attr("height",height).append("g")
			//********************** column 1 ******************************************************************//
					that.pentagon(canvas,data,10,10,100,110,25,40,0)			// ECC
					that.text(canvas,data,40,30,100,40,0)
					that.pentagon(canvas,data,120,10,210,220,25,40,1)		// PI
					that.text(canvas,data,150,30,100,40,1)
					that.pentagon(canvas,data,230,10,320,330,25,40,2)		// ARIBA
					that.text(canvas,data,240,30,100,40,2)
					that.rect(canvas,data,10,60,320,70,3)					// Asset Master
					that.text(canvas,data,130,90,300,40,3)
					that.rect(canvas,data,10,150,150,100,4)					// Create/Modify Asset (AS01/AS02)
					that.text(canvas,data,20,180,130,40,4)
					that.line(canvas,data,160,200,180,200)
					that.leftArrow(canvas,data,180,200)
					that.rect(canvas,data,180,150,150,100,5)					// Asset Master Data Creation/Modification sent to ARIBA
					that.text(canvas,data,190,180,130,40,5)
					that.line(canvas,data,255,250,255,640)
					that.line(canvas,data,255,640,1040,640)					// output to column 4 "Acquistion with Vendor (F-90)"
					that.leftArrow(canvas,data,1040,640)
					that.line(canvas,data,255,310,1040,310)					// output to colimn 4 "Purchase Order Creation(ME21N)"
					that.leftArrow(canvas,data,1040,310)
					that.line(canvas,data,255,430,1040,430)					// output to column 4 "Ariba Purchase Order......."
					that.leftArrow(canvas,data,1040,430)
//********************** column 2 ******************************************************************//
					that.pentagon(canvas,data,350,10,660,670,25,40,6)		// ECC
					that.text(canvas,data,500,30,300,40,6)
					that.rect(canvas,data,350,60,320,70,7)					// Investment Management
					that.text(canvas,data,450,90,300,40,7)
					that.rect(canvas,data,350,150,150,100,8)					// Creation of New Capital Investment Program (CIP)
					that.text(canvas,data,360,180,120,40,8)
					that.line(canvas,data,500,200,520,200)					// output to "Create Investment Program Position"
					that.leftArrow(canvas,data,520,200)
					that.rect(canvas,data,520,150,150,100,9)					// Create Investment Program Position
					that.text(canvas,data,530,180,120,40,9)
//********************** column 3 ******************************************************************//
					that.pentagon(canvas,data,690,10,1000,1010,25,40,10)		// ECC
					that.text(canvas,data,830,30,1000,40,10)
					that.rect(canvas,data,690,60,320,70,11)					// Capitalization and Budgeting
					that.text(canvas,data,800,90,300,40,11)
					that.rect(canvas,data,690,150,150,100,12)				// Create Internal Order with Investment type
					that.text(canvas,data,700,180,120,40,12)
					that.line(canvas,data,840,200,860,200)					// output to "Create budget for investment order"
					that.leftArrow(canvas,data,860,200)
					that.rect(canvas,data,860,150,150,100,13)				// Create budget for investment order
					that.text(canvas,data,870,180,120,40,13)
//********************** column 4 ******************************************************************//	
					that.pentagon(canvas,data,1040,60,1460,1470,80,100,14)	// ECC
					that.text(canvas,data,1250,80,400,40,14)
					that.pentagon(canvas,data,1040,115,1180,1190,130,145,15) // ARIBA
					that.text(canvas,data,1100,130,100,40,15)
					that.line(canvas,data,1185,120,1210,120)
					that.leftArrow(canvas,data,1210,120)
					that.line(canvas,data,1185,145,1210,145)
					that.rightArrow(canvas,data,1185,145)
					that.freeText(canvas,data,1170,160,100,40,53,"10px")
					that.pentagon(canvas,data,1210,115,1460,1470,130,145,16)	// ECC
					that.text(canvas,data,1330,130,100,40,16)
					that.rect(canvas,data,1040,170,420,70,17)				// Asset  Acquisition (AuC)
					that.text(canvas,data,1190,200,400,50,17)
					that.freeText(canvas,data,950,300,100,40,54,"12px")
					that.rect(canvas,data,1040,260,150,100,18)				// Purchase Order Creation(ME21N)
					that.text(canvas,data,1050,290,130,80,18)
					that.line(canvas,data,1190,310,1220,310)					// output to "Goods Receipt Creation (MIGO)"
					that.leftArrow(canvas,data,1220,310)
					that.freeText(canvas,data,1000,420,100,40,55,"12px")
					that.rect(canvas,data,1040,380,150,100,19)				// Ariba Purchase Order Creation Item Category A (DO* & MO*)
					that.text(canvas,data,1050,410,130,80,19)
					that.line(canvas,data,1190,430,1220,430)					// output to "Ariba Goods Receipt Creation"
					that.leftArrow(canvas,data,1220,430)
					that.rect(canvas,data,1040,500,180,70,20)				// Asset  Acquisition (Non-AuC)
					that.text(canvas,data,1050,530,160,50,20)
					that.rect(canvas,data,1040,590,150,100,21)				// Acquistion with Vendor (F-90)
					that.text(canvas,data,1050,620,120,80,21)
					that.line(canvas,data,1115,690,1115,710)					// output to "Acquisition with Automatic.........."
					that.downArrow(canvas,data,1115,710)
					that.rect(canvas,data,1040,710,150,100,22)				// Acquisition with Automatic Offsetting Entry (AB01/ABSO
					that.text(canvas,data,1050,740,130,80,22)
					that.rect(canvas,data,1220,260,150,100,23)				// Goods Receipt Creation (MIGO)
					that.text(canvas,data,1230,290,130,80,23)
					that.line(canvas,data,1370,310,1430,310)
					that.line(canvas,data,1430,280,1430,760)
					that.line(canvas,data,1430,760,1190,760)
					that.upArrow(canvas,data,1430,530)
					that.line(canvas,data,1430,280,1520,280)					// output to column 5 "Balance Sheet Revaluation(ABAW)"
					that.leftArrow(canvas,data,1520,280)
					that.line(canvas,data,1430,380,1520,380)					// output to column 5 "Post New Valuation (ABAWN)"
					that.leftArrow(canvas,data,1520,380)
					that.line(canvas,data,1430,500,1520,500)					// output to column 5 " Miscellaneous Posting (ABSO)"
					that.leftArrow(canvas,data,1520,500)
					that.line(canvas,data,1430,650,1700,650)
					that.line(canvas,data,1700,650,1700,280)
					that.line(canvas,data,1700,280,1670,280)
					that.line(canvas,data,1700,380,1670,380)
					that.line(canvas,data,1700,500,1670,500)
					that.line(canvas,data,1700,320,1720,320)					// output to column 6 " Internal Order Settlement(KO88)"
					that.leftArrow(canvas,data,1720,320)
					that.rect(canvas,data,1220,380,150,100,24)				// Ariba Goods Receipt Creation
					that.text(canvas,data,1230,410,130,80,24)
//********************** column 5 ******************************************************************//	
					that.pentagon(canvas,data,1520,60,1670,1680,80,100,25)	// ECC
					that.text(canvas,data,1580,80,100,40,25)
					that.rect(canvas,data,1520,120,150,70,26)				// Revaluation
					that.text(canvas,data,1560,150,120,50,26)
					that.rect(canvas,data,1520,210,150,100,27)				// Balance Sheet Revaluation(ABAW)
					that.text(canvas,data,1530,240,130,80,27)
					that.rect(canvas,data,1520,330,150,100,28)				// Post New Valuation (ABAWN)
					that.text(canvas,data,1530,360,130,80,28)
					that.rect(canvas,data,1520,450,150,100,29)				// Miscellaneous Posting (ABSO)
					that.text(canvas,data,1530,480,130,80,29)
//********************** column 6 ******************************************************************//
					that.pentagon(canvas,data,1720,120,2040,2050,140,160,30)	// ECC
					that.text(canvas,data,1880,140,100,40,30)
					that.pentagon(canvas,data,2060,120,2100,2110,140,160,31)	// PI
					that.text(canvas,data,2070,140,40,40,31)
					that.text(canvas,data,2160,140,100,40,32)
					that.rect(canvas,data,1720,180,520,70,33)				// Settlement
					that.text(canvas,data,1900,210,500,50,33)
					that.rect(canvas,data,1720,270,150,100,34)				// Internal Order Settlement(KO88)
					that.text(canvas,data,1730,300,130,80,34)
					that.line(canvas,data,1870,320,1900,320)					// output to "Final Asset/ Close AuC"
					that.leftArrow(canvas,data,1900,320)
					that.rect(canvas,data,1900,270,150,100,35)				// Final Asset/ Close AuC
					that.text(canvas,data,1910,300,130,80,35)
					that.line(canvas,data,2050,320,2080,320)					// output to "New Asset Created sent to ARIBA"
					that.leftArrow(canvas,data,2080,320)
					that.rect(canvas,data,2080,270,150,100,36)				// New Asset Created sent to ARIBA
					that.text(canvas,data,2090,300,130,80,36)
//********************** column 7 ******************************************************************//
					that.pentagon(canvas,data,2280,120,2600,2610,140,160,37)	// ECC
					that.text(canvas,data,2420,140,300,40,37)
					that.rect(canvas,data,2280,180,150,70,38)				// Asset Transfer
					that.text(canvas,data,2300,200,130,50,38)
					that.line(canvas,data,2430,215,2450,215)					// output to "Asset Retirement/Scrapping"
					that.leftArrow(canvas,data,2450,215)
					that.rect(canvas,data,2280,270,150,100,39)				// Asset Transfer (ABUMN)
					that.text(canvas,data,2290,300,130,80,39)
					that.rect(canvas,data,2450,180,150,70,40)				// Asset Retirement/Scrapping
					that.text(canvas,data,2460,200,130,50,40)
					that.rect(canvas,data,2450,270,150,100,41)				// With Revenue (F-92/ABAON)
					that.text(canvas,data,2460,300,130,80,41)
					that.rect(canvas,data,2450,390,150,100,42)				// Without Revenue (ABAVN)
					that.text(canvas,data,2460,420,130,80,42)
//********************** column 8 ******************************************************************//
					that.pentagon(canvas,data,2640,120,3520,3530,140,160,43)	// ECC
					that.text(canvas,data,3030,140,800,40,43)
					that.pentagon(canvas,data,3570,120,3730,3740,140,160,44)	// TRINTECH
					that.text(canvas,data,3620,140,200,40,44)
					that.rect(canvas,data,2640,180,1100,70,45)				// Periodic Processing
					that.text(canvas,data,3100,210,1000,50,45)
					that.rect(canvas,data,2640,270,150,100,46)				// Asset Depreciation Run - Periodic Posting (ASKBN)
					that.text(canvas,data,2650,300,130,80,46)
					that.rect(canvas,data,2810,270,150,100,47)				// Asset Depreciation Run (AFAB)
					that.text(canvas,data,2820,300,130,80,47)
					that.rect(canvas,data,2980,270,150,100,48)				// Fiscal Year Change (AJRW)
					that.text(canvas,data,2990,300,130,80,48)
					that.rect(canvas,data,3150,270,150,100,49)				// Capital Closing (AJAB)
					that.text(canvas,data,3160,300,130,80,49)
					that.rect(canvas,data,3320,270,200,200,50)				// ASSET REPORTING S_ALR_87011963 - Asset Bala........."
					that.text(canvas,data,3330,300,180,120,50)
					that.rect(canvas,data,3570,270,150,100,51)				// Asset Subledger is sent to Trintech
					that.text(canvas,data,3580,300,130,80,51)
					that.rect(canvas,data,2900,390,150,100,52)				// Write-Up (ABZU)
					that.text(canvas,data,2910,420,130,80,52)
	return canvas;
	}  , 1000 );
	
	},
	
	/*===========OTC start==========*/
	  sotc_1_stdSalesOrder : function(x) {//SOTC_1

	      var model = this.uisCodeCheck("SOTC_1"); //SOTC_1
	      var data = sap.ui.getCore().getModel("bindingModel").oData;
	      x.getView().getModel("oModelHeader").oData.header="OTC Standard SalesOrder Process v6";
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
	    that.rect(canvas,data,10,10,400,40,0)//ECC**
	    that.text(canvas,data,200,35,400,40,0)//ECC**
	    that.rect(canvas,data,430,10,150,40,4)//OTM
	    that.text(canvas,data,490,35,150,40,4)//OTM
	    that.rect(canvas,data,600,10,300,40,8)//ECC second
	    that.text(canvas,data,740,35,300,40,8)//ECC second
	    that.rect(canvas,data,920,10,150,40,16)//OTM second
	    that.text(canvas,data,980,35,150,40,16)//OTM second
	    that.rect(canvas,data,1090,10,130,40,20)//ECC third
	    that.text(canvas,data,1140,35,130,40,20)//ECC third
	    that.rect(canvas,data,1240,10,130,40,24)//Compudata
	    that.text(canvas,data,1270,35,130,40,24)//Compudata
	    that.rect(canvas,data,1390,10,260,40,27)//ECC fourth
	    that.text(canvas,data,1500,35,260,40,27)//ECC fourth
	    //second line
	    that.rect(canvas,data,10,70,400,40,1)//ECC Standard Sales Order Process
	    that.text(canvas,data,120,95,400,40,1)//ECC Standard Sales Order Process
	    that.rect(canvas,data,430,70,150,40,5)//Interface Delivery to OTM
	    that.text(canvas,data,435,95,150,40,5)//Interface Delivery to OTM
	    that.rect(canvas,data,600,70,140,40,9)//OTM Shipment Interface
	    that.text(canvas,data,605,95,140,40,9)//OTM Shipment Interface
	    that.rect(canvas,data,760,70,140,40,12)//ECC Receiving Process
	    that.text(canvas,data,765,95,140,40,12)//ECC Receiving Process
	    that.rect(canvas,data,920,70,150,40,17)//Interface Actuals idoc to OTM
	    that.text(canvas,data,925,85,150,40,17)//Interface Actuals idoc to OTM
	    that.rect(canvas,data,1090,70,130,40,21)//USCC Billing
	    that.text(canvas,data,1120,95,130,40,21)//USCC Billing
	    that.rect(canvas,data,1240,70,130,40,25)//Interface Billing Idoc to Compudata
	    that.text(canvas,data,1245,85,130,40,25)//Interface Billing Idoc to Compudata
	    that.rect(canvas,data,1390,70,120,40,28)//MSO Billing
	    that.text(canvas,data,1415,95,120,40,28)//MSO Billing
	    that.rect(canvas,data,1530,70,120,40,31)//USCC Billing
	    that.text(canvas,data,1550,95,120,40,31)//USCC Billing
	    //tasks
	    that.rect(canvas,data,20,130,200,90,2)//Sales Order creation (ZA0) VA01 /Inbound Idoc manual /auto- materialdet.- product alloc- credit mgt- stockavail check
	    that.text(canvas,data,25,150,200,90,2)//Sales Order creation (ZA0) VA01 /Inbound Idoc manual /auto- materialdet.- product alloc- credit mgt- stockavail check
	    that.line(canvas,data,220,160,300,160)// from Sales Order creation (ZA0) VA01 etc to Outbound Delivery creation(manual/job)
	    that.leftArrow(canvas,data,300,160)
	    that.rect(canvas,data,300,130,110,70,3)//Outbound Delivery creation(manual/job)
	    that.text(canvas,data,305,145,110,70,3)//Outbound Delivery creation(manual/job)
	    that.line(canvas,data,410,160,460,160)//from Outbound Delivery creation(manual/job) to Delivery sent to OTM (ZETM/TPSDLS)
	    that.leftArrow(canvas,data,460,160)
	    that.line(canvas,data,400,200,400,240)// from Outbound Deliverycreation(manual/job) to Delivery instruction Z003 (WMS190 /I003)
	    that.downArrow(canvas,data,400,240)
	    that.rect(canvas,data,460,130,110,70,6)//Delivery sent to OTM (ZETM/TPSDLS)
	    that.text(canvas,data,465,145,110,70,6)//Delivery sent to OTM (ZETM/TPSDLS)
	    that.rect(canvas,data,380,240,110,70,7)//Delivery instruction Z003 (WMS190 /I003)
	    that.text(canvas,data,385,255,110,70,7)//Delivery instruction Z003 (WMS190 /I003)
	    that.rect(canvas,data,600,130,120,70,10)//Shipment created in ECC(SHIPPL)
	    that.text(canvas,data,605,145,120,70,10)//Shipment created in ECC(SHIPPL)
	    that.line(canvas,data,670,200,670,240)//from Shipment created in ECC(SHIPPL) to Shipment Update to ECC(SHIPPL)
	    that.downArrow(canvas,data,670,240)
	    that.rect(canvas,data,630,240,120,70,11)//Shipment Update to ECC(SHIPPL)
	    that.text(canvas,data,635,255,120,70,11)//Shipment Update to ECC(SHIPPL)
	    that.rect(canvas,data,770,130,120,40,13)//Goods Issue  (WMS200/I006)
	    that.text(canvas,data,775,145,120,40,13)//Goods Issue  (WMS200/I006)
	    that.rect(canvas,data,770,190,120,40,14)//Trigger ZACT output
	    that.text(canvas,data,775,210,120,40,14)//Trigger ZACT output
	    that.line(canvas,data,890,210,930,210)//from Trigger ZACT output to Actuals Idoc sent toOTM (ZSH3)
	    that.leftArrow(canvas,data,930,210)
	    that.rect(canvas,data,770,250,120,40,15)//Creation of On-time Idoc
	    that.text(canvas,data,775,265,120,40,15)//Creation of On-time Idoc
	    that.line(canvas,data,890,270,930,270)//from Creation of On-time Idoc to On-time Idoc sent to OTM
	    that.leftArrow(canvas,data,930,270)//
	    that.rect(canvas,data,930,190,120,40,18)//Actuals Idoc sent to OTM(ZSH3)
	    that.text(canvas,data,935,205,120,40,18)//Actuals Idoc sent to OTM(ZSH3)
	    that.rect(canvas,data,930,250,120,40,19)//On-time Idoc sent to OTM
	    that.text(canvas,data,935,265,120,40,19)//On-time Idoc sent to OTM
	    that.rect(canvas,data,1090,130,130,70,22)//USCC creates Intercompany Billing IV
	    that.text(canvas,data,1095,155,130,70,22)//USCC creates Intercompany Billing IV
	    that.line(canvas,data,1150,200,1150,220)//from USCC createsIntercompany Billing IV to Fin. Invoice (AccountReceivable)
	    that.downArrow(canvas,data,1150,220)
	    that.rect(canvas,data,1090,220,130,70,23)//Fin. Invoice (Account Receivable)
	    that.text(canvas,data,1095,245,130,70,23)//Fin. Invoice (Account Receivable)
	    that.rect(canvas,data,1240,130,130,70,26)//Billing sent to Compudata(ZRD5) INVOIC IDOC
	    that.text(canvas,data,1245,150,130,70,26)//Billing sent to Compudata(ZRD5) INVOIC IDOC
	    that.line(canvas,data,1370,160,1390,160)//from Billing sent to Compudata(ZRD5) INVOIC IDOC to MSO receives ZRD5from Compudata
	    that.leftArrow(canvas,data,1390,160)
	    that.rect(canvas,data,1390,130,120,70,29)//MSO receives ZRD5 from Compudata
	    that.text(canvas,data,1395,150,120,70,29)//MSO receives ZRD5 from Compudata
	    that.line(canvas,data,1440,200,1440,240)//from MSO receives ZRD5 from Compudata to Fin. Invoice(AccountsPayable)
	    that.downArrow(canvas,data,1440,240)
	    that.rect(canvas,data,1390,240,110,70,30)//Fin. Invoice (Accounts Payable)
	    that.text(canvas,data,1395,255,100,70,30)//Fin. Invoice (Accounts Payable)
	    that.line(canvas,data,1500,275,1540,275)//from Fin. Invoice(AccountsPayable) to Receive IncomingPayment
	    that.leftArrow(canvas,data,1540,275)
	    that.rect(canvas,data,1540,240,110,70,32)//Receive Incoming Payment
	  that.text(canvas,data,1545,255,110,70,32)//Receive Incoming Payment

	  return canvas;
	  }  , 1000 );
	  },


	  sotc_2_salesDealProcess :function(x){//SOTC_2
	            var model = this.uisCodeCheck("SOTC_2");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Sales Deal Extension";
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
	      that.rect(canvas,data,10,10,430,40,0)//ECC
	      that.text(canvas,data,220,35,430,40,0)//ECC
	      that.rect(canvas,data,460,10,190,40,8)//External System
	      that.text(canvas,data,510,35,190,40,8)//External System
	      that.rect(canvas,data,670,10,1065,40,11)//ECC second
	      that.text(canvas,data,1175,35,1065,40,11)//ECC second
	      that.rect(canvas,data,1755,10,150,40,24)//External System second
	      that.text(canvas,data,1785,35,150,40,24)//External System second



	      //second line
	      that.rect(canvas,data,10,70,250,40,1)//ECC Sales Deal Process
	      that.text(canvas,data,60,95,250,40,1)//ECC Sales Deal Process
	      that.rect(canvas,data,280,70,160,40,6)//PI
	      that.text(canvas,data,350,95,160,40,6)//PI
	      that.rect(canvas,data,460,70,190,40,9)//CMP/OPSO/TPME/Visual Fabriq
	      that.text(canvas,data,470,95,190,40,9)//CMP/OPSO/TPME/Visual Fabriq
	      that.rect(canvas,data,670,70,160,40,12)//PI second
	      that.text(canvas,data,740,95,160,40,12)//PI second
	      that.rect(canvas,data,850,70,885,40,14)//ECC OTC - Sales Deal Process
	      that.text(canvas,data,1200,95,885,40,14)//ECC OTC - Sales Deal Process
	      that.rect(canvas,data,1755,70,150,40,25)//CMP/OPSO/TPME/Visual Fabriq
	      that.text(canvas,data,1760,87,150,40,25)//CMP/OPSO/TPME/Visual Fabriq


	      //tasks
	      that.rect(canvas,data,10,130,195,50,2)//Product (Material) Master Data Message type: Z2_MATMAS_GEN IDOC
	      that.text(canvas,data,15,145,195,50,2)//Product (Material) Master Data Message type: Z2_MATMAS_GEN IDOC
	      that.line(canvas,data,205,150,300,275)//from Product (Material) Master Data Message type: Z2_MATMAS_GEN IDOC to Outbound Idoc
	      that.rect(canvas,data,10,200,195,50,3)//Customer Master Data Message type: Z2SDDEBMASZ001
	      that.text(canvas,data,15,215,195,50,3)//Customer Master Data Message type: Z2SDDEBMASZ001
	      that.line(canvas,data,205,220,300,275)//from Customer Master Data Message type: Z2SDDEBMASZ001 to Outbound Idoc
	      that.rect(canvas,data,10,270,195,50,4)//Sales BOM (Z2SBAPO) Message type: Z1_GENERIC_MESTYPE
	      that.text(canvas,data,15,285,150,50,4)//Sales BOM (Z2SBAPO) Message type: Z1_GENERIC_MESTYPE
	      that.line(canvas,data,205,290,300,275)//from Sales BOM (Z2SBAPO) Message type: Z1_GENERIC_MESTYPE to Outbound Idoc
	      that.rect(canvas,data,10,340,195,50,5)//Pricing Condition Message type: COND_A
	      that.text(canvas,data,15,355,120,50,5)//Pricing Condition Message type: COND_A
	      that.line(canvas,data,205,360,300,275)//from Pricing Condition Message type: COND_A to Outbound Idoc
	      that.leftArrow(canvas,data,301,275)//combining all 4 green boxes
	      that.leftArrow(canvas,data,302,274)
	      that.rect(canvas,data,300,240,130,65,7)//Outbound Idoc
	      that.text(canvas,data,320,275,130,65,7)//Outbound Idoc
	      that.line(canvas,data,430,275,480,275)//from Outbound Idoc to Data Pereparation to be sent to ECC . (ex. TU EAN and Product hierarchies 1-3, Promotion Id)
	      that.leftArrow(canvas,data,480,275)
	      that.rect(canvas,data,480,240,155,65,10)//Data Pereparation to be sent to ECC . (ex. TU EAN and Product hierarchies 1-3, Promotion Id)
	      that.text(canvas,data,485,255,155,65,10)//Data Pereparation to be sent to ECC . (ex. TU EAN and Product hierarchies 1-3, Promotion Id)
	      that.line(canvas,data,635,275,680,275)//from Data Pereparation to be sent to ECC . (ex. TU EAN and Product hierarchies 1-3, Promotion Id) to XML Messages
	      that.leftArrow(canvas,data,680,275)
	      that.rect(canvas,data,680,240,130,65,13)//XML Messages
	      that.text(canvas,data,700,275,130,65,13)//XML Messages
	      that.line(canvas,data,810,275,890,275)//from XML messages to Incoming Idoc Validation
	      that.leftArrow(canvas,data,890,275)
	      that.rect(canvas,data,870,130,190,65,15)//Condition Types  and Control table configured in the system(Z2CRM_Control/ ZS2CS_OPSO_CONTR )
	      that.text(canvas,data,875,145,190,65,15)//Condition Types  and Control table configured in the system(Z2CRM_Control/ ZS2CS_OPSO_CONTR )
	      that.rect(canvas,data,890,240,130,65,16)//Incoming Idoc Validation
	      that.text(canvas,data,910,270,100,65,16)//Incoming Idoc Validation
	      that.line(canvas,data,1020,275,1340,275)//from Incoming Idoc Validation to Sales Deal CreationVB21 / Inbound Ido
	      that.leftArrow(canvas,data,1340,275)
	      that.line(canvas,data,1080,275,1080,160)//vertical line upwards from Incoming Idoc Validation
	      that.line(canvas,data,1080,160,1140,160)//from vertical line to Delete ConditionRecord
	      that.leftArrow(canvas,data,1140,160)
	      that.line(canvas,data,1080,275,1080,380)//vertical downwards from Incoming Idoc Validation
	      that.line(canvas,data,1080,380,1140,380)//horizontal line connecting to Sales BOM Processing
	      that.leftArrow(canvas,data,1140,380)
	      that.line(canvas,data,1080,380,1080,510)//extending vertical line from Incoming Idoc Validation
	      that.line(canvas,data,1080,510,1140,510)//horizontal line connecting Promotion Log Report(Z2CRM_PROMOTION_LOG
	      that.leftArrow(canvas,data,1140,510)
	      that.line(canvas,data,955,240,955,195)//from Incoming Idoc Validation to Condition Types  and Control table configured in the system(Z2CRM_Control/ ZS2CS_OPSO_CONTR )
	      that.upArrow(canvas,data,955,195)
	      that.rect(canvas,data,1140,350,75,50,17)//Sales BOM Processing
	      that.text(canvas,data,1147,365,75,50,17)//Sales BOM Processing
	      that.line(canvas,data,1215,380,1340,380)//from Sales BOM Processing to Condition Record Created
	      that.leftArrow(canvas,data,1340,380)
	      that.rect(canvas,data,1140,480,170,50,18)//Promotion Log Report(Z2CRM_PROMOTION_LOG)
	      that.text(canvas,data,1145,495,170,50,18)//Promotion Log Report(Z2CRM_PROMOTION_LOG)
	      that.line(canvas,data,1310,510,1775,510)//from Promotion Log Report(Z2CRM_PROMOTION_LOG) to Email received containing Promotion Log Report
	      that.leftArrow(canvas,data,1775,510)
	      that.rect(canvas,data,1140,130,120,50,19)//Delete Condition Records
	      that.text(canvas,data,1145,145,120,50,19)//Delete Condition Records
	      that.line(canvas,data,1260,160,1340,160)//from Delete Condition Records to Update ConditionRecord in Sales Deal
	      that.leftArrow(canvas,data,1340,160)
	      that.rect(canvas,data,1340,130,120,50,20)//Update Condition Record in  Sales Deal
	      that.text(canvas,data,1345,145,120,50,20)//Update Condition Record in  Sales Deal
	      that.rect(canvas,data,1340,250,120,50,21)//Sales Deal CreationVB21 / Inbound Idoc
	      that.text(canvas,data,1345,265,120,50,21)//Sales Deal CreationVB21 / Inbound Idoc
	      that.line(canvas,data,1460,275,1550,275)//from Sales Deal CreationVB21 / Inbound Idoc to Sales Order Creation with Condition Record determined from Sales Deal
	      that.leftArrow(canvas,data, 1550,275)//
	      that.rect(canvas,data,1340,350,120,50,22)//Condition Record Created
	      that.text(canvas,data,1345,365,120,50,22)//Condition Record Created
	      that.line(canvas,data,1400,350,1400,300)//from Condition Record Created to Sales Deal Creation VB21 / Inbound Idoc
	      that.upArrow(canvas,data,1400,300)
	      that.rect(canvas,data,1550,240,165,70,23)//Sales Order Creation with Condition Record determined from Sales Deal
	      that.text(canvas,data,1555,255,165,70,23)//Sales Order Creation with Condition Record determined from Sales Deal
	      that.rect(canvas,data,1775,480,120,50,26)//Email received containing Promotion Log Report
	      that.text(canvas,data,1780,495,120,50,26)//Email received containing Promotion Log Report



	          return canvas;
	  }  , 1000 );
	  },


	  sotc_3_msoBillingCreation :function(x){//SOTC_3
	            var model = this.uisCodeCheck("SOTC_3");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Sundry Sales Process v5";
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
	      that.rect(canvas,data,20,10,600,40,0)//ECC**
	      that.text(canvas,data,290,35,600,40,0)//ECC**


	      //second line
	      that.rect(canvas,data,20,70,180,40,1)//ECC Sundry Sales OrderProcess**
	      that.text(canvas,data,30,85,180,40,1)//ECC Sundry Sales OrderProcess**
	      that.rect(canvas,data,240,70,180,40,3)//MSO Billing**
	      that.text(canvas,data,295,95,180,40,3)//MSO Billing**



	      //tasks
	      that.rect(canvas,data,20,130,120,70,2)//Sales Order creationby MSO VA01ZSO /ZVOC / ZVOD**
	      that.text(canvas,data,25,145,120,70,2)//Sales Order creationby MSO VA01ZSO /ZVOC / ZVOD**
	      that.line(canvas,data,140,160,250,160)//from Sales Order creationby MSO VA01ZSO /ZVOC / ZVOD to Creation of Billing ZSF2 / ZCG2 / ZDL2
	      that.leftArrow(canvas,data,250,160)//from Sales Order creationby MSO VA01ZSO /ZVOC / ZVOD to Creation of Billing ZSF2 / ZCG2 / ZDL2
	      that.rect(canvas,data,250,130,120,70,4)//Creation of Billing ZSF2 / ZCG2 / ZDL2**
	      that.text(canvas,data,255,145,120,70,4)//Creation of Billing ZSF2 / ZCG2 / ZDL2**
	      that.line(canvas,data,370,160,490,160)//from Creation of Billing ZSF2 / ZCG2 / ZDL2 to Posting to Accounting
	      that.leftArrow(canvas,data,490,160)//from Creation of Billing ZSF2 / ZCG2 / ZDL2 to Posting to Accounting
	      that.rect(canvas,data,490,130,125,70,5)//Posting to Accounting**
	      that.text(canvas,data,495,145,125,70,5)//Posting to Accounting**

	              return canvas;
	              }  , 1000 );

	  },
	  sotc_4_billingOutputProcessing :function(x){//SOTC_4
	            var model = this.uisCodeCheck("SOTC_4");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Billing Output Determination";
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
	      that.rect(canvas,data,10,10,1180,40,0)//ECC**
	      that.text(canvas,data,290,35,1180,40,0)//ECC**




	      //second line
	      that.rect(canvas,data,10,70,140,40,1)//Creation of Billing output condition record
	      that.text(canvas,data,15,85,140,40,1)//Creation of Billing output condition record
	      that.rect(canvas,data,200,70,140,40,2)//Invoice Creation
	      that.text(canvas,data,225,90,140,40,2)//Invoice Creation
	      that.rect(canvas,data,380,70,530,40,6)//Billing Output Determination
	      that.text(canvas,data,550,90,530,40,6)//Billing Output Determination
	      that.rect(canvas,data,950,70,230,40,9)//Transmission Medium
	      that.text(canvas,data,1005,90,230,40,9)//Transmission Medium





	      //tasks
	      that.rect(canvas,data,200,130,140,70,3)//Manual Invoice Creation(VF01)
	      that.text(canvas,data,205,145,140,70,3)//Manual Invoice Creation(VF01)
	      that.line(canvas,data,200,160,170,160)//horizontal line towards left from Manual Invoice Creation(VF01)
	      that.line(canvas,data,170,160,170,255)//vertical line downwards from Manual Invoice Creation(VF01)
	      that.line(canvas,data,340,160,360,160)//horizontal line towards right from Manual Invoice Creation(VF01)
	      that.line(canvas,data,360,160,360,255)//vertical line downwards from Manual Invoice Creation(VF01)
	      that.rect(canvas,data,200,220,140,70,4)//Invoice Creation via Job
	      that.text(canvas,data,205,235,140,70,4)//Invoice Creation via Job
	      that.line(canvas,data,340,255,380,255)//from Invoice Creation via Job to If the access seq etc....
	      that.leftArrow(canvas,data,380,255)
	      that.rect(canvas,data,10,220,140,70,5)//Billing Output Condition Record Creation  (VV31)
	      that.text(canvas,data,15,235,140,70,5)//Billing Output Condition Record Creation(VV31)
	      that.line(canvas,data,150,255,200,255)//from Billing Output Condition Record Creation(VV31) to Invoice Creation via Job
	      that.leftArrow(canvas,data,200,255)
	      that.rect(canvas,data,380,210,225,130,7)//If the access sequence(key combination) has been satisfied for a sepecific output type, etc.... this could be checked inside the invoice(tcode:VF02/VF03)>Go to Menu>Header>Output
	      that.text(canvas,data,385,235,225,130,7)//If the access sequence(key combination) has been satisfied for a sepecific output type, etc.... this could be checked inside the invoice(tcode:VF02/VF03)>Go to Menu>Header>Output
	      that.line(canvas,data,605,255,675,255)// from IF the access seq etc... to output type created etc...
	      that.leftArrow(canvas,data,675,255)
	      that.rect(canvas,data,675,210,225,130,8)//Output type created could either be processed automatically during saving or needs a job to be triggered according to the despatch time maintained in the condition record
	      that.text(canvas,data,680,235,225,130,8)
	      that.line(canvas,data,900,270,1050,170)//from output type created etc. to EDI
	      that.slantArrow1(canvas,data,1050,170)
	      that.line(canvas,data,900,270,1050,208)//from output type created etc. to PDF
	      that.slantArrow1(canvas,data,1050,208)
	      that.line(canvas,data,900,270,1050,250)//from output type created etc. to Simple Mail
	      that.leftArrow(canvas,data,1050,250)
	      that.line(canvas,data,900,270,1050,280)//from output type created etc. to Special Function
	      that.leftArrow(canvas,data,1050,280)
	      that.line(canvas,data,900,270,1050,321)//from output type created etc. to Events
	      that.slantArrow2(canvas,data,1050,321)
	      that.line(canvas,data,900,270,1050,350)//from output type created etc. to Print Output
	      that.slantArrow2(canvas,data,1050,350)
	      that.rect(canvas,data,1050,160,100,25,10)//EDI
	      that.text(canvas,data,1090,175,100,25,10)
	      that.rect(canvas,data,1050,195,100,25,11)//PDF
	      that.text(canvas,data,1090,210,100,25,11)
	      that.rect(canvas,data,1050,235,100,25,12)//Simple Mail
	      that.text(canvas,data,1070,250,100,25,12)//Simple Mail
	      that.rect(canvas,data,1050,270,100,25,13)//Special Function
	      that.text(canvas,data,1055,285,100,25,13)//Special Function
	      that.rect(canvas,data,1050,305,100,25,14)//Events
	      that.text(canvas,data,1085,320,100,25,14)//Events
	      that.rect(canvas,data,1050,340,100,25,15)//Print Output
	      that.text(canvas,data,1070,355,100,25,15)//Print Output


	              return canvas;
	              }  , 1000 );

	  },

	  sotc_5_oninvoicePricingMaintenance :function(x){//SOTC_5
	            var model = this.uisCodeCheck("SOTC_5");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC On-Invoice Pricing Maintenance v2";
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
	              that.rect(canvas,data,50,10,950,40,0)//ECC
	              that.text(canvas,data,500,35,950,40,0)//ECC


	              //second line
	              that.rect(canvas,data,50,70,165,40,1)//Creation of Condition Record
	              that.text(canvas,data,55,90,165,40,1)//Creation of Condition Record
	              that.rect(canvas,data,235,70,765,40,3)//ECC Standard Sales Order Process
	              that.text(canvas,data,500,90,765,40,3)//ECC Standard Sales Order Process



	              //tasks
	              that.rect(canvas,data,60,130,150,90,2)//Creation of Condition Record for the On-Invoice Condition Types either in VK11 or mass upload via Z2CMT3480 thru excel
	              that.text(canvas,data,65,145,145,90,2)//Creation of Condition Record for the On-Invoice Condition Types either in VK11 or mass upload via Z2CMT3480 thru excel
	              that.rect(canvas,data,235,130,150,60,4)//Creation of Order either via EDI or VA01
	              that.text(canvas,data,240,145,150,60,4)//Creation of Order either via EDI or VA01
	              that.dottedLine(canvas,data,385,155,450,155)//from Creation of Order either via EDI or VA01 to Manual or Automatic Repricing of Sales Orders
	              that.leftArrow(canvas,data,450,155)
	              that.rect(canvas,data,450,130,150,60,5)//Manual or Automatic Repricing of Sales Orders
	              that.text(canvas,data,455,145,150,60,5)//Manual or Automatic Repricing of Sales Orders
	              that.dottedLine(canvas,data,600,155,650,155)//from Manual or Automatic Repricing of Sales Orders to Delivery, picking & PGI
	              that.leftArrow(canvas,data,650,155)
	              that.rect(canvas,data,650,130,150,60,6)//Delivery, picking & PGI
	              that.text(canvas,data,655,145,150,60,6)//Delivery, picking & PGI
	              that.line(canvas,data,800,155,850,155)//from Delivery, picking & PGI to Standard Invoice creation where you can see again the On-Invoice Condition Types
	              that.leftArrow(canvas,data,850,155)
	              that.rect(canvas,data,850,130,150,60,7)//Standard Invoice creation where you can see again the On-Invoice Condition Types
	              that.text(canvas,data,855,145,150,60,7)//Standard Invoice creation where you can see again the On-Invoice Condition Types




	              return canvas;
	              }  , 1000 );

	  },
	  sotc_6_operational_Sales_Reporting:function(x){//SOTC_6
	            var model = this.uisCodeCheck("SOTC_6");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Operational Sales Reporting v3";
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
	              that.rect(canvas,data,10,10,1140,40,0)//ECC
	              that.text(canvas,data,550,35,1000,40,0)//ECC
	              that.rect(canvas,data,10,400,1140,40,10)//second ECC
	              that.text(canvas,data,550,425,1000,40,10)//second ECC


	              //second line
	              that.rect(canvas,data,10,70,1140,40,1)//Open Orders Report
	              that.text(canvas,data,515,90,1000,40,1)//Open Orders Report
	              that.rect(canvas,data,10,460,1140,40,11)//Order Tuning Report
	              that.text(canvas,data,515,480,1000,40,11)//Order Tuning Report



	              //tasks
	              that.rect(canvas,data,10,130,100,80,2)//Z2ORDEROPEN Open Orders
	              that.text(canvas,data,15,145,90,80,2)//Z2ORDEROPEN Open Orders
	              that.line(canvas,data,110,165,160,165)//from Z2ORDEROPEN Open Orders to Execute report based on parameters in the selection screen of the report.Execution can be via job or manual run.
	              that.leftArrow(canvas,data,160,165)
	              that.rect(canvas,data,160,130,200,80,3)//Execute report based on parameters in the selection screen of the report.Execution can be via job or manual run.
	              that.text(canvas,data,165,145,190,80,3)//Execute report based on parameters in the selection screen of the report.Execution can be via job or manual run.
	              that.line(canvas,data,360,165,410,165)//from execute report "-" to data will be retrieved "-"
	              that.leftArrow(canvas,data,410,165)
	              that.rect(canvas,data,410,130,200,80,4)//Data will be retrieved based on the selection criteria Retrieve the subsequent documents if available (delivery, invoice)
	              that.text(canvas,data,415,145,190,80,4)//Data will be retrieved based on the selection criteria Retrieve the subsequent documents if available (delivery, invoice)
	              that.line(canvas,data,610,165,660,165)//from data will be retrieved "-" to aLV report output
	              that.leftArrow(canvas,data,660,165)
	              that.rect(canvas,data,660,130,100,80,5)//ALV Report Output
	              that.text(canvas,data,665,145,100,80,5)//ALV Report Output
	              that.line(canvas,data,760,165,810,165)//from alv report o/p to sales orders
	              that.leftArrow(canvas,data,810,165)
	              that.rect(canvas,data,810,130,100,80,6)//Sales Orders
	              that.text(canvas,data,815,145,100,80,6)//Sales Orders
	              that.line(canvas,data,910,165,1000,165)//from salesorders to VA02Sales Order Change
	              that.leftArrow(canvas,data,1000,165)
	              that.line(canvas,data,930,165,930,290)//vertical line downwards from salesorders
	              that.line(canvas,data,930,230,1000,230)//horizontal line connecting to VL02N Outbound Delivery Change
	              that.leftArrow(canvas,data,1000,230)
	              that.line(canvas,data,930,290,1000,290)//horizontal line connecting to VF02 Billing Document Change
	              that.leftArrow(canvas,data,1000,290)
	              that.rect(canvas,data,1000,150,150,40,7)//VA02Sales Order Change
	              that.text(canvas,data,1005,165,150,40,7)//VA02Sales Order Change
	              that.rect(canvas,data,1000,210,150,40,8)//VL02N Outbound Delivery Change
	              that.text(canvas,data,1005,225,150,40,8)//VL02N Outbound Delivery Change
	              that.rect(canvas,data,1000,270,150,40,9)//VF02 Billing Document Change
	              that.text(canvas,data,1005,285,150,40,9)//VF02 Billing Document Change

	              //tasks of second part

	              that.rect(canvas,data,10,520,130,75,12)//Z2ORDERTUNING or Z2ORDERTUNING_V2 Order Tuning Report
	              that.text(canvas,data,13,535,110,75,12)//Z2ORDERTUNING or Z2ORDERTUNING_V2 Order Tuning Report
	              that.line(canvas,data,140,560,170,560)//from Z2ORDERTUNING or Z2ORDERTUNING_V2 "-" to Execute report based on parameters "-"
	              that.leftArrow(canvas,data,170,560)
	              that.rect(canvas,data,170,520,160,75,13)//Execute report based on parameters in the selection screen of the report.Execution can be via job or manual run.
	              that.text(canvas,data,175,535,150,75,13)//Execute report based on parameters in the selection screen of the report.Execution can be via job or manual run.
	              that.line(canvas,data,330,560,360,560)//from Execute report based on parameters "-" to Data will be retrieved "-"
	              that.leftArrow(canvas,data,360,560)
	              that.rect(canvas,data,360,520,150,75,14)//Data will be retrieved based on the selection criteria(Sales orders or Purchase orders)
	              that.text(canvas,data,365,535,140,75,14)//Data will be retrieved based on the selection criteria(Sales orders or Purchase orders)
	              that.line(canvas,data,510,560,540,560)//from Data will be retrieved "-" to ALV report output
	              that.leftArrow(canvas,data,540,560)
	              that.rect(canvas,data,540,520,100,75,15)//ALV Report Output
	              that.text(canvas,data,545,535,100,75,15)//ALV Report Output
	              that.line(canvas,data,640,560,670,560)//from alv report o/p to sales orders
	              that.leftArrow(canvas,data,670,560)
	              that.rect(canvas,data,670,520,100,75,16)//Sales Orders
	              that.text(canvas,data,675,535,100,75,16)//Sales Orders
	              that.line(canvas,data,645,560,645,810)//vertical line to connect to purchase order from the arrow inbtwn ALV report o/p and sales orders
	              that.line(canvas,data,645,810,670,810)//horizontal line connectign to purchase order
	              that.leftArrow(canvas,data,670,810)
	              that.line(canvas,data,770,550,1050,550)//sales orders to MD04Stock/Requirements List
	              that.leftArrow(canvas,data,1050,550)
	              that.line(canvas,data,790,550,790,720)//vertical line downwards frm sales orders for 3 boxes
	              that.line(canvas,data,790,600,830,600)//horizontal connecting to VL01N Outbound Delivery Creation
	              that.leftArrow(canvas,data,830,600)
	              that.line(canvas,data,790,660,830,660)//horizontal connectign to VA02 Sales Order Change
	              that.leftArrow(canvas,data,830,660)
	              that.line(canvas,data,790,720,830,720)//horizontal connecting to Z2ORDERSPLIT LargeOrder Split
	              that.leftArrow(canvas,data,830,720)
	              that.line(canvas,data,1000,550,1000,910)//vertical line from sales order for 7 boxes
	              that.line(canvas,data,1000,610,1050,610)//horizontal connecting to VD03 Customer MasterDisplay
	              that.leftArrow(canvas,data,1050,610)
	              that.line(canvas,data,1000,670,1050,670)//horizontal connecting to MM03 Material MasterDisplay
	              that.leftArrow(canvas,data,1050,670)
	              that.line(canvas,data,1000,730,1050,730)//horizontal connecting to Z2OUTSTOCKOut-of-Stock Indicator
	              that.leftArrow(canvas,data,1050,730)
	              that.line(canvas,data,1000,790,1050,790)//horizontal connecting to Z2WMS820 CompanyStock Situation
	              that.leftArrow(canvas,data,1050,790)
	              that.line(canvas,data,1000,850,1050,850)//horizontal connecting to Z2WMS700 Stock AnalysisReport
	              that.leftArrow(canvas,data,1050,850)
	              that.line(canvas,data,1000,910,1050,910)//horizontal connecting to Z2BLK Blocked StockReconciliation Report
	              that.leftArrow(canvas,data,1050,910)
	              that.rect(canvas,data,830,580,150,40,17)//VL01N Outbound Delivery Creation
	              that.text(canvas,data,835,595,150,40,17)//VL01N Outbound Delivery Creation
	              that.rect(canvas,data,830,640,150,40,18)//VA02 Sales Order Change
	              that.text(canvas,data,835,655,150,40,18)//VA02 Sales Order Change
	              that.rect(canvas,data,830,700,150,40,19)//Z2ORDERSPLIT LargeOrder Split
	              that.text(canvas,data,835,715,150,40,19)//Z2ORDERSPLIT LargeOrder Split
	              that.rect(canvas,data,670,770,100,75,20)//Purchase Orders
	              that.text(canvas,data,675,785,100,75,20)//Purchase Orders
	              that.line(canvas,data,770,810,1000,810)//horizontal connectign to the 6 boxes
	              that.line(canvas,data,790,810,790,930)//vertical line from purchase orders
	              that.line(canvas,data,790,870,830,870)//horizontal connectign to  VL10D Purch. Order Itemsdue for Delivery
	              that.leftArrow(canvas,data,830,870)
	              that.line(canvas,data,790,930,830,930)//horizontal connectign to ME22N Purchase OrderChange
	              that.leftArrow(canvas,data,830,930)
	              that.rect(canvas,data,830,850,150,40,21)//VL10D Purch. Order Itemsdue for Delivery
	              that.text(canvas,data,835,865,150,40,21)//VL10D Purch. Order Itemsdue for Delivery
	              that.rect(canvas,data,830,910,150,40,22)//ME22N Purchase OrderChange
	              that.text(canvas,data,835,925,150,40,22)//ME22N Purchase OrderChange
	              that.rect(canvas,data,1050,530,150,40,23)//MD04Stock/Requirements List
	              that.text(canvas,data,1055,545,150,40,23)//MD04Stock/Requirements List
	              that.rect(canvas,data,1050,590,150,40,24)//VD03 Customer MasterDisplay
	              that.text(canvas,data,1055,605,150,40,24)//VD03 Customer MasterDisplay
	              that.rect(canvas,data,1050,650,150,40,25)//MM03 Material MasterDisplay
	              that.text(canvas,data,1055,665,150,40,25)//MM03 Material MasterDisplay
	              that.rect(canvas,data,1050,710,150,40,26)//Z2OUTSTOCKOut-of-Stock Indicator
	              that.text(canvas,data,1055,725,150,40,26)//Z2OUTSTOCKOut-of-Stock Indicator
	              that.rect(canvas,data,1050,770,150,40,27)//Z2WMS820 CompanyStock Situation
	              that.text(canvas,data,1055,785,150,40,27)//Z2WMS820 CompanyStock Situation
	              that.rect(canvas,data,1050,830,150,40,28)//Z2WMS700 Stock AnalysisReport
	              that.text(canvas,data,1055,845,150,40,28)//Z2WMS700 Stock AnalysisReport
	              that.rect(canvas,data,1050,890,150,40,29)//Z2BLK Blocked StockReconciliation Report
	              that.text(canvas,data,1055,905,150,40,29)//Z2BLK Blocked StockReconciliation Report


	              return canvas;
	              }  , 1000 );
	  },

	  sotc_7_quotaManagement :function(x){//SOTC_7
	            var model = this.uisCodeCheck("SOTC_7");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Quota Management v2.0";
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
	              that.rect(canvas,data,10,10,1130,40,0)//ECC
	              that.text(canvas,data,550,35,1000,40,0)//ECC


	              //second line
	              that.rect(canvas,data,10,70,200,40,1)//Quota Table Configurations
	              that.text(canvas,data,30,90,200,40,1)//Quota Table Configurations
	              that.rect(canvas,data,240,70,435,40,3)//Sales Order and Delivery Processing
	              that.text(canvas,data,360,90,390,40,3)//Sales Order and Delivery Processing
	              that.rect(canvas,data,705,70,200,40,7)//Quota Management Process
	              that.text(canvas,data,725,90,200,40,7)//Quota Management Process
	              that.rect(canvas,data,935,70,200,40,10)//Quota Management Report
	              that.text(canvas,data,955,90,200,40,10)//Quota Management Report




	              //tasks
	              that.rect(canvas,data,10,130,200,75,2)//Maintenance of Custom Tables Related to Quota (Z2CREATEQUOTA/ Z2MAINTAINQUOTA/ Z2QUOTAEXCTAB/ Inbound IDOC)
	              that.text(canvas,data,15,145,200,75,2)//Maintenance of Custom Tables Related to Quota(Z2CREATEQUOTA/ Z2MAINTAINQUOTA/ Z2QUOTAEXCTAB/ Inbound IDOC)
	              that.rect(canvas,data,240,130,200,75,4)//Sales Order/ Refusals Creation(VA01 / Inbound IDOC)
	              that.text(canvas,data,245,145,200,75,4)//Sales Order/ Refusals Creation(VA01 / Inbound IDOC)
	              that.line(canvas,data,440,165,470,165)//from Sales Order/ Refusals Creation(VA01 / Inbound IDOC) to Standard Processing for Delivery Creation, Change, and PGI
	              that.leftArrow(canvas,data,470,165)
	              that.line(canvas,data,455,165,455,355)//vertical line downwards connectng to Sales Order Change(VA02/VKM3/Z2CMT5040_V3
	              that.downArrow(canvas,data,455,355)
	              that.rect(canvas,data,240,320,200,75,5)//Sales Order Change(VA02/VKM3/Z2CMT5040_V3)
	              that.text(canvas,data,245,335,200,75,5)//Sales Order Change(VA02/VKM3/Z2CMT5040_V3)
	              that.line(canvas,data,440,355,680,355)//horizontal line towards left from Sales Order Change(VA02/VKM3/Z2CMT5040_V3)
	              that.line(canvas,data,680,355,680,165)//vertical line upwards from horizontal line above
	              that.line(canvas,data,570,355,570,205)//vertical line connecting to Standard Processing for Delivery Creation, Change, and PGI
	              that.upArrow(canvas,data,570,205)
	              that.rect(canvas,data,470,130,200,75,6)//Standard Processing for Delivery Creation, Change, and PGI
	              that.text(canvas,data,475,145,200,75,6)//Standard Processing for Delivery Creation, Change, and PGI
	              that.line(canvas,data,670,165,705,165)//from Standard Processing for Delivery Creation, Change, and PGI to Quota Allocation(Job: QUOTA_ALLOC)
	              that.leftArrow(canvas,data,705,165)
	              that.rect(canvas,data,705,130,200,75,8)//Quota Allocation(Job: QUOTA_ALLOC)
	              that.text(canvas,data,710,145,200,75,8)//Quota Allocation(Job: QUOTA_ALLOC)
	              that.rect(canvas,data,705,320,200,75,9)//Autocut Process(VA02 via BDC session)
	              that.text(canvas,data,710,335,200,75,9)//Autocut Process(VA02 via BDC session)
	              that.rect(canvas,data,935,130,200,75,11)//Display Quota Report(Z2QUOTAREPORT)
	              that.text(canvas,data,940,145,200,75,11)//Display Quota Report(Z2QUOTAREPORT)



	              return canvas;
	              }  , 1000 );

	  },
	  sotc_8_salesOrderCreation :function(x){//SOTC_8
	            var model = this.uisCodeCheck("SOTC_8");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Material Listing and Exclusion";
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
	                that.rect(canvas,data,10,10,865,40,0)//ECC
	                that.text(canvas,data,420,35,865,40,0)//ECC

	                //second line
	                that.rect(canvas,data,10,70,180,40,1)//Material Listing / Exclusion
	                that.text(canvas,data,25,90,180,40,1)//Material Listing / Exclusion
	                that.rect(canvas,data,230,70,180,40,3)//Sales Order Creation
	                that.text(canvas,data,245,90,180,40,3)//Sales Order Creation
	                that.rect(canvas,data,450,70,425,40,6)//Sales Order Material Listing/Exclusion
	                that.text(canvas,data,465,90,425,40,6)//Sales Order Material Listing/Exclusion

	                //tasks
	                that.rect(canvas,data,10,160,160,60,2)//Material Listing / Exclusion Creation (VB01)
	                that.text(canvas,data,15,175,160,60,2)//Material Listing / Exclusion Creation (VB01)
	                that.line(canvas,data,170,190,215,190)//horizontal line towards right connecting vertical line from Material Listing / Exclusion Creation (VB01)
	                that.rect(canvas,data,235,130,160,60,4)//Manual Sales Order Creation  (VA01)
	                that.text(canvas,data,240,145,160,60,4)//Manual Sales Order Creation  (VA01)
	                that.line(canvas,data,235,150,215,150)//horizontal line towards left from Manual Sales Order Creation (VA01)
	                that.leftArrow(canvas,data,235,150)
	                that.line(canvas,data,235,240,215,240)//horizontal line towards left from EDI Inbound Order Creation (Idoc)
	                that.leftArrow(canvas,data,235,240)
	                that.line(canvas,data,215,150,215,240)//vertical line on left connectign above 2 lines
	                that.line(canvas,data,395,150,415,150)//horizontal line towards right from Manual Sales Order Creation  (VA01)
	                that.line(canvas,data,395,240,415,240)//horizontal line towards right from EDI Inbound Order Creation (Idoc)
	                that.line(canvas,data,415,150,415,240)//vertical line on right connectign above 2 lines
	                that.line(canvas,data,415,160,455,160)//from vertical line connecting to material listed?
	                that.leftArrow(canvas,data,455,160)
	                that.line(canvas,data,415,235,455,235)//from vertical line connecting to Material Excluded?
	                that.leftArrow(canvas,data,455,235)
	                that.rect(canvas,data,235,220,160,60,5)//EDI Inbound Order Creation (Idoc)
	                that.text(canvas,data,240,235,160,60,5)//EDI Inbound Order Creation (Idoc)
	                that.rect(canvas,data,455,130,160,60,7)//Material Listed?
	                that.text(canvas,data,460,145,160,60,7)//Material Listed?
	                that.rect(canvas,data,455,220,160,60,8)//Material Excluded?
	                that.text(canvas,data,460,235,160,60,8)//Material Excluded?
	                that.rect(canvas,data,715,130,160,60,9)//Sales Order Created
	                that.text(canvas,data,720,145,160,60,9)//Sales Order Created
	                that.rect(canvas,data,715,220,160,60,10)//Sales Order  Not Created Error message: "Material is excluded"
	                that.text(canvas,data,720,235,160,60,10)//Sales Order  Not Created Error message: "Material is excluded"
	                that.line(canvas,data,530,190,530,220)//from Material Listed? to Material Excluded?
	                that.downArrow(canvas,data,530,220)
	                that.textBlack(canvas,data,545,210,20,20,11)//text "no" between Material Listed? and Material Excluded?
	                that.textBlack(canvas,data,655,140,20,20,12)//text 'yes' between Material Listed? and Sales Order Created
	                that.textBlack(canvas,data,645,192,20,20,13)//text 'no' from Material Excluded? to Sales Order Created
	                that.textBlack(canvas,data,645,192,20,20,13)//text 'no' from Material Excluded? to Sales Order Created
	                that.line(canvas,data,615,160,715,160)//from Material Listed? to Sales Order Created
	                that.leftArrow(canvas,data,715,162)
	                that.line(canvas,data,615,250,715,250)//from Material Excluded? to Sales Order  Not Created Error message: "Material is excluded"
	                that.leftArrow(canvas,data,715,250)
	                that.textBlack(canvas,data,655,250,20,20,14)//text 'yes' between Material Excluded? and Sales Order  Not Created Error message: "Material is excluded"
	                that.line(canvas,data,615,220,715,160)//from Material Excluded? to Sales Order Created



	              return canvas;
	              }  , 1000 );

	  },
	  sotc_9_deliveryOutputProcessing :function(x){//SOTC_9
	            var model = this.uisCodeCheck("SOTC_9");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Delivery Output Determination";
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
	  //First Column
	        that.rect(canvas,data,200,10,1160,40,0) // ECC
	        that.text(canvas,data,750,35,300,40,0)
	        that.rect(canvas,data,200,100,260,50,1) // Creation of Delivery output condition record
	        that.text(canvas,data,210,125,300,40,1)
	        that.rect(canvas,data,200,300,260,50,2) // 3 Delivery Output Condition Record Creation (VV21)
	        that.text(canvas,data,210,325,250,40,2)
	        that.rect(canvas,data,510,100,150,50,3) // Delivery Creation
	        that.text(canvas,data,520,125,300,40,3)
	        that.rect(canvas,data,510,200,150,50,4) // Manual Delivery Creation (VL01n/VL10*)
	        that.text(canvas,data,520,225,135,40,4)
	        that.rect(canvas,data,510,300,150,50,5) // Delivery Creation via Job
	        that.text(canvas,data,520,325,135,40,5)
	        that.rect(canvas,data,710,100,500,50,6) // Delivery Output Determination
	        that.text(canvas,data,870,125,300,40,6)
	        that.rect(canvas,data,710,270,220,130,7) // If the access sequence...
	        that.text(canvas,data,720,295,210,100,7)
	        that.rect(canvas,data,990,270,220,130,8) // Output type created could either ...
	        that.text(canvas,data,1000,295,200,100,8)
	        that.rect(canvas,data,1260,100,100,50,9) // Transmission Medium
	        that.text(canvas,data,1270,125,90,40,9)
	        that.rect(canvas,data,1260,200,100,50,10) // EDI
	        that.text(canvas,data,1300,225,90,40,10)
	        that.rect(canvas,data,1260,280,100,50,11) // PDF
	        that.text(canvas,data,1300,305,90,40,11)
	        that.rect(canvas,data,1260,360,100,50,12) // Simple Mail
	        that.text(canvas,data,1280,385,90,40,12)
	        that.rect(canvas,data,1260,440,100,50,13) // Special Function
	        that.text(canvas,data,1270,465,90,40,13)
	        that.rect(canvas,data,1260,530,100,50,14) // Events
	        that.text(canvas,data,1290,555,90,40,14)
	        that.rect(canvas,data,1260,610,100,50,15) // Print Output
	        that.text(canvas,data,1280,640,90,40,15)
	        // Line And Arrow
	        that.line(canvas,data,460,325,480,325) // line connecting index - 2, index - 4  & index - 5
	        that.line(canvas,data,480,325,480,225)
	        that.line(canvas,data,480,325,480,225)
	        that.line(canvas,data,480,325,510,325)
	        that.leftArrow(canvas,data,510,325)
	        that.line(canvas,data,480,225,510,225)
	        that.leftArrow(canvas,data,510,225)
	        that.line(canvas,data,660,325,680,325) // line connecting index - 4, index - 5  & index - 7
	        that.line(canvas,data,680,325,680,225)
	        that.line(canvas,data,680,225,660,225)
	        that.line(canvas,data,680,325,710,325)
	        that.leftArrow(canvas,data,710,325)
	        that.line(canvas,data,930,325,990,325) // line connecting index - 7 & index - 8
	        that.leftArrow(canvas,data,990,325)
	        that.line(canvas,data,1210,325,1260,225) // EDI
	        that.line(canvas,data,1260,225,1250,228)
	        that.line(canvas,data,1260,225,1260,238)
	        that.line(canvas,data,1210,325,1260,305) // PDF
	        that.line(canvas,data,1260,305,1250,302)
	        that.line(canvas,data,1260,305,1254,316)
	        that.line(canvas,data,1210,325,1260,385) // Simple Mail
	        that.line(canvas,data,1260,385,1248,385)
	        that.line(canvas,data,1260,385,1257,370)
	        that.line(canvas,data,1210,325,1260,465) // Special Function
	        that.line(canvas,data,1259,450,1260,465)
	        that.line(canvas,data,1260,465,1249,459)
	        that.line(canvas,data,1210,325,1260,555) // Events
	        that.line(canvas,data,1260,555,1261,545)
	        that.line(canvas,data,1260,555,1253,550)
	        that.line(canvas,data,1210,325,1260,635) // Print Output
	        that.line(canvas,data,1254,630,1260,635)
	        that.line(canvas,data,1264,628,1260,635)



	              return canvas;
	              }  , 1000 );
	  },

	  sotc_10_consignmentReturn :function(x){//SOTC_10
	            var model = this.uisCodeCheck("SOTC_10");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Consignment return";
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

	  //First Row(Top to Bottom)
	      that.rect(canvas,data,90,10,1380,40,0) // ECC
	      that.text(canvas,data,740,30,300,40,0)
	      that.rect(canvas,data,90,110,300,50,1) // Creation of Consignment Pick-up Sales Order
	      that.text(canvas,data,115,135,300,40,1)
	      that.rect(canvas,data,90,235,300,60,2) // Manual Consignment Pick-up Sales order creation (VA01) Sales focument type: ZA5
	      that.text(canvas,data,100,260,290,40,2)
	      that.rect(canvas,data,450,110,400,50,3) // Delivery Creation and Processing
	      that.text(canvas,data,560,135,290,40,3)
	      that.rect(canvas,data,450,235,160,60,4) // Manual Delivery Creation (VL01N) Delivery type: LR
	      that.text(canvas,data,460,260,150,50,4)
	      that.rect(canvas,data,670,235,180,60,5) // Post Goods Receipt the created delivery document (VL02N)
	      that.text(canvas,data,680,260,170,50,5)
	      that.rect(canvas,data,910,110,200,50,6) // Stocks at Customer
	      that.text(canvas,data,955,135,290,40,6)
	      that.rect(canvas,data,910,235,200,60,7) // Check consignment stocks at customer (MB58)
	      that.text(canvas,data,920,260,190,50,7)
	      that.rect(canvas,data,1170,110,300,50,8) // Credit Processing
	      that.text(canvas,data,1220,135,290,40,8)
	      that.rect(canvas,data,1170,190,300,60,9) // Manual Invoice Creation (VF01) Billing type:  ZCRE
	      that.text(canvas,data,1180,220,290,50,9)
	      that.rect(canvas,data,1170,280,300,60,10) // Invoice Creation via Job (VF04/VF06) Billing type:  ZCRE
	      that.text(canvas,data,1180,305,290,50,10)
	      //Line And Arrows
	      that.line(canvas,data,390,265,450,265)    // line connecting index - 2 & index - 4
	      that.leftArrow(canvas,data,450,265)
	      that.line(canvas,data,610,265,670,265)    // line connecting index - 4 & index - 5
	      that.leftArrow(canvas,data,670,265)
	      that.line(canvas,data,850,265,910,265)    // line connecting index - 5 & index - 7
	      that.leftArrow(canvas,data,910,265)
	      that.line(canvas,data,1170,220,1150,220)    // line connecting index - 9 & index - 10
	      that.line(canvas,data,1150,220,1150,310)
	      that.line(canvas,data,1150,310,1170,310)
	      that.line(canvas,data,1110,265,1150,265)    // line connecting index - 7, index - 9 & index - 10
	      that.leftArrow(canvas,data,1150,265)

	              return canvas;
	              }  , 1000 );

	  },
	  sotc_11_consignmentPickup :function(x){//SOTC_11
	            var model = this.uisCodeCheck("SOTC_11");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Consignment Pickup";
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

	  //First Row(Top to Bottom)
	      that.rect(canvas,data,200,10,1180,40,0) // ECC
	      that.text(canvas,data,800,30,300,40,0)
	      that.rect(canvas,data,200,110,360,50,1) // Creation of Consignment Pick-up Sales Order
	      that.text(canvas,data,250,135,300,40,1)
	      that.rect(canvas,data,200,290,360,60,2) // Manual Consignment Pick-up Sales order creation (VA01) Sales focument type: ZA5
	      that.text(canvas,data,210,315,345,40,2)
	      that.rect(canvas,data,610,110,410,50,3) // Delivery Creation and Processing
	      that.text(canvas,data,700,135,290,40,3)
	      that.rect(canvas,data,610,220,180,60,4) // Manual Delivery Creation (VL01N) Delivery type: LR
	      that.text(canvas,data,620,245,170,50,4)
	      that.rect(canvas,data,610,350,180,60,5) // Delivery Creation via Job (VL10A) Delivery type: LR (FOR DENMARK ONLY)
	      that.text(canvas,data,620,370,170,50,5)
	      that.rect(canvas,data,840,290,180,60,6) // Post Goods Receipt the created delivery document (VL02N)
	      that.text(canvas,data,850,310,165,50,6)
	      that.rect(canvas,data,1070,110,300,50,7) // Stocks at Customer
	      that.text(canvas,data,1180,135,290,40,7)
	      that.rect(canvas,data,1070,290,300,60,8) // Check consignment stocks at customer (MB58)
	      that.text(canvas,data,1080,320,290,50,8)
	      //Line And Arrows
	      that.line(canvas,data,610,250,590,250) // line connecting index - 4 & index - 5
	      that.line(canvas,data,590,250,590,380)
	      that.line(canvas,data,590,380,610,380)
	      that.line(canvas,data,560,320,590,320) // line connecting index - 2, index - 4 & index - 5
	      that.leftArrow(canvas,data,590,320)
	      that.line(canvas,data,790,250,810,250) // line connecting index - 5 & index - 6 opposite side
	      that.line(canvas,data,810,250,810,380)
	      that.line(canvas,data,810,380,790,380)
	      that.line(canvas,data,810,320,840,320) // line connecting index - 6, index - 4 & index - 5
	      that.leftArrow(canvas,data,840,320)
	      that.line(canvas,data,1020,320,1070,320) // line connecting index - 6, index - 8
	      that.leftArrow(canvas,data,1070,320)


	              return canvas;
	              }  , 1000 );

	  },
	  sotc_12_cabinetMaintenanceSDC :function(x){//SOTC_12
	            var model = this.uisCodeCheck("SOTC_12");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Cabinet Management Sales Debit to Concessionaire";
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

	  that.rect(canvas,data,150,10,1200,40,0) // ECC
	    that.text(canvas,data,700,30,1000,40,0)
	    that.rect(canvas,data,150,70,250,60,1) // Sales Order
	    that.text(canvas,data,230,100,240,40,1)
	    that.rect(canvas,data,150,160,250,80,2) // Debit Creation of Sales Order (YA52/YA53)
	    that.text(canvas,data,160,190,240,40,2)
	    that.line(canvas,data,400,200,450,200) // output line to "Creation of Outbound Delivery (YCOV)"
	    that.leftArrow(canvas,data,450,200)
	    that.rect(canvas,data,150,260,250,80,3) // Sales Creation of Sales Order (YA50)
	    that.text(canvas,data,160,290,240,40,3)
	    that.line(canvas,data,400,300,420,300)
	    that.line(canvas,data,420,300,420,200)
	    that.rect(canvas,data,450,70,250,60,4) // Delivery
	    that.text(canvas,data,550,100,240,40,4)
	    that.rect(canvas,data,450,160,250,80,5) // Creation of Outbound Delivery (YCOV)
	    that.text(canvas,data,470,190,240,40,5) // output line to "Picking and Goods Issue of Delivery"
	    that.line(canvas,data,580,240,580,270)
	    that.line(canvas,data,580,270,625,270)
	    that.line(canvas,data,625,270,625,330)
	    that.downArrow(canvas,data,625,330)
	    that.line(canvas,data,700,200,770,200) // output line to "Debit Creation of Invoice (YF52)"
	    that.leftArrow(canvas,data,770,200)
	    that.line(canvas,data,730,200,730,300) // output line to "Sales Creation of Invoice (YF50)"
	    that.line(canvas,data,730,300,770,300)
	    that.leftArrow(canvas,data,770,300)
	    that.rect(canvas,data,500,330,250,80,6) //  Picking and Goods Issue of Delivery
	    that.text(canvas,data,520,360,240,40,6)
	    that.line(canvas,data,750,370,1080,370)  //output line to "Maintain Sales Contract (VA42)"
	    that.leftArrow(canvas,data,1080,370)
	    that.rect(canvas,data,770,70,250,60,7) //  Billing
	    that.text(canvas,data,870,100,240,40,7)
	    that.rect(canvas,data,770,160,250,80,8)  //  Debit Creation of Invoice (YF52)
	    that.text(canvas,data,800,190,240,40,8)
	    that.rect(canvas,data,770,260,250,80,9)  // Sales Creation of Invoice (YF50)
	    that.text(canvas,data,800,290,240,40,9)
	    that.rect(canvas,data,1080,70,250,60,10)  //  Cabinet Contract
	    that.text(canvas,data,1150,100,240,40,10)
	    that.rect(canvas,data,1080,330,250,80,11) //  Maintain Sales Contract (VA42)
	    that.text(canvas,data,1110,360,240,40,11)

	              return canvas;
	              }  , 1000 );

	  },
	  sotc_13_cabinetMaintenanceV2 :function(x){//SOTC_13
	            var model = this.uisCodeCheck("SOTC_13");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Cabinet Maintenance v2";
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


	  //********************* Maintenance Part 1 ****************************************************//
	      that.rect(canvas,data,15,10,1550,50,0) // ECC
	      that.text(canvas,data,750,30,700,40,0)
	      that.box(canvas,data,15,70,750,30,1,"3px") // Maintenance Part 1
	      that.freeText(canvas,data,300,90,700,40,1,"15px")
	      that.rect(canvas,data,15,120,150,80,2) // Sales Order Creation (Sales order type: YB50)
	      that.text(canvas,data,20,150,140,40,2)
	      that.rect(canvas,data,15,230,150,80,3) // No ATP Check
	      that.text(canvas,data,40,260,140,40,3)
	      that.rect(canvas,data,210,120,340,80,4) // Delivery Creation (Delivery type: YCIV)
	      that.text(canvas,data,260,150,300,40,4)
	      that.rect(canvas,data,210,230,150,80,5) // Customer Consignment Stock Decreased
	      that.text(canvas,data,220,260,140,40,5)
	      that.line(canvas,data,285,310,285,330)  // output line to "Equipement Maintain"
	      that.line(canvas,data,360,270,390,270) // output line to "Stock in head office location increase"
	      that.rect(canvas,data,210,330,150,80,6) // Equipement Maintain
	      that.text(canvas,data,220,360,140,40,6)
	      that.line(canvas,data,360,370,390,370) // output line to "Stock in head office location increase"
	      that.rect(canvas,data,390,230,150,80,7) // Stock in head office location increase
	      that.text(canvas,data,400,260,140,40,7)
	      that.line(canvas,data,465,310,465,330) // output line to "Serial Numbers Added"
	      that.rect(canvas,data,390,330,150,80,8) // Serial Numbers Added
	      that.text(canvas,data,400,360,140,40,8)
	      that.line(canvas,data,465,410,465,430) // output line to "Picking and GI Delivery"
	      that.rect(canvas,data,390,430,150,80,9) // Picking and GI Delivery
	      that.text(canvas,data,400,460,140,40,9)
	      that.line(canvas,data,540,470,560,470) // output line to "Automactic run of job YCAB_PROCESS_CONTRATTI"
	      that.line(canvas,data,560,470,560,270)
	      that.line(canvas,data,560,270,590,270)
	      that.rect(canvas,data,590,120,150,80,10) // Maintain Contract
	      that.text(canvas,data,610,150,140,40,10)
	      that.rect(canvas,data,590,230,150,80,11)  // Automactic run of job YCAB_PROCESS_CONTRATTI
	      that.text(canvas,data,600,260,120,40,11)
	      that.line(canvas,data,665,310,665,330)   // output line to "Suspend Billing Plan"
	      that.rect(canvas,data,590,330,150,80,12) // Suspend Billing Plan
	      that.text(canvas,data,600,360,140,40,12)


	//********************* Maintenance Part 2 ****************************************************//

	      that.box(canvas,data,810,70,750,30,13,"3px") // Maintenance Part 2
	      that.freeText(canvas,data,1100,90,700,40,13,"15px")
	      that.rect(canvas,data,810,120,150,80,14) // Sales Order Creation (Sales order type: YB50)
	      that.text(canvas,data,820,150,140,40,14)
	      that.rect(canvas,data,810,230,150,80,15) // No ATP Check
	      that.text(canvas,data,830,260,140,40,15)
	      that.rect(canvas,data,1000,120,340,80,16) // Delivery Creation (Delivery type: YCIV)
	      that.text(canvas,data,1050,150,300,40,16)
	      that.rect(canvas,data,1000,230,150,80,17) // Customer Consignment Stock Decreased
	      that.text(canvas,data,1010,260,140,40,17)
	      that.line(canvas,data,1075,310,1075,330) // output line to "Equipement Maintain"
	      that.line(canvas,data,1150,270,1180,270) // output line to "Stock in head office location increase"
	      that.rect(canvas,data,1000,330,150,80,18) // Equipement Maintain
	      that.text(canvas,data,1010,360,140,40,18)
	      that.line(canvas,data,1150,370,1180,370) // output line to "Serial Numbers Added"
	      that.rect(canvas,data,1180,230,150,80,19) // Stock in head office location increase
	      that.text(canvas,data,1190,260,140,40,19)
	      that.line(canvas,data,1255,310,1255,330) // output lien to "Serial Numbers Added"
	      that.rect(canvas,data,1180,330,150,80,20) // Serial Numbers Added
	      that.text(canvas,data,1190,360,140,40,20)
	      that.line(canvas,data,1255,410,1255,430) // output line to "Picking and GI Delivery"
	      that.rect(canvas,data,1180,430,150,80,21) // Picking and GI Delivery
	      that.text(canvas,data,1190,460,140,40,21)
	      that.line(canvas,data,1330,470,1350,470) //  output line to "Automactic run of job YCAB_PROCESS_CONTRATTI"
	      that.line(canvas,data,1350,470,1350,270)
	      that.line(canvas,data,1350,270,1380,270)
	      that.rect(canvas,data,1380,120,150,80,22) // Maintain Contract
	      that.text(canvas,data,1400,150,140,40,22)
	      that.rect(canvas,data,1380,230,150,80,23)  // Automactic run of job YCAB_PROCESS_CONTRATTI
	      that.text(canvas,data,1390,260,140,40,23)
	      that.line(canvas,data,1455,310,1455,330) // output line to "Suspend Billing Plan"
	      that.rect(canvas,data,1380,330,150,80,24) // Suspend Billing Plan
	      that.text(canvas,data,1410,360,140,40,24)

	              return canvas;
	              }  , 1000 );

	  },
	  sotc_14_invoiceListCreation :function(x){//SOTC_14
	            var model = this.uisCodeCheck("SOTC_14");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Invoice List Creation and Output Determination";
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

	  that.rect(canvas,data,10,10,1550,40,0) // ECC
	        that.text(canvas,data,750,30,1500,40,0)
	        that.rect(canvas,data,10,70,150,60,1)  // Master Data
	        that.text(canvas,data,50,100,130,40,1)
	        that.rect(canvas,data,10,230,150,80,2) // Invoice List Receiver (ZC) Partner Function of Payer in Customer Master for Grouping
	        that.text(canvas,data,20,250,130,40,2)
	        that.line(canvas,data,160,270,180,270)  // output line to "Mutliple Invoices with the same following......."
	        that.leftArrow(canvas,data,180,270)
	        that.rect(canvas,data,10,350,150,80,3) // Invoice List Output Condition Record Creation (VV31)
	        that.text(canvas,data,20,370,130,40,3)
	        that.line(canvas,data,85,430,85,450)  //  output line to "Output type created could either be processed........"
	        that.line(canvas,data,85,450,890,450)
	        that.leftArrow(canvas,data,890,450)
	        that.rect(canvas,data,180,70,150,60,4)  // Invoice Creation Tcode: VF01/VF02
	        that.text(canvas,data,190,90,130,40,4)
	        that.rect(canvas,data,180,230,150,200,5) // Mutliple Invoices with the same following Criteria:-Payer or Partner function ‘ZC Invoice..."
	        that.text(canvas,data,190,260,130,180,5)
	        that.line(canvas,data,330,330,350,330) // output line to "Invoice list Created. See possible IL billing types and......"
	        that.leftArrow(canvas,data,350,330)
	        that.rect(canvas,data,350,70,250,60,6) // Invoice List Creation Tcode: VF21 Program:  SDINVLDL
	        that.text(canvas,data,370,90,200,40,6)
	        that.rect(canvas,data,350,280,150,80,7) // Invoice list Created. See possible IL billing types and definition of each below
	        that.text(canvas,data,360,300,130,40,7)
	        that.line(canvas,data,500,320,520,320)
	        that.line(canvas,data,520,200,520,420)
	        that.line(canvas,data,520,200,620,200) // ouput line to  "List of Invoice List Standard SAP transaction to....."
	        that.leftArrow(canvas,data,620,200)
	        that.line(canvas,data,520,420,890,420) // output line to "Output type created could either be processed........"
	        that.leftArrow(canvas,data,890,420)
	        that.rect(canvas,data,620,70,250,60,8) // Invoice List Additional Options
	        that.text(canvas,data,650,100,230,40,8)
	        that.rect(canvas,data,620,150,250,100,9) // List of Invoice List Standard SAP transaction to view list of invoice List(VF25)
	        that.text(canvas,data,640,180,230,80,9)
	        that.rect(canvas,data,890,70,250,60,10)  // Output Determination
	        that.text(canvas,data,950,100,230,40,10)
	        that.rect(canvas,data,890,320,250,200,11) // Output type created could either be processed automatically during saving or..."
	        that.text(canvas,data,900,360,230,180,11)
	        that.line(canvas,data,1140,420,1180,320)  // output line to "Simple Mail"
	        that.line(canvas,data,1180,320,1200,320)
	        that.leftArrow(canvas,data,1200,320)
	        that.line(canvas,data,1140,420,1180,380) // output line to "EDI"
	        that.line(canvas,data,1180,380,1200,380)
	        that.leftArrow(canvas,data,1200,380)
	        that.line(canvas,data,1140,420,1180,440)  //  output line to "Special Function"
	        that.line(canvas,data,1180,440,1200,440)
	        that.leftArrow(canvas,data,1200,440)
	        that.line(canvas,data,1140,420,1180,500)  //  output line to "Print Output"
	        that.line(canvas,data,1180,500,1200,500)
	        that.leftArrow(canvas,data,1200,500)
	        that.rect(canvas,data,1200,70,360,60,12) // Transmission Medium
	        that.text(canvas,data,1320,100,340,40,12)
	        that.rect(canvas,data,1200,300,150,40,13) // Simple Mail
	        that.text(canvas,data,1240,320,130,40,13)
	        that.rect(canvas,data,1200,360,150,40,14) // EDI
	        that.text(canvas,data,1260,380,130,40,14)
	        that.rect(canvas,data,1200,420,150,40,15)  // Special Function
	        that.text(canvas,data,1240,440,130,40,15)
	        that.rect(canvas,data,1200,480,150,40,16) // Print output
	        that.text(canvas,data,1240,500,130,40,16)
	        that.rect(canvas,data,1370,300,180,220,17) // List of Lists This functionality is to send a Weekly/Monthly summary of all.........."
	        that.text(canvas,data,1380,330,160,200,17)


	              return canvas;
	              }  , 1000 );

	  },
	  sotc_15_operationalDeliveryReporting :function(x){//SOTC_15


	  var model = this.uisCodeCheck("SOTC_15");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Operational Delivery Reporting";
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
	  that.rect(canvas,data,20,10,1000,40,0)//ECC
	  that.text(canvas,data,500,35,1000,40,0)//ECC

	  //second line
	  that.rect(canvas,data,20,60,1000,40,1)//Delivery Report
	  that.text(canvas,data,475,85,1000,40,1)//Delivery Report

	  //tasks
	  that.rect(canvas,data,20,290,160,40,2)//Execute VL06O Delivery Report
	  that.text(canvas,data,25,305,160,40,2)//Execute VL06O Delivery Report

	  that.line(canvas,data,180,310,230,310)//horizontal line from Execute VL06O Delivery Report

	  that.line(canvas,data,230,310,230,130)//vertical line upwards from Execute VL06O Delivery Report

	  that.line(canvas,data,230,130,320,130)//horizontal line connecting to For Checking
	  that.leftArrow(canvas,data,320,130)

	  that.line(canvas,data,230,180,320,180)//horizontal line connecting to For Distribution
	  that.leftArrow(canvas,data,320,180)

	  that.line(canvas,data,230,230,320,230)//horizontal line connecting to For Picking
	  that.leftArrow(canvas,data,320,230)

	  that.line(canvas,data,230,280,320,280)//horizontal line connecting to For Confirmation
	  that.leftArrow(canvas,data,320,280)

	  that.line(canvas,data,230,310,230,480)//vertical line downwards from Execute VL06O Delivery Report

	  that.line(canvas,data,230,330,320,330)//horizontal line connecting to For Loading
	  that.leftArrow(canvas,data,320,330)

	  that.line(canvas,data,230,380,320,380)//horizontal line connecting to For Goods Issue
	  that.leftArrow(canvas,data,320,380)

	  that.line(canvas,data,230,430,320,430)//horizontal line connecting to For Transportation Planning
	  that.leftArrow(canvas,data,320,430)

	  that.line(canvas,data,230,480,320,480)//horizontal line connecting to List Outbound Deliveries
	  that.leftArrow(canvas,data,320,480)

	  that.dottedRect(canvas,data,320,110,180,40,3)//For Checking
	  that.text(canvas,data,330,125,180,40,3)//For Checking

	  that.dottedRect(canvas,data,320,160,180,40,4)//For Distribution
	  that.text(canvas,data,330,175,180,40,4)//For Distribution

	  that.dottedRect(canvas,data,320,210,180,40,5)//For Picking
	  that.text(canvas,data,330,225,180,40,5)//For Picking

	  that.dottedRect(canvas,data,320,260,180,40,6)//For Confirmation
	  that.text(canvas,data,330,275,180,40,6)//For Confirmation

	  that.dottedRect(canvas,data,320,310,180,40,7)//For Loading
	  that.text(canvas,data,330,325,180,40,7)//For Loading

	  that.dottedRect(canvas,data,320,360,180,40,8)//For Goods Issue
	  that.text(canvas,data,330,375,180,40,8)//For Goods Issue

	  that.dottedRect(canvas,data,320,410,180,40,9)//For Transportation Planning
	  that.text(canvas,data,330,425,180,40,9)//For Transportation Planning

	  that.rect(canvas,data,320,460,180,40,10)//List Outbound Deliveries
	  that.text(canvas,data,330,475,180,40,10)//List Outbound Deliveries

	  that.rect(canvas,data,640,290,160,40,11)//Enter/Populate Parameters
	  that.text(canvas,data,645,305,160,40,11)//Enter/Populate Parameters

	  that.line(canvas,data,500,130,590,130)//horizontal line from For Checking

	  that.line(canvas,data,500,180,590,180)//horizontal line from For Distribution

	  that.line(canvas,data,500,230,590,230)//horizontal line from For Picking

	  that.line(canvas,data,500,280,590,280)//horizontal line from For Confirmation

	  that.line(canvas,data,500,330,590,330)//horizontal line from For Loading

	  that.line(canvas,data,500,380,590,380)//horizontal line from For Goods Issue

	  that.line(canvas,data,500,430,590,430)//horizontal line from For Transportation Planning

	  that.line(canvas,data,500,480,590,480)//horizontal line from List Outbound Deliveries

	  that.line(canvas,data,590,130,590,480)//vertical line connecting all above horizontal lines

	  that.line(canvas,data,590,310,640,310)//horizontal line connecting to Enter/Populate Parameters
	  that.leftArrow(canvas,data,640,310)

	  that.rect(canvas,data,840,290,160,40,12)//Display Report
	  that.text(canvas,data,845,305,160,40,12)//Display Report

	  that.line(canvas,data,800,310,840,310)//from Enter/Populate Parameters  to Display Report
	  that.leftArrow(canvas,data,840,310)

	  return canvas;
	  }  , 1000 );
	  },
	  sotc_16_pfs :function(x){//SOTC_16


	  var model = this.uisCodeCheck("SOTC_16");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC PFS V4";
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
	  that.rect(canvas,data,210,10,750,40,0) // ECC
	  that.text(canvas,data,550,35,300,40,0)
	  that.rect(canvas,data,210,70,750,40,1) // Sales Order and Delivery Creation
	  that.text(canvas,data,470,92,300,40,1)
	  that.rect(canvas,data,210,130,170,60,2) // Sales Order creation VA01 / Inbound Idoc
	  that.text(canvas,data,220,150,150,40,2)
	  that.rect(canvas,data,210,220,170,70,3) // Pallet Floor Space automatic calculation (for sales org & doc type listed in table Z2PFS_CONTROL
	  that.text(canvas,data,220,240,150,40,3)
	  that.rect(canvas,data,430,130,170,120,4) // If PFS exceeds the tolerance limit set in Z1TM condition type, Large Order block Z4/ZM will be triggered & either CFS to call
	  that.text(canvas,data,440,150,150,40,4)
	  that.rect(canvas,data,650,130,170,60,5) // Outbound Delivery creation (manual/job) TRIGGER ZETM(for OTMrelevant)
	  that.text(canvas,data,660,150,150,40,5)
	  that.rect(canvas,data,760,220,150,70,6) // Delivery instruction Z003(WMS190 /I00)
	  that.text(canvas,data,770,240,150,40,6)
	  that.rect(canvas,data,950,220,230,70,7) // Use Planned PFS upload tool where the PFS value will come from user and once Delivery is updated will trigger ZETM(for OTM relevant only)
	  that.text(canvas,data,960,240,200,40,7)
	  that.rect(canvas,data,990,10,104,40,8) // OTM
	  that.text(canvas,data,1025,35,200,40,8)
	  that.rect(canvas,data,990,70,104,40,9) // Interface Delivery to OTM
	  that.text(canvas,data,995,85,100,40,9)
	  that.rect(canvas,data,990,130,108,60,10) // Delivery sent to OTM (ZETM/TPSDLS)
	  that.text(canvas,data,995,150,100,40,10)
	  // Line ANd Arrow
	  that.line(canvas,data,280,190,280,220) // line connecting index - 2 & index - 3
	  that.downArrow(canvas,data,280,220)
	  that.line(canvas,data,380,230,430,230) // line connecting index - 3 & index - 4
	  that.leftArrow(canvas,data,430,230)
	  that.line(canvas,data,600,180,650,180) // line connecting index - 4 & index - 5
	  that.leftArrow(canvas,data,650,180)
	  that.line(canvas,data,790,190,790,220) // line connecting index - 5 & index - 6
	  that.downArrow(canvas,data,790,220)
	  that.line(canvas,data,820,160,990,160) // line connecting index - 5 & index - 10
	  that.leftArrow(canvas,data,990,160)
	  that.line(canvas,data,820,180,970,180) // line connecting index - 5 & index - 7
	  that.line(canvas,data,970,180,970,220)
	  that.downArrow(canvas,data,970,220)
	  that.line(canvas,data,1050,220,1050,190) // line connecting index - 7 & index - 10
	  that.upArrow(canvas,data,1050,190)

	  return canvas;
	  }  , 1000 );
	  },
	  sotc_17_priceCorrectionProcess :function(x){//SOTC_17

	  var model = this.uisCodeCheck("SOTC_17");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Price Correction Process";
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
	  that.rect(canvas,data,10,10,750,40,0) // ECC
	  that.text(canvas,data,350,35,300,40,0)
	  that.rect(canvas,data,10,70,420,40,1) // ECC Order to Deliver Process - MSO
	  that.text(canvas,data,120,92,300,40,1)
	  that.rect(canvas,data,10,130,170,40,2) // Reference Billing (F2)
	  that.text(canvas,data,20,150,300,40,2)
	  that.rect(canvas,data,10,190,170,80,3) // Change the Price in VK11 (Condition Type Z4K0)- Customer, Material, Pricing Date
	  that.text(canvas,data,20,216,150,40,3)
	  that.rect(canvas,data,240,150,190,80,4) //  Create Credit Memo Request (ZCRK) - Manual only
	  that.text(canvas,data,250,170,150,40,4)
	  that.rect(canvas,data,470,70,100,40,5) // USCC
	  that.text(canvas,data,500,93,150,40,5)
	  that.rect(canvas,data,470,260,100,50,6) // Creation of Intercompay Billing (IGA)
	  that.text(canvas,data,480,278,100,40,6)
	  that.rect(canvas,data,610,70,150,40,7) // MSO Billing
	  that.text(canvas,data,650,93,150,40,7)
	  that.rect(canvas,data,610,150,150,80,8) // Creation of Credit Memo (ZCG2)
	  that.text(canvas,data,630,185,120,40,8)
	  that.rect(canvas,data,610,260,150,50,9) // Processing of EDI output to create IVNOIC IDOC
	  that.text(canvas,data,620,280,130,40,9)
	  //Second Column
	  that.rect(canvas,data,830,10,300,40,10) // External System
	  that.text(canvas,data,930,35,300,40,10)
	  that.rect(canvas,data,880,260,150,50,11) // IDOC message type INVOIC sent to Partner
	  that.text(canvas,data,890,280,140,40,11)
	  that.rect(canvas,data,880,340,150,50,12) // IDOC message type INVOIC sent to Compudata
	  that.text(canvas,data,890,358,140,40,12)
	  // Line And Arrow
	  that.line(canvas,data,180,200,240,200) // line connecting index - 3 & index - 4
	  that.leftArrow(canvas,data,240,200)
	  that.line(canvas,data,430,200,570,200) // line connecting index - 4 & index - 8
	  that.line(canvas,data,520,200,520,260) // line connecting index - 4 & index - 6 & index - 8
	  that.downArrow(canvas,data,520,260)
	  that.line(canvas,data,760,290,880,290) // line connecting index - 9 & index - 11
	  that.leftArrow(canvas,data,880,290)
	  that.line(canvas,data,570,200,610,200) // line connecting index - 5 & index - 8
	  that.leftArrow(canvas,data,610,200)

	  return canvas;
	  }  , 1000 );
	  },
	  sotc_18_retrospectiveVanSales :function(x){//SOTC_18

	  var model = this.uisCodeCheck("SOTC_18");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Retrospective Van Sales v2";
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
	  that.rect(canvas,data,10,10,750,40,0) // ECC
	  that.text(canvas,data,350,35,300,40,0)
	  that.rect(canvas,data,10,70,420,40,1) // ECC Order to Deliver Process - MSO
	  that.text(canvas,data,120,92,300,40,1)
	  that.rect(canvas,data,10,250,170,80,2) // Create RETROSPECTIVE Order (ZAV)
	  that.text(canvas,data,20,286,150,40,2)
	  that.rect(canvas,data,240,150,190,80,3) // Outbound Delivery (LF)
	  that.text(canvas,data,250,170,150,40,3)
	  that.rect(canvas,data,470,70,100,40,4) // USCC
	  that.text(canvas,data,500,93,150,40,4)
	  that.rect(canvas,data,470,150,100,80,5) // Pick & Goods Issue
	  that.text(canvas,data,480,185,100,40,5)
	  that.rect(canvas,data,470,260,100,55,6) // Creation of Intercompany Billing IV
	  that.text(canvas,data,480,280,100,40,6)
	  that.rect(canvas,data,470,340,100,65,7) //  Processing of ZRD5 output to create INVOIC IDOC
	  that.text(canvas,data,480,360,100,40,7)
	  that.rect(canvas,data,610,70,150,40,8) // MSO Billing
	  that.text(canvas,data,650,93,150,40,8)
	  that.rect(canvas,data,610,150,150,80,9) // Creation of Invoice & Accounting Document
	  that.text(canvas,data,620,185,120,40,9)
	  that.rect(canvas,data,610,260,150,55,10) // Processing of EDI output to create IVNOIC IDOC
	  that.text(canvas,data,620,280,130,40,10)
	  //Second Column
	  that.rect(canvas,data,830,10,150,40,11) // External System
	  that.text(canvas,data,840,35,140,40,11)
	  that.rect(canvas,data,830,70,150,40,12) // Interface EDI IDOC
	  that.text(canvas,data,850,90,300,40,12)
	  that.rect(canvas,data,830,260,150,55,13) // IDOC message type INVOIC sent to Partner
	  that.text(canvas,data,840,280,140,40,13)
	  that.rect(canvas,data,830,340,150,65,14) // IDOC message type INVOIC sent to Compudata
	  that.text(canvas,data,840,360,140,40,14)
	  // Line And Arrow
	  that.line(canvas,data,180,280,240,200) // line connecting index - 2 & index - 3
	  that.vertArrowline(canvas,data,230,200,240,200) // arrow line
	  that.vertArrowline(canvas,data,237,218,240,200) // arrow line
	  that.line(canvas,data,430,200,470,200) // line connecting index - 3 & index - 5
	  that.leftArrow(canvas,data,470,200)
	  that.line(canvas,data,520,230,520,260) // line connecting index - 5 & index - 6
	  that.downArrow(canvas,data,520,260)
	  that.line(canvas,data,520,315,520,340) // line connecting index - 6 & index - 7
	  that.downArrow(canvas,data,520,340)
	  that.line(canvas,data,570,370,830,370) // line connecting index - 7 & index - 14
	  that.leftArrow(canvas,data,830,370)
	  that.line(canvas,data,760,290,830,290) // line connecting index - 10 & index - 13
	  that.leftArrow(canvas,data,830,290)
	  that.line(canvas,data,570,200,610,200) // line connecting index - 5 & index - 9
	  that.leftArrow(canvas,data,610,200)

	  return canvas;
	  }  , 1000 );
	  },
	  sotc_19_returnRefusalOrder :function(x){//SOTC_19

	  var model = this.uisCodeCheck("SOTC_19");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Return and Refusal Order Processing";
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
	  that.rect(canvas,data,10,10,200,40,0) // External System
	  that.text(canvas,data,70,35,300,40,0)
	  that.rect(canvas,data,10,80,200,40,1) // Interface EDI IDOC
	  that.text(canvas,data,60,105,140,40,1)
	  that.rect(canvas,data,10,220,200,80,2) // Create idoc in External System (Z2CMTORDERS3090)
	  that.text(canvas,data,40,250,140,40,2)
	  // Second Column
	  that.rect(canvas,data,290,10,1020,40,3)  // ECC
	  that.text(canvas,data,720,35,300,40,3)
	  that.rect(canvas,data,290,80,500,40,4)  // ECC Order to Deliver Process - MSO
	  that.text(canvas,data,405,100,750,40,4)
	  that.rect(canvas,data,290,150,200,40,5)  // Create Refusal Order (ZB4)
	  that.text(canvas,data,300,170,750,40,5)
	  that.rect(canvas,data,290,240,203,40,6)  // Reference Delivery(LF)/Billing (F2)
	  that.text(canvas,data,300,260,750,40,6)
	  that.rect(canvas,data,290,360,200,40,7)  // Create Return Order (ZB1)
	  that.text(canvas,data,300,380,750,40,7)
	  that.rect(canvas,data,590,220,200,80,8)  // Create Returns Delivery (LR)
	  that.text(canvas,data,600,240,160,40,8)
	  that.rect(canvas,data,880,80,180,40,9)  // USCC
	  that.text(canvas,data,950,100,160,40,9)
	  that.rect(canvas,data,870,220,180,70,10)  // Goods Receipt
	  that.text(canvas,data,880,240,163,40,10)
	  that.rect(canvas,data,880,420,170,50,11)  // Creation of Internal Credit Memo (IG)
	  that.text(canvas,data,890,440,150,40,11)
	  that.rect(canvas,data,1130,80,180,40,12)  // MSO Billing
	  that.text(canvas,data,1200,104,103,40,12)
	  that.rect(canvas,data,1130,220,180,80,13)  // Creation of Credit for Returns (ZCRE)
	  that.text(canvas,data,1140,240,163,40,13)
	  that.rect(canvas,data,1130,340,180,50,14)  // Processing of EDI output to create INVOIC IDOC
	  that.text(canvas,data,1140,360,153,40,14)
	  //Third Column
	  that.rect(canvas,data,1380,10,180,40,15)  // External System
	  that.text(canvas,data,1420,35,200,40,15)
	  that.rect(canvas,data,1380,340,180,50,16)  // IDOC message type INVOIC sent to Partner
	  that.text(canvas,data,1390,360,153,40,16)
	  that.rect(canvas,data,1380,420,180,50,17)  // IDOC message type INVOIC sent to Compudata
	  that.text(canvas,data,1390,440,153,40,17)
	  // Line And Arrow
	  that.line(canvas,data,290,260,210,260) // line connecting index - 6 & index - 2
	  that.rightArrow(canvas,data,210,260)
	  that.line(canvas,data,360,240,360,190) // line connecting index - 6 & index - 5
	  that.upArrow(canvas,data,360,190)
	  that.line(canvas,data,490,180,560,180) // line connecting index - 5 & index - 7
	  that.line(canvas,data,560,180,560,380)
	  that.line(canvas,data,490,380,560,380)
	  that.line(canvas,data,560,260,590,260) // line connecting index - 5 , index - 7 & index - 8
	  that.leftArrow(canvas,data,590,260)
	  that.line(canvas,data,790,260,870,260) // line connecting index - 8 & index - 10
	  that.leftArrow(canvas,data,870,260)
	  that.line(canvas,data,1050,260,1130,260) // line connecting index - 10 & index - 13
	  that.leftArrow(canvas,data,1130,260)
	  that.line(canvas,data,950,290,950,420) // line connecting index - 10 & index - 11
	  that.downArrow(canvas,data,950,420)
	  that.line(canvas,data,1050,445,1380,445) // line connecting index - 11 & index - 17
	  that.leftArrow(canvas,data,1380,445)
	  that.line(canvas,data,1310,365,1380,365) // line connecting index - 14 & index - 16
	  that.leftArrow(canvas,data,1380,365)
	  //Dotted Line
	  that.dottedLine(canvas,data,100,220,100,180) // line connecting index - 2 & index - 5
	  that.dottedLine(canvas,data,100,180,290,180)
	  that.leftArrow(canvas,data,290,180)
	  that.dottedLine(canvas,data,100,300,100,380) // line connecting index - 2 & index - 7
	  that.dottedLine(canvas,data,100,380,290,380)
	  that.leftArrow(canvas,data,290,380)
	  that.dottedLine(canvas,data,360,280,360,360) // line connecting index - 6 & index - 7
	  that.downArrow(canvas,data,360,360)

	  return canvas;
	  }  , 1000 );
	  },
	  sotc_20_internalConsumption :function(x){//SOTC_20

	  var model = this.uisCodeCheck("SOTC_20");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Internal Consumption Process v6";
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
	  //First Row
	  that.rect(canvas,data,10,10,350,40,0) // ECC
	  that.text(canvas,data,170,35,300,40,0)
	  that.rect(canvas,data,10,80,350,50,1) // ECC Internal Consumption Order Process
	  that.text(canvas,data,40,105,300,40,1)
	  that.rect(canvas,data,10,150,160,72,2) // Sales Order creation by MSO (VA01)
	  that.text(canvas,data,20,167,140,40,2)
	  that.rect(canvas,data,230,150,130,70,3) // Outbound Delivery creation (with USCC plant)
	  that.text(canvas,data,240,165,140,40,3)
	  that.rect(canvas,data,330,260,130,40,4) // Delivery instruction (WMS190 /I003
	  that.text(canvas,data,340,275,140,40,4)
	  that.rect(canvas,data,330,330,130,40,5) // WMS
	  that.text(canvas,data,370,354,120,40,5)
	  // Second Row
	  that.rect(canvas,data,390,10,110,40,6) // OTM
	  that.text(canvas,data,430,35,300,40,6)
	  that.rect(canvas,data,390,80,110,50,7) // Interface Delivery to OTM
	  that.text(canvas,data,400,105,100,40,7)
	  that.rect(canvas,data,390,150,110,70,8) // Delivery sent to OTM (ZETM/TPSDLS)
	  that.text(canvas,data,400,165,100,40,8)
	  // Third Row
	  that.rect(canvas,data,530,10,300,40,9) // ECC
	  that.text(canvas,data,660,35,100,40,9)
	  that.rect(canvas,data,530,80,150,50,10) //  OTM Shipment Interface
	  that.text(canvas,data,540,105,140,40,10)
	  that.rect(canvas,data,530,150,150,70,11) //  Shipment created in ECC (SHIPPL)
	  that.text(canvas,data,540,170,140,40,11)
	  that.rect(canvas,data,530,260,150,40,12) //  Shipment updated in ECC (SHIPPL)
	  that.text(canvas,data,540,275,150,40,12)
	  that.rect(canvas,data,710,80,120,50,13) //  ECC Receiving Process
	  that.text(canvas,data,720,100,110,40,13)
	  that.rect(canvas,data,710,150,120,40,14) // Goods Issue  (WMS200/I006)
	  that.text(canvas,data,720,165,100,40,14)
	  that.rect(canvas,data,710,205,120,40,15) // Trigger ZACT output
	  that.text(canvas,data,715,217,120,40,15)
	  that.rect(canvas,data,710,260,120,40,16) // Creation of On-time Idoc
	  that.text(canvas,data,715,272,120,40,16)
	  //Fourth Row
	  that.rect(canvas,data,870,10,100,40,17) // OTM
	  that.text(canvas,data,910,35,100,40,17)
	  that.rect(canvas,data,870,80,100,50,18) // Interface Actuals idoc to OTM
	  that.text(canvas,data,878,100,100,40,18)
	  that.rect(canvas,data,870,205,100,40,19) // Actuals Idoc sent to OTM (ZSH3)
	  that.text(canvas,data,876,223,100,40,19)
	  that.rect(canvas,data,870,260,100,40,20) // On-time Idoc sent to OTM
	  that.text(canvas,data,878,275,90,40,20)
	  // Fifth Row
	  that.rect(canvas,data,1010,10,100,40,21) // ECC
	  that.text(canvas,data,1050,35,100,40,21)
	  that.rect(canvas,data,1010,80,100,50,22) // USCC Billing
	  that.text(canvas,data,1020,105,100,40,22)
	  that.rect(canvas,data,1010,150,100,60,23) // USCC creates Intercompany Billing ZIVN at USCC price
	  that.text(canvas,data,1020,162,100,40,23)
	  that.rect(canvas,data,1010,260,100,40,24) // Fin. Invoice (Account Receivable
	  that.text(canvas,data,1013,272,95,30,24)
	  //Sixth row
	  that.rect(canvas,data,1150,10,130,40,25) // Compudata
	  that.text(canvas,data,1170,35,130,40,25)
	  that.rect(canvas,data,1150,80,130,50,26) // Interface Billing Idoc to Compudata
	  that.text(canvas,data,1160,104,120,40,26)
	  that.rect(canvas,data,1150,150,130,60,27) // Billing sent to Compudata (ZRD5)
	  that.text(canvas,data,1160,172,100,40,27)
	  //Seventh Row
	  that.rect(canvas,data,1320,10,280,40,28) // ECC
	  that.text(canvas,data,1440,35,130,40,28)
	  that.rect(canvas,data,1320,80,130,50,29) // MSO Billing
	  that.text(canvas,data,1330,105,130,40,29)
	  that.rect(canvas,data,1320,150,130,60,30) // MSO receives ZRD5 from Compudata
	  that.text(canvas,data,1330,172,120,40,30)
	  that.rect(canvas,data,1320,260,130,40,31) // Fin. Invoice (Accounts Payable)
	  that.text(canvas,data,1328,275,130,40,31)
	  that.rect(canvas,data,1480,80,130,50,32) // USCC Billing
	  that.text(canvas,data,1490,105,130,40,32)
	  that.rect(canvas,data,1480,260,120,40,33) // Receive Incoming Payment
	  that.text(canvas,data,1490,272,100,40,33)
	  // Line And Arrow
	  that.line(canvas,data,170,180,230,180) // line connecting index - 2 & index - 3
	  that.leftArrow(canvas,data,230,180)
	  that.line(canvas,data,360,180,390,180) // line connecting index - 3 & index - 8
	  that.leftArrow(canvas,data,390,180)
	  that.line(canvas,data,350,220,350,260) // line connecting index - 3 & index - 4
	  that.downArrow(canvas,data,350,260)
	  that.line(canvas,data,620,220,620,260) // line connecting index - 11 & index - 12
	  that.downArrow(canvas,data,620,260)
	  that.line(canvas,data,830,220,870,220) // line connecting index - 15 & index - 19
	  that.leftArrow(canvas,data,870,220)
	  that.line(canvas,data,830,280,870,280) // line connecting index - 16 & index - 20
	  that.leftArrow(canvas,data,870,280)
	  that.line(canvas,data,1060,210,1060,260) // line connecting index - 23 & index - 24
	  that.downArrow(canvas,data,1060,260)
	  that.line(canvas,data,1280,180,1320,180) // line connecting index - 27 & index - 30
	  that.leftArrow(canvas,data,1320,180)
	  that.line(canvas,data,1380,210,1380,260) // line connecting index - 30 & index - 31
	  that.downArrow(canvas,data,1380,260)
	  that.line(canvas,data,1450,280,1480,280) // line connecting index - 31 & index - 33
	  that.leftArrow(canvas,data,1480,280)

	  return canvas;
	  }  , 1000 );
	  },





	  sotc_21_proComm :function(x){//SOTC_21
	            var model = this.uisCodeCheck("SOTC_21");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC ProComm v2";
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
	      that.rect(canvas,data,10,10,1200,30,0)//ECC-1
	      that.text(canvas,data,600,30,100,30,0)
	      //second line
	      that.rect(canvas,data,10,70,160,70,1) // ProComm Contact Maintenance Transaction Code: VAP1/VAP2/VAP3
	            that.text(canvas,data,20,90,150,60,1)
	            that.rect(canvas,data,200,70,160,70,3)  // Meta Data Maintenance Transaction Code: Z0CS_PC_METADATA
	            that.text(canvas,data,220,90,150,60,3)
	            that.rect(canvas,data,390,70,630,70,5)  // ProComm Plan Data
	            that.text(canvas,data,590,90,150,60,5)
	            that.rect(canvas,data,1050,70,160,70,12)  // Report Creation
	            that.text(canvas,data,1070,90,150,60,12)
	      //tasks
	            that.rect(canvas,data,10,180,160,70,2)  // Contact Maintenance Transaction Code: VAP1
	            that.text(canvas,data,20,200,150,60,2)
	            that.line(canvas,data,170,200,200,200)
	        that.leftArrow(canvas,data,200,200)
	            that.rect(canvas,data,200,180,160,70,4)	// Meta Data Maintenance Transaction Code: Z0CS_PC_METADATA
	            that.text(canvas,data,220,200,150,60,4)
	             that.line(canvas,data,360,190,1025,190)
	             that.line(canvas,data,1025,190,1025,210)
	             that.line(canvas,data,1025,210,1025,540)
	             that.line(canvas,data,860,540,1025,540)
	             that.line(canvas,data,1025,210,1050,210)
	             that.leftArrow(canvas,data,1050,210)
	              that.line(canvas,data,365,190,365,390)
	              that.line(canvas,data,365,390,380,390)
	              that.leftArrow(canvas,data,380,390)
	        that.leftArrow(canvas,data,200,200)
	            that.dottedLine(canvas,data,380,180,1030,180)
	            that.dottedLine(canvas,data,380,180,380,580)
	            that.dottedLine(canvas,data,380,580,1030,580)
	            that.dottedLine(canvas,data,1030,180,1030,580)
	            that.rect(canvas,data,390,200,190,70,6)	// Temporary Reason Code Table: S553
	            that.text(canvas,data,400,220,180,60,6)
	             that.line(canvas,data,580,220,680,220)
	             that.line(canvas,data,680,220,680,250)
	             that.downArrow(canvas,data,680,250)
	             that.line(canvas,data,510,280,610,280)
	             that.line(canvas,data,510,280,510,300)
	             that.downArrow(canvas,data,510,300)

	            that.rect(canvas,data,390,300,190,70,7)	// Final Reason Code Table: S552
	            that.text(canvas,data,400,320,180,60,7)
	             that.line(canvas,data,580,340,1025,340)
	             that.upArrow(canvas,data,520,370)
	             that.line(canvas,data,520,370,520,385)
	             that.line(canvas,data,520,385,950,385)
	             that.line(canvas,data,710,385,710,400)
	              that.line(canvas,data,950,385,950,400)
	              that.line(canvas,data,950,470,950,485)
	               that.line(canvas,data,710,470,710,485)
	                that.line(canvas,data,710,485,950,485)
	                 that.line(canvas,data,840,485,840,500)
	                 that.downArrow(canvas,data,840,500)

	            that.rect(canvas,data,610,250,190,70,8)	// CSLM Reporting Transaction Code: Z2CSLM
	            that.text(canvas,data,620,270,180,60,8)
	            that.rect(canvas,data,610,400,190,70,9)	// Reason Code Maintenance Transacrtion Code: Z2CMT_REASONCODE
	            that.text(canvas,data,620,420,180,60,9)

	             that.rect(canvas,data,690,500,190,70,10)	// Planning Data Maintenance Transaction Code: Z0CS_PC_PLANDATA
	            that.text(canvas,data,700,520,180,60,10)
	            that.rect(canvas,data,830,400,190,70,11)  // Pick Reason Code Maintenance Transaction Code: Z2CMT_PICKREASONCODE
	            that.text(canvas,data,840,420,180,60,11)

	            that.rect(canvas,data,1050,180,160,70,13)	// Customer Stock Data Transaction Code: Z0CS_PC_REPORT
	            that.text(canvas,data,1070,200,150,60,13)


	              return canvas;
	              }  , 1000 );

	  },
	  sotc_22_partnerDetermination :function(x){//SOTC_22
	            var model = this.uisCodeCheck("SOTC_22");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Partner Determination";
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
	      that.rect(canvas,data,10,10,800,50,0)//   ECC
	      that.text(canvas,data,400,30,100,40,0)
	      //second line
	      that.rect(canvas,data,10,70,170,70,1) // Partner Determination
	            that.text(canvas,data,20,90,160,60,1)
	           that.rect(canvas,data,220,70,590,70,4)	// Sales Order Creation
	            that.text(canvas,data,450,90,160,60,4)
	      //tasks
	            that.rect(canvas,data,10,180,170,70,2)  // Partner Function and Number in Customer Master
	            that.text(canvas,data,20,200,160,60,2)
	             that.line(canvas,data,180,210,220,210)
	             that.leftArrow(canvas,data,220,210)
	            that.rect(canvas,data,10,280,170,70,3)  // EDI Partner Determination (VOE4)
	           that.text(canvas,data,20,310,160,60,3)
	           that.line(canvas,data,180,310,220,310)
	             that.leftArrow(canvas,data,220,310)

	           that.rect(canvas,data,220,180,170,70,5)  // Manual Sales Order Creation (VA01)
	           that.text(canvas,data,230,200,160,60,5)
	           that.line(canvas,data,390,210,430,210)
	             that.leftArrow(canvas,data,430,210)
	           that.rect(canvas,data,220,280,170,70,6)  // EDI Inbound Order Creation (Z2CMTORDERS1230)
	            that.text(canvas,data,230,300,160,60,6)
	            that.line(canvas,data,390,310,430,310)
	             that.leftArrow(canvas,data,430,310)

	             that.rect(canvas,data,430,180,170,70,7)  // Partner Numbers will be determined from the customer master
	           that.text(canvas,data,440,200,160,60,7)
	            that.line(canvas,data,600,210,615,210)
	            that.line(canvas,data,615,210,615,310)
	            that.line(canvas,data,615,260,640,260)
	            that.leftArrow(canvas,data,640,260)

	               that.line(canvas,data,600,310,615,310)

	           that.rect(canvas,data,430,280,170,70,8)  // Partner Numbers will be determined using the entries from VOE4 (EDPAR)
	            that.text(canvas,data,440,300,160,60,8)

	            that.rect(canvas,data,640,230,170,70,9)	// Sales Order Created
	            that.text(canvas,data,650,250,160,60,9)


	              return canvas;
	              }  , 1000 );

	  },

	  sotc_23_germanInvoice :function(x){//SOTC_23


	  var model = this.uisCodeCheck("SOTC_23");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC German Invoice";
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
	  that.rect(canvas,data,100,10,500,40,0) // ECC
	  that.text(canvas,data,330,35,300,40,0)
	  that.rect(canvas,data,100,100,225,60,1) // Invoice List Creation Tcode: VF23 Program:  SDINVLDL
	  that.text(canvas,data,110,125,220,40,1)
	  that.rect(canvas,data,100,210,225,60,2) // Invoice list Created. See possible IL billing
	  that.text(canvas,data,110,235,220,40,2)
	  that.rect(canvas,data,375,100,225,60,3) // List of Invoice List IDoc  Tcode: Z2CMT4150
	  that.text(canvas,data,385,125,220,40,3)
	  that.rect(canvas,data,375,210,225,60,4) // Daily jobs are executed for tcode Z2CMT4150
	  that.text(canvas,data,385,235,220,40,4)
	  // Second Column
	  that.rect(canvas,data,650,10,250,40,5) // BODS System
	  that.text(canvas,data,740,35,240,40,5)
	  that.rect(canvas,data,650,100,250,60,6) // Idocs received by BODS System_
	  that.text(canvas,data,660,130,240,40,6)
	  that.rect(canvas,data,650,210,250,60,7) // Idocs are sent out by ECC to BODS System....
	  that.text(canvas,data,660,235,240,40,7)
	  // Third Column
	  that.rect(canvas,data,950,10,250,40,8) // Middleware
	  that.text(canvas,data,1040,35,240,40,8)
	  that.rect(canvas,data,950,100,250,60,9) // Messages are passingthrough  middleware to partner
	  that.text(canvas,data,960,130,240,40,9)
	  that.rect(canvas,data,950,210,250,60,10) // Messages are passing through UPXI topartner
	  that.text(canvas,data,960,235,240,40,10)
	  // Fourth Column
	  that.rect(canvas,data,1250,10,250,40,11) // Third Party / Partner
	  that.text(canvas,data,1320,35,240,40,11)
	  that.rect(canvas,data,1250,100,250,60,12) // Invoices are received by partner
	  that.text(canvas,data,1260,130,240,40,12)
	  that.rect(canvas,data,1250,210,250,60,13) // Invoices received by Partner
	  that.text(canvas,data,1260,235,240,40,13)
	  // Line And Arrow
	  that.line(canvas,data,325,240,375,240) // line connecting index - 2, index - 4
	  that.leftArrow(canvas,data,375,240)
	  that.line(canvas,data,600,240,650,240) // line connecting index - 4, index - 7
	  that.leftArrow(canvas,data,650,240)
	  that.line(canvas,data,900,240,950,240) // line connecting index - 7, index - 10
	  that.leftArrow(canvas,data,950,240)
	  that.line(canvas,data,1200,240,1250,240) // line connecting index - 10, index - 13
	  that.leftArrow(canvas,data,1250,240)

	  return canvas;
	  }  , 1000 );
	  },
	  sotc_24_CSLMprocess :function(x){//SOTC_24


	  var model = this.uisCodeCheck("SOTC_24");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC CSLM Process and CSLM Table Updates";
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
	  //First Row(Top to Bottom)
	  that.rect(canvas,data,90,10,1380,40,0) // ECC
	  that.text(canvas,data,740,30,300,40,0)
	  that.rect(canvas,data,90,110,200,50,1) // CSLM Table Configurations
	  that.text(canvas,data,110,135,190,50,1)
	  that.rect(canvas,data,90,220,200,50,2) // Maintenance of Custom Tables Related to CSLM
	  that.text(canvas,data,110,245,190,50,2)
	  that.rect(canvas,data,330,110,500,50,3) // Sales Order and Outbound Delivery Creation
	  that.text(canvas,data,450,135,390,50,3)
	  that.rect(canvas,data,330,220,200,50,4) // Sales Order Creation (VA01 / Inbound IDOC)
	  that.text(canvas,data,340,245,190,50,4)
	  that.rect(canvas,data,330,430,200,50,5) //  Sales Order Change (VA02/VKM3/Z2CMT5040_V3)
	  that.text(canvas,data,340,455,190,50,5)
	  that.rect(canvas,data,330,330,200,50,6) // Update Tables
	  that.text(canvas,data,340,355,190,50,6)
	  that.rect(canvas,data,870,110,300,50,7) // Outbound Delivery Change
	  that.text(canvas,data,940,135,390,50,7)
	  that.rect(canvas,data,570,220,260,50,8) // Standard Processing for Delivery Creation, Change, and PGI
	  that.text(canvas,data,580,245,250,50,8)
	  that.rect(canvas,data,570,330,260,50,9) // Standard Processing for Delivery Creation, Change, and PGI
	  that.text(canvas,data,580,355,250,50,9)
	  that.rect(canvas,data,870,220,300,50,10) // Manual Option: Actual Delivery On Time I
	  that.text(canvas,data,880,245,290,50,10)
	  that.rect(canvas,data,870,330,300,50,11) // Update Table LIKP
	  that.text(canvas,data,880,355,290,50,11)
	  that.rect(canvas,data,870,430,300,50,12) // Interface Option: On Time Delivery Interface (Z2CS0506000)
	  that.text(canvas,data,880,455,290,50,12)
	  that.rect(canvas,data,1210,110,260,50,13) // CSLM Table Update
	  that.text(canvas,data,1280,135,290,50,13)
	  that.rect(canvas,data,1210,220,260,50,14) // CSLM Temporary Reason Code to Final
	  that.text(canvas,data,1220,245,250,50,14)
	  that.rect(canvas,data,1210,330,260,50,15) // Update Final Reason Codes (Transaction: Z2CS0507)
	  that.text(canvas,data,1220,355,250,50,15)
	  that.rect(canvas,data,1210,430,260,50,16) // Update Table S552 or S553
	  that.text(canvas,data,1220,455,250,50,16)

	  // Line And Arrow
	  that.line(canvas,data,430,270,430,330) // line connecting index - 4 & index - 6
	  that.downArrow(canvas,data,430,330)
	  that.line(canvas,data,530,455,700,455) // line connecting index - 5 & index - 16
	  that.line(canvas,data,700,455,700,530)
	  that.line(canvas,data,700,530,1185,530)
	  that.line(canvas,data,1185,530,1185,455)
	  that.line(canvas,data,1185,455,1210,455)
	  that.leftArrow(canvas,data,1210,455)
	  that.line(canvas,data,430,270,430,330) // line connecting index - 8 & index - 10
	  that.downArrow(canvas,data,430,330)
	  that.line(canvas,data,700,270,700,330) // line connecting index - 8 & index - 10
	  that.downArrow(canvas,data,700,330)
	  that.line(canvas,data,1020,270,1020,330) // line connecting index - 10 & index - 11
	  that.downArrow(canvas,data,1020,330)
	  that.line(canvas,data,1020,380,1020,430) // line connecting index - 11 & index - 12
	  that.upArrow(canvas,data,1020,380)

	  that.line(canvas,data,1185,530,1185,245)  // line connecting index - 10 ,index-12 & index - 16
	  that.line(canvas,data,1170,245,1185,245)
	  that.line(canvas,data,1170,455,1210,455)

	  that.line(canvas,data,1470,245,1490,245)  // line connecting index - 14 ,index-15 & index - 16
	  that.line(canvas,data,1490,245,1490,455)
	  that.line(canvas,data,1490,455,1470,455)
	  that.line(canvas,data,1470,355,1490,355)

	  // Dotted Line
	  that.dottedline(canvas,data,430,300,300,300) //line connecting index 4 & index 5
	  that.dottedline(canvas,data,300,300,300,410)
	  that.dottedline(canvas,data,300,410,430,410)
	  that.dottedline(canvas,data,430,410,430,430)
	  that.downArrow(canvas,data,430,430)

	  that.dottedline(canvas,data,430,180,1340,180) //line connecting index 4 & index 14
	  that.dottedline(canvas,data,430,180,430,220)
	  that.dottedline(canvas,data,1340,180,1340,220)
	  that.downArrow(canvas,data,1340,220)

	  that.dottedline(canvas,data,700,200,1190,200) //line connecting index 8 & index 15
	  that.dottedline(canvas,data,700,200,700,220)
	  that.dottedline(canvas,data,1190,200,1190,355)
	  that.dottedline(canvas,data,1190,355,1210,355)
	  that.leftArrow(canvas,data,1210,355)

	  that.dottedline(canvas,data,830,245,870,245) //line connecting index 8 & index 10
	  that.leftArrow(canvas,data,870,245)


	  that.dottedline(canvas,data,850,245,850,455) //line connecting index 8 & index 12
	  that.dottedline(canvas,data,850,455,870,455)
	  that.leftArrow(canvas,data,870,455)

	  return canvas;
	  }  , 1000 );
	  },


	  sotc_25_eInvoicing :function(x){//SOTC_25
	            var model = this.uisCodeCheck("SOTC_25");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC E-Invoicing";
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

	  that.rect(canvas,data,30,10,850,40,0) // ECC
	      that.text(canvas,data,450,30,840,40,0)
	      that.rect(canvas,data,30,70,850,60,1) // E-Invoicing
	      that.text(canvas,data,420,100,840,60,1)
	      that.rect(canvas,data,30,200,250,80,2)  //  Maintain Condition Record for Output Types (VV31)
	      that.text(canvas,data,40,230,220,40,2)
	      that.line(canvas,data,280,240,300,240) // output line to "Invoice Creation /  Invoi
	      that.line(canvas,data,300,240,300,390)
	      that.line(canvas,data,300,310,350,310)
	      that.leftArrow(canvas,data,350,310)
	      that.rect(canvas,data,30,350,250,80,3)  //  Maintain Customer E-Invoicing Complexity Table (ZS2CS_EINVOIC)
	      that.text(canvas,data,40,380,220,40,3)
	      that.line(canvas,data,280,390,300,390)
	      that.rect(canvas,data,350,230,250,130,4) //  Invoice Creation /  Invoice List Creation with E-invoicing o
	      that.text(canvas,data,370,260,220,40,4)
	      that.line(canvas,data,600,300,620,300)
	      that.line(canvas,data,620,300,620,410)  // output line to "Aggregation Email Processing M
	      that.line(canvas,data,620,410,640,410)
	      that.leftArrow(canvas,data,640,410)
	      that.line(canvas,data,620,300,620,180)  // output line to "Simple Mail"
	      that.line(canvas,data,620,180,1050,180)
	      that.leftArrow(canvas,data,1050,180)
	      that.rect(canvas,data,640,370,250,80,5) //  Aggregation Email Processing Manual or via Job (ZS2CS_AGGREGATE)
	      that.text(canvas,data,660,400,240,40,5)
	      that.line(canvas,data,765,450,765,490)  // output line to "Aggregation Email Processing Report"
	      that.downArrow(canvas,data,765,490)
	      that.line(canvas,data,890,410,1050,410) // output line to "Complex Mail"
	      that.leftArrow(canvas,data,1050,410)
	      that.rect(canvas,data,640,490,250,80,6)  // Aggregation Email Processing Report
	      that.text(canvas,data,660,520,240,40,6)
	      that.rect(canvas,data,930,10,500,40,7) //   External System
	      that.text(canvas,data,1150,40,490,40,7)
	      that.rect(canvas,data,930,70,500,60,8) // Recipient's Email
	      that.text(canvas,data,1150,100,490,50,8)
	      that.rect(canvas,data,1050,150,250,60,9)  // Simple Mail
	      that.text(canvas,data,1130,180,240,40,9)
	      that.rect(canvas,data,1050,390,250,60,10)  //  Complex Mail
	      that.text(canvas,data,1130,420,240,40,10)

	              return canvas;
	              }  , 1000 );

	  },
	  sotc_26_cabinetRental :function(x){//SOTC_26
	            var model = this.uisCodeCheck("SOTC_26");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Cabinet Rentals v3";
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


	  that.rect(canvas,data,30,10,1500,40,0) // ECC
	    that.text(canvas,data,730,30,1000,40,0)
	    that.rect(canvas,data,30,70,200,60,1) // Assignment of CabinetsTransaction Code: VA01
	    that.text(canvas,data,50,90,190,40,1)
	    that.rect(canvas,data,30,150,200,80,2) //Sales Order Creation Order Type: YA54
	    that.text(canvas,data,50,180,180,40,2)
	    that.rect(canvas,data,280,70,450,60,3) // Delivery Creation Delivery Type: YCOR Transaction Code: VL01N
	    that.text(canvas,data,310,100,400,40,3)
	    that.rect(canvas,data,280,150,200,70,4) // Enter serial number on the material
	    that.text(canvas,data,290,180,180,40,4)
	    that.line(canvas,data,480,185,530,185)  // output line to "ATP Check"
	    that.leftArrow(canvas,data,530,185)
	    that.rect(canvas,data,530,150,200,70,5) // ATP Check
	    that.text(canvas,data,580,180,180,40,5)
	    that.line(canvas,data,630,220,630,250)  // output line to "Picking and GI"
	    that.downArrow(canvas,data,630,250)
	    that.rect(canvas,data,530,250,200,70,6) // Picking and GI
	    that.text(canvas,data,580,280,180,40,6)
	    that.line(canvas,data,730,285,780,285)  // output line to "Automactic run of job YCAB_PROCESS_CONTRATTI"
	    that.leftArrow(canvas,data,780,285)
	    that.rect(canvas,data,780,70,450,60,7) // Cabinet Contract Transaction Code: VA41
	    that.text(canvas,data,870,100,400,40,7)
	    that.rect(canvas,data,780,240,200,90,8) // Automactic run of job YCAB_PROCESS_CONTRATTI
	    that.text(canvas,data,790,270,180,40,8)
	    that.line(canvas,data,980,285,1000,285)
	    that.line(canvas,data,1000,235,1000,335)
	    that.line(canvas,data,1000,235,1030,235)
	    that.line(canvas,data,1000,335,1030,335)
	    that.rect(canvas,data,1030,200,200,70,9) // Creation of Contract Order Type: YK50
	    that.text(canvas,data,1040,230,180,40,9)
	    that.rect(canvas,data,1030,300,200,70,10) // Update of Contract Order Type: YK50
	    that.text(canvas,data,1040,330,180,40,10)
	    that.line(canvas,data,1260,285,1280,285)
	    that.line(canvas,data,1260,235,1260,335)
	    that.line(canvas,data,1260,235,1230,235)
	    that.line(canvas,data,1260,335,1230,335)
	    that.rect(canvas,data,1280,70,200,60,11) // Invoice Creation Transaction Code: VF01
	    that.text(canvas,data,1290,90,180,40,11)
	    that.rect(canvas,data,1280,240,200,90,12) // Create invoice Billing Type: YFAS
	    that.text(canvas,data,1290,270,180,40,12)
	    that.box(canvas,data,420,420,600,30,13,"3px")  //CABINET SUMMARY
	    that.freeText(canvas,data,650,440,500,40,13,"15px")
	    that.rect(canvas,data,30,480,1500,40,14) // ECC
	    that.text(canvas,data,700,500,1400,40,14)
	    that.rect(canvas,data,30,540,450,60,15) // Validation of Cabinet summary(Elaborazione Provvisori
	    that.rect(canvas,data,30,620,450,70,16) // Display Consignment and retunanable packing Stocks at
	    that.line(canvas,data,480,655,510,655)
	    that.line(canvas,data,510,655,510,835)
	    that.line(canvas,data,510,835,480,835)
	    that.rect(canvas,data,30,710,450,70,17)  // Display Material Serial Numnber Transaction Code: IQ09
	    that.text(canvas,data,60,740,400,40,17)
	    that.line(canvas,data,480,745,560,745)
	    that.leftArrow(canvas,data,560,745)
	    that.rect(canvas,data,30,800,450,70,18)  // Display Seviceable Item Contract Transaction Code: IW75
	    that.text(canvas,data,60,830,400,40,18)
	    that.rect(canvas,data,550,540,450,60,19) // Validation of Cabinet's Data
	    that.text(canvas,data,690,560,400,40,19)
	    that.rect(canvas,data,680,620,200,70,20) // Processing of cabinets for the past campaign
	    that.line(canvas,data,780,690,780,700)
	    that.line(canvas,data,660,700,920,700)
	    that.line(canvas,data,660,700,660,720)
	    that.line(canvas,data,920,700,920,720)
	    that.rect(canvas,data,560,720,200,70,21)  // Incorrect Manual Addition/update of
	    that.text(canvas,data,570,740,180,40,21)
	    that.rect(canvas,data,800,720,200,70,22)  // Deletion of Equipment number data in S1P Table: OBJK
	    that.text(canvas,data,810,740,180,40,22)
	    that.line(canvas,data,1000,755,1080,755)  // output line to "Update Cabinet Rental Summary"
	    that.leftArrow(canvas,data,1080,755)
	    that.rect(canvas,data,1080,540,450,60,23)  //  Cabinet Rental Summary
	    that.text(canvas,data,1090,560,400,40,23)
	    that.rect(canvas,data,1080,720,450,70,24)  //  Update Cabinet Rental Summary
	    that.text(canvas,data,1200,750,400,40,24)

	              return canvas;
	              }  , 1000 );

	  },
	  sotc_27_materialDetermination :function(x){//SOTC_27
	            var model = this.uisCodeCheck("SOTC_27");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Material Determination";
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

	  that.rect(canvas,data,10,10,1550,40,0) // ECC
	    that.text(canvas,data,750,30,1000,40,0)

	    that.rect(canvas,data,10,70,200,60,1) // Creation of Material Determination
	    that.text(canvas,data,20,100,180,40,1)

	    that.rect(canvas,data,10,170,200,80,2) // Material Determination Creation (VB11)
	    that.text(canvas,data,20,200,180,60,2)
	    that.line(canvas,data,105,250,105,300)  // output line to "TUGTIN Send to CRM/Hybris"
	    that.downArrow(canvas,data,105,300)

	    that.line(canvas,data,210,210,240,210)
	    that.leftArrow(canvas,data,240,210)

	    that.line(canvas,data,240,190,240,390)
	    that.line(canvas,data,240,190,280,190)
	    that.line(canvas,data,240,290,280,290)
	    that.line(canvas,data,240,390,280,390)


	    that.line(canvas,data,520,190,520,390)
	    that.line(canvas,data,520,190,480,190)
	    that.line(canvas,data,520,290,480,290)
	    that.line(canvas,data,520,390,480,390)


	    that.rect(canvas,data,10,300,200,80,3) // TUGTIN Send to CRM/Hybris
	    that.text(canvas,data,20,330,180,60,3)

	    that.rect(canvas,data,280,70,200,60,4) // Sales Order Creation
	    that.text(canvas,data,290,100,180,40,4)

	    that.rect(canvas,data,280,150,200,80,5) // Manual Sales Order Creation (VA01)
	    that.text(canvas,data,290,180,180,60,5)

	    that.rect(canvas,data,280,250,200,80,6) // EDI Inbound Order Creation (Idoc)
	    that.text(canvas,data,290,280,180,60,6)
	    that.line(canvas,data,520,290,550,290)  // output line to "Material Determination ...."
	    that.leftArrow(canvas,data,550,290)

	    that.rect(canvas,data,280,350,200,80,7)  // Prime / DEX Order Creation (iPad)
	    that.text(canvas,data,290,380,180,60,7)

	    that.rect(canvas,data,550,70,550,60,8) // Material Determination
	    that.text(canvas,data,750,100,500,40,8)

	    that.rect(canvas,data,550,240,250,120,9) // Material Determination  Material entered
	    that.text(canvas,data,560,270,230,100,9)
	    that.line(canvas,data,800,300,850,300)  //  outptu line to "Plant determination will also happen if..........."
	    that.leftArrow(canvas,data,850,300)

	    that.rect(canvas,data,850,240,250,120,10) // Plant determination will also happen if the
	    that.text(canvas,data,860,270,230,100,10)

	    that.rect(canvas,data,1150,70,410,60,11)  // Material Determination Reports
	    that.text(canvas,data,1250,100,400,40,11)

	    that.rect(canvas,data,1150,150,180,80,12) // Z2CMT3250
	    that.text(canvas,data,1200,180,160,60,12)

	    that.rect(canvas,data,1380,150,180,80,13)  // Z2MATDET
	    that.text(canvas,data,1430,180,160,60,13)


	              return canvas;
	              }  , 1000 );

	  },

	  sotc_28_salesOutputDetermination :function(x){//SOTC_28


	  var model = this.uisCodeCheck("SOTC_28");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Sales Output Determination and Processing MasterData";
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
	  that.rect(canvas,data,10,10,1460,40,0) // ECC
	  that.text(canvas,data,730,35,300,40,0)
	  // First Column
	  that.rect(canvas,data,10,80,350,70,1) // Creation of Sales Output Determination Condition Records
	  that.text(canvas,data,50,105,300,40,1)
	  that.rect(canvas,data,10,250,350,50,2) // Sales Output Condition Record Creation(VV11)
	  that.text(canvas,data,60,280,300,40,2)

	  // Second Column
	  that.rect(canvas,data,450,80,250,70,3) // Sales Order Creation
	  that.text(canvas,data,510,120,130,40,3)
	  that.rect(canvas,data,450,200,250,60,4) // Manual Sales Order Creation(VA01)
	  that.text(canvas,data,520,230,140,40,4)
	  that.rect(canvas,data,450,290,250,60,5) // EDI Inbound Order Creation(Idoc)
	  that.text(canvas,data,520,320,140,40,5)
	  // Third Column
	  that.rect(canvas,data,800,225,300,100,6) // Output Determination
	  that.text(canvas,data,890,245,140,40,6)
	  that.text(canvas,data,840,280,220,40,7)  // Output type is automatically determined via condition record.

	  that.rect(canvas,data,1160,225,300,100,8) // Output type processing
	  that.text(canvas,data,1240,245,300,40,8)
	  that.text(canvas,data,1210,280,200,40,9)       //Background job Immediately Own Transaction
	  // Lines and Arrows
	  that.line(canvas,data,360,275,410,275) // line containing index - 2 & index - 4 & 5
	  that.leftArrow(canvas,data,410,275)

	  that.line(canvas,data,410,230,410,320) // Vertical Line connecting index 4 & 5 (entering)

	  that.line(canvas,data,410,230,450,230) // Horizontal line connecting Vertical line & index - 4(entering)
	  that.line(canvas,data,410,320,450,320) // Horizontal line connecting Vertical line & index - 5(entering)

	  that.line(canvas,data,700,230,730,230) // Horizontal line connecting Vertical line & index - 4(leaving)
	  that.line(canvas,data,700,320,730,320) // Horizontal line connecting Vertical line & index - 4(leaving)

	  that.line(canvas,data,730,230,730,320) // Vertical Line connecting Index - 4 & 5 (leaving)

	  that.line(canvas,data,730,275,800,275)
	  that.leftArrow(canvas,data,800,275)

	  that.line(canvas,data,1100,275,1160,275)
	  that.leftArrow(canvas,data,1160,275)


	  return canvas;
	  }  , 1000 );
	  },
	  sotc_29standardCreditDebitMemo :function(x){//SOTC_29


	  var model = this.uisCodeCheck("SOTC_29");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Standard Credit-Debit Memo Request MasterData";
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
	  // First Row
	  that.pentagon(canvas,data,10,10,1250,1280,30,50,0) // ECC
	  that.text(canvas,data,630,35,300,40,0)

	  //Second Row
	  that.rect(canvas,data,10,80,850,50,1) // ECC Order to Billing - MSO
	  that.text(canvas,data,360,110,300,40,1)

	  // First Column
	  that.rect(canvas,data,10,260,150,90,2) // Reference Invoice (F2) with Inconsistencies
	  that.text(canvas,data,25,295,130,40,2)
	  that.rect(canvas,data,10,480,150,90,3) // Reference Intercompany Invoice (IV) with
	  that.text(canvas,data,25,495,120,40,3)

	  // Second Column
	  that.rect(canvas,data,230,140,175,50,4) // Create Debit Memo Request without Reference(ZDRM)
	  that.text(canvas,data,240,160,160,40,4)
	  that.rect(canvas,data,230,200,175,50,5) // Create Debit Memo Request with Reference(ZDR)
	  that.text(canvas,data,240,220,160,40,5)
	  that.rect(canvas,data,230,360,175,50,6) // Create Credit Memo Request with Reference (ZCR)
	  that.text(canvas,data,240,380,160,40,6)
	  that.rect(canvas,data,230,420,175,50,7) // Create Credit Memo Request without Reference (ZCRM)
	  that.text(canvas,data,240,440,160,40,7)

	  //Third Column
	  that.rect(canvas,data,470,165,175,60,8) // Creation of Debit Memo (ZDL2) & Accounting Document
	  that.text(canvas,data,490,185,160,40,8)
	  that.rect(canvas,data,470,385,175,60,9) // Creation of Credit Memo (ZCG2) & Accounting Document
	  that.text(canvas,data,490,405,160,40,9)

	  //Fourth Column
	  that.rect(canvas,data,690,280,175,50,10) //  Processing of EDI output to create INVOIC IDOC
	  that.text(canvas,data,700,300,160,40,10)

	  //Second Row
	  that.rect(canvas,data,880,80,400,50,11) //  USCC
	  that.text(canvas,data,1050,110,100,40,11)

	  //Fifth Column
	  that.rect(canvas,data,880,480,170,90,12) //  Create IC Credit Memo(ZCRI)/Debit Memo Request(ZDRI) with/without Reference
	  that.text(canvas,data,900,500,120,40,12)

	  //Sixth Column
	  that.rect(canvas,data,1100,480,170,90,13) //  Creation of IC Credit Memo (ZIG) andIC Debit Memo (ZIV) & Accounting Document
	  that.text(canvas,data,1120,500,120,40,13)

	  //First Row
	  that.pentagon(canvas,data,1310,10,1550,1570,30,50,0) // External System
	  that.text(canvas,data,1375,35,300,40,14)

	  //Seventh Column
	  that.rect(canvas,data,1310,280,255,50,15) // IDOC message type INVOIC sent to Partner
	  that.text(canvas,data,1320,310,250,40,15)
	  that.rect(canvas,data,1310,350,255,50,16) // IDOC message type INVOIC sent to Compudata
	  that.text(canvas,data,1320,372,250,40,16)

	  //Lines and Arrow
	  that.dottedLine(canvas,data,85,260,85,225) // Dotted line connecting index - 3 & 6
	  that.dottedLine(canvas,data,85,225,230,225)
	  that.leftArrow(canvas,data,230,225)

	  that.dottedLine(canvas,data,85,350,85,385)// Dotted line connecting index - 3 & 7
	  that.dottedLine(canvas,data,85,385,230,385)
	  that.leftArrow(canvas,data,230,385)

	  that.dottedLine(canvas,data,160,525,880,525) // Dotted line connecting index - 4 & 13
	  that.leftArrow(canvas,data,880,525)

	  that.line(canvas,data,405,165,440,165)// Line Connecting index - 5 & 6
	  that.line(canvas,data,440,165,440,225)
	  that.line(canvas,data,405,225,440,225)

	  that.line(canvas,data,440,195,470,195) // Line connecting index - 5&6 to index -9
	  that.leftArrow(canvas,data,470,195)

	  that.line(canvas,data,405,385,440,385)// Line Connecting index - 7 & 8
	  that.line(canvas,data,440,385,440,445)
	  that.line(canvas,data,405,445,440,445)

	  that.line(canvas,data,440,415,470,415) // Line Connecting index - 5 & 6 to index - 10
	  that.leftArrow(canvas,data,470, 415)

	  that.line(canvas,data,645,195,660,195) // Line Connecting index - 9 & 10
	  that.line(canvas,data,660,195,660,415)
	  that.line(canvas,data,645,415,660,415)

	  that.line(canvas,data,660,305,690,305) // Line Connecting index - 9 & 10 to index - 11
	  that.leftArrow(canvas,data,690, 305)

	  that.line(canvas,data,865,305,1310,305) // Line Connecting index - 11 & 16
	  that.leftArrow(canvas,data,1310, 305)

	  that.line(canvas,data,1050,525,1100,525)// Line Connecting index - 13 & 14
	  that.leftArrow(canvas,data,1100, 525)

	  that.line(canvas,data,1270,525,1290,525) // Line Connecting index - 14 & 16
	  that.line(canvas,data,1290,525,1290,305)

	  //pipedRightArrow(10,30,40,20,60,35,50,40,1)

	  return canvas;
	  }  , 1000 );
	  },

	  sotc_30_shortShelfLifeProcess :function(x){//SOTC_30


	  var model = this.uisCodeCheck("SOTC_30");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Short Shelf Life Process v02";
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
	  that.rect(canvas,data,10,10,600,40,0)//ECC**
	  that.text(canvas,data,290,35,600,40,0)//ECC**

	  that.rect(canvas,data,630,10,120,40,6)//OTM
	  that.text(canvas,data,670,35,120,40,6)//OTM

	  that.rect(canvas,data,770,10,440,40,10)//ECC second
	  that.text(canvas,data,950,35,440,40,10)//ECC second


	  //second line
	  that.rect(canvas,data,10,70,600,40,1)//ECC Sales Order Process
	  that.text(canvas,data,240,95,600,40,1)//ECC Sales Order Process

	  that.rect(canvas,data,630,70,120,40,7)//Interface Delivery to OTM
	  that.text(canvas,data,635,85,120,40,7)//Interface Delivery to OTM

	  that.rect(canvas,data,770,70,130,40,11)//OTM Shipment Interface
	  that.text(canvas,data,775,85,130,40,11)//OTM Shipment Interface

	  that.rect(canvas,data,920,70,140,40,13)//ECC Receiving Process
	  that.text(canvas,data,925,85,140,40,13)//ECC Receiving Process

	  that.rect(canvas,data,1080,70,130,40,15)//ECC Billing Process
	  that.text(canvas,data,1085,85,130,40,15)//ECC Billing Process




	  //tasks
	  that.rect(canvas,data,20,130,120,70,2)//Sales Order creationVA01 / EDI MSO:ZA0USCC:ZA6M/ZA6
	  that.text(canvas,data,25,145,120,70,2)//Sales Order creationVA01 / EDI MSO:ZA0USCC:ZA6M/ZA6

	  that.line(canvas,data,140,165,170,165)//from Sales Order creationVA01 / EDI MSO:ZA0USCC:ZA6M/ZA6v
	  that.leftArrow(canvas,data,170,165)

	  that.rect(canvas,data,170,130,120,70,3)//Change of Original item category determined to SSL item category
	  that.text(canvas,data,175,145,120,70,3)//Change of Original item category determined to SSL item category

	  that.line(canvas,data,290,165,320,165)//from Change of Original item category determined to SSL item category to Manual discount condition is entered. (Z4U1)
	  that.leftArrow(canvas,data,320,165)

	  that.rect(canvas,data,320,130,120,70,4)//Manual discount condition is entered. (Z4U1)
	  that.text(canvas,data,325,145,120,70,4)//Manual discount condition is entered. (Z4U1)

	  that.line(canvas,data,440,165,470,165)//from Manual discount condition is entered. (Z4U1) to Outbound Delivery creation (LF)(Manual/Job)
	  that.leftArrow(canvas,data,470,165)

	  that.rect(canvas,data,470,130,125,70,5)//Outbound Delivery creation (LF)(Manual/Job)
	  that.text(canvas,data,475,145,125,70,5)//Outbound Delivery creation (LF)(Manual/Job)

	  that.line(canvas,data,595,165,630,165)//from Outbound Delivery creation (LF)(Manual/Job) to Delivery sent to OTM (ZETM/TPSDLS)
	  that.leftArrow(canvas,data,630,165)

	  that.line(canvas,data,610,165,610,250)//vertical line downwards to Delivery instructionZ003 (WMS190 /I003)
	  that.downArrow(canvas,data,610,250)

	  that.rect(canvas,data,630,130,120,70,8)//Delivery sent to OTM (ZETM/TPSDLS)
	  that.text(canvas,data,635,145,120,70,8)//Delivery sent to OTM (ZETM/TPSDLS)

	  that.line(canvas,data,750,165,780,165)//from Delivery sent to OTM (ZETM/TPSDLS) to Shipment created in ECC(SHIPPL)
	  that.leftArrow(canvas,data,780,165)

	  that.rect(canvas,data,550,250,125,70,9)//Delivery instruction Z003 (WMS190 /I003)
	  that.text(canvas,data,555,265,125,70,9)//Delivery instruction Z003 (WMS190 /I003)

	  that.rect(canvas,data,780,130,120,70,12)//Shipment created in ECC(SHIPPL)
	  that.text(canvas,data,785,145,120,70,12)//Shipment created in ECC(SHIPPL)

	  that.line(canvas,data,900,165,930,165)//from Shipment created in ECC(SHIPPL) to Goods
	  that.leftArrow(canvas,data,930,165)

	  that.rect(canvas,data,930,130,130,70,14)//Goods Issue with transfer from Block to Unrestricted stocks (WMS200/I006)
	  that.text(canvas,data,935,145,130,70,14)//Goods Issue with transfer from Block to Unrestricted stocks (WMS200/I006)

	  that.line(canvas,data,1060,165,1090,165)//from Goods Issue with transfer from
	  that.leftArrow(canvas,data,1090,165)

	  that.rect(canvas,data,1090,130,120,70,16)//Creation of Invoice (F2) & Intercompany
	  that.text(canvas,data,1095,145,120,70,16)//Creation of Invoice (F2) & Intercompany

	  return canvas;
	  }  , 1000 );
	  },
	  sotc_31_productAllocation :function(x){//SOTC_31


	  var model = this.uisCodeCheck("SOTC_31");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Product Allocation";
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
	   that.rect(canvas,data,10,10,900,40,0)//ECC
	   that.text(canvas,data,500,35,900,40,0)//ECC
	   //second line
	   that.rect(canvas,data,10,70,590,40,1)//Product Allocation Maintenance
	    that.text(canvas,data,205,90,590,40,1)//Product Allocation Maintenance
	    that.rect(canvas,data,620,70,200,40,12)//Sales Order Creation
	   that.text(canvas,data,660,90,200,40,12)//Sales Order Creation
	   //tasks
	   that.rect(canvas,data,10,130,160,60,2)//Planning Hierarchy Maintenance(MC61/MC62)
	   that.text(canvas,data,15,145,160,60,2)//Planning Hierarchy Maintenance(MC61/MC62)

	    that.line(canvas,data,30,190,30,225)//vertical line downwards from Planning Hierarchy Maintenance(MC61/MC62)

	    that.line(canvas,data,30,225,30,475)//vertical line downwards towards product code and customer hierarchy

	    that.line(canvas,data,30,425,60,425)//horizontal line connecting to Product code
	  that.leftArrow(canvas,data,60,425)

	    that.line(canvas,data,30,475,60,475)//horizontal line connecting to Customer Hierarchy
	  that.leftArrow(canvas,data,60,475)

	    that.line(canvas,data,30,225,60,225)//horizontal line connecting to Sales Area
	  that.leftArrow(canvas,data,60,225)

	    that.line(canvas,data,170,160,220,160)//from Planning Hierarchy
	  that.leftArrow(canvas,data,220,160)

	    that.rect(canvas,data,60,210,120,30,3)//Sales Area
	   that.text(canvas,data,65,225,120,30,3)//Sales Area

	    that.line(canvas,data,80,240,80,365)//vertical line downwards from sales area

	    that.line(canvas,data,80,285,130,285)//horizontal line connecting to Sales organization
	  that.leftArrow(canvas,data,130,285)

	    that.line(canvas,data,80,325,130,325)//horizontal line connecting to Distribution channel
	  that.leftArrow(canvas,data,130,325)

	    that.line(canvas,data,80,365,130,365)//horizontal line connecting to division
	  that.leftArrow(canvas,data,130,365)

	    that.rect(canvas,data,130,270,120,30,4)//Sales Organization
	   that.text(canvas,data,135,285,120,30,4)//Sales Organization

	    that.rect(canvas,data,130,310,120,30,5)//Distribution Channel
	   that.text(canvas,data,135,325,120,30,5)//Distribution Channel

	    that.rect(canvas,data,130,350,120,30,6)//Division
	   that.text(canvas,data,135,365,120,30,6)//Division

	    that.rect(canvas,data,60,410,120,30,7)//Product Code
	   that.text(canvas,data,65,425,120,30,7)//Product Code
	    that.rect(canvas,data,60,460,120,30,8)//Customer Hierarchy
	   that.text(canvas,data,65,475,120,30,8)//Customer Hierarchy
	    that.rect(canvas,data,220,130,160,60,9)//Planning Hierarchy Update(OV7Z)
	   that.text(canvas,data,225,145,160,60,9)//Planning Hierarchy Update(OV7Z)
	    that.line(canvas,data,380,160,430,160)//from Planning Hierarchy Update(OV7Z) to Planning Hierarchy Allocation(MC94)
	  that.leftArrow(canvas,data,430,160)
	    that.rect(canvas,data,430,130,160,60,10)//Planning Hierarchy Allocation(MC94)
	   that.text(canvas,data,435,145,150,60,10)//Planning Hierarchy Allocation(MC94)
	    that.line(canvas,data,590,160,625,160)//from Planning Hierarchy Allocation(MC94)
	  that.leftArrow(canvas,data,625,160)
	    that.line(canvas,data,510,190,510,210)//from Planning Hierarchy Allocation(MC94) to Material Allocation
	  that.downArrow(canvas,data,510,210)

	    that.rect(canvas,data,450,210,120,30,11)//Material Allocation
	   that.text(canvas,data,455,225,120,30,11)//Material Allocation

	    that.rect(canvas,data,625,130,160,60,13)//Sales Order Creation via manual VA01 or EDI message type Z2CMTORDERS1230
	   that.text(canvas,data,630,145,160,60,13)//Sales Order Creation via manual VA01 or EDI message type Z2CMTORDERS1230

	    that.line(canvas,data,690,190,690,310)//vertical line downwards from Sales order creation via manual VA01 "-"

	    that.line(canvas,data,690,260,780,260)//horizontal line conncting to ATP Check
	  that.leftArrow(canvas,data,780,260)

	    that.line(canvas,data,690,310,780,310)////horizontal line conncting to Product Allocation Check
	  that.leftArrow(canvas,data,780,310)

	    that.rect(canvas,data,780,240,120,40,14)//ATP Check
	   that.text(canvas,data,785,255,120,40,14)//ATP Check

	    that.rect(canvas,data,780,290,120,40,15)//Product Allocation Check
	   that.text(canvas,data,785,305,120,40,15)//Product Allocation Check

	  return canvas;
	  }  , 1000 );
	  },
	  sotc_32_customerMaterialInfoRecords :function(x){//SOTC_32


	  var model = this.uisCodeCheck("SOTC_32");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="Customer Material Info Records";
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
	          that.rect(canvas,data,400,10,800,40,0) // ECC
	          that.text(canvas,data,800,35,300,40,0)
	          that.rect(canvas,data,400,100,350,50,1) // Customer Material Info Creation
	          that.text(canvas,data,485,125,300,40,1)
	          that.rect(canvas,data,400,250,350,50,2) // Customer Material Info Record Creation (VD51)
	          that.text(canvas,data,410,275,300,40,2)
	          that.rect(canvas,data,800,100,400,50,3) // Sales Order Creation
	          that.text(canvas,data,945,125,300,40,3)
	          that.rect(canvas,data,800,200,175,50,4) // Manual Sales Order Creation (VA01)
	          that.text(canvas,data,810,225,170,40,4)
	          that.rect(canvas,data,800,300,175,50,5) // EDI Inbound Order Creation (Z2CMTORDERS1230)
	          that.text(canvas,data,810,325,170,40,5)
	          that.rect(canvas,data,1025,250,175,50,6) // Customer Material Number Determined
	          that.text(canvas,data,1035,275,170,40,6)
	          // Line And Arrow
	          that.line(canvas,data,800,225,780,225) // line connecting index - 4 & index - 5
	          that.line(canvas,data,780,225,780,325)
	          that.line(canvas,data,780,325,800,325)
	          that.line(canvas,data,750,275,780,275) // line connecting index - 2, 4 & index - 5
	          that.leftArrow(canvas,data,780,275)
	          that.line(canvas,data,975,225,995,225) // line connecting index - 4 & index - 5(backside)
	          that.line(canvas,data,995,225,995,325)
	          that.line(canvas,data,995,325,975,325)
	          that.line(canvas,data,995,275,1025,275) // line connecting index - 4 & index - 5 & index - 7(backside)
	          that.leftArrow(canvas,data,1025,275)

	          return canvas;
	  }  , 1000 );
	  },
	  sotc_33_invoiceCancellation :function(x){//SOTC_33


	  var model = this.uisCodeCheck("SOTC_33");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="O2C Billing Cancellation";
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
	  that.rect(canvas,data,120,10,1010,40,0) //ECC
	  that.text(canvas,data,570,35,610,40,0)

	  that.rect(canvas,data,120,80,610,40,1) //Billing
	  that.text(canvas,data,390,105,610,40,1)

	  that.rect(canvas,data,120,180,180,60,2) //Invoice Creation
	  that.text(canvas,data,160,215,180,60,2)


	  that.line(canvas,data,300,210,510,210)
	  that.leftArrow(canvas,data,510,210)

	  that.rect(canvas,data,510,180,220,60,3) //Invoice Cancellation(VF11)
	  that.text(canvas,data,550,215,220,60,3)


	  that.rect(canvas,data,770,80,360,40,4) //Invoice Correction
	  that.text(canvas,data,895,105,360,40,4)


	  that.rect(canvas,data,770,345,360,60,5) //Invoice Cancellation(VF11)
	  that.text(canvas,data,825,380,360,60,5)



	  that.vertArrowline(canvas,data,400,210,400,370)
	  that.line(canvas,data,400,370,770,370)
	  that.leftArrow(canvas,data,770,370)


	  that.upArrow(canvas,data,210,240)
	  that.vertArrowline(canvas,data,210,240,210,391)
	  that.line(canvas,data,210,390,770,390)

	  return canvas;
	  }  , 1000 );
	  },
	  sotc_34_customerBilling :function(x){//SOTC_34


	  var model = this.uisCodeCheck("SOTC_34");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="O2C Customer Billing-Automatic and Manual Billing controller";
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
	  that.rect(canvas,data,120,10,1100,35,0) //ECC
	  that.text(canvas,data,650,33,1100,35,0)


	  that.rect(canvas,data,120,70,150,45,1) // Sales order
	  that.text(canvas,data,160,98,150,45,1)

	  that.rect(canvas,data,120,190,150,60,2) // Sales order Creation
	  that.text(canvas,data,140,225,150,60,2)

	  that.line(canvas,data,270,220,375,220) // Connect Sales order creation & Delivery relevant
	  that.leftArrow(canvas,data,325,220)

	  that.rect(canvas,data,120,320,150,85,3) // Sales Order Release Billing Block (V.23Z2Billing block)
	  that.text(canvas,data,135,354,140,85,3)

	  that.line(canvas,data,270,385,620,385)
	  that.line(canvas,data,620,385,620,375)
	  that.line(canvas,data,620,370,620,360)
	  that.line(canvas,data,620,355,620,345)
	  that.line(canvas,data,620,340,620,330)
	  that.line(canvas,data,620,325,620,315)
	  that.line(canvas,data,620,310,620,300)
	  that.line(canvas,data,620,310,620,300)
	  that.line(canvas,data,620,295,620,285)
	  that.line(canvas,data,620,280,620,270)
	  that.line(canvas,data,620,265,620,255)
	  that.line(canvas,data,620,250,620,240)
	  that.line(canvas,data,620,235,620,225)
	  that.line(canvas,data,620,225,630,225)
	  that.line(canvas,data,635,225,645,225)
	  that.line(canvas,data,648,225,655,225)

	  that.leftArrow(canvas,data,650,225)

	  that.rect(canvas,data,340,70,250,45,4) // Delivery
	  that.text(canvas,data,435,98,250,45,4)

	  that.poly(canvas,data,324,220,65,5)
	  that.text(canvas,data,342,225,105,60,5)

	  /*that.rect(canvas,data,340,190,105,60,5) //Delivery relevant
	  that.text(canvas,data,343,225,105,60,5)*/

	  //Plot the dotted lines with left arrow
	  that.line(canvas,data,390,250,390,320)
	  that.line(canvas,data,390,325,390,335)
	  that.line(canvas,data,390,340,390,350)
	  that.line(canvas,data,390,355,390,365)
	  that.line(canvas,data,270,365,390,365)
	  that.rightArrow(canvas,data,270,365)

	  //Plot the dotted lines
	  that.line(canvas,data,390,325,400,325)
	  that.line(canvas,data,405,325,415,325)
	  that.line(canvas,data,420,325,430,325)
	  that.line(canvas,data,435,325,445,325)
	  that.line(canvas,data,450,325,460,325)
	  that.line(canvas,data,465,325,475,325)
	  that.line(canvas,data,480,325,490,325)
	  that.line(canvas,data,495,325,515,325)

	  //This is to connect Delevery relevant & Delivery Creation
	  that.line(canvas,data,452,220,490,220)
	  that.leftArrow(canvas,data,490,220)

	  that.rect(canvas,data,490,190,100,60,6) // Delivery Creation
	  that.text(canvas,data,492,225,100,60,6)

	  that.line(canvas,data,540,250,540,290)
	  that.downArrow(canvas,data,540,290)
	  that.rect(canvas,data,490,290,100,70,7) // Delivery good issue(VL02N)
	  that.text(canvas,data,498,325,100,70,7)

	  that.line(canvas,data,590,325,650,325) //Connect Delivery good issue & Automatic Billing Due List
	  that.leftArrow(canvas,data,650,325)

	  that.rect(canvas,data,650,70,570,45,8) //Billing
	  that.text(canvas,data,890,98,570,45,8)
	  that.rect(canvas,data,650,190,125,60,9) //Manual Billing Invoice Creation (VF01/VF04)
	  that.text(canvas,data,668,212,110,60,9)
	  that.line(canvas,data,775,225,785,225)
	  that.line(canvas,data,790,225,800,225)
	  that.line(canvas,data,800,225,800,235)
	  that.line(canvas,data,800,240,800,250)
	  that.line(canvas,data,800,255,800,265)
	  that.line(canvas,data,800,270,800,280)
	  that.line(canvas,data,800,285,800,295)
	  that.line(canvas,data,800,300,800,310)
	  that.line(canvas,data,800,315,800,325)
	  that.line(canvas,data,800,330,800,335)
	  that.line(canvas,data,800,335,790,335)
	  that.line(canvas,data,785,335,775,335)
	  that.line(canvas,data,800,275,810,275)
	  that.line(canvas,data,805,275,815,275)
	  that.line(canvas,data,820,275,830,275)
	  that.line(canvas,data,835,275,840,275)
	  that.leftArrow(canvas,data,840,275)
	  that.rect(canvas,data,650,290,125,70,10) //Automatic Billing Due List
	  that.text(canvas,data,654,325,125,70,10)

	  that.rect(canvas,data,840,240,130,60,11) //Release to Accounting(VFX3, VF02
	  that.text(canvas,data,843,268,130,60,11)

	  that.rect(canvas,data,1050,140,170,60,12) //Billing KPI Consolidation (J0000-SD-Z2BILLINGRUN*)
	  that.text(canvas,data,1055,170,150,60,12)

	  that.rect(canvas,data,1050,240,170,60,13) //Billing KPI Report Execution(Z0SI1104BILLRUNKPI)
	  that.text(canvas,data,1058,268,170,60,13)

	  that.rect(canvas,data,1050,340,170,60,14) //Log of Collective Run (V.21)
	  that.text(canvas,data,1075,372,150,60,14)
	  return canvas;
	  }  , 1000 );
	  },

	  sotc_35_primeAndDEX :function(x){//SOTC_35
	            var model = this.uisCodeCheck("SOTC_35");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Prime and DEX";
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
	      that.rect(canvas,data,10,10,140,30,0)//ECC-1
	      that.text(canvas,data,50,30,130,30,0)
	      that.rect(canvas,data,180,10,480,30,4)//Front End / iPad
	      that.text(canvas,data,370,30,130,30,4)
	      that.rect(canvas,data,690,10,370,30,9)//ECC-2
	      that.text(canvas,data,860,30,130,30,9)
	      that.rect(canvas,data,1090,10,140,30,14)//Front End / iPad
	      that.text(canvas,data,1110,30,130,30,14)
	      that.rect(canvas,data,1260,10,310,30,17)//ECC-3
	      that.text(canvas,data,1400,30,130,30,17)
	      that.rect(canvas,data,1600,10,140,30,22)//Front End / iPad
	      that.text(canvas,data,1630,30,130,30,22)
	      //second line
	      that.rect(canvas,data,10,50,140,40,1)//Creation of Material Determination
	      that.text(canvas,data,20,70,130,30,1)
	      that.rect(canvas,data,180,50,480,40,5)//Direct Order Creation
	      that.text(canvas,data,350,70,130,30,5)
	      that.rect(canvas,data,690,50,200,40,10)//Material Determination
	      that.text(canvas,data,700,70,130,30,10)

	      that.rect(canvas,data,920,50,140,40,12)//ECC Sales Order
	      that.text(canvas,data,930,70,130,30,12)
	      that.rect(canvas,data,1090,50,140,40,15)//Direct Order Sync
	      that.text(canvas,data,1110,70,130,30,15)
	      that.rect(canvas,data,1260,50,140,40,18)//Delivery
	      that.text(canvas,data,1270,70,130,30,18)
	      that.rect(canvas,data,1430,50,140,40,20)//Billing
	      that.text(canvas,data,1440,70,130,30,20)
	      that.rect(canvas,data,1600,50,140,40,23)//Direct Order Sync
	      that.text(canvas,data,1610,70,130,30,23)



	      //tasks
	            that.rect(canvas,data,10,110,140,70,2)//Material Determination Creation(VB11)
	      that.text(canvas,data,20,130,130,50,2)
	      that.line(canvas,data,70,180,70,210)
	            that.downArrow(canvas,data,70,210)
	      that.rect(canvas,data,10,210,140,70,3)//TUGTIN Send to CRM
	      that.text(canvas,data,20,230,130,50,3)
	      that.line(canvas,data,150,240,250,240)
	      that.line(canvas,data,250,180,250,240)
	      that.upArrow(canvas,data,250,180)


	      that.rect(canvas,data,180,110,140,70,6)//iPad Sync to get TUGTIN Material from CRM
	      that.text(canvas,data,190,130,130,50,6)
	      that.rect(canvas,data,350,110,140,70,7)//Prime / DEX Order Creation (iPad)
	      that.text(canvas,data,360,130,130,50,7)
	      that.line(canvas,data,490,140,520,140)
	      that.leftArrow(canvas,data,520,140)
	      that.rect(canvas,data,520,110,140,70,8)//iPad Sync
	      that.text(canvas,data,530,130,130,50,8)
	      that.line(canvas,data,660,140,690,140)
	      that.leftArrow(canvas,data,690,140)
	      that.rect(canvas,data,690,110,200,110,11)//Material Determination:Material entered is substituted automatically by the material chosen in the material determination.The correct product is assigned to the chosen customer.
	      that.text(canvas,data,700,130,180,100,11)
	      that.line(canvas,data,890,140,920,140)
	      that.leftArrow(canvas,data,920,140)

	      that.rect(canvas,data,920,110,140,70,13)//ECC Sales Order
	      that.text(canvas,data,930,130,130,50,13)
	      that.line(canvas,data,1060,140,1090,140)
	      that.leftArrow(canvas,data,1090,140)
	      that.rect(canvas,data,1090,110,140,70,16)//iPad Sync
	      that.text(canvas,data,1110,130,130,50,16)
	      that.line(canvas,data,1230,140,1260,140)
	      that.leftArrow(canvas,data,1260,140)
	      that.rect(canvas,data,1260,110,140,70,19)//Delivery Creation
	      that.text(canvas,data,1270,130,130,50,19)
	      that.line(canvas,data,1400,140,1430,140)
	      that.leftArrow(canvas,data,1430,140)
	      that.rect(canvas,data,1430,110,140,70,21)//Billing Creation
	      that.text(canvas,data,1440,130,130,50,21)
	      that.line(canvas,data,1570,140,1600,140)
	      that.leftArrow(canvas,data,1600,140)
	      that.rect(canvas,data,1600,110,140,70,24)//iPad Sync
	      that.text(canvas,data,1610,130,130,50,24)


	              return canvas;
	              }  , 1000 );

	  },
	  sotc_36_priceReporting :function(x){//SOTC_36
	            var model = this.uisCodeCheck("SOTC_36");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Pricing Reporting v3";
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
	  that.rect(canvas,data,10,10,1110,30,0)//ECC-1
	  that.text(canvas,data,550,30,130,30,0)
	  that.rect(canvas,data,10,360,1110,30,11)//ECC-2
	  that.text(canvas,data,550,380,130,30,11)
	  //second line
	   that.rect(canvas,data,10,50,540,40,1) //Table Configurations
	   	that.text(canvas,data,240,70,130,30,1)
	   	 that.rect(canvas,data,580,50,350,40,5) //Pricing Database
	   	that.text(canvas,data,720,70,130,30,5)
	       that.rect(canvas,data,960,50,160,40,9) //Pricing Database Report
	     	that.text(canvas,data,970,70,140,30,9)
	     	 that.rect(canvas,data,10,400,350,40,12) //Table Configurations
	   	that.text(canvas,data,130,420,130,30,12)

	 	 that.rect(canvas,data,390,400,730,40,15) //Customer Pricing Reports
	that.text(canvas,data,700,420,180,30,15)
	  //tasks
	     that.rect(canvas,data,10,110,160,70,2)//Company Code Table Z0FIPDCCOREF
	   that.text(canvas,data,20,130,140,60,2)
	   that.rect(canvas,data,200,110,160,70,3)//Customers Table Z0FIPDMSOREF
	   that.text(canvas,data,210,130,140,60,3)
	   that.rect(canvas,data,390,110,160,70,4)//Condition Mapping Table Z0FIPDCONDMAP
	   that.text(canvas,data,400,130,140,60,4)
	   that.rect(canvas,data,390,110,160,70,4)//Condition Mapping Table Z0FIPDCONDMAP
	   that.text(canvas,data,400,130,140,60,4)
	   that.rect(canvas,data,580,180,160,70,6)//Data Collection Program Tcode:Z0FIPDUPDATE (Manual/ Background Job)
	   that.text(canvas,data,590,200,140,60,6)
	   that.line(canvas,data,740,210,755,210)
	   that.line(canvas,data,755,210,755,140)
	   that.line(canvas,data,755,140,770,140)
	   that.line(canvas,data,755,270,770,270)
	   that.leftArrow(canvas,data,770,140)
	   that.line(canvas,data,755,210,755,270)
	  that.leftArrow(canvas,data,770,270)
	    that.rect(canvas,data,770,110,160,70,7)//Prices Table Z0FIPDPRICES
	   that.text(canvas,data,780,130,140,60,7)
	   that.line(canvas,data,930,140,945,140)
	   that.rect(canvas,data,770,250,160,70,8)//Billing Documents Table Z0FIPDBILLDOC
	   that.text(canvas,data,780,270,140,60,8)
	   that.line(canvas,data,930,280,945,280)
	   that.line(canvas,data,945,140,945,280)
	   that.line(canvas,data,945,210,960,210)
	   that.leftArrow(canvas,data,960,210)
	   that.rect(canvas,data,960,180,160,70,10)//Pricing Database Report Tcode:Z0FIPDREPORT (Manual)
	   that.text(canvas,data,970,200,140,60,10)
	   that.rect(canvas,data,10,460,160,70,13)//Customizing of Pricing Communication Header (KOMK) Z2CPRM_KOMK
	   that.text(canvas,data,20,480,140,60,13)
	   that.rect(canvas,data,200,460,160,70,14)//Customizing of Pricing Communication Item (KOMP) Z2CPRM_KOMP
	   that.text(canvas,data,210,480,140,60,14)
	  that.rect(canvas,data,390,460,160,70,16)//Customer Pricing Report Tcode:Z2_1365 (Manual/ Background Job
	   that.text(canvas,data,400,480,140,60,16)
	   that.line(canvas,data,550,490,560,490)
	   that.line(canvas,data,560,490,560,750)
	   that.line(canvas,data,560,490,580,490)
	  that.leftArrow(canvas,data,580,490)
	   that.rect(canvas,data,580,460,160,70,17)//On Invoice Customer Detail
	   that.text(canvas,data,590,480,140,60,17)
	   that.rect(canvas,data,580,540,160,70,18)//On Invoice Customer Summary
	   that.text(canvas,data,590,560,140,60,18)
	   that.line(canvas,data,560,570,580,570)
	   that.leftArrow(canvas,data,580,570)
	   that.rect(canvas,data,580,630,160,70,19)//Promotion Views
	   that.text(canvas,data,590,650,140,60,19)
	   that.line(canvas,data,560,660,580,660)
	  that.leftArrow(canvas,data,580,660)
	   that.rect(canvas,data,580,720,160,70,20)//Pre 2003 Price Queries
	   that.text(canvas,data,590,740,140,60,20)
	   that.line(canvas,data,560,750,580,750)
	  that.leftArrow(canvas,data,580,750)
	   that.line(canvas,data,740,750,770,750)
	  that.leftArrow(canvas,data,770,750)
	   that.rect(canvas,data,770,720,160,70,21)//Customer Pricing Report Tcode:Z2CPR (Manual)
	   that.text(canvas,data,780,740,140,60,21)

	   that.line(canvas,data,930,750,940,750)
	   that.line(canvas,data,940,750,960,750)
	   that.leftArrow(canvas,data,960,750)
	   that.line(canvas,data,940,750,940,930)

	   that.rect(canvas,data,960,720,160,70,22)//Case Prices
	   that.text(canvas,data,970,740,140,60,22)
	    that.rect(canvas,data,960,810,160,70,23)//Promotion Prices
	   that.text(canvas,data,970,830,140,60,23)
	   that.line(canvas,data,940,840,960,840)
	  that.leftArrow(canvas,data,960,840)
	    that.rect(canvas,data,960,900,160,70,24)//Margins
	   that.text(canvas,data,970,920,140,60,24)
	   that.line(canvas,data,940,930,960,930)
	   that.leftArrow(canvas,data,960,930)



	              return canvas;
	              }  , 1000 );

	  },

	  sotc_37_executionOfPSMTool :function(x){//sotc_37
	            var model = this.uisCodeCheck("SOTC_37");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Proactive Stock Management";
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
	                                                      that.rect(canvas,data,10,70,140,30,0)//ECC-1
	                                                      that.text(canvas,data,50,90,130,30,0)
	                                                      that.rect(canvas,data,10,110,140,30,1)//APO (Master data)
	                                                      that.text(canvas,data,20,130,130,30,1)

	                                                      that.rect(canvas,data,180,10,160,30,5)//APO BW(BODS extract)
	                                                      that.text(canvas,data,190,30,140,30,5)

	                                                      that.rect(canvas,data,180,70,160,70,6)//HANA - SLT Replication Server
	                                                      that.text(canvas,data,190,90,140,60,6)

	                                                        that.rect(canvas,data,370,10,160,130,9)//SAP HANA
	                                                      that.text(canvas,data,400,70,100,60,9)


	                                                      that.rect(canvas,data,560,70,160,70,12)//ECC-2
	                                                      that.text(canvas,data,620,110,140,60,12)








	                                                      //second line
	                                                       that.rect(canvas,data,10,170,140,40,2)//Data transfer from ECC and APO to HANA
	                                                       that.text(canvas,data,20,190,130,30,2)

	                                                       that.rect(canvas,data,180,170,160,40,7)//Table replications from both APO and ECC to HANA
	                                                       that.text(canvas,data,190,190,150,30,7)

	                                                        that.rect(canvas,data,370,170,160,40,10)//All calculations would take place
	                                                       that.text(canvas,data,380,190,150,30,10)

	                                                       that.rect(canvas,data,560,170,160,40,13)//PSM Tool - Tcode: Z2CS_PSM
	                                                       that.text(canvas,data,570,190,150,30,13)







	                                                      //tasks


	                                                       that.rect(canvas,data,10,240,140,70,3)//APO Planning Information
	                                                       that.text(canvas,data,20,260,130,50,3)
	                                                       that.line(canvas,data,150,270,160,270)
	                                                        that.line(canvas,data,160,270,160,370)
	                                                        that.rect(canvas,data,10,340,140,70,4)//ECC Transactional Information
	                                                       that.text(canvas,data,20,360,130,50,4)
	                                                       that.line(canvas,data,150,370,180,370)
	                                                       that.leftArrow(canvas,data,180,370)

	                                                        that.rect(canvas,data,180,340,160,70,8)//SLT has been setup for real time data extraction from ECC and APO to HANA
	                                                       that.text(canvas,data,190,360,150,50,8)
	                                                       that.line(canvas,data,340,370,370,370)
	                                                       that.leftArrow(canvas,data,370,370)

	                                                         that.rect(canvas,data,370,340,160,70,11)//Replicated Data would then be transferred to SAP HANA system
	                                                      that.text(canvas,data,380,360,150,50,11)
	                                                      that.line(canvas,data,530,370,560,370)
	                                                       that.leftArrow(canvas,data,560,370)

	                                                      that.rect(canvas,data,560,340,160,70,14)//Populate report and calculations in HANA base on selection criteria
	                                                      that.text(canvas,data,570,360,150,50,14)



	              return canvas;
	              }  , 1000 );

	  },
	  sotc_38_cabinetScraping :function(x){//sotc_38
	            var model = this.uisCodeCheck("SOTC_38");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Cabinet Scraping";
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
	                                                      that.rect(canvas,data,10,10,990,30,0)//ECC
	                                                      that.text(canvas,data,500,30,80,30,0)





	                                                      //second line

	                                                      that.rect(canvas,data,10,60,480,30,1)//Scrap ReservationTransaction Code: Z2YNSM
	                                                      that.text(canvas,data,130,80,380,30,1)
	                                                      that.rect(canvas,data,520,60,480,30,6)//Scrap Execution Transaction Code: Z2YB52
	                                                      that.text(canvas,data,640,80,380,30,6)



	                                                      //tasks
	                                                              that.rect(canvas,data,10,110,120,80,2)//Scaping Part 1 Order Type: YB52Transaction: Z2YNSM
	                                                      that.text(canvas,data,20,130,100,50,2)
	                                                        that.line(canvas,data,130,150,160,150)
	                                                        that.leftArrow(canvas,data,160,150)
	                                                      that.rect(canvas,data,160,110,120,80,3)//CABS - Inbound Delivery Delivery Type: YCIV
	                                                      that.text(canvas,data,170,130,100,50,3)
	                                                      that.line(canvas,data,220,190,220,250)
	                                                      that.downArrow(canvas,data,220,250)

	                                                      that.rect(canvas,data,160,250,120,80,4)//Picking and GI
	                                                      that.text(canvas,data,170,270,100,50,4)
	                                                      that.line(canvas,data,280,290,285,290)
	                                                      that.line(canvas,data,285,150,285,290)
	                                                      that.line(canvas,data,285,150,300,150)
	                                                      that.leftArrow(canvas,data,300,150)
	                                                      that.rect(canvas,data,300,110,200,80,5)//Automatic run of job YCAB_PROCESS_CONTRATTI
	                                                      that.text(canvas,data,310,130,160,50,5)
	                                                               that.rect(canvas,data,660,110,120,80,7)//Scraping Transaction Code: Z2YB52
	                                                      that.text(canvas,data,670,130,100,50,7)
	                                                      that.line(canvas,data,720,190,720,205)
	                                                      that.downArrow(canvas,data,720,205)

	                                                       that.rect(canvas,data,520,210,120,80,8)//Goods Issue Table: VBFA
	                                                      that.text(canvas,data,530,230,100,50,8)
	                                                      that.line(canvas,data,640,250,660,250)
	                                                      that.leftArrow(canvas,data,660,250)
	                                                      that.dottedLine(canvas,data,510,205,1010,205)
	                                                      that.dottedLine(canvas,data,510,205,510,295)
	                                                      that.dottedLine(canvas,data,1010,205,1010,295)
	                                                      that.dottedLine(canvas,data,510,295,1010,295)
	                                                       that.rect(canvas,data,660,210,120,80,9)//Equipment update Transaction Code: IQ08/IQ09 Table: ITOB and EQUI
	                                                      that.text(canvas,data,670,230,100,50,9)
	                                                      that.line(canvas,data,780,250,800,250)
	                                                      that.leftArrow(canvas,data,800,250)
	                                                       that.rect(canvas,data,800,210,200,80,10)//Automatic run of job YCAB_PROCESS_CONTRATTI
	                                                      that.text(canvas,data,810,230,160,50,10)


	              return canvas;
	              }  , 1000 );

	  },
	  sotc_39_cabinetTransfer :function(x){//sotc_39
	            var model = this.uisCodeCheck("SOTC_39");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Cabinet Transfer";
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
	                                                      that.rect(canvas,data,10,10,620,30,0)//ECC
	                                                      that.text(canvas,data,350,30,80,30,0)




	                                                      //second line

	                                                      that.rect(canvas,data,10,60,620,30,1)//Cabinet Transfer Between Concessionaire(Transaction Code: Z391)
	                                                      that.text(canvas,data,180,80,400,30,1)


	                                                      //tasks
	                                                              that.rect(canvas,data,10,260,120,80,2)//Cabinet Transfer Transaction Code: ZE91 Program: SAPMZ2TRANSF
	                                                      that.text(canvas,data,20,280,100,50,2)
	                                                      that.dottedLine(canvas,data,130,300,145,300)
	                                                      that.dottedLine(canvas,data,145,100,145,300)
	                                                      that.dottedLine(canvas,data,145,100,415,100)
	                                                      that.dottedLine(canvas,data,145,300,145,600)
	                                                      that.dottedLine(canvas,data,145,600,415,600)
	                                                      that.dottedLine(canvas,data,415,100,415,600)
	                                                      that.rect(canvas,data,150,110,120,80,3)//Sales Order Creation Sales Order Type: YA60
	                                                      that.text(canvas,data,160,130,100,50,3)
	                                                      that.line(canvas,data,270,150,290,150)
	                                                      that.leftArrow(canvas,data,290,150)
	                                                      that.rect(canvas,data,150,390,120,80,4)//Sales Order Creation Sales Order Type: YA60
	                                                      that.text(canvas,data,160,410,100,50,4)
	                                                      that.line(canvas,data,270,430,290,430)
	                                                      that.leftArrow(canvas,data,290,430)
	                                                      that.rect(canvas,data,290,110,120,80,5)//CABS-Inbound Delivery Delivery Type: YCIV
	                                                      that.text(canvas,data,300,130,100,50,5)
	                                                      that.line(canvas,data,350,190,350,210)
	                                                      that.downArrow(canvas,data,350,210)
	                                                      that.rect(canvas,data,290,210,120,80,6)//Picking and GI
	                                                      that.text(canvas,data,300,230,100,50,6)
	                                                      that.line(canvas,data,410,250,420,250)
	                                                      that.line(canvas,data,420,150,420,250)
	                                                      that.line(canvas,data,420,150,430,150)
	                                                      that.leftArrow(canvas,data,430,150)

	                                                      that.rect(canvas,data,290,390,120,80,7)//CABS-Outbound Delivery Delivery Type: YCOV
	                                                      that.text(canvas,data,300,410,100,50,7)
	                                                      that.line(canvas,data,350,470,350,490)
	                                                      that.downArrow(canvas,data,350,490)
	                                                      that.rect(canvas,data,290,490,120,80,8)//Picking and GI
	                                                      that.text(canvas,data,300,510,100,50,8)
	                                                      that.line(canvas,data,410,530,420,530)
	                                                      that.line(canvas,data,420,430,420,530)
	                                                      that.line(canvas,data,420,430,430,430)
	                                                      that.leftArrow(canvas,data,430,430)
	                                                      that.rect(canvas,data,430,110,200,80,9)//Automactic run of job YCAB_PROCESS_CONTRATT
	                                                      that.text(canvas,data,440,130,150,50,9)
	                                                      that.rect(canvas,data,430,390,200,80,10)//Automactic run of job YCAB_PROCESS_CONTRATTI
	                                                      that.text(canvas,data,440,410,150,50,10)


	              return canvas;
	              }  , 1000 );

	  },
	  sotc_40_connectExtractorv3 :function(x){//sotc_40
	            var model = this.uisCodeCheck("SOTC_40");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Connect Extractor v3";
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
	                                                      that.rect(canvas,data,10,10,420,30,0)//ECC
	                                                      that.text(canvas,data,200,30,80,30,0)
	                                                      that.rect(canvas,data,470,10,270,30,12)//Connect
	                                                      that.text(canvas,data,590,30,80,30,12)




	                                                      //second line

	                                                      that.rect(canvas,data,10,60,420,30,1)//ECC Order to Billing creation and V3 Process
	                                                      that.text(canvas,data,60,80,380,30,1)
	                                                      that.rect(canvas,data,470,60,270,30,13)//Initial and Delta Load
	                                                      that.text(canvas,data,530,80,200,30,13)



	                                                      //tasks
	                                                              that.rect(canvas,data,10,110,120,80,2)//Sale Order Process Transaction Code:VA01
	                                                      that.text(canvas,data,20,130,100,50,2)
	                                                      that.line(canvas,data,70,190,70,210)
	                                                      that.downArrow(canvas,data,70,210)

	                                                      that.rect(canvas,data,10,210,120,80,3)//Delivery Creation Transaction Code: VL01N
	                                                      that.text(canvas,data,20,230,100,50,3)
	                                                      that.line(canvas,data,70,290,70,310)
	                                                      that.downArrow(canvas,data,70,310)
	                                                      that.rect(canvas,data,10,310,120,80,4)//Billing Creation Transaction Code: VF01
	                                                      that.text(canvas,data,20,330,100,50,4)
	                                                      that.line(canvas,data,130,350,150,350)
	                                                      that.leftArrow(canvas,data,150,350)
	                                                      that.line(canvas,data,140,350,140,680)
	                                                      that.line(canvas,data,140,680,300,680)
	                                                      that.leftArrow(canvas,data,300,680)
	                                                      that.dottedLine(canvas,data,150,120,290,120)
	                                                      that.dottedLine(canvas,data,150,120,150,520)
	                                                      that.dottedLine(canvas,data,150,520,290,520)
	                                                      that.dottedLine(canvas,data,290,120,290,520)
	                                                      that.rect(canvas,data,160,130,120,80,5)//V1 Update on application Table
	                                                      that.text(canvas,data,170,150,100,50,5)
	                                                      that.rect(canvas,data,160,230,120,80,6)//Billing Table VBRK VBRP
	                                                      that.text(canvas,data,170,250,100,50,6)
	                                                      that.rect(canvas,data,160,330,120,80,7)//Delivery Table LIKP LIPS
	                                                      that.text(canvas,data,170,350,100,50,7)
	                                                      that.line(canvas,data,290,370,470,370)
	                                                      that.leftArrow(canvas,data,470,370)
	                                                      that.rect(canvas,data,160,430,120,80,8)//Sales Order Table VBAK VBAP
	                                                      that.text(canvas,data,170,450,100,50,8)

	                                                      that.dottedLine(canvas,data,300,510,440,510)
	                                                      that.dottedLine(canvas,data,300,510,300,810)
	                                                      that.dottedLine(canvas,data,440,510,440,810)
	                                                      that.dottedLine(canvas,data,300,810,440,810)
	                                                      that.rect(canvas,data,310,520,120,80,9)//V3 Checks and Manual Processing
	                                                      that.text(canvas,data,330,540,100,50,9)
	                                                      that.rect(canvas,data,310,620,120,80,10)//Update Queue
	                                                      that.text(canvas,data,330,640,100,50,10)
	                                                      that.line(canvas,data,440,660,470,660)
	                                                      that.leftArrow(canvas,data,470,660)
	                                                      that.line(canvas,data,455,460,455,660)
	                                                      that.line(canvas,data,455,460,470,460)
	                                                      that.leftArrow(canvas,data,470,460)
	                                                      that.rect(canvas,data,310,720,120,80,11)//Execute Queue Program Transaction Code: SA38
	                                                      that.text(canvas,data,330,740,100,50,11)

	                                                        that.rect(canvas,data,470,330,120,80,14)//Setup Table / Initial Transaction Code: OLI7BW, OLI8BW and OLI9BW
	                                                          that.text(canvas,data,490,350,100,50,14)
	                                                          that.line(canvas,data,590,370,610,370)
	                                                      that.leftArrow(canvas,data,610,370)
	                                                          that.rect(canvas,data,470,430,120,80,15)//Delta Queue Table: ODQSSNQUE
	                                                          that.text(canvas,data,490,450,100,50,15)
	                                                          that.line(canvas,data,590,470,610,470)
	                                                      that.leftArrow(canvas,data,610,470)
	                                                        that.rect(canvas,data,470,620,120,80,16)//Process Update Queue Via Background Schedule Job or SA38
	                                                          that.text(canvas,data,490,640,100,50,16)
	                                                            that.dottedLine(canvas,data,595,320,745,320)
	                                                            that.dottedLine(canvas,data,595,320,595,520)
	                                                            that.dottedLine(canvas,data,745,320,745,520)
	                                                            that.dottedLine(canvas,data,595,520,745,520)
	                                                          that.rect(canvas,data,610,330,120,80,17)//Extractor
	                                                          that.text(canvas,data,630,350,100,50,17)
	                                                          that.rect(canvas,data,610,430,120,80,18)//Data Source
	                                                          that.text(canvas,data,630,450,100,50,18)

	              return canvas;
	              }  , 1000 );

	  },
	  sotc_41_consignmentFillUpv5 :function(x){//sotc_41
	            var model = this.uisCodeCheck("SOTC_41");
	            var data = sap.ui.getCore().getModel("bindingModel").oData;
	            x.getView().getModel("oModelHeader").oData.header="OTC Consignment Fill-up v5";
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
	                                                      that.rect(canvas,data,10,10,680,30,0)//ECC
	                                                      that.text(canvas,data,320,30,80,30,0)
	                                                      that.rect(canvas,data,710,10,130,30,13)//Compudata
	                                                      that.text(canvas,data,740,30,100,30,13)

	                                                      that.rect(canvas,data,350,430,130,30,16)//WMS
	                                                      that.text(canvas,data,410,450,100,30,16)





	                                                      //second line

	                                                      that.rect(canvas,data,10,60,260,30,1)//Consignment Fill-Up Order Process - MSO
	                                                      that.text(canvas,data,30,80,240,30,1)
	                                                      that.rect(canvas,data,290,60,400,30,7)//USCC
	                                                      that.text(canvas,data,470,80,240,30,7)
	                                                      that.rect(canvas,data,710,60,130,30,14)//Interface Billing Idoc to Compudata
	                                                      that.text(canvas,data,720,75,120,30,14)




	                                                      //tasks
	                                                              that.rect(canvas,data,10,110,120,80,2)//Create Fill-up Order order type: ZA3(VA01 / Inbound Idoc) Trigger output ZYS2
	                                                      that.text(canvas,data,20,130,110,50,2)
	                                                      that.line(canvas,data,130,150,150,150)
	                                                      that.leftArrow(canvas,data,150,150)
	                                                      that.line(canvas,data,70,190,70,220)
	                                                      that.downArrow(canvas,data,70,220)
	                                                        that.rect(canvas,data,10,220,120,80,3)//Outbound delivery creation (LF)
	                                                      that.text(canvas,data,20,250,110,50,3)
	                                                      that.line(canvas,data,70,300,70,330)
	                                                      that.downArrow(canvas,data,70,330)
	                                                        that.rect(canvas,data,10,330,120,80,4)//Goods Issue into Consignment Stock
	                                                      that.text(canvas,data,20,350,110,50,4)
	                                                      that.rightArrow(canvas,data,130,370)
	                                                      that.line(canvas,data,130,370,145,370)
	                                                      that.line(canvas,data,145,260,145,370)
	                                                      that.line(canvas,data,145,260,150,260)


	                                                      that.rect(canvas,data,150,110,120,80,5)//Purchase Order (NB) created automatically by ZYS2
	                                                      that.text(canvas,data,160,130,110,50,5)


	                                                      that.line(canvas,data,270,150,290,150)
	                                                      that.leftArrow(canvas,data,290,150)


	                                                      that.rect(canvas,data,150,220,120,80,6)//Automatic Goods Receipt into Unrestricted Stock
	                                                      that.text(canvas,data,160,240,110,50,6)
	                                                      that.line(canvas,data,270,260,285,260)
	                                                      that.rightArrow(canvas,data,270,260)
	                                                      that.line(canvas,data,285,200,285,260)
	                                                      that.line(canvas,data,285,200,480,200)
	                                                      that.line(canvas,data,480,190,480,200)
	                                                      that.rect(canvas,data,290,110,120,80,8)//Outbound Delivery creation (NLCC)
	                                                      that.text(canvas,data,300,130,110,50,8)
	                                                      that.line(canvas,data,350,190,350,220)
	                                                      that.downArrow(canvas,data,350,220)

	                                                      that.rect(canvas,data,290,220,120,80,9)//Delivery instruction (WMS190 /I003)
	                                                      that.text(canvas,data,300,240,110,50,9)
	                                                      that.line(canvas,data,410,260,500,260)
	                                                      that.line(canvas,data,500,190,500,260)
	                                                      that.upArrow(canvas,data,500,190)
	                                                      that.rect(canvas,data,430,110,120,80,10)//Goods Issue  (WMS200/I006)
	                                                      that.text(canvas,data,440,130,110,50,10)
	                                                      that.line(canvas,data,550,150,570,150)
	                                                      that.leftArrow(canvas,data,570,150)
	                                                      that.rect(canvas,data,570,110,120,80,11)//Creation of Intercompany Billing IV
	                                                      that.text(canvas,data,580,130,110,50,11)
	                                                      that.rect(canvas,data,570,220,120,80,12)//Billing sent to Compudata (ZRD4)
	                                                      that.text(canvas,data,580,240,110,50,12)
	                                                      that.line(canvas,data,690,260,710,260)
	                                                      that.leftArrow(canvas,data,710,260)
	                                                      that.rect(canvas,data,710,220,130,80,15)//IDOC message type INVOIC sent to Compudata
	                                                      that.text(canvas,data,720,240,120,50,15)


	              return canvas;
	              }  , 1000 );

	  },
	  sotc_42_rebateProcessing :function(x){//sotc_42


	  var model = this.uisCodeCheck("SOTC_42");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Rebates Processing v2";
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
	  that.pentagon(canvas,data,10,30,1710,1750,55,85,0) // ECC
	  that.text(canvas,data,820,60,300,40,0)

	  // Second Row
	  that.rect(canvas,data,10,105,370,60,1) // Rebate Agreement Creation
	  that.text(canvas,data,90,140,300,40,1)

	  that.rect(canvas,data,400,105,970,60,2) // Rebate Agreement Settlement
	  that.text(canvas,data,780,140,300,40,2)

	  that.rect(canvas,data,1390,105,360,60,3) // Billing Document Creation
	  that.text(canvas,data,1500,140,300,40,3)
	  //First Column
	  that.rect(canvas,data,10,200,170,90,4) // Create Agreement(VBO1)
	  that.text(canvas,data,25,245,190,40,4)
	  //Second Column
	  that.rect(canvas,data,240,210,120,70,5) // Credit Note
	  that.text(canvas,data,270,245,190,40,5)
	  that.rect(canvas,data,240,650,120,70,6) // Billback
	  that.text(canvas,data,280,685,190,40,6)
	  //Third Column
	  that.rect(canvas,data,400,640,120,90,7) // Create Vendor Invoice(FB60)
	  that.text(canvas,data,420,680,150,40,7)
	  //Fourth Column
	  that.rect(canvas,data,620,200,170,90,8) // Semi Automatic Bypass(Z2CMT1380)
	  that.text(canvas,data,650,240,190,40,8)
	  that.rect(canvas,data,620,420,170,90,9) // Change Agreement(VBO2)
	  that.text(canvas,data,635,470,190,40,9)
	  that.rect(canvas,data,620,640,170,90,10) // Semi Automatic Billbacks(Z2CMT1390)
	  that.text(canvas,data,645,680,190,40,10)
	  that.rect(canvas,data,620,830,170,90,11) // Automatic Billbacks for Greece(Z2CMT1390_GR)
	  that.text(canvas,data,635,870,190,40,11)
	  //Fifth Column
	  that.rect(canvas,data,900,330,170,60,12) // Partial Settlement
	  that.text(canvas,data,935,360,190,40,12)
	  that.rect(canvas,data,900,550,170,60,13) // Final Settlement
	  that.text(canvas,data,940,580,190,40,13)
	  //Sixth Column
	  that.rect(canvas,data,1200,420,170,90,14) // Credit Memo Request Created
	  that.text(canvas,data,1225,460,160,40,14)
	  //Seventh Column
	  that.rect(canvas,data,1410,420,150,90,15) // Change Order(VA02)
	  that.text(canvas,data,1425,465,160,40,15)
	  that.rect(canvas,data,1600,420,150,90,16) // Create Billing Document (VF01/ VF04)
	  that.text(canvas,data,1615,465,160,40,16)
	  // Lines and Arrows
	  that.dottedLine(canvas,data,180,245,240,245) // Line Connecting index - 5 & index - 6
	  that.leftArrow(canvas,data,240,245)
	  that.dottedLine(canvas,data,210,245,210,685)// Line Connecting index - 5 & index - 7
	  that.dottedLine(canvas,data,210,685,240,685)
	  that.leftArrow(canvas,data,240, 685)
	  that.line(canvas,data,360,685,400,685) // Line connecting index -7 & index - 8
	  that.leftArrow(canvas,data,400,685)
	  that.dottedLine(canvas,data,520, 685, 620, 685) // Line connecting index -8 & index - 11
	  that.leftArrow(canvas,data,620, 685)
	  that.dottedLine(canvas,data,590, 245, 590, 875) // Line connecting index -6 & index - 12
	  that.dottedLine(canvas,data,590, 875, 620, 875)
	  that.leftArrow(canvas,data,620, 875)
	  that.dottedLine(canvas,data,790, 685, 985, 685) // Line connecting index -11 & index - 14
	  that.dottedLine(canvas,data,790, 875, 985, 875) // Line connecting index -11,12 & index - 14
	  that.dottedLine(canvas,data,985, 875, 985, 610)
	  that.upArrow(canvas,data,985, 610)
	  that.dottedLine(canvas,data,590, 465, 620, 465) // Line Connecting index - 6 & index -10
	  that.leftArrow(canvas,data,620, 465)
	  that.dottedLine(canvas,data,790, 465, 840, 465) // Line Connecting index - 10 & index - 13
	  that.dottedLine(canvas,data,840, 465, 840, 360)
	  that.dottedLine(canvas,data,840, 360, 900, 360)
	  that.leftArrow(canvas,data,900, 360)
	  that.dottedLine(canvas,data,840, 465, 840,580) // Line Connecting index - 10 & index - 14
	  that.dottedLine(canvas,data,840, 580, 900, 580)
	  that.leftArrow(canvas,data,900, 580)
	  that.dottedLine(canvas,data,360,245,620,245) // Line Connecting index - 6 & index - 9
	  that.leftArrow(canvas,data,620,245)
	  that.dottedLine(canvas,data,790,245,985,245) // Line Connecting index - 9 & index - 13
	  that.dottedLine(canvas,data,985,245,985,330)
	  that.downArrow(canvas,data,985,330)
	  that.dottedLine(canvas,data,850, 245, 850, 875)// Line Connecting index - 9 & index - 12
	  that.line(canvas,data,1070,360,1135,360) // Line Connecting index - 13 & index - 15
	  that.line(canvas,data,1135,360,1135,465)
	  that.line(canvas,data,1135,465,1200,465)
	  that.leftArrow(canvas,data,1200, 465)
	  that.line(canvas,data,1070,580,1135,580) // Line Connecting index - 14 & index - 15
	  that.line(canvas,data,1135,580,1135,360)
	  that.line(canvas,data,1370,465,1410,465) // Line Connecting index - 15 & index - 16
	  that.leftArrow(canvas,data,1410, 465)
	  that.line(canvas,data,1560,465,1600,465) // Line Connecting index - 16 & index - 17
	  that.leftArrow(canvas,data,1600, 465)
	  // Lower Part of Process
	  // First Row
	  that.pentagon(canvas,data,10,1120,2920,2960,1145,1175,17) // ECC
	  that.text(canvas,data,1500,1150,300,40,17)
	  //Second Row
	  that.rect(canvas,data,10,1195,290,60,18) // Maintenance of Tables Related to Rebates
	  that.text(canvas,data,40,1225,300,40,18)
	  that.rect(canvas,data,320,1195,1040,60,19) // Other Processing Related to Rebates
	  that.text(canvas,data,730,1225,300,40,19)
	  that.rect(canvas,data,1380,1195,1580,60,20) // Rebate Reallocation
	  that.text(canvas,data,2180,1225,300,40,20)
	  //First Column
	  that.rect(canvas,data,10,1285,290,90,21) // Monthly updates of Outstanding(Z2CMT2170_01)
	  that.text(canvas,data,22,1330,300,40,21)
	  that.rect(canvas,data,10,1475,290,90,22) // Maintenance Allocation Keys(Z2CMT3050)
	  that.text(canvas,data,40,1525,300,40,22)
	  //Second Column
	  that.rect(canvas,data,340,1285,290,90,23) // Rebate Adjustment(Z2CMT3390)
	  that.text(canvas,data,390,1330,300,40,23)
	  that.rect(canvas,data,340,1475,290,90,24) // Automatic Manual Accruals(Z2CMT1320)
	  that.text(canvas,data,375,1525,300,40,24)
	  //Third Column
	  that.rect(canvas,data,700,1285,290,90,25) // Approval on/off invoice report(Z2CMT3900)
	  that.text(canvas,data,730,1330,300,40,25)

	  that.rect(canvas,data,700,1475,290,90,26) // Municipal taxes maintenance for GR(Z2CS71006_MUNI_TAX)
	  that.text(canvas,data,750,1515,300,40,26)

	  //Fourth Column

	  that.rect(canvas,data,1070,1375,290,90,27) // Changing of Rebate Agreement Status Z2CMT4100 and ZS2CSSTATREBTUPDT
	  that.text(canvas,data,1100,1420,250,40,27)

	  //Fifth Column

	  that.rect(canvas,data,1380,1285,290,70,28) // Final Settlement Documents
	  that.text(canvas,data,1450,1320,250,40,28)

	  that.rect(canvas,data,1380,1495,290,70,29) // Manual Accrual
	  that.text(canvas,data,1475,1535,250,40,29)

	  //Sixth Column

	  that.rect(canvas,data,1870,1365,290,110,30)
	  that.text(canvas,data,1985,1390,250,40,30) // BODI/BW Extraction
	  that.text(canvas,data,1935,1415,250,40,31)
	  that.text(canvas,data,1955,1445,250,40,32)

	  // Seventh Column

	  that.rect(canvas,data,2260,1365,290,110,33)
	  that.text(canvas,data,2350,1390,250,40,33) // Reallocate Amount
	  that.text(canvas,data,2375,1420,250,40,34)
	  that.text(canvas,data,2320,1435,250,40,35)
	  that.text(canvas,data,2290,1455,250,40,36)

	  // Eighth Column

	  that.rect(canvas,data,2670,1365,290,110,37)
	  that.text(canvas,data,2750,1410,250,40,37) // ESRA/COPA Extraction
	  that.text(canvas,data,2740,1440,250,40,38)

	  //Lines and Arrows

	  that.line(canvas,data,1670,1320,1770,1320) // Line connecting index -29 & index - 31
	  that.line(canvas,data,1770,1320,1770,1420)
	  that.line(canvas,data,1770,1420,1870,1420)
	  that.leftArrow(canvas,data,1870, 1420)

	  that.line(canvas,data,1670,1530,1770,1530) // Line connecting index -30 & index - 31
	  that.line(canvas,data,1770,1530,1770,1420)


	  that.line(canvas,data,2160,1420,2260,1420) // Line connecting index -31 & index - 34
	  that.leftArrow(canvas,data,2260, 1420)

	  that.line(canvas,data,2550,1420,2670,1420) // Line connecting index -34 & index - 38
	  that.leftArrow(canvas,data,2670, 1420)

	  return canvas;
	  }  , 1000 );
	  },
	  sotc_43_billingReport :function(x){//sotc_43


	  var model = this.uisCodeCheck("SOTC_43");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Billing Report";
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
	  that.rect(canvas,data,100,10,1400,40,0) // ECC
	  that.text(canvas,data,700,30,1000,40,0)

	  that.rect(canvas,data,100,70,1400,60,1) // Transaction Code: Z2BCSBILLING
	  that.text(canvas,data,650,100,1000,40,1)

	  that.rect(canvas,data,100,160,150,80,2) // MCO to BCS selection screen variant execution
	  that.text(canvas,data,110,190,150,40,2)
	  that.line(canvas,data,250,200,300,200)  // output line to "Execute report base on parameters..........."
	  that.line(canvas,data,250,310,300,310)
	  that.line(canvas,data,300,200,300,310)
	  that.line(canvas,data,300,290,400,290)
	  that.leftArrow(canvas,data,400,290)


	  that.rect(canvas,data,100,270,150,80,3) //  BCS to MCO selection screen variant execution
	  that.text(canvas,data,110,300,150,40,3)

	  that.rect(canvas,data,400,255,250,80,4) // Execute report base on parameters in the selection screen of the report.Execution can be via job or manual run.
	  that.text(canvas,data,410,285,240,40,4)
	  that.line(canvas,data,650,295,720,295) // output lien to "Process the related billing line items for........"
	  that.leftArrow(canvas,data,720,295)

	  that.rect(canvas,data,720,255,250,80,5) // Process the related billing line items for the selected billing documents taking into consideration the followiing steps
	  that.text(canvas,data,730,285,240,40,5)
	  that.line(canvas,data,970,295,1200,295) // output line to "ALV report output"
	  that.leftArrow(canvas,data,1200,295)

	  that.rect(canvas,data,1200,255,200,80,6) // ALV report output
	  that.text(canvas,data,1240,285,190,40,6)

	  that.rect(canvas,data,100,400,1400,60,7) // Transaction Code: VFX3 Release Billing Documents to Accounting
	  that.text(canvas,data,600,430,1000,40,7)

	  that.rect(canvas,data,100,500,150,80,8) // Execution of transaction VFX3 either manually or via Job
	  that.text(canvas,data,110,530,140,40,8)
	  that.line(canvas,data,250,540,300,540)  // output line to  "Report will Return Invoices which are blocked for Accounting"
	  that.leftArrow(canvas,data,300,540)

	  that.rect(canvas,data,300,500,150,80,9) // Report will Return Invoices which are blocked for Accounting
	  that.text(canvas,data,310,530,140,40,9)
	  that.line(canvas,data,450,540,500,540)  // output line to "Validate root cause of why invoice is blocked for accounting"
	  that.leftArrow(canvas,data,500,540)

	  that.rect(canvas,data,500,500,150,80,10) // Validate root cause of why invoice is blocked for accounting
	  that.text(canvas,data,510,530,140,40,10)
	  that.line(canvas,data,650,540,720,540) // output line to "relase invoice to accounting via transaction VFX3"
	  that.leftArrow(canvas,data,720,540)

	  that.rect(canvas,data,720,500,150,80,11) //relase invoice to accounting via transaction VFX3
	  that.text(canvas,data,730,530,140,40,11)
	  that.line(canvas,data,870,540,920,540) // output line to "Execution corthat.rection program ZZCORRFB"
	  that.leftArrow(canvas,data,920,540)

	  that.rect(canvas,data,920,500,150,80,12) // Execution corthat.rection program ZZCORRFB
	  that.text(canvas,data,930,530,140,40,12)

	  return canvas;
	  }  , 1000 );
	  },
	  sotc_44_cabinetRentalDifference :function(x){//sotc_44


	  var model = this.uisCodeCheck("SOTC_44");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Cabinet Rental Difference";
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
	  that.rect(canvas,data,150,10,1200,40,0) // ECC
	  that.text(canvas,data,700,30,1000,40,0)

	  that.rect(canvas,data,150,70,550,60,1) //  ECC Credit for Cabinet Rental Difference
	  that.text(canvas,data,250,100,500,40,1)

	  that.rect(canvas,data,150,160,250,80,2) // Manual Sales Order Creation (YC51)
	  that.text(canvas,data,170,190,240,40,2)
	  that.line(canvas,data,400,200,450,200) //output line to "Manual Invoice Creation (YNC)"
	  that.leftArrow(canvas,data,450,200)

	  that.rect(canvas,data,450,160,250,80,3) // Manual Invoice Creation (YNC)
	  that.text(canvas,data,480,190,240,40,3)

	  that.rect(canvas,data,800,70,550,60,4)  // ECC Debit for Cabinet Rental Difference
	  that.text(canvas,data,950,100,500,40,4)

	  that.rect(canvas,data,800,160,250,80,5) // Manual Sales Order Creation (YD50)
	  that.text(canvas,data,820,190,240,40,5)
	  that.line(canvas,data,1050,200,1100,200) // output line to "Invoice Creation (YND)"
	  that.leftArrow(canvas,data,1100,200)

	  that.rect(canvas,data,1100,160,250,80,6) // Invoice Creation (YND)
	  that.text(canvas,data,1130,190,240,40,6)
	  return canvas;
	  }  , 1000 );
	  },


	  sotc_45_greenDotProcess :function(x){//sotc_45
	  var model = this.uisCodeCheck("SOTC_45");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Green Dot Processing (DE)";
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
	  that.rect(canvas,data,10,10,1390,40,0) // ECC
	  that.text(canvas,data,680,30,1000,40,0)

	  that.rect(canvas,data,10,70,1000,60,1)  // Waste Profiles Master Data Maintenance / Configuration
	  that.text(canvas,data,330,100,900,40,1)

	  that.rect(canvas,data,10,160,150,80,2)  // Define Waste Profile Z2ECOPROFILES
	  that.text(canvas,data,20,190,130,40,2)
	  that.line(canvas,data,160,190,180,190)  // output line to "Assign Waste Profile to Material VK11"
	  that.leftArrow(canvas,data,180,190)

	  that.rect(canvas,data,180,160,150,80,3) // Assign Waste Profile to Material VK11
	  that.text(canvas,data,190,190,130,40,3)
	  that.line(canvas,data,330,190,350,190) // output line to "Maintain Tariff Pricing for Waste Profile VK11"
	  that.leftArrow(canvas,data,350,190)

	  that.rect(canvas,data,350,160,150,80,4) // Maintain Tariff Pricing for Waste Profile VK11
	  that.text(canvas,data,360,190,130,40,4)

	  that.rect(canvas,data,520,160,150,80,5) //  Define Product Group Z2ECOGROUP
	  that.text(canvas,data,530,190,130,40,5)

	  that.rect(canvas,data,690,160,150,80,6) // Define Waste Composition VK11
	  that.text(canvas,data,700,190,130,40,6)

	  that.rect(canvas,data,860,160,150,80,7) // Define Green Dot Company Profile Z2ECOCOMPANIES
	  that.text(canvas,data,870,190,130,40,7)

	  that.rect(canvas,data,1050,70,520,60,8) // Report
	  that.text(canvas,data,1300,100,500,40,8)

	  that.rect(canvas,data,1050,160,150,80,9) //  Profile Report Z2PROFILE
	  that.text(canvas,data,1060,190,130,40,9)

	  that.rect(canvas,data,1235,160,150,80,10) // Company Profile Report V/LD - G1
	  that.text(canvas,data,1245,190,130,40,10)

	  that.rect(canvas,data,1405,160,150,80,11) // Green Dot Report Z2CMT3660_GVM
	  that.text(canvas,data,1415,190,130,40,11)
	  return canvas;
	  }  , 1000 );
	  },
	  sotc_46_itemProposal :function(x){//sotc_46


	  var model = this.uisCodeCheck("SOTC_46");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Item Proposal Processing";
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
	  that.rect(canvas,data,100,10,1050,40,0) // ECC
	  that.text(canvas,data,600,30,1000,30,0)

	  that.rect(canvas,data,100,70,250,60,1) // Item Proposal Creation
	  that.text(canvas,data,150,100,230,40,1)

	  that.rect(canvas,data,100,170,250,80,2) // Create Item Proposal (VA51)
	  that.text(canvas,data,130,200,230,40,2)
	  that.line(canvas,data,350,210,540,210)  // output line to "Manual Sales Order Creation (VA01)"
	  that.leftArrow(canvas,data,540,210)

	  that.rect(canvas,data,540,70,600,60,3) // Sales Order Creation
	  that.text(canvas,data,800,100,580,40,3)

	  that.rect(canvas,data,540,170,250,80,4) // Manual Sales Order Creation (VA01)
	  that.text(canvas,data,560,200,230,40,4)
	  that.line(canvas,data,790,210,890,210)  // output line to "Propose Items (With or without quantity)"
	  that.leftArrow(canvas,data,890,210)

	  that.rect(canvas,data,890,170,250,80,5) // Propose Items (With or without quantity)
	  that.text(canvas,data,900,200,230,40,5)
	  return canvas;
	  }  , 1000 );
	  },
	  sotc_47_greenDotProcessingPLandCZ :function(x){//sotc_47


	  var model = this.uisCodeCheck("SOTC_47");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Green Dot Processing (PL and CZ) v3";
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
	  that.rect(canvas,data,10,10,1550,40,0) // ECC
	    that.text(canvas,data,750,30,1000,40,0)

	   that.rect(canvas,data,10,70,700,60,1) // Waste Profiles Master Data Maintenance / Configuration
	    that.text(canvas,data,210,100,650,40,1)

	    that.freeText(canvas,data,10,160,150,20,2,"15px")  // Define Waste

	   that.rect(canvas,data,10,170,150,80,3)  // Waste Category Z7MM_WASTE_CAT
	   that.text(canvas,data,20,200,130,40,3)
	   that.line(canvas,data,160,210,175,210) // output line to "Define Waste Profile Z7MM_WASTEPROF_H"
	   that.line(canvas,data,175,210,175,340)
	   that.line(canvas,data,175,280,215,280)
	   that.leftArrow(canvas,data,215,280)

	   that.rect(canvas,data,10,300,150,80,4) // Waste Type Z7MM_WASTE_TYPE
	   that.text(canvas,data,20,330,130,40,4)
	   that.line(canvas,data,160,340,175,340)

	    that.rect(canvas,data,215,240,150,80,5) // Define Waste Profile Z7MM_WASTEPROF_H
	    that.text(canvas,data,225,270,130,40,5)
	   that.line(canvas,data,365,280,390,280)  // output line to "Define Waste Composition Z7MM_WASTEPROF_P"
	   that.leftArrow(canvas,data,390,280)

	    that.rect(canvas,data,390,240,150,80,6) // Define Waste Composition Z7MM_WASTEPROF_P
	    that.text(canvas,data,400,270,130,40,6)
	   that.line(canvas,data,540,280,560,280)  // output line to "Assign Waste Profile to Material"
	   that.leftArrow(canvas,data,560,280)

	    that.rect(canvas,data,560,240,150,80,7) // Assign Waste Profile to Material
	    that.text(canvas,data,570,270,130,40,7)
	   that.line(canvas,data,710,280,770,280)  // output line to "Green Dot Report Master Data Maintenance / Configuration"
	   that.leftArrow(canvas,data,770,280)

	   that.rect(canvas,data,770,70,530,60,8) // Green Dot Report Master Data Maintenance / Configuration
	    that.text(canvas,data,870,100,500,40,8)

	    that.rect(canvas,data,770,240,150,80,9) // Define Report Z7MM_GD_REPORT
	    that.text(canvas,data,780,270,130,40,9)
	   that.line(canvas,data,920,280,950,280)  // output line to "Define Operations Z7MM_GD_OPERATIO"
	   that.leftArrow(canvas,data,950,280)

	    that.rect(canvas,data,950,240,150,80,10) // Define Operations Z7MM_GD_OPERATIO
	    that.text(canvas,data,960,270,130,40,10)
	    that.line(canvas,data,1100,280,1140,280)  // output lien to "Define Report Operations Z7MM_GD_REP_OPER"
	   that.leftArrow(canvas,data,1140,280)

	    that.rect(canvas,data,1140,240,150,80,11)  // Define Report Operations Z7MM_GD_REP_OPER
	    that.text(canvas,data,1150,270,130,40,11)
	    that.line(canvas,data,1290,280,1380,280)  // output line to "Green Dot Report Z2SDGREEND0T"
	   that.leftArrow(canvas,data,1380,280)

	    that.rect(canvas,data,1320,70,240,60,12) // Green Dot Report
	    that.text(canvas,data,1390,100,220,40,12)

	    that.rect(canvas,data,1380,240,150,80,13) //  Green Dot Report Z2SDGREEND0T
	    that.text(canvas,data,1390,270,140,40,13)
	   return canvas;
	  }  , 1000 );
	  },

	  sotc_48_cust_delivery  :function(x){//sotc_48


	  var model = this.uisCodeCheck("SOTC_48");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Customer Delivery Process";
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
	  that.rect(canvas,data,10,10,600,40,0)
	  that.text(canvas,data,300,35,300,40,0)
	  that.rect(canvas,data,650,10,100,40,8)
	  that.text(canvas,data,680,35,100,40,8)
	  that.rect(canvas,data,780,10,270,40,0)
	  that.text(canvas,data,890,35,270,40,0)
	  that.rect(canvas,data,1090,10,120,40,8)
	  that.text(canvas,data,1130,35,120,40,8)
	  //second line
	  that.rect(canvas,data,10,70,600,40,1) // ECC Customer Delivery Process
	  that.text(canvas,data,255,95,300,40,1)
	  that.rect(canvas,data,650,70,100,40,9)  // Interface Delivery to OTM
	  that.text(canvas,data,655,85,100,40,9)
	  that.rect(canvas,data,780,70,120,40,11) //
	  that.text(canvas,data,785,85,120,40,11)
	  that.rect(canvas,data,930,70,120,40,14) // ECC ReceivingProcess
	  that.text(canvas,data,935,85,120,40,14)
	  that.rect(canvas,data,1090,70,120,40,18)  // Interface Actuals idocto OTM
	  that.text(canvas,data,1095,85,120,40,18)
	  //tasks
	  that.rect(canvas,data,10,160,470,40,2) //Outbound Delivery creation(manual/job/automatic upon
	  that.text(canvas,data,15,185,470,40,2)
	  that.line(canvas,data,480,180,650,180)
	  that.leftArrow(canvas,data,650,180)
	  that.line(canvas,data,550,180,550,230)
	  that.downArrow(canvas,data,550,230)
	  that.line(canvas,data,245,200,245,230)
	  that.line(canvas,data,60,230,420,230)
	  that.line(canvas,data,60,230,60,260)
	  that.downArrow(canvas,data,60,260)
	  that.line(canvas,data,180,230,180,260)
	  that.downArrow(canvas,data,180,260)
	  that.line(canvas,data,300,230,300,260)
	  that.downArrow(canvas,data,300,260)
	  that.line(canvas,data,420,230,420,260)
	  that.downArrow(canvas,data,420,260)
	  that.rect(canvas,data,10,260,100,70,3)//Delivery due list processing VL10a/job
	  that.text(canvas,data,15,275,100,70,3)
	  that.rect(canvas,data,130,260,100,70,4)
	  that.text(canvas,data,135,275,100,70,4)
	  that.rect(canvas,data,250,260,100,70,5)
	  that.text(canvas,data,255,285,100,70,5)
	  that.rect(canvas,data,370,260,100,70,6)
	  that.text(canvas,data,375,285,100,70,6)
	  that.rect(canvas,data,490,230,120,80,7)//Delivery instruction Z003 (WMS190 /I003)
	  that.text(canvas,data,500,255,120,80,7)
	  that.rect(canvas,data,650,160,100,70,10) //Outbound Delivery creation(manual/job/automatic upon
	  that.text(canvas,data,655,185,100,70,10)
	  that.line(canvas,data,750,180,780,180)
	  that.leftArrow(canvas,data,780,180)
	  that.rect(canvas,data,780,160,120,70,12) //Shipment created in ECC(SHIPPL)
	  that.text(canvas,data,785,185,100,70,12)
	  that.line(canvas,data,840,230,840,260)
	  that.downArrow(canvas,data,840,260)
	  that.line(canvas,data,900,180,930,180)
	  that.leftArrow(canvas,data,930,180)
	  that.rect(canvas,data,780,260,120,70,13) //Shipment Update to ECC(SHIPPL)
	  that.text(canvas,data,790,275,100,70,13)
	  that.rect(canvas,data,930,160,120,70,15) //Goods Issue  (WMS200/I006)
	  that.text(canvas,data,940,175,100,70,15)
	  that.line(canvas,data,990,230,990,260)
	  that.downArrow(canvas,data,990,260)
	  that.rect(canvas,data,930,260,120,70,16) //Trigger ZACT output
	  that.text(canvas,data,940,275,100,70,16)
	  that.line(canvas,data,990,330,990,360)
	  that.downArrow(canvas,data,990,360)
	  that.line(canvas,data,1050,295,1090,295)
	  that.leftArrow(canvas,data,1090,295)
	  that.rect(canvas,data,930,360,120,70,17) //Creation of On-time Idoc
	  that.text(canvas,data,940,375,100,70,17)
	  that.line(canvas,data,1050,395,1090,395)
	  that.leftArrow(canvas,data,1090,395)
	  that.rect(canvas,data,1090,260,120,70,19) //Actuals Idoc sentto OTM(ZSH3)
	  that.text(canvas,data,1095,275,100,70,19)
	  that.rect(canvas,data,1090,360,120,70,20) //On-time Idoc sentto OTM
	  that.text(canvas,data,1100,375,100,70,20)


	   return canvas;
	  }  , 1000 );
	  },
	  sotc_49_thirdPartySales :function(x){//sotc_49
	  var model = this.uisCodeCheck("SOTC_49");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Third Party Sales Process v2";
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
	  that.rect(canvas,data,10,10,865,35,0) //ECC
	  that.text(canvas,data,555,33,1100,35,0)
	  that.rect(canvas,data,10,60,150,45,1) //3rd Party Sales Process - MSO
	  that.text(canvas,data,40,82,110,45,1)
	  that.rect(canvas,data,10,130,150,70,2) //Sales Order creation-VA01 (ZA13)
	  that.text(canvas,data,25,165,140,70,2)
	  that.line(canvas,data,80,200,80,240) // Connect to Purchase Requisition(NB)created automatically
	  that.downArrow(canvas,data,80,240)
	  that.line(canvas,data,160,165,575,165) //Connect to Creation of Invoice & AccountingDocumen
	  that.leftArrow(canvas,data,575,165)
	  that.rect(canvas,data,10,240,150,80,3) //Purchase Requisition(NB)created automatically
	  that.text(canvas,data,15,278,150,80,3)
	  that.line(canvas,data,160,282,220,282) // connect to Puchase Ordercreation (NB)
	  that.leftArrow(canvas,data,220,282)
	  that.rect(canvas,data,220,240,120,80,5) //Puchase Order creation (NB)
	  that.text(canvas,data,240,275,120,80,5)
	  that.line(canvas,data,340,282,415,282) //Connect to Post Goods Receipt
	  that.leftArrow(canvas,data,415,282)
	  that.rect(canvas,data,415,240,120,80,6) //Post Goods Receipt
	  that.text(canvas,data,420,285,120,80,6)
	  that.rect(canvas,data,190,60,350,45,4) //USCC Purchase Order Creation & Goods Receipt
	  that.text(canvas,data,230,87,350,45,4)
	  that.rect(canvas,data,575,60,120,45,7) //MSO Billing
	  that.text(canvas,data,605,87,120,45,7)
	  that.rect(canvas,data,575,130,120,60,8) //Creation of Invoice & Accounting Document
	  that.text(canvas,data,585,152,110,60,8)
	  that.line(canvas,data,630,190,630,215) //Connect line to Process EDI output in F2
	  that.rect(canvas,data,575,215,120,60,9) //Process EDI output in F2
	  that.text(canvas,data,582,245,105,60,9)
	  that.line(canvas,data,630,275,630,310) //Connect to Process RDIV output in F2
	  that.downArrow(canvas,data,630,310)
	  that.line(canvas,data,695,245,905,245) // Connect to Billing sent to Compudata(ZRD5)
	  that.leftArrow(canvas,data,905,245)
	  that.rect(canvas,data,575,310,120,60,10) //Process RDIV output in F2
	  that.text(canvas,data,578,340,120,60,10)
	  that.line(canvas,data,695,340,735,340) //Connect to USCC creates Intercompany Billing(IVA)
	  that.leftArrow(canvas,data,735,340)
	  that.rect(canvas,data,735,60,140,45,11) //USCC Billing
	  that.text(canvas,data,770,87,140,45,11)
	  that.rect(canvas,data,735,310,140,60,12) //USCC creates Intercompany Billing(IVA)
	  that.text(canvas,data,750,333,140,60,12)
	  that.line(canvas,data,875,340,905,340)
	  that.leftArrow(canvas,data,905,340)
	  that.rect(canvas,data,905,10,180,35,13) //External system
	  that.text(canvas,data,950,33,180,35,13)
	  that.rect(canvas,data,905,60,180,45,14) //Interface EDI IDOC
	  that.text(canvas,data,940,87,180,45,14)
	  that.rect(canvas,data,905,215,180,60,15) //IDOC message typeINVOICE sent to Partner
	  that.text(canvas,data,928,243,160,60,15)
	  that.rect(canvas,data,905,310,180,60,16) //Billing sent to Compudata(ZRD5)
	  that.text(canvas,data,928,338,160,60,16)
	  return canvas;
	  }  , 1000 );
	  },sotc_50_consignmentIssuev3 :function(x){//sotc_50


	  var model = this.uisCodeCheck("SOTC_50");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Consignment Issue v3";
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
	      that.rect(canvas,data,10,10,680,30,0)//ECC
	      that.text(canvas,data,350,30,80,30,0)
	        that.rect(canvas,data,710,10,140,30,7)//External System
	      that.text(canvas,data,730,30,100,30,7)
	      //second line
	      that.rect(canvas,data,10,60,680,30,1)//Consignment Issue Process - MSO
	      that.text(canvas,data,270,80,200,30,1)
	      that.rect(canvas,data,710,60,140,30,8)//Interface EDI IDOC
	      that.text(canvas,data,730,80,110,30,8)
	      //tasks
	      that.rect(canvas,data,10,110,120,80,2)//Create Issue Order order type: ZA4(VA01 / Inbound Idoc)
	      that.text(canvas,data,30,130,100,50,2)
	      that.line(canvas,data,130,150,150,150)
	      that.leftArrow(canvas,data,150,150)
	      that.rect(canvas,data,150,110,120,80,3)//Automatic Outbound Delivery creation Del Type: Z102
	      that.text(canvas,data,170,130,100,50,3)
	      that.line(canvas,data,270,150,290,150)
	      that.leftArrow(canvas,data,290,150)
	      that.rect(canvas,data,290,110,120,80,4)//Goods Issue from Consignment Stock
	      that.text(canvas,data,310,130,100,50,4)
	      that.line(canvas,data,410,150,430,150)
	      that.leftArrow(canvas,data,430,150)
	      that.rect(canvas,data,430,110,120,80,5)//Invoice Creation(F2)
	      that.text(canvas,data,450,130,100,50,5)

	      that.rect(canvas,data,570,110,120,80,6)//Processing of EDI output to create INVOIC IDOC
	      that.text(canvas,data,580,130,100,50,6)
	      that.line(canvas,data,690,150,710,150)
	      that.leftArrow(canvas,data,710,150)
	        that.rect(canvas,data,710,110,140,80,9)//IDOC message type INVOIC sent to Partner
	      that.text(canvas,data,730,130,110,50,9)

	  return canvas;
	  }  , 1000 );
	  }
	  ,sotc_51_prePaymentDELBased :function(x){//sotc_51


	  var model = this.uisCodeCheck("SOTC_51");
	  var data = sap.ui.getCore().getModel("bindingModel").oData;
	  x.getView().getModel("oModelHeader").oData.header="OTC Pre Payment DEL based";
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
	  //top line
	    that.rect(canvas,data,10,10,570,50,0)//   ECC-1
	    that.text(canvas,data,270,30,200,40,0)
	    that.rect(canvas,data,610,10,170,50,7)//   OTM
	    that.text(canvas,data,680,30,160,40,7)
	    that.rect(canvas,data,810,10,570,50,10)//   ECC-2
	    that.text(canvas,data,1080,30,200,40,10) //
	    //second line
	    that.rect(canvas,data,10,70,570,70,1) // ECC Standard Sales Order Process
	        that.text(canvas,data,200,90,200,60,1)
	        that.rect(canvas,data,610,70,170,70,8)  // Interface Delivery to OTM
	        that.text(canvas,data,620,90,160,60,8)
	       that.rect(canvas,data,810,70,170,70,11)  // Prepayment Process
	        that.text(canvas,data,820,90,160,60,11)
	        that.rect(canvas,data,1010,70,170,70,14)  // PGI Process
	        that.text(canvas,data,1020,90,160,60,14)
	        that.rect(canvas,data,1210,70,170,70,17)  // Billing Process
	        that.text(canvas,data,1220,90,160,60,17)
	    //tasks
	        that.rect(canvas,data,10,180,170,70,2)  // Manual or Automatic Order Creation via VA01
	        that.text(canvas,data,20,200,160,60,2)
	        that.line(canvas,data,180,210,210,210)
	         that.leftArrow(canvas,data,210,210)
	         that.rect(canvas,data,210,180,170,70,3)  //  Trigger Automatic Credit Check
	        that.text(canvas,data,220,200,160,60,3)
	        that.line(canvas,data,380,210,410,210)
	         that.leftArrow(canvas,data,410,210)
	         that.rect(canvas,data,410,180,170,70,4)  //  Outbound Delivery creation (manual/job)
	        that.text(canvas,data,420,200,160,60,4)
	          that.line(canvas,data,500,250,500,280)
	          that.downArrow(canvas,data,500,280)
	        that.line(canvas,data,580,210,610,210)
	         that.leftArrow(canvas,data,610,210)
	         that.rect(canvas,data,410,280,170,70,5)  //  Delivery instruction Z003 (WMS190/I003)
	        that.text(canvas,data,420,300,160,60,5)
	        that.line(canvas,data,580,310,680,310)
	         that.line(canvas,data,680,310,680,410)
	         that.line(canvas,data,680,410,810,410)
	         that.leftArrow(canvas,data,810,410)
	        that.line(canvas,data,580,210,1010,210)
	         that.leftArrow(canvas,data,1010,210)
	        that.rect(canvas,data,410,420,170,40,6)	// WMS
	        that.text(canvas,data,480,440,160,30,6)
	        that.rect(canvas,data,610,180,170,70,9)	//  Delivery sent to OTM (ZETM/TPSDLS)
	        that.text(canvas,data,620,200,160,60,9)
	        that.rect(canvas,data,810,280,170,70,12)  //  Receive payment from customer & remove credit block
	        that.text(canvas,data,820,300,160,60,12)
	         that.line(canvas,data,980,310,1100,310)
	           that.line(canvas,data,1100,250,1100,310)
	           that.upArrow(canvas,data,1100,250)
	        that.line(canvas,data,900,350,900,380)
	        that.upArrow(canvas,data,900,350)
	        that.rect(canvas,data,810,380,170,70,13)  // Create F5 Pro Forma Invoice via VF01 & send to Customer
	        that.text(canvas,data,820,400,160,60,13)
	         that.rect(canvas,data,1010,180,170,70,15)  //  Post Goods Issue of the Delivery (WMS200/I006)
	        that.text(canvas,data,1020,200,160,60,15)
	        that.line(canvas,data,1180,210,1210,210)
	         that.leftArrow(canvas,data,1210,210)
	        that.rect(canvas,data,1010,420,170,40,16)	// WMS
	        that.text(canvas,data,1080,440,160,30,16)
	         that.rect(canvas,data,1210,180,170,70,18)  // Invoice and Intercompany creation.
	        that.text(canvas,data,1220,200,160,60,18)
	  return canvas;
	  }  , 1000 );
	  },
	  /*===========OTC END==========*/


 


      };
    });