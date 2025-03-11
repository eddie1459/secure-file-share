import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import FileUpload from "./components/FileUpload";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route 
                    path="/upload" 
                    element={<PrivateRoute><FileUpload /></PrivateRoute>} 
                />
            </Routes>
        </Router>
    );
};

export default App;

