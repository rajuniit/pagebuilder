PageBuilder.module("App.Columns.Add", function(Add, PageBuilder, Backbone, Marionette, $, _) {
    Add.Controller = {
        addColumns: function() {

            var addColumnView = new Add.Column();
            PageBuilder.dialogRegion.show(addColumnView);

        }
    }
});