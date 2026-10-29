
function reverseString(str) {
    return str.split("").reverse().join("");
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log("MANIPULATION DES CHAINES DE CARACTERES");
console.log(reverseString("JavaScript"));
console.log(countCharacters("Hello World"));
console.log(capitalizeWords("hello world"));

console.log("--------------------------------");

function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log("FONCTIONS SUR LES TABLEAUX");
console.log(findMaximum([10, 20, 5, 40]));
console.log(findMinimum([10, 20, 5, 40]));
console.log(sumArray([10, 20, 30, 40]));
console.log(filterArray([1, 2, 3, 4, 5, 6], num => num > 3));

console.log("--------------------------------");

function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        return null;
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

function isPrime(num) {
    if (!Number.isInteger(num) || num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function fibonacci(n) {
    if (!Number.isInteger(n) || n < 0) {
        return [];
    }

    let sequence = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }

    return sequence;
}

console.log("FONCTIONS MATHEMATIQUES");
console.log(factorial(5));
console.log(isPrime(7));
console.log(isPrime(10));
console.log(fibonacci(10));
