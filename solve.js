const fs = require("fs");
const file1 = "input.json";
const file2 = "input1.json";
function decode(base, value) {
    return parseInt(value, parseInt(base));
}
function computeC(filename) {
    const json = JSON.parse(fs.readFileSync(filename, "utf8"));
    let decoded = {};
    for (const key in json) {
        if (/^\d+$/.test(key)) {     // numeric keys only
            decoded[`y${key}`] = decode(json[key].base, json[key].value);
        }
    }
    let C = Object.values(decoded).reduce((a, b) => a + b, 0);
    return { decoded, C };
}
const result1 = computeC(file1);
const result2 = computeC(file2);
console.log("C value for FirstCase =", result1.C);
console.log("C value for SecondCase =", result2.C);




