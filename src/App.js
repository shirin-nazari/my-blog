import { BrowserRouter as Router, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
/* -------------------------------------------------------------------------- */
//component
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Article-List" component={ArticleList} />
        <Route exact path="/Article/:name" component={Article} />
      </div>
    </Router>
  );
}

export default App;
