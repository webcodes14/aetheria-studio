import { useApp } from "../context/AppContext";

const errorTranslations = {
    cs: {
        title: "Ups! Něco se pokazilo",
        desc: "Pracujeme na nápravě. Zkuste to prosím později.",
        btn: "Zkusit znovu"
    },
    en: {
        title: "Whoops! Something went wrong",
        desc: "We are working on fixing the issue. Please try again later.",
        btn: "Try again"
    },
    ko: {
        title: "우와! 문제가 발생했습니다",
        desc: "문제를 해결하기 위해 노력 중입니다. 잠시 후 다시 시도해 주세요.",
        btn: "다시 시도"
    }
}

const ErrorPage = () => {
    const { lang, theme } = useApp();
    const t = errorTranslations[lang];

    return (
        <div className="flex flex-col justify-center items-center h-[70dvh] text-center px-4">
            <h1 className="text-4xl mb-4">
                <strong>{t.title}</strong>
            </h1>
            <p className="text-lg opacity-70 mb-8 max-w-md">
                {t.desc}
            </p>
            
            <button 
                onClick={() => window.location.reload()}
                className={`px-8 py-3 cursor-pointer rounded-full transition-all hover:opacity-80 
                ${theme === 'light' ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#1a1a1a]'}`}
            >
                {t.btn}
            </button>
        </div>
    );
}

export default ErrorPage;