# 44117 – Analizador Mini-C

Proyecto de analizador sintáctico Mini-C con ANTLR4 y Node.js.

## Estructura del repositorio

- `generated/`            – Artefactos ANTLR4 generados (JS, .tokens)  
- `node_modules/`         – Dependencias npm  
- `antlr-4.13.2-complete.jar`  
- `CustomMiniCVisitor.js`  
- `index.js`              – Punto de entrada Node.js  
- `MiniC.g4`              – Gramática Mini-C  
- `input.txt`             – Ejemplo por defecto (válido)  
- `ejemplos/`             – 4 archivos de prueba  
- `package.json`  
- `package-lock.json`  
- `README.md`             – Este documento  

## Requisitos

- Java 11+  
- Node.js 14+  

## Instrucciones de uso

1. **Instalar dependencias**  
   ```bash
   npm install
