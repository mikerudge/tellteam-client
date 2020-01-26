const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf8')

exports.getTemplate = function() {
    return template;
};