PageBuilder.module("AppRouter", function(AppRouter, PageBuilder, Backbone, Marionette, $, _){
    AppRouter.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "rows": "listRows"
        }
    });

    var API = {
        listRows: function() {
            PageBuilder.App.List.Controller.listRows();
        }
    };

    PageBuilder.on("rows:list", function(){
        PageBuilder.navigate("rows");
        API.listRows();
    });

    PageBuilder.addInitializer(function(){
        new AppRouter.Router({
            controller: API
        });
    });
});

