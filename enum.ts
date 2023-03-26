enum Cars {LAMBROGINI = 1, PORSCHE , FERRERI, BUGGATI, BMW};

const personal = {
    name: 'prajwal',
    intrest: 'on cars and bikes',
    bikes: ['Dugati', 'BMW', 'Pulsor'],
    cars: Cars.BMW
};
let vehicle = '';

for (const bike of personal.bikes){
    if (bike === 'BMW'){
        vehicle = bike;
    }
    console.log(bike);
}

if (personal.cars === Cars.BMW){
    console.log("I'm lucky there's gonna be race between bike and a car");
}

if (vehicle === personal.cars){
    console.log("let's race!!!");
}
