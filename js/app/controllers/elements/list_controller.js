PageBuilder.module("App.Elements.List", function(List, PageBuilder, Backbone, Marionette, $, _) {
    List.Controller = {
        listElements: function(element) {
            console.log('element 1');
            console.log(element);
            var elements = PageBuilder.request("element:models");
            console.log('elements 1')
            console.log(elements);
            console.log('elements 1');
            elements.add(element);
        },

        listDefaultElements: function(model) {
            console.log(model);
            var elements = PageBuilder.request("defaultElement:models");
            elements.each(function(element){
                element.set('columnCID', model.cid);
                element.set('rowCID', model.get('rowCID'));
            });
            var elementListView = new List.ElementsCompositeView({
                collection: elements
            });
            console.log('elements');
            console.log(elements);
            PageBuilder.dialogRegion.show(elementListView);
        }
    }
});