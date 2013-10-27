var PageBuilder = new Marionette.Application();

PageBuilder.addRegions({
    mainRegion: '#main-region'
});

PageBuilder.on('initialize:after', function() {
    Backbone.history.start();
    PageBuilder.App.List.Controller.listRows();
});
