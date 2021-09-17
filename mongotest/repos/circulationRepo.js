const { MongoClient, ObjectId } = require('mongodb');

function circulationRepo() {
    const url = 'mongodb://localhost:27017';
    const dbName = 'circulation';

    function get(query, limit) {
        return new Promise( async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                    await client.connect();
                    const db = client.db(dbName);
                    let items = db.collection('newspaper').find(query);
                    if (limit > 0 ) {
                        items = items.limit(limit);
                    }
                    resolve(await items.toArray());
                    client.close();
            } catch(error){
                reject(error);
            }
        });
    }

    function getById(id) {
        return new Promise( async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                    await client.connect();
                    const db = client.db(dbName);
                    const item = await db.collection('newspaper').findOne({_id: ObjectId(id)});
                    
                    resolve( item );
                    client.close();
                    
            } catch(error){
                reject(error);
            }
        });
    }

    function add(item) {
        return new Promise( async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                    await client.connect();
                    const db = client.db(dbName);
                    const item01 = await db.collection('newspaper').insertOne(item);
                    //console.log(item01);
                    resolve( item01 );
                    client.close();
                    
            } catch(error){
                reject(error);
            }
        });
    }

    function update(id, item) {
        return new Promise( async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                    await client.connect();
                    const db = client.db(dbName);
                    const item01 = await db.collection('newspaper').findOneAndReplace({_id: id}, item);
                    //console.log(item01.value);
                    resolve( item01.value );
                    client.close();
                    
            } catch(error){
                reject(error);
            }
        });
    }

    function remove(id) {
        return new Promise( async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                    await client.connect();
                    const db = client.db(dbName);
                    const item01 = await db.collection('newspaper').deleteOne({_id: id});
                    //console.log(item01.value);
                    resolve( item01.deletedCount == 1 );
                    client.close();
                    //console.log('after resolv()');
                    
            } catch(error){
                reject(error);
            }
        });
    }

    function averageFinalList() {
        return new Promise( async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                    await client.connect();
                    const db = client.db(dbName);
                    const item01 = await db.collection('newspaper').aggregate([{$group: {_id: null, avgFinalList: {$avg: "$Pulitzer Prize Winners and Finalists, 1990-2003"}}}]).toArray();
                    resolve( item01[0].avgFinalList );
                    client.close();
                    //console.log('after resolv()');
                    
            } catch(error){
                reject(error);
            }
        });
    }

    function averageFinalListByChange() {
        return new Promise( async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                    await client.connect();
                    const db = client.db(dbName);
                    const item01 = await db.collection('newspaper').aggregate([ {
                        $project: {
                            "Newspaper": 1,
                            "Pulitzer Prize Winners and Finalists, 1990-2014": 1,
                            "Change in Daily Circulation, 2004-2013": 1,
                            overallChange: {
                                $cond: { if: {$gte: ["$Change in Daily Circulation, 2004-2013", 0]}, then: "positive", else: "negtive"}
                            }
                        }
                    },
                        {$group: {_id: "$overallChange", avgFinalList: {$avg: "$Pulitzer Prize Winners and Finalists, 1990-2014"}}}
                    ]).toArray();
                    resolve( item01 );
                    client.close();
                    //console.log('after resolv()');
                    
            } catch(error){
                reject(error);
            }
        });
    }

    function loadData(data) {
        return new Promise( async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                    await client.connect();
                    const db = client.db(dbName);
                    const results = await db.collection('newspaper').insertMany(data);
                    resolve(results);
                    client.close();
            } catch(error){
                reject(error);
            }
        });
    }

    return {loadData, get, getById, add, update, remove, averageFinalList, averageFinalListByChange};
}

module.exports = circulationRepo();