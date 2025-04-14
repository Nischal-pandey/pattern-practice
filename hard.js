
const n = 5;
let str = '';

// Upper Half
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= 2 * n - 1; j++) {
        if (j >= i && j <= 2 * n - i) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}

// Lower Half
for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= 2 * n - 1; j++) {
        if (j >= i && j <= 2 * n - i) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}

console.log(str);