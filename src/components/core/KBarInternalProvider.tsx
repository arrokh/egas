"use client";

import { useFullscreen } from "@mantine/hooks";
import {
	KBarAnimator,
	KBarPortal,
	KBarPositioner,
	KBarProvider,
	KBarResults,
	KBarSearch,
	useMatches,
} from "kbar";
import { useRouter } from "next/navigation";

export default function KBarInternalProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();
	const { toggle, fullscreen } = useFullscreen();

	const actions = () => [
		{
			id: "home",
			name: "Home",
			shortcut: ["h"],
			keywords: "home",
			section: "page",
			perform: () => router.push("/"),
		},
		{
			id: "flow",
			name: "Flow",
			shortcut: ["f"],
			keywords: "flow",
			section: "page",
			perform: () => router.push("/flow"),
		},
		{
			id: "dev",
			name: "Dev",
			shortcut: ["g", "t"],
			section: "util",
			perform: () =>
				window.open("https://twitter.com/nooroctaviananw", "_blank"),
		},
		{
			id: "toggle-fullscreen",
			name: "Fullscreen",
			section: "util",
			perform: toggle,
		},
	];

	return (
		<KBarProvider actions={actions()}>
			<KBarPortal>
				<KBarPositioner className="bg-black/50 backdrop-blur-sm z-50">
					<KBarAnimator className="bg-white rounded-xl shadow-xl flex flex-col gap-4 w-[35rem] overflow-hidden">
						<KBarSearch className="w-full outline-none px-6 py-4 text-black" />
						<SearchResult />
					</KBarAnimator>
				</KBarPositioner>
			</KBarPortal>
			{children}
		</KBarProvider>
	);
}

const SearchResult = () => {
	const { results } = useMatches();

	return (
		<KBarResults
			items={results}
			onRender={({ item, active }) =>
				typeof item === "string" ? (
					// Section Header
					<div className="text-xm uppercase px-4 pt-3 pb-1 text-neutral-500 font-bold">
						{item}
					</div>
				) : (
					// Single Action
					<div
						className={`text-black flex px-4 py-3 ${
							active ? "bg-[#eeeeee]" : "bg-transparent"
						}`}
					>
						{item.name}
					</div>
				)
			}
		/>
	);
};
