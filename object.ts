const details: {
    name: string;
    age: number;
    student: boolean;
    location: string;
    work_details: {
        work: string;
        salary: number;
    }
} = {
    name: "Prajwal",
    age: 22,
    student: false,
    location: 'Bangalore',
    work_details: {
        work: 'Engineer',
        salary: 300000
    }
};

console.log(details.student, details.age, details.work_details.work);