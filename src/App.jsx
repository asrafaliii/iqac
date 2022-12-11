import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Activity from "./pages/Activity/Activity";
import Contact from "./pages/ContactUs/Contact";
import Documents from "./pages/Documents/Documents";
import Home from "./pages/Home/Home";
import NewsEvent from "./pages/NewsEvent/NewsEvent";
import NotFound from "./pages/NotFound/NotFound";
import Team from "./pages/Team/Team";
import TrainingWorkshop from "./pages/TrainingWorkshop/TrainingWorkshop";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/documents" element={<Documents />} ></Route>
        <Route path="/trainingworkshop" element={<TrainingWorkshop />}></Route>
        <Route path="/newsevent" element={<NewsEvent />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
