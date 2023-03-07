# Array Method .sort
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


#### 1. Sort in decreasing order
* create a variable named `arr` and assign an array of numbers to it
* Write code that sorts that array in descending order (highest to lowest)
* Print the sorted array to the console

```js 
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in descending order

console.log( arr ); // 8, 5, 2, 1, -10
``` 

#### 2. We have an array of strings `array`. We’d like to have a sorted copy of it, but keep `array` unmodified.

* Create a function `copySorted(arr)` that returns such a copy.

```js
let array = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(array);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Sort `arr`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `arr` should be sorted in descending order  |

### 2. copySorted function

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `copySorted` function should return a sorted copy of the passed array |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Data-Structure-ArrayMethod-sort)


[//]: # (autograding info end)