// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
const bodyParser = require("body-parser");
const app = express();
const stripe = require("stripe")(
  "sk_test_51HyU7jEDGoksVgQazoYuaLO13uTFVikaAG6GebNDwmzTlOoOu4Cb6HPQxpZNyA3R7hLWSJU6OHPFtVPKsrAd90ix00rOfEPzrv"
);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//CORS trial
const cors = require("cors");
app.use(cors({ origin: true, credentials: true }));

//body-parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Setup logger
// app.use(
//   morgan(
//     ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
//   )
// );

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

// Middleware to try and solve CORS error on cloud app
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

// Get user data

app.get("/users", (req, res) => {
  db.select()
    .table("users")
    .then(data => res.send(data));
});

app.get("/users/:id", (req, res) => {
  db("users")
    .where("id", req.params.id)
    .select()
    .then(data => res.json(data));
});

app.patch("/users/:id", (req, res) => {
  db("users")
    .where("id", req.params.id)
    .update(req.body)
    .then(() => {
      db.select()
        .where("id", req.params.id)
        .table("users")
        .then(data => res.send(data));
    });
});

// GET all information
app.get("/items", async (req, res, next) => {
  try {
    const itemLists = await db.select().table("item_lists");
    console.log("allMemo!");
    res.json(itemLists);
  } catch (err) {
    console.error("Error loading lists!", err);
    res.sendStatus(500);
  }
});

//Post new memo
app.post("/items", async (req, res) => {
  try {
    const postData = req.body;
    console.log("POSTメソッド");
    console.log("req.body", req.body);
    await db
      .into("item_lists")
      .returning([
        "buyer_address",
        "buyer_family_name",
        "buyer_name",
        "buyer_phone",
        "buyer_postal_code",
        "game_condition",
        "game_console",
        "game_price",
        "game_publisher",
        "game_title",
        "image_URL",
        "movie_URL",
        "seller_address",
        "seller_family_name",
        "seller_name",
        "seller_phone",
        "seller_postal_code",
        "seller_stripe_id",
      ])
      .insert(postData);
    const itemLists = await db.select().table("item_lists");
    console.log("app内のpostの挙動", itemLists);
    //INSERT INTO tableName (column1, column2) VALUE (value1, value2)
    res.send(itemLists);
  } catch (err) {
    console.error("Error loading post!", err);
    res.sendStatus(500);
  }
});

//Delete memo of id
app.delete("/:id", async (req, res) => {
  try {
    await db("item_lists").where({ id: req.params.id }).delete();
    const itemLists = await db.select().table("item_lists");
    res.send(itemLists);
  } catch (err) {
    console.error("Error deleting post!", err);
    res.sendStatus(500);
  }
});

//Put memo of id
app.patch("/:id", async (req, res) => {
  try {
    const postData = req.body;
    console.log("patchのメソッドをチェック中", postData[0].title);
    await db("item_lists")
      .where({ id: req.params.id })
      .update(postData[0])
      .returning("*");
    const itemLists = await db.select().table("item_lists");
    res.send(itemLists);
  } catch (err) {
    console.error("Error deleting post!", err);
    res.sendStatus(500);
  }
});

//Put all order info
app.put("/:id", async (req, res) => {
  try {
    const postData = req.body;
    console.log("putのメソッドをチェック中", postData[0].title);
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ buyer_address: postData[0].buyer_address });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ buyer_family_name: postData[0].buyer_family_name });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ buyer_name: postData[0].buyer_name });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ buyer_phone: postData[0].buyer_phone });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ buyer_postal_code: postData[0].buyer_postal_code });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ game_condition: postData[0].game_condition });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ game_console: postData[0].game_console });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ game_price: postData[0].game_price });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ game_publisher: postData[0].game_publisher });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ game_title: postData[0].game_title });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ image_URL: postData[0].image_URL });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ movie_URL: postData[0].movie_URL });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ seller_address: postData[0].seller_address });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ seller_family_name: postData[0].seller_family_name });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ seller_name: postData[0].seller_name });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ seller_phone: postData[0].seller_phone });
    await db("item_lists")
      .where({ id: req.params.id })
      .update({ seller_postal_code: postData[0].seller_postal_code });

    const itemLists = await db.select().table("item_lists");
    res.send(itemLists);
  } catch (err) {
    console.error("Error deleting post!", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

// Create User Account
app.post("/api/createuser", async (req, res) => {
  const account = await stripe.accounts.create({
    country: "JP",
    type: "express",
    capabilities: {
      card_payments: {
        requested: true,
      },
      transfers: {
        requested: true,
      },
    },
  });
  const accountLinks = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: "https://cc16timemachine.herokuapp.com/dashboard",
    return_url: "https://cc16timemachine.herokuapp.com/dashboard",
    type: "account_onboarding",
  });
  const accountInfo = { url: accountLinks.url, id: account.id };
  return res.send(accountInfo);
});

//
app.post("/stripesignin", async (req, res) => {
  const loginLink = await stripe.accounts.createLoginLink(req.body.stripe_id);
  return res.send(loginLink);
});

// create a checkout sessions to sell a product
app.post("/api/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "jpy",
          product_data: {
            name: req.body.name,
            images: [`${req.body.img}`],
          },
          unit_amount: req.body.price,
        },
        quantity: 1,
      },
    ],
    payment_intent_data: {
      application_fee_amount: 123,
      transfer_data: {
        destination: req.body.seller_id,
      },
    },
    mode: "payment",
    success_url: `https://cc16timemachine.herokuapp.com/`,
    cancel_url: `https://cc16timemachine.herokuapp.com/`,
  });

  return res.send(session);
});

app.post("/signup", async (req, res) => {
  try {
    let postData = req.body;
    //hash the password
    const hashed_password = bcrypt.hashSync(postData.password, 12);
    postData.password = hashed_password;
    //check if the user already exists
    const email_exists = await db
      .select()
      .table("users")
      .where("email", postData.email)
      .then(res => res);
    if (email_exists.length) {
      return res.status(400).json("A user with this email already exists");
    } else {
      //insert data to the users table
      await db.into("users").insert(postData);
      await db.select().table("users");
      return res.status(200).json("User Registerd Successfuly");
    }
  } catch (err) {
    console.error("Error in Signing up!", err);
    res.sendStatus(500);
  }
});

// login route
app.post("/login", async (req, res) => {
  try {
    let postData = req.body;
    console.log("Post data login", postData);
    const user = await db
      .select()
      .table("users")
      .where("email", postData.email)
      .then(res => res);
    console.log("Existing user in login", user);
    if (user.length) {
      console.log("user inside if", user);
      await bcrypt
        .compare(postData.password, user[0].password)
        .then(isMatch => {
          console.log("Check isMatch", isMatch);
          if (isMatch) {
            //Generate jwt token
            let authToken = jwt.sign(
              {
                id: user[0].id,
                first_name: user[0].first_name,
                last_name: user[0].last_name,
                email: user[0].email,
              },
              process.env.JWTSK
            );
            return res.status(200).json({ authToken: authToken });
          } else {
            return res.status(400).json("Password Incorrect");
          }
        });
    } else {
      throw new Error("No user with that email");
    }
  } catch (err) {
    console.error("Error in Signing up!", err);
    res.sendStatus(500);
  }
});

//User API
// app.get("/users", (req, res) => {
//   db.select()
//     .table("users")
//     .then(data => console.log(data));
// });

// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await db.select().table("users");
//     console.log("get all users!");
//     res.json(users);
//   } catch (err) {
//     console.error("Error loading users!", err);
//     res.sendStatus(500);
//   }
// });

module.exports = app;
