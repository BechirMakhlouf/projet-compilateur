interface Lexeme {
  token: string;
  value: string;
}

const KEYWORDS: string[] = [ "@PROG", "@DECL", "@CORPS", "CORPS@", "PROG@", "DECL@", "ENTIER", "REEL", "CARACTERE", "TABLEAU", "DE", "FOR", "ECRIRE", "IF", "THEN", "ELSE", ]; 
const DELIMITERS: string[] = [ ",", ";", "\\(", "\\)", "\\[", "\\]", "\\{", "\\}", ];
const ARITHMETIC_OPERATORS = ["ADD", "SOUS", "MULT", "DIV"];
const ASSIGNMENT_OPERATORS = [":=", "\\+\\+", "\\-\\-"];
const COMPARISON_OPERATORS = ["<", "<=", ">", ">=", "==", "<>"];
const LOGICAL_OPERATORS = ["&&", "\\|\\|", "!"];
const IDENTIFIER_REGEX = "%[0-9]+|[a-zA-Z][a-zA-Z0-9]*";
const INTEGER_REGEX = "[0-9]+";
const REAL_REGEX = "\\d+\\.\\d*";
const STRING_REGEX = '"[^"]*"';
const CHARACTER_REGEX = "'.'";

const KEYWORDS_REGEX = new RegExp(`(${KEYWORDS.join("|")})`, "g");
const DELIMITERS_REGEX = new RegExp(`(${DELIMITERS.join("|")})`, "g");
const ARITHMETIC_OPERATORS_REGEX = new RegExp(`(${ARITHMETIC_OPERATORS.join("|")})`, "g");
const ASSIGNMENT_OPERATORS_REGEX = new RegExp(`(${ASSIGNMENT_OPERATORS.join("|")})`, "g");
const COMPARISON_OPERATORS_REGEX = new RegExp(`(${COMPARISON_OPERATORS.join("|")})`, "g");
const LOGICAL_OPERATORS_REGEX = new RegExp(`(${LOGICAL_OPERATORS.join("|")})`, "g");
const IDENTIFIER_REGEX_REGEX = new RegExp(`(${IDENTIFIER_REGEX})`, "g");
const INTEGER_REGEX_REGEX = new RegExp(`(${INTEGER_REGEX})`, "g");
const REAL_REGEX_REGEX = new RegExp(`(${REAL_REGEX})`, "g");
const CHARACTER_REGEX_REGEX = new RegExp(`(${CHARACTER_REGEX})`, "g");

function Lexeme(code: string): Lexeme[] {
  const result: Lexeme[] = [];

  const regex = new RegExp(
    `(${KEYWORDS.join("|")}|${DELIMITERS.join("|")}|${ARITHMETIC_OPERATORS.join(
      "|",
    )}|${ASSIGNMENT_OPERATORS.join("|")}|${COMPARISON_OPERATORS.join(
      "|",
    )}|${LOGICAL_OPERATORS.join("|")}|${IDENTIFIER_REGEX}|${INTEGER_REGEX}|${REAL_REGEX}|${STRING_REGEX}|${CHARACTER_REGEX})`,
    "g",
  );

  // loop through the code and match all the lexemes
  let match: RegExpExecArray | null;
  while ((match = regex.exec(code))) {
    if (match == null) {
      break;
    }
    if (KEYWORDS_REGEX.test(match[0])) {
      result.push({ token: match[0], value: match[0] });
      continue;
    } else if (DELIMITERS_REGEX.test(match[0])) {
      result.push({ token: "DELIMITERS_", value: match[0] });
    } else if (ARITHMETIC_OPERATORS_REGEX.test(match[0])) {
      result.push({ token: "ARITHMETIC_OPERATOR", value: match[0] });
    } else if (ASSIGNMENT_OPERATORS_REGEX.test(match[0])) {
      result.push({ token: "ASSIGNMENT_OPERATOR", value: match[0] });
    } else if (COMPARISON_OPERATORS_REGEX.test(match[0])) {
      result.push({ token: "COMPARISON_OPERATOR", value: match[0] });
    } else if (LOGICAL_OPERATORS_REGEX.test(match[0])) {
      result.push({ token: "LOGICAL_OPERATOR", value: match[0] });
    } else if (IDENTIFIER_REGEX_REGEX.test(match[0])) {
      result.push({ token: "IDENTIFIER", value: match[0] });
    } else if (INTEGER_REGEX_REGEX.test(match[0])) {
      result.push({ token: "INTEGER", value: match[0] });
    } else if (REAL_REGEX_REGEX.test(match[0])) {
      result.push({ token: "REAL", value: match[0] });
    } else if (CHARACTER_REGEX_REGEX.test(match[0])) {
      result.push({ token: "CHARACTER", value: match[0] });
    } else {
      result.push({ token: "STRING", value: match[0] });
    }
  
  }
  return result;
}

const code = ` 
@PROG  
Entier x = 2 ADD 1;
`;

console.log("program start: ")
console.log(Lexeme(code));
