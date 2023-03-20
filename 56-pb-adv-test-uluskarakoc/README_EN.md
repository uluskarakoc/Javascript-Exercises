# Programming Basics - Exam 2

- Work in the `main` branch
- Commit your changes to the `solution.js` file and push them to your repository
- You are allowed to research online, but write your own code - don't use AI
- You are not allowed to receive help from classmates or teachers to complete the tasks
- You are allowed to ask the teacher or assistant teacher to clarify a task (within reason)
- Follow the instructions below to complete the test
- All your functions should return a value
- Good luck!

## Task 1 - Key Value Pairs

- Create an object called `profileData` that represents a user
- The object should have 4 keys: `firstName`, `lastName`, `age` and `city`
- Use values of your choice for each key

## Task 2 - Object method

- Add a new property to the `profileData` object called `details`. This property is a method that returns a string describing the user like in the example below:

    ```javascript
    console.log(profileData.details());
    ```

    **Expected Output**:
    ```plaintext
    Jess Smith is 30 years old and lives in Berlin
    ```

## Task 3 - Word Converter

- Create a function called `wordConverter`
- The function has two parameters:
    - `words`: an array of words 
    - `suffix`: a string
- Inside the function, use an array method to add the `suffix` to the end of all the words in the array
- **Important**: Do **not** use a `for` loop or `forEach` to complete this task
- Look at the expected output below. 

    **Example**
    ```javascript
    let adjectives = ["smart", "kind", "sweet", "small", "clear"];
    ```
    Call your function and print the returned value to the console.

    **Expected output**
    ```javascript
    > console.log(wordConverter(adjectives, "er"));
    [ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]
    ```

## Task 4 - Hour Calculation

- Create a function called `calculateHours`
- The function accepts one parameter:
    - `hours`: an array of objects containing the properties `day`, `start` and `end` hour, describing the working hours of a single person (see example below)
- The function calculates and returns how many hours (total) this person worked in the week based on the items in the given array
- **Note**: Assume that start is always morning time, end is always afternoon. No overnight shifts to be expected.

    **Example array of Working Hours**
    ```javascript
    const hourTracking = [
        { day: 'Monday', start: 8, end: 17},
        { day: 'Tuesday', start: 9, end: 15},
        { day: 'Wednesday', start: 10, end: 18},
        { day: 'Thursday', start: 7, end: 14},
        { day: 'Friday', start: 6, end: 12},
    ];
    ```
    Call your function and print the return value to the console.

    **Expected Output**
    ```javascript
    > console.log(calculateHours(hourTracking));
    36
    ```

## Task 5 - Classes

- Create a class called `Course` to represent a course at DCI
- Add a constructor to initialize the properties in the given order
- Class properties:
    - `teacher`: a string with the name of the teacher
    - `type`: a string to specify the type of the course. For example, `"web development"`
    - `number`: a number to specify how many students are taking the course
- Class methods:
    - `spaceNeeded()`: calculates and returns a number how big a classroom should be depending on the number of students taking the course and returns that value. Assume that for each student `2m²` are necessary.
        - For a class of 10 students the return value would be `20`
        - For a class of 25 students, the return value would be `50`
    - `details()`: returns a string describing the course, for example: `"This is a web development course taught by John Smith. There are 10 students taking the course."` 
        - Fill in the `teacher`, `type` and `number` from your class properties

- Create an instance of your class, and test the different methods printing their result to the console

    **Example: for an instance with teacher John, type web development and a number of 22 students**
    ```plaintext
    > console.log(course.spaceNeeded());
    44

    > console.log(course.details());
    This is a web development course taught by John. There are 22 students taking the course.
    ```

## Task 6 - Input validation

A PIN is a **P**ersonal **I**dentification **N**umber (as you are used with bank cards and unlocking your mobile phone). Create a `validPin` function that returns `true` if the PIN satisfies all the requirements below or `false` if it does not not.

**Requirements**:
- The pin code must consist of only numerical digits
- The pin code must be 4 digits long
- The pin code's last digit should be even (0, 2, 4, 6, 8)
- The first digit of the pin code should be different from the last one

Call your function with some examples, and print the return values to the console

**Examples**
```javascript
> console.log(validPin("1234"))
true
> console.log(validPin("1235")) // last number should be even
false 
> console.log(validPin("12ww")) // should only consist of numbers
false 
> console.log(validPin("12.4")) // should only consist of numbers
false
> console.log(validPin("-234")) // should only consist of numbers
false
> console.log(validPin("12345")) // should be 4 digits, not 5
false 
> console.log(validPin("2222")) // first and last digits should be different
false 
> console.log(validPin("2224"))
true
```