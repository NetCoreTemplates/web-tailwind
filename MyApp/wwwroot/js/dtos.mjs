/* Options:
Date: 2023-01-12 17:39:14
Version: 6.51
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//AddServiceStackTypes: True
//AddDocAnnotations: True
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/

"use strict";
export class HelloResponse {
    /** @param {{result?:string}} [init] */
    constructor(init) { Object.assign(this, init); }
    /** @type {string} */
    result;
}
export class Hello {
    /** @param {{name?:string}} [init] */
    constructor(init) { Object.assign(this, init); }
    /** @type {string} */
    name;
    getTypeName() { return 'Hello'; };
    getMethod() { return 'POST'; };
    createResponse() { return new HelloResponse(); };
}

