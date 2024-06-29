import { FcMusic } from "react-icons/fc";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <header className="App">
      <div className="App-logo">
        <FcMusic />
      </div>
      <main>
        <SearchBar />
      </main>
    </header>
  );
}

export default App;
