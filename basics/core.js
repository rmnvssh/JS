//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return n === (n ^ 0);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = []
    for (let i = 2; i <= 20; i++) {
        if (i % 2 == 0) {
            arr.push(i)
        }
    }
    return arr
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 1) {
        return 1;
    }
    return recSumTo(n - 1) + n; 
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n === 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let fib1 = 0, fib2 = 1;
    for (let i = 1; i < n; i++) {
        let tmp = fib2;
        fib2 = fib1 + fib2;
        fib1 = tmp;
    }
    return fib2;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
