// methods dom 
 
//  documnet.getelementbyid()
//  document.getelementsbuclass()
//  tag name 
//  .queryselector
//  .querselectorAll

const n = 5;
let str = '';

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === i || j === n - i + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}

console.log(str);