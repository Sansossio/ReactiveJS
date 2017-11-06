'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactiveVar = exports.ReactiveJS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ReactiveBase2 = require('./lib/ReactiveBase');

var _ReactiveBase3 = _interopRequireDefault(_ReactiveBase2);

var _ReactiveVar = require('./lib/ReactiveVar');

var _ReactiveVar2 = _interopRequireDefault(_ReactiveVar);

var _ReactiveMongo = require('./lib/ReactiveMongo');

var _ReactiveMongo2 = _interopRequireDefault(_ReactiveMongo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-await-in-loop */
/* import ReactiveVar from './lib/ReactiveVar';

const test = new ReactiveVar('123');
test.autorun((nextValue, previousValue) => {
  console.log(`cambio a de ${previousValue} to ${nextValue}`);
  return true;
});
test.Value = '123333';
console.log(test.Value);

*/


var ReactiveJS = function (_ReactiveBase) {
  _inherits(ReactiveJS, _ReactiveBase);

  function ReactiveJS() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ReactiveJS);

    var _this = _possibleConstructorReturn(this, (ReactiveJS.__proto__ || Object.getPrototypeOf(ReactiveJS)).call(this, null));

    _this.finish = false;
    _this.url = options.Mongo;
    _this.callback = function () {};
    return _this;
  }

  _createClass(ReactiveJS, [{
    key: 'run',
    value: async function run() {
      this.Mongo = new _ReactiveMongo2.default(this.url);
      while (!this.finish) {
        if (this.Mongo.database) this.finish = true;
        await _get(ReactiveJS.prototype.__proto__ || Object.getPrototypeOf(ReactiveJS.prototype), 'sleep', this).call(this, 200);
      }
      this.callback(this.Mongo);
    }
  }, {
    key: 'startup',
    value: function startup(callback) {
      this.callback = callback;
      // If a not mongo reactive
      if (!this.url) this.callback();else this.run();
    }
  }]);

  return ReactiveJS;
}(_ReactiveBase3.default);

exports.ReactiveJS = ReactiveJS;
exports.ReactiveVar = _ReactiveVar2.default;