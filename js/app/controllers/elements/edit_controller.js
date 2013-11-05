PageBuilder.module("App.Elements.Edit", function(Edit, PageBuilder, Backbone, Marionette, $, _) {
    Edit.Controller = {
        editElement: function(model) {
            console.log(model.get('element').get('type'));
            if(model.get('element').get('type') == 'text') {
                PageBuilder.App.Elements.Text.Controller.edit(model);
            }
        }
    }
});