// Золото племени АББА
//
// Главный вождь племени Абба не умеет считать.
// В обмен на одну из его земель вождь другого племени предложил ему выбрать одну из трех куч с золотыми монетами.
// Но вождю племени Абба хочется получить наибольшее количество золотых монет.
// Помогите вождю сделать правильный выбор!
//
//     Входные данные
// В первой строке входного файла INPUT.TXT записаны три натуральных числа через пробел.
// Каждое из чисел не превышает 10100. Числа записаны без ведущих нулей.
//
//     Выходные данные
// В выходной файл OUTPUT.TXT нужно вывести одно целое число — максимальное количество монет, которые может взять вождь.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', input => {
    let numArray = input.split(" ");
    let max = "";
    let maxLength = 0;

    for (let num of numArray) {
        if (num.length > maxLength) {
            maxLength = num.length;
            max = num;
        } else if (num.length === maxLength && +num > +max) {
            max = num;
        }
    }
    console.log(max);
    readline.close();
});

