import Heading from "@/components/shared/Heading";
import Section from "@/components/shared/Section";
import { AboutGradient, PhotoChatMessage } from "./Design";
import codeCube from "@/public/images/projects/image-3.png";
import Image from 'next/image'
import kzares from "@/public/images/kzares-pic.png"
import grid from "@/public/images/grid.png"

const About = () => {
    return (
        <Section id="about">
            <div className="container">
                <Heading
                    title="Here is a little background."
                    tag="Do you whant to learn about me?"
                />


                <div className="relative">

                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 pl-10">
                                <Image
                                    src={codeCube}
                                    className="h-full w-full object-cover"
                                    width={540}
                                    height={650}
                                    alt="codeCube"
                                />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4">Jorge Casares</h4>
                                <p className="body-2 mb-[3rem] text-n-3">
                                    Cuban software developer with +3 years of experience in the industry.
                                </p>
                            </div>

                            <PhotoChatMessage />
                        </div>

                        <div className="relative p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <p className="body-2 mb-[2rem] text-n-3">
                                    I am a self-taught programmer with a strong drive for continuous learning and improving my coding skills. I have experience in developing software applications and solutions independently, with a proven track record of successfully completing projects
                                </p>
                            </div>

                            <div className="relative z-10 h-[auto] rounded-xl overflow-hidden w-auto">
                                <Image
                                    src={kzares}
                                    className="w-full h-full object-cover"
                                    width={540}
                                    height={400}
                                    alt=""
                                />

                            </div>
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

                        </div>
                    </div>

                    <AboutGradient />
                </div>


            </div>
        </Section>
    );
};

export default About;
