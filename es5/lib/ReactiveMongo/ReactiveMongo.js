'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _ReactiveBase2 = require('../ReactiveBase');

var _ReactiveBase3 = _interopRequireDefault(_ReactiveBase2);

var _MongoCollection = require('./MongoCollection');

var _MongoCollection2 = _interopRequireDefault(_MongoCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactiveMongo = function (_ReactiveBase) {
  _inherits(ReactiveMongo, _ReactiveBase);

  function ReactiveMongo(url) {
    _classCallCheck(this, ReactiveMongo);

    var _this = _possibleConstructorReturn(this, (ReactiveMongo.__proto__ || Object.getPrototypeOf(ReactiveMongo)).call(this, null));

    _this.Mongo = _mongodb2.default;
    _this.url = url;
    _this.database = false;
    _this.cursors = [];
    _this.run();
    return _this;
  }

  _createClass(ReactiveMongo, [{
    key: 'run',
    value: function run() {
      var self = this;
      this.Mongo.connect(this.url, function (err, db) {
        if (err) {
          self.print('error', err.name + ': ' + err.message);
          return;
        }
        self.database = db;
      });
    }
  }, {
    key: 'ReactiveCollection',
    value: function ReactiveCollection(col) {
      var timeUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var self = this;
      var response = new _MongoCollection2.default(self.database, col, timeUpdate);
      response.Collection();
      return response;
    }
  }]);

  return ReactiveMongo;
}(_ReactiveBase3.default);

exports.default = ReactiveMongo;