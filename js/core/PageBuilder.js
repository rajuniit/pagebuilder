var PageBuilder = new Marionette.Application();

PageBuilder.addRegions({
    mainRegion: '#main-region'
});

PageBuilder.navigate = function(route, options){
    options || (options = {});
    Backbone.history.navigate(route, options);
};

PageBuilder.getCurrentRoute = function(){
    return Backbone.history.fragment
};

PageBuilder.on('initialize:after', function() {
    Backbone.history.start();

    if(this.getCurrentRoute() === ""){
        PageBuilder.trigger("rows:list");
    }
});
