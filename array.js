var arr = {
    name: 'praj',
    age: 123,
    cars: ['lambo', 'buggati', 'prosche']
};
console.log(arr.name);
for (var _i = 0, _a = arr.cars; _i < _a.length; _i++) {
    var pick = _a[_i];
    console.log(pick.toUpperCase());
}
