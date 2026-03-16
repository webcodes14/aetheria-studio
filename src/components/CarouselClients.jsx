import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
import { siteConfig } from "../data/siteConfig";
import { useApp } from "../context/AppContext";
import { createContext, useContext, useEffect, useState } from "react";

const CarouselContext = createContext(null);

const Carousel = ({ children, data }) => {
    const [ index, setIndex ] = useState(0);

    const prev = () => setIndex(prevState => (prevState - 1 + data.length) % data.length);
    const next = () => setIndex(prevState => (prevState + 1) % data.length);

    /* useEffect(() => {
        const timeout = setTimeout(() => {
            setIndex(prevState => (prevState + 1) % data.length);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [ index, data ]); */

    return <CarouselContext.Provider 
        value={{ index, prev, next, data }} 
    >
        <div className="relative overflow-hidden">
            {children}
        </div>
    </CarouselContext.Provider>
    
}

const Track = ({ children }) => {
    return <div style={{ perspective: '1000px', transformStyle: 'preserve-3d' }} className="relative flex justify-center items-center w-full h-[500px]">
        {children}
    </div>
}

const Item = ({ children, itemIndex, theme }) => {
    const { index, data } = useContext(CarouselContext);

    const isActive = itemIndex === index;
    const isPrev = itemIndex === (index - 1 + data.length) % data.length;
    const isNext = itemIndex === (index + 1) % data.length;

    let classes = "absolute rounded-xl flex flex-col justify-between transition-all duration-500 text-white py-4 px-12 sm:px-4 max-w-full w-96 text-center";
    if (isActive) classes += ` z-20 scale-100 opacity-100 h-[400px] ${theme === 'light' ? 'bg-[#1a1a1a]' : 'bg-[#000000]'}`;
    else if (isPrev) classes += " h-[350px] bg-[#1a1a1a] z-10 -translate-x-32 -translate-z-20 opacity-85 xl:h-[400px] xl:-translate-x-96 xl:rotate-y-30";
    else if (isNext) classes += " h-[350px] bg-[#1a1a1a] z-10 translate-x-32 -translate-z-20 opacity-85 xl:h-[400px] xl:translate-x-96 xl:-rotate-y-30";
    else classes += " opacity-0 pointer-events-none";

    return <div className={classes}>
        {children}
    </div>
}

const Controls = ({ theme }) => {
    const { prev, next } = useContext(CarouselContext);

    return <div className="absolute w-full h-full top-0 flex justify-between items-center xl:translate-z-32">
        <button className={`text-3xl p-2 cursor-pointer ${theme}`} onClick={prev} type="button"><MdArrowBackIosNew /></button>
        <button className={`text-3xl p-2 cursor-pointer ${theme}`} onClick={next} type="button"><MdArrowForwardIos /></button>
    </div>
}

Carousel.Track= Track;
Carousel.Item = Item;
Carousel.Controls = Controls;

const CarouselClients = () => {
    const { lang, theme } = useApp();
    const bgColor = theme === 'light' ? 'bg-[#ffffff]' : 'bg-[#1a1a1a]';

    return <Carousel data={siteConfig[lang].clients}>
        <Carousel.Track>
            {siteConfig[lang].clients.map((client, i) => (
                <Carousel.Item key={client.name} itemIndex={i} theme={theme}>
                    <div>
                        <div className="-mt-14">
                            <FcBusinessman className={`p-2 text-[5rem] rounded-[50%] ${bgColor} block mx-auto relative`} />
                        </div>
                        <h4 className="text-2xl mt-4"><strong>{client.name}</strong></h4>
                        <p className="mx-auto mt-1 mb-3"><strong>{client.job}</strong></p>
                        <p>{client.text}</p>
                    </div>
                    <GiFamilyHouse className="mt-4 mx-auto mb-0 p-2 text-[5rem] bg-transparent" />
                </Carousel.Item>
            ))}
        </Carousel.Track>
        <Carousel.Controls theme={bgColor} />
    </Carousel>
}

export default CarouselClients;