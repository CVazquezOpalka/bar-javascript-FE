import Layout from "./components/UI/Layout";
import NavBar from "./components/UI/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.loggedin);
  return (
    <div className="bg-accent min-h-screen">
      <NavBar />
      <Layout>
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Products></Products>}></Route>
          <Route path="/about" element={<About />} />
          {isLoggedIn && <Route path="/orders" element={<Orders />} />}
          {!isLoggedIn && <Route path="/login" element={<Login />} />}
          {!isLoggedIn && <Route path="/signin" element={<SignIn />} />}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
