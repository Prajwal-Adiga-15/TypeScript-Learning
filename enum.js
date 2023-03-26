var Cars;
(function (Cars) {
    Cars[Cars["LAMBROGINI"] = 1] = "LAMBROGINI";
    Cars[Cars["PORSCHE"] = 2] = "PORSCHE";
    Cars[Cars["FERRERI"] = 3] = "FERRERI";
    Cars[Cars["BUGGATI"] = 4] = "BUGGATI";
    Cars[Cars["BMW"] = 5] = "BMW";
})(Cars || (Cars = {}));
;
var personal = {
    name: 'prajwal',
    intrest: 'on cars and bikes',
    bikes: ['Dugati', 'BMW', 'Pulsor'],
    cars: Cars.BMW
};
var vehicle = '';
for (var _i = 0, _a = personal.bikes; _i < _a.length; _i++) {
    var bike = _a[_i];
    if (bike === 'BMW') {
        vehicle = bike;
    }
    console.log(bike);
}
if (personal.cars === Cars.BMW) {
    console.log("I'm lucky there's gonna be race between bike and a car");
}
if (vehicle === personal.cars) {
    console.log("let's race!!!");
}
