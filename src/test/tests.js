const test = require('tape');
const searchCars = require('../searchCars/searchCars');



test('tape working', (t) => {
    const actual = 5;
    const expected = 5;
    t.equal(actual, expected, 'acctual and expected is not 5!');
    t.end();
});

test('try search for 1 result', (t) => {
    const actual = searchCars('Abbot');
    const expected = ["Abbott-Detroit"];
    t.deepEqual(actual, expected, 'actual and expected is not 5!');
    t.end();
});

test('check limiting to first 5 elements', (t) => {
    const actual = searchCars('ba');
    const expected = ['BAC', 'Baojun', 'BAIC Motor', 'JBA Motors', 'Abadal'];
    t.deepEqual(actual, expected, 'expected : ["BAC", "Baojun", "BAIC Motor", "Bentley", "Berkeley"]');
    t.end();
});