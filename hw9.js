// function strCount(str, letter) {
//     let arrStr = str.split('');
//     console.log(arrStr);
//     let n = 0;
//     for (let i = 0; i < arrStr.length; i++) {
//         if (arrStr[i] === letter) {
//             n++;
//         }

//     }
//     return n;

// }

// console.log(strCount('Hello', 'o'));


// function squareSum(numbers) {
//     const new_array = numbers.map(x => x ** 2);
//     let n = new_array.reduce((a, b) => a + b, 0);
//     return n;
// }

// console.log(squareSum([]));

// function nearestSq(n) {
//     let nn = Math.sqrt(n);
//     // if (Math.sqrt(n) - = 0
//     if ((Math.sqrt(n) ^ 0) === Math.sqrt(n)) {
//         return n;
//     }
//     else {
//         if (((((Math.sqrt(n) + 1) ^ 0) ** 2) - n) <= (n - ((Math.sqrt(n)) ^ 0) ** 2)) {
//             return ((Math.sqrt(n) + 1) ^ 0) ** 2;
//         }
//         else {
//             return ((Math.sqrt(n)) ^ 0) ** 2;
//         }
//     }

// }

// console.log(nearestSq(111));


// function solution(str) {
//     return str.split('').reverse().join('');

// }

// console.log(solution('hello'));


// function addLength(str) {
//     const new_array = str.split(' ');
//     new_array.forEach((el, index, arr) => {
//         (el + ' ' + el.length);
//         new_array2 = new_array.map(el => el + ' ' + el.length);
//     });
//     return new_array2;
// }

// console.log(addLength('apple ban'));

// function mango(quantity, price) {
//     let quantity1 = quantity;
//     for (i = 0; quantity1 >= 3;) {
//         quantity1 = quantity1 - 3;
//         i++;

//     }

//     quantity < 3 ? total = quantity * price : total = (2 * price) * i + quantity1 * price;

//     return total;
// }


// // console.log(mango(3, 3));
// console.log(mango(3, 3));

// // function mango(quantity, price){
// //     return price * (quantity - Math.floor(quantity / 3));
// //   }

// function litres(time) {
//     return Math.floor(time * 0.5);
// }

// console.log(litres(1.4));

// function invert(array) {
//     return array.map(x => x * -1);
// }


// console.log(invert([1, 2, 3, 4, 5]));


// function powersOfTwo(n) {
//     const arrResult = [];
//     for (; n >= 0; n--) {
//         arrResult.push(Math.pow(2, n));
//     }
//     return arrResult.reverse();
// }


// console.log(powersOfTwo(2));

// function grow(x) {
//     let n = x.reduce((a, b) => a * b);
//     return n;
// }


// console.log(grow([1, 2, 3]));


// const arrNumbers = [34, 26, 356, 12, 9, 5, 10];
// arrNumbers.push('a');
// console.log(arrNumbers);

// const arrNumbers2 = [34, 26, 356, 12, 9, 5, 10];
// arrNumbers2.concat('a');
// console.log(arrNumbers2);    

// console.log(arrNumbers2.concat('a'));
// person — это объект
const person = {
    // name, family, age — это свойства, или ключи, объекта person
    name: 'Анатолий',
    age: 29,
    // Объекты могут быть вложенными, в ключе family лежит объект со свойствами mother, father и children
    family: {
       mother: 'Елена',
       father: 'Антон',
       // В ключах объекта могут лежать массивы, в ключе children лежат дети Анатолия
       children: ['Варвара', 'Леонид']
   } 
 };
 
 // Так мы получаем значение свойства объекта
 console.log(person.name); // => Анатолий
 console.log(person.family.father); // => Антон
 
 // Так мы можем изменить значение свойства в объекте
 person.name = 'Иван'
 console.log(person.name); // => Иван
 
 
 // Так мы вызываем метод join у массива children
 console.log(person.family.children.join(' и ')); // => Варвара и Леонид
 
 // Так мы подставляем значения в строку с помощью шаблонных строк
 console.log(`Имя: ${person.name}. Дети: ${person.family.children.join(' и ')}`); // => Имя: Иван. Дети: Варвара и Леонид
 
 person.family.children.push("Сергей");
 console.log(`Дети: ${person.family.children.join(', ')}.`);

