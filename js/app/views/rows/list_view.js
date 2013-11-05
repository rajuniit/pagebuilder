PageBuilder.module("App.Rows.List", function(List, PageBuilder, Backbone, Marionette, $, _) {

    List.Layout = Backbone.Marionette.Layout.extend({
        template: _.template(Templates.RowListLayout),

        regions: {
            panelRegion: '#panel-region',
            rowsRegion: '#rows-region'
        }
    });

    List.Panel = Marionette.ItemView.extend({
        tagName: 'div',
        className: 'row row-container',
        template: _.template(Templates.RowListPanel),

        triggers: {
            "click .js-add-row": "row:new"
        }

    });

    List.ColumnCompositeItemView = Backbone.Marionette.ItemView.extend({
        tagName: 'div',
        template: _.template(Templates.ColumnElement),

        events: {
            "click a.js-add-element": "addElement",
            "click a.js-column-remove": "deleteColumn",
            "click a.js-element-remove": "deleteElement",
            "click a.js-element-edit":   "editElement"
        },

        addElement: function(evt) {
            console.log('column model');
            console.log(this.model.cid);
            PageBuilder.App.Elements.List.Controller.listDefaultElements(this.model);
        },

        deleteColumn: function(evt) {
           console.log(this.model);
           PageBuilder.App.Rows.List.Controller.deleteColumn(this.model);
        },

        deleteElement: function(evt) {
            console.log(this.model);
            PageBuilder.App.Rows.List.Controller.deleteElement(this.model);
        },

        editElement: function(evt) {
            evt.preventDefault();
            console.log(this.model);
            PageBuilder.App.Elements.Edit.Controller.editElement(this.model);
        }

    });


    List.RowsCompositeView = Marionette.CompositeView.extend({

        className: 'row row-container row-properties',
        template: _.template(Templates.Row),

        itemView: List.ColumnCompositeItemView,

        itemViewContainer: "div.js-column-region",

        initialize: function(){
           this.collection = this.model.get('columns');

        },

        events: {
            "click a.js-add-column": "addColumn"

        },

        triggers: {
            "click a.js-icon-delete": "row:remove"
        },

        addColumn: function(evt) {
            PageBuilder.App.Columns.Add.Controller.addColumns(this.model);
        }


    });

    List.Rows = Marionette.CollectionView.extend({
        tagName:"div",
        itemView: List.RowsCompositeView
    });
});