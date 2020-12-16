require("dotenv").config();
const app = require("./app");

const stripe = require("stripe")(
  "sk_test_51HyU7jEDGoksVgQazoYuaLO13uTFVikaAG6GebNDwmzTlOoOu4Cb6HPQxpZNyA3R7hLWSJU6OHPFtVPKsrAd90ix00rOfEPzrv"
);

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
    refresh_url: "http://localhost.com/3000",
    return_url: "http://localhost.com/3000",
    type: "account_onboarding",
  });
  console.log(accountLinks);
  return res.send(accountLinks.url);
});
