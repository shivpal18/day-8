// let arr=[1,2,3,4,5,"Hello", true];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// arr.push("shivpal");
// console.log("..............");
// arr.pop();

// //arr.splice (start,count,addon)
// arr.splice (2, 1, 7);

// const newArr = [5,5,6,4,3,5,4,56,4,3]
// let count = 0;
// for (let i = 0; i < newArr.length; i++) {
//     console.log(newArr[i]);
//     if (arr[i] === 5) count++;

// }
// check no. of even no.
// arrnew = [5,5,6,4,3,5,4,56,4,3];
// let count = 0;
// for (let i = 0; i < arrnew.length; i++) {
//     if (arrnew[i] % 2=== 0) {
//         count++;
//     }
// }
// console.log(count);

// //Q. remove 5
// arr1 = [1,4,5,6,73,2,4];
// arr1.splice(2, 1);
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// //Q. add one in each element
// arr2 = [1,3,45,6,2,2];
// arr2.splice(0, 6, [2,3,45,6,2,2]);
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }

// //Q. find missing number in an array range : [1 to n] only one n. is missing . eg. input : [1,2,3,4,5,7,8,9] : ans = 6
// arr3 = [1,2,3,4,5,7,8,9];
// arr3.splice(5, 0, 6);
// for (let i = 0; i < arr3.length; i++) {
//     console.log(arr3[5]);
// }


//Q. 
// arrnew = [5,5,6,4,3,5,4,56,4,3];
// let count = 0;
// let sum = 0;
// for (let i = 0; i < arrnew.length; i++) {
//     if (arrnew[i] % 2 === 0) {
//         sum = sum + arrnew[i];
//     }
// }
// console.log(sum);

// //odd no. sum

// let sum1 = 0;
// for (let i = 0; i < arrnew.length; i++) {
//     if (arrnew[i] % 2 != 0) {
//         sum1 = sum1 + arrnew[i];
//     }
// }
// console.log(sum1);

let student_id_card = {
    // key : value
    name: "ram",
    rollnumber: 28943,
    section: "B",
    course: "B-Tech",
    Branch: "CSE",
    address: "UP",

};
const rollnumber = student_id_card.rollnumber;
const section = student_id_card.section;
const course = student_id_card.course;
const Branch = student_id_card.Branch;
const address = student_id_card.address;
console.log(rollnumber, section, course, Branch, address,);

student_id_card.result = "Pass";

student_id_card.section = "B";
delete student_id_card.name;
console.log(student_id_card)