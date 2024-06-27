import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <SearchBar />
    </div>
  );
}

export default App;
