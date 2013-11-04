PageBuilder.module("App.Elements.Edit", function(Edit, PageBuilder, Backbone, Marionette, $, _) {

    Edit.Text = Marionette.ItemView.extend({
        template: _.template(Templates.TextEditView),

        initialize: function() {
            ThreeDotsUtilityTinyMCE.initTinyMCE('.editor');
        }
    });

});