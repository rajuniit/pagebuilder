PageBuilder.module("App.Elements.Add", function(Add, PageBuilder, Backbone, Marionette, $, _) {
    Add.Controller = {
        addElement: function(model) {

            var data = model.toJSON();
            var element = new PageBuilder.Models.Element(data);
            console.log('new element');
            console.log(element);
            var rows = PageBuilder.request("row:models");

            var row = rows.get(element.get('rowCID'));
            var columns = row.get('columns');
            var column = columns.get(element.get('columnCID'));

            column.set('element', element);

            row.set('columns', columns);
            console.log('with element');
            console.log(row);
            PageBuilder.App.Elements.List.Controller.listElements(element);
            PageBuilder.App.Rows.List.Controller.updateColumnElement(row);
        }
    }
});