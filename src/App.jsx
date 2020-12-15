import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";

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
