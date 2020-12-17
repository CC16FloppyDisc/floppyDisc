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
5. Solution
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

# 5. Solution #

## Checkout ##
Stripe api

# 6 License #
License for the code**<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />この 作品 は <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a>の下に提供されています。






