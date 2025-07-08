import Image from "next/image";
import ostaFooter from "../../../../public/logo-footer.png";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-footer">
            <div className="container mx-auto">
                <div className="flex md:flex-row flex-col items-center justify-center md:justify-between h-60 md:h-96">
                    <div>
                        <Image src={ostaFooter} alt="Osta Logo" width={100} height={51} className="w-64" />
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://www.linkedin.com/company/osta-services/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/ostaservice/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://www.youtube.com/@ostaservices/" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                        <a href="https://www.instagram.com/osta.services/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}