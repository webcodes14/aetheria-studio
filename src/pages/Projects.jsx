import { useEffect, useRef, useState } from "react";
import { useApp } from "../context/AppContext";
import { dataProjects } from "../data/projects";
import { motion, useScroll, useTransform } from "motion/react";

import ButtonLink from "../components/ButtonLink";

const projectsText = {
    cs: {
        page_title: "Projekty",
        project_btn: "Prohlédnout projekt"
    },
    en: {
        page_title: "Projects",
        project_btn: "View Project"
    },
    ko: {
        page_title: "프로젝트",
        project_btn: "프로젝트 보기"
    }
}

const ProjectsPage = () => {
    const { lang } = useApp();
    const [ isDesktop, setIsDesktop ] = useState(false);
    const t = dataProjects[lang];
    const projectsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: projectsRef,
    });
    const xLastPosition = (t.length - 1) * -100;
    const x = useTransform(scrollYProgress, [ 0, 1 ], [ "0%", `${xLastPosition}%` ]);

    useEffect(() => {
        const checkDeviceWidth = () => setIsDesktop(window.innerWidth >= 1024);
        checkDeviceWidth();

        window.addEventListener('resize', checkDeviceWidth);
        return () => window.removeEventListener('resize', checkDeviceWidth);
    }, [])

    return (
        <section className="relative mt-8" aria-labelledby="projects-title">
            <h2 id="projects-title" className="relative mb-4">
                <strong>{projectsText[lang].page_title}</strong>
            </h2>
            <motion.div layout ref={projectsRef} className="relative lg:h-[300vh]">
                <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
                    <motion.ul style={ isDesktop ? { x } : ''} className="lg:flex lg:h-full" layout>
                        {t.map(project => (
                            <li key={project.id} className="my-4 lg:shrink-0 w-full lg:relative lg:h-full lg:my-0">
                                <article className="lg:h-full">
                                    <figure className="lg:brightness-50 lg:h-full">
                                        <img className="lg:h-full lg:w-full lg:object-cover" src={project.image} alt={project.title} loading="lazy" />
                                    </figure>
                                    <div className="lg:absolute lg:bottom-1/6 lg:left-1/12 lg:right-1/12 lg:text-white">
                                        <h3 className="mt-4 mb-2 mx-auto text-2xl">
                                            <strong>
                                                {project.title}
                                            </strong>
                                            <span className="text-xs"> {project.year}</span>
                                        </h3>
                                        <p>
                                            {project.tags.join(' / ')}
                                        </p>
                                        <p className="mt-2 mb-4 mx-auto text-balance">{project.description}</p>
                                        <ButtonLink to={project.slug}>{projectsText[lang].project_btn}</ButtonLink>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </motion.div>
        </section>
    )
}

export default ProjectsPage;