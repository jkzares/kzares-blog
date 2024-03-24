"use client";
import { ScrollParallax } from "react-just-parallax";
import Image from "next/image";
import { useRef } from "react";
import { BackgroundCircles, BottomLine, Gradient } from "./Design";
import Button from "@/components/shared/Button";
import curve from "@/public/images/curve.png";
import robot from "@/public/images/robot.jpg";
import Generating from "./Generating";
import Notification from "./Notification";
import Section from "@/components/shared/Section";


const Hero = () => {
    const parallaxRef = useRef(null);

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
        >
            <div className="container relative" ref={parallaxRef}>

                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        {"<"}Indulging in code creation, fueled by aromatic {` `}
                        <span className="inline-block relative">
                            coffee{" /> "}
                            <Image
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />

                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        "Programs must be written for people to read, and only incidentally for machines to execute." - Harold Abelson
                    </p>
                    <Button href="/pricing" white>
                        Projects{"    "}
                    </Button>
                </div>

                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <Image
                                    src={robot}
                                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                                    width={1024}
                                    height={490}
                                    alt="AI"
                                />

                                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                                {/*-- This are paralax floating elements, made with react-just paralaz library --*/}
                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="cursor-pointer z-10 hidden absolute -right-[5.5rem] bottom-[7.5rem] px-4 py-4 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex gap-3">
                                        <div className="bg-white rounded-full overflow-hidden">
                                            <Image src="/svg/github.svg" alt="" width={30} height={40} />
                                        </div>
                                        <a href="https://github.com/kzares-dev" className="font-grotesk"> github.com/kzares-dev </a>
                                    </ul>
                                </ScrollParallax>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification
                                        className="hidden absolute -left-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                                        title="Let's connect"
                                    />
                                </ScrollParallax>

                            </div>
                        </div>

                        <Gradient />
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">

                    </div>

                    <BackgroundCircles />
                </div>

                <h5 className="tagline mb-6 text-center text-n-1/50">
                    If you can imagine it, you can program it.
                </h5>
            </div>

            <BottomLine />
        </Section>
    );
};

export default Hero;
