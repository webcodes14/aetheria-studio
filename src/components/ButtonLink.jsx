import { Link } from "react-router";
import { useApp } from "../context/AppContext";
import { motion } from "motion/react";

const ButtonLink = ({ className = "", to, children }) => {
    const { theme } = useApp();
    const themeColor = theme === 'light' ? '#1a1a1a' : '#ffffff';

    return (
        <div className={`flex ${className}`}>
            <motion.div
                initial="initial"
                whileHover="hover"
                className={`relative overflow-hidden border border-[${themeColor}]`}
            >
                <Link 
                    className="h-full block py-1 px-3"
                    to={to}
                >
                    <motion.span
                        className="inline-block font-medium"
                        variants={{
                            initial: { y: 0 },
                            hover: { y: "-110%" }
                        }}
                    >
                        {children}
                    </motion.span>
                    <motion.span
                        className="font-medium absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
                        variants={{
                            initial: { y: "110%" },
                            hover: { y: 0 }
                        }}
                    >
                        {children}
                    </motion.span>
                </Link>
            </motion.div>
        </div>
    )
}

export default ButtonLink;