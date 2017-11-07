'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Global2 = require('./Global');

var _Global3 = _interopRequireDefault(_Global2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactiveBase = function (_Global) {
  _inherits(ReactiveBase, _Global);

  // Primitive methods
  function ReactiveBase(val) {
    _classCallCheck(this, ReactiveBase);

    var _this = _possibleConstructorReturn(this, (ReactiveBase.__proto__ || Object.getPrototypeOf(ReactiveBase)).call(this));

    _this.callback = function () {
      return true;
    };
    _this.data = val;
    return _this;
  }
  // Getters & Setters


  _createClass(ReactiveBase, [{
    key: 'autorun',

    // Custom methods
    value: function autorun(callback) {
      this.callback = callback;
    }
  }, {
    key: 'Value',
    set: function set(val) {
      var cond = false;
      if (this.Value && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
        var Current = JSON.stringify(this.Value);
        var New = JSON.stringify(val);
        cond = Current === New;
      }
      if (cond) return;
      // Define new val
      this.data = val;
      // Callback
      this.callback(this.data);
    },
    get: function get() {
      return this.data;
    }
  }]);

  return ReactiveBase;
}(_Global3.default);

exports.default = ReactiveBase;