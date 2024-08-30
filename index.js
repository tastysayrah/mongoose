 const {MongoClient} = require("mongodb")
 const dotenv = require("dotenv").config()
// const fs = require("fs")

//  const connectdb = process.env.MONGODB_URL
// const dbname = "bank";
// const collection_name = "transactions"

// async function run() {
//     const client = new MongoClient(connectdb);

//     try {
//         // Connect to the MongoDB server
//         await client.connect();
//         console.log('Connected to MongoDB');

//         const transactionsCollection = client.db(dbname).collection(collection_name);

//         // Read data from transactions.json file
//         const transactions = JSON.parse(fs.readFileSync('transactions.json', 'utf-8'));

//         // Insert data into the collection
//         await transactionsCollection.insertMany(transactions);
//         console.log('Inserted transactions into the collection');

//         //define aggregation pipeline
//         const pipeline = [
//                         {
//                             $group: {
//                                 _id: "$account_type",
//                                 totalAmount: { $sum: "$amount" },
//                                 avgAmount: { $avg: "$amount" },
//                                 count: { $sum: 1 }
//                             }
//                         },
//                         {
//                             $sort: { totalAmount: -1 }
//                         },
//                         {
//                             $project: {
//                                 _id: 1,
//                                 account_type: "$_id",
//                                 totalAmount: 1,
//                                 avgAmount: 1,
//                                 count: 1
//                             }
//                         }
//         ];

//         //execute the aggregation
//         const results = await transactionsCollection.aggregate(pipeline).toArray();

//         console.log("Aggregation Results.");
//         console.log(results);


//     }catch (err) {
//         console.error('Error:', err);
//     }finally {
//         //ensure the client closes when you finish/error
//         await client.close();
//     }
//     }

//     run().catch(console.dir);
    


// const express = require('express')
// const mongoose = require('mongoose')
// const dotenv = require("dotenv").config()
// const app = express();

// mongoose.connect(process.env.MONGODB_URL) 
// .then(() => {console.log('connected to mongodb')})
// .catch(err => console.error("error:", err));
// const PORT = process.env.PORT || 8080


// app.listen(PORT,  () => {
//     console.log(`Server running on http://localhost:${PORT}`)
// })

//CHECKPOINT

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
  });
  
  const Person = mongoose.model('Person', personSchema);

  const person = new Person({
    name: "John Williams",
    age: 30,
    favoriteFoods: ["Pizza", "Burger"]
  });
  
  person.save((err, data) => {
    if (err) return console.error(err);
    console.log("Person saved:", data);
  });

  const arrayOfPeople = [
    { name: "Alice", age: 25, favoriteFoods: ["Salad"] },
    { name: "Bob", age: 35, favoriteFoods: ["Steak"] },
    { name: "Charlie", age: 28, favoriteFoods: ["Pasta"] }
  ];
  
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    console.log("People created:", people);
  });

  Person.find({ name: "John Doe" }, (err, people) => {
    if (err) return console.error(err);
    console.log("People found:", people);
  });

  Person.findOne({ favoriteFoods: "Pizza" }, (err, person) => {
    if (err) return console.error(err);
    console.log("Person found:", person);
  });

  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    console.log("Person found by ID:", person);
  });


  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
  
    person.favoriteFoods.push("Hamburger");
    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      console.log("Updated Person:", updatedPerson);
    });
  });

  
  Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true }, (err, updatedPerson) => {
    if (err) return console.error(err);
    console.log("Updated Person:", updatedPerson);
  });

  

Person.findByIdAndRemove(personId, (err, removedPerson) => {
  if (err) return console.error(err);
  console.log("Removed Person:", removedPerson);
});


Person.remove({ name: "Mary" }, (err, result) => {
    if (err) return console.error(err);
    console.log("Deletion result:", result);
  });

  
  Person.find({ favoriteFoods: "burritos" })
  .sort('name')
  .limit(2)
  .select('-age')
  .exec((err, data) => {
    if (err) return console.error(err);
    console.log("Search result:", data);
  });



  
  