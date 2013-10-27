PageBuilder.module("Repositories", function(Repositories, PageBuilder, Backbone, Marionette, $, _){
    Repositories.Row = Backbone.Model.extend({});

    Repositories.RowCollection = Backbone.Collection.extend({

        model: Repositories.Row

    });

    var rows;

    var initializeRows = function() {
        rows = new Repositories.RowCollection();
    }

    var Repository = {
        getRows: function() {
            if (rows === undefined ) {
                initializeRows();
            }

            return rows;
        }
    };

    PageBuilder.reqres.setHandler("row:repositories", function(){
        return Repository.getRows();
    });
});