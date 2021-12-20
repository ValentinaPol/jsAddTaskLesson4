//1. Напишите функцию, которая принимает строку и возвращает строку, в которой каждый символ повторяется один раз.

// doubleElement("String") ➞ "SSttrriinngg"

// doubleElement("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleElement("1234!_ ") ➞ "11223344!!__  "


// Все тестовые примеры содержат допустимые строки. Пробелы, специальные символы или цифры также учитываем.

function doubleElement(str) {
    var strResult = '';
    for (var i = 0; i < str.length; i++) {
        strResult += str[i] + str[i];
    }
    return strResult;
}

console.log(doubleElement("String"));
console.log(doubleElement("Hello World!"));
console.log(doubleElement("1234!_ "));




//2. Напишите функцию, которая перемещает все заглавные буквы в начало слова.

// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"



//Сохраняйте исходный относительный порядок букв верхнего и нижнего регистра одинаковым.

function capToFront(str) {
    var strUpper = '';
    var strLower = '';
    for (var i = 0; i < str.length; i++){
        if (str[i] === str[i].toUpperCase()){
            strUpper += str[i];
        } else {
            strLower += str[i];
        }
    }
    return strUpper + strLower;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));



//3. Напишите функцию для замены всех экземпляров символа s1 на символ s2 и наоборот.


// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&") ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9") ➞ "129 985 556 799 888"


function doubleSwap(str, item1, item2){
    var result = [];
    var arrStr = str.split(item1);
    
    for (var i = 0; i < arrStr.length; i++){
        result.push(arrStr[i].split(item2).join(item1));
        
    }
    return result.join(item2);
}
console.log(doubleSwap( "aabbccc", "a", "b"));
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"));
console.log(doubleSwap("128 895 556 788 999", "8", "9"));




//4. Напишите функцию, которая возвращает массив строк, отсортированных по длине в порядке возрастания.


// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

// sortByLength([]) ➞ []


//Строки будут иметь уникальную длину, поэтому не беспокойтесь о сравнении двух строк одинаковой длины.
//Вернуть пустой массив, если входной массив пуст


function sortByLength(arr) {
    var arrResult = arr.sort(compareLength);
    return arrResult;
}

function compareLength (a, b){
    return a.length - b.length
}

console.log (sortByLength(["a", "ccc", "dddd", "bb"]));
console.log (sortByLength(["apple", "pie", "shortcake"]));
console.log (sortByLength(["may", "april", "september", "august"]));
console.log (sortByLength([]));
