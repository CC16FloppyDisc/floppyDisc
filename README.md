<div align="center">
 <img src ="https://user-images.githubusercontent.com/66049678/102437824-7f31b680-405e-11eb-8651-8305c48d4878.png" width="1000">
 </div>

# TimeMachine is ... #
TimeMachine is market place where visitors can sell/buy their vintage game collections.

```
1. Dependencies
2. System formation
3. How to use
4. Install
5. How it works
	5-1. Sign in/Log in
	5-2. List items
	5-3. Upload items as seller
	5-4. buy items as buyer
  5-5. check out
6. License
```
# 1. Dependencies #
Javascript, Knex, express, node, PostgreSQL, axios

# 2. System formation #

<img width="415" alt="スクリーンショット 2020-12-17 12 02 34" src="https://user-images.githubusercontent.com/66049678/102438532-d1270c00-405f-11eb-9f34-b5ad9445d3ba.png">

# 3. How to use #


# 4. Installation #

## 1.How to set up Database on local ##


1. Login psql
2. $ CREATE DATABASE tron;
3. Back to the terminal
4. $ yarn add pg
5. $ yarn add knex
6. $ yarn knex init
7. Change client, user name and password in knex.js file 
8. yarn knex migrate:latest
9. yarn run knex seed:run

```
(knexfile.js setting example)
  development: {
    client: 'postgresql',
    connection: {
      database: 'DATABASE_NAME_HERE',
      user:     'USER_NAME_HERE',
      password: 'PASSWORD_HERE'
    }
  },
```

## 2.How to activate api ##
1. $ yarn add morgan
2. $ yarn add path
3. $ yarn add body-parser
4. $ yarn add cars
5. $ yarn add nodemon
6. $ yarn add express
7. $ yarn add dotenv
8. Create “.env” in directory ()
9. $ nodemon server

```
.env file (write following codes in .env file)*adjust DATABASE_URL
NODE_ENV=development
DATABASE_URL=postgresql://YOUR_POSGRESQL_USER_NAME@localhost:5432/YOUR_DB_NAME_HERE
```

# 5. How it works #

## 5-1. Sign up /Login ##

### 5-1-1. Create Stripe account 
Stripe create api to set up stripe express account.
```
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

```

### 5-1-2.Register id and password on Postgresql database  ###
When user input their id and password(Pass word will be hashed automatically),  
api will post new data on user_table on database.

```
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
```

### 5-1-3. Login ###
Front-end will post data object (which includes email and password).
Firstly, database will check if user exists in the record.
If user email address exists, server sends back password in object.
Login api compare the user input password and database side password. If user input password is correct, auth_token will be returned.

```
app.post("/login", async (req, res) => {
  try {
    let postData = req.body;
    const user = await db
      .select()
      .table("users")
      .where("email", postData.email)
      .then(res => res);
    if (user.length) {
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
```

## 5-2.Checkout ##
Sending shopping information object to stripe api.

```
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
    success_url: `http://www.google.com`,
    cancel_url: `http://www.youtube.com`,
  });
  return res.send(session);
});
```

# 6 License #
License for the code**<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />この 作品 は <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a>の下に提供されています。






