import LinkedList from './list.js';

let list = new LinkedList();

console.log(list.getHead());
console.log(list.size());
console.log(list.isEmpty());

list.append('e1');
list.append('e2');
list.append('e3');

console.log(list.getHead());
console.log(list.size());
console.log(list.isEmpty());
console.log(list.toString());

list.removeAt(0);

console.log(list.size());

list.remove('e2');
list.remove('e99');

console.log(list.toString());

list.append('e4');
list.append('e5');
list.append('e6');

list.remove('e5');
console.log(list.toString());

