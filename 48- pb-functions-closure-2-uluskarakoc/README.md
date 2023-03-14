# JS Closures / Scoping exercises

Feel free to experiment using the code examples; try to understand _why_ do they work like they do.

## 1. What’s the result of executing this code and why.

  ```js
  console.log("Question 1")
  function closureOne() {
     console.log(a);
     console.log(foo());

     const a = 1;
     function foo() {
        return 2;
     }
  }

  closureOne();
  ```

## 2. What is the result?

  ```js
  console.log("Question 2")
  let a = 1;

  function closureTwo(number) {
    function inner(input) {
      return a;
    }

    a = 5;

    return inner;
  }

  const resultOfClosureTwo = closureTwo(9);
  const result = resultOfClosureTwo(2);
  ```

## 3. What is the result of the following code? Explain your answer.

  ```js
  console.log("Question 3")
  const fullname = 'John Doe';
  const user = {
     fullname: 'Colin Ihrig',
     name: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  console.log(user.name.getFullname());

  const test = user.name.getFullname;
  console.log(test());
  ```

## 4. What will you see in the console for the following example?

  ```js
  console.log("Question 4")
  let interesting = 1; 
  function doSomeStuff() { 
      interesting = 10; 
      return; 
      function interesting() {} 
  } 
  doSomeStuff(); 
  console.log(interesting);
  ```
