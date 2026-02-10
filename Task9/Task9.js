// Петя успевает по математике лучше всех в классе, поэтому учитель задал ему сложное домашнее задание, в котором нужно в заданном наборе целых чисел найти сумму всех положительных элементов, затем найти где в заданной последовательности находятся максимальный и минимальный элемент и вычислить произведение чисел, расположенных в этой последовательности между ними. Так же известно, что минимальный и максимальный элемент встречаются в заданном множестве чисел только один раз и не являются соседними. Поскольку задач такого рода учитель дал Пете около ста, то Петя как сильный программист смог написать программу, которая по заданному набору чисел самостоятельно находит решение. А Вам слабо?
//
//     Входные данные
// В первой строке входного файла INPUT.TXT записано единственное число N – количество элементов массива. Вторая строка содержит N целых чисел, представляющих заданный массив. Все элементы массива разделены пробелом. Каждое из чисел во входном файле, в том числе и N, не превышает 102 по абсолютной величине.
//
//     Выходные данные
// В единственную строку выходного файла OUTPUT.TXT нужно вывести два числа, разделенных пробелом: сумму положительных элементов и произведение чисел, расположенных между минимальным и максимальным элементами. Значения суммы и произведения не превышают по модулю 3*104.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let arrayLength = 0;
let elements = "";

readline.question('', length => {
    arrayLength = Number.parseInt(length);

    readline.question('', input => {
        elements = input.split(" ").map(element => Number.parseInt(element));

        function findBetweenMinMaxProduct(elements) {
            let minPosition = 0;
            let maxPosition = 0;
            let product = 1;

            for (let i = 1; i < elements.length; i++) {
                if (elements[i] < elements[minPosition]) {
                    minPosition = i;
                }
                if (elements[i] > elements[maxPosition]) {
                    maxPosition = i;
                }
            }

            if (minPosition > maxPosition) {
                [minPosition, maxPosition] = [maxPosition, minPosition];
            }
            for (let i = minPosition + 1; i < maxPosition; i++) {
                product *= elements[i];
            }
            return product;
        }

        const sum = elements.reduce(
            (acc, n) => n > 0 ? acc + n : acc,
            0
        );
        console.log(sum, findBetweenMinMaxProduct(elements));
        readline.close();
    });

});


