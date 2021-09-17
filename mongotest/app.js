const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const circulationRepo = require('./repos/circulationRepo');
const data = require('./circulation.json');

const url = 'mongodb://localhost:27017';
const dbName = 'circulation';

async function main() {
    const client = new MongoClient(url);
   try {
    await client.connect();

    const results = await  circulationRepo.loadData(data);
   assert.equal(data.length, results.insertedCount);

   const getData = await circulationRepo.get();
   assert.equal(data.length, getData.length);

   const filterData = await circulationRepo.get({Newspaper: getData[4].Newspaper});
   assert.deepEqual(filterData[0], getData[4]);

   const limitData = await circulationRepo.get({}, 3);
   assert.equal(limitData.length, 3);

   const id = getData[4]._id.toString();
   const byId = await circulationRepo.getById(id);
   assert.deepEqual(byId, getData[4]);

   const newItem = {
    "Newspaper": "can kao xiao xi",
    "Daily Circulation, 2004": 1,
    "Daily Circulation, 2013": 2,
    "Change in Daily Circulation, 2004-2013": 11,
    "Pulitzer Prize Winners and Finalists, 1990-2003": 0,
    "Pulitzer Prize Winners and Finalists, 2004-2014": 0,
    "Pulitzer Prize Winners and Finalists, 1990-2014": 0
};
 const addItem = await circulationRepo.add(newItem);
 assert(addItem.insertedId);

 const uItem = {
    "Newspaper": "my new paper",
    "Daily Circulation, 2004": 1,
    "Daily Circulation, 2013": 2,
    "Change in Daily Circulation, 2004-2013": 11,
    "Pulitzer Prize Winners and Finalists, 1990-2003": 0,
    "Pulitzer Prize Winners and Finalists, 2004-2014": 0,
    "Pulitzer Prize Winners and Finalists, 1990-2014": 0
};
 const updateItem = await circulationRepo.update(addItem.insertedId, uItem);
 assert.equal(updateItem.Newspaper, 'can kao xiao xi');

 const removeItem = await circulationRepo.remove(addItem.insertedId);
 assert(removeItem);

 const avg = await circulationRepo.averageFinalList();
 console.log(avg);

 const avgbyChange = await circulationRepo.averageFinalListByChange();
 console.log(avgbyChange);



  //console.log(results.insertedCount);

    //const admin = client.db(dbName).admin();
    //console.log( await admin.serverStatus());
    //console.log( await admin.listDatabases());
    //await client.db(dbName).dropDatabase();
   } catch(error) {
       console.log(error);
   } finally {
    await client.db(dbName).dropDatabase();
    client.close();
   }
}

//main().then(console.log).catch(console.error).finally(()=> client.close());
main();