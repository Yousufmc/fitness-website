<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A:`{}`

<i>Explanation:
Despite the misspelling of greeting as greetign, the code will not produce a ReferenceError. This is because JavaScript will interpret greetign as a new variable and assign an empty object {} to it. Consequently, the console.log(greetign); statement will output {}, which is the correct answer. However, it is important to note that the variable greeting remains undefined because it was never assigned a value.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C:`"12"`

<i>Explanation:
When a number and a string are used together in an addition operation, JavaScript converts the number to a string and performs string concatenation. So in this case, 1 is converted to "1", and then concatenated with "2" to produce the result "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>Explanation:
In this code, the value of food[0] (which is "🍕") is assigned to info.favoriteFood. After that, info.favoriteFood is reassigned to "🍝". However, this reassignment does not affect the original food array, as the string "🍕" is a primitive value and is passed by value, not by reference. So, the original food array remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>Explanation:
In JavaScript, if a function is called with fewer arguments than the function expects, the missing arguments will be assigned the value undefined. So in this case, since sayHi is called without any arguments, name will be undefined, and the output will be "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  C: 3

<i>Explanation:
The forEach function iterates through each element in the nums array. The if (num) condition checks if the current num is truthy. Since 0 is falsy in JavaScript, it will not pass the condition. For the other elements in the array (1, 2, and 3), the condition will pass and count will be incremented by 1 for each of these elements. So, the final value of count will be 3.</i>

</p>
</details>
