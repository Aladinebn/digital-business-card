import "./index.css";
import Name from "./components/Name";
import Info from "./components/info";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Name />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;
