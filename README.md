Version 0.0.1:

Este es un template inicial para proyectos typescript nodejs usando express

Dependencias a instalar:

1. @types/express
2. dotenv
3. express
4. ts-node

Dependencias de desarrollo 

1. @commitlint/config-conventional
2. @types/jest
3. @typescript-eslint/eslint-plugin
4. @typescript-eslint/parser
5. commitlint
6. eslint
7. husky
8. jest
9. nodemon
10. ts-jest
11. typescript


Configuracion de typescript

1. Crear archivo tsconfig.json
2. Configurar tsconfig.json o usar el comando "npx tsc --init"
3. Agregar al fichero package.json
"scripts": {
   "build": "tsc --build tsconfig.json",
   "build:watch": "tsc --build tsconfig.json --watch"
}

Ejecutamos "npm run build"

4. Creamos el archivo en la raiz del proyecto el archivo jest.config.js

roots: apunta a la carpeta donde se van a realizar las pruebas

testMatch: formato y nombre de los archivos a realizar las pruebas

transform: extension de los archivos a los que se les realiza pruebas

collectCoverageFrom: Lista de los archivos admitidos y cuales no

globals: Configuracion global que especifica las normas typescript con las cuales se realizas las pruebas

Ejecucion de test: "jest --coverage" "npm run test"

Configuracion ESLint

Se ejecuta el siguiente comandos "npx eslint --init"

Estas son las preguntas a responder para establecer las normas de ESLint

1. How would you like to use ESLint?
To check syntax, find problems, and enforce code style
2. What type of modules does your project use?
JavaScript modules (import/export)
3. Which framework does your project use?
None of these
4. Does your project use TypeScript?
Yes
5. Where does your code run? (Seleccionar son la barra espaciadora)
Node
6. How would you like to define a style for your project?
Answer questions about your style
7. What format do you want your config file to be in?
JavaScript
8. What style of indentation do you use?
Spaces
9. What quotes do you use for strings?
Single
10. What line endings do you use?
Unix
11. Do you require semicolons?
Yes

