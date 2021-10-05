import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Curriculum from "./components/Curriculum/Curriculum";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { useEffect, useState } from "react";

function App() {
  // load data from local json
  const [courses, setCourses] = useState([]);
  useEffect(() => {
      fetch("./services.json")
          .then(res => res.json())
          .then(data => setCourses(data));
  }, []);
  return (
    <div className="App font-sans">
      <Router>
        {/* Header Component */}
        <Header />
        {/* Routing */}
        <Switch>
          <Route exact path="/">
            <Home courses={courses}/>
          </Route>
          <Route path="/about">
            <About courses={courses}/>
          </Route>
          <Route exact path="/services">
            <Services courses={courses}/>
          </Route>
          <Route path="/curriculum">
            <Curriculum courses={courses}/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
