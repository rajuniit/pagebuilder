PageBuilder.module("App.Elements.Edit", function(Edit, PageBuilder, Backbone, Marionette, $, _) {
    Edit.Controller = {
        editElement: function(model) {
            var view = this.factoryView(model.get('element').type, {model:model.element});
            console.log(view);
        },


        factoryView: function(type, options) {

            var view = new Edit.Text(options);

            if (type == 'text') {
                view = new Edit.Text();
            }

            return view;
        }
    }
});