// const re5 = /M[rs]\. [A-Z][a-z][a-z][a-z]/g;
const re5 = /M[rs]\. [A-Z][a-z]{3,}/g;

const re = /\b[0-9]\b|\b[1-9][0-9]\b|100\b/g;
const re = / \d | [1-9] \d | 100 /g;

// const re2 = /\(?[0-9]{3}[\) -]?[0-9]{4}/g
const re2 = /\(?\d{3}[\W]?\d{4}/g;
