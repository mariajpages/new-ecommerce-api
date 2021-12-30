const mongoose = require('mongoose');
const url = 'mongodb+srv://mariajpages:<njjjkj2012>@cluster0.yrdcz.mongodb.net/newecommerce?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
});

// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient

// const url = 'mongodb://localhost:27017'

// function getClient (callback){
//     MongoClient.connect(url, (err, client) => {
//         if(err) callback(err, undefined)
//         console.log('Conectado a la DB')
//         const db = client.db('newecommerce')
        
    
//         return callback(undefined, db)
//     })
    
// }

// module.exports = getClient