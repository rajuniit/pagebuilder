ElementFactory = {};

ElementFactory.prototype.elementClass = PageBuilder.App.Elements.Edit.Text;

ElementFactory.prototype.createElementView = function(type, options) {
    if (type == 'text') {
        this.elementClass = PageBuilder.App.Elements.Edit.Text;
    } else {
        this.elementClass = PageBuilder.App.Elements.Edit.Text;
    }

    return new this.elementClass( options );
}