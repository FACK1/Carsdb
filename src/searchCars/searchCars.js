const fs = require('fs');
const path = require('path');

const search = (value) => {
    const jsonPath = path.join(__dirname, 'cars.json');
    const file = fs.readFileSync(jsonPath);
    const parsedFile = JSON.parse(file);
    value = value.toLowerCase();
    let result = parsedFile.filter(el => el.toLowerCase().includes(value));
    result = result.sort((a,b) => (a.indexOf(value) - b.indexOf(value))).slice(0, 5);
    return result;
};

module.exports = search;