export {};

// EXAMPLE 1 - Check if a Property exists in an Object in TypeScript

type Employee = {
  name?: string;
  department?: string;
  country?: string;
};

const emp: Employee = {};

// ✅ Explicitly checking
if (emp.department !== undefined) {
  console.log(emp.department.toLowerCase()); // now string
}

// ✅ Using optional chaining
console.log(emp.department?.toLowerCase());

// ---------------------------------------------------

// // EXAMPLE 2 - When you don't know all of the object's properties ahead of time

// type Employee = {
//   [key: string]: string;
// };

// const emp: Employee = {};

// // ✅ Explicitly checking
// if (emp.department !== undefined) {
//   console.log(emp.department.toLowerCase()); // now string
// }

// // ✅ Using optional chaining
// console.log(emp.department?.toLowerCase());

// ---------------------------------------------------

// // EXAMPLE 3 - Check if accessing the key returns a value of `undefined`

// type Employee = {
//   name?: string;
//   department?: string;
//   country?: string;
// };

// const emp: Employee = {};

// // 👇️ (property) department?: string | undefined
// emp.department;

// // ✅ Explicitly checking
// if (emp.department !== undefined) {
//   console.log(emp.department.toLowerCase());
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Check if a Property exists in an Object using optional chaining (?.)

// type Employee = {
//   address?: {
//     country?: string;
//     city?: string;
//   };
// };

// const emp: Employee = {};

// // ✅ Using optional chaining
// console.log(emp.address?.country?.toLowerCase());
// console.log(emp.address?.city?.toLowerCase());

// if (emp.address?.country !== undefined) {
//   // ✅ Now emp.address.country is string
//   console.log(emp.address.country.toLowerCase());
// }

// ---------------------------------------------------

// // EXAMPLE 5 - Check if a Property exists in an Object using `in` and `hasOwnProperty`

// type Employee = {
//   name?: string;
//   department?: string;
//   country?: string;
// };

// const emp: Employee = {};

// if ('department' in emp) {
//   // 👇️ (property) department?: string | undefined
//   console.log(emp.department);
// }

// if (emp.hasOwnProperty('department')) {
//   // 👇️ (property) department?: string | undefined
//   console.log(emp.department);
// }
