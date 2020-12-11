"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyClass = void 0;

var _dec, _class, _class2, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function upperCase(target, name, descriptor) {
  var initValue = descriptor.initializer();
  debugger
  console.log(initValue);

  descriptor.initializer = function () {
    return initValue.toUpperCase();
  };

  return descriptor;
}

function readOnly(target, name, descriptor) {
  debugger
  descriptor.writable = false;
  return descriptor;
}

function isTestable(value) {
  return function decorator(target) {
    target.isTestable = value;
  };
}

var MyClass = (_dec = isTestable(true), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function MyClass() {
    _classCallCheck(this, MyClass);

    _initializerDefineProperty(this, "name", _descriptor, this);
  }

  _createClass(MyClass, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return MyClass;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "name", [upperCase], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'fbi';
  }
}), _applyDecoratedDescriptor(_class2.prototype, "getName", [readOnly], Object.getOwnPropertyDescriptor(_class2.prototype, "getName"), _class2.prototype)), _class2)) || _class);
exports.MyClass = MyClass;
var t = new MyClass();
console.log(t.getName()); // FBI

console.log(MyClass.isTestable); // true
