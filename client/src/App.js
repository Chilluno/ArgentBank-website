import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
