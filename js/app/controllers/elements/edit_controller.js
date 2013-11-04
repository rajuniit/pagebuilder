PageBuilder.module("App.Elements.Add", function(Add, PageBuilder, Backbone, Marionette, $, _) {
    Add.Controller = {
        addElement: function(model) {
            var rows = PageBuilder.request("row:models");

            var row = rows.get(model.get('rowCID'));
            var columns = row.get('columns');
            var column = columns.get(model.get('columnCID'));

            column.set('element', model);

            row.set('columns', columns);
            console.log('with element');
            console.log(row);
            PageBuilder.App.Elements.List.Controller.listElements(model);
            PageBuilder.App.Rows.List.Controller.updateColumnElement(row);
        }
    }
});