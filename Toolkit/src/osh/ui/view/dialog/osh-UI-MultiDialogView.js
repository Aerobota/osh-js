/**
 * @classdesc Display a dialog with multiple view attach to it.
 * @class
 * @type {OSH.UI.Dialog}
 * @augments OSH.UI.Dialog
 */
OSH.UI.MultiDialogView = OSH.UI.DialogView.extend({

    initialize:function(parentElement, options) {
        this._super(parentElement,options);
        // add extra part
        this.popExtraDiv = document.createElement("div");
        this.popExtraDiv.setAttribute("class","pop-extra");
        this.popExtraDiv.setAttribute("id","pop-extra-id-"+OSH.Utils.randomUUID());

        this.flexDiv.appendChild(this.popExtraDiv);
    },

    /**
     * Appends a new view to the existing dialog.
     * @param {Object} parentElement
     * @instance
     * @memberof OSH.UI.MultiDialogView
     */
    appendView:function(parentElement,properties) {
        //console.log(this.popContentDiv);
        //remove from parent
        var divToAdd = parentElement;

        // check the visibility of the div
        if(divToAdd.style.display === "none") {
            divToAdd.style.display = "block";
        }


        var extraDiv = document.createElement("div");
        extraDiv.setAttribute("class","pop-extra-el");

        var i = document.createElement("i");
        i.setAttribute("class","fa fa-caret-right pop-extra-collapse");

        i.onclick = function() {
            if(i.className.indexOf("fa-caret-down") == -1){
                i.className = "fa fa-caret-down pop-extra-show";
            } else {
                i.className = "fa fa-caret-right pop-extra-collapse";
            }
        };
        extraDiv.appendChild(i);
        extraDiv.appendChild(divToAdd);
        this.popExtraDiv.appendChild(extraDiv);

    },

    swap:function() {
        var currentSwapValue = this.swapped;
        this._super();

        // hide extra stuff
        if(!currentSwapValue) {
            this.popExtraDiv.style.display = "none";
        } else {
            this.popExtraDiv.style.display = "block";
        }
    },

    show: function(properties) {
        this._super(properties);
        //if(!isUndefinedOrNull(this.divToAdd) && this.divToAdd.style.display === "none") {
        //   this.divToAdd.style.display = "block";
        //  }
    }
});