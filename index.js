// DB
const db = require('./db/index');

const data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA',
    population: '4 mdd',
    presidente: 'Markoz peña mendez',
    color: '#000',
    food: 'pizza'
};

db.collection('person').doc('Mark').set(data);

module.exports = (req, res) => {
    res.end('<h1>Hi !</h1>')
}
