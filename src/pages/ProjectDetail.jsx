import { useParams, Navigate } from "react-router";
import { dataProjects } from "../data/projects";
import { useApp } from "../context/AppContext";
import ButtonLink from "../components/ButtonLink";

const backButton = {
    cs: "Projekty",
    en: "Projects",
    ko: "프로젝트"
};


const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const { lang } = useApp();

    const detailProject = dataProjects[lang].find(project => project.slug === projectId);

    if (!detailProject) {
        return <Navigate to="/projects" replace />;
    }

    return <article className="my-4 lg:flex lg:items-center">
        <div>
            <h3 className="text-2xl pb-2 border-b border-gray-700 w-1/2">
                <strong>{detailProject.title}</strong>
                <span className="text-xl ml-2.5">{detailProject.year}</span>
            </h3>
            <p className="mt-4">{detailProject.tags.join(' / ')}</p>
            <p className="mt-2 mb-4 text-balance leading-relaxed">{detailProject.description}</p>
            <ButtonLink to="/projects">{backButton[lang]}</ButtonLink>
        </div>
        <figure className="mt-4 lg:w-2/3 lg:ml-2">
            <img className="lg:h-dvh lg:object-cover" src={detailProject.image} alt={detailProject.title} />
        </figure>
    </article>
}

export default ProjectDetailPage;