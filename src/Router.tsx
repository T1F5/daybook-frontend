import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImageDownloadPage from "./pages/ImageDownloadPage";
import A from "./pages/A";
import Write from "./pages/write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-download" element={<ImageDownloadPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/a" element={<A />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
