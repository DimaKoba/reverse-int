module.exports = function reverse (n) {
    let x = n < 0 ? n * -1 : n
    let arr = Number(String(x).split('').reverse().join(''));
    return arr;
}
