'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ReactiveBase2 = require('../ReactiveBase');

var _ReactiveBase3 = _interopRequireDefault(_ReactiveBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MongoCollection = function (_ReactiveBase) {
  _inherits(MongoCollection, _ReactiveBase);

  function MongoCollection(database) {
    _classCallCheck(this, MongoCollection);

    var _this = _possibleConstructorReturn(this, (MongoCollection.__proto__ || Object.getPrototypeOf(MongoCollection)).call(this, null));

    _this.database = database;
    return _this;
  }

  _createClass(MongoCollection, [{
    key: 'Collection',
    value: async function Collection(col) {
      var _this2 = this;

      var self = this;
      self.database.collection(col).find({}).toArray(async function (error, collection) {
        self.Value = JSON.parse(JSON.stringify(collection));
        await _get(MongoCollection.prototype.__proto__ || Object.getPrototypeOf(MongoCollection.prototype), 'sleep', _this2).call(_this2, 1000);
        self.Collection(col);
      });
    }
  }]);

  return MongoCollection;
}(_ReactiveBase3.default);

exports.default = MongoCollection;