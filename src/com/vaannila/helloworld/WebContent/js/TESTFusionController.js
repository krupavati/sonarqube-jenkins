sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/ui/core/routing/History","PF/controllers/BaseController"],
		function(Controller, History,base) {
			
			return  {
				make : function(x){
					x.getView().getModel("oModelHeader").oData.header="MANUFACTURING MAKE CRITICAL BUSINESS PROCESS";
					
					var that = x;
					var width=1900;
					 var height=1500;
					 var dom;
					 var canvas = d3.select("#__xmlview4--idScrollCon").append("svg")
					 .attr("width",width)
					 .attr("id","idCanvas")
					 .attr("height",height).append("g")
					d3.json("model/data.json",function(data){
						
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
					})
					
					
				},
				
				
				
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
						that.rect(canvas,data,10,70,300,40,1)	// Pre-Trading Contract Creation Process
						that.text(canvas,data,55,95,300,40,1)
						that.rect(canvas,data,350,70,130,50,4)	//Interface  Pre-Trading Contract  to ECC
						that.text(canvas,data,365,95,130,50,4)
						that.rect(canvas,data,530,70,890,40,6)	//Procurement process in ECC 
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
				
				DC_wareHousing_WMS : function(x){
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
						that.rect(canvas,data,10,70,300,40,1)	// 20px difference from first row
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
				
				},
				
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
						that.rect(canvas,data,10,70,600,40,1)	// ECC Customer Delivery Process
						that.text(canvas,data,255,95,300,40,1)
						that.rect(canvas,data,650,70,100,40,9)	// Interface Delivery to OTM
						that.text(canvas,data,655,85,100,40,9)
						that.rect(canvas,data,780,70,120,40,11)	// 
						that.text(canvas,data,785,85,120,40,11)
						that.rect(canvas,data,930,70,120,40,14)	// ECC ReceivingProcess
						that.text(canvas,data,935,85,120,40,14)
						that.rect(canvas,data,1090,70,120,40,18)	// Interface Actuals idocto OTM
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
					$.ajax({
						type : "GET",
						contentType : 'application/json',
						dataType : 'json',
						async: false,
						crossDomain : true,
						url : "http://ocsd051a.eu.unilever.com:8000/sap/opu/odata/sap/ZUIS_MASTER_SRV/MasterSet?$filter=Uiscode eq '"+uis+"'",
						success : function(data) {
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
							
						}
						});
				
					
					
					
					
				/*	var url = uis;
					$.ajax({
						type : "GET",
						contentType : 'application/json',
						dataType : 'json',
						async: false,
						crossDomain : true,
						url : url,
						success : function(data) {
							debugger;
							if(sap.ui.getCore().getModel("UISDetailModel").oData.changeTaskColor == true){
								var modelData=[];
								for(var i=0;i<data.length;i++){
									var searchedId = sap.ui.getCore().getModel("UISDetailModel").oData.uisCode;
									var id = data[i].id;
									var color1=data[i].color;
									for(var j=0;j<id.length;j++){
										if(id[j] == searchedId){
										 color1="red"
									}
									}
									modelData.push({"id": data[i].id,
									    "color":color1,
									    "text":data[i].text})
									}
								sap.ui.getCore().getModel("bindingModel").setData(modelData);
							}else{
								sap.ui.getCore().getModel("bindingModel").setData(data);
							}
							console.log(sap.ui.getCore().getModel("bindingModel"));	
							
						}
						});*/
				},
				
				SSCR01B3_AribaForPM:function(x){
					var model = this.uisCodeCheck("model/ssrc01b3Ariba_pm.json");
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
                that.text(canvas,data,25,100,120,40,1)
                //THIRD LINE
                that.rect(canvas,data,10,160,150,60,2) //Delta Master Data Extract via custom programs
                that.text(canvas,data,25,180,100,40,2)
                //COLUMN 2
                //TOP LINE
                that.rect(canvas,data,240,10,350,40,3) //ECC
                that.text(canvas,data,390,35,300,40,3)
                //SECOND LINE
                that.rect(canvas,data,240,80,580,40,4) //Purchase Requisition Creation
                that.text(canvas,data,440,105,680,40,4)
                //THIRD LINE
                that.rect(canvas,data,240,160,180,65,5) //Purchase Requisition creation/change/Cancellation
                that.text(canvas,data,250,185,120,60,5)
                that.line(canvas,data,420,190,480,190)
                that.leftArrow(canvas,data,470,190)
                that.rect(canvas,data,470,160,150,65,6) //Purchase Requisition Released/Extract
                that.text(canvas,data,500,185,150,60,6)
                that.line(canvas,data,620,190,700,190)
                that.leftArrow(canvas,data,670,190)
                that.rect(canvas,data,670,160,150,65,7) //Purchase Requisition Replication to Ariba
                that.text(canvas,data,680,185,150,60,7)
                that.line(canvas,data,820,190,900,190) //This is to coonect between Purchase Req replication to ARIBA & Purchase Order Creation/Change/Cancellation
                that.leftArrow(canvas,data,880,190)
                //COLUMN3
                //TOP LINE
                that.rect(canvas,data,670,10,400,40,8) //ARIBA
                that.text(canvas,data,850,35,400,40,8)
                that.rect(canvas,data,880,80,330,40,9) //Purchase Order Creation
                that.text(canvas,data,920,105,330,40,9)
                that.rect(canvas,data,880,160,166,65,10) //Purchase Order Creation/Change/Cancellation
                that.text(canvas,data,880,190,166,65,10)
                //LINE & LEFT ARROW
                that.line(canvas,data,1045,190,1110,190) ////This is to coonect between Purchase Order Creation/Change/Cancellation & Purchase Order Replication
                that.leftArrow(canvas,data,1104,190)
                that.rect(canvas,data,1104,160,110,65,11) //Purchase Order Replication
                that.text(canvas,data,1115,195,110,65,11)
                //LINE & LEFT ARROW
                that.line(canvas,data,1214,190,1250,190) ////This is to coonect between Purchase Order Replication & Goods Receipt
                that.leftArrow(canvas,data,1250,190)
                //COLUMN4
                that.rect(canvas,data,1150,10,240,40,12) //ECC
                that.text(canvas,data,1250,35,240,40,12)
                that.rect(canvas,data,1250,80,300,40,13) //Good Receipt
                that.text(canvas,data,1370,105,160,40,13)
                that.rect(canvas,data,1250,160,130,65,14) //Good Receipt
                that.text(canvas,data,1270,190,130,65,14)
                //LINE & LEFT ARROW
                that.line(canvas,data,1380,190,1450,190) ////This is to coonect between  Goods Receipt & Goods ReceiptReplicatio
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
					 //OTC_Customer_Delivery_Process
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
				that.rect(canvas,data,10,60,120,50,1)	// Purchase Contract Creation Process 
                that.text(canvas,data,15,80,100,40,1)
				that.rect(canvas,data,150,60,120,50,4)	// Interface Contract  to ECC 
                that.text(canvas,data,155,80,100,40,4)
				that.rect(canvas,data,290,60,400,50,6)	// Procurement process in ECC
                that.text(canvas,data,400,90,200,40,6)
				that.rect(canvas,data,710,60,400,50,11)	// Supplier Procurement process
                that.text(canvas,data,840,90,200,40,11)
                that.rect(canvas,data,1130,60,250,50,16)	// Procurement process in ECC
                that.text(canvas,data,1170,90,200,40,16)
                 that.rect(canvas,data,1540,60,120,50,22)	// ECC Receiving Process
                that.text(canvas,data,1550,90,100,40,22)
                
				//tasks
				that.rect(canvas,data,10,130,120,60,2)	// Purchase Contract creation
                that.text(canvas,data,15,150,100,40,2)
                that.line(canvas,data,130,160,150,160)
				that.leftArrow(canvas,data,150,160)
				that.rect(canvas,data,150,130,120,60,5)	// Purchase Contract creation
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
                that.rect(canvas,data,710,130,120,60,12)	// Gross Requirement and Stock Updated
                that.text(canvas,data,720,150,100,40,12)
                 that.line(canvas,data,830,160,850,160)
				that.leftArrow(canvas,data,850,160)
				that.rect(canvas,data,850,130,120,60,13)	// Delivery Proposal Creation
                that.text(canvas,data,860,150,100,40,13)
                 that.line(canvas,data,970,160,1130,160)
				that.leftArrow(canvas,data,1130,160)
				that.rect(canvas,data,990,190,120,60,14)	// Despatch Advice
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
				that.rect(canvas,data,10,60,120,50,1)	//Purchase Order Creation Process 
                that.text(canvas,data,15,80,100,40,1)
				that.rect(canvas,data,150,60,120,50,4)	// Interface Order  to U2K2 ECC
                that.text(canvas,data,155,80,100,40,4)
				that.rect(canvas,data,290,60,440,50,6)	// Procurement process in ECC
                that.text(canvas,data,400,90,200,40,6)
				that.rect(canvas,data,750,60,120,50,12)	// Interface Order  to Sirius ECC
                that.text(canvas,data,760,80,100,40,12)
                that.rect(canvas,data,890,60,310,50,14)	// Procurement and Receiving process in ECC
                that.text(canvas,data,900,80,250,40,14)
                
				//tasks
				that.rect(canvas,data,10,130,120,60,2)	// Purchase Order creation
                that.text(canvas,data,15,150,100,40,2)
                that.line(canvas,data,130,160,150,160)
				that.leftArrow(canvas,data,150,160)
				that.rect(canvas,data,150,130,120,60,5)	// Purchase Order creation (RFC)
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
                that.rect(canvas,data,590,210,140,70,10)	// Automatic creation Outbound Delivery and Goods Issue (YR1UMM_PUR0052)
                that.text(canvas,data,600,230,110,40,10)
                that.rect(canvas,data,750,130,120,60,13)	// Level 2 Purchase Order creation (IDoc)
                that.text(canvas,data,760,150,110,40,13)
                that.line(canvas,data,870,160,890,160)
				that.leftArrow(canvas,data,890,160)
                that.rect(canvas,data,890,130,170,60,15)	// Inbound Delivery Creation (ZIBX Output/ZGSEIBD_UPLOAD)
                that.text(canvas,data,900,150,150,40,15)
                that.line(canvas,data,1060,160,1080,160)
				that.leftArrow(canvas,data,1080,160)
				that.rect(canvas,data,1080,130,120,60,16)	// Goods Receipt (MIGO)
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
				that.rect(canvas,data,10,60,120,50,1)	//Purchase Order Creation Process 
                that.text(canvas,data,15,80,100,40,1)
				that.rect(canvas,data,150,60,120,50,4)	// Interface Order  to U2K2 ECC
                that.text(canvas,data,155,80,100,40,4)
				that.rect(canvas,data,290,60,310,50,6)	//Procurement process in ECC
                that.text(canvas,data,350,90,200,40,6)
				//tasks
				that.rect(canvas,data,10,130,120,60,2)	//Purchase Order creation
                that.text(canvas,data,15,150,100,40,2)
                that.line(canvas,data,130,160,150,160)
				that.leftArrow(canvas,data,150,160)
				that.rect(canvas,data,150,130,120,60,5)	// Purchase Order creation (RFC)
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
					var model = this.uisCodeCheck("model/SDEL05D4_Stock_Reconciliation.json");
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
						that.line(canvas,data,1035,230,1035,250)	 // output line to "Tables Z2WMSREC_3PLP_WH and Z2WMSREC_3PLP_CS"
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
					x.getView().getModel("oModelHeader").oData.header="Source Sourcing Procurement via SA V3";
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
						that.rect(canvas,data,10,10,200,40,0) // CLM
						that.text(canvas,data,100,35,300,40,0)
						that.rect(canvas,data,10,80,200,40,1) // Purchase Contract Creation Process 
						that.text(canvas,data,60,100,140,40,1)
						that.rect(canvas,data,10,150,200,40,2) // Purchase Contract creation 
						that.text(canvas,data,60,170,140,40,2)
						
						// Second Line
						that.rect(canvas,data,260,10,1020,40,3)  // ECC
						that.text(canvas,data,720,35,300,40,3)
						that.rect(canvas,data,260,80,150,40,4)   // Interface Contract  to ECC
						that.text(canvas,data,265,103,140,40,4)
						that.rect(canvas,data,260,150,150,40,5)  // Purchase Contract creation
						that.text(canvas,data,265,170,140,40,5)
						that.rect(canvas,data,470,80,810,40,6)   // Procurement process in ECC
						that.text(canvas,data,750,103,200,40,6)
						that.rect(canvas,data,470,150,120,50,7)   // Scheduling Agreement (SA) Creation (ME31L)
						that.text(canvas,data,475,165,100,40,7)
						that.rect(canvas,data,660,150,130,50,8)   // Source List generation (Z7MM_SRCGEN)
						that.text(canvas,data,663,165,120,40,8)
						that.rect(canvas,data,870,150,220,50,9)   // Schedule line Creation (ME38/MRP Run) 
						that.text(canvas,data,923,165,170,40,9)
						that.rect(canvas,data,940,250,150,50,10)   // Communicate to Supplier 
						that.text(canvas,data,950,275,170,40,10)
						that.rect(canvas,data,950,370,150,50,11)   // Suppliers 
						that.text(canvas,data,990,395,170,40,11)
						
						that.rect(canvas,data,1160,150,120,50,12)   // Inbound Delivery Creation (ZIBD)
						that.text(canvas,data,1164,171,100,40,12)
						
						// Third Line
						that.rect(canvas,data,1340,10,150,40,13)  // OTM
						that.text(canvas,data,1380,35,300,40,13)
						that.rect(canvas,data,1340,150,150,50,14)  // Delivery sent to OTM (ZETM/TPSDLS) 
						that.text(canvas,data,1365,165,90,40,14)
						
						//Fourth Line
						that.rect(canvas,data,1550,10,200,40,15) // ECC
						that.text(canvas,data,1640,35,300,40,15)
						that.rect(canvas,data,1550,80,200,40,16)   // ECC Receiving Process
						that.text(canvas,data,1580,103,140,40,16)
						that.rect(canvas,data,1550,150,200,40,17)   // Goods Receipt   (MIGO)
						that.text(canvas,data,1580,173,140,40,17)
						
						// Line And Arrow
						that.line(canvas,data,210,170,260,170) // line connecting index - 2 & index - 5
						that.leftArrow(canvas,data,260,170)
						
						that.line(canvas,data,410,170,470,170) // line connecting index - 5 & index - 8
						that.leftArrow(canvas,data,470,170)

						
						that.line(canvas,data,590,170,660,170) // line connecting index - 7 & index - 8
						that.leftArrow(canvas,data,660,170)

						
						that.line(canvas,data,790,170,870,170) // line connecting index - 8 & index - 9
						that.leftArrow(canvas,data,870,170)

						
						that.line(canvas,data,1050,200,1050,250) // line connecting index - 9 & index - 10
						that.downArrow(canvas,data,1050,250)
				
						that.line(canvas,data,1090,280,1130,280) // line connecting index - 10 & index - 11
						that.line(canvas,data,1130,280,1130,330)
						that.line(canvas,data,1130,330,1050,330)
						that.line(canvas,data,1050,330,1050,370)
						that.downArrow(canvas,data,1050,370)

						
				
	
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
						that.rect(canvas,data,10,10,200,40,0) // CLM
						that.text(canvas,data,100,35,300,40,0)
						that.rect(canvas,data,10,80,200,40,1) // Purchase Contract Creation Process 
						that.text(canvas,data,60,100,140,40,1)
						that.rect(canvas,data,10,150,200,40,2) // Purchase Contract creation 
						that.text(canvas,data,60,170,140,40,2)
						
						// Second Line
						that.rect(canvas,data,260,10,1020,40,3)  // ECC
						that.text(canvas,data,720,35,300,40,3)
						that.rect(canvas,data,260,80,150,40,4)   // Interface Contract  to ECC
						that.text(canvas,data,265,103,140,40,4)
						that.rect(canvas,data,260,150,150,40,5)  // Purchase Contract creation
						that.text(canvas,data,265,170,140,40,5)
						that.rect(canvas,data,470,80,810,40,6)   // Procurement process in ECC
						that.text(canvas,data,750,103,200,40,6)
						that.rect(canvas,data,470,150,120,50,7)   // Source List generation (Z7MM_SRCGEN)
						that.text(canvas,data,475,165,70,40,7)
						that.rect(canvas,data,660,150,130,50,8)   // Purchase Requisition Creation (ME51N/MRP Run)
						that.text(canvas,data,663,165,120,40,8)
						that.rect(canvas,data,870,150,220,50,9)   // Purchase Order Creation (ME21N/MD04/ME58/Z7MM_AUTOPO)
						that.text(canvas,data,873,165,100,40,9)
						that.rect(canvas,data,1160,150,120,50,10)   // Inbound Delivery Creation (ZIBD)
						that.text(canvas,data,1164,171,100,40,10)
						
						// Third Line
						that.rect(canvas,data,1340,10,150,40,11)  // OTM
						that.text(canvas,data,1380,35,300,40,11)
						that.rect(canvas,data,1340,150,150,50,12)  // Delivery sent to OTM (ZETM/TPSDLS) 
						that.text(canvas,data,1365,165,90,40,12)
						
						//Fourth Line
						that.rect(canvas,data,1550,10,200,40,13) // ECC
						that.text(canvas,data,1640,35,300,40,13)
						that.rect(canvas,data,1550,80,200,40,14)   // ECC Receiving Process
						that.text(canvas,data,1580,103,140,40,14)
						that.rect(canvas,data,1550,150,200,40,15)   // Goods Receipt   (MIGO)
						that.text(canvas,data,1580,173,140,40,15)
						
						// Line And Arrow
						that.line(canvas,data,210,170,260,170) // line connecting index - 2 & index - 5
						that.leftArrow(canvas,data,260,170);

						
						that.line(canvas,data,410,170,470,170) // line connecting index - 5 & index - 8
						that.leftArrow(canvas,data,470,170);

						
						that.line(canvas,data,590,170,660,170) // line connecting index - 7 & index - 8
						that.leftArrow(canvas,data,660,170);

						
						that.line(canvas,data,790,170,870,170) // line connecting index - 8 & index - 9
						that.leftArrow(canvas,data,870,170);

						
						that.line(canvas,data,1090,170,1160,170) // line connecting index - 9 & index - 10
						that.leftArrow(canvas,data,1160,170);

						
						that.line(canvas,data,1280,170,1340,170) // line connecting index - 10 & index - 12
						that.leftArrow(canvas,data,1340,170);
						 
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
				
 
				


 


 
 




				
			};
		}); 