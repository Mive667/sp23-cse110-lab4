# Part2

1. 3
2. 150
3. 150
4. [ 50, 100, 150 ]
   `discountPries(prices, discount)` takes in an array of numbers(prices) and a discount, iterating all prices in the array and calculating the discounted prices. A new array with all discounted prices in it will be returned.

5. ReferenceError: i is not defined
   `i` is declared inside the `for` block, so it is invisible outside the `for` block.

6. ReferenceError: discountedPrice is not defined
   `discountedPrice` is declared inside the `for` block, so it is invisible outside the `for` block.

7. line 14 prints out 150.
   `finalPrice` is declared inside the function, so it can be processed in `for` loop, since `for` loop
   is also inside the function block. the `console.log(finalPrice)` is called inside the function, so the
   `finalPrice` variable is visible.

8. [ 50, 100, 150 ]
   `discounted` and `finalPrice` are all declared inside the function, and they can be processed by `for` loop
   which is also inside the function, the function will work properly.

9. ReferenceError: i is not defined
    `i` is declared inside the `for` block, so it is invisible outside the `for` block.

10. 3
11. [ 50, 100, 150 ]
    `discountPries(prices, discount)` takes in an array of numbers(prices) and a discount, iterating all prices in the array and calculating the discounted prices. A new array with all discounted prices in it will be returned.

12.  

- A `student.name` 
- B `student["Grad Year"]`
- C `student.greeting()`
- D `student["Favorite Teacher"].name`
- E `student.courseLoad[0]`

13. 

- A `"32"`
  number`2` is converted to string and `'3'` and `'2'` are concatenated.
- B `1` 
  string`'3'` is parsed to number `3`, and the result of mathematical operation is `3 - 2 = 1`
- C `3`
  `null` is parsed to number `0` and `3 + 0 = 3`
- D `"3null"`
  `null` is parsed to string `"null"` and `'3'` will join `"null"` to be a new string `"3null"`
- E `4`
  `true` is parsed to number `1` and `1 + 3 = 4`
- F `0`
  both `false` and `null` are parsed to number `0` and do mathematical operation `0 + 0 = 0`
- G `NaN`
  `'3'` is parsed to number `3`, and `undefined` is parsed to `NaN`. Any operation with `NaN` turns out to be `NaN`
- H `NaN`
  same as G.

14. 

- A `true`
  `'2'` is parsed to number `2` and `2 > 1` return `true`
- B `false`
  this is seen as a comparison of two string, since the first character `'2'` > `'1'`, the expression return `false`
- C `true`
  `'2'` is parsed to number `2` and `2 == 2` return `true`
- D `false`
  Strict equality operator check the equality without type conversion. Since `2` and  `'2'` come from different type, the expression return `false`
- E `false`
  `true` is parsed to number `1` and `1` does not equal to `2`.
- F `true`
  `Boolean(2)` return `true` and `true === true` return `true`

15. when faced with comparison of data from different type, `==` will convert variable's types (based on some rules) to conform the type and do comparison later.
    
    whereas `===` do comparison without any type conversion

16. [part2-question16.js](./part2-question16.js)

17. `[ 2, 4, 6 ]`
    An array`[1,2,3]` and function`doSomething` are passed as two arguments into function `modifyArray`. Inside the `modifyArray`, every numbers in `[1,2,3]` is modified by the 2nd argument `doSomething`, and a new array is returned.

18. [part2-question18.js](./part2-question18.js)

19. 

``` JavaScript
1
4
3
2
```