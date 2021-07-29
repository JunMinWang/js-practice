import Queue from './queue.js';
import PriorityQueue from './priorityQueue.js';
import CircularQueue from './circularQueue.js';


/********************************************************/
/* 一般Queue
/********************************************************/
let queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue('1');
queue.enqueue('2');
queue.enqueue('3');

console.log(queue.isEmpty());
console.log(queue.size());

queue.dequeue();
queue.dequeue();
console.log(queue.size());

console.log(`*************************************************`)

/********************************************************/
/* Priority Queue
/********************************************************/

let pQueue = new PriorityQueue();

pQueue.enqueue('Mandy', 1);
pQueue.enqueue('Jack', 2);
pQueue.enqueue('Annie', 1);
console.log(pQueue);

console.log(`*************************************************`)

/********************************************************/
/* Circular Queue
/********************************************************/

let cQueue = new CircularQueue();

cQueue.enqueue('e1');
cQueue.enqueue('e2');
cQueue.enqueue('e3');

console.log(`after insert e1, e2, e3`);
console.log(cQueue);

// console.log(cQueue.size());
// console.log(cQueue.getFront());
// console.log(cQueue.getRear());
cQueue.dequeue();
cQueue.dequeue();
console.log(`after dequeue twice`);

console.log(cQueue);

cQueue.enqueue('e4');
cQueue.enqueue('e5');

cQueue.dequeue();
cQueue.dequeue();
cQueue.dequeue();
cQueue.dequeue();

cQueue.enqueue('e6');

console.log(cQueue);
console.log(cQueue.size());
console.log(cQueue.getFront());
console.log(cQueue.getRear());
