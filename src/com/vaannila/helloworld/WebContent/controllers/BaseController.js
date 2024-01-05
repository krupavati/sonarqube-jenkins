sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/ui/core/routing/History","sap/m/MessageToast" ],
		function(Controller, History,MessageToast) {
			"use strict";
			return Controller.extend("PF.controllers.BaseController", {

				/*_onRoutePatternMatched : function(oEvent) {
					debugger;
					var oHistory = sap.ui.core.routing.History.getInstance();
					    var sPreviousHash = oHistory.getPreviousHash();
					if(!sPreviousHash && oHistory.aHistory.length==1){
						window.location.href = window.hasher.getBaseURL();
					} 
				
				},*/
				
				busyIndicator : function(){
					if (!this.editPopUp) {
	                    this.editPopUp = sap.ui.xmlfragment("PF.fragments.busyIndicator",this);
	                    this.getView().addDependent(this.editPopUp);
	              }
	              this.editPopUp.open();
				},
				
				rect :function (canvas,data,x,y,width,height,index){//draw rectangle passing x and y
					var that =this;
					var rect=canvas.append("rect").data(data)
					.attr("width",width).attr("height",height)
					.attr("x",x).attr("y",y)
					.attr("fill",data[index].color)
					.attr("id",data[index].id)
					.call(clickable)
					/*.on("mouseover", style("cursor", "pointer"))*/
					.style("cursor", "pointer"); 
					 
					function  clickable(){
						 this.on("click", function(oEvt){
							var id = this.id;
							
							that._rectClicked(id);
							
						 }) 
					 }
				},
				leftArrow :function  (canvas,data,x1,y1){		
					var right = canvas.append("line")
				        .attr("x1",x1)
				        .attr("y1",y1)
				        .attr("x2",x1-10)
				        .attr("y2",y1-10)
				        .attr("stroke-width", 1)
				        .attr("stroke", "black");

					var left = canvas.append("line")
				       .attr("x1",x1)
				        .attr("y1", y1)
				        .attr("x2",x1-10)
				        .attr("y2", y1+10)
				        .attr("stroke-width", 1)
				        .attr("stroke", "black");
				},
				rightArrow : function  (canvas,data,x1,y1){		
					var right = canvas.append("line")
				        .attr("x1",x1)
				        .attr("y1",y1)
				        .attr("x2",x1+10)
				        .attr("y2",y1+10)
				        .attr("stroke-width", 1)
				        .attr("stroke", "black");

					var left = canvas.append("line")
				       .attr("x1",x1)
				        .attr("y1", y1)
				        .attr("x2",x1+10)
				        .attr("y2", y1-10)
				        .attr("stroke-width", 1)
				        .attr("stroke", "black");
			},	
			
			  dottedline : function(canvas,data,x1,y1,x2,y2){        
                var labelLine = canvas.append("line")
                .attr("x1",x1)
            .attr("y1",y1)
            .attr("x2",x2)
            .attr("y2",y2)
            .style("stroke-dasharray", ("3, 3")) 
            .attr("stroke-width", 1)
            .attr("stroke", "black");
          },
          dottedLine : function(canvas,data,x1,y1,x2,y2){        
              var labelLine = canvas.append("line")
              .attr("x1",x1)
          .attr("y1",y1)
          .attr("x2",x2)
          .attr("y2",y2)
          .style("stroke-dasharray", ("3, 3")) 
          .attr("stroke-width", 1)
          .attr("stroke", "black");
        },

           pipedArrow : function(canvas,data,x1,y1,x2,y2,x3,y3,y4,y5,index){ 
              var array=[]
              array = [x1,y1,x2,y1,x2,y2,x3,y3,x2,y4,x2,y5,x1,y5]
              var poly=canvas.append("polyline")
              .attr("points",array)
              .attr("stroke-width", "2px")
              .attr("fill",data[index].color)
         },

			downArrow :function  (canvas,data,x1,y1){		
				var right = canvas.append("line")
			        .attr("x1",x1)  // x2 < x1
			        .attr("y1",y1)
			        .attr("x2",x1-10)
			        .attr("y2",y1-10)
			        .attr("stroke-width", 1)
			        .attr("stroke", "black");

				var left = canvas.append("line")
			       .attr("x1",x1)
			        .attr("y1", y1)
			        .attr("x2",x1+10)
			        .attr("y2", y1-10)
			        .attr("stroke-width", 1)
			        .attr("stroke", "black");
					},
					
					upArrow : function  (canvas,data,x1,y1){		
				var right = canvas.append("line")
			        .attr("x1",x1)  // x2 < x1
			        .attr("y1",y1)
			        .attr("x2",x1+10)
			        .attr("y2",y1+10)
			        .attr("stroke-width", 1)
			        .attr("stroke", "black");

				var left = canvas.append("line")
			       .attr("x1",x1)
			        .attr("y1", y1)
			        .attr("x2",x1-10)
			        .attr("y2", y1+10)
			        .attr("stroke-width", 1)
			        .attr("stroke", "black");
					},
					
					line: function  (canvas,data,x1,y1,x2,y2){		
				var labelLine = canvas.append("line")
				.attr("x1",x1)
		        .attr("y1",y1)
		        .attr("x2",x2)
		        .attr("y2",y2)
		        .attr("stroke-width", 1)
		        .attr("stroke", "black");
			},
			
			 rotateText :function(canvas,data,x,y,width,height,index,angle){
				var text=canvas.append("text").data(data)
				.attr("fill","white")
				.attr("width",width).attr("height",height)
				.attr("x",x)
				.attr("y",y)
				.text(data[index].text) 
				.attr("font-size","12px")
				.attr("transform","rotate("+angle+" "+x+","+y+")")
				.call(wrap,width)
				function wrap(text, width) {
					 text.each(function() {
						    var text = d3.select(this),
						        words = text.text().split(/\s+/).reverse(),
						        word,
						        line = [],
						        lineNumber = 0,
						        lineHeight = 1.1, // ems
						        x = text.attr("x"),
						        y = text.attr("y"),
						        dy = text.attr("dy") ? text.attr("dy") : 0,
						        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
						    while (word = words.pop()) {
						      line.push(word);
						      tspan.text(line.join(" "));
						      if (tspan.node().getComputedTextLength() > width) {
						        line.pop();
						        tspan.text(line.join(" "));
						        line = [word];
						        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
						      }
						    }
						  });
				 }
				},
				 circle :function(canvas,data,x,y,r,index){
					var circle=canvas.append("circle").data(data)
					.attr("cx",x)
					.attr("cy",y)
					.attr("r",r)
					.attr("fill",data[index].color)
					.attr("id",data[index].id)
					 
				},
				 hexagon : function(canvas,data,x1,y1,x2,y2,x3,x4,y3,index){
	                   var array = [];
	                   array = [x1,y1,x2,y2,x3,y2,x4,y1,x3,y3,x2,y3];
	                   var poly = canvas.append("polyline")
	                   .attr("points",array)
	                   .attr("stroke-width", "2px")
	                   .attr("fill",data[index].color);
	              },

				
				 box : function(canvas,data,x,y,width,height,index,border){
					var rect=canvas.append("rect").data(data)
					.attr("width",width).attr("height",height)
					.attr("x",x).attr("y",y)
					.attr("fill",data[index].color)
					.attr("id",data[index].id)
					.attr('stroke','black')
					.attr('stroke-width', border)
					},
			
			 pipedRightArrow : function(canvas,data,x1,y1,x2,y2,x3,y3,y4,y5){ 
                var array=[]
                array = [x1,y1,x2,y1,x2,y2,x3,y3,x2,y4,x2,y5,x1,y5]
                var poly=canvas.append("polyline")
                .attr("points",array)
                .attr("stroke-width", "2px")
                .attr("fill","blue")
           },

			rotateFreeText  : function(canvas,data,x,y,width,height,index,angle){
				var text=canvas.append("text").data(data)
				.attr("fill","black")
				.attr("width",width).attr("height",height)
				.attr("x",x)
				.attr("y",y)
				.text(data[index].text) 
				.attr("font-size","12px")
				.attr("transform","rotate("+angle+" "+x+","+y+")")
				.call(wrap,width)
				function wrap(text, width) {
					 text.each(function() {
						    var text = d3.select(this),
						        words = text.text().split(/\s+/).reverse(),
						        word,
						        line = [],
						        lineNumber = 0,
						        lineHeight = 1.1, // ems
						        x = text.attr("x"),
						        y = text.attr("y"),
						        dy = text.attr("dy") ? text.attr("dy") : 0,
						        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
						    while (word = words.pop()) {
						      line.push(word);
						      tspan.text(line.join(" "));
						      if (tspan.node().getComputedTextLength() > width) {
						        line.pop();
						        tspan.text(line.join(" "));
						        line = [word];
						        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
						      }
						    }
						  });
				 }
				
				},

			freeText: function (canvas,data,x,y,width,height,index,fontSize){
				 var text=canvas.append("text").data(data)
				 .attr("fill","black")
				 .attr("width",width).attr("height",height)
				 .attr("x",x)
				.attr("y",y)
				.text(data[index].text) 
				.attr("font-size",fontSize)
				.call(wrap,width)
				
				
				function wrap(text, width) {
					 text.each(function() {
						    var text = d3.select(this),
						        words = text.text().split(/\s+/).reverse(),
						        word,
						        line = [],
						        lineNumber = 0,
						        lineHeight = 1.1, // ems
						        x = text.attr("x"),
						        y = text.attr("y"),
						        dy = text.attr("dy") ? text.attr("dy") : 0,
						        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
						    while (word = words.pop()) {
						      line.push(word);
						      tspan.text(line.join(" "));
						      if (tspan.node().getComputedTextLength() > width) {
						        line.pop();
						        tspan.text(line.join(" "));
						        line = [word];
						        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
						      }
						    }
						  });
				 } 
				
				},
			text : function (canvas,data,x,y,width,height,index){
				 var text=canvas.append("text").data(data)
				 .attr("fill","white")
				 .attr("width",width).attr("height",height)
				 .attr("x",x)
				.attr("y",y)
				.text(data[index].text) 
				.attr("font-size","12px")
				.call(wrap,width)
				
				
				function wrap(text, width) {
					 text.each(function() {
						    var text = d3.select(this),
						        words = text.text().split(/\s+/).reverse(),
						        word,
						        line = [],
						        lineNumber = 0,
						        lineHeight = 1.1, // ems
						        x = text.attr("x"),
						        y = text.attr("y"),
						        dy = text.attr("dy") ? text.attr("dy") : 0,
						        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
						    while (word = words.pop()) {
						      line.push(word);
						      tspan.text(line.join(" "));
						      if (tspan.node().getComputedTextLength() > width) {
						        line.pop();
						        tspan.text(line.join(" "));
						        line = [word];
						        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
						      }
						    }
						  });
				 } 
			},	
			pentagon :function (canvas,data,x1,y1,x2,x3,y3,y4,index){ 
				var array=[]
				 array = [x1,y1,x2,y1,x3,y3,x2,y4,x1,y4]
				var poly=canvas.append("polyline")
				.attr("points",array)
				.attr("stroke-width", "2px")
				.attr("fill",data[index].color)
				             },
				             
			doubleHeadedPipedArrow:function (canvas,data,x1,y1,x2,y2,y3,x3,x4,y4,y5,index){
               var array=[]
               array = [x1,y1,x2,y2,x2,y3,x3,y3,x3,y2,x4,y1,x3,y4,x3,y5,x2,y5,x2,y4]
               var poly=canvas.append("polyline")
               .attr("points",array)
               .attr("stroke-width", "2px")
               .attr("fill",data[index].color)
               .attr("id",data[index].id)
              
          },
			
			textBlack : function(canvas,data,x,y,width,height,index){
                var text=canvas.append("text").data(data)
                .attr("fill","black")
                .attr("width",width).attr("height",height)
                .attr("x",x)
                .attr("y",y)
                .text(data[index].text) 
                .attr("font-size","13px")
                .call(wrap1,width)
			                
		function wrap1(text, width) {
			text.each(function() {
			   var text = d3.select(this),
			       words = text.text().split(/\s+/).reverse(),
			       word,
			       line = [],
			       lineNumber = 0,
			       lineHeight = 1.1, // ems
			       x = text.attr("x"),
			       y = text.attr("y"),
			       dy = text.attr("dy") ? text.attr("dy") : 0,
			       tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
			   while (word = words.pop()) {
			     line.push(word);
			     tspan.text(line.join(" "));
			     if (tspan.node().getComputedTextLength() > width) {
			       line.pop();
			       tspan.text(line.join(" "));
			       line = [word];
			       tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
			     }
			   }
			 });
			} 

},
			/*_rectClicked : function(id){
				var id=id;
				var that=this;
				var search= false,alert,popUpData=[];
				sap.ui.getCore().getModel("UISDetailModel").oData.DataForAlertPopUp =[];
				if(id.length>6){
					var ids=id.split(",");
					var SQLdata =_.uniq(sap.ui.getCore().getModel("SQLModel").oData, 'Identifier');
					if(ids.length>0){
						for(var i=0;i<ids.length;i++){
							popUpData.push({"alert":"","uis":ids[i],"rca":""});
						}
						
						if(SQLdata.length > 0){
						for(var j=0;j<SQLdata.length;j++){
							var identifier = SQLdata[j].Identifier;
							var summary = SQLdata[j].Summary;
								for(var i=0;i<popUpData.length;i++){
										if(identifier.includes(popUpData[i].uis) == true){
											popUpData[i].alert=SQLdata[j];
											search=true;
										}else if(summary.includes(popUpData[i].uis) == true){
											popUpData[i].alert=SQLdata[j];
											search=true;
										}
								}
						}
							sap.ui.getCore().getModel("UISDetailModel").oData.DataForAlertPopUp=popUpData;	
					}
						
						
					}
				}else{
					uisCode="There is no UIS code mapped to this critical task";
					MessageToast.show(uisCode);					
				}
				
			},*/
	



				_rectClicked : function(id){
					var id=id,uisCode;
					var that=this; 
					var search= false,alert,popUpData=[];
					sap.ui.getCore().getModel("UISDetailModel").oData.DataForAlertPopUp =[];
					if(id.length>6){
						var ids=id.split(",");
						if(ids.length>0){
							var SQLdata =_.uniq(sap.ui.getCore().getModel("SQLModel").oData, 'Identifier');
						if(SQLdata.length > 0){
							for(var j=0;j<SQLdata.length;j++){
								var identifier = SQLdata[j].Identifier;
								var summary = SQLdata[j].Summary;
								for(var i=0;i<ids.length;i++){
								if(identifier.includes(ids[i]) == true){
									uisCode=ids[i];
									popUpData.push({"alert":SQLdata[j],"uis":ids[i]});
									search=true;
								}else if(summary.includes(ids[i]) == true){
									uisCode=ids[i];
									popUpData.push({"alert":SQLdata[j],"uis":ids[i]});
									search=true;
								}
						}
						}
							sap.ui.getCore().getModel("UISDetailModel").oData.DataForAlertPopUp=popUpData;	
							}else{
								uisCode=id;
								search = false;
								uisCode="There is no alert for this critical task";
								MessageToast.show(uisCode);
							}
								console.log(popUpData);
								if(search == true && popUpData.length != 0){
								this._loadLinkPopUPData();
								if (! this._oPopoverName) {
							        this._oPopoverName = sap.ui.xmlfragment("PF.fragments.CarouselLinkpop", this);
							   }
								this._oPopoverName.open();
								//sap.ui.getCore().byId("idUISheader").setText("UIS - "+uisCode);
								sap.ui.getCore().getModel("UISDetailModel").refresh();
								this._oPopoverName.setModel("UISDetailModel");
								this.startTimer(text);
								}else if(ids.length>0 && popUpData.length == 0 ){
									uisCode="There are no alerts on this critical task";
									MessageToast.show(uisCode);
								}
						}								
						}else{
							sap.ui.getCore().getModel("UISDetailModel").oData.DataForAlertPopUp =[];
							sap.ui.getCore().getModel("UISDetailModel").oData.rca=[];
							uisCode="There is no UIS code mapped to this critical task";
							MessageToast.show(uisCode);
							var text = "notUISCode";
						}
					
				},
				
				startTimer : function(data){
					var dateArray=[];
					var popUpData = sap.ui.getCore().getModel("UISDetailModel").oData.DataForAlertPopUp;
					for(var i=0;i<popUpData.length;i++){
						dateArray.push({"date":new Date(popUpData[i].alert.FirstOccurrence*1000),
									"type":popUpData[i].alert.Type});
					}
					 var earliestDate = dateArray[0],type=1;
					    for(var i = 1; i < dateArray.length ; i++){
					        var currentDate = dateArray[i].date;
					        if(currentDate < earliestDate){
					            earliestDate = currentDate;
					            type=dateArray[i].type;
					        }
					    }
					var date = earliestDate;
                    var firstOccurance = date;
                    var ticketType=type;
                    var firstOccuranceTime = firstOccurance.date.getTime();
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
                      var hrsLeft = sap.ui.getCore().byId("hrsLeft-__carousel0-0");
                      var minLeft = sap.ui.getCore().byId("minLeft-__carousel0-0");
                      var secLeft = sap.ui.getCore().byId("secLeft-__carousel0-0");
                      var timerTitle = sap.ui.getCore().byId("timerTitle-__carousel0-0");
                      hrsLeft.setText(hours);
                      minLeft.setText(minutes);
                      secLeft.setText(seconds);
                      if(hours <= 0 && minutes <= 0 && seconds <= 0){
                      timerTitle.removeStyleClass("timerTitle");
                      timerTitle.addStyleClass("timerSLAExceeded");
                      timerTitle.setText("SLA Limit Exceeded");
                      clearInterval(timer);
                      }
                    },1000);
					
					},
				
				
				
				_loadLinkPopUPData : function(){
					var sqlData = sap.ui.getCore().getModel("UISDetailModel").oData.DataForAlertPopUp;
					var masterData = sap.ui.getCore().getModel("MasterModel").oData.d.results;
					if(sqlData.length != 0){
						var data=[];
						for(var j=0;j<sqlData.length;j++){
						var object={};
						object.FirstOccurrence=new Date(sqlData[j].alert.FirstOccurrence*1000);
						object.Identifier=sqlData[j].alert.Identifier;
						object.Summary=sqlData[j].alert.Summary;
						object.TicketID=sqlData[j].alert.TicketID;
						object.uiscode = sqlData[j].uis;
						var rca=[],uiscode=sqlData[j].uis;
						for(var i=0;i<masterData.length;i++){
							if(masterData[i].A2ZPROUIS == uiscode){
								rca.push({"rcalabel":masterData[i].A2ZROOTDES});
							}
						}
						object.rca=rca;
						data.push(object);
					}
						sap.ui.getCore().getModel("UISDetailModel").oData.CarlinkpopUpData = data;
						sap.ui.getCore().getModel("UISDetailModel").refresh();
					}
				},
				
				closepopUpPressed : function(){
					this._oPopoverName.close();
				},
				
				openInfoPressed : function(){
					this.busyIndicator();
					var aFilters = [];
			        var filter =  new sap.ui.model.Filter({
			                  path: "ProcessCode",
			                  operator: "EQ",
			                  value1: sap.ui.getCore().getModel("UISDetailModel").getData("oData").uisCodeInfo
			                });
			        aFilters.push(filter);
			       var that = this;
			        var tableModel = new sap.ui.model.odata.v2.ODataModel("http://ocsd051a.eu.unilever.com:8000/sap/opu/odata/sap/ZUIS_APPLOG_NEW_SRV");
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
				},
				
				/*voice integration*/
				
				_speak : function(){
					var msg = new SpeechSynthesisUtterance('Hello world');
				    msg.rate = 0.7;
				    msg.pitch = 1;
				    window.speechSynthesis.speak(msg);
				}
				
				
			});
		}); 