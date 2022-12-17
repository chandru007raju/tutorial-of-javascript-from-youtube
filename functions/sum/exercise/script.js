/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(num1, num2){           //function
  return num1 + num2
    //Add function here
  }
  // console.log(add(2, 5))

  const sumArrow = (a, b) => a + b     //Arrow Function
  // console.log(sumArrow(20, 20))
  
  function sub(num1, num2){
    return num1 - num2
    //Subtract function here
  }
const subArrow = (a, b) => a - b        //Arrow Function

// console.log(subArrow(100, 20))

  // console.log(sub(100, 33))

  
  function div(a, b){
    if (b==0||a==0){
      console.log('enter a number greater than zero')
    } else{
    return a / b
    }
    //Divide function here
  }
    const divArrow = (num1, num2) => num1 / num2    //Arrow Function

    // console.log(divArrow(500, 50))

  // console.log(div(00, 10))
  
  function mul(num1, num2){
    return num1 * num2
    //Multiply function here
  }
  const multiplyArrow = (X, Y) => X *Y           // Arrow function

  // console.log(mul(3, 5))
  // console.log(multiplyArrow(9, 10))

  
  // console.log('hello from the SUM exercise')
  /* 
    TODO: create a function that console logs the result of any of the above operations.
  */