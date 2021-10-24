import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import NotFound from "./pages/NotFound";
/* -------------------------------------------------------------------------- */
//component
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Article-List" component={ArticleList} />
          <Route exact path="/Article/:name" component={Article} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
