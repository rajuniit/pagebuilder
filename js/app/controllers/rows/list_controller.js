PageBuilder.module("App.Rows.List", function(List, PageBuilder, Backbone, Marionette, $, _) {
    List.Controller = {
        listRows: function(cols) {

            var rows = PageBuilder.request("row:models");
            var columns = PageBuilder.request("column:models");
            if(cols !== undefined) {
                columns = cols;
            }
            rows.each(function(row){
                columns.each(function(column){
                    column.set('rowCID', row.cid);
                });
                row.set('columns', columns);
            });

            this.renderRowList(rows);

        },

        updateRow: function(columns, model) {
            var rows = PageBuilder.request("row:models");


            columns.each(function(column){
                column.set('rowCID', model.cid);
            });

            model.set('columns', columns);
            rows.add(model);
            console.log(rows);

            this.renderRowList(rows);
        },

        updateColumnElement: function(row) {
            var rows = PageBuilder.request("row:models");
            var elements = PageBuilder.request("element:models");
            console.log('elements');
            console.log(elements);
            rows.add(row);
            console.log(rows);
            this.renderRowList(rows);
        },

        deleteColumn: function(column) {
            var rows = PageBuilder.request("row:models");

            var row = rows.get(column.get('rowCID'));
            var columns = row.get('columns');
            columns.remove(column);

            row.set('columns', columns);
            rows.add(row);
            console.log(rows);

            this.renderRowList(rows);
        },

        deleteElement: function(column) {
            var rows = PageBuilder.request("row:models");

            var row = rows.get(column.get('rowCID'));
            var columns = row.get('columns');
            var column = columns.get(column.cid);
            column.set('element', '');
            row.set('columns', columns);
            rows.add(row);
            console.log(rows);

            this.renderRowList(rows);

        },

        renderRowList: function(rows) {

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

                columns.each(function(column){
                    column.set('rowCID', newRow.get('cid'));
                });

                newRow.set('columns', columns);
                console.log(newRow.get('columns').size());
                rows.add(newRow);
            });

            rowListView.on("itemview:row:remove", function(childView, model){
                console.log('row remove');
                console.log(model)
                model.model.destroy();
            });

            rowListView.on("itemview:row:edit", function(childView, model){

                var view = new PageBuilder.App.Elements.Edit.T({
                    model: model
                });
            });

            PageBuilder.mainRegion.show(rowListLayout);

        }
    }
});