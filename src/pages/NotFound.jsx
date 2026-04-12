import NotFound from "../assets/not-found.png"
import { useApp } from "../context/AppContext"
import { Link } from "react-router"

const pageTranslations = {
    cs: {
        error_404: "Jejda! Stránka nenalezena",
        back_home: "Zpět na hlavní stránku"
    },
    en: {
        error_404: "Oops! Page not found",
        back_home: "Back to home"
    },
    ko: {
        error_404: "이런! 페이지를 찾을 수 없습니다",
        back_home: "홈으로 돌아가기"
    }
}

const NotFoundPage = () => {
    const { lang } = useApp();

    return <div className="flex flex-col justify-center items-center h-[70dvh] px-4">
        <h3 className="text-2xl">
            <strong>{pageTranslations[lang].error_404}</strong>
        </h3>
        <p className="text-3xl"><strong>404</strong></p>
        <figure className="max-w-lg">
            <img src={NotFound} alt="Not Found Page 404" />
        </figure>
        <Link 
            to="/" 
            className="mt-4 px-6 py-2 bg-[#1a1a1a] text-white rounded-full hover:scale-105 transition-transform"
        >
            {pageTranslations[lang].back_home}
        </Link>
    </div>
    
}

export default NotFoundPage;