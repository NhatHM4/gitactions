function sum(a, b) {
    if (a === b) {
        // If both numbers are equal, return their sum
        return a + b;
    }
    // If numbers are not equal, return their difference
    return a - b;
}

module.exports = sum;
