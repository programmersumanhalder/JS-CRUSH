// strict mode 
"use strict"


// spread operator 
// let arr1=['suman','rajon','mohon'];
// console.log(arr1)
// let arr2=[...arr1,'skill','madam','lovely'];
// console.log(arr2)
// let arr3=['uniquer','timely',...arr1]
// console.log(arr3)

// push array method for add
// let a=['banana','kiwi','tea'];
// let b=['mango','orange', 'apple'];

// ***both work from last
// b.push(a);
// console.log(b)

// pop method  for cut
// b.pop([0])
// console.log(b)

// ***both work from beginning
// unswift method  for add
// b.unshift(a)
// console.log(b)

// shift method for cut
// b.shift([1])
// console.log(b)

// Rest parameter 

// function cal(...suman){
//     let sum=0;
//     suman.forEach(name=> sum+=name )
//     console.log(sum)
// }
// cal(1,2,2,2,2,2,2,5,6,7,8,9,7)

// Dynamic function 
// let DynamicFunction=function(value){
//     return value;
// }
// console.log(DynamicFunction('suman'))

// variables 
// var a='suman'

// var a='rajon'
// console.log(a)

// let a='suman'

//  a='rajon'
// console.log(a)

// const a='suman'

//  a='rajon'
// console.log(a)

// Js scope 
// function my(){
//     let a='suman';
    // console.log(a) ===local scope
// }
// console.log(a)
// my()

// global scope 
// let b='lovely'
// console.log(b)

// function my(){
//  console.log(b)
// }
// console.log(b)

// my()

// Hoisting

// name='suman';
// console.log(name);
// var name

// for loop 
// for (let i=0;i<10; i++){
//     console.log(i)
// }
// for (let i=0;i<10; ++i){
//     console.log('Allah')
//     console.log('suman')
    
// }
// for ---of loop 
// let arr=['suman','rajon','mohon'];
// for (let i of arr){
//     console.log(i)
// }

// Object 
let countryList={
    name:'bangladesh',
    lan:{
        first:'bangla',
        second:'english'
    },
    hobby:{
        list:['love','hug','kiss']
    }
}
// console.log(countryList.hobby.list[0])
console.log(countryList['lan']['first'])