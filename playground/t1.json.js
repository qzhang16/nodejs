const fs = require('fs');
// const book = {
//     title: 'Ego is the Ememy',
//     author: 'Ryan Holiday',
//     pages: 102
// };
// const bookJson = JSON.stringify(book);
// console.log(bookJson);
// fs.writeFileSync('t1.json',bookJson);

// const parseBook = JSON.parse(bookJson);
// console.log(parseBook.author);
const dataBuffer = fs.readFileSync('t1.json');
const data = JSON.parse(dataBuffer.toString());
console.log(data.pages);