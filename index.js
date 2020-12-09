function readOnly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function isTestable(value) {
  return function decorator(target) {
     target.isTestable = value;
  }
}

@isTestable(true)
export class MyClass {
  name = 'Li';

  @readOnly
  getName() {
    return this.name;
  }
}


const t = new MyClass;
console.log(MyClass.isTestable); // true