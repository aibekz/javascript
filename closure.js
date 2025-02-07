// Lexical scope defines how variable names are resolved in nested functions.

// Nested (child) functions have access to the scope of their parent functions

// This is often confused with closure, lexical  scope is only an important part of closure.

// global scope 
let x = 1;

const parentFunction = () => {
    // local scope 
    let myValue = 2;
    console.log("G scope: ", x);
    console.log("L scope", myValue);

    const childFunction = () => {
        console.log("G scopre", x += 5);
        console.log("L scope", myValue += 1);
    }

    childFunction();
}

parentFunction();
