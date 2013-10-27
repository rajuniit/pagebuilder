PageBuilder.AddColumnView = Marionette.ItemView.extend({

    template: "#addcolumn-template",

    events: {
        "click a.add-row": "showColumnOption",
        "click .columnEle": "addElementColumn"
    },

    showColumnOption: function(){
        var modal = new PageBuilder.ModalRegion({el:'#row-column-opt'});
        var view = new PageBuilder.AddColumnView();

        modal.show(view);
    },

    addElementColumn: function() {
        var NumberofElement = $(this).data('type');

    }
});