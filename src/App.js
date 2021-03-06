import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticleList from './pages/ArticleList'
import NavBar from './NavBar'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id = "page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/article-list" component={ArticleList} />
          <Route path="/article/:name" component={ArticlePage} />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
