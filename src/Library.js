function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
}

function addBook(libraryName,newBook) {
  libraryName.shelves[newBook.genre].push(newBook);
}

// libraryName.shelves.fantasy.push(newBook)
// } else if (newBook.genre === 'fiction') {
// libraryName.shelves.fiction.push(newBook)
// } else if (newBook.genre === 'nonFiction') {libraryName.shelves.nonFiction.push(newBook)
// }


function checkoutBook(libraryName, checkedBook) { 

  for (var i = 0; i < libraryName.shelves.fiction.length; i++) { 
    if (checkedBook == libraryName.shelves.fiction[i].title) {  libraryName.shelves.fiction.splice(i, 1); 
      return `You have now checked out ${checkedBook} from the ${libraryName.name}`; 
      }
    } 

  for (var i = 0; i < libraryName.shelves.fantasy.length; i++) { 
     if (bookName == libraryName.shelves.fantasy[i].title) {  libraryName.shelves.fantasy.splice(i, 1); 
       return `You have now checked out ${checkedBook} from the ${libraryName.name}` 
      }
   } 

for (var i = 0; i < libraryName.shelves.nonFiction.length; i++) {
  if (checkedBook == libraryName.shelves.nonFiction[i].title) {       libraryName.shelves.nonFiction.splice(i, 1); 
  return `You have now checked out ${checkedBook} from the ${libraryName.name}` 
      } 
    }
    return `Sorry, there are currently no copies of ${checkedBook} available at the ${libraryName.name}`
  }  







// for (var i = 0; i < libraryName.shelves.length; i++)
//   if (checkedBook === libraryName.shelves.fantasy[i].title) {
//   libraryName.shelves.fantasy.splice(i, 1)
// } else if (checkedBook === libraryName.shelves.nonFiction[i].title) {
//   libraryName.shelves.nonFiction.splice(i, 1)
// } else if(checkedBook === libraryName.shelves.fiction[i].title) {
//   libraryName.shelves.fiction.splice(i, 1)
// }
// return `You have now checked out ${checkedBook} from the ${libraryName}`
module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
