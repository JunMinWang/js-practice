import Set from './set.js';

let set = new Set();

set.add(1);

console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.add(2);

console.log(set.values());
console.log(set.has(2));
console.log(set.size());

set.remove(1);
console.log(set.values());

set.remove(2);
console.log(set.values());

/********************************************/
/* Union
/********************************************/

let setA = new Set();

setA.add(1);
setA.add(2);

let setB = new Set();

setB.add(2);
setB.add(3);
setB.add(5);

let unionSet = setA.union(setB);

console.log(unionSet.values());

/********************************************/
/* 差集
/********************************************/

let setC = new Set();

setC.add(1);
setC.add(2);
setC.add(4);

let setD = new Set();

setD.add(2);
setD.add(3);
setD.add(5);

let diffSet = setC.difference(setD);

console.log(diffSet.values());

/********************************************/
/* 子集
/********************************************/

let setE = new Set();

setE.add(1);
setE.add(2);

let setF = new Set();

setF.add(1);
setF.add(2);
setF.add(3);

let setG = new Set();

setG.add(2);
setG.add(3);
setG.add(4);

console.log(setE.subSet(setF));
console.log(setF.subSet(setG));

