// Входные данные
// В единственной строке входного файла INPUT.TXT записаны два натуральных числа через пробел. Значения чисел не превышают 10^9.
//
// Выходные данные
// В единственную строку выходного файла OUTPUT.TXT нужно вывести одно целое число — сумму чисел А и В.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', input => {
    let numbers = input.split(' ');
    console.log(+numbers[0] + +numbers[1])
    readline.close();
});