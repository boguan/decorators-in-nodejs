function isTestable(value) {
  return function decorator(target) {
     target.isTestable = value;
  }
}

function upperCase( target, key, descriptor ) {
  let initValue = descriptor.initializer();
  descriptor.initializer = function(){
      return initValue.toUpperCase();
  }
  return descriptor;
}

function readOnly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}


@isTestable(true)
export class MyClass {
  @upperCase
  name = 'fbi';

  @readOnly
  getName() {
    return this.name;
  }
}


const t = new MyClass;
console.log(t.getName()); // FBI
console.log(MyClass.isTestable); // true