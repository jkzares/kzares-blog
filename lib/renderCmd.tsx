import About from "@/components/main/commands/About";
import Bio from "@/components/main/commands/Bio";
import Contact from "@/components/main/commands/Contact";
import Help from "@/components/main/commands/Help";
import NotFound from "@/components/main/commands/NotFound";
import Skills from "@/components/main/commands/Skills";
import { CmdHistory } from "@/types";


function renderCmd(cmd: string): CmdHistory {
	switch (cmd) {
		case "ls":
			return {
				cmd,
				Component: Help,
				time: "",
			};
		case "bio":
			return {
				cmd,
				Component: Bio,
				time: "",
			};
		case "skill":
			return {
				cmd,
				Component: Skills,
				time: "",
			};
		case "contact":
			return {
				cmd,
				Component: Contact,
				time: "",
			};
		case "about": {
			return {
				cmd,
				Component: About,
				time: "",
			};
		}
		default:
			return {
				cmd,
				Component: NotFound,
				time: "",
			};
	}
}

export default renderCmd;
