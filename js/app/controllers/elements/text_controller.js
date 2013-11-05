PageBuilder.module("App.Elements.Text", function(Text, PageBuilder, Backbone, Marionette, $, _) {
    Text.Controller = {
        edit: function(model) {

            var view = new PageBuilder.App.Elements.Text.Edit({model: model});

            view.on("show", function(){
                ThreeDotsUtilityTinyMCE.initTinyMCE('.editor');
            });

            view.on('text:element:update', function(data){
                var rows = PageBuilder.request("row:models");
                var column = view.model;
                var row = rows.get(column.get('rowCID'));
                var columns = row.get('columns');
                var column = columns.get(column.cid);
                var element = column.get('element');
                element.set('content', data.content);
                column.set('element', element);

                var showView = new PageBuilder.App.Elements.Text.Show({model: column});
                showView.render();
                element.set('content', showView.$el.html());

                column.set('element', element);
                row.set('columns', columns);

                PageBuilder.App.Rows.List.Controller.updateElement(row);
            });

            PageBuilder.dialogRegion.show(view);
        }
    }
});