import "./App.css";
// import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
// import ProductList from "./components/ProductList";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Dashboard from "./routes/Dashboard";

const stripePromise = loadStripe(
  "pk_test_51HyU7jEDGoksVgQaPnmV5AHfzryfoJoWqJFmxitvpNCcKxQ8jS7OA382SlAwfLXAGUHYV7dGwUcP8hMt97mqhhF100JlZGaB3k"
);

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Elements>
    </div>
  );
}

export default App;
