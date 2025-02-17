import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();     
    return(
        <div>
            <h1>Contact Page</h1>
            <div className="contact-form">
                <button onClick={() => navigate("form")}>Contact form</button>
                <button onClick={() => navigate("info")}>Contact info</button>
            </div>
        </div>
    )
}

export default Contact;