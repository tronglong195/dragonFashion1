import { Routes, Route } from "react-router-dom";
import Home from "./components/routers/home/Home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
