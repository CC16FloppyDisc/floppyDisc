import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLICKEY);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <Header />
        <SearchBar />
        <ProductList />
      </div>
    </Elements>
  );
}

export default App;
