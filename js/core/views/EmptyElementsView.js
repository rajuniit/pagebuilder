PageBuilder.EmptyElementsView = Marionette.CollectionView.extend({
    tagName: "div",
    className: 'row',
    itemView: PageBuilder.EmptyElementItemView
});