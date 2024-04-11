import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";
import { store } from "./redux/store";

// Указывается если URL не явяется абсолютным http:// или https://
axios.defaults.baseURL = "http://127.0.0.1:6200";
// Для отправки cookies вместе с запросом на сервер
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
