import { siteConfig } from "../data/siteConfig";
import { useApp } from "../context/AppContext";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";

import LogoWhite from "../assets/Logo-scroll.png";

const footerTexts = {
    cs: {
        newsletter_text: "Přihlaste se k odběru novinek",
        newsletter_btn: "Odeslat",
        newsletter_submitting: "Odesílám...",
        newsletter_required: "E-mail je povinný",
        newsletter_error: "Neplatná e-mailová adresa",
        copyright: "©2026 Aetheria s.r.o., všechna práva vyhrazena"
    },
    en: {
        newsletter_text: "Subscribe to our newsletter",
        newsletter_btn: "Submit",
        newsletter_submitting: "Sending...",
        newsletter_required: "Email is required",
        newsletter_error: "Invalid email address",
        copyright: "©2026 Aetheria s.r.o., All rights reserved"
    },
    ko: {
        newsletter_text: "뉴스레터 구독하기",
        newsletter_btn: "보내기",
        newsletter_submitting: "보내는 중...",
        newsletter_required: "이메일 주소를 입력해주세요",
        newsletter_error: "유효하지 않은 이메일 주소입니다",
        copyright: "©2026 Aetheria s.r.o., 모든 권리 보유"
    }
}

const FooterNavigation = () => {
    const { lang, theme } = useApp();
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();


    const handleSubmitNewsletter = async (data) => {
        console.log("Odesílám...", data);

        await new Promise(resolve => setTimeout(resolve, 1000))

        console.log("Odesláno");
        reset();
    }

    const t = footerTexts[lang];

    return <footer className={`${theme === 'light' ? 'bg-[#1a1a1a]' : 'bg-[#00000030]'} p-4 mt-8`}>
        <div className="md:max-w-screen-2xl md:mx-auto py-12">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:items-start">
                <div className="flex justify-center order-1 md:order-0">
                    <Link to="/">
                        <img className="max-w-full w-40" src={LogoWhite} alt={siteConfig[lang].title} />
                    </Link>
                </div>
                <form onSubmit={handleSubmit(handleSubmitNewsletter)}>
                    <label htmlFor="email" className="text-white block">
                        {t.newsletter_text}
                    </label>
                    <input 
                        className="bg-white max-w-full w-64 my-1 mr-3.5 ml-0 px-1 py-1.5 text-xs"
                        {...register("email", {
                            required: t.newsletter_required,
                            maxLength: 50,
                            pattern: {
                                value: /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: t.newsletter_error
                            }
                        })}
                        type="email"
                        placeholder="email@example.com"
                    />
                    <input
                        className={`bg-[#5f9ea0] my-1 text-white font-medium px-2 py-0.5 w-28 ${isSubmitting ? '' : 'cursor-pointer'}`} 
                        disabled={isSubmitting}
                        type="submit"
                        value={isSubmitting ? t.newsletter_submitting : t.newsletter_btn}
                    />
                    <AnimatePresence>
                        {errors.email && (
                            <motion.p 
                                className="text-red-500"
                                initial={{ y: -5, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -5, opacity: 0 }}
                            >
                                {errors.email.type === "required"
                                ? t.newsletter_required
                                : t.newsletter_error}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </form>
            </div>
            <p className="text-white text-center mt-4">{t.copyright}</p>
        </div>
    </footer>
}

export default FooterNavigation;