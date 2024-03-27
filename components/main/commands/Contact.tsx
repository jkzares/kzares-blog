import { contacts } from "@/constants"

export default function Contact() {

	return (
		<div className="w-11/12 mx-auto">
			{contacts.map(({ text, value, href, Icon }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3" key={index}>
						<h1 className="text-yellow-200 w-full gap-2 max-w-[20rem] flex flex-row items-center">
							<Icon className="w-3xl" />
							{text}
						</h1>
						<a href={href} className="flex-1 underline text-blue-300 ">
							{value}
						</a>
					</div>
				);
			})}
		</div>
	);
}
