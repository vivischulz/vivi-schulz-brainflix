import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../src/App.scss";
import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";
import UploadPage from "./pages/upload-page/UploadPage";

export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="brainFlix"  element={<Navigate to="/" />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="videos" element={<HomePage />} />
            <Route path="videos/:videoId" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
