import { siteConfig } from "../data/siteConfig";
import { useApp } from "../context/AppContext";
import { motion } from "motion/react";

import ButtonLink from "../components/ButtonLink";
import ImageSlider from "../components/ImageSlider";
import CarouselClients from "../components/CarouselClients";

import ArrowDown from "../assets/Line_8.svg";

const langBtns = {
    portfolio: {
        cs: "Prohlédnout naše Portfolio",
        en: "View our Portfolio",
        ko: "포트폴리오 보기"
    },
    more: {
        cs: "Zjistit více",
        en: "Learn more",
        ko: "더 알아보기"
    },
    contact: {
        cs: "Pojďme se spojit",
        en: "Let's get in touch",
        ko: "문의하기"
    }
}

const HomePage = () => {
    const { lang, theme } = useApp();
    const themeColor = theme === 'light' ? '#1a1a1a' : '#ffffff';

    return (
        <>
            <motion.section 
                className="my-8 md:flex md:gap-4 overflow-hidden"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <div className="md:my-8 md:flex md:flex-col md:justify-around">
                    <div>
                        <h1>
                            <strong>
                                {siteConfig[lang].desc_short}
                            </strong>
                        </h1>
                        <p className="my-8">
                            {siteConfig[lang].desc_long}
                        </p>
                    </div>
                    <ButtonLink to="projects">{langBtns.portfolio[lang]}</ButtonLink>
                </div>
                <ImageSlider />
            </motion.section>
            <section>
                <div 
                    className="flex flex-wrap gap-4 justify-center xl:justify-between py-10 overflow-hidden"
                >
                    {siteConfig[lang].services.map((service, index) => {
                        return ( 
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ amount: 0.2 }}
                                key={service.id}
                                className={`flex flex-col shrink-0 justify-between max-w-full w-80 text-center p-4 border border-[${themeColor}]`}
                            >
                                <div>
                                    <span className="text-6xl flex justify-center">{service.icon}</span>
                                    <h3 className="text-2xl">
                                        <strong>{service.title}</strong>
                                    </h3>
                                    <p className="my-4">{service.desc_short}</p>
                                </div>
                                <ButtonLink to={`services/${service.id}`} className="mt-8 justify-center">{langBtns.more[lang]}</ButtonLink>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
            <motion.section 
                className="my-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.2 }}
            >
                <h2
                    className="text-center mb-8"
                >
                    <strong>{siteConfig[lang].approach.title}</strong>
                </h2>
                <div className="flex flex-col gap-40 lg:flex-row lg:gap-4">
                    {siteConfig[lang].approach.items.map((item, _, array) => {
                        return ( 
                            <div
                                key={item.id}
                                className={`relative flex flex-col shrink-0 justify-between max-w-full w-80 text-center p-4 mx-auto`}
                            >
                                <span className="text-6xl flex justify-center">{item.icon}</span>
                                <h3 className="text-2xl">
                                    <strong>{item.title}</strong>
                                </h3>
                                <p className="my-4">{item.text}</p>
                                <span
                                    className="absolute top-0 left-0 w-full h-full flex items-center justify-start text-[10rem] text-[#73737330] -z-1"
                                >
                                    {item.number}
                                </span>
                                {_ !== array.length - 1 && (
                                    <div className="transform rotate-90 lg:hidden 2xl:block 2xl:rotate-0">
                                        <img className="absolute bottom-0 top-0 -right-4 2xl:right-[-62%] 2xl:-top-24" src={ArrowDown} alt="Arrow" />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </motion.section>
            <motion.section
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
            >
                <h2
                    className="text-center mb-12"
                >
                    <strong>{siteConfig[lang].clients_title}</strong>
                </h2>
                <CarouselClients />
            </motion.section>
        </>
    )
}

export default HomePage;