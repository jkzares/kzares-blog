import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import Section from "@/components/shared/Section";
import { ProjectsGradient } from "./Design";
import { roadmap } from "@/constants";
import TagLine from "@/components/shared/Tagline";
import grid from "@/public/images/grid.png"
import Image from "next/image";
import loading1 from "@/public/svg/loading-01.svg"
import check2 from "@/public/svg/check-02.svg"
import projects from "@/constants/projects";
import Link from "next/link";

const Projects = () => {    

    return <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
            <Heading tag="Ready to get started" title="What I have done before" />

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">

                {projects.map((item: any) => {
                    const status = item.status === "done" ? "Done" : "In progress";

                    return (
                        <div
                            className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                                }`}
                            key={item.id}
                        >
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <Image
                                        className="w-full"
                                        src={grid}
                                        width={550}
                                        height={550}
                                        alt="Grid"
                                    />
                                </div>

                                <div className="relative z-1">
                                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                        <TagLine>{item.date}</TagLine>

                                        <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                            <Image
                                                className="mr-2.5"
                                                src={item.status === "done" ? check2 : loading1}
                                                width={16}
                                                height={16}
                                                alt={status}
                                            />
                                            <div className="tagline">{status}</div>
                                        </div>
                                    </div>

                                    <div className="mb-10 -my-10 -mx-15 px-5  overflow-hidden my-5">
                                        <Image
                                            className="w-full rounded-xl"
                                            src={item.portrait}
                                            width={628}
                                            height={426}
                                            alt={item.title}
                                        />
                                    </div>
                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <a target="blank" href={`${item.url}`} className="relative z-10 mb-4 font-light text-color-1">{item.url}</a>
                                    <p className="body-2 text-n-4">{item.description}</p>
                                    <Button href={`/project/${item.id}`} className="my-3" white>Visit</Button>
                                </div>

                            </div>
                        </div>                       

                    );
                })}


                <ProjectsGradient />

            </div>
        </div>
    </Section>
};

export default Projects;
