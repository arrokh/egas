"use client";

import { AppShell, Burger, Group, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./layout.module.css";
import Link from "next/link";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 200,
				breakpoint: "sm",
				collapsed: { mobile: !opened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<Group justify="space-between" style={{ flex: 1 }}>
						<MantineLogo size={30} />
						<Group ml="xl" gap={0} visibleFrom="sm">
							<UnstyledButton
								className={classes.control}
								component={Link}
								href="/"
							>
								Home
							</UnstyledButton>
							<UnstyledButton className={classes.control}>About</UnstyledButton>
						</Group>
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar p="md"></AppShell.Navbar>

			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}
