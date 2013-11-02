PageBuilder.module("Models", function(Models, PageBuilder, Backbone, Marionette, $, _){
    Models.Row = Backbone.Model.extend({

        defaults: {
            columns: [],
            properties: []
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