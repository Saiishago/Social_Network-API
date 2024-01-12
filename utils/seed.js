//Example from Instructor file

const connection = require('../config/connection');
const {User, Thought} = require('../models');
const { getRandomName, getRandomThoughts} = require('./data');

// Start the seeding runtime timer
//console.time('seeding');
connection.on('error', (err)=> err);

// Creates a connection to mongodb
connection.once('open', async () => {
    console.log('connected');

  // Delete the collections if they exist  
let thoughtCheck = await connection.db.listCollections({name: 'thoughts'}).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  let userCheck = await connection.db.listCollections({ name: 'users'}).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  const thoughts = getRandomThoughts(10);

  for (let i = 0; i < 20; i++) {
    const thought = getRandomThoughts();
    const fullName = getRandomName();
    
    const username = fullName.split(' ')[0];
    const email = fullName.split(' ')[1];
    
    // const newUser = {
    //   first: name.split(' ')[0],
    //   last: name.split(' ')[1],
    //   age: Math.floor(Math.random() * 99 + 1),
    // };
    users.push({
        username,
        email,
        thought,
    });
  }

  // Wait for the users to be inserted into the database
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info('seeding complete');
  process.exit(0);
});
