PageBuilder.module("App.List", function(List, PageBuilder, Backbone, Marionette, $, _) {
    List.Controller = {
        listCols: function() {
            var cols = PageBuilder.request("col:repositories");

            var rowListView = new List.Cols({
                collection: cols
            });

            var colListLayout = new List.Layout();
            colListLayout.render();
            var colListPanel = new List.Panel();


            colListLayout.on("show", function(){
                colListLayout.colsRegion.show(colListView);
                colListLayout.panelRegion.show(colListPanel);
            });

            colListPanel.on("col:new", function(){
                var newColumn = new PageBuilder.Repositories.Column();
                cols.add(newColumn);
            });

            PageBuilder.mainRegion.show(colListLayout);

        }
    }
});