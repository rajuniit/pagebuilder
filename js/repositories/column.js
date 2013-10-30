PageBuilder.module("Repositories", function(Repositories, PageBuilder, Backbone, Marionette, $, _){
    Repositories.Column = Backbone.Model.extend({});

    Repositories.ColumnCollection = Backbone.Collection.extend({

        model: Repositories.Column

    });

    var cols;

    var initializeCols = function() {
        cols = new Repositories.RowCollection();
    }

    var Repository = {
        getCols: function() {
            if (cols === undefined ) {
                initializecols();
            }

            return cols;
        }
    };

    PageBuilder.reqres.setHandler("row:repositories", function(){
        return Repository.getCols();
    });
});