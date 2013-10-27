PageBuilder.module("App.List", function(List, PageBuilder, Backbone, Marionette, $, _) {
    List.Controller = {
        listRows: function() {
            var rows = PageBuilder.request("row:repositories");

            var rowListView = new List.Rows({
                collection: rows
            });

            PageBuilder.content.show(rowListView);
        }
    }
});