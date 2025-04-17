import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home"
import { FilePage } from "../pages/FileView"
import { DirectoryPage } from "../pages/DirectoryView"
import { Header } from "../components/Header"

const AppRouter = () => {

    return (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/file" element={<FilePage />} />
            <Route path="/directory" element={<DirectoryPage />} />
          </Routes>
        </>
      );
}
export default AppRouter