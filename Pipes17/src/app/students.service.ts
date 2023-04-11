// import { Student } from "./student";

// export class StudentService{
    
//     students: Student[] = [
//         { name: 'Dikshita' , course: 'MBA' , marks: 520 , DOB: new Date('10-14-1994') , gender: 'Female' },
//         { name: 'Sampada' , course: 'BTech' , marks: 420 , DOB: new Date('12-02-1997') , gender: 'Female'},
//         { name: 'Neha' , course: 'MBA' , marks: 540 , DOB: new Date('10-10-1995') , gender: 'Female'},
//         { name: 'Shitlesh' , course: 'BTech' , marks: 380 , DOB: new Date('05-01-1995') , gender: 'Male'},
//         { name: 'Mayuri' , course: 'M.Sc' , marks: 430 , DOB: new Date('07-03-1997') , gender: 'Female'},
//         { name: 'Sarang' , course: 'MTech' , marks: 320 , DOB: new Date('10-04-1998') , gender: 'Male'},
//     ];

//     totalMarks: number = 600;
// }

import { Student } from "./student";

export class StudentService{
    students: Student[] = [
        {name: 'Mark Vought', course: 'MBA', marks: 520, DOB: new Date('11-12-1997'), gender: 'Male'},
        {name: 'Steve Smith', course: 'BTECH', marks: 420, DOB: new Date('10-06-1998'), gender: 'Male'},
        {name: 'Merry Jane', course: 'MBA', marks: 540, DOB: new Date('09-22-1996'), gender: 'Female'},
        {name: 'John Doe', course: 'BTECH', marks: 380, DOB: new Date('06-12-1995'), gender: 'Male'},
        {name: 'Sarah Smith', course: 'M.SC', marks: 430, DOB: new Date('12-21-1999'), gender: 'Female'},
        {name: 'Jonas Weber', course: 'M.SC', marks: 320, DOB: new Date('06-18-1997'), gender: 'Male'}
    ];

    totalMarks: number = 600;
}