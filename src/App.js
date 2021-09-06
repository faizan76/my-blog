import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-list" component={ArticlesListPage} />
      </div>
    </Router>
  );
}

export default App;
