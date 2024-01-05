sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/ui/core/routing/History" ],
		function(Controller, History) {
			"use strict";
			return Controller.extend("PF.landscape.test", {
				otc_partner : function(){
					alert("hi");
					var that=this;
					var width=1900;
					 var height=1500;
					 var dom;
					 var canvas = d3.select("#__xmlview4--idScrollCon").append("svg")
					 .attr("width",width)
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
				},
			});
		}); 