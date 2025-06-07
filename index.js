// index.js
import fs from 'fs';
import antlr4, { CharStreams, CommonTokenStream } from 'antlr4';
import MiniCLexer from './generated/MiniCLexer.js';
import MiniCParser from './generated/MiniCParser.js';
import CustomMiniCVisitor from './CustomMiniCVisitor.js';

import readline from 'readline';

async function main() {
  let input;

  // Intento leer la entrada desde el archivo input.txt de forma sincrónica
  try {
    input = fs.readFileSync('input.txt', 'utf8');
  } catch (err) {
    // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
    input = await leerCadena(); // Simula lectura síncrona
    console.log(input);
  }

  // 1) Convierto la cadena a un CharStream para el lexer
  const inputStream = CharStreams.fromString(input);

  // 2) Creo el Lexer (MiniCLexer) a partir del CharStream
  const lexer = new MiniCLexer(inputStream);

  // 3) Creo el tokenStream a partir del lexer
  const tokenStream = new CommonTokenStream(lexer);

  // 4) Creo el Parser (MiniCParser) a partir del tokenStream
  const parser = new MiniCParser(tokenStream);

  // 5) Invoco la regla raíz 'programa' (en lugar de prog())
  const tree = parser.programa();

  // 6) Verifico si hubo errores de sintaxis
  //    En ANTLR4+JavaScript, los errores se cuentan en parser._syntaxErrors
  if (parser._syntaxErrors > 0) {
    console.error('\nSe encontraron errores de sintaxis en la entrada.');
    process.exit(1);
  } else {
    console.log('\nEntrada MiniC válida sintácticamente.');
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log(`Árbol de derivación: ${cadena_tree}`);
  }

  // 7) Uso el Visitor personalizado para recorrer el árbol y hacer la semántica/traducción
  const visitor = new CustomMiniCVisitor();
  visitor.visit(tree);
}

// Función auxiliar para leer una línea desde la consola si no existe input.txt
function leerCadena() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Ingrese una cadena: ', (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Ejecuto la función principal
main();

