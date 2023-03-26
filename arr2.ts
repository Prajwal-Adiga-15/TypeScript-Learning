const arr2: {
    name: string;
    age: number;
    cars: [number, string];   //tuple initialization so we cannot change the value types once we assigned to them
} = {
    name: 'lkj',
    age: 89,
    cars: [1, 'gtr']
};

arr2.cars.push('pagani', 'koiensegg');

console.log(arr2.cars);
