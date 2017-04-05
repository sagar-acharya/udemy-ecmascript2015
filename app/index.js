import pi from './modules/singleDefaultExports/pi'
import api from './modules/singleDefaultExports/api'
import Person from './modules/singleDefaultExports/Person'
import * as Math from './modules/multipleNamedExports/math'
import { pi as PI, add as addition} from './modules/multipleNamedExports/math'
console.log(pi);
console.log(api("sagar"));

var person = new Person();
person.toString();


console.log("-----------------");
console.log(Math.add(10,20));
console.log(Math.subtract(10,20));
console.log(Math.multiply(10,20));
console.log(Math.devide(10,20));
console.log(Math.mod(10,20));
console.log(Math.pi);

console.log("-----------------");

console.log(addition(50,70));
console.log(PI);
