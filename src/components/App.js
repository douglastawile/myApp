import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import SubjectsPage from "./subjects/SubjectsPage";
import ManageSubjectPage from "./subjects/ManageSubjectPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/subjects" component={SubjectsPage} />
        <Route exact path="/subject" component={ManageSubjectPage} />
        <Route exact path="/subject/:slug" component={ManageSubjectPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
