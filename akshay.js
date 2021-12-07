
//------------claa function-----//

// const Student = {
//     age:20
// }

// const student = function(a,b,c){
//     return this.age + a + b +c;
// }


// console.log(student.call(Student,1,3,4))

//--------apply function----//

// const Student1 = {
//     age:22
// }

// const student1 = function(a,b,c){
//     return this.age + a + b+ c;
// }

// const arr1 = [1,2,7]
// console.log(student1.apply(Student1,arr1));


//-------bind function ------//

// const obj = {
//     age:11
// }

// const student = function(a,b,c){
//     return this.age + a + b + c;
// }

// const bound = student.bind(obj);

// console.log(bound(1,2,3));




const Student = {
    age:20
}

const akash = function(){
    console.log(this.age)
}

akash.call(Student)

//-----functionCurrying -------//

let multiply = function(x,y){

    console.log((x * y));

}

let multiplyByTwo = multiply.bind(this,2)

multiplyByTwo(3);