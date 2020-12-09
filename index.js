function readOnly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function testable(target) {
  target.isTestable = true;
}

@testable
export class MyTestableClass {
  name = 'Li';

  @readOnly
  getName() {
    return this.name;
  }
}


const t = new MyTestableClass;
console.log(MyTestableClass.isTestable); // true