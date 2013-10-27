PageBuilder.module("App.List", function(List, PageBuilder, Backbone, Marionette, $, _) {
    List.Row = Marionette.ItemView.extend({
        tagName: 'div',
        template: Templates.Row
    });

    List.Rows = Marionette.CollectionView.extend({
        tagName:"div",
        itemView: List.Row
    });
});