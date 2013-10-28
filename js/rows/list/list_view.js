PageBuilder.module("App.List", function(List, PageBuilder, Backbone, Marionette, $, _) {

    List.Layout = Marionette.Layout.extend({
        template: _.template(Templates.RowListLayout),

        regions: {
            panelRegion: '#panel-region',
            rowsRegion: '#rows-region'
        }
    });

    List.Panel = Marionette.ItemView.extend({
        tagName: 'div',
        className: 'row-container',
        template: _.template(Templates.RowListPanel),

        triggers: {
            "click .js-add-row": "row:new"
        }

    });


    List.Row = Marionette.ItemView.extend({
        tagName: 'div',
        className: 'row-container',
        template: _.template(Templates.Row)
    });

    List.Rows = Marionette.CollectionView.extend({
        tagName:"div",
        itemView: List.Row
    });
});