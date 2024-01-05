sap.ui.define(["sap/m/VBox",
               
     ], function (VBox,Panel,Link) {
	"use strict";
	return {
		
		VBox : function(){
			return new VBox({
				height : "", // sap.ui.core.CSSSize, since 1.9.1
				width : "100%", // sap.ui.core.CSSSize, since 1.9.1
				displayInline : false, // boolean
				direction : sap.m.FlexDirection.Column, // sap.m.FlexDirection
				fitContainer : false, // boolean
				renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
				justifyContent : sap.m.FlexJustifyContent.Center, // sap.m.FlexJustifyContent
				alignItems : sap.m.FlexAlignItems.Center, // sap.m.FlexAlignItems
				
				alignContent : sap.m.FlexAlignContent.Center, // sap.m.FlexAlignContent, since 1.36
				tooltip : undefined, // sap.ui.core.TooltipBase
				items : [], // sap.ui.core.Control
			});
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