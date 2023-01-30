import Adapt from 'core/js/adapt';
import GridModel from './GridModel';
import GridView from './GridView';

export default Adapt.register('grid', {
  model: GridModel,
  view: GridView
});
