PageBuilder.module("App.Rows.List", function(List, PageBuilder, Backbone, Marionette, $, _) {
    List.Controller = {
        listRows: function(cols) {
            var rows = PageBuilder.request("row:models");
            var columns = PageBuilder.request("column:models");
            if(cols !== undefined) {
                columns = cols;
            }
            rows.each(function(row){
                row.set('columns', columns);
            });

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
                var newRow = new PageBuilder.Models.Row();
                var columns = PageBuilder.request("column:models");
                newRow.set('columns', columns);
                console.log(newRow.get('columns').size());
                rows.add(newRow);
            });

            PageBuilder.mainRegion.show(rowListLayout);

        }
    }
});