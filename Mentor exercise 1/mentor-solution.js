function area(l1, l2) {
    return l1 * l2;
}

function crazySum(x, y) {
    return x == y ? (x + y) * 3 : x + y;
}

function crazyDiff(x) {
    return x > 19 ? (x - 19) * 3 : x - 19;
}

function boundary(N) {
    return (N >= 20 && N <= 100) || N === 400 ? true : false;
}

function strivify(s) {
    return s.slice(0, 6) === "Strive" ? s : "Strive " + s;
}

function check3and7(x) {
    // positive check?
    return x % 3 === 0 || x % 7 === 0 ? true : false;
}

function reverseString(s) {
    return s.split("").reverse().join("");
}

function upperFirst(s) {
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

function cutString(s) {
    return s.slice(1, -1);
}

function giveMeRandom(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 11) + 0);
    }
    return arr;
}