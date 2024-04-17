const Sample = require('./models/DataModel');
const sampleData = require('./sample.json');

async function importData() {
  try {
    await Sample.insertMany(sampleData);
    console.log('Data imported successfully');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

module.exports = importData;
