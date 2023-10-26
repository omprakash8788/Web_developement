const question = [
    {
        question: "What is JavaScript?",
        answers:[
          {text:"A markup language", correct:false},
          {text:" A programming language", correct:true},
          {text:"A stylesheet languaget", correct:false},
          {text:" A database language", correct:false},


        ]
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answers:[
          {text:"//", correct:true},
          {text:"#", correct:false},
          {text:"/**/", correct:false},
          {text:"--", correct:false},


        ]
    }
    ,
    {
        question: "What does DOM stand for in JavaScript?",
        answers:[
          {text:"Document Object Model", correct:true},
          {text:"Data Object Model", correct:false},
          {text:"Design Object Model", correct:false},
          {text:"Document Oriented Model", correct:false},


        ]
    },
    {
        question: "How do you declare a variable in JavaScript?",
        answers:[
          {text:"var variableName;", correct:false},
          {text:"let variableName;", correct:false},
          {text:"const variableName;", correct:false},
          {text:"All of the above", correct:true},


        ]
    }
    ,
    {
        question: "What is the output of typeof null in JavaScript?",
        answers:[
          {text:"null", correct:false},
          {text:"object", correct:true},
          {text:"undefined", correct:false},
          {text:"number", correct:false},


        ]
    },
    {
        question: "Which of the following is not a valid data type in JavaScript?",
        answers:[
          {text:"string", correct:false},
          {text:"lboolean", correct:false},
          {text:"number", correct:false},
          {text:"character", correct:true},

        ]
    },
    {
        question: "What is the purpose of the addEventListener method in JavaScript?",
        answers:[
          {text:"To add a new event handler to an element", correct:true},
          {text:"To remove an event handler from an element", correct:false},
          {text:"To modify the style of an element", correct:false},
          {text:"To create a new element", correct:false},


        ]
    },
    {
        question: "What does the JSON.parse() function do in JavaScript?",
        answers:[
          {text:"Converts a JavaScript object to a JSON string", correct:false},
          {text:"Parses a JSON string and returns a JavaScript object", correct:true},
          {text:"Converts a JSON object to a JavaScript array", correct:false},
          {text:"None of the above", correct:false},


        ]
    },
    {
        question: "What is the correct way to write an if statement in JavaScript?",
        answers:[
          {text:"if (condition) then { code }", correct:false},
          {text:"if condition then { code }", correct:false},
          {text:"if (condition) { code }", correct:true},
          {text:"if condition { code }", correct:false},


        ]
    },
    {
        question: "Which function is used to format a number with a specific number of digits to the right of the decimal?",
        answers:[
          {text:"toFixed()", correct:true},
          {text:"toPrecision()", correct:false},
          {text:"toLocaleString()", correct:false},
          {text:"toExponential()", correct:false},


        ]
    },
    {
        question: "What will be the output of the following code? console.log(2 + '2');",
        answers:[
          {text:4, correct:false},
          {text:20, correct:false},
          {text:24, correct:false},
          {text:"22", correct:true},


        ]
    },
    {
        question: "What is the purpose of the splice() method in JavaScript arrays?",
        answers:[
          {text:"To add or remove elements from an array", correct:true},
          {text:"To sort the elements of an array", correct:false},
          {text:"To join two arrays together", correct:false},
          {text:"To reverse the elements of an array", correct:false},


        ]
    },
    {
        question: "Which keyword is used to prevent variable modification in JavaScript?",
        answers:[
          {text:"freeze", correct:false},
          {text:"const", correct:true},
          {text:"lock", correct:false},
          {text:"protect", correct:false},


        ]
    },
    {
        question: "What is the difference between null and undefined in JavaScript?",
        answers:[
          {text:"They are the same", correct:false},
          {text:"null represents an intentional absence of any object value, while undefined represents an uninitialized, inaccessible, or nonexistent value", correct:true},
          {text:"null is a primitive data type, and undefined is an object", correct:false},
          {text:"undefined represents a null value, and null represents an undefined value.", correct:false},


        ]
    },
    {
        question: "Which of the following statements is true about JavaScript?",
        answers:[
          {text:"JavaScript is a server-side scripting language", correct:false},
          {text:"JavaScript code needs to be compiled before execution", correct:false},
          {text:"JavaScript is an object-oriented language", correct:true},
          {text:"JavaScript is primarily used for styling web pages", correct:false},


        ]
    },
    {
        question: "What is the purpose of the push() method in JavaScript arrays?",
        answers:[
          {text:"To remove the last element of an array", correct:false},
          {text:"To add elements to the beginning of an array", correct:false},
          {text:"To add elements to the end of an array;", correct:true},
          {text:"To reverse the elements of an array", correct:false},


        ]
    },
    {
        question: "Which function is used to format a number with a specific number of digits to the right of the decimal?",
        answers: [
            { text: "toFixed()", correct: true },
            { text: "toPrecision()", correct: false },
            { text: "toLocaleString()", correct: false },
            { text: "toExponential()", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `push()` method in JavaScript arrays?",
        answers: [
            { text: "To remove the last element of an array", correct: false },
            { text: "To add elements to the beginning of an array", correct: false },
            { text: "To add elements to the end of an array", correct: true },
            { text: "To reverse the elements of an array", correct: false }
        ]
    },
    {
        question: "Which of the following functions is used to convert a string to an integer in JavaScript?",
        answers: [
            { text: "parseInt()", correct: true },
            { text: "convertToInt()", correct: false },
            { text: "stringToInteger()", correct: false },
            { text: "toInteger()", correct: false }
        ]
    },
    {
        question: "What is the correct way to create a function in JavaScript?",
        answers: [
            { text: "function: myFunction() {}", correct: false },
            { text: "func myFunction() {}", correct: false },
            { text: "function myFunction() {}", correct: true },
            { text: "myFunction = function() {}", correct: false }
        ]
    },
    {
        question: "What does the `this` keyword refer to in JavaScript?",
        answers: [
            { text: "The current object", correct: true },
            { text: "The parent object", correct: false },
            { text: "The global object", correct: false },
            { text: "The child object", correct: false }
        ]
    },
    {
        question: "Which event is triggered when a user clicks on an HTML element?",
        answers: [
            { text: "onchange", correct: false },
            { text: "onsubmit", correct: false },
            { text: "onclick", correct: true },
            { text: "onmouseover", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `map()` function in JavaScript?",
        answers: [
            { text: "To create a new array with the results of calling a provided function on every element in the array", correct: true },
            { text: "To sort the elements of an array", correct: false },
            { text: "To filter elements based on a provided condition", correct: false },
            { text: "To reduce the array to a single value", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `split()` function in JavaScript?",
        answers: [
            { text: "To combine two strings", correct: false },
            { text: "To split a string into an array of substrings", correct: true },
            { text: "To convert a string to lowercase", correct: false },
            { text: "To remove whitespace from the beginning and end of a string", correct: false }
        ]
    },
    {
        question: "What does the `NaN` in JavaScript stand for?",
        answers: [
            { text: "Not a Number", correct: true },
            { text: "No Available Number", correct: false },
            { text: "Numeric Analysis", correct: false },
            { text: "Null and Number", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `localStorage` object in JavaScript?",
        answers: [
            { text: "To store data that has no expiration time", correct: true },
            { text: "To store data that expires after a specific time", correct: false },
            { text: "To store data on the server", correct: false },
            { text: "To store data in a session", correct: false }
        ]
    },
    {
        question: "What is a closure in JavaScript?",
        answers: [
            { text: "A way to close a web browser window", correct: false },
            { text: "A function inside another function that has access to the outer function's variables", correct: true },
            { text: "A way to close a loop in JavaScript", correct: false },
            { text: "A method to close an array", correct: false }
        ]
    },
    {
        question: "Which of the following is used to loop through elements in an array in JavaScript?",
        answers: [
            { text: "for loop", correct: true },
            { text: "while loop", correct: false },
            { text: "do-while loop", correct: false },
            { text: "foreach loop", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `bind()` method in JavaScript?",
        answers: [
            { text: "To bind two functions together", correct: false },
            { text: "To create a new function that, when called, has its `this` keyword set to the provided value", correct: true },
            { text: "To bind an event to an HTML element", correct: false },
            { text: "To bind a variable to a specific value", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `reduce()` function in JavaScript?",
        answers: [
            { text: "To create a new array with the results of calling a provided function on every element in the array", correct: false },
            { text: "To sort the elements of an array", correct: false },
            { text: "To filter elements based on a provided condition", correct: false },
            { text: "To reduce the array to a single value", correct: true }
        ]
    },
    {
        question: "What does the acronym AJAX stand for in the context of web development?",
        answers: [
            { text: "Asynchronous JavaScript and XML", correct: true },
            { text: "Advanced JavaScript and XML", correct: false },
            { text: "Asynchronous JavaScript and XHTML", correct: false },
            { text: "All JavaScript and XML", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `charAt()` method in JavaScript?",
        answers: [
            { text: "To remove a character from a string", correct: false },
            { text: "To replace a character in a string", correct: false },
            { text: "To retrieve the character at a specified index in a string", correct: true },
            { text: "To find the position of a character in a string", correct: false }
        ]
    },
    {
        question: "What is the output of `typeof undefined` in JavaScript?",
        answers: [
            { text: "\"undefined\"", correct: true },
            { text: "\"null\"", correct: false },
            { text: "\"object\"", correct: false },
            { text: "\"number\"", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `filter()` method in JavaScript?",
        answers: [
            { text: "To create a new array with the results of calling a provided function on every element in the array", correct: false },
            { text: "To sort the elements of an array", correct: false },
            { text: "To filter elements based on a provided condition", correct: true },
            { text: "To reduce the array to a single value", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `querySelector()` method in JavaScript?",
        answers: [
            { text: "To select the first element that matches a specified CSS selector", correct: true },
            { text: "To select all elements that match a specified CSS selector", correct: false },
            { text: "To select the parent element of a specified element", correct: false },
            { text: "To select the last element that matches a specified CSS selector", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `pop()` method in JavaScript arrays?",
        answers: [
            { text: "To add elements to the beginning of an array", correct: false },
            { text: "To remove the last element of an array", correct: true },
            { text: "To add elements to the end of an array", correct: false },
            { text: "To reverse the elements of an array", correct: false }
        ]
    },
    {
        question: "Which operator is used for strict equality comparison in JavaScript?",
        answers: [
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "=", correct: false },
            { text: "!==", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `substring()` method in JavaScript?",
        answers: [
            { text: "To extract characters from the beginning of a string", correct: false },
            { text: "To extract characters from the end of a string", correct: false },
            { text: "To extract characters from a string between two specified indices", correct: true },
            { text: "To replace characters in a string", correct: false }
        ]
    },
    {
        question: "What does the `event.preventDefault()` method do in JavaScript?",
        answers: [
            { text: "Prevents the default behavior of an HTML element", correct: true },
            { text: "Stops the event propagation in the DOM", correct: false },
            { text: "Prevents the event from being captured by event listeners", correct: false },
            { text: "Stops the event from bubbling up the DOM tree", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Math.random()` method in JavaScript?",
        answers: [
            { text: "To generate a random integer", correct: false },
            { text: "To generate a random floating-point number between 0 (inclusive) and 1 (exclusive)", correct: true },
            { text: "To generate a random boolean value", correct: false },
            { text: "To generate a random string", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `shift()` method in JavaScript arrays?",
        answers: [
            { text: "To add elements to the beginning of an array", correct: false },
            { text: "To remove the first element of an array", correct: true },
            { text: "To add elements to the end of an array", correct: false },
            { text: "To sort the elements of an array", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `unshift()` method in JavaScript arrays?",
        answers: [
            { text: "To add elements to the beginning of an array", correct: true },
            { text: "To remove the first element of an array", correct: false },
            { text: "To add elements to the end of an array", correct: false },
            { text: "To sort the elements of an array", correct: false }
        ]
    },
    {
        question: "What does the `Array.isArray()` function check for in JavaScript?",
        answers: [
            { text: "Whether a variable is a string", correct: false },
            { text: "Whether a variable is an object", correct: false },
            { text: "Whether a variable is an array", correct: true },
            { text: "Whether a variable is a number", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.join()` method in JavaScript?",
        answers: [
            { text: "To split an array into substrings", correct: false },
            { text: "To concatenate all elements of an array into a string", correct: true },
            { text: "To sort the elements of an array", correct: false },
            { text: "To reverse the elements of an array", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.reverse()` method in JavaScript?",
        answers: [
            { text: "To sort the elements of an array", correct: false },
            { text: "To reverse the order of elements in an array", correct: true },
            { text: "To remove the last element of an array", correct: false },
            { text: "To add elements to the beginning of an array", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.splice()` method in JavaScript?",
        answers: [
            { text: "To add elements to the beginning of an array", correct: false },
            { text: "To remove elements from an array and, if necessary, replace them with new elements", correct: true },
            { text: "To concatenate two arrays", correct: false },
            { text: "To sort the elements of an array", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.forEach()` method in JavaScript?",
        answers: [
            { text: "To create a new array with the results of calling a provided function on every element in the array", correct: false },
            { text: "To loop through the elements of an array and execute a provided function", correct: true },
            { text: "To filter elements based on a provided condition", correct: false },
            { text: "To reduce the array to a single value", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.every()` method in JavaScript?",
        answers: [
            { text: "To check if at least one element in the array passes a test", correct: false },
            { text: "To check if all elements in the array pass a test", correct: true },
            { text: "To find the first element that passes a test", correct: false },
            { text: "To find the last element that passes a test", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.some()` method in JavaScript?",
        answers: [
            { text: "To check if all elements in the array pass a test", correct: false },
            { text: "To check if at least one element in the array passes a test", correct: true },
            { text: "To find the first element that passes a test", correct: false },
            { text: "To find the last element that passes a test", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.reduceRight()` method in JavaScript?",
        answers: [
            { text: "To reduce the array to a single value, iterating from right to left", correct: true },
            { text: "To reduce the array to a single value, iterating from left to right", correct: false },
            { text: "To reverse the order of elements in the array", correct: false },
            { text: "To sort the elements of an array in descending order", correct: false }
        ]
    },
    {
        question: "What does the `setTimeout()` function do in JavaScript?",
        answers: [
            { text: "Pauses the execution of a function for a specified number of milliseconds", correct: false },
            { text: "Calls a function or evaluates an expression after a specified number of milliseconds", correct: true },
            { text: "Stops the execution of a function", correct: false },
            { text: "Delays the loading of an external script", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.from()` method in JavaScript?",
        answers: [
            { text: "To create a new array with the results of calling a provided function on every element in the array", correct: false },
            { text: "To create a shallow copy of an array", correct: false },
            { text: "To create a new array from an array-like or iterable object", correct: true },
            { text: "To filter elements based on a provided condition", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.isArray()` method in JavaScript?",
        answers: [
            { text: "To check if a variable is an array", correct: true },
            { text: "To check if a variable is a string", correct: false },
            { text: "To check if a variable is an object", correct: false },
            { text: "To check if a variable is a number", correct: false }
        ]
    },
    {
        question: "What does the `super` keyword do in JavaScript?",
        answers: [
            { text: "Refers to the parent class in a derived class", correct: true },
            { text: "Refers to the child class in a base class", correct: false },
            { text: "Refers to the current class", correct: false },
            { text: "Refers to the global scope", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Object.keys()` method in JavaScript?",
        answers: [
            { text: "To retrieve an object's prototype", correct: false },
            { text: "To retrieve an object's constructor", correct: false },
            { text: "To retrieve an object's own enumerable property names", correct: true },
            { text: "To retrieve an object's length", correct: false }
        ]
    },
    {
        question: "What does the `const` keyword do in JavaScript?",
        answers: [
            { text: "Declares a variable with block scope that cannot be reassigned", correct: true },
            { text: "Declares a variable with function scope that cannot be reassigned", correct: false },
            { text: "Declares a variable with global scope that cannot be reassigned", correct: false },
            { text: "Declares a variable with block scope that can be reassigned", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.concat()` method in JavaScript?",
        answers: [
            { text: "To merge two arrays into a single array", correct: true },
            { text: "To create a new array with the results of calling a provided function on every element in the array", correct: false },
            { text: "To filter elements based on a provided condition", correct: false },
            { text: "To sort the elements of an array", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.findIndex()` method in JavaScript?",
        answers: [
            { text: "To find the index of the first element that passes a test", correct: true },
            { text: "To find the index of the last element that passes a test", correct: false },
            { text: "To find the index of a specific element in the array", correct: false },
            { text: "To find the index of the middle element in the array", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.fill()` method in JavaScript?",
        answers: [
            { text: "To fill the array with a specified value", correct: true },
            { text: "To remove elements from an array", correct: false },
            { text: "To replace elements in an array with new elements", correct: false },
            { text: "To sort the elements of an array", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.flat()` method in JavaScript?",
        answers: [
            { text: "To flatten a nested array structure by one level", correct: true },
            { text: "To create a deep copy of the array", correct: false },
            { text: "To sort the elements of the array", correct: false },
            { text: "To remove the last element of the array", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Promise` object in JavaScript?",
        answers: [
            { text: "To represent a value that might not be available yet, but will be resolved or rejected in the future", correct: true },
            { text: "To create an array-like object", correct: false },
            { text: "To represent a one-time event or a mutable value", correct: false },
            { text: "To provide a way to iterate over a list of values", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `let` keyword in JavaScript?",
        answers: [
            { text: "Declares a variable with block scope that cannot be reassigned", correct: false },
            { text: "Declares a variable with function scope that cannot be reassigned", correct: false },
            { text: "Declares a variable with block scope that can be reassigned", correct: true },
            { text: "Declares a variable with global scope that can be reassigned", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.reduce()` method in JavaScript?",
        answers: [
            { text: "To create a new array with the results of calling a provided function on every element in the array", correct: false },
            { text: "To sort the elements of an array", correct: false },
            { text: "To filter elements based on a provided condition", correct: false },
            { text: "To reduce the array to a single value", correct: true }
        ]
    },
    {
        question: "What is the purpose of the `Object.create()` method in JavaScript?",
        answers: [
            { text: "To create a new object with the specified prototype object and properties", correct: true },
            { text: "To create a shallow copy of an object", correct: false },
            { text: "To create a new object with the specified properties and values", correct: false },
            { text: "To create a new object with the specified methods", correct: false }
        ]
    },
    {
        question: "What does the `fetch()` function do in JavaScript?",
        answers: [
            { text: "Fetches resources from a network, returning a Promise that resolves to the Response object representing the response to the request", correct: true },
            { text: "Fetches a random element from an array", correct: false },
            { text: "Fetches the current date and time from a server", correct: false },
            { text: "Fetches data from the local storage", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Object.freeze()` method in JavaScript?",
        answers: [
            { text: "To freeze the entire JavaScript environment", correct: false },
            { text: "To freeze an object, preventing new properties from being added to it and marking its existing properties as non-configurable", correct: true },
            { text: "To freeze a function, preventing it from being invoked", correct: false },
            { text: "To freeze a variable, preventing its value from being changed", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.slice()` method in JavaScript?",
        answers: [
            { text: "To remove elements from an array", correct: false },
            { text: "To create a shallow copy of an array", correct: true },
            { text: "To add elements to the beginning of an array", correct: false },
            { text: "To sort the elements of an array", correct: false }
        ]
    },
    {
        question: "What does the `async` keyword do in JavaScript?",
        answers: [
            { text: "Indicates that a function returns a Promise, allowing the use of `await` within it", correct: true },
            { text: "Indicates that a function is asynchronous and should be executed synchronously", correct: false },
            { text: "Indicates that a function is a generator function", correct: false },
            { text: "Indicates that a function is a callback function", correct: false }
        ]
    },
    {
        question: "What is the difference between `let`, `var`, and `const` in JavaScript?",
        answers: [
            { text: "`let` has block scope, `var` has function scope, and `const` is a constant with block scope.", correct: true },
            { text: "`let` has function scope, `var` has block scope, and `const` is a constant with function scope.", correct: false },
            { text: "`let` and `var` both have block scope, but `const` has function scope.", correct: false },
            { text: "`let` and `const` both have block scope, but `var` has function scope.", correct: false }
        ]
    },
    {
        question: "What does the `JSON.stringify()` function do in JavaScript?",
        answers: [
            { text: "Parses a JSON string and returns a JavaScript object", correct: false },
            { text: "Converts a JavaScript object or value to a JSON string", correct: true },
            { text: "Parses a JSON string and returns a JSON object", correct: false },
            { text: "Converts a JSON string to a JavaScript object or value", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Object.create()` method in JavaScript?",
        answers: [
            { text: "To create a new object with the specified prototype object and properties", correct: true },
            { text: "To create a new object with the specified properties and methods", correct: false },
            { text: "To clone an existing object", correct: false },
            { text: "To create a new object with no properties or methods", correct: false }
        ]
    },
    {
        question: "What is a callback function in JavaScript?",
        answers: [
            { text: "A function that is called automatically when a program starts", correct: false },
            { text: "A function that is passed as an argument to another function and is executed inside that function", correct: true },
            { text: "A function that is invoked using the `callback` keyword", correct: false },
            { text: "A function that is used to return a value from another function", correct: false }
        ]
    },
    {
        question: "What is the purpose of the `Array.map()` method in JavaScript?",
        answers: [
            { text: "To create a new array with the results of calling a provided function on every element in the array", correct: true },
            { text: "To filter elements based on a provided condition", correct: false },
            { text: "To sort the elements of an array", correct: false },
            { text: "To reduce the array to a single value", correct: false }
        ]
    },
    {
        question: "What is the concept of hoisting in JavaScript?",
        answers: [
            { text: "The ability to move a variable declaration to the top of its scope during compilation", correct: true },
            { text: "The process of converting a function declaration into a function expression", correct: false },
            { text: "The automatic creation of closures in JavaScript", correct: false },
            { text: "The process of converting a variable declaration into a constant", correct: false }
        ]
    },
    {
        question: "What does the `arguments` object refer to in JavaScript functions?",
        answers: [
            { text: "The parameters passed to the function when it is called", correct: false },
            { text: "An array-like object containing all the arguments passed to the function", correct: true },
            { text: "The return value of the function", correct: false },
            { text: "A reserved keyword in JavaScript functions", correct: false }
        ]
    },
    {
        question: "What is the difference between 'undefined' and 'undeclared' variables in JavaScript?",
        answers: [
            { text: "'Undefined' variables are declared but not assigned a value, whereas 'undeclared' variables are not declared in the program.", correct: true },
            { text: "'Undefined' variables are not declared in the program, whereas 'undeclared' variables are declared but not assigned a value.", correct: false },
            { text: "'Undefined' variables are not accessible in the global scope, whereas 'undeclared' variables are accessible in all scopes.", correct: false },
            { text: "'Undefined' variables are automatically declared by the JavaScript engine, whereas 'undeclared' variables need to be explicitly declared using the 'var', 'let', or 'const' keyword.", correct: false }
        ]
    },
    {
        question: "What is the concept of a closure in JavaScript?",
        answers: [
            { text: "A closure is a function that has access to variables from its own scope, the outer function's scope, and the global scope.", correct: true },
            { text: "A closure is a built-in function in JavaScript that closes the application when invoked.", correct: false },
            { text: "A closure is a way to declare variables in JavaScript that cannot be reassigned.", correct: false },
            { text: "A closure is a JavaScript feature that prevents variables from being accessed outside their declared scope.", correct: false }
        ]
    },
    {
        question: "What is the difference between 'call' and 'apply' methods in JavaScript?",
        answers: [
            { text: "'call' is used to invoke a function with a specific 'this' context and individual arguments, whereas 'apply' is used to invoke a function with a specific 'this' context and an array of arguments.", correct: true },
            { text: "'call' is used to invoke a function with a specific 'this' context and an array of arguments, whereas 'apply' is used to invoke a function with a specific 'this' context and individual arguments.", correct: false },
            { text: "'call' and 'apply' are interchangeable and can be used interchangeably in any context.", correct: false },
            { text: "'call' and 'apply' are deprecated methods in modern JavaScript and should not be used.", correct: false }
        ]
    },
    {
        question: "Explain the concept of 'hoisting' in JavaScript. How does it work with variables and functions?",
        answers: [
            { text: "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. Variables declared with 'var' are hoisted but not their assignments, whereas function declarations are hoisted along with their implementations.", correct: true },
            { text: "Hoisting is a JavaScript feature that allows variables and functions to be accessed before their declaration in the code. Both variables and functions are hoisted along with their assignments and implementations.", correct: false },
            { text: "Hoisting is a feature in JavaScript that allows variables to be accessed before their declaration, but functions are not hoisted. Only variables declared with 'let' and 'const' are hoisted.", correct: false },
            { text: "Hoisting is a JavaScript behavior where only function declarations are moved to the top of their containing scope during the compilation phase. Variables declared with 'var' are not hoisted.", correct: false }
        ]
    },
    {
        question: "Explain the event delegation pattern in JavaScript. How does it work and what are its advantages?",
        answers: [
            { text: "Event delegation is a technique where a single event listener is placed on a parent element to manage all of its descendants' events. It works by utilizing event bubbling, allowing for more efficient and dynamic event handling. The advantages include improved performance, reduced memory consumption, and the ability to handle dynamically added elements.", correct: true },
            { text: "Event delegation is a pattern where each element in the DOM tree has its own event listener. It works by checking the target of the event and invoking the corresponding function. The advantages include simplicity and ease of understanding.", correct: false },
            { text: "Event delegation is a method of event handling where events are directly attached to specific elements. It works by preventing event propagation and handling events directly on the target elements. The advantages include fine-grained control over event handling and more predictable behavior.", correct: false },
            { text: "Event delegation is a pattern where event listeners are added to elements using the 'delegate()' method. It works by dynamically attaching event listeners to specific elements. The advantages include flexibility and the ability to handle complex event scenarios.", correct: false }
        ]
    },
    {
        question: "Explain the concept of a 'Promise' in JavaScript. How does it work, and what problem does it solve in asynchronous programming?",
        answers: [
            { text: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows asynchronous code to be written in a more synchronous manner, making it easier to read and maintain. Promises help solve the problem of callback hell and provide a more structured way to handle asynchronous operations.", correct: true },
            { text: "A Promise is a built-in function in JavaScript that ensures functions are executed sequentially, ensuring that one function completes before the next one starts. It helps in avoiding race conditions and ensures data consistency.", correct: false },
            { text: "A Promise is a way to handle errors in JavaScript applications. It ensures that errors are caught and logged, preventing the application from crashing. Promises improve the overall stability of JavaScript applications.", correct: false },
            { text: "A Promise is a way to create immutable data structures in JavaScript. It ensures that data once set cannot be changed, leading to more predictable behavior in programs.", correct: false }
        ]
    },
    {
        question: "Explain the concept of the 'prototype' in JavaScript. How does it facilitate inheritance in JavaScript objects?",
        answers: [
            { text: "In JavaScript, each object has a prototype from which it inherits properties and methods. When a property or method is accessed on an object, JavaScript looks for it in the object. If not found, it looks in the object's prototype, and so on up the prototype chain until it reaches the top-level Object prototype. This mechanism allows objects to inherit properties and methods from their prototypes, facilitating inheritance in JavaScript.", correct: true },
            { text: "The 'prototype' keyword in JavaScript is used to create private methods and properties within objects. It ensures that certain methods and properties can only be accessed by the object itself, providing data encapsulation.", correct: false },
            { text: "The 'prototype' keyword in JavaScript is used to define static methods and properties that can be accessed directly on the constructor function. It allows the sharing of common methods and properties across all instances of the object.", correct: false },
            { text: "The 'prototype' keyword in JavaScript is used to create deep copies of objects. It ensures that each object instance has its own unique set of properties and methods, preventing data sharing between instances.", correct: false }
        ]
    },
    {
        question: "Explain the concept of the 'async/await' syntax in JavaScript. How does it simplify asynchronous code execution?",
        answers: [
            { text: "'async/await' is a syntax in JavaScript used to work with asynchronous code. The 'async' keyword is used before a function declaration to indicate that the function will always return a promise. 'await' is used inside an 'async' function to wait for the resolution of a promise before moving to the next line of code. It simplifies asynchronous code by making it look more like synchronous code, improving readability and maintainability.", correct: true },
            { text: "'async/await' is a way to define custom asynchronous functions in JavaScript. It allows developers to create their own asynchronous functions and use them to handle complex asynchronous operations.", correct: false },
            { text: "'async/await' is a built-in JavaScript function used to handle errors in asynchronous code. It ensures that errors are caught and logged, preventing the application from crashing.", correct: false },
            { text: "'async/await' is a JavaScript feature used to define asynchronous loops. It allows developers to create loops that run asynchronously, improving the performance of the application.", correct: false }
        ]
    },
    {
        question: "Explain the concept of 'currying' in JavaScript functions. How does it work and what benefits does it provide?",
        answers: [
            { text: "'Currying' is a technique in functional programming where a function with multiple parameters is transformed into a series of functions, each taking a single parameter. When all parameters are provided, the original function is executed. Currying allows for partial application of functions, enabling the creation of specialized functions and enhancing code reusability and readability.", correct: true },
            { text: "'Currying' is a technique to optimize recursive functions in JavaScript. It ensures that recursive functions execute more efficiently by breaking down the problem into smaller subproblems and solving them iteratively.", correct: false },
            { text: "'Currying' is a method to bind event handlers to DOM elements in JavaScript. It ensures that event handlers are executed in a specific order, preventing race conditions and ensuring smooth user interactions.", correct: false },
            { text: "'Currying' is a technique to create immutable data structures in JavaScript. It ensures that data once set cannot be changed, leading to more predictable behavior in programs.", correct: false }
        ]
    },
    {
        question: "Explain the concept of the 'event loop' in JavaScript. How does it enable asynchronous programming, and what is its role in handling asynchronous tasks?",
        answers: [
            { text: "The 'event loop' is a fundamental concept in JavaScript's concurrency model. It continuously checks the call stack and the message queue. If the call stack is empty, it takes the first message from the queue and pushes it onto the stack, executing the corresponding code. It enables asynchronous programming by allowing non-blocking execution of code and handling asynchronous tasks through callbacks and promises.", correct: true },
            { text: "The 'event loop' is a JavaScript feature that allows event handlers to execute in parallel, improving the performance of web applications. It ensures that multiple event handlers can run simultaneously, leading to faster user interactions.", correct: false },
            { text: "The 'event loop' is a mechanism in JavaScript used to create custom events and event listeners. It allows developers to define their own events and handle them using event listeners, enhancing the flexibility of event-driven programming.", correct: false },
            { text: "The 'event loop' is a JavaScript optimization technique used to reduce memory consumption. It ensures that unused variables and functions are automatically removed from the memory, preventing memory leaks in applications.", correct: false }
        ]
    },
    {
        question: "Explain the concept of 'memoization' in JavaScript. How does it optimize recursive function calls, and what benefits does it provide?",
        answers: [
            { text: "'Memoization' is an optimization technique in which the results of expensive function calls are stored and returned when the same inputs occur again. It is often used to optimize recursive functions by caching the results of previous function calls. Memoization reduces redundant computations, improves performance, and allows for more efficient handling of complex algorithms and recursive computations.", correct: true },
            { text: "'Memoization' is a way to compress large data structures in JavaScript, reducing their memory footprint. It ensures that large arrays and objects are stored in a compressed format, saving memory and improving overall application performance.", correct: false },
            { text: "'Memoization' is a method used to optimize database queries in JavaScript applications. It ensures that database queries are cached, preventing unnecessary database hits and improving response times.", correct: false },
            { text: "'Memoization' is a technique to prevent code duplication in JavaScript applications. It ensures that duplicated code segments are stored in a memoized function, making it easier to manage and maintain the codebase.", correct: false }
        ]
    },
    {
        question: "Explain the concept of 'web workers' in JavaScript. How do they enable concurrent execution, and what are their use cases?",
        answers: [
            { text: "'Web workers' are a mechanism in JavaScript that allow for concurrent execution of code in the background. They run in a separate thread from the main JavaScript thread, enabling tasks to be performed concurrently without blocking the user interface. 'Web workers' are commonly used for CPU-intensive operations, such as data processing, cryptography, and other tasks that may cause the main thread to freeze if executed synchronously.", correct: true },
            { text: "'Web workers' are a way to create interactive user interfaces in JavaScript applications. They enable the creation of dynamic and responsive UI elements, ensuring a smooth user experience.", correct: false },
            { text: "'Web workers' are a method to handle network requests asynchronously in JavaScript applications. They ensure that multiple network requests can be processed simultaneously, improving the efficiency of data fetching operations.", correct: false },
            { text: "'Web workers' are a technique to improve code readability in JavaScript applications. They allow developers to organize their code into modular worker scripts, making it easier to manage and maintain large codebases.", correct: false }
        ]
    },
    {
        question: "Explain the concept of 'closures' in JavaScript. How do closures work, and what are their practical use cases in programming?",
        answers: [
            { text: "A closure is a function that captures and remembers its surrounding variables, even when it is executed outside its lexical scope. Closures allow for data encapsulation, private variables, and the creation of factory functions. They are used in practical scenarios like creating private data, implementing modules, and managing asynchronous operations.", correct: true },
            { text: "A closure is a function that can be executed only once in a JavaScript program. It is used for one-time initialization tasks. Once executed, a closure cannot be invoked again.", correct: false },
            { text: "A closure is a function that is defined inside another function. It is used for recursive computations and ensures that the inner function has access to the outer function's variables.", correct: false },
            { text: "A closure is a function that is automatically invoked when a program starts. It is used for handling program initialization and cleanup tasks.", correct: false }
        ]
    },
                                                                    
    
];


const questionElement= document.getElementById('question');
const answerButtons= document.getElementById('answer-button');
const nextButton= document.getElementById('next-btn');

let curentQuestionIndex=0;
let score =0;


function startQuiz(){
    curentQuestionIndex=0;
    score=0
    nextButton.innerHTML="Next";
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = question[curentQuestionIndex]
    let questionNo= curentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+ currentQuestion.question;


    // display answer
    currentQuestion.answers.forEach(answer=>{
        const button= document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener('click', selectAnswer)

    })


}

function resetState(){
    nextButton.style.display='none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
 const selectedBtn=e.target;
 const isCorrect = selectedBtn.dataset.correct==='true';
 if(isCorrect){
    selectedBtn.classList.add("correct")
    score++
 }
 else{
    selectedBtn.classList.add("incorrect")
 }
 Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct==='true'){
        button.classList.add("correct")
    }
    button.disabled= true
 })
 nextButton.style.display="block";

}

// score function
function showScore(){
    resetState()
    questionElement.innerHTML=`You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML='Play Again';

    nextButton.style.display="block"
}

// handle next button
function handleNextButton(){
    curentQuestionIndex++;
    if(curentQuestionIndex<question.length){
        showQuestion()
    }
    else{
        showScore()
    }
}

nextButton.addEventListener("click", ()=>{
    if(curentQuestionIndex<question.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})


startQuiz()