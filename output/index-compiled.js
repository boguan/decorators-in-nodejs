"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyTestableClass = void 0;

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function readOnly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function testable(target) {
  target.isTestable = true;
}

var MyTestableClass = testable(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function MyTestableClass() {
    _classCallCheck(this, MyTestableClass);

    this.name = 'Li';
  }

  _createClass(MyTestableClass, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return MyTestableClass;
}(), _temp), (_applyDecoratedDescriptor(_class2.prototype, "getName", [readOnly], Object.getOwnPropertyDescriptor(_class2.prototype, "getName"), _class2.prototype)), _class2)) || _class;

exports.MyTestableClass = MyTestableClass;
var t = new MyTestableClass();
console.log(MyTestableClass.isTestable); // true
