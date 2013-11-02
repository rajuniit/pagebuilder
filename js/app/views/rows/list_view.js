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


//    List.Row = Marionette.ItemView.extend({
//        tagName: 'div',
//        className: 'row-container',
//
//        events: {
//            "click .js-add-column": "addColumn"
//        },
//
//        addColumn: function(evt) {
//            var container = this.$el.find('.js-add-column').parent().parent();
//            PageBuilder.App.Columns.Add.Controller.addColumns(container);
//        },
//
//        getTemplate: function() {
//            console.log(this.model);
//            if(this.model.get('columns').length === 0) {
//                return _.template(Templates.Row);
//            } else {
//                return _.template(Templates.Row);
//            }
//        }
//    });

    List.ColumnCompositeItemView = Backbone.Marionette.ItemView.extend({
        tagName: 'div',
        template: _.template(Templates.ColumnElement)
    });


    List.RowsCompositeView = Marionette.CompositeView.extend({

        className: 'row row-container',
        template: _.template(Templates.Row),

        itemView: List.ColumnCompositeItemView,

        itemViewContainer: "div.js-column-region",

        initialize: function(){
           this.collection = this.model.get('columns');

        },

        events: {
            "click .js-add-column": "addColumn"
        },

        addColumn: function(evt) {
            PageBuilder.App.Columns.Add.Controller.addColumns();
        }

    });

    List.Rows = Marionette.CollectionView.extend({
        tagName:"div",
        itemView: List.RowsCompositeView
    });
});