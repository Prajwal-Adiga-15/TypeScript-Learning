function func1(a, b) {
    return (a * b);
}
function func2(c) {
    console.log('res ', c);
}
func2(func1(12, 4));
var variable;
variable = func1;
//variable = func2;
console.log(variable(56, 8));
