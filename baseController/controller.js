const path = require('path');

const directoryPath = path.join(__dirname, '../models');

function getController(name) {
    let model = require(`${directoryPath}/${name}/${name}`);
    return model;
}

module.exports = getController;
