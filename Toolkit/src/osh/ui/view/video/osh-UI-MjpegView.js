OSH.UI.MjpegView = Class.create(OSH.UI.View,{
  initialize: function($super,divId,options) {
    $super(divId,[],options);

    this.dataSourceId = -1;
    // sets dataSourceId
    if(typeof(options.dataSourceId) != "undefined") {
      this.dataSourceId = options.dataSourceId;
    }
    this.entityId = options.entityId;
    this.css = "";

    this.cssSelected = "";

    if(options.css) {
      this.css = options.css;
    }

    if(options.cssSelected) {
      this.cssSelected = options.cssSelected;
    }

    // creates video tag element
    this.imgTag = document.createElement("img");
    this.imgTag.setAttribute("class", this.css);
    this.imgTag.setAttribute("id", "dataview-"+OSH.Utils.randomUUID());

    // appends <img> tag to <div>
    document.getElementById(this.divId).appendChild(this.imgTag);

    // adds listener
    var self = this;
    OSH.EventManager.observeDiv(this.divId,"click",function(event){
      OSH.EventManager.fire(OSH.EventManager.EVENT.SELECT_VIEW,{
        dataSourcesIds: [self.dataSourceId],
        entityId : self.entityId
      });
    });
  },

  setData: function($super,dataSourceId,data) {
      var oldBlobURL = this.imgTag.src;
      this.imgTag.src = data.data;
      window.URL.revokeObjectURL(oldBlobURL);
  },

  selectDataView: function($super,dataSourceIds,entityId) {
    if(dataSourceIds.indexOf(this.dataSourceId) > -1 || (typeof this.entityId != "undefined") && this.entityId == entityId) {
      this.imgTag.setAttribute("class",this.css+" "+this.cssSelected);
    } else {
      this.imgTag.setAttribute("class",this.css);
    }
  }
});

