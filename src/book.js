function createTitle(bookName) {
  var bookIdea = `The ${bookName}`

  return bookIdea
}

function buildMainCharacter(name, age, pronouns) {
  var ghoulCharacter = {
    name: "Vassya",
    age: 16,
    pronouns: "she/her"
}
  return ghoulCharacter;
}

function saveReview(title, review) {
  if (!review.includes(title)) {
  return review.push(title);
  }
};

function calculatePageCount(bookName) {
  bookPageCount = bookName.length * 20;

  return bookPageCount;
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }

  return book
}

function editBook(bookTitle) {
     bookTitle.pageCount = bookTitle.pageCount * .75
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
//[bookIdea, sushiTitle, dragonTitle, ghostTitle]
//
//var dragonTitle = "Dragon in the Summer";
//var ghostTitle = "The Teenage Soul";
