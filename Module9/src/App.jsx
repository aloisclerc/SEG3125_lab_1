import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Painting from './Painting';
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from 'react-switch-lang';


function App() {
  const [english, setEnglish] = useState(true);
  const langChange = (event) => {
    setEnglish(!english);
  };

  
  return (
    <Router>
      <div className="App">
        <Navbar english={english} langChange={langChange} />
        <div className="content">
          <Switch>
            <Route exact path="/:paintingId" component={Painting} english={english}/>
            <Route exact path="/" component={() => <Home english={english} />} english={english}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
