PageBuilder.module("App.Columns.Add", function(Add, PageBuilder, Backbone, Marionette, $, _) {

    Add.Column = Marionette.ItemView.extend({
        tagName: 'div',
        template: _.template(Templates.AddColumn),

        initialize: function(container){
            this.title = "Select Layouts";
            this.container = container;
        },

        events: {
            "click a.columnEle": "addColumn"
        },

        addColumn: function(evt) {

            evt.preventDefault();
            this.trigger("dialog:close");

            var number_of_columns = this.$(evt.target).attr('data-type');
            var columnArray = [];
            for (var i=0; i<number_of_columns; i++) {
                var column = new PageBuilder.Models.Column();
                columnArray[i] = column;
            }
            var columns = new PageBuilder.Models.ColumnCollection(columnArray);
            PageBuilder.App.Rows.List.Controller.listRows(columns);
        }
    });
});