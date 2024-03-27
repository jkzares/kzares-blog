import { GoVerified } from "react-icons/go";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import profilePic from "@/public/images/kzares-pic.png"

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/kzares-dev",
			text: "@kzares-dev",
		},
		
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<Image
					src={profilePic}
					alt=""
					className="w-40 h-40 object-cover rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Jorge A. Casares</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world { new Date().getFullYear() - 2004 } years ago.</p>
				</div>
			</div>
			<p>
			Hello! 🌟 As a dynamic developer well-versed in a spectrum of backend and frontend technologies, I seamlessly navigate the realms of software creation. My proficiency extends to the cloud domain, specifically Azure, where I harness the power of cloud computing to craft innovative solutions. With a wealth of experience in seamless integration and the orchestration of continuous development and integration practices, I thrive in the ever-evolving landscape of technology. I'm fueled by a passion for crafting robust and scalable systems that not only meet but exceed expectations 💻✨	

			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
