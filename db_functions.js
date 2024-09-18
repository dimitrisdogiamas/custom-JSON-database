const fs = require('fs')

function readDb(dbName= 'db.json') {
  //read JSON object from file 
  const data = fs.readFileSync('db.json','utf-8')//that's how we are gonna acess the json file 

  // parse the JSON from JSON to object and return it 
  const converted_data = JSON.parse(data) // this parses the data into a json file 
  return converted_data
}


function writeDb(obj,dbName='db.json') { 
  //chech that a user has passed in an object 
  if (!obj) {
    return 
  }

  try {
    //convert our object to the JSON format
    let converted_data = JSON.stringify(obj)
    fs.writeFileSync(dbName, converted_data)
    console.log('Save successful')
      // save JSON to our JSON database

  } catch (err) {
  console.log("failed to save data \n",err.message)

  }
} // the name of the object and the name of the database the json file 

module.exports = {
  readDb,writeDb
} // we export the files so we can use them in the index.js 
