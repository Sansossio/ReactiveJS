import Global from './Global';

class ReactiveBase extends Global {
  // Primitive methods
  constructor(val) {
    super();
    this.callback = () => true;
    this.data = val;
  }
  // Getters & Setters
  set Value(val) {
    let cond = false;
    if (this.Value && typeof val === 'object') {
      const Current = JSON.stringify(this.Value);
      const New = JSON.stringify(val);
      cond = Current === New;
    }
    if (cond) return;
    // Define new val
    this.data = val;
    // Callback
    this.callback(this.data);
  }
  get Value() {
    return this.data;
  }
  // Custom methods
  autorun(callback) {
    this.callback = callback;
  }
}

export default ReactiveBase;
