import Section from "@/components/shared/Section"
import Image from "next/image"
import grid from "@/public/images/grid.png"
import { BackgroundCircles, ProjectsGradient } from "@/components/sections/home/Design"
import Heading from "@/components/shared/Heading"
import { useGetProject } from "@/lib/actions/portfolio.action";
import robot from "@/public/images/robot.jpg";


const Project = async ({ params }: { params: { id: string } }) => {

    const project = await useGetProject(params.id);

    return (
        <Section className="w-full min-h-[100vh] pt-20">
            <div className="relative container md:pb-10">

                <div className="absolute top-0 left-0 w-full">
                    <Image
                        className="w-full"
                        src={grid}
                        width={100}
                        height={100}
                        objectFit="cover"
                        alt="Grid"
                    />
                </div>

                <Heading tag={`Case study no ${project.id}`} title={project?.title} />

                {project.content.map((data: { picture: boolean, text?: string, url?: string }) => {

                    if (data.picture) {
                        return (
                            <div className="relative w-full my-4 mx-auto md:max-w-5xl xl:mb-24">
                                <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                                    <div className="relative bg-n-8 rounded-[1rem] overflow-hidden ">

                                        <div>
                                            <Image
                                                src={data.url}
                                                className="w-full "
                                                width={1024}
                                                height={490}
                                                alt=""
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <p className="body-1 max-w-4xl mx-auto mb-6 text-n-2 lg:mb-8">
                                "{data.text}"
                            </p>
                        )
                    }

                })}
                <BackgroundCircles />


                <ProjectsGradient />
            </div>


        </Section>
    )
}

export default Project