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
