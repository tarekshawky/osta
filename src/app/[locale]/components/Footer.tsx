import Image from "next/image";
import ostaFooter from "../../../../public/logo-footer.png";

export default function Footer() {
    return (
        <footer className="bg-footer">
            <div className="container mx-auto">
                <div className="flex md:flex-row flex-col items-center justify-center md:justify-between h-60 md:h-96">
                    <div>
                        <Image src={ostaFooter} alt="Osta Logo" width={100} height={51} className="w-64" />
                    </div>
                    <div>
                        Icons
                    </div>
                </div>
            </div>
        </footer>
    )
}