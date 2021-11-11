/* 
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro y reemplazar:

1. Todos los valores "undefined" en "usuarios" por un string vacío.

2. El nombre de cada "company" debe tener la primer letra en mayúscula.

3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula.

4. Las "companies" deben ordenarse por su total de "user" (orden decreciente).

5. Los "users" de cada "company" deben aparecer en orden alfabético.
*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const { transform } = require('babel-core');
const companies = createAll();

cleanConsole(1, companies);
console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

function reemplaza(companies) {

    if (companies.firstName === undefined && companies.lastName === undefined) {
        return companies.toString();
    } else {
        return companies;
    }

    users.firstName.sort();
    companyNames.sort();

    // transform(code, boo = true) = String {


    //     code = code.toLowerCasa();
    //     let firstName = code.split(" "); // #3
    //     let lastName = code.split(" "); // #3
    //     let name = code.split(" "); // #2

    //     if (todas) {
    //         for (let i in users.firstName) {
    //             users.firstName[i] = users.firstName[i][0].toUpperCase() + users.firstName[i].substr(1);
    //         }
    //     }

    //     if (todas) {
    //         for (let i in lastName) {
    //             lastName[i] = lastName[i][0].toUpperCase() + lastName[i].substr(1);
    //         }
    //     }

    //     if (todas) {
    //         for (let i in name) {
    //             name[i] = name[i][0].toUpperCase() + name[i].substr(1);
    //         }
    //     }

    // }






}