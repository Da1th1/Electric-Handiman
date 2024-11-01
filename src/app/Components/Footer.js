import "../CSS/Components/Footer.css";
import Image from "next/image";
import codeloop from "../assets/CodeLoop Store Logo.png";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; 2024</p>
                <a href="https://www.codeloopstore.com">
                <img src={codeloop} alt="Company Logo" />
                </a>
                <p> All rights reserved.</p>
            </div>
        </footer>
    )
}