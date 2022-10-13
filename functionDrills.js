/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
// function sayHello(){
//   return 'hello world'
// }
// console.log(sayHello())
/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */

// function print (message){
//   if (typeof message == 'string'){
//     console.log(message)
//   }
// }
// print('hey it worked!')
/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
// const printMessage = (message) => {
//   if (typeof message == 'string'){
//     console.log(`Today's message is: ${message}`)
//   }
// }
// printMessage('hey this one worked too!!')

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
// function squared(a) {
//     return a ** 2
//   }
//   console.log(squared(5))
  /*
   * Prompt 5:
   *
   * Create a function called reverseMessage. This function should take
   * a parameter called message. When invoked and passed a string, print the
   * string in reverse. (hint: look up some ways of doing this.)
   */
  
  // const reverseMessage = (message) => {
  //   //split( splits string into an array)
  //   //reverse(method reverses an array in place)
  //   //join(joins elements of an array into string)
  //   console.log(message)
  //   return message.split('').reverse().join('')
  // }
  // console.log( reverseMessage('hey it worked but in reverse'))

  /*
   * Prompt 6:
   *
   * Create a function called multiply that takes two parameters: a and b. When
   * invoked, multiply a times b. If b an argument is not passed in for b, then
   * double a (i.e. multiply it by two).
   *
   * Hint: use a default parameter.
   */
  // const multiply = (a, b = 2) => {
  //   return a * b
  // }
  // console.log(multiply(5,8))
  // console.log(multiply(5))

  /*
   * Prompt 7:
   *
   * Fix the following code. HINT: Think Objects :)
   */
  
  /** Starter Code */
  // class Person{
  //   constructor(firstname, lastname){
  //   this.firstName = firstname;
  //   this.lastName = lastname;
  //   }
  // }
  
  // const zakk = new Person('Zakk', 'F')
  // const jimmy = new Person('Jimmy', 'B')
  // console.log(zakk)
  // console.log(jimmy)
  
  /*
   * Prompt 8:
   *
   * Write a function that returns an object. The object can be anything.
   */
//   const returnObjectUser = (firstName, lastName) =>{
//     let user = {};
//     user.firstName = firstName;
//     user.lastName = lastName
//     return user
//   }
// console.log(returnObjectUser('sharon', 'ogbonna'))  
  /*
   * Prompt 9:
   *
   * Write a function that returns an array. The array can be of anything.
   */
  // const returnArray = (item1, item2, item3) => {
  //   let newArray = []
  //   newArray.push(item1,item2,item3)
  //   return newArray
  // }
  // console.log(returnArray('paint', 'music', 'poetry'))
  /*
   * Prompt 10:
   *
   * Write a function that, when called, adds a number passed in as a parameter to
   * the sum variable below. Invoke your method a few times and then print the sum
   */
  
  /** Starter Code */
  // let sum = 0
  // const addToSum = (num) => {
  //   sum += num
  //   return sum
  // }
  // console.log(addToSum(5))
  // console.log(addToSum(300))
  // console.log(addToSum(7))
  
  
  /*
   * Prompt 11:
   *
   * Write a function that takes an array of number values and returns the sum.
   * Test it out to make sure it works.
   */
  const sumOfArray = (array) =>{
    let length = array.length
    for(i = 0; i<= length; i++){
      
    }
  }
  
  /*
   * Prompt 12:
   *
   * Write a function that takes a string and returns an array of every word in
   * the string.
   */
  
  
  /*
   * Prompt 13:
   *
   * How can you write a function so that this expression works? It should print
   * the string "this works!"
   */
  
  /** Starter Code */
  // testFunc()()
  
  
  
  /*
   * Prompt 14:
   *
   * Write a function that takes the add function below as a parameter and invokes
   * it, passing in 2 and 4.
   */
  
  /** Starter Code */
  // function add(a, b) {
  //   return a + b
  // }
  
  
  /*
   * Prompt 15:
   *
   * Write a function that returns another function. Have the inner function print
   * the string "hello world"
   */