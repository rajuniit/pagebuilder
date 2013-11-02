PageBuilder.module("App.Elements.List", function(List, PageBuilder, Backbone, Marionette, $, _) {

    List.ElementCompositeItemView = Marionette.ItemView.extend({
        tagName: 'li',
        template: _.template(Templates.ListElementItem),

        events: {
            "click a.js-list-add-element": "addElement"
        },

        addElement: function(evt) {
            evt.preventDefault();
            PageBuilder.App.Elements.Add.Controller.addElement(this.model);
        }

    });


    List.ElementsCompositeView = Marionette.CompositeView.extend({

        className: 'row row-container',
        template: _.template(Templates.ListElement),

        itemView: List.ElementCompositeItemView,

        itemViewContainer: "ul",

        events: {
            "click a.js-list-add-element": "addElement"
        },

        addElement: function(evt) {
            this.trigger('dialog:close');
        }

    });

});