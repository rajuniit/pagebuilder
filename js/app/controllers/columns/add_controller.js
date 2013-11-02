PageBuilder.module("App.Columns.Add", function(Add, PageBuilder, Backbone, Marionette, $, _) {
    Add.Controller = {
        addColumns: function(model) {
            var addColumnView = new Add.Column(model);
            PageBuilder.dialogRegion.show(addColumnView);

        }
    }
});