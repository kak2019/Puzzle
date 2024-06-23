// 定义摩斯码字典
const morseCodeDict = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----',
    ' ': '/',     '.': '.-.-.-','?': '..--..',',': '--..--',
    ';': '-.-.-.',':': '---...',"'": '.----.','!': '-.-.--',
    '-': '-....-','_': '..--.-','"': '.-..-.','(': '-.--.',
    ')': '-.--.-','=': '-...-', '+': '.-.-.', '@': '.--.-.',
    '&': '.-...',
};

// 将文本转换为摩斯码的函数
function textToMorseCode(text) {
    // 将文本转换为大写以匹配字典中的键
    text = text.toUpperCase();
    let morseCode = "";

    // 遍历文本中的每个字符，并从字典中查找对应的摩斯码
    for (let char of text) {
        if (morseCodeDict[char]) {
            morseCode += morseCodeDict[char] + '/';
        } else {
            // 如果字符不在字典中，则添加一个错误标记
            morseCode += '<unknown> ';
        }
    }

    return morseCode.trim();
}

// 测试函数
console.log(textToMorseCode("Hello World!"));
// 反转字典以将摩斯码映射回文本
const reverseMorseCodeDict = Object.fromEntries(
    Object.entries(morseCodeDict).map(([letter, code]) => [code, letter])
);

// 将摩斯码转换为文本的函数
function morseCodeToText(morseCode) {
    // 分割摩斯码字符串成单独的摩斯码单元
    const codes = morseCode.split('/');
    let text = "";

    // 遍历摩斯码单元并从反向字典中查找对应的字符
    for (let code of codes) {
        if (reverseMorseCodeDict[code]) {
            text += reverseMorseCodeDict[code];
        } else {
            // 如果摩斯码不在字典中，则添加一个错误标记
            text += '?';
        }
    }

    return text;
}

// 测试函数
console.log(morseCodeToText(textToMorseCode("Hello World!")));
export { textToMorseCode, morseCodeToText };