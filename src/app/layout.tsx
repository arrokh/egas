import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import KBarInternalProvider from "@/components/core/KBarInternalProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "EGAS",
	description: "Developer assistant",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider>
					<KBarInternalProvider>{children}</KBarInternalProvider>
				</MantineProvider>
			</body>
		</html>
	);
}
