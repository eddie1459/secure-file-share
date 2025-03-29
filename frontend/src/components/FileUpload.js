import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("message", message);
        formData.append("phoneNumber", phoneNumber);

        await axios.post(`/api/upload`, formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(x => {
            alert(x.data.message)
        }).catch(error => {
            if (error.response.data) {
                alert(error.response.data.error)
            } else {
                alert(error.message)
            }
        });
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div>
            <h2>Upload a File</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
                <input type="text" placeholder="Message" onChange={(e) => setMessage(e.target.value)} required />
                <input type="text" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} required />
                <button type="submit">Submit</button>                
            </form>
            <button onClick={handleLogout} style={{ background: "red", color: "white", marginTop: '30px' }}>Logout</button>
        </div>
    );
};

export default FileUpload;
