"use strict";
function func1(a, b) {
    return (a * b);
}
function func2(c) {
    console.log('res ', c);
}
func2(func1(12, 4));
let variable;
variable = func1;
//variable = func2;
console.log(variable(56, 8));
//# sourceMappingURL=func_type.js.map