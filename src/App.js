import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BookRoutes } from "./BookRoutes";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />}>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
