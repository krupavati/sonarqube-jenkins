sap.ui.define(["sap/m/VBox",
               
     ], function (rect,Panel,Link) {
	"use strict";
	return {
		
		rect : function rect(canvas,data,x,y,width,height,index){ //draw rectangle passing x and y
			var rect=canvas.append("rect").data(data)
			.attr("width",width).attr("height",height)
			.attr("x",x).attr("y",y)
			.attr("fill",data[index].color)
			.attr("id",data[index].id)
			 .call(clickable)
		},
		Panel : function(){
		return new sap.m.Panel({
			backgroundDesign : sap.m.BackgroundDesign.Transparent,
			content : [], 
		})
		},
		Link : function(){
			return new sap.m.Link({
				text : "", // string
				enabled : true, // boolean
				target : undefined, // string
				width : undefined, // sap.ui.core.CSSSize
				href : undefined, // sap.ui.core.URI
				wrapping : false, // boolean
				press : [ function(oEvent) {
					var control = oEvent.getSource();
				}, this ]
			})
		},
		
			Image : function(){
			return	new sap.m.Image({
			src : "images/arrow-right.svg",
			visible : true, // boolean
			width : "50px",
			height : "30px",
			})
			},
			
		Text : function(){
			return new sap.m.Text({
				visible : true, // boolean
				text : text, // string
				textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
				wrapping : true, // boolean
				textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
				width : length, // sap.ui.core.CSSSize
				maxLines : 3, // int, since 1.13.2
			})
		}
		};
});