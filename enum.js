"use strict";
var Cars;
(function (Cars) {
    Cars[Cars["LAMBROGINI"] = 1] = "LAMBROGINI";
    Cars[Cars["PORSCHE"] = 2] = "PORSCHE";
    Cars[Cars["FERRERI"] = 3] = "FERRERI";
    Cars[Cars["BUGGATI"] = 4] = "BUGGATI";
    Cars[Cars["BMW"] = 5] = "BMW";
})(Cars || (Cars = {}));
;
const personal = {
    name: 'prajwal',
    intrest: 'on cars and bikes',
    bikes: ['Dugati', 'BMW', 'Pulsor'],
    cars: Cars.BMW
};
let vehicle = '';
for (const bike of personal.bikes) {
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
//# sourceMappingURL=enum.js.map