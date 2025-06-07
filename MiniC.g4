// MiniC.g4
grammar MiniC;

// === PARSER RULES ===

programa
    : declaraciones* EOF
    ;

declaraciones
    : declaracion SEMI                # unaDeclaracion
    | declaraciones declaracion SEMI   # variasDeclaraciones
    ;

declaracion
    : tipo identificador LPAREN parametros RPAREN LBRACE cuerpo RBRACE
    ;

tipo
    : INT_TYPE    // antes 'int'
    | FLOAT_TYPE  // antes 'float'
    | CHAR_TYPE   // antes 'char'
    ;

identificador
    : IDENT
    ;

parametros
    :                             # sinParametros
    | parametro (COMMA parametro)* # listaDeParametros
    ;

parametro
    : tipo identificador
    ;

cuerpo
    : instruccion*
    ;

instruccion
    : retorno
    ;

retorno
    : RETURN expresion SEMI
    ;

expresion
    : expresion ADD termino       # suma
    | expresion SUB termino       # resta
    | termino                     # soloTermino
    ;

termino
    : termino MUL factor          # mult
    | termino DIV factor          # div
    | factor                      # soloFactor
    ;

factor
    : LPAREN expresion RPAREN     # parens
    | ENTERO                      # literalEntero
    | IDENT                       # idFactor
    ;

// === LEXER RULES ===

// Keywords para tipos:
INT_TYPE   : 'int' ;
FLOAT_TYPE : 'float' ;
CHAR_TYPE  : 'char' ;

// Keyword "return":
RETURN     : 'return' ;

// Identificador y literales:
IDENT      : [a-zA-Z][a-zA-Z0-9]* ;
ENTERO     : [0-9]+ ;

// Símbolos y operadores:
MUL        : '*' ;
DIV        : '/' ;
ADD        : '+' ;
SUB        : '-' ;
LPAREN     : '(' ;
RPAREN     : ')' ;
LBRACE     : '{' ;
RBRACE     : '}' ;
COMMA      : ',' ;
SEMI       : ';' ;

// Espacios en blanco y saltos de línea
WS         : [ \t\r\n]+ -> skip ;
