import "../CSS/Components/Footer.css";
import Image from "next/image";
import codeloop from "../assets/CodeLoop Store Logo.png";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p>&copy; 2024</p>
                <a href="https://www.codeloopstore.com">
                    <Image src={codeloop} alt="Company Logo" width={80} height={30} style={{ margin: '0 10px' }} />
                </a>
                <p>All rights reserved.</p>
            </div>
        </footer>
    )
}