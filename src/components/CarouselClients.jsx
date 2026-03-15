import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
import { siteConfig } from "../data/siteConfig";
import { useApp } from "../context/AppContext";
import { useState } from "react";

const CarouselClients = () => {
    const { lang, theme } = useApp();
    const [ index, setIndex ] = useState(0);
    const bgColor = theme === 'light' ? 'bg-[#ffffff]' : 'bg-[#1a1a1a]';

    return <div>
        {siteConfig.cs.clients.map((client, _, array) => {
            return <div 
                key={client.name} 
                className="bg-[#1a1a1a] text-white my-16 mx-auto max-w-full w-80 text-center rounded-4xl p-4"
            >
                <FcBusinessman className={`p-2 text-[5rem] rounded-[50%] ${bgColor} block mx-auto relative -top-14`} />
                <h4 className="-mt-8 text-3xl"><strong>{client.name}</strong></h4>
                <p className="mx-auto mt-1 mb-3"><strong>{client.job}</strong></p>
                <p>{client.text}</p>
                <GiFamilyHouse className="mt-4 mx-auto mb-0 p-2 text-[5rem] bg-transparent" />
            </div>
        })}
        <div>
            <button type="button"><MdArrowBackIos /></button>
            <button type="button"><MdArrowForwardIos /></button>
        </div>
    </div>
}

export default CarouselClients;