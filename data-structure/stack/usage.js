import Stack from './stack.js'

let stack = new Stack();
console.log(stack);
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.top());

stack.push(11);

console.log(stack.size());
console.log(stack.isEmpty());

stack.clear();

console.log(stack.size());
console.log(stack.isEmpty());