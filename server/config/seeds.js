const db = require("./connection");
const { User, Waves, View } = require("../models");

db.once("open", async () => {
  const views = await View.insertMany([
    {
      viewText:
        "Lorem Ipewrwersum is simply dummy text of the printing and typesetting industry",
    },
    {
      viewText:
        "Lorem Iewwerpsum is simply dummy text of the printing and typesetting industry",
    },
    {
      viewText:
        "Lorem Ipsuewrewm is simply dummy text of the printing and typesetting industry",
    },
    {
      viewText:
        "Lorem Ipserweum is simply dummy text of the printing and typesetting industry",
    },
    {
      viewText:
        "Lorem Ipwerewsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  console.log("view is Seeded");

  await User.create({
    userName: "testUser",
    firstName: "fname",
    lastName: "lname",
    email: "email@email.com",
    password: "abc12345",
  });
  await User.create({
    userName: "testUserTwo",
    firstName: "fname",
    lastName: "lname",
    email: "emailTwo@email.com",
    password: "abc12345",
  });
  await User.create({
    userName: "testUserThree",
    firstName: "fname",
    lastName: "lname",
    email: "emailThree@email.com",
    password: "abc12345",
  });
  await User.create({
    userName: "testUserFour",
    firstName: "fname",
    lastName: "lname",
    email: "emailFour@email.com",
    password: "abc12345",
  });

  console.log("users seeded");

  const wave = await Waves.insertMany([
    {
      waveBody:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      waveBody:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      waveBody:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      waveBody:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      waveBody:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);
  console.log("waves seeded..");

  process.exit();
});