//1. Створити новий масив на 10 елементів з довільними числами.✔️
const newArr = [51, NaN, 337, undefined, 876, 38, "Яблуко", 495, null, 154];
//2. Написати скрипт для пошуку суми елементів масиву✔️
let sum = 0;
for (i = 0; newArr.length > i; i++) {
  if (typeof newArr[i] === "number" && newArr[i]) {
    sum = sum + newArr[i];
  }
}
console.log("Сума елементів масиву:", sum);
// 3. Написати скрипт, який буде шукати мінімальне та максимальне значення елементів масиву.✔️
let min = newArr[0];
let max = newArr[0];
for (i = 0; newArr.length > i; i++) {
  if (typeof newArr[i] === "number") {
    if (min > newArr[i]) {
      min = newArr[i];
    } else if (max < newArr[i]) {
      max = newArr[i];
    }
  }
}
console.log("Мінімальне значення масиву:", min);
console.log("Максимальне значення масиву:", max);
// 4. В пунктах 2 та 3 потрібно робити перевірку на тип елементу масиву і не брати до уваги елементи які не є числами✔️
// 5. Написати скрипт який виведе наступне:✔️

// #

// ##

// ###

// ####

// #####

let grille = "#";
for (i = 0; i < 5; i++) {
  console.log(grille);
  grille = grille + "#";
}
