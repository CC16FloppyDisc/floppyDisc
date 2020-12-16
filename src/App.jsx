import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <ProductList />
    </div>
  );
}

export default App;
