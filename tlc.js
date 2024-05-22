var KEYWORDS = [
    "@PROG",
    "@DECL",
    "@CORPS",
    "CORPS@",
    "PROG@",
    "DECL@",
    "ENTIER",
    "REEL",
    "CARACTERE",
    "TABLEAU",
    "DE",
    "FOR",
    "ECRIRE",
    "IF",
    "THEN",
    "ELSE",
];
var DELIMITERS = [
    ",",
    ";",
    "\\(",
    "\\)",
    "\\[",
    "\\]",
    "\\{",
    "\\}",
];
var ARITHMETIC_OPERATORS = ["ADD", "SOUS", "MULT", "DIV"];
var ASSIGNMENT_OPERATORS = [":=", "\\+\\+", "\\-\\-"];
var COMPARISON_OPERATORS = ["<", "<=", ">", ">=", "==", "<>"];
var LOGICAL_OPERATORS = ["&&", "\\|\\|", "!"];
var IDENTIFIER_REGEX = "%[0-9]+|[a-zA-Z][a-zA-Z0-9]*";
var INTEGER_REGEX = "[0-9]+";
var REAL_REGEX = "\\d+\\.\\d*";
var STRING_REGEX = '"[^"]*"';
var CHARACTER_REGEX = "'.'";
function Lexeme(code) {
    var result = [];
    var regex = new RegExp("(".concat(KEYWORDS.join("|"), "|").concat(DELIMITERS.join("|"), "|").concat(ARITHMETIC_OPERATORS.join("|"), "|").concat(ASSIGNMENT_OPERATORS.join("|"), "|").concat(COMPARISON_OPERATORS.join("|"), "|").concat(LOGICAL_OPERATORS.join("|"), "|").concat(IDENTIFIER_REGEX, "|").concat(INTEGER_REGEX, "|").concat(REAL_REGEX, "|").concat(STRING_REGEX, "|").concat(CHARACTER_REGEX, ")"), "g");
    // loop through the code and match all the lexemes
    var match;
    while ((match = regex.exec(code))) {
        if (match == null) {
            break;
        }
        var token = match[0];
        var value = match[1];
        result.push({ token: token, value: value });
    }
    return result;
}
var code = " \n@PROG  \nEntier x = 2 + 1;\n";
console.log("program start: ");
console.log(Lexeme(code));
