const dotenv = require('dotenv').config();

module.exports = {
    name: process.env.name || 'Cristian',
    lastname: process.env.lastname || 'Silva',
}