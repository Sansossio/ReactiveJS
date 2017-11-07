'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ReactiveBase2 = require('../ReactiveBase');

var _ReactiveBase3 = _interopRequireDefault(_ReactiveBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MongoCollection = function (_ReactiveBase) {
  _inherits(MongoCollection, _ReactiveBase);

  _createClass(MongoCollection, null, [{
    key: 'toArray',

    // Logics
    value: function toArray(item) {
      if (typeof item === 'array') return item;
      return [item];
    }
  }]);

  function MongoCollection(database, col, timeUpdate) {
    _classCallCheck(this, MongoCollection);

    var _this = _possibleConstructorReturn(this, (MongoCollection.__proto__ || Object.getPrototypeOf(MongoCollection)).call(this, null));

    _this.database = database;
    _this.col = col;
    _this.update = timeUpdate;
    return _this;
  }

  _createClass(MongoCollection, [{
    key: 'Collection',
    value: async function Collection() {
      var _this2 = this;

      var self = this;
      self.database.collection(self.col).find({}).toArray(async function (error, collection) {
        self.Value = JSON.parse(JSON.stringify(collection));
        if (self.update) {
          await _get(MongoCollection.prototype.__proto__ || Object.getPrototypeOf(MongoCollection.prototype), 'sleep', _this2).call(_this2, self.update);
          self.Collection();
        }
      });
    }
    // Mongo Methods
    // Insert

  }, {
    key: 'InsertAsync',
    value: async function InsertAsync(Fields) {
      var col = this.database.collection(this.col);
      var response = await col.insertMany(MongoCollection.toArray(Fields));
      this.Collection();
      return response;
    }
  }, {
    key: 'Insert',
    value: function Insert(Fields) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      var self = this;
      var col = self.database.collection(this.col);
      col.insertMany(MongoCollection.toArray(Fields), function (err, result) {
        if (!err) self.Collection();
        callback(err, result);
      });
    }
  }]);

  return MongoCollection;
}(_ReactiveBase3.default);

exports.default = MongoCollection;