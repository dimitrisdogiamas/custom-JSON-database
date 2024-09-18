const { readDb,writeDb } = require("./db_functions");

// const dataObj = {
//   name: 'dimitris',
//   favourite_numbers:[2,8]
// }

// writeDb(dataObj)


// console.log(readDb()) // we succesfully saved the database ]
const saved_data = readDb()
saved_data["number_of_bananas"] = 4
writeDb(saved_data)