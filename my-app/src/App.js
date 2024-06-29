import { FcMusic } from "react-icons/fc";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App-header">
      <div className="App-logo">
        <FcMusic />
      </div>
      <main>
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
