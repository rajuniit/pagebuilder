PageBuilder.module("App.Elements.Text", function(Text, PageBuilder, Backbone, Marionette, $, _) {

    Text.Edit = Marionette.ItemView.extend({
        template: _.template(Templates.TextEditView),

        events: {
            "click .js-btn-update": "updateClicked"
        },

        updateClicked: function(evt) {
            evt.preventDefault();
            this.trigger('dialog:close');
            var data = Backbone.Syphon.serialize(this);
            data.content = tinyMCE.activeEditor.getContent({format : 'raw'});
            this.trigger("text:element:update", data);
        }

    });

});