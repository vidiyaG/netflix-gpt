import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NotFound from "./components/Not-found";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
    return (
        <div className="w-screen h-screen">
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" Component={Layout}> */}
                    {/* <Routes> */}
                    <Route path="/" Component={Login} />
                    <Route exact path="login" Component={Login} />
                    <Route exact path="home" Component={Home} />
                    <Route path="/*" Component={NotFound} />

                    {/* </Routes> */}
                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
