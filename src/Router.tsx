import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageDownloadPage from "./pages/ImageDownloadPage";
import Write from "./pages/write";
import Auth from "@pages/Auth";
import Home from "@pages/Home";
import OthersWriting from "@components/OthersDayBook";
import MyWritings from "@pages/MyDayBook";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my" element={<MyWritings />} />
        <Route path="/image-download" element={<ImageDownloadPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<OthersWriting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
