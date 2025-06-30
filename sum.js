function sum(a, b) {
    // If numbers are not equal, return their sum ahihi
    if (a != b) {
        return a + b;
    }
    return a - b; // If numbers are equal, return their difference
}

function difference(a, b) {
    // If numbers are equal, return their difference
        return a - b;
}

module.exports = { sum, difference };
