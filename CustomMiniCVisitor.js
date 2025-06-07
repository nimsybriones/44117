// CustomMiniCVisitor.js
import MiniCVisitor from './generated/MiniCVisitor.js';

export default class CustomMiniCVisitor extends MiniCVisitor {
  constructor() {
    super();
    this.jsCode = '';            // 1) Acumulador
  }

  // 2) Al entrar al programa, recorremos declaraciones y luego mostramos el JS
  visitPrograma(ctx) {
    for (const decls of ctx.declaraciones()) {
      this.visit(decls);
      this.jsCode += '\n';       // separa funciones
    }
    console.log('\n=== Código JavaScript generado ===\n');
    console.log(this.jsCode);
    return this.jsCode;
  }

  // 3) Para cada declaración (label #unaDeclaracion)
  visitUnaDeclaracion(ctx) {
    this.visit(ctx.declaracion());
    return null;
  }

  // 4) Declaración: firma + cuerpo + cierre
  visitDeclaracion(ctx) {
    const name = ctx.identificador().getText();
    const params = ctx
      .parametros()
      .parametro()
      .map(p => p.identificador().getText())
      .join(', ');
    this.jsCode += `function ${name}(${params}) {\n`;
    this.visit(ctx.cuerpo());
    this.jsCode += `}\n`;
    return null;
  }

  // 5) Cuerpo: recorre instrucciones
  visitCuerpo(ctx) {
    for (const instr of ctx.instruccion()) {
      this.visit(instr);
    }
    return null;
  }

  // 6) Instrucción → retorno
  visitInstruccion(ctx) {
    return this.visit(ctx.retorno());
  }

  // 7) Retorno: concatena línea de return
  visitRetorno(ctx) {
    const expr = this.visit(ctx.expresion());
    this.jsCode += `  return ${expr};\n`;
    return expr;
  }

  // 8) Expresiones aritméticas
  visitSuma(ctx) {
    const l = this.visit(ctx.expresion());
    const r = this.visit(ctx.termino());
    return `(${l} + ${r})`;
  }
  visitResta(ctx) {
    const l = this.visit(ctx.expresion());
    const r = this.visit(ctx.termino());
    return `(${l} - ${r})`;
  }
  visitSoloTermino(ctx) {
    return this.visit(ctx.termino());
  }
  visitMult(ctx) {
    const l = this.visit(ctx.termino());
    const r = this.visit(ctx.factor());
    return `(${l} * ${r})`;
  }
  visitDiv(ctx) {
    const l = this.visit(ctx.termino());
    const r = this.visit(ctx.factor());
    return `(${l} / ${r})`;
  }
  visitSoloFactor(ctx) {
    return this.visit(ctx.factor());
  }

  // 9) Factores
  visitParens(ctx) {
    return `(${this.visit(ctx.expresion())})`;
  }
  visitLiteralEntero(ctx) {
    return ctx.ENTERO().getText();
  }
  visitIdFactor(ctx) {
    return ctx.IDENT().getText();
  }
}
