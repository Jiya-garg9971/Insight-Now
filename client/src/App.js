
import Article from "./components/articles/article";
import Header from "./components/header";
import Infoheader from "./components/infoheader";
import "./components/style.css"
function App() {
  return (
    <div className="App">
      <Header/>
      <Infoheader/>
     < Article/>
    </div>
  );
}

export default App;
