// Operators in Javascript are pretty similar as c++ and pyhon's oprators 
/* types -> 1. arthematic operators 
            2. assignment operators
            3. bitwise 
            4. logical
            5. comperision 
*/

/*  bitwise operators */
// this is for revision 
let result1 = 5 & 3; // 5 (0101) & 3 (0011) = 1 (0001)
console.log(result1); // Output: 1

let result2 = 5 | 3; // 5 (0101) | 3 (0011) = 7 (0111)
console.log(result2); // Output: 7

let result3 = 5 ^ 3; // 5 (0101) ^ 3 (0011) = 6 (0110)
console.log(result3); // Output: 6

let result4 = ~5; // ~5 (0...0101) = -6 (1...1010 in two's complement)
console.log(result4); // Output: -6

let result5 = 5 << 2; // 5 (0101) shifted left by 2 = 20 (00010100)
console.log(result5); // Output: 20

let result6= 20 >> 2; // 20 (00010100) shifted right by 2 = 5 (0101)
console.log(result6); // Output: 5

// this is new to learn

// Zero-fill Right Shift (>>>): Shifts the bits of the first operand to the right by the number of positions specified by the second operand.
// Zeros are pushed in from the left, regardless of the sign.

let $result = -5 >>> 1; // -5 (1...1011) shifted right by 1 with zero-fill = 2147483645
console.log($result); // Output: 2147483645
