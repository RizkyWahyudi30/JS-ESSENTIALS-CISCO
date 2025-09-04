// Scenario

// We can improve our contact list program a bit by using loops. You can now try to display not only the first or last contact, but all contacts in the list, regardless of their number.

// Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what they want to do. The user can choose to:

//     display the first contact (first)
//     display the last contact (last)
//     display all contacts (all)
//     add a new contact (new)
//     exit the program (quit)

// After executing the selected action, the program will give the opportunity to choose again. The program should end the actions only after the user gives a specified command, for example quit.
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
console.log(contacts);

while (true) {
  let asking = prompt(
    "Do you want to do? Check first / last / all / new / quit?:"
  );

  if (asking === "first") {
    console.log("First contact: ", contacts[0]);
  } else if (asking === "last") {
    console.log("Last contact: ", contacts[contacts.length - 1]);
  } else if (asking === "all") {
    console.log("All contact: ");
    for (contact of contacts) {
      console.log(contact);
    }
  } else if (asking === "new") {
    let name = prompt("Enter a new name: ");
    let phone = prompt("Enter a new phone number: ");
    let email = prompt("Enter a new email: ");
    contacts.push({
      name: name,
      phone: phone,
      email: email,
    });
  } else if (asking === "quit") {
    break;
  } else {
    console.log("Error command");
  }
}
