PageBuilder.AddRowView = Marionette.ItemView.extend({

    template: "#contact-list-panel",

    events: {
        "click a.add-row": "showColumnOption"
    },

    showColumnOption: function(){
        var modal = new PageBuilder.ModalRegion({el:'#row-column-opt'});
        var view = new PageBuilder.AddColumnView();

        modal.show(view);
    }
});