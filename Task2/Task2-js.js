// Требуется посчитать сумму целых чисел, расположенных между числами 1 и N включительно.
//
//  Входные данные
// В единственной строке входного файла INPUT.TXT записано единственное целое число N, не превышающее по абсолютной величине 10^4.
//
// Выходные данные
// В единственную строку выходного файла OUTPUT.TXT нужно вывести одно целое число — сумму чисел, расположенных между 1 и N включительно.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', N => {
    console.log(N > 0 ? ((1 + +N) * N) / 2 : N < 0 ? -(((1 + Math.abs(N)) * Math.abs(N) / 2) - 1) : 1);
    readline.close();
});