PageBuilder.module("App.Elements.Text", function(Text, PageBuilder, Backbone, Marionette, $, _) {

    Text.Show = Marionette.ItemView.extend({
        template: _.template(Templates.TextShowView)

    });

});