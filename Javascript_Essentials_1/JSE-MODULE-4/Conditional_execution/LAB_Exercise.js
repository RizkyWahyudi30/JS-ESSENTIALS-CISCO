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

let choice = prompt("What do you want to do? first / last / new ");

if (choice === "first") {
  console.log(`First contact: ${contacts[0]}`);
} else if (choice === "last") {
  console.log(`Last contact: ${contacts[contacts.length - 1]}`);
} else if (choice === "new") {
  let newName = prompt("Enter your name: ");
  let newNum = prompt("Enter you phone number: ", 0);
  let newEmail = prompt("Enter you email: ");

  if (newName === "" || newNum === "" || newEmail === "") {
    alert("Please, enter name or number phone or email");
  } else {
    contacts.push({
      name: newName,
      phone: newNum,
      email: newEmail,
    });
    console.log(`Contact added: ${contacts[contacts.length - 1]}`);
  }
} else {
  console.log("Invalid choice");
}
