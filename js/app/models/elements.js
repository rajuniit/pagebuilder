PageBuilder.module("Models", function(Models, PageBuilder, Backbone, Marionette, $, _){
    Models.Element = Backbone.Model.extend({

        defaults: {
            title: 'untitled',
            description: 'test description',
            type: 'default',
            properties: [],
            columnCID: null,
            rowCID: null,
            content: null
        }

    });

    Models.ElementCollection = Backbone.Collection.extend({

        model: Models.Element

    });

    var elements;
    var defaultElements;
    var initializeElements = function() {
        elements = new Models.ElementCollection();
    }

    var initailizeDefaultElements = function() {
        var elementsArray = []
        var textElement = new Models.Element({'title': 'Text Element', description: 'Description Goes Here',
        type: 'text', content: 'Toggle a modal via JavaScript by clicking the button below. It will slide down ' +
                'and fade in from the top of the page.'});
        elementsArray[0] = textElement;

        var videoElement = new Models.Element({'title': 'Video Element', description: 'Description Goes Here',
        type: 'video'});
        elementsArray[1] = videoElement;

        var imageElement = new Models.Element({'title': 'Image Element', description: 'Description Goes Here',
        type: 'image'});
        elementsArray[2] = imageElement;

        defaultElements = new Models.ElementCollection(elementsArray);

    }

    var ElementModel = {
        getElements: function() {
            if (elements === undefined ) {
                initializeElements();
            }

            return elements;
        },

        getDefaultElements: function() {
            if (defaultElements === undefined ) {
                initailizeDefaultElements();
            }

            return defaultElements;
        },

        getNewElement: function(options) {
            new Models.Element(options);
        }
    };

    PageBuilder.reqres.setHandler("element:models", function(){
        return ElementModel.getElements();
    });

    PageBuilder.reqres.setHandler("defaultElement:models", function(){
        return ElementModel.getDefaultElements();
    });

    PageBuilder.reqres.setHandler("new_element:models", function(options){
       return ElementModel.getNewElement(options);
    });
});