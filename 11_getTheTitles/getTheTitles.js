const books = [
    {
        title: 'Book',
        author: 'name'
    },
    {
        title: 'Book2',
        author: 'name2'
    }
]

const getTheTitles = function() {
    const titles = books.map(book => book.title)
    return titles
};

console.log(books);



// Do not edit below this line
module.exports = getTheTitles;
