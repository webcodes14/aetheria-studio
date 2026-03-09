import { siteConfig } from "../data/siteConfig";
import { useApp } from "../context/AppContext";

import ButtonLink from "../components/ButtonLink";
import ImageSlider from "../components/ImageSlider";

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
    const { lang } = useApp();

    return (
        <>
            <section className="my-8 md:flex md:gap-4">
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
            </section>
            <section>

            </section>
        </>
    )
}

export default HomePage;