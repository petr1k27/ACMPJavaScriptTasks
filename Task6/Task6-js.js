// Шахматы
// Совсем недавно Вася занялся программированием и решил реализовать собственную программу для игры в шахматы.
// Но у него возникла проблема определения правильности хода конем, который делает пользователь.
// Т.е. если пользователь вводит значение «C7-D5», то программа должна определить это как правильный ход, если же введено «E2-E4»,
// то ход неверный. Также нужно проверить корректность записи ввода: если например, введено «D9-N5»,
// то программа должна определить данную запись как ошибочную. Помогите ему осуществить эту проверку!
//
//     Входные данные
// В единственной строке входного файла INPUT.TXT записан текст хода (непустая строка), который указал пользователь.
// Пользователь не может ввести строку, длиннее 5 символов.
//
//     Выходные данные
// В выходной файл OUTPUT.TXT нужно вывести «YES», если указанный ход конем верный,
// если же запись корректна (в смысле правильности записи координат), но ход невозможен, то нужно вывести «NO».
// Если же координаты не определены или заданы некорректно, то вывести сообщение «ERROR».

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('', input => {
        if (input.length !== 5 || !(/[A-H][1-8]\p{Pd}[A-H][1-8]/gu).test(input)) {
            console.log("ERROR");
        } else {
            console.log(canIMove(findAvailableMoves(input.slice(0, 2)), input.slice(3)));
        }
        readline.close();

    });

    let canIMove = (availableMoves, move) => {
        return availableMoves.includes(move) ? "YES" : "NO";
    }
    let findAvailableMoves = (currentPosition) => {
        let unicode = currentPosition.charCodeAt(0);
        let digitPosition = +currentPosition[1];
        return [[unicode - 2, digitPosition - 1],
            [unicode - 2, digitPosition + 1],
            [unicode - 1, digitPosition - 2],
            [unicode - 1, digitPosition + 2],
            [unicode + 1, digitPosition - 2],
            [unicode + 1, digitPosition + 2],
            [unicode + 2, digitPosition - 1],
            [unicode + 2, digitPosition + 1]]
            .map(([u, d]) => String.fromCharCode(u) + d)
            .filter(move => (/[A-H][1-8]/).test(move));
    }