PageBuilder.module("Models", function(Models, PageBuilder, Backbone, Marionette, $, _){
    Models.Element = Backbone.Model.extend({

        defaults: {
            type: '',
            title: 'untitled',
            properties: null
        }

    });

    Models.RowCollection = Backbone.Collection.extend({

        model: Models.Row

    });

    var rows;

    var initializeRows = function() {
        rows = new Models.RowCollection();
    }

    var RowModel = {
        getRows: function() {
            if (rows === undefined ) {
                initializeRows();
            }

            return rows;
        }
    };

    PageBuilder.reqres.setHandler("row:models", function(){
        return RowModel.getRows();
    });
});