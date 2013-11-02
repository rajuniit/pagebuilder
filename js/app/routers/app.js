PageBuilder.module("AppsRouter", function(AppsRouter, PageBuilder, Backbone, Marionette, $, _){
    AppsRouter.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "rows": "listRows"
        }
    });

    var API = {
        listRows: function() {
            PageBuilder.App.Rows.List.Controller.listRows();
        }
    };

    PageBuilder.on("rows:list", function(){
        PageBuilder.navigate("rows");
        API.listRows();
    });

    PageBuilder.addInitializer(function(){
        new AppsRouter.Router({
            controller: API
        });
    });
});

