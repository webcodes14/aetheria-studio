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
    },
    contact_title: {
        cs: "Jste připraveni přetvořit svou vizi?",
        en: "Ready to reshape your vision?",
        ko: "당신의 비전을 실현할 준비가 되셨나요?"
    },
    contact_text: {
        cs: "Máte dotaz, nebo chcete začít projekt? Jsme tu pro Vás.",
        en: "Have a question or want to start a project? We are here for you.",
        ko: "궁금한 점이 있거나 프로젝트를 시작하고 싶으신가요? 저희가 도와드리겠습니다."
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
                                <ButtonLink to={`services/${service.slug}`} className="mt-8 justify-center">{langBtns.more[lang]}</ButtonLink>
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
                <div className="flex flex-col flex-wrap gap-40 lg:flex-row lg:gap-4">
                    {siteConfig[lang].approach.items.map((item, i, array) => {
                        return ( 
                            <div
                                key={item.id}
                                className={`relative flex flex-col shrink-0 justify-between max-w-full w-[350px] text-center p-4 mx-auto`}
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
                                {i !== array.length - 1 && (
                                    <div className="relative transform rotate-90 lg:hidden 2xl:block 2xl:rotate-0">
                                        <img className="absolute bottom-0 top-0 -right-4 2xl:right-[-50%] 2xl:-top-24" src={ArrowDown} alt="Arrow" />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.2 }}
            >
                <h2
                    className="text-center mb-12"
                >
                    <strong>{siteConfig[lang].clients_title}</strong>
                </h2>
                <CarouselClients />
            </motion.section>
            <motion.section className="my-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.2 }}
            >
                <h2
                    className="text-center mt-12 my-3"
                >
                    <strong>{langBtns.contact_title[lang]}</strong>
                </h2>
                <p className="text-center">{langBtns.contact_text[lang]}</p>
                <ButtonLink className="my-4 justify-center text-xl" to="contact">{langBtns.contact[lang]}</ButtonLink>
            </motion.section>
        </>
    )
}

export default HomePage;