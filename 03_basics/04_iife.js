// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// This means that the variables declared inside the IIFE are not accessible from outside the IIFE. In detail it is used to avoid naming conflicts.
// IIFE is used to avoid global scope pollution.

