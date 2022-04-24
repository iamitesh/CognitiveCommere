import { Routes, Route, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import Navbar from "./Components/common/Navbar";
import Commerce from "./Components/pages/Commerce";
import Community from "./Components/pages/Community";
import Develop from "./Components/pages/Develop";
import MarketPlace from "./Components/pages/MarketPlace";
import Resources from "./Components/pages/Resources";
import Sell from "./Components/pages/Sell";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Commerce />} />
        <Route path="/community" element={<Community />} />
        <Route path="/develop" element={<Develop />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/resources" element={<Resources />} />
        <Route
          path="/sell"
          element={<Sell />}
          // component not changing view
          // component={Sell}
        />
        {/* <Navigate to="/CognitiveCommere" /> */}
      </Routes>
    </div>
  );
};

export default App;
