// Objects
// Question 1:  Create an object that describes a train ticket and store it in the ticket variable. The object must have three fields:

//     starting station (key name from, give the name of the nearest station in your area as a value);
//     end station (key name to, give any other station within 100km as a value);
//     the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).

// The object must be created using curly brackets, in which all created fields will be listed immediately. Then display the values of all fields of the ticket on the console.
let trainTicket = {
  from: " Indonesia",
  to: "Japan",
  price: 49815.86,
};
console.log(
  `from: ${trainTicket.from} to: ${trainTicket.to} and the price: ${trainTicket.price} yen`
);

// Question 2: Declare an empty object and save it to a person variable. Using dot notation, add the name and surname fields to the object by entering your data as values. Try to display the individual fields on the console.
let person = {};
person.name = "Bella";
person.surname = "Josh";
console.log(`name: ${person.name} and surname: ${person.surname}`);

// Arrays
// Question 3: We are setting up our small library of books about JavaScript programming. We have three books and want to prepare a list of them. We will store three pieces information about each book: title, author, and number of pages:

//     Speaking JavaScript, Axel Rauschmayer, 460;
//     Programming JavaScript Applications, Eric Elliott, 254;
//     Understanding ECMAScript 6, Nicholas C. Zakas, 352.

// Create an array of three objects representing the books. Each object must have the following properties: title, author, pages.
let book = [
  {
    title: "Speaking Javascript",
    author: "Axel Rauschamer",
    pages: 460,
  },
  {
    title: "Programming Javascript Application",
    author: "Eric Elliot",
    pages: 254,
  },
  {
    title: "Undestanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352,
  },
];
// console.log(book);

// Question 4: Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. Use the appropriate method to do this, which will attach the book at the end of the array. Display the length of the array and, in turn, all the book names in the collection.
let newwBook = {
  title: "Learning Javascript Design Patterns",
  author: "Addy Osmani",
  pages: 254,
};
book.push(newwBook);
console.log(book);

// Question 5: Use the slice command to copy the last two books to the new array.

let selectedBook = book.slice(1, -1);
console.log(selectedBook);

// Question 6: The first book from the collection is lost in unexplained circumstances. You have already accepted the loss, so remove it from the array. Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection in turn.
book.shift();
console.log(book.length);

let sum = book[0].pages + book[1].pages + book[2].pages;
console.log(sum);

//
//
//
//
// ## LAB DATA TYPES

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];
let newContacts = {
  name: "Maise Haley",
  phone: "0913 531 3030",
  email: "risus.Quisque.@unar.ca",
};
contacts.push(newContacts);
console.log(contacts);
