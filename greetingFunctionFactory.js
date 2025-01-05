// Factory function to create personalized greeting functions
const createGreetingFunction = (name) => {
  const greetingMessage = `Hello, ${name}!`;

  // Function that logs the personalized greeting
  const greet = () => {
    console.log(greetingMessage);
  };

  return greet; // Returns the greet function, which still has access to the 'greetingMessage' variable
};

// Create a greeting function for "Alice"
const greetAlice = createGreetingFunction("Alice");

// Create a greeting function for "Bob"
const greetBob = createGreetingFunction("Bob");

// Display the types and string representations of the functions
console.log('typeof greetAlice:', typeof greetAlice); // "function"
console.log('greetAlice as a string:', greetAlice.toString());

// Call the greeting functions
greetAlice(); // Outputs: "Hello, Alice!"
greetBob();   // Outputs: "Hello, Bob!"
