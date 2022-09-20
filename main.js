let email = "ravanth398406@gmail.com";

let a = email.replace(/[^0-9]/g,"");
console.log(a);
let b =a.split("");
console.log(b);

for (let i = 0; i < b.length; i++) {
    if (b[i] % 2 === 0) {
        console.log(b[i]);
    }
}

var details="raghul1345987";
var num = details.replace(/[^0-9]/g,"");
var str = num.split("");

for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 !== 0) {
        console.log(str[i]);
    }
}