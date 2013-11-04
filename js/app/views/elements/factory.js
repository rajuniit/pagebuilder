PageBuilder.ElementsFactory = {};

PageBuilder.ElementsFactory.prototype.elementClass = PageBuilder.App.Elements.Edit.Text;

PageBuilder.ElementsFactory.prototype.createElementView = function(type, options) {
    if (type == 'text') {
        this.elementClass = PageBuilder.App.Elements.Edit.Text;
    } else {
        this.elementClass = PageBuilder.App.Elements.Edit.Text;
    }

    return new this.elementClass( options );
}