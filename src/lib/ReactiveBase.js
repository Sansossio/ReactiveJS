import Global from './Global';

class ReactiveBase extends Global {
  // Primitive methods
  constructor(val) {
    super();
    this.callback = () => true;
    this.data = val;
  }
  set Value(val) {
    let cond = false;
    if (this.Value && typeof val === 'object') {
      const Current = JSON.stringify(this.Value);
      const New = JSON.stringify(val);
      cond = Current === New;
    }
    if (cond) return;
    this.callback(val, this.data);
    this.data = val;
  }
  get Value() {
    return this.data;
  }
  set(val) {
    if (val === this.value.value || !this.callback(val, this.value.data)) return;
    this.value.data = val;
  }
  // Custom methods
  autorun(callback) {
    this.callback = callback;
  }
}

export default ReactiveBase;
