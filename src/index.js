"use strict";
// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
// average(1, 2);
// average('1', 2, true)
// const num: number = average(1, 2, 3);
function isString(item) {
    return typeof item === 'string';
}
function average(...args) {
    let total = 0;
    for (const item of args) {
        if (isString(item)) {
            total += Number(item);
            continue;
        }
        total += item;
    }
    const avg = total / args.length;
    return `Average is ${avg}`;
}
average(1);
average(1, 2);
average('1', 2, '2');
average(1, 2, 3, 4, 5, 5, 55, '123');
const num = average(1, 2, 3);
