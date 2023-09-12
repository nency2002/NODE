let data = process.argv

let opr = data[2];
let a = data[3];
let b = data[4];

switch (opr) {
    case "add":
        console.log(Number(a) + Number(b));
        break;

    case "sub":
        console.log(a - b);
        break;

    case "multi":
        console.log(a * b);
        break;

    case "devid":
        console.log(a / b);
        break;

    case "modul":
        console.log(a % b);
        break;
    default:
        break;
}