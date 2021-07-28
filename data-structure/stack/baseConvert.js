import Stack from './stack.js'

/**
 * 從10進制轉成N進制
 * 
 * @param {integer} number 
 * @param {integer} base   基底(1~16)
 * @returns {string} 轉換後結果
 */

function baseConvert(number, base) 
{
    if (base < 1 || base > 16) {
        return '';
    }

    let remStack = new Stack();
    let rem;
    let binaryStr = '';
    let digits = '0123456789ABCDEF'

    while(number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        // 無條件捨去
        number = Math.floor(number / base); 
    }

    while(!remStack.isEmpty()) {
        binaryStr += digits[remStack.pop()];
    }
    
    return binaryStr;
}

console.log(baseConvert(100345, 2));
console.log(baseConvert(100345, 8));
console.log(baseConvert(100345, 16));
