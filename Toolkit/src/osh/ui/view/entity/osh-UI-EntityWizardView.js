/***************************** BEGIN LICENSE BLOCK ***************************

 The contents of this file are subject to the Mozilla Public License, v. 2.0.
 If a copy of the MPL was not distributed with this file, You can obtain one
 at http://mozilla.org/MPL/2.0/.

 Software distributed under the License is distributed on an "AS IS" basis,
 WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 for the specific language governing rights and limitations under the License.

 Copyright (C) 2015-2017 Mathieu Dhainaut. All Rights Reserved.

 Author: Mathieu Dhainaut <mathieu.dhainaut@gmail.com>

 ******************************* END LICENSE BLOCK ***************************/

OSH.UI.EntityWizardView = OSH.UI.View.extend({
    initialize: function (parentElementDivId, properties) {
        this._super(parentElementDivId,[],properties);

        if(!isUndefined(properties) && !isUndefined(properties.viewContainer)) {
            this.viewContainer = properties.viewContainer;
        } else {
            this.viewContainer = document.body.id;
        }

        // add template
        var entityWizard = document.createElement("div");
        entityWizard.setAttribute("id","Entity-wizard-"+OSH.Utils.randomUUID());
        entityWizard.setAttribute("class",'entity-wizard');

        document.getElementById(this.divId).appendChild(entityWizard);

        var strVar="";
        strVar += "<main class=\"entity-wizard\">";
        strVar += "   <input id=\"tab1\" type=\"radio\" name=\"tabs\" checked>";
        strVar += "   <label for=\"tab1\">Info<\/label>";
        strVar += "   <input id=\"tab2\" type=\"radio\" name=\"tabs\">";
        strVar += "   <label for=\"tab2\">Data Sources<\/label>";
        strVar += "   <input id=\"tab3\" type=\"radio\" name=\"tabs\">";
        strVar += "   <label for=\"tab3\">Views<\/label>";
        strVar += "   <section id=\"content1\">";
        strVar += "     <ul>";
        strVar += "      <li>";
        strVar += "         <label for=\"name\">Name:<\/label>";
        strVar += "         <input id=\"name\" type=\"text\" class=\"input-text\" value=\"My entity\">";
        strVar += "      <\/li>";
        strVar += "      <li>";
        strVar += "         <label for=\"icon\">Icon:<\/label>";
        strVar += "         <input id=\"icon\" type=\"text\" class=\"input-text\" value=\"images\/cameralook.png\">";
        strVar += "      <\/li>";
        strVar += "      <li>";
        strVar += "         <label for=\"description\">Description url:<\/label>";
        strVar += "         <input id=\"description\" type=\"text\" class=\"input-text\">";
        strVar += "      <\/li>";
        strVar += "     <\/ul>";
        strVar += "   <\/section>";
        strVar += "   <section id=\"content2\">";
        strVar += "      <button id=\"add-ds-button-id\" class=\"submit\">Add<\/button>";
        strVar += "   <\/section>";
        strVar += "   <section id=\"content3\">";
        strVar += "      <div class=\"select-style\">";
        strVar += "         <select id=\"selectViewId\">";
        strVar += "            <option value=\"\" disabled selected>Select a view<\/option>";
        strVar += "         <\/select>";
        strVar += "      <\/div>";
        strVar += "      <button id=\"add-view-button-id\" class=\"submit\">Add<\/button>";
        strVar += "      <div id=\"view-container\"><\/div>";
        strVar += "      <div class=\"horizontal-line\"><\/div>";
        strVar += "      <div class=\"create\">";
        strVar += "         <button id=\"create-button-id\" class=\"submit\" disabled>Create<\/button>";
        strVar += "      </div>";
        strVar += "   <\/section>";
        strVar += "<\/main>";

        entityWizard.innerHTML = strVar;

        this.datasources = {};
        this.views = [];

        // inits views
        this.initViews();

        // listeners
        OSH.EventManager.observeDiv("add-ds-button-id","click",this.onAddDataSourceButtonClickHandler.bind(this));
        OSH.EventManager.observeDiv("add-view-button-id","click",this.addView.bind(this));
        OSH.EventManager.observeDiv("create-button-id","click",this.createEntity.bind(this));

    },

    onAddDataSourceButtonClickHandler: function(event) {
        // init discovery view
        var discoveryView = new OSH.UI.DiscoveryView("",{
            services: ["http://sensiasoft.net:8181/sensorhub/sos"]
        });

        discoveryView.onAddHandler = this.addDataSource.bind(this);

        var discoveryDialog = new OSH.UI.DialogView("", {
            draggable: true,
            css: "dialog-discovery",
            name: "Discovery",
            show:true,
            dockable: false,
            closeable: true,
            connectionIds : [],
            destroyOnClose:true,
            modal:true
        });

        discoveryView.attachTo(discoveryDialog.popContentDiv.id);

        this.nbDatasources = 0;
    },

    initViews: function() {
        var views = ["Map 2D","Globe 3D", "Curve", "Video (H264)","Video (MJPEG)", "Video (MP4)"];

        var selectViewTag = document.getElementById("selectViewId");
        this.removeAllFromSelect("selectViewId");

        for(var key in views) {

            var option = document.createElement("option");
            option.text = views[key];
            option.value = views[key];

            selectViewTag.add(option);
        }
    },

    editDataSource:function(dataSource) {
        this.datasources[dataSource.id] = dataSource;

        document.getElementById("ds-name-"+dataSource.id).innerHTML = dataSource.name;
    },

    addDataSource:function(dataSource) {

        if(this.nbDatasources === 0) {
            // activate view tab
            this.enableElt("tab3");
        }

        this.nbDatasources++;
        this.datasources[dataSource.id] = dataSource;

        var dsTabElt = document.getElementById("content2");

        var div = document.createElement('div');
        div.setAttribute("id",dataSource.id);
        div.setAttribute("class","ds-line");

        var deleteId = OSH.Utils.randomUUID();
        var editId = OSH.Utils.randomUUID();

        var strVar = "<span class=\" line-left\" id=\"ds-name-"+dataSource.id+"\">"+dataSource.name+"<\/span>";
        strVar += "   <table class=\"control line-right\">";
        strVar += "      <tr>";
        strVar += "         <td><i class=\"fa fa-2x fa-pencil-square-o edit\" aria-hidden=\"true\" id=\""+editId+"\"><\/i><\/td>";
        strVar += "         <td><i class=\"fa fa-2x fa-trash-o delete\" aria-hidden=\"true\" id=\""+deleteId+"\"><\/i><\/td>";
        strVar += "      <\/tr>";
        strVar += "   <\/table>";
        strVar += "<\/div>";
        strVar += "<div style=\"clear: both;\"><\/div>";

        div.innerHTML = strVar;

        dsTabElt.appendChild(div);

        // add listeners
        var self = this;

        OSH.EventManager.observeDiv(deleteId,"click",function(event) {
            dsTabElt.removeChild(div);
            delete self.datasources[dataSource.id];
            self.nbDatasources--;

            if(self.nbDatasources === 0) {
                // activate view tab
                self.disableElt("tab3");
            }
        });

        OSH.EventManager.observeDiv(editId,"click",function(event) {
            // init discovery view
            var discoveryView = new OSH.UI.DiscoveryView("",{
                services: ["http://sensiasoft.net:8181/sensorhub/sos"]
            });

            discoveryView.onEditHandler = self.editDataSource.bind(self);

            var discoveryDialog = new OSH.UI.DialogView("", {
                draggable: true,
                css: "dialog-discovery",
                name: "Discovery",
                show:true,
                dockable: false,
                closeable: true,
                connectionIds : [],
                destroyOnClose:true,
                modal:true
            });

            discoveryView.attachTo(discoveryDialog.popContentDiv.id);

            // setup existing info
            discoveryView.initDataSource(self.datasources[dataSource.id]);

            discoveryView.setButton("Edit");
        });
    },

    addView:function(event) {
        var dsTabElt = document.getElementById("view-container");
        var selectedViewTag = document.getElementById("selectViewId");
        var viewName = selectedViewTag.options[selectedViewTag.selectedIndex].value;

        if(viewName === "") {
            return;
        }

        this.views.push(viewName);

        var div = document.createElement('div');
        div.setAttribute("id","View"+OSH.Utils.randomUUID());
        div.setAttribute("class","ds-line");

        var deleteId = OSH.Utils.randomUUID();
        var editId = OSH.Utils.randomUUID();

        var strVar = "<span class=\"line-left\">"+viewName+"<\/span>";
        strVar += "   <table class=\"control line-right\">";
        strVar += "      <tr>";
        strVar += "         <td><i class=\"fa fa-2x fa-pencil-square-o edit\" aria-hidden=\"true\" id=\""+editId+"\"><\/i><\/td>";
        strVar += "         <td><i class=\"fa fa-2x fa-trash-o delete\" aria-hidden=\"true\" id=\""+deleteId+"\"><\/i><\/td>";
        strVar += "      <\/tr>";
        strVar += "   <\/table>";
        strVar += "<\/div>";
        strVar += "<div style=\"clear: both;\"><\/div>";

        div.innerHTML = strVar;

        dsTabElt.appendChild(div);

        // add listeners
        var self = this;

        OSH.EventManager.observeDiv(deleteId,"click",function(event) {
            dsTabElt.removeChild(div);
            // enable view select
            self.enableElt("selectViewId");
            self.enableElt("add-view-button-id");

            // enable create button
            self.disableElt("create-button-id");

            self.views = [];
        });

        OSH.EventManager.observeDiv(editId,"click",this.editView.bind(this));

        // disable listbox
        this.disableElt("selectViewId");
        this.disableElt("add-view-button-id");

        // enable create button
        this.enableElt("create-button-id");

    },

    editView:function(event) {
        var editView = new OSH.UI.EntityWizardEditView();

        var editViewDialog = new OSH.UI.DialogView("", {
            draggable: true,
            css: "dialog-edit-view", //TODO: create unique class for all the views
            name: "Edit View",
            show:true,
            dockable: false,
            closeable: true,
            connectionIds : [],
            destroyOnClose:true,
            modal:true
        });

        editView.attachTo(editViewDialog.popContentDiv.id);
    },

    createEntity:function(event) {

        // Get data sources + view

        var dsArray = [];

        for(var key in this.datasources) {
            dsArray.push(this.datasources[key]);
        }
        // TBD: only one view for now
        var viewName = this.views[0];

        var newEntity = {
            id : "entity-"+OSH.Utils.randomUUID(),
            name: "TODO",
            dataSources: dsArray
        };

        // create viewItems
        var viewItems = [];

        for(var key in this.stylers) {
            viewItems.push({
                styler: this.stylers[key],
                entityId: newEntity.id,
                name: newEntity.name //TBD
            });
        }


        if(viewName === "Map 2D") {
            var leafletMapView = new OSH.UI.LeafletView(this.viewContainer, viewItems);

            //---------------------------------------------------------------//
            //--------------------- Creates DataProvider --------------------//
            //---------------------------------------------------------------//

            var dataProviderController = new OSH.DataReceiver.DataReceiverController({
                replayFactor : 3
            });

            // We can add a group of dataSources and set the options
            dataProviderController.addEntity(newEntity);


            //---------------------------------------------------------------//
            //---------------------------- Starts ---------------------------//
            //---------------------------------------------------------------//

            // starts streaming
            dataProviderController.connectAll();
        }
    },


    removeAllFromSelect:function(tagId) {
        var i;
        var selectTag = document.getElementById(tagId);
        for (i = selectTag.options.length - 1; i > 0; i--) {
            selectTag.remove(i);
        }
    },

    enableElt:function(id) {
        document.getElementById(id).removeAttribute("disabled","");
    },

    disableElt:function(id) {
        document.getElementById(id).setAttribute("disabled","");
    }
});