let arr = [1 , 2, 3 , 4, 5];
let newArr =[];
let NewArr = 0;




// for (const element of arr) 
// {
//   element= element *2 ;
// }
// console.log(newArr);
// *******************************

// console.log(arr.splice(0,2));

  

// for (const element of arr) {
//  NewArr = NewArr+element;
// }
// *************************

let newarr1 = [];
for(let i =0 ; i<=arr.length ; i++) 
{
    if (arr[i]%2 === 0 ){
    newarr1 =arr.push(arr[i])
    }
    newArr [i] = arr[i] *2 ;
    NewArr = NewArr + arr[i];   

}

console.log(newarr1);
console.log(NewArr);

