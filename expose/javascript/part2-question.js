
// 2-19
function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2);},
               1000);
    setTimeout(function() {console.log(3);},
               0);
    console.log(4);
}

printNums()

// 2-17
// function modifyArray(array, callback) {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(callback(array[i]));
//     }
//     return newArr;
// }

// function dosSomething(num) {
//     return num * 2;
// }

// console.log(modifyArray([1, 2, 3], dosSomething));


// function discountPrices(prices, discount) {
//     const discounted = [];
//     // const finalPrice = 0;
//     const length = prices.length;

//     for (let i = 0; i < prices.length; i++) {
//         const discountedPrice = prices[i] * (1 - discount)
//         // keep 2 decimals
//         // finalPrice = Math.round(discountedPrice * 100) / 100;
//         discounted.push(discountedPrice);
//     }

//     // console.log(i);
//     // console.log(length)
//     // console.log(discountedPrice);
//     // console.log(finalPrice);
    
//     return discounted;
// }

// // discountPrices([100, 200, 300], 0.5);
// console.log(discountPrices([100, 200, 300], 0.5));