import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImageDownloadPage from "./pages/ImageDownloadPage";
import A from "./pages/A";
import Write from "./pages/Write";
import Auth from "@pages/Auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-download" element={<ImageDownloadPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/a" element={<A />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
