PageBuilder.module("App.List", function(List, PageBuilder, Backbone, Marionette, $, _) {
    List.Controller = {
        listRows: function() {
            var rows = PageBuilder.request("row:repositories");

            var rowListView = new List.Rows({
                collection: rows
            });

            var rowListLayout = new List.Layout();
            rowListLayout.render();
            var rowListPanel = new List.Panel();


            rowListLayout.on("show", function(){
                rowListLayout.rowsRegion.show(rowListView);
                rowListLayout.panelRegion.show(rowListPanel);
            });

            rowListPanel.on("row:new", function(){
                var newRow = new PageBuilder.Entities.Row();
                rows.add(newRow);
            });

            PageBuilder.mainRegion.show(rowListLayout);

        }
    }
});