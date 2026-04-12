import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useApp } from "../context/AppContext";
import { motion, AnimatePresence } from "motion/react";

import LogoW from "../assets/Logo-scroll.png";

const formTranslation = {
    cs: {
        title: "Napište mi",
        name: "Jméno",
        email: "E-mail",
        message: "Zpráva",
        btn_send: "Odeslat zprávu",
        btn_sending: "Odesílám...",
        err_name: "Jméno musí mít aspoň 2 znaky",
        err_email: "Neplatný e-mail",
        err_msg: "Zpráva je moc krátká (min. 10 znaků)",
    },
    en: {
        title: "Contact me",
        name: "Name",
        email: "Email",
        message: "Message",
        btn_send: "Send message",
        btn_sending: "Sending...",
        err_name: "Name must be at least 2 characters",
        err_email: "Invalid email",
        err_msg: "Message is too short (min. 10 characters)",
    },
    ko: {
        title: "문의하기",
        name: "이름",
        email: "이메일",
        message: "메시지",
        btn_send: "메시지 보내기",
        btn_sending: "보내는 중...",
        err_name: "이름은 2자 이상이어야 합니다",
        err_email: "유효한 이메일을 입력해주세요",
        err_msg: "메시지가 너무 짧습니다 (최소 10자)",
    }
}

const contactSchema = z.object({
    name: z.string().trim().min(2, 'err_name').max(30),
    email: z.email('err_email').trim(),
    message: z.string().trim().min(10, 'err_msg').max(200),
    subject_alt: z.string().optional()
});

const ContactPage = () => {
    const { lang, theme } = useApp();
    const t = formTranslation[lang];

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(contactSchema)
    });

    const onSubmitData = async (data) => {
        if (data.subject_alt) {
            console.warn("Bot detected!");
            reset();
            return;
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log(data);
            reset();
        } catch(e) {
            console.error("Odeslání se nezdařilo...", e);
        }
    }

    return (
        <section className="lg:flex lg:items-center lg:gap-4">
            <div className="lg:w-1/2">
                <h3 className="relative mb-4 text-2xl">
                    <strong>{t.title}</strong>
                </h3>
                <form onSubmit={handleSubmit(onSubmitData)}>
                    <div className="my-4">
                        <input 
                            {...register('name')} 
                            placeholder={t.name}
                            className="border-b-[#8f8f8f50] border-b w-full outline-none p-1"
                        />
                        <AnimatePresence>
                            {errors.name?.message && (
                                <motion.p 
                                    className="text-red-500 ml-1"
                                    initial={{ y: -5, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -5, opacity: 0 }}
                                >
                                    {t[errors.name.message]}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="my-4">
                        <input 
                            {...register('email')} 
                            placeholder={t.email}
                            className="border-b-[#8f8f8f50] border-b w-full outline-none p-1"
                        />
                        <AnimatePresence>
                            {errors.email?.message && (
                                <motion.p 
                                    className="text-red-500 ml-1"
                                    initial={{ y: -5, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -5, opacity: 0 }}
                                >
                                    {t[errors.email.message]}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="my-4">
                        <textarea 
                            {...register('message')} 
                            placeholder={t.message}
                            className="border-b-[#8f8f8f50] border-b w-full outline-none p-1"
                        />
                        <AnimatePresence>
                            {errors.message?.message && (
                                <motion.p 
                                    className="text-red-500 ml-1"
                                    initial={{ y: -5, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -5, opacity: 0 }}
                                >
                                    {t[errors.message.message]}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="opacity-0 absolute -z-10 h-0 w-0 overflow-hidden pointer-events-none">
                        <input 
                            type="text" 
                            {...register('subject_alt')} 
                            tabIndex="-1" 
                            autoComplete="off" 
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`${theme === 'light' ? 'bg-[#1a1a1a] text-white' : 'bg-gray-300 text-[#1a1a1a]'} py-2 px-4 cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}`}
                    >
                        {isSubmitting ? t.btn_sending : t.btn_send}
                    </button>
                </form>
            </div>
            <div className={`my-4 h-[40dvh] lg:w-1/2 flex items-center justify-center lg:h-[80dvh] ${theme === 'light' ? 'bg-[#1a1a1a]' : 'bg-[#b24a4e70]'}`}>
                <img className="max-w-full" src={LogoW} alt="Aetheria Studio" />
            </div>
        </section>
    )
}

export default ContactPage;