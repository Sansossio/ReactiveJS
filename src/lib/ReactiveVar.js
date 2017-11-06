import ReactiveBase from './ReactiveBase';

class ReactiveVar extends ReactiveBase {
  set val(val) {
    if (typeof val !== 'string') return;
    super.val = val;
  }
}

export default ReactiveVar;
