import ComponentView from 'core/js/views/componentView';

class GridView extends ComponentView {

  preRender() {
    // Create Span variables for IE
    for (var i = 0; i < this.model.get('_items').length; i++) {
      var item = this.model.get('_items')[i];
      item._position._columnSpan = item._position._columnEnd - item._position._columnStart,
      item._position._rowSpan = item._position._rowEnd - item._position._rowStart;
    }
  }

  postRender() {
    this.$('.grid__widget').imageready(() => {
      this.setReadyStatus();
      this.setLayout();
      this.setupInviewCompletion('.grid__widget');
    });
  }

  setLayout() {
    jQuery.cssNumber.gridColumnStart = true;
    jQuery.cssNumber.gridColumnEnd = true;
    jQuery.cssNumber.gridRowStart = true;
    jQuery.cssNumber.gridRowEnd = true;

    for (var i = 0; i < this.model.get('_items').length; i++) {
      var item = this.model.get('_items')[i];
      this.$(`[data-index="${i}"]`).css({
        'grid-column-start': item._position._columnStart,
        'grid-column-end': item._position._columnEnd,
        'grid-row-start': item._position._rowStart,
        'grid-row-end': item._position._rowEnd
      });
    }
  }
}

GridView.template = 'grid.jsx';

export default GridView;
