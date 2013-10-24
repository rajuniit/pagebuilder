var PageBuilder = new Backbone.Marionette.Application();

PageBuilder.addRegions({
    header: '#header',
    content: '#content',
    footer: '#footer'
});

PageBuilder.on('initialize:after', function() {
    Backbone.history.start();
    console.log("Page Builder has started");
    var addRowView = new PageBuilder.AddRowView({});
    PageBuilder.content.show(addRowView);
});

