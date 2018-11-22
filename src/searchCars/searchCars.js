const fs = require('fs');
const path = require('path');

const search = (value) => {
    var jsonPath = path.join(__dirname, 'cars.json');
    var file = fs.readFileSync(jsonPath);
    var parsedFile = JSON.parse(file);
    value = value.toLowerCase();
    var result = parsedFile.filter(el => el.toLowerCase().includes(value));
    result = result.sort((a,b) => (a.indexOf(value) - b.indexOf(value))).slice(0, 5);
    return result;
};

module.exports = search;