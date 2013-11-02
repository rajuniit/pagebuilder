PageBuilder.module("App.Columns.List", function(List, PageBuilder, Backbone, Marionette, $, _) {

    List.Column = Backbone.Marionette.ItemView.extend({
        tagName: 'div',
        template: _.template(Templates.ColumnElement)
    });

    List.Columns = Backbone.Marionette.CollectionView.extend({
        tagName:"div",
        itemView: List.Column
    });
});