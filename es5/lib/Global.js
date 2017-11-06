'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
var Global = function () {
  function Global() {
    _classCallCheck(this, Global);

    this.packageName = 'ReactiveJS';
  }

  _createClass(Global, [{
    key: 'showMessage',
    value: function showMessage(type, msg) {
      console[type](msg);
    }
  }, {
    key: 'print',
    value: function print(type, msg) {
      var message = '[' + this.packageName + '] ' + msg;
      this.showMessage(type, message);
      if (type === 'error') process.exit();
    }
  }, {
    key: 'sleep',
    value: async function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }]);

  return Global;
}();

exports.default = Global;