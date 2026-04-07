import { useApp } from "../context/AppContext";
import { siteConfig } from "../data/siteConfig";
import { useEffect } from "react";
import { useLocation } from "react-router";

const ServicesPage = () => {
    const { lang } = useApp();
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100);
        }
    }, [hash]);

    return <>
        {siteConfig[lang].services.map(service => (
            <section key={service.id} className="py-12" id={service.id}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl mb-4 pb-2 border-b border-gray-700 w-1/2">
                    <strong>{service.title}</strong>
                </h3>
                <p className="my-4">{service.desc_long}</p>
            </section>
        ))}
    </>
}

export default ServicesPage;