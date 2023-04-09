function func1(a:number, b:number){
    return (a * b);
}

function func2(c: number){
    console.log('res ', c);
}

func2(func1(12, 4));

let variable: (a: number, b: number) => number;

variable = func1;
//variable = func2;

console.log(variable(56, 8));