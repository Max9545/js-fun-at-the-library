// function shelfBook(book, sciFiShelf) {
//   if (book.genre === 'sciFi') {
//     sciFiShelf.unshift(book)
//   };
//   if (sciFiShelf.length > 3) {
//     sciFiShelf.shift()
//   };
// };

function shelfBook(book, shelf) {
  shelf.unshift(book);
  if (shelf.length > 3) {
    shelf.shift()
  }
}

function unshelfBook(book, shelf) {
for (var i = 0; i < shelf.length; i++){
  if(shelf[i].title === book) {
    shelf.splice(i,1);
    }
  }
};

function listTitles(shelf) {
var titles = [];
  for (var i = 0; i < shelf.length; i ++) {
    titles.push(shelf[i].title);
  }
  return titles.join(", ");
};

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
};


module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};


//sciFiShelf.splice(sciFiShelf.indexOf(book))
