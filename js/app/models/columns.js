PageBuilder.module("Models", function(Models, PageBuilder, Backbone, Marionette, $, _){

    Models.Column = Backbone.Model.extend({

        defaults: {
            element: '',
            properties: null,
            rowCID: null
        }
    });

    Models.ColumnCollection = Backbone.Collection.extend({

        model: Models.Column

    });

    var cols;

    var initializeCols = function() {
        cols = new Models.ColumnCollection();
    }

    var ColumnModel = {
        getCols: function() {
            if (cols === undefined ) {
                initializeCols();
            }

            return cols;
        }
    };

    PageBuilder.reqres.setHandler("column:models", function(){
        return ColumnModel.getCols();
    });
});