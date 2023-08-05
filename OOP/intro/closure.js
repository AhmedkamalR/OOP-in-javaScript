//  Closures in JavaScript are functions
//  that "remember" the environment in which they were created,
//  even if that environment is not active anymore. A closure captures the variables 
//  and scope of the outer function, allowing those variables to be used later,
//  even after the outer function has finished executing.
//  Closures are often used in OOP to implement encapsulation,
//  as they allow you to create private variables and functions within objects.

function Counter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = Counter();
  counter.increment();
  console.log(counter.getCount()); // Output: 1
