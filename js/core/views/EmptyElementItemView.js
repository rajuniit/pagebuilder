PageBuilder.EmptyElementItemView = Marionette.ItemView.extend({

    template: "#empty-element-template",

    events: {
        "click a.add-element": "showElementList"
    },

    showElementList: function(){
        var modal = new PageBuilder.ModalRegion({el:'#row-column-opt'});
        var view = new PageBuilder.ElementListView();

        modal.show(view);
    }
});