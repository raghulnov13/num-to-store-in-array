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
