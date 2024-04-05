import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import B from "./pages/B";
import A from "./pages/A";

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/b" element={<B />} />
            <Route path="/a" element={<A />} />
          </Routes>
      </BrowserRouter>
    );
  };

export default Router;