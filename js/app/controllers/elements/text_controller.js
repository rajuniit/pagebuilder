PageBuilder.module("App.Elements.Text", function(Text, PageBuilder, Backbone, Marionette, $, _) {
    Text.Controller = {
        edit: function(model) {
            console.log('get element model');
            var element = model.get('element');
            var elements = PageBuilder.request("element:models");
            var element = elements.get(element.cid);
            var view = new PageBuilder.App.Elements.Text.Edit({model: element});

            view.on("show", function(){
                ThreeDotsUtilityTinyMCE.initTinyMCE('.editor');
            });

            view.on('text:element:update', function(data){
                var rows = PageBuilder.request("row:models");
                var element = view.model;
                var row = rows.get(element.get('rowCID'));
                var columns = row.get('columns');
                var column = columns.get(element.get('columnCID'));

                element.set('content', data.content);
                column.set('element', element);

                var showView = new PageBuilder.App.Elements.Text.Show({model: element});
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