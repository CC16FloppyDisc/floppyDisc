import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51HyU7jEDGoksVgQaPnmV5AHfzryfoJoWqJFmxitvpNCcKxQ8jS7OA382SlAwfLXAGUHYV7dGwUcP8hMt97mqhhF100JlZGaB3k"
);

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <Header />
        <SearchBar />
        <ProductList />
      </Elements>
    </div>
  );
}

export default App;
