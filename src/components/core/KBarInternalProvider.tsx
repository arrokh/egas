"use client";

import {
	KBarAnimator,
	KBarPortal,
	KBarPositioner,
	KBarProvider,
	KBarSearch,
} from "kbar";

export default function KBarInternalProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const actions = [
		{
			id: "blog",
			name: "Blog",
			shortcut: ["b"],
			keywords: "writing words",
			perform: () => (window.location.pathname = "blog"),
		},
		{
			id: "contact",
			name: "Contact",
			shortcut: ["c"],
			keywords: "email",
			perform: () => (window.location.pathname = "contact"),
		},
		{
			id: "twiter",
			name: "Twitter",
			shortcut: ["g", "t"],
			perform: () => window.open("https://twitter.com/jack", "_blank"),
		},
	];

	return (
		<KBarProvider actions={actions}>
			<KBarPortal>
				<KBarPositioner className="bg-black/50 backdrop-blur-sm">
					<KBarAnimator>
						<KBarSearch />
					</KBarAnimator>
				</KBarPositioner>
			</KBarPortal>
			{children}
		</KBarProvider>
	);
}
