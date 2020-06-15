'use strict'


function removeLastChar(string) {
    return string.substring(0, string.length - 1);
}


function isSign(key) {
    var signs = ['a', 'b', 'c', 'd', 'e', 'f',
        'v', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'u', 'r', 's', 't', 'w', 'x', 'y', 'z', 't', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '1',
        '2', '3', '4', '5', '6', '7', '8', '9', '0','Q','W','E','T','Y','U','I','O','P',
    'A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',
    'ת', 'ש', 'ר', 'ק', 'פ', 'ל', 'ע', 'כ', 'י','ט','ח','ז','ו','ה','ד','ג','ב','א','ש', 'ר', 'ק', 'פ', 'נ', 'ע',
    'ת', 'ש', 'ר', 'ק', 'מ', 'ץ', 'ך', 'ף',];
    var check = signs.find(function (sign) {
        return key === sign;
    })
    if (check) return true;
    return false
}