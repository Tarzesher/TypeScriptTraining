interface IBook {
    title: string;
    author: string;
    bookInfo: () => string;
}

var b: IBook = {
    title: "Blood in the Sand",
    author: "Tedesca",
      bookInfo: function() {
          return this.title + " by :" + this.author;
      }
}

var book = b.bookInfo();
alert(book);