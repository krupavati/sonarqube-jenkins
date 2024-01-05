jQuery.sap.require("jquery.sap.storage");
sap.ui.define(["PF/controllers/BaseController","PF/util/Formatter","PF/util/Globals"],
     function(BaseController,Formatter,Globals) {
      return BaseController.extend("PF.controllers.kpi", {
  onInit : function(){
    jQuery.sap.storage.put("count",0);
    var kpiPagemodel = new sap.ui.model.json.JSONModel();
      this.getView().setModel(kpiPagemodel,"kpiPagemodel");
      var kpiFilter = new sap.ui.model.json.JSONModel();
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
      },900000)
    }
    else if(flag == false){

      clearInterval(timer);
    }

  },
   _loadSQLData : function(){
    //
    //http://hicww7na234znhw:3000/service/getLimitedOpenData?UserID=GSMAutoTicket&Node=S1P
      var that=this;
      ///service/getAllOpenData?UserID=GSMAutoTicket&Node=S1P
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
                  "Incidence":data[j].TicketID,
                  "Summary":data[j].Summary,
                  "Identifier":data[j].Identifier,
                  "Landscape":"",
                  "Priority":data[j].Type,
                  "Process":"",
                  "Subtask":"",
                  "System":system}
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
   	     var masterData = sap.ui.getCore().getModel("MasterModel").getData().d.results;
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
      debugger;
      var tableData = this.getView().getModel("kpiPagemodel").oData.data;
      var filter=[],value=[],type;
      var keys=Object.keys(tableData[0]);
      for(var i=1;i<keys.length;i++){
        type=keys[i],value=[];
        for(var j=0;j<tableData.length;j++){
          value.push({"text" : tableData[j][keys[i]]})
        }
        filter.push({"type":type,"value":value})
        }
      this.getView().getModel("kpiFilter").oData.filter = filter;
      this.getView().getModel("kpiFilter").refresh();


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

    var url="https://ulapps-q.unilever.com/sap/opu/odata/sap/ZUIS_MASTER_NEW_SRV/ZDSO_ZQ009_UIS_MASTER"+
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