// Custom reduce method
Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;

    // If no initial value is provided, use first element as accumulator
    if (accumulator === undefined) {
        if (this.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = this[0];
    }

    // Iterate over array elements
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

// Example usage

// Summing numbers
const numbers = [1, 2, 3, 4];
const sum = numbers.customReduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 10

// Flattening an array of arrays
const arrays = [[0, 1], [2, 3], [4, 5]];
const flattened = arrays.customReduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);
console.log(flattened); // Output: [0, 1, 2, 3, 4, 5]

// String concatenation
const words = ['The', 'quick', 'brown', 'fox'];
const sentence = words.customReduce((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
});
console.log(sentence); // Output: "The quick brown fox"

// Counting occurrences
const votes = ['yes', 'no', 'yes', 'yes', 'no'];
const voteCount = votes.customReduce((tally, vote) => {
    tally[vote] = (tally[vote] || 0) + 1;
    return tally;
}, {});
console.log(voteCount); // Output: { yes: 3, no: 2 }