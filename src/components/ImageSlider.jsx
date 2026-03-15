import { dataProjects } from "../data/projects";
import { useApp } from "../context/AppContext";
import { motion, AnimatePresence } from "motion/react";

import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const ImageSlider = () => {
    const { lang, theme } = useApp();
    const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
    const totalLengthImages = dataProjects[lang].length;

    const handleNextImage = () => {
        setCurrentImageIndex(prevState => (prevState + 1) % totalLengthImages);
    }

    const isMobileDevice = document.body.classList.contains('is-mobile');
    const currentSlide = dataProjects[lang][currentImageIndex];

    return (
        <div className="relative my-8 h-120 overflow-hidden flex justify-start items-center md:w-7xl md:justify-end">
            <AnimatePresence>
                <motion.img 
                    className="absolute object-cover h-full w-full"
                    key={currentSlide.image}
                    src={currentSlide.image} 
                    alt={currentSlide.title} 
                    initial={{ opacity: 0, x: isMobileDevice ? 300 : -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isMobileDevice ? -300 : 300 }}
                />
            </AnimatePresence>
            <button 
                className="relative transform rotate-180 p-3.5 bg-white cursor-pointer rounded-[50%] ml-4 drop-shadow-[0px_0px_4px_#00000050] md:ml-0 md:mr-4 md:transform md:rotate-0"
                onClick={handleNextImage} 
                type="button">
                    <FaArrowRight className={`${theme === 'light' ? '' : 'text-[#1a1a1a]'}`} />
            </button>
        </div>
    )
}

export default ImageSlider;